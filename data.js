/* 由 update_prices.py 自动生成 —— 请勿手动编辑此文件。
   价格单位：美元 / 每百万 tokens（US$ / MTok）。 */
window.PRICING_DATA = {
  "providers": [
    {
      "id": "anthropic",
      "name": "Anthropic Claude",
      "short": "Claude",
      "color": "#d97757",
      "site": "https://claude.com/pricing",
      "models": [
        {
          "name": "Claude Fable 5",
          "api": "claude-fable-5",
          "input": 10.0,
          "output": 50.0,
          "ctx": "1M",
          "badge": "最强",
          "note": "最高能力模型，自适应思考常开。"
        },
        {
          "name": "Claude Opus 5",
          "api": "claude-opus-5",
          "input": 5.0,
          "output": 25.0,
          "ctx": "1M",
          "badge": "旗舰",
          "note": "复杂智能体编码与企业工作负载。"
        },
        {
          "name": "Claude Sonnet 5",
          "api": "claude-sonnet-5",
          "input": 2.0,
          "output": 10.0,
          "ctx": "1M",
          "badge": "优惠",
          "flag": true,
          "note": "推广价 $2/$10 至 2026-08-31，之后恢复 $3/$15。"
        },
        {
          "name": "Claude Haiku 4.5",
          "api": "claude-haiku-4.5",
          "input": 1.0,
          "output": 5.0,
          "ctx": "200K",
          "badge": "最快",
          "note": "速度最快，接近前沿的智能。"
        },
        {
          "name": "Claude Opus 4.8",
          "api": "claude-opus-4.8",
          "input": 5.0,
          "output": 25.0,
          "ctx": "1M",
          "badge": "前代旗舰"
        },
        {
          "name": "Claude Sonnet 4.6",
          "api": "claude-sonnet-4.6",
          "input": 3.0,
          "output": 15.0,
          "ctx": "1M"
        }
      ]
    },
    {
      "id": "openai",
      "name": "OpenAI",
      "short": "GPT",
      "color": "#10a37f",
      "site": "https://openai.com/api/pricing/",
      "models": [
        {
          "name": "GPT-5.6 Sol",
          "api": "gpt-5.6-sol",
          "input": 5.0,
          "output": 30.0,
          "ctx": "—",
          "badge": "新一代"
        },
        {
          "name": "GPT-5.6 Terra",
          "api": "gpt-5.6-terra",
          "input": 1.0,
          "output": 6.0,
          "ctx": "—"
        },
        {
          "name": "GPT-5.6 Luna",
          "api": "gpt-5.6-luna",
          "input": 0.1,
          "output": 0.6,
          "ctx": "—",
          "badge": "轻量"
        },
        {
          "name": "GPT-5.5",
          "api": "gpt-5.5",
          "input": 5.0,
          "output": 30.0,
          "ctx": "—",
          "badge": "旗舰"
        },
        {
          "name": "GPT-5.5 Pro",
          "api": "gpt-5.5-pro",
          "input": 30.0,
          "output": 180.0,
          "ctx": "—",
          "badge": "顶级",
          "flag": true
        },
        {
          "name": "GPT-5.4",
          "api": "gpt-5.4",
          "input": 2.5,
          "output": 15.0,
          "ctx": "—"
        },
        {
          "name": "GPT-5.4 mini",
          "api": "gpt-5.4-mini",
          "input": 0.75,
          "output": 4.5,
          "ctx": "—"
        },
        {
          "name": "GPT-5.4 nano",
          "api": "gpt-5.4-nano",
          "input": 0.2,
          "output": 1.25,
          "ctx": "—",
          "badge": "轻量"
        },
        {
          "name": "GPT-5.2",
          "api": "gpt-5.2",
          "input": 1.75,
          "output": 14.0,
          "ctx": "—"
        },
        {
          "name": "GPT-5.1",
          "api": "gpt-5.1",
          "input": 1.25,
          "output": 10.0,
          "ctx": "—"
        },
        {
          "name": "GPT-5",
          "api": "gpt-5",
          "input": 1.25,
          "output": 10.0,
          "ctx": "—",
          "badge": "经典"
        },
        {
          "name": "GPT-5 mini",
          "api": "gpt-5-mini",
          "input": 0.25,
          "output": 2.0,
          "ctx": "—",
          "badge": "轻量"
        },
        {
          "name": "GPT-5 nano",
          "api": "gpt-5-nano",
          "input": 0.05,
          "output": 0.4,
          "ctx": "—",
          "badge": "最便宜"
        },
        {
          "name": "GPT-5 Pro",
          "api": "gpt-5-pro",
          "input": 15.0,
          "output": 120.0,
          "ctx": "—",
          "badge": "顶级",
          "flag": true
        },
        {
          "name": "GPT-4.1",
          "api": "gpt-4.1",
          "input": 2.0,
          "output": 8.0,
          "ctx": "1M"
        },
        {
          "name": "GPT-4.1 mini",
          "api": "gpt-4.1-mini",
          "input": 0.4,
          "output": 1.6,
          "ctx": "1M"
        },
        {
          "name": "GPT-4o",
          "api": "gpt-4o",
          "input": 2.5,
          "output": 10.0,
          "ctx": "128K"
        },
        {
          "name": "GPT-4o mini",
          "api": "gpt-4o-mini",
          "input": 0.15,
          "output": 0.6,
          "ctx": "128K"
        },
        {
          "name": "o3",
          "api": "o3",
          "input": 2.0,
          "output": 8.0,
          "ctx": "—",
          "badge": "推理"
        },
        {
          "name": "o4-mini",
          "api": "o4-mini",
          "input": 1.1,
          "output": 4.4,
          "ctx": "—",
          "badge": "推理"
        },
        {
          "name": "o1",
          "api": "o1",
          "input": 15.0,
          "output": 60.0,
          "ctx": "—",
          "badge": "推理"
        }
      ]
    },
    {
      "id": "gemini",
      "name": "Google Gemini",
      "short": "Gemini",
      "color": "#4285f4",
      "site": "https://ai.google.dev/gemini-api/docs/pricing",
      "models": [
        {
          "name": "Gemini 3.6 Flash",
          "api": "gemini-3.6-flash",
          "input": 1.5,
          "output": 7.5,
          "ctx": "1M",
          "badge": "最新"
        },
        {
          "name": "Gemini 3.5 Flash",
          "api": "gemini-3.5-flash",
          "input": 1.5,
          "output": 9.0,
          "ctx": "1M"
        },
        {
          "name": "Gemini 3.5 Flash-Lite",
          "api": "gemini-3.5-flash-lite",
          "input": 0.3,
          "output": 2.5,
          "ctx": "1M",
          "badge": "轻量"
        },
        {
          "name": "Gemini 3.1 Flash-Lite",
          "api": "gemini-3.1-flash-lite",
          "input": 0.25,
          "output": 1.5,
          "ctx": "1M"
        },
        {
          "name": "Gemini 3.1 Pro",
          "api": "gemini-3.1-pro-preview",
          "input": 2.0,
          "output": 12.0,
          "ctx": "1M",
          "badge": "旗舰"
        },
        {
          "name": "Gemini 3 Flash",
          "api": "gemini-3-flash-preview",
          "input": 0.5,
          "output": 3.0,
          "ctx": "1M"
        },
        {
          "name": "Gemini 2.5 Pro",
          "api": "gemini-2.5-pro",
          "input": 1.25,
          "output": 10.0,
          "ctx": "1M"
        },
        {
          "name": "Gemini 2.5 Flash",
          "api": "gemini-2.5-flash",
          "input": 0.3,
          "output": 2.5,
          "ctx": "1M"
        },
        {
          "name": "Gemini 2.5 Flash-Lite",
          "api": "gemini-2.5-flash-lite",
          "input": 0.1,
          "output": 0.4,
          "ctx": "1M",
          "badge": "最便宜"
        }
      ]
    },
    {
      "id": "deepseek",
      "name": "DeepSeek",
      "short": "DeepSeek",
      "color": "#4d6bfe",
      "site": "https://api-docs.deepseek.com/quick_start/pricing",
      "note": "表格为输入价（缓存未命中）与输出价。缓存命中输入价极低：V4-Flash $0.0028 / V4-Pro $0.003625。",
      "models": [
        {
          "name": "DeepSeek V4-Flash",
          "api": "deepseek-v4-flash",
          "input": 0.14,
          "output": 0.28,
          "ctx": "1M",
          "badge": "便宜",
          "note": "1M 上下文，384K 最大输出，默认思考模式。"
        },
        {
          "name": "DeepSeek V4-Pro",
          "api": "deepseek-v4-pro",
          "input": 0.435,
          "output": 0.87,
          "ctx": "1M",
          "badge": "旗舰",
          "note": "1M 上下文，384K 最大输出。"
        }
      ]
    }
  ],
  "updatedAt": "2026-08-03"
};
