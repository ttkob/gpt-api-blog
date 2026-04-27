---
title: API 接入文档
description: 查看大模型 API 中转接入文档，支持 OpenAI 兼容格式，涵盖请求地址、鉴权方式、模型调用、分组说明、代码示例与常见问题，适合 GPT、Claude、Gemini 等模型快速接入。
---

# API 接入文档

本平台提供多模型 API 中转服务，支持 GPT、Claude、Gemini、Grok 及部分国产模型，并默认兼容 OpenAI 格式，便于开发者快速接入。

> API 平台地址：<https://jeniya.cn>

> API 接入文档：<https://api-jeniya-cn.apifox.cn/>

## 快速开始

### 基本信息

- 平台地址：`https://jeniya.cn`
- API Base URL：`https://jeniya.cn/v1`
- 接口格式：兼容 OpenAI
- 支持模型：GPT / Claude / Gemini / Grok / 国产模型
- 计费方式：文本按 Tokens，图像按次数

## 接入步骤

### 第一步：注册并获取 API Key

前往平台完成注册，并在控制台中创建 API Key，用于后续接口鉴权。

### 第二步：选择模型或分组

根据你的业务场景选择合适的模型和分组，例如：

- GPT 系列：适合通用对话、写作、编程
- Claude 系列：适合长文本处理、复杂推理
- Gemini 系列：适合多模态和图像相关任务
- 国产模型：适合中文任务和成本优化场景

### 第三步：使用 OpenAI 兼容格式发送请求

本平台兼容 OpenAI 格式，通常可以直接使用现有 OpenAI SDK 或 HTTP 请求方式完成接入。

## 请求示例

### cURL 示例

```bash
curl https://jeniya.cn/v1/chat/completions \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -d '{
    "model": "gpt-4o-mini",
    "messages": [
      {
        "role": "user",
        "content": "你好，介绍一下你自己"
      }
    ]
  }'
```

### Python 示例

```python
from openai import OpenAI

client = OpenAI(
    api_key="YOUR_API_KEY",
    base_url="https://jeniya.cn/v1"
)

resp = client.chat.completions.create(
    model="gpt-4o-mini",
    messages=[
        {"role": "user", "content": "你好，介绍一下你自己"}
    ]
)

print(resp)
```

## 常用接口

### 文本对话

常见接口：

- `/v1/chat/completions`

适合场景：

- 聊天机器人
- AI 写作
- 代码助手
- 知识库问答

### 图像生成

图像模型一般适用于生成图片、海报、插图等内容，具体支持情况请以平台后台为准。

## 模型与分组说明

模型决定能力边界，分组决定上游渠道、费率和可用性。接入前建议先确认：

- 模型名称是否正确
- 模型是否在当前分组下可用
- 当前账户余额或额度是否充足

## 常见错误排查

### 1. 401 / 鉴权失败
请检查：

- API Key 是否正确
- 请求头中是否包含 `Authorization: Bearer YOUR_API_KEY`
- Key 是否已经失效或被禁用

### 2. 429 / 请求过多
请检查：

- 当前请求频率是否过高
- 账户配额是否不足
- 是否需要降低并发或增加重试机制

### 3. 模型不可用
请检查：

- 模型名称是否正确
- 当前分组是否支持该模型
- 上游渠道是否临时调整

### 4. 请求格式错误
请检查：

- JSON 结构是否正确
- `messages`、`model` 等字段是否符合 OpenAI 兼容格式
- 参数名称是否填写错误

## 接入建议

- 先用轻量模型完成联调，再切换到目标模型
- 先小流量测试，再逐步放量
- 对生产环境建议增加超时、重试和异常处理机制
- 如果你需要多模型切换，建议统一使用 OpenAI 兼容写法

## 相关页面

- [支持模型列表](/models.html)
- [价格说明](/pricing.html)
- [常见问题 FAQ](/faq.html)
- [API 中转专题](/blog/api-middleman/)
- [GPT API 专题](/blog/gpt-api/)
- [Claude API 专题](/blog/claude-api/)
- [Gemini API 专题](/blog/gemini-api/)

## 开始使用

如果你已经准备好接入，可以前往平台创建 Key 并测试调用：

[前往 API 平台](https://jeniya.cn)
