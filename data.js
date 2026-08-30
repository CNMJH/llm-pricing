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
          "ctx": "195K",
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
          "input": 2.0,
          "output": 10.0,
          "ctx": "1M",
          "badge": "新一代"
        },
        {
          "name": "GPT-5.6 Terra",
          "api": "gpt-5.6-terra",
          "input": 2.0,
          "output": 12.0,
          "ctx": "1M"
        },
        {
          "name": "GPT-5.6 Luna",
          "api": "gpt-5.6-luna",
          "input": 0.2,
          "output": 1.2,
          "ctx": "1M",
          "badge": "轻量"
        },
        {
          "name": "GPT-5.5",
          "api": "gpt-5.5",
          "input": 5.0,
          "output": 30.0,
          "ctx": "1M",
          "badge": "旗舰"
        },
        {
          "name": "GPT-5.5 Pro",
          "api": "gpt-5.5-pro",
          "input": 30.0,
          "output": 180.0,
          "ctx": "1M",
          "badge": "顶级",
          "flag": true
        },
        {
          "name": "GPT-5.4",
          "api": "gpt-5.4",
          "input": 2.5,
          "output": 15.0,
          "ctx": "1M"
        },
        {
          "name": "GPT-5.4 mini",
          "api": "gpt-5.4-mini",
          "input": 0.75,
          "output": 4.5,
          "ctx": "391K"
        },
        {
          "name": "GPT-5.4 nano",
          "api": "gpt-5.4-nano",
          "input": 0.2,
          "output": 1.25,
          "ctx": "391K",
          "badge": "轻量"
        },
        {
          "name": "GPT-5.2",
          "api": "gpt-5.2",
          "input": 1.75,
          "output": 14.0,
          "ctx": "391K"
        },
        {
          "name": "GPT-5.1",
          "api": "gpt-5.1",
          "input": 1.25,
          "output": 10.0,
          "ctx": "391K"
        },
        {
          "name": "GPT-5",
          "api": "gpt-5",
          "input": 1.25,
          "output": 10.0,
          "ctx": "391K",
          "badge": "经典"
        },
        {
          "name": "GPT-5 mini",
          "api": "gpt-5-mini",
          "input": 0.25,
          "output": 2.0,
          "ctx": "391K",
          "badge": "轻量"
        },
        {
          "name": "GPT-5 nano",
          "api": "gpt-5-nano",
          "input": 0.05,
          "output": 0.4,
          "ctx": "391K",
          "badge": "最便宜"
        },
        {
          "name": "GPT-5 Pro",
          "api": "gpt-5-pro",
          "input": 15.0,
          "output": 120.0,
          "ctx": "391K",
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
          "ctx": "125K"
        },
        {
          "name": "GPT-4o mini",
          "api": "gpt-4o-mini",
          "input": 0.15,
          "output": 0.6,
          "ctx": "125K"
        },
        {
          "name": "o3",
          "api": "o3",
          "input": 2.0,
          "output": 8.0,
          "ctx": "195K",
          "badge": "推理"
        },
        {
          "name": "o4-mini",
          "api": "o4-mini",
          "input": 1.1,
          "output": 4.4,
          "ctx": "195K",
          "badge": "推理"
        },
        {
          "name": "o1",
          "api": "o1",
          "input": 15.0,
          "output": 60.0,
          "ctx": "195K",
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
          "input": 0.75,
          "output": 3.75,
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
          "input": 0.0792,
          "output": 0.1585,
          "ctx": "1M",
          "badge": "便宜",
          "note": "1M 上下文，384K 最大输出，默认思考模式。"
        },
        {
          "name": "DeepSeek V4-Pro",
          "api": "deepseek-v4-pro",
          "input": 0.4173,
          "output": 0.8345,
          "ctx": "1M",
          "badge": "旗舰",
          "note": "1M 上下文，384K 最大输出。"
        }
      ]
    },
    {
      "id": "zhipu",
      "name": "智谱 AI",
      "short": "GLM",
      "color": "#26a5e4",
      "site": "https://open.bigmodel.cn/pricing",
      "currency": "USD",
      "note": "⚠ 价格为 OpenRouter 国际代理价，非官方直连价，仅供参考。",
      "unofficial": true,
      "models": [
        {
          "api": "glm-5.2",
          "name": "GLM-5.2",
          "input": 1.19,
          "output": 3.74,
          "ctx": "1M"
        },
        {
          "api": "glm-5.1",
          "name": "GLM-5.1",
          "input": 0.966,
          "output": 3.036,
          "ctx": "200K"
        },
        {
          "api": "glm-5",
          "name": "GLM-5",
          "input": 0.6,
          "output": 1.92,
          "ctx": "200K"
        },
        {
          "api": "glm-4.7",
          "name": "GLM-4.7",
          "input": 0.4,
          "output": 1.75,
          "ctx": "200K"
        },
        {
          "api": "glm-4.7-flash",
          "name": "GLM-4.7-Flash",
          "input": 0.06,
          "output": 0.4,
          "ctx": "198K"
        },
        {
          "api": "glm-4.6",
          "name": "GLM-4.6",
          "input": 0.43,
          "output": 1.75,
          "ctx": "200K"
        },
        {
          "api": "glm-4.5",
          "name": "GLM-4.5",
          "input": 0.6,
          "output": 2.2,
          "ctx": "128K"
        },
        {
          "api": "glm-4.5-air",
          "name": "GLM-4.5-Air",
          "input": 0.13,
          "output": 0.85,
          "ctx": "128K"
        }
      ]
    },
    {
      "id": "qwen",
      "name": "千问 (通义)",
      "short": "Qwen",
      "color": "#ff6a00",
      "site": "https://www.alibabacloud.com/help/en/model-studio/models",
      "currency": "USD",
      "note": "⚠ 价格为 OpenRouter 国际代理价，非官方直连价，仅供参考。",
      "unofficial": true,
      "models": [
        {
          "api": "qwen3.7-max",
          "name": "Qwen3.7-Max",
          "input": 1.475,
          "output": 4.425,
          "ctx": "1M"
        },
        {
          "api": "qwen3.7-plus",
          "name": "Qwen3.7-Plus",
          "input": 0.32,
          "output": 1.28,
          "ctx": "1M"
        },
        {
          "api": "qwen3.7-flash",
          "name": "Qwen3.7-Flash",
          "input": 0.03,
          "output": 0.13,
          "ctx": "1M"
        },
        {
          "api": "qwen3.6-max-preview",
          "name": "Qwen3.6-Max",
          "input": 1.027,
          "output": 6.162,
          "ctx": "256K"
        },
        {
          "api": "qwen3.6-plus",
          "name": "Qwen3.6-Plus",
          "input": 0.325,
          "output": 1.95,
          "ctx": "1M"
        },
        {
          "api": "qwen3.6-flash",
          "name": "Qwen3.6-Flash",
          "input": 0.1875,
          "output": 1.125,
          "ctx": "1M"
        },
        {
          "api": "qwen3-max",
          "name": "Qwen3-Max",
          "input": 0.78,
          "output": 3.9,
          "ctx": "256K"
        },
        {
          "api": "qwen3-coder",
          "name": "Qwen3-Coder",
          "input": 0.3,
          "output": 1.0,
          "ctx": "256K"
        },
        {
          "api": "qwen-plus",
          "name": "Qwen-Plus",
          "input": 0.26,
          "output": 0.78,
          "ctx": "1M"
        }
      ]
    },
    {
      "id": "kimi",
      "name": "Kimi (月之暗面)",
      "short": "Kimi",
      "color": "#e53835",
      "site": "https://platform.moonshot.cn/docs/pricing",
      "currency": "CNY",
      "models": [
        {
          "api": "kimi-k3",
          "name": "Kimi K3",
          "input": 20.0,
          "output": 100.0,
          "ctx": "1M"
        },
        {
          "api": "kimi-k2.7-code",
          "name": "Kimi K2.7-Code",
          "input": 6.5,
          "output": 27.0,
          "ctx": "256K"
        },
        {
          "api": "kimi-k2.6",
          "name": "Kimi K2.6",
          "input": 6.5,
          "output": 27.0,
          "ctx": "256K"
        },
        {
          "api": "kimi-k2.5",
          "name": "Kimi K2.5",
          "input": 4.0,
          "output": 21.0,
          "ctx": "256K"
        }
      ]
    },
    {
      "id": "minimax",
      "name": "MiniMax",
      "short": "MiniMax",
      "color": "#7c3aed",
      "site": "https://www.minimax.io/platform/pricing",
      "currency": "USD",
      "note": "⚠ 价格为 OpenRouter 国际代理价，非官方直连价，仅供参考。",
      "unofficial": true,
      "models": [
        {
          "api": "minimax-m3",
          "name": "MiniMax M3",
          "input": 0.3,
          "output": 1.2,
          "ctx": "1M"
        },
        {
          "api": "minimax-m2.7",
          "name": "MiniMax M2.7",
          "input": 0.3,
          "output": 1.2,
          "ctx": "200K"
        },
        {
          "api": "minimax-m2.5",
          "name": "MiniMax M2.5",
          "input": 0.27,
          "output": 1.08,
          "ctx": "200K"
        },
        {
          "api": "minimax-m2.1",
          "name": "MiniMax M2.1",
          "input": 0.3,
          "output": 1.2,
          "ctx": "200K"
        },
        {
          "api": "minimax-m2",
          "name": "MiniMax M2",
          "input": 0.255,
          "output": 1.02,
          "ctx": "200K"
        },
        {
          "api": "minimax-m1",
          "name": "MiniMax M1",
          "input": 0.55,
          "output": 2.2,
          "ctx": "1M"
        }
      ]
    }
  ],
  "updatedAt": "2026-08-30",
  "cnyRate": 6.7459
};
