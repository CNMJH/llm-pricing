#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
大模型 API 价格自动更新脚本
============================
数据源策略（"两者结合"）：
  1. OpenRouter Models API 作为权威数据源（可靠、准确、覆盖全部目标模型）。
  2. 官方定价页作为兜底：仅当 OpenRouter 不可用时，才用各厂商官方页面抓取
     （OpenAI / Anthropic / Google / DeepSeek）。
  3. 最终合并写入 data.js。

说明：
  - OpenRouter 的 pricing 单位是「美元 / 每 token」，这里统一换算成「美元 / 每百万 tokens」。
    页面展示时按 fetch_exchange_rate() 获取的实时汇率换算成人民币（CNY）。
  - 官方页面多为 JS 渲染（OpenAI / Anthropic 会被拦截），简单抓取可能返回 0 或错误值，
    因此不作为主动数据源，仅作离线兜底。
  - 覆盖厂商：Anthropic / OpenAI / Google Gemini / DeepSeek / 智谱 / 千问 / Kimi / MiniMax。
  - 只更新 TARGET_IDS / 旧数据里已有的模型，保留手工维护的中文名、备注、徽章。

用法：
  python update_prices.py            # 更新 data.js
  python update_prices.py --dry-run  # 只打印概要，不落盘

依赖：仅 Python 标准库（urllib），无需 pip install。
"""
import json
import os
import re
import sys
import urllib.request
from datetime import datetime, timezone

BASE_DIR = os.path.dirname(os.path.abspath(__file__))
DATA_FILE = os.path.join(BASE_DIR, "data.js")

# (OpenRouter 前缀, data.js 厂商 id, 显示名)
PROVIDER_MAP = [
    ("anthropic", "anthropic", "Anthropic Claude"),
    ("openai", "openai", "OpenAI"),
    ("google", "gemini", "Google Gemini"),
    ("deepseek", "deepseek", "DeepSeek"),
    ("z-ai", "zhipu", "智谱 AI"),
    ("qwen", "qwen", "千问 (通义)"),
    ("moonshotai", "kimi", "Kimi (月之暗面)"),
    ("minimax", "minimax", "MiniMax"),
]
# 新厂商的展示元数据（脚本兜底时使用；data.js 里已有则优先保留 data.js 的）
PROVIDER_META = {
    "zhipu": {"name": "智谱 AI", "short": "GLM", "color": "#26a5e4", "site": "https://open.bigmodel.cn/pricing"},
    "qwen": {"name": "千问 (通义)", "short": "Qwen", "color": "#ff6a00", "site": "https://www.alibabacloud.com/help/en/model-studio/models"},
    "kimi": {"name": "Kimi (月之暗面)", "short": "Kimi", "color": "#e53835", "site": "https://platform.moonshot.cn/docs/pricing"},
    "minimax": {"name": "MiniMax", "short": "MiniMax", "color": "#7c3aed", "site": "https://www.minimax.io/platform/pricing"},
}
# 各厂商希望保留的模型 api（与 data.js 的 api 字段一致，去掉厂商前缀）。
# 留空 [] 表示该厂商保留旧数据里已有的全部模型。
TARGET_IDS = {
    "anthropic": [
        "claude-fable-5", "claude-opus-5", "claude-sonnet-5",
        "claude-haiku-4.5", "claude-opus-4.8", "claude-sonnet-4.6",
    ],
    "openai": [
        "gpt-5.6-sol", "gpt-5.6-terra", "gpt-5.6-luna",
        "gpt-5.5", "gpt-5.5-pro", "gpt-5.4", "gpt-5.4-mini",
        "gpt-5.4-nano", "gpt-5.2", "gpt-5.1", "gpt-5",
        "gpt-5-mini", "gpt-5-nano", "gpt-5-pro",
        "gpt-4.1", "gpt-4.1-mini", "gpt-4o", "gpt-4o-mini",
        "o3", "o4-mini", "o1",
    ],
    "gemini": [
        "gemini-3.6-flash", "gemini-3.5-flash", "gemini-3.5-flash-lite",
        "gemini-3.1-flash-lite", "gemini-3.1-pro-preview", "gemini-3-flash-preview",
        "gemini-2.5-pro", "gemini-2.5-flash", "gemini-2.5-flash-lite",
    ],
    "deepseek": [
        "deepseek-v4-flash", "deepseek-v4-pro",
    ],
    "zhipu": [
        "glm-5.2", "glm-5.1", "glm-5", "glm-4.7", "glm-4.7-flash",
        "glm-4.6", "glm-4.5", "glm-4.5-air",
    ],
    "qwen": [
        "qwen3.7-max", "qwen3.7-plus", "qwen3.7-flash",
        "qwen3.6-max-preview", "qwen3.6-plus", "qwen3.6-flash",
        "qwen3-max", "qwen3-coder", "qwen-plus",
    ],
    "kimi": [
        "kimi-k3", "kimi-k2.7-code", "kimi-k2.6", "kimi-k2.5",
        "kimi-k2-thinking", "kimi-k2",
    ],
    "minimax": [
        "minimax-m3", "minimax-m2.7", "minimax-m2.5", "minimax-m2.1",
        "minimax-m2", "minimax-m1",
    ],
}

# 官方定价页（尽力抓取；失败则回退到 OpenRouter）
OFFICIAL_URLS = {
    "openai": "https://developers.openai.com/api/docs/pricing",
    "anthropic": "https://platform.claude.com/docs/en/about-claude/pricing",
    "gemini": "https://ai.google.dev/gemini-api/docs/pricing",
    "deepseek": "https://api-docs.deepseek.com/quick_start/pricing",
}

UA = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0 Safari/537.36"


def fetch(url, timeout=20):
    req = urllib.request.Request(url, headers={"User-Agent": UA, "Accept": "*/*"})
    with urllib.request.urlopen(req, timeout=timeout) as r:
        return r.read().decode("utf-8", errors="replace")


def parse_float(s):
    if not s:
        return None
    m = re.search(r"[\d]+(?:\.\d+)?", str(s).replace(",", ""))
    return float(m.group(0)) if m else None


def fetch_exchange_rate():
    """获取 USD->CNY 实时汇率（用于把美元价格换算成人民币显示）。"""
    data = json.loads(fetch("https://open.er-api.com/v6/latest/USD", timeout=20))
    cny = data.get("rates", {}).get("CNY")
    if not cny:
        raise ValueError("汇率接口未返回 CNY")
    return round(float(cny), 4)


# ---------- 官方页面解析（尽力而为；官方价格已是 美元/每百万 tokens） ----------
def official_openai(html):
    """OpenAI 定价页：'id' 与 '$X / $Y' 形式。返回 {api: (input, output)} 或 None。"""
    out = {}
    for m in re.finditer(r"([a-z0-9][\w.\-]*)\s*\$(\d+(?:\.\d+)?)\s*/\s*\$(\d+(?:\.\d+)?)", html):
        api, inp, outp = m.group(1), parse_float(m.group(2)), parse_float(m.group(3))
        if inp is not None and outp is not None:
            out[api] = (inp, outp)
    return out or None


def official_anthropic(html):
    """Anthropic 定价页：'Claude <name> | $X | ... | $Y'。返回 {api: (input, output)} 或 None。"""
    out = {}
    for m in re.finditer(r"Claude\s+([A-Za-z0-9. ]+?)\s*\|\s*\$([\d.]+)\s*/?\s*MTok.*?\|\s*\$([\d.]+)\s*/?\s*MTok", html, re.S):
        name = " ".join(m.group(1).split())
        inp, outp = parse_float(m.group(2)), parse_float(m.group(3))
        if inp is not None and outp is not None:
            key = "claude-" + name.lower().replace(" ", "-")
            out[key] = (inp, outp)
    return out or None


def official_google(html):
    """Gemini 定价页：'id' 与 '$X 输入 / $Y 输出'。返回 {api: (input, output)} 或 None。"""
    out = {}
    for m in re.finditer(r"([\w.\-]+)\s*[-–]\s*\$([\d.]+).*?init.*?\$([\d.]+)", html, re.I | re.S):
        api, inp, outp = m.group(1), parse_float(m.group(2)), parse_float(m.group(3))
        if inp is not None and outp is not None:
            out[api] = (inp, outp)
    return out or None


def official_deepseek(html):
    """DeepSeek 定价页：返回 {api: (input, output)}，取缓存未命中输入价。"""
    out = {}
    for m in re.finditer(r"(deepseek-v[\w.\-]+)\s*[^\n]*?\$([\d.]+)[^\n]*?\$([\d.]+)", html, re.I):
        api, inp, outp = m.group(1), parse_float(m.group(2)), parse_float(m.group(3))
        if inp is not None and outp is not None:
            out[api] = (inp, outp)
    return out or None


OFFICIAL_PARSERS = {
    "openai": official_openai,
    "anthropic": official_anthropic,
    "google": official_google,
    "deepseek": official_deepseek,
}


# ---------- OpenRouter 兜底 ----------
def fetch_openrouter():
    """返回 {data.js厂商id: {api: (input_MTok, output_MTok)}}。OpenRouter 价格是每 token，需 ×1e6。"""
    data = json.loads(fetch("https://openrouter.ai/api/v1/models", timeout=30))
    result = {}
    for model in data.get("data", []):
        mid = model.get("id", "")
        pricing = model.get("pricing", {}) or {}
        inp = parse_float(pricing.get("prompt"))
        outp = parse_float(pricing.get("completion"))
        if inp is None or outp is None:
            continue
        for or_prefix, dpid, _label in PROVIDER_MAP:
            if mid.startswith(or_prefix + "/"):
                api = mid.split("/", 1)[1]
                result.setdefault(dpid, {})[api] = (round(inp * 1e6, 4), round(outp * 1e6, 4))
                break
    return result


def main():
    dry_run = "--dry-run" in sys.argv

    # 2) OpenRouter 作为权威数据源（可靠、准确，覆盖全部目标模型）
    try:
        or_data = fetch_openrouter()
        print(f"[openrouter] 拉取成功，共 {sum(len(v) for v in or_data.values())} 个模型")
        authoritative = or_data
    except Exception as e:
        print(f"[openrouter] 失败({type(e).__name__}: {e})，回退到官方页面抓取")
        authoritative = {}

    # 1) 官方抓取为兜底：仅当 OpenRouter 不可用时才使用（key 用 data.js 厂商 id）
    official = {}
    for or_prefix, dpid, _label in PROVIDER_MAP:
        if dpid not in OFFICIAL_PARSERS or dpid not in OFFICIAL_URLS:
            official[dpid] = {}
            continue
        try:
            html = fetch(OFFICIAL_URLS[dpid])
            parsed = OFFICIAL_PARSERS[dpid](html)
            official[dpid] = parsed or {}
            print(f"[official] {dpid:10s} -> {len(official[dpid])} 个模型")
        except Exception as e:
            print(f"[official] {dpid:10s} -> 失败({type(e).__name__})，跳过")
            official[dpid] = {}

    # 3) 合并：OpenRouter 优先，官方仅填补 OpenRouter 缺失的模型
    merged = {}
    for or_prefix, dpid, _label in PROVIDER_MAP:
        merged[dpid] = dict(authoritative.get(dpid) or {})
        for api, v in (official.get(dpid) or {}).items():
            if api not in merged[dpid]:
                merged[dpid][api] = v

    # 4) 读旧数据，合并写入
    old = load_old_data()
    updated = update_providers(old, merged)
    updated["updatedAt"] = datetime.now(timezone.utc).astimezone().strftime("%Y-%m-%d")

    # 5) 汇率（USD->CNY），失败则沿用旧值
    try:
        rate = fetch_exchange_rate()
        print(f"[rate]     USD->CNY = {rate}")
    except Exception as e:
        print(f"[rate]     获取失败({type(e).__name__})，沿用旧值")
        rate = old.get("cnyRate")
    if rate:
        updated["cnyRate"] = rate

    if dry_run:
        print("\n===== DRY RUN：即将写入的概要 =====")
        for p in updated["providers"]:
            print(f"  {p['name']}: {len(p['models'])} 个模型")
        print(f"  updatedAt = {updated['updatedAt']}")
        print(f"  cnyRate   = {updated.get('cnyRate')}")
        return

    write_data(updated)


def load_old_data():
    if not os.path.exists(DATA_FILE):
        return {"providers": []}
    try:
        with open(DATA_FILE, "r", encoding="utf-8") as f:
            text = f.read()
        m = re.search(r"window\.PRICING_DATA\s*=\s*(\{.*\});", text, re.S)
        return json.loads(m.group(1)) if m else {"providers": []}
    except Exception:
        return {"providers": []}


def update_providers(old, merged):
    """合并价格回老结构：保留手工维护的名称/备注/徽章，只更新价格。
    只保留 TARGET_IDS 提及或旧数据里已有的模型，避免 OpenRouter 杂项模型涌入。"""
    providers = []
    for or_prefix, dpid, _label in PROVIDER_MAP:
        old_provider = next((p for p in old.get("providers", []) if p.get("id") == dpid), None)
        old_models = (old_provider or {}).get("models", [])
        targets = TARGET_IDS.get(dpid) or []

        # 保留的模型集合 = 旧数据已有 + 目标列表里新增的
        keep = {}
        for m in old_models:
            keep[m.get("api")] = m
        for t in targets:
            if t not in keep:
                keep[t] = {"api": t, "name": pretty_name(t)}

        models = []
        for api, m in keep.items():
            price = merged[dpid].get(api)
            if price:
                m["input"], m["output"] = round(price[0], 4), round(price[1], 4)
            elif m.get("input") is None:
                continue  # 目标里新增但 OpenRouter 未收录，跳过
            models.append(m)

        if old_provider:
            base = dict(old_provider)
            base.pop("models", None)
        else:
            meta = PROVIDER_META.get(dpid, {})
            base = {
                "id": dpid,
                "name": meta.get("name", _label),
                "short": meta.get("short", _label.split()[-1]),
                "color": meta.get("color", "#888"),
                "site": meta.get("site", ""),
            }
        base["models"] = models
        providers.append(base)
    return {"providers": providers}


def pretty_name(api):
    parts = api.replace("_", " ").replace("-", " ").split()
    return " ".join(w.capitalize() for w in parts)


def write_data(updated):
    blob = json.dumps(updated, ensure_ascii=False, indent=2)
    # 仅当价格有实质变化时才重写文件（避免每次提交产生无意义 diff）
    old = load_old_data()
    if (same_models(old.get("providers", []), updated.get("providers", []))
            and old.get("updatedAt") == updated.get("updatedAt")
            and old.get("cnyRate") == updated.get("cnyRate")):
        print("数据无变化，跳过写入。")
        return
    with open(DATA_FILE, "w", encoding="utf-8") as f:
        f.write("/* 由 update_prices.py 自动生成 —— 请勿手动编辑此文件。\n   价格单位：美元 / 每百万 tokens（US$ / MTok）。 */\n")
        f.write("window.PRICING_DATA = " + blob + ";\n")
    print(f"有变化，已写入 {DATA_FILE}，updatedAt = {updated.get('updatedAt')}")


def same_models(a, b):
    if len(a) != len(b):
        return False
    for pa, pb in zip(a, b):
        if pa.get("id") != pb.get("id"):
            return False
        pa_sig = [(m.get("api"), m.get("input"), m.get("output")) for m in pa.get("models", [])]
        pb_sig = [(m.get("api"), m.get("input"), m.get("output")) for m in pb.get("models", [])]
        if pa_sig != pb_sig:
            return False
    return True


if __name__ == "__main__":
    main()