---
title: Claude Code API 怎么配置？手把手教你用 claude code中转站 激活终端 AI 助手
slug: /blog/claude-api/claude-code-api-configuration-guide.html
description: Claude Code API 怎么配置？本文手把手讲解如何通过 claude code中转站 获取 claude api、安装 Claude Code CLI，并在 macOS、Linux 和 Windows 中完成环境变量配置。
keywords:
  - claude code api
  - claude code中转站
  - claude api
---

# Claude Code API 怎么配置？手把手教你用 claude code中转站 激活终端 AI 助手

想在本地终端里真正把 Claude Code 跑起来，核心不是“装没装上”，而是：

**`claude code api` 到底怎么配。**

很多开发者第一次接触 Claude Code 时，会发现自己真正卡住的不是 CLI 命令，而是这些更具体的问题：

先说结论

**国内最推荐API中转站平台**：s

> AI API 中转站 平台地址：<https://jeniya.cn>

> AI API 中转站 平台地址：<https://jeniya.top>

> AI API 中转站 平台地址：<https://jeniya.chat>

- API Key 从哪来？
- `ANTHROPIC_API_KEY` 怎么配？
- `ANTHROPIC_BASE_URL` 又该填什么？
- Mac、Linux、Windows 配置方式一样吗？
- 为什么我明明装好了 `claude`，一运行还是报错？

尤其对国内开发者来说，大家真正想找的，往往不是抽象解释，而是一份能直接照着做的配置教程。

先说结论：

**如果你想快速激活 Claude Code，最省心的方式通常是准备一个可用的 `claude api`，然后通过 `claude code中转站` 提供的 Key 和 Base URL，把 Claude Code CLI 的请求重定向到一个更适合国内开发环境的接口入口。**

这篇文章会按“真正能配置成功”的顺序来写，帮你完成：

1. 获取可用的中转 `claude api`  
2. 安装 Claude Code 官方 CLI  
3. 在 macOS / Linux / Windows 中配置环境变量  
4. 运行 `claude` 做握手测试  
5. 理解为什么很多开发者更适合用中转方案  

---

## 准备工作：获取中转 claude api

在真正开始配置之前，你首先要准备好 Claude Code 真正调用时需要的两个核心信息：

- `API Key`
- `Base URL`

也就是说，CLI 本身只是入口，  
真正决定它能不能工作的是：

**你有没有一套可用的 `claude api` 配置。**

---

### 1. 注册一个支持 Claude 模型的 claude code中转站

理想情况下，你选择的平台至少要满足这些条件：

- 支持 Claude 主流模型
- 提供稳定的 API 接口
- 文档清楚
- 支持环境变量方式接入
- 最好适合国内开发环境长期使用

如果你后面不只是想用 Claude Code，而是还想继续接：

- Claude API 开发
- GPT
- Gemini
- Dify / Chatbox / FastGPT

那么更推荐一开始就选择一个可扩展的统一接口平台。

---

### 2. 在后台生成一个可用的 claude api Key

进入平台后台后，一般会看到类似：

- API Key 管理
- 令牌管理
- 开发者凭证
- 创建令牌

创建完成后，你通常会得到：

- 一个 `API Key`
- 一个 `Base URL`

建议同时确认：

- 当前 Key 是否有 Claude 模型权限
- 当前账户是否有可用额度
- Base URL 是否是平台要求的基础地址

这一步很关键，因为后面 CLI 能不能工作，80% 就看这里。

---

## Claude Code 官方 CLI 的 API 配置步骤

下面进入真正的配置部分。

---

### 步骤一：安装 Claude Code CLI

如果你本地还没有安装 Claude Code CLI，可以先执行：

```bash
npm install -g @anthropic-ai/claude-code
```

安装完成后，你可以先确认命令是否存在：

```bash
claude --help
```

如果能正常看到帮助信息，说明 CLI 已经安装成功。  
如果这一步都不通，先排查：

- Node.js 是否已安装
- npm 是否可用
- 全局安装权限是否正常

---

### 步骤二：配置中转环境变量

这一步是最核心的。

你需要配置两个变量：

- `ANTHROPIC_BASE_URL`
- `ANTHROPIC_API_KEY`

通常格式类似：

```bash
export ANTHROPIC_BASE_URL="https://jeniya.cn/v1"
export ANTHROPIC_API_KEY="你的中转站Key"
```

注意两个关键点：

- `BASE_URL` 一般填到 `/v1`
- 不要多复制空格或换行

下面分别说不同系统怎么持久化配置。

---

## Mac / Linux 配置方法

如果你用的是 macOS 或 Linux，通常是把环境变量写进 shell 配置文件里。

---

### 1. 判断你当前使用的 shell

先执行：

```bash
echo $SHELL
```

常见结果包括：

- `/bin/zsh`
- `/bin/bash`

如果你是 `zsh`，一般改 `~/.zshrc`。  
如果你是 `bash`，一般改 `~/.bashrc` 或 `~/.bash_profile`。

---

### 2. 在配置文件中加入环境变量

以 `zsh` 为例，执行：

```bash
nano ~/.zshrc
```

加入下面两行：

```bash
export ANTHROPIC_BASE_URL="https://jeniya.cn/v1"
export ANTHROPIC_API_KEY="你的中转站Key"
```

保存后执行：

```bash
source ~/.zshrc
```

如果你是 `bash`，则改对应文件，例如：

```bash
nano ~/.bashrc
```

然后执行：

```bash
source ~/.bashrc
```

---

### 3. 验证变量是否生效

执行：

```bash
echo $ANTHROPIC_BASE_URL
```

以及：

```bash
echo $ANTHROPIC_API_KEY
```

如果能看到结果，说明变量已经进入当前 shell 环境。  
注意：如果你在录屏、直播或共享终端，避免直接显示完整 Key。

---

## Windows（PowerShell）配置方法

如果你在 Windows 下使用 PowerShell，可以按下面方式配置。

---

### 1. 当前会话临时配置

先在当前 PowerShell 会话里测试：

```powershell
$env:ANTHROPIC_BASE_URL="https://jeniya.cn/v1"
$env:ANTHROPIC_API_KEY="你的中转站Key"
```

这样做的好处是：

- 先验证是否能跑通
- 不用一开始就改全局环境变量
- 出问题更容易回退

---

### 2. 持久化配置用户环境变量

如果确认可用，可以用下面的方式持久化：

```powershell
[System.Environment]::SetEnvironmentVariable("ANTHROPIC_BASE_URL", "https://jeniya.cn/v1", "User")
[System.Environment]::SetEnvironmentVariable("ANTHROPIC_API_KEY", "你的中转站Key", "User")
```

设置完成后，建议：

- 关闭当前 PowerShell
- 重新打开一个新窗口

然后执行：

```powershell
echo $env:ANTHROPIC_BASE_URL
```

确认变量已生效。

---

## 步骤三：初始化与运行

环境变量配置完成后，接下来就可以直接运行：

```bash
claude
```

如果一切正常，Claude Code CLI 会尝试通过你配置的 `claude code中转站` 进行握手和后续调用。

这里你应该重点关注：

- 是否还报鉴权错误
- 是否出现连接超时
- 是否能进入正常交互流程

如果能正常进入，那么说明：

- CLI 安装没问题
- Key 没问题
- Base URL 没问题
- 当前终端环境变量读取成功

这时你就已经基本完成了 Claude Code API 配置。

---

## 一个更稳妥的排查顺序

如果你执行 `claude` 后还是不通，不要一上来就怀疑 CLI 坏了。  
建议按这个顺序查：

### 1. 先查环境变量有没有生效

Mac / Linux：

```bash
echo $ANTHROPIC_BASE_URL
echo $ANTHROPIC_API_KEY
```

Windows PowerShell：

```powershell
echo $env:ANTHROPIC_BASE_URL
echo $env:ANTHROPIC_API_KEY
```

---

### 2. 再查 Base URL 是否写错

最常见错误包括：

- 少写 `/v1`
- 多写了完整接口路径
- 域名写错
- 用了平台不兼容的地址

通常应优先使用平台文档中给出的标准 Base URL。

---

### 3. 再查 Key 是否可用

常见问题包括：

- Key 已失效
- Key 没有 Claude 权限
- 多复制了空格
- 账户无额度
- 用错了别的平台 Key

---

### 4. 最后再看当前 shell 是否读取了新配置

很多人明明已经写进了 `~/.zshrc` 或 PowerShell 环境变量，但没有重新加载会话，结果以为“配置无效”。

这是非常常见的小坑。

---

## 为什么推荐使用 claude code中转站 而非单独折腾？

很多开发者真正不是不会配，而是配完之后会很快发现：

**长期稳定使用，比某次单点成功更重要。**

这也是为什么越来越多人会优先考虑 `claude code中转站`。

---

### 1. 免去复杂前置折腾，更快进入开发状态

你真正想做的事情通常是：

- 让 Claude Code 帮你看代码
- 帮你重构
- 帮你跑测试
- 帮你分析项目

而不是花大量时间在：

- 链路排查
- 终端代理
- 配置兼容性
- 不同环境差异

中转方案最大的价值，就是尽量把这些底层复杂度收掉。

---

### 2. 更适合终端原生工作流

Claude Code 是 CLI 工具，不是网页应用。  
CLI 工具对调用连续性和环境稳定性的要求更高。

如果你希望在：

- 本地项目
- 远程开发机
- SSH 环境
- WSL
- 云主机

里都尽量顺畅使用，那么统一通过环境变量接入一个更适合国内开发环境的 API 入口，通常会更省心。

---

### 3. 后续扩展 Claude API 或其他模型更方便

如果你后面不只是要用 Claude Code，而是还准备：

- 接 `claude api`
- 做后端开发调用
- 接 Dify / Chatbox
- 加入 GPT、Gemini 多模型能力

那么从一开始就用一个更统一的平台，会明显减少后续维护成本。

相关阅读：
- [Claude Code 国内怎么用？利用 Claude Code 国内中转站免翻墙无缝接入教程](/blog/claude-api/how-to-use-claude-code-in-china.html)
- [Claude API中转站推荐：国内如何免申请、低成本调用 Claude 3.5 Sonnet？](/blog/claude-api/claude-api-relay-guide.html)
- [Claudeapi中转站推荐：国内如何稳定调用 Claude 3.5 Sonnet 接口？](/blog/claude-api/claude-api-relay-station-guide.html)

---

## 总结

回到最开始的问题：**Claude Code API 怎么配置？**

最实用的答案就是：

**先准备一个可用的 `claude api`，再通过 `claude code中转站` 提供的 Key 和 Base URL，把 `ANTHROPIC_API_KEY` 与 `ANTHROPIC_BASE_URL` 配好，然后直接运行 `claude` 测试是否握手成功。**

你可以把完整流程记成：

1. 注册支持 Claude 的中转平台  
2. 生成 API Key  
3. 获取 Base URL  
4. 安装 Claude Code CLI  
5. 在 macOS / Linux / Windows 中配置环境变量  
6. 运行 `claude` 验证是否配置成功  

如果只记一句话，那就是：

**Claude Code 真正的关键不是“安装 CLI”，而是“把 API 配置成一个能长期稳定工作的终端调用入口”。**

如果你还想继续深入，建议阅读：

- [Claude Code 国内怎么用？利用 Claude Code 国内中转站免翻墙无缝接入教程](/blog/claude-api/how-to-use-claude-code-in-china.html)
- [Claude API中转站推荐：国内如何免申请、低成本调用 Claude 3.5 Sonnet？](/blog/claude-api/claude-api-relay-guide.html)
- [统一 LLM API 接入指南：如何用一个接口对接 GPT、Claude、Gemini 等模型](/blog/api-middleman/unified-llm-api-guide.html)
- [开发文档](/docs.html)
- [价格说明](/pricing.html)

---
