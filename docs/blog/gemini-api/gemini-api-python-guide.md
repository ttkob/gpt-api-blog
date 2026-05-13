---
title: Gemini API Python 教程：接入示例、参数说明与常见问题
slug: /blog/gemini-api/gemini-api-python-guide.html
description: Gemini API Python 教程，包含 Gemini API 简介、接入前准备、Python 完整示例、核心参数说明与常见报错处理，帮助开发者快速完成 Gemini API 接入。
keywords:
  - gemini api python
  - gemini api 教程
  - gemini api
---

# Gemini API Python 教程：接入示例、参数说明与常见问题

如果你正在搜索“**gemini api python**”，大概率不是想看概念介绍，而是想直接解决这些问题：

- Gemini API 用 Python 到底怎么调？
- 需要准备什么？
- 有没有一份能直接参考的代码示例？
- 请求参数分别是什么意思？
- 报错了该怎么排查？

这篇文章就按开发者教程的方式来写，目标很明确：


先说结论：

**国内最推荐API中转站平台**：
> AI API 中转站 平台地址：<https://jeniya.cn>

> AI API 中转站 平台地址：<https://jeniya.top>

> AI API 中转站 平台地址：<https://jeniya.chat>

**让你用 Python 跑通一个 Gemini API 请求，并理解核心参数和常见问题。**

如果你还在了解 Gemini 的基础概念，可以先看：
- [Gemini API 是什么？开发者使用 Gemini API 前要了解什么](/blog/gemini-api/what-is-gemini-api.html)
- [Gemini API Key 如何申请？新手完整教程](/blog/gemini-api/gemini-api-key-guide.html)

---

## Gemini API 简介

**Gemini API** 是开发者调用 Gemini 模型能力的接口。

和在网页端直接使用 AI 产品不同，API 更适合程序化集成，也就是把 Gemini 接到：

- 网站
- App
- 后端服务
- 自动化脚本
- AI 工作流
- 知识库系统

常见用途包括：

- 文本生成
- 内容总结
- 问答助手
- 信息抽取
- 代码辅助
- 图文理解
- 多模态处理

对于开发者来说，Gemini API 的意义不在于“能不能聊天”，而在于：

**能不能把 AI 能力接进自己的产品里。**

---

## 开始前准备

在开始写 Python 代码之前，建议你先准备好下面这些内容。

### 1. Python 环境

建议使用：

- Python 3.9+
- 或至少 Python 3.8+

先检查版本：

```bash
python --version
```

如果你的环境比较旧，建议先升级后再接入。

---

### 2. 可用的 API Key

调用 Gemini API 前，你需要一个可用的 API Key。  
没有 Key，接口通常无法通过鉴权。

建议把 Key 放到环境变量里，例如：

```bash
export GEMINI_API_KEY="YOUR_API_KEY"
```

如果你使用的是兼容 OpenAI 格式的统一接口，也可能会使用：

```bash
export OPENAI_API_KEY="YOUR_API_KEY"
```

如果你还没有 Key，可以先看：
- [Gemini API Key 如何申请？新手完整教程](/blog/gemini-api/gemini-api-key-guide.html)

---

### 3. 请求地址和接口方式

这里有两种常见思路：

- 直接使用 Gemini 对应接口方式
- 使用兼容 OpenAI 格式的统一接口方式

为了让教程更容易上手、也更方便和 GPT / Claude 的调用方式统一，本文示例采用**OpenAI 兼容格式**来演示。  
这种方式对很多开发者更友好，也更适合未来扩展多模型。

相关阅读：
- [统一 LLM API 接入指南：如何用一个接口对接 GPT、Claude、Gemini 等模型](/blog/api-middleman/unified-llm-api-guide.html)

---

### 4. 安装 requests

本文示例使用 `requests` 发 HTTP 请求。

如果你本地没有安装，可以先执行：

```bash
pip install requests
```

---

## Python 接入示例

下面给你一份最小可运行的 Gemini API Python 示例。  
这个示例重点是：**先跑通，再理解。**

```python
import os
import requests

url = "https://jeniya.cn/v1/chat/completions"
api_key = os.getenv("OPENAI_API_KEY") or os.getenv("GEMINI_API_KEY")

if not api_key:
    raise ValueError("未检测到 API Key，请先设置 OPENAI_API_KEY 或 GEMINI_API_KEY。")

payload = {
    "model": "gemini-3.1-pro-preview",
    "messages": [
        {
            "role": "user",
            "content": "请用简洁中文解释什么是 Gemini API。"
        }
    ],
    "temperature": 0.7
}

headers = {
    "Content-Type": "application/json",
    "Authorization": f"Bearer {api_key}"
}

response = requests.post(url, json=payload, headers=headers, timeout=60)

print("Status Code:", response.status_code)
print("Response JSON:")
print(response.json())
```

这份代码主要做了 4 件事：

1. 读取 API Key  
2. 构造请求体  
3. 发起 POST 请求  
4. 打印接口返回结果  

如果你当前使用的平台支持 `gemini-3.1-pro-preview` 这个模型名，那么这就是一份最基础的可用示例。

---

## 一个更完整的 Python 示例

如果你希望代码更接近真实项目，可参考下面这版，增加了基础异常处理。

```python
import os
import requests

def call_gemini(prompt: str):
    url = "https://jeniya.cn/v1/chat/completions"
    api_key = os.getenv("OPENAI_API_KEY") or os.getenv("GEMINI_API_KEY")

    if not api_key:
        raise ValueError("未检测到 API Key，请先设置环境变量。")

    payload = {
        "model": "gemini-3.1-pro-preview",
        "messages": [
            {
                "role": "system",
                "content": "你是一个专业、清晰、简洁的 AI 助手。"
            },
            {
                "role": "user",
                "content": prompt
            }
        ],
        "temperature": 0.7,
        "max_tokens": 800
    }

    headers = {
        "Content-Type": "application/json",
        "Authorization": f"Bearer {api_key}"
    }

    try:
        response = requests.post(url, json=payload, headers=headers, timeout=60)
        response.raise_for_status()
        return response.json()
    except requests.exceptions.RequestException as e:
        print("请求失败：", str(e))
        return None

if __name__ == "__main__":
    result = call_gemini("请解释 Gemini API 适合哪些应用场景。")
    print(result)
```

这版代码更适合作为你后续封装业务逻辑的起点。

---

## 核心参数说明

很多开发者复制代码能跑，但对参数并不真正理解。  
这一部分会把最关键的字段讲清楚。

---

### model

```python
"model": "gemini-3.1-pro-preview"
```

`model` 表示你要调用哪个 Gemini 模型。

不同模型通常会影响：

- 输出质量
- 成本
- 响应速度
- 是否适合长文本
- 是否支持多模态

如果你想更关注速度和成本，也可以测试 Flash 类模型。  
相关阅读：
- [Gemini Pro 和 Gemini Flash 怎么选？能力、速度与成本对比](/blog/gemini-api/gemini-pro-vs-flash.html)

---

### messages

```python
"messages": [
    {
        "role": "user",
        "content": "请用简洁中文解释什么是 Gemini API。"
    }
]
```

`messages` 表示你发给模型的上下文消息数组。  
它通常包含多条消息，每条消息包括：

- `role`
- `content`

这也是很多 OpenAI 兼容接口最常见的调用结构。

---

### role

`role` 表示消息角色。

常见值包括：

- `system`
- `user`
- `assistant`

#### `system`

用来定义模型行为，比如：

```python
{
    "role": "system",
    "content": "你是一个严谨的技术助手，请用简洁中文回答。"
}
```

#### `user`

表示用户输入内容，也就是你真正要模型处理的问题。

---

### content

`content` 就是这条消息的实际内容，例如：

```python
{
    "role": "user",
    "content": "请总结下面文章的核心观点。"
}
```

也就是说，提示词通常就是写在 `content` 里。

---

### temperature

```python
"temperature": 0.7
```

`temperature` 用于控制输出随机性。

一般来说：

- 数值低：更稳定、更克制
- 数值高：更灵活、更发散

如果你做的是：

- 摘要
- 问答
- 代码解释
- 知识库问答

通常建议从较低到中等温度开始测试。

---

### max_tokens

```python
"max_tokens": 800
```

这个参数通常表示输出长度上限。

它会影响：

- 返回内容的长短
- 成本
- 是否容易被截断

如果你希望回答更短，可以调小；  
如果希望模型输出更完整，可以适当调大。

---

## 一个更贴近业务的示例

下面给一个“文章摘要工具”的简单版本。

```python
import os
import requests

def summarize_article(article_text: str):
    url = "https://jeniya.cn/v1/chat/completions"
    api_key = os.getenv("OPENAI_API_KEY") or os.getenv("GEMINI_API_KEY")

    payload = {
        "model": "gemini-3.1-pro-preview",
        "messages": [
            {
                "role": "system",
                "content": "你是一个专业摘要助手，请用 5 条要点总结内容。"
            },
            {
                "role": "user",
                "content": f"请总结下面这篇文章：\n\n{article_text}"
            }
        ],
        "temperature": 0.3,
        "max_tokens": 1000
    }

    headers = {
        "Content-Type": "application/json",
        "Authorization": f"Bearer {api_key}"
    }

    response = requests.post(url, json=payload, headers=headers, timeout=60)
    response.raise_for_status()
    return response.json()

if __name__ == "__main__":
    demo_text = """
    大模型 API 正在成为越来越多 AI 产品的基础设施。
    对开发者来说，统一接口、多模型切换、成本控制和接入效率，是实际项目中非常关键的问题。
    """
    result = summarize_article(demo_text)
    print(result)
```

这个例子更接近真实产品开发中的使用方式。

---

## 常见错误处理

在实际接入中，代码本身通常不复杂，真正耗时间的是排错。  
下面是几类最常见问题。

---

### 1. invalid api key / unauthorized

#### 常见表现

- 返回 401
- 提示 unauthorized
- 提示 invalid api key

#### 常见原因

- API Key 写错
- 环境变量未生效
- Key 已失效
- 请求到了错误平台

#### 处理方法

- 检查环境变量是否正确
- 检查 Key 是否有空格
- 确认当前 Key 对应当前请求平台
- 重新做一次最小请求测试

---

### 2. model not found

#### 常见表现

- 模型不存在
- 模型不支持
- invalid model

#### 常见原因

- 模型名写错
- 当前平台不支持该模型
- 账户没有该模型权限
- 使用了别的平台模型名

#### 处理方法

- 查看平台支持列表
- 不要直接照搬别处示例
- 先确认模型名称是否真实可调用

---

### 3. 429 Too Many Requests

#### 常见表现

- 请求频率过高
- 接口限流
- 并发后容易失败

#### 常见原因

- 请求过快
- 超出配额
- 余额不足
- 高并发场景触发限制

#### 处理方法

- 降低请求频率
- 做重试机制
- 检查额度和余额
- 优化批量调用逻辑

---

### 4. timeout

#### 常见表现

- 请求超时
- 长时间无响应

#### 常见原因

- 网络问题
- 请求内容过长
- 输出过长
- 超时时间设置太短

#### 处理方法

- 增加 timeout
- 缩短输入内容
- 适当控制输出长度
- 检查网络环境

---

### 5. 返回结构和预期不一致

#### 常见原因

如果你使用的是不同平台或不同兼容层，返回结构可能有细微差异。  
所以正式接业务前，建议先打印完整 JSON 看一次真实返回。

这一步能帮你避免很多后续解析错误。

---

## 总结

这篇 **Gemini API Python 教程** 的重点其实就三件事：

1. **先跑通一条最小请求**
2. **理解核心参数**
3. **学会处理常见报错**

你可以把 Gemini API 的 Python 接入流程记成：

- 准备 Python 环境
- 准备 API Key
- 配置请求地址
- 发送带 `model` 和 `messages` 的请求
- 解析返回结果
- 排查常见错误

如果你接下来还想继续深入，建议继续阅读：

- [Gemini API 是什么？开发者使用 Gemini API 前要了解什么](/blog/gemini-api/what-is-gemini-api.html)
- [Gemini API Key 如何申请？新手完整教程](/blog/gemini-api/gemini-api-key-guide.html)
- [Gemini Pro 和 Gemini Flash 怎么选？能力、速度与成本对比](/blog/gemini-api/gemini-pro-vs-flash.html)
- [Gemini API 国内怎么调用？接入方法、限制与替代方案说明](/blog/gemini-api/gemini-api-china-guide.html)
- [统一 LLM API 接入指南：如何用一个接口对接 GPT、Claude、Gemini 等模型](/blog/api-middleman/unified-llm-api-guide.html)
- [开发文档](/docs.html)
- [价格说明](/pricing.html)

---
