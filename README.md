# 大模型 API 价格速查

一个展示主流大模型（Anthropic / OpenAI / Google Gemini / DeepSeek）API 最新价格的静态网站，含卡片/表格两种视图、搜索、排序和成本估算器，**每天自动更新价格数据**。

## 文件结构

```
├── index.html            # 网站页面（卡片 + 表格视图）
├── data.js               # 价格数据（由脚本自动生成，勿手改）
├── update_prices.py      # 价格更新脚本（Python 标准库，无需 pip）
├── .github/workflows/update.yml  # GitHub Actions：每天自动更新
├── README.md
```

## 本地预览

直接双击 `index.html` 用浏览器打开即可，无需服务器。

## 数据如何自动更新

- **数据源**：OpenRouter Models API（权威）+ 官方定价页（兜底，仅当 OpenRouter 不可用时使用）。
- **更新脚本**：`python update_prices.py` 拉取最新价格并写入 `data.js`。价格没变化时跳过写入，避免产生无意义的提交。
- **定时任务**：`.github/workflows/update.yml` 每天自动运行脚本并提交。

> ⚠️ **时区注意**：GitHub Actions 的 cron 使用 **UTC**，不是本地时间。当前配置为每天 10:00 UTC。若希望本地上午 10 点更新，把 `update.yml` 里的 `0 10` 换算成你本地时区对应的 UTC 时间即可（例如 UTC+8 应改为 `0 2`）。

### 手动触发一次更新

在仓库的 **Actions** 页面选中「每日更新价格」工作流，点 **Run workflow** 即可手动跑一次。

## 部署到 GitHub Pages

1. 把本项目推送到 GitHub 仓库（`index.html` 需在仓库根目录）。
2. 仓库 **Settings → Pages** → 在 "Build and deployment" 里选 **Deploy from a branch**，分支选 `main`，目录选 `/ (root)`。
3. 保存后，网站会发布到 `https://<你的用户名>.github.io/<仓库名>/`。
4. 首次推送后，Actions 里的「每日更新价格」工作流会自动启用，之后每天定时更新价格并触发 Pages 重新部署。

> 💡 仓库里的 `data.js` 更新后会触发提交，Pages 会随之自动重新构建，无需额外配置。

## 如何新增 / 修改模型

1. 在 `data.js` 里新增/修改模型条目（含中文名、备注、徽章等展示字段）。
2. 在 `update_prices.py` 的 `TARGET_IDS` 里加上对应模型的 OpenRouter id（形如 `claude-sonnet-5`，不带厂商前缀）。
3. 可选：本地跑 `python update_prices.py --dry-run` 预览，确认无误后 `python update_prices.py` 正式更新。

> 脚本只更新 `TARGET_IDS` / 旧数据里已有的模型并保留手工字段，不会把 OpenRouter 的杂项模型一起塞进来。

## 免责声明

价格数据来自第三方聚合与官方页面，可能与厂商实际账单略有出入，请以官网最新定价为准。