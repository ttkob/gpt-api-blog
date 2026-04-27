---
title: 支持模型列表
description: 查看 API 中转平台支持的模型列表，包括 GPT、Claude、Gemini、Grok、DeepSeek、Qwen 等，并了解各模型适合的应用场景、分组说明以及 OpenAI 格式兼容情况。
---

# 支持模型列表

我们提供多模型 API 中转服务，支持 GPT、Claude、Gemini、Grok 以及部分国产大模型，兼容 OpenAI 格式，方便开发者使用统一方式完成接入、调用与切换。

> API 平台地址：<https://jeniya.cn>

## 接口兼容性

本平台默认兼容 OpenAI 格式，开发者通常可以沿用常见的 OpenAI SDK、请求结构和调用习惯完成接入。不同模型在参数、上下文长度、速度和能力边界上可能存在差异，建议正式接入前先进行测试。

## 支持的模型家族

### GPT 系列

常见模型包括：

- gpt-5.1
- gpt-5.5
- gpt-5.4
- gpt-4o
- gpt-4o-mini
- gpt-image-2

**适合场景：**

- 通用 AI 对话
- 内容生成
- 编程辅助
- 智能客服
- 工作流智能体
- 图像生成

---

### Claude 系列

常见模型包括：

- claude-opus-4-7
- claude-opus-4-6
- claude-sonnet-4-6
- claude-sonnet-4-5-20250929
- claude-opus-4-6-thinking

**适合场景：**

- 长文本处理
- 严谨写作
- 复杂代码分析
- 企业文档问答
- 多轮推理任务

---

### Gemini 系列

常见模型包括：

- gemini-3.1-pro-preview
- gemini-3-pro-preview
- gemini-2.5-pro
- gemini-3.1-flash-image-preview

**适合场景：**

- 多模态理解
- 文本生成
- 图片相关任务
- Google 生态应用
- 轻量快速推理

---

### Grok 系列

常见模型包括：

- grok-video-3
- 其他 Grok 模型

**适合场景：**

- 新型内容生成
- 多媒体相关任务
- 特定实验型应用
- 风格化内容交互

---

### 国产模型系列

常见模型包括：

- DeepSeek
- Qwen
- 豆包
- 其他国产模型

**适合场景：**

- 中文问答
- 成本敏感业务
- 国内业务部署
- 企业级高可用场景
- 批量文本处理

## 推荐模型场景选择

### 如果你要做通用 AI 应用
优先考虑：

- GPT 系列
- Claude 系列

### 如果你要做长文本处理和复杂写作
优先考虑：

- Claude 系列

### 如果你要做多模态和图像相关任务
优先考虑：

- Gemini 系列
- gpt-image-2

### 如果你更关注中文能力和成本控制
优先考虑：

- DeepSeek
- Qwen
- 其他国产模型

## 模型分组说明

不同分组对应不同上游渠道、费率和适用场景，便于开发者根据稳定性、模型能力和预算进行选择。

| 分组 | 类型说明 | 费率 | 支持模型 |
| --- | --- | --- | --- |
| default 默认 | 混合 ChatGPT(AZ渠道) + Claude(逆向渠道) + MJ(快速模型) + 国产模型(DeepSeek/Qwen) | 官方费率 ×1 | OpenAI、Claude、国产模型 |
| 企业级高可用大模型 | 国产模型优先，强调稳定与可用性 | 官方费率 ×1 | 国产模型 |
| 优质grok | 部分 Grok 模型，质量更高 | 官方费率 ×5 | Grok |
| 优质gemini | Gemini(Google渠道) 模型 | 官方费率 ×1 | Gemini |
| 官转gemini | Gemini(Google渠道)，资源更多、成本更高 | 官方费率 ×3 | Gemini |
| 纯AZ | 只有 ChatGPT(AZ渠道) + 国产模型 | 以平台实际说明为准 | ChatGPT、国产模型 |

## 说明

- 支持模型会随着上游渠道和平台策略动态调整。
- 不同模型的价格、分组、上下文长度和能力可能不同。
- 具体可用模型请以平台后台实时展示为准。

## 相关页面

- [价格说明](/pricing.html)
- [API 接入文档](/docs.html)
- [常见问题 FAQ](/faq.html)
- [GPT API 专题](/blog/gpt-api/)
- [Claude API 专题](/blog/claude-api/)
- [Gemini API 专题](/blog/gemini-api/)

## 开始使用

如果你已经明确要接入的模型类型，可以直接前往平台查看可用模型与分组：

[前往 API 平台](https://jeniya.cn)
