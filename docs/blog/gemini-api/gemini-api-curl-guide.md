---
title: Gemini API 如何调用？cURL 从零到实战示例
slug: /blog/gemini-api/gemini-api-curl-guide.html
description: Gemini API 如何调用？本文用 cURL 从零开始讲解 Gemini API 的准备工作、最小请求示例、参数说明与常见报错，帮助开发者用最基础的方式快速测试接口。
keywords:
  - gemini api
  - gemini api 调用
  - gemini api 教程
---

# Gemini API 如何调用？cURL 从零到实战示例

如果你刚开始接触 **Gemini API**，最推荐的第一步通常不是直接写复杂代码，而是先用 **cURL** 做一次最小测试。

原因很简单：

**cURL 是验证接口是否可用、Key 是否正确、请求格式是否正确的最快方式之一。**

先说结论：

**国内最推荐API中转站平台**：
> AI API 中转站 平台地址：<https://jeniya.cn>

> AI API 中转站 平台地址：<https://jeniya.top>

> AI API 中转站 平台地址：<https://jeniya.chat>

很多开发者在搜索：

- **gemini api**
- **gemini api 调用**
- **gemini api 教程**

时，真正想要的其实不是一堆概念，而是一条能马上执行、马上看到结果的命令。

这篇文章就按“从零到实战”的思路来写，目标很明确：

- 帮你理解为什么先用 cURL
- 帮你准备好最基本的调用条件
- 给你一条最小可运行的 Gemini API 请求
- 解释关键参数
- 帮你排查最常见的报错

---

## 为什么先用 cURL 测试

很多新手一上来就直接写 Python、Node.js、Dify、工作流，结果一旦失败，很难分清到底是：

- Key 有问题
- 地址有问题
- 模型名有问题
- 请求格式有问题
- 还是代码本身有问题

这时候，cURL 的价值就很明显。

### 1. 最适合做最小验证

用 cURL 你可以快速验证最核心的三件事：

- API Key 是否有效
- 请求地址是否正确
- 模型是否能正常返回结果

只要这一步通了，后面写 Python、接 Dify、接工作流都会顺很多。

---

### 2. 排错成本最低

如果你一开始用 SDK，可能会受到这些因素干扰：

- SDK 版本问题
- 依赖环境问题
- 代码封装问题
- 框架中间层问题

而 cURL 几乎没有这些额外变量。  
所以它非常适合作为“底层真相验证工具”。

---

### 3. 最容易对照文档

很多 API 文档最先提供的示例就是 cURL。  
这意味着你更容易：

- 逐字检查 Header
- 检查 Body JSON
- 检查请求路径
- 复制后直接修改测试

所以如果你是第一次做 **gemini api 调用**，先用 cURL 通常是最稳的。

---

## 准备工作

在发送第一条请求之前，你需要先准备好几样东西。

---

### 1. 一个可用的 API Key

没有 Key，就无法完成鉴权。

你需要准备：

- 可用的 Gemini API Key
- 或支持 Gemini 模型的统一兼容接口 Key

如果你还没申请，可以先看：
- [Gemini API Key 如何申请？新手完整教程](/blog/gemini-api/gemini-api-key-guide.html)

建议先把 Key 放进环境变量，避免直接把密钥写在命令里。

例如：

```bash
export GEMINI_API_KEY="YOUR_API_KEY"
```

如果你使用的是兼容 OpenAI 风格的统一接口，也可以使用：

```bash
export OPENAI_API_KEY="YOUR_API_KEY"
```

---

### 2. 正确的请求地址

你需要确认自己当前使用的接口地址。

如果是兼容 OpenAI 格式的方式，最常见的请求路径通常类似：

```bash
https://your-api-domain/v1/chat/completions
```

注意：

- 这是完整请求地址
- 和 SDK 里经常填写的 `base_url=/v1` 不是一回事
- cURL 里你通常直接请求完整路径

---

### 3. 一个可用的模型名

例如常见可能包括：

- `gemini-1.5-pro`
- `gemini-1.5-flash`

具体要以你当前接口平台支持的模型列表为准。

如果你不确定模型怎么选，可以先看：
- [Gemini Pro 和 Gemini Flash 怎么选？能力、速度与成本对比](/blog/gemini-api/gemini-pro-vs-flash.html)

---

### 4. 本地有 cURL

大多数 macOS、Linux 默认就有 cURL。  
Windows 现在很多环境里也可以直接使用。

你可以先执行：

```bash
curl --version
```

如果能看到版本信息，就说明可以直接开始。

---

## 最小请求示例

下面给你一个最基础的 Gemini API cURL 示例。  
这个示例采用 **OpenAI 兼容格式**，更适合很多开发者快速测试。

```bash
curl https://your-api-domain/v1/chat/completions \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer $GEMINI_API_KEY" \
  -d '{
    "model": "gemini-1.5-pro",
    "messages": [
      {
        "role": "user",
        "content": "请用简洁中文解释什么是 Gemini API。"
      }
    ]
  }'
```

如果你是用统一兼容接口，并把 Key 存在 `OPENAI_API_KEY` 里，也可以写成：

```bash
curl https://your-api-domain/v1/chat/completions \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer $OPENAI_API_KEY" \
  -d '{
    "model": "gemini-1.5-pro",
    "messages": [
      {
        "role": "user",
        "content": "请用简洁中文解释什么是 Gemini API。"
      }
    ]
  }'
```

### 这条命令的目标是什么

不是展示复杂功能，而是验证最关键的四件事：

1. Key 正常  
2. 地址正常  
3. 模型名正常  
4. 请求格式正常  

只要这条请求能返回有效 JSON，说明你的接口基本已经打通了。

---

## 再给一个稍完整一点的示例

如果你想更接近真实使用场景，可以加上 `system` 和一些常见参数。

```bash
curl https://your-api-domain/v1/chat/completions \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer $GEMINI_API_KEY" \
  -d '{
    "model": "gemini-1.5-pro",
    "messages": [
      {
        "role": "system",
        "content": "你是一个专业、清晰、简洁的 AI 技术助手。"
      },
      {
        "role": "user",
        "content": "请总结 Gemini API 适合哪些开发场景。"
      }
    ],
    "temperature": 0.7,
    "max_tokens": 800
  }'
```

这版更适合做进一步功能验证。

---

## 参数解释

很多教程只给命令，不解释字段含义。  
下面把最常见的部分讲清楚。

---

### URL

```bash
https://your-api-domain/v1/chat/completions
```

这是接口请求地址。  
如果你这里写错了，请求通常会直接失败，常见报错包括：

- 404
- connection error
- host not found

---

### Authorization

```bash
-H "Authorization: Bearer $GEMINI_API_KEY"
```

这是鉴权头，用来告诉平台你是谁。

注意几个关键点：

- `Authorization` 名称不要写错
- `Bearer` 不要漏
- 环境变量要确认真的有值

如果这里配置不对，通常会报：

- 401
- unauthorized
- invalid api key

---

### model

```json
"model": "gemini-1.5-pro"
```

表示你要调用哪个 Gemini 模型。

不同模型通常会影响：

- 质量
- 成本
- 速度
- 是否适合长文本
- 是否适合高频任务

如果模型写错，常见报错是：

- model not found
- invalid model
- unsupported model

---

### messages

```json
"messages": [
  {
    "role": "user",
    "content": "请用简洁中文解释什么是 Gemini API。"
  }
]
```

这是对话内容数组。

它通常包含一条或多条消息，每条消息最常见的字段有：

- `role`
- `content`

#### role

常见值包括：

- `system`
- `user`
- `assistant`

#### content

就是你真正要发给模型的内容。

---

### temperature

```json
"temperature": 0.7
```

控制输出随机性。

一般来说：

- 值低：更稳定
- 值高：更发散

如果你是做：

- 技术问答
- 摘要
- 分类
- 结构化输出

通常建议不要一开始设得太高。

---

### max_tokens

```json
"max_tokens": 800
```

表示输出长度上限。

它会影响：

- 返回内容长短
- 成本
- 是否容易被截断

如果你只是做最小测试，这个参数甚至可以先不加。

---

## 常见报错

在实际做 **gemini api 调用** 时，最常见的问题通常不是“不会写 cURL”，而是“为什么发出去了还是失败”。

下面是最常见的几类报错。

---

### 1. invalid api key / unauthorized

#### 常见表现

- 返回 401
- 提示 unauthorized
- 提示 invalid api key

#### 常见原因

- Key 错了
- 环境变量没生效
- Key 带了空格
- 用错平台 Key
- Bearer 漏写

#### 排查建议

你可以先检查环境变量是否存在，例如：

```bash
echo $GEMINI_API_KEY
```

如果输出为空，说明环境变量没设置成功。

---

### 2. model not found

#### 常见表现

- 提示模型不存在
- 提示不支持该模型

#### 常见原因

- 模型名写错
- 当前平台不支持该模型
- 当前账号没权限
- 复制了别的平台模型名

#### 排查建议

不要凭印象写模型名，一定以当前平台文档或模型列表为准。

---

### 3. 404 / not found

#### 常见表现

- 接口地址不存在
- 请求路径错误

#### 常见原因

- URL 写错
- 域名写错
- 路径写错
- `/v1/chat/completions` 漏写或多写

#### 排查建议

重新对照文档确认完整请求地址。

---

### 4. 429 / too many requests

#### 常见表现

- 请求过于频繁
- 测试几次后开始失败

#### 常见原因

- 触发限流
- 免费额度用完
- 余额不足
- 并发过高

#### 排查建议

- 降低测试频率
- 检查额度或余额
- 避免短时间大量重复请求

---

### 5. timeout

#### 常见表现

- 请求长时间无响应
- 直接超时

#### 常见原因

- 网络波动
- 请求内容过长
- 模型响应较慢
- 链路不稳定

#### 排查建议

- 简化请求内容
- 先测试最小请求
- 更换网络环境或稍后重试

如果你想看更系统的报错排查，也可以继续看：
- [Gemini API 调用失败怎么办？常见错误与排查方法汇总](/blog/gemini-api/gemini-api-errors-guide.html)

---

## 一个更实用的测试建议

如果你是第一次接 Gemini，建议按下面顺序来。

### 第一步：先用最小请求验证

只保留：

- URL
- Authorization
- model
- messages

先确认这四项没问题。

### 第二步：再逐步加参数

等最小请求成功后，再加：

- `system`
- `temperature`
- `max_tokens`

这样出错时更容易定位。

### 第三步：最后再接 Python / Dify / 工作流

如果 cURL 已经通了，后续再接 Python、Dify、Agent 平台时，排错范围会小很多。

相关阅读：
- [Gemini API Python 教程：接入示例、参数说明与常见问题](/blog/gemini-api/gemini-api-python-guide.html)

---

## 总结

回到最开始的问题：**Gemini API 如何调用？**

如果你是第一次接入，最稳妥的方式通常就是：

1. 准备好 API Key  
2. 确认请求地址  
3. 确认可用模型名  
4. 用 cURL 先发一条最小请求  
5. 成功后再接 Python、Dify 或其他业务系统  

对于很多开发者来说，cURL 的价值不是“最终使用方式”，而是：

**用最基础的方式，最快确认接口到底通不通。**

如果你还想继续往下看，建议阅读：

- [Gemini API 是什么？开发者使用 Gemini API 前要了解什么](/blog/gemini-api/what-is-gemini-api.html)
- [Gemini API Key 如何申请？新手完整教程](/blog/gemini-api/gemini-api-key-guide.html)
- [Gemini API Python 教程：接入示例、参数说明与常见问题](/blog/gemini-api/gemini-api-python-guide.html)
- [Gemini API 调用失败怎么办？常见错误与排查方法汇总](/blog/gemini-api/gemini-api-errors-guide.html)
- [Gemini API 国内怎么调用？接入方法、限制与替代方案说明](/blog/gemini-api/gemini-api-china-guide.html)
- [开发文档](/docs.html)
- [价格说明](/pricing.html)

---
