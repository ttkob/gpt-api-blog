import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'zh-CN',
  title: 'API中转站导航与使用指南',
  description: 'API中转站、AI中转站、国内API中转、大模型聚合中转平台使用指南，涵盖 GPT API、Claude API、Gemini API 等常见模型接口接入教程。',
  lastUpdated: true,

  head: [
    ['link', { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    ['link', { rel: 'icon', type: 'image/png', href: '/favicon.png', sizes: '32x32' }],
    ['link', { rel: 'icon', type: 'image/png', href: '/favicon-16x16.png', sizes: '16x16' }],
    ['link', { rel: 'apple-touch-icon', href: '/apple-touch-icon.png', sizes: '180x180' }],
    ['link', { rel: 'shortcut icon', href: '/favicon.ico' }]
  ],

  
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: 'API中转站', link: 'https://jeniya.cn' },
      { text: 'GPT API 专题', link: '/blog/gpt-api/' },
      { text: 'Claude API 专题', link: '/blog/claude-api/' },
      { text: 'Gemini API 专题', link: '/blog/gemini-api/' },
      { text: 'API 中转专题', link: '/blog/api-middleman/' },
      { text: '免责申明', link: '/disclaimer' }
    ],

    sidebar: {
      '/blog/gpt-api/': [
        {
          text: 'GPT API 专题',
          items: [
            { text: 'GPT API 分类首页', link: '/blog/gpt-api/' },
            { text: '如何通过 gptapi中转站 获取并使用 OpenAI API Key？国内直连教程', link: '/blog/gpt-api/how-to-get-openai-key-via-relay.html' },
            { text: '国内GPT API中转平台怎么选？一文教你如何挑选高可用 gpt api中转站', link: '/blog/gpt-api/how-to-choose-domestic-gpt-api-relay.html' },
            { text: 'GPT API 接入 Chatbox 怎么配？完整教程', link: '/blog/gpt-api/chatbox-gpt-api-guide.html' },
            { text: 'GPT API 国内替代方案有哪些？如果你不想只依赖单一路线', link: '/blog/gpt-api/chatbox-gpt-api-guide.html' },
            { text: 'GPT API 专题总览：从 Key、接入、报错到模型选择一篇讲清', link: '/blog/gpt-api/gpt-api-topic-overview.html' },
            { text: 'GPT API 国内使用完整指南：从申请、接入到模型选择', link: '/blog/gpt-api/gpt-complete-guide.html' },
            { text: 'GPT API 中转站怎么选？开发者最该关注的 8 个问题', link: '/blog/gpt-api/gpt-api-middleman-selection-guide.html' },
            { text: 'GPT 国内怎么用？中转方案、兼容接口与接入建议', link: '/blog/gpt-api/gpt-api-china-middleman-guide.html' },
            { text: 'GPT API 国内怎么接入 Dify？完整配置思路', link: '/blog/gpt-api/dify-gpt-api-guide' },
            { text: 'GPT-5.5 API 调用示例：Python 从零接入完整教程', link: '/blog/gpt-api/gpt-5-5-api-python-guide' },
            { text: 'OpenAI API 官方接口和中转接口有什么区别？开发者接入指南', link: '/blog/gpt-api/openai-api-official-vs-relay-guide' },
            { text: 'GPT API 国内怎么调用？OpenAI API 接入完整教程', link: '/blog/gpt-api/gpt-api-china-guide' },
            { text: 'AI API中转站完整指南：国内高效接入大模型API的实战经验解析', link: '/blog/gpt-api/ai-api-relay-integration-guide' },
            { text: 'GPT-Image-2 API 震撼上线！全网最全实测指南与高性价比 AI API 中转站推荐', link: '/blog/gpt-api/gpt-image-2-api-guide' }
          ]
        },
        {
          text: '基础页面',
          items: [
            { text: '支持模型', link: '/models' },
            { text: '价格说明', link: '/pricing' },
            { text: '接入文档', link: '/docs' },
            { text: '常见问题', link: '/faq' }
          ]
        }
      ],
      '/blog/claude-api/': [
        {
          text: 'Claude API 专题',
          items: [
            { text: 'Claude API 分类首页', link: '/blog/claude-api/' },
            { text: 'Claude api中转站推荐：国内如何稳定调用 Claude 4.8 Sonnet 接口？', link: '/blog/claude-api/claude-api-relay-station-guide.html' },
            { text: 'Claude API中转站推荐：国内如何免申请、低成本调用 Claude 4.5 Sonnet？', link: '/blog/claude-api/claude-api-relay-guide.html' },
            { text: 'Claude API 如何调用？Python 接入示例与参数说明', link: '/blog/claude-api/claude-api-python-guide' },
            { text: 'Claude API 国内怎么用？申请、接入与中转方案完整教程', link: '/blog/claude-api/claude-api-china-guide' }
          ]
        },
        {
          text: '基础页面',
          items: [
            { text: '支持模型', link: '/models' },
            { text: '价格说明', link: '/pricing' },
            { text: '接入文档', link: '/docs' },
            { text: '常见问题', link: '/faq' }
          ]
        }
      ],
      '/blog/gemini-api/': [
        {
          text: 'Gemini API 专题',
          items: [
            { text: 'Gemini API 分类首页', link: '/blog/gemini-api/' },
            { text: 'geminiapi中转站使用指南：国内直连 Google Gemini 3.5 Pro 接口方案', link: '/blog/gemini-api/gemini-api-relay-station-guide.html' },
            { text: 'Gemini API中转站怎么选？国内直连 Google Gemini 3.5 Pro/Flash 教程', link: '/blog/gemini-api/gemini-api-relay-guide.html' },
            { text: 'Gemini API 国内接入 Chatbox 怎么配？完整教程', link: '/blog/gemini-api/chatbox-gemini-api-guide.html' },
            { text: 'Gemini API 和 GPT API 有什么区别？开发者该怎么选', link: '/blog/gemini-api/gemini-vs-gpt-api-guide' },
            { text: 'Gemini API 如何调用？cURL 从零到实战示例', link: '/blog/gemini-api/gemini-api-curl-guide' },
            { text: 'Gemini API 调用失败怎么办？常见错误与排查方法汇总', link: '/blog/gemini-api/gemini-api-errors-guide' },
            { text: 'Gemini API Python 教程：接入示例、参数说明与常见问题', link: '/blog/gemini-api/gemini-api-python-guide' },
            { text: 'emini API 是什么？开发者使用 Gemini API 前要了解什么', link: '/blog/gemini-api/what-is-gemini-api' },
            { text: 'Gemini Pro 和 Gemini Flash 怎么选？能力、速度与成本对比', link: '/blog/gemini-api/gemini-pro-vs-flash' },
            { text: 'Gemini API 国内怎么调用？接入方法、限制与替代方案说明', link: '/blog/gemini-api/gemini-api-china-guide' },
            { text: 'Gemini API Key 如何申请？新手完整教程', link: '/blog/gemini-api/gemini-api-key-guide' },
          ]
        },
        {
          text: '基础页面',
          items: [
            { text: '支持模型', link: '/models' },
            { text: '价格说明', link: '/pricing' },
            { text: '接入文档', link: '/docs' },
            { text: '常见问题', link: '/faq' }
          ]
        }
      ],
      '/blog/api-middleman/': [
        {
          text: 'API 中转专题',
          items: [
            { text: 'API中转站分类首页', link: '/blog/api-middleman/' },
            { text: '免费大模型API靠谱吗？AI大模型api中转站与免费api接口深度对比', link: '/blog/api-middleman/free-vs-paid-llm-api-relay.html' },
            { text: '免费 AI 中转站靠谱吗？测试与生产环境的 API 中转站选型避坑指南', link: '/blog/api-middleman/free-vs-paid-api-relay-guide.html' },
            { text: '100% 兼容 OpenAI SDK：如何用一套代码无缝切换 GPT-5.5、Claude 4.8 和 Gemini 3.5 flash', link: '/blog/api-middleman/openai-sdk-compatible-relay.html' },
            { text: '国内大模型 API 中转站接入 Dify / FastGPT 完整教程：一键配置 GPT/Claude/Gemini', link: '/blog/api-middleman/dify-fastgpt-api-relay-setup.html' },
            { text: '为什么国内开发者都在用 AI 中转站？相比官方 API 的 5 大痛点与优势', link: '/blog/api-middleman/why-developers-use-ai-relay.html' },
            { text: '2026国内GPT API中转站推荐：如何选择稳定、便宜的AI大模型中转平台？', link: '/blog/api-middleman/best-domestic-gpt-api-relay.html' },
            { text: '免费大模型 API 怎么找？适合测试和学习的 API 获取思路', link: '/blog/api-middleman/free-llm-api-how-to-find.html' },
            { text: 'A免费 API 接口有哪些？开发者如何选择可用的 AI API 方案', link: '/blog/api-middleman/free-ai-api-guide' },
            { text: ' 大模型 API 是什么？开发者常见的大模型 API 使用场景', link: '/blog/api-middleman/what-is-llm-api' },
            { text: '大模型 API 平台怎么选？API 平台、中转站、官方接口三种方案对比', link: '/blog/api-middleman/ai-api-platform-comparison-guide' },
            { text: '大模型 API 平台怎么选？API 平台、中转站、官方接口三种方案对比', link: '/blog/api-middleman/ai-api-platform-comparison-guide' },
            { text: 'GPT、Claude、Gemini API 怎么选？能力、成本与场景全面对比', link: '/blog/api-middleman/gpt-claude-gemini-api-comparison' },
            { text: 'API中转站怎么选？从稳定性、价格、并发和兼容性看这 8 个指标', link: '/blog/api-middleman/how-to-choose-api-middleman' },
            { text: '一套代码接入 GPT、Claude、Gemini：统一大模型接口方案详解', link: '/blog/api-middleman/one-api-for-gpt-claude-gemini' },
            { text: '统一 LLM API 接入指南：如何用一个接口对接 GPT、Claude、Gemini 等模型', link: '/blog/api-middleman/unified-llm-api-guide' },
            { text: '大模型 API 中转和官方 API 有什么区别？开发者如何选择', link: '/blog/api-middleman/api-middleman-vs-official-api/' },
            { text: 'API中转站是什么？一篇看懂大模型 API 中转的作用与适用场景', link: '/blog/api-middleman/what-is-api-middleman/' },
            
          ]
        },
        {
          text: '基础页面',
          items: [
            { text: '支持模型', link: '/models' },
            { text: '价格说明', link: '/pricing' },
            { text: '接入文档', link: '/docs' },
            { text: '常见问题', link: '/faq' }
          ]
        }
      ]
    },

    outline: {
      level: [2, 3],
      label: '目录'
    },

    docFooter: {
      prev: '上一篇',
      next: '下一篇'
    },

    lastUpdated: {
      text: '最后更新',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'medium'
      }
    },

    footer: {
      message: '提供 API中转站、AI中转站、国内API中转及 GPT / Claude / Gemini API 接入指南与经验分享。',
      copyright:
        '© 2026 API中转站导航与使用指南 ｜ <a href="/models">支持模型</a> ｜ <a href="/pricing">价格说明</a> ｜ <a href="/docs">接入文档</a> ｜ <a href="/faq">常见问题</a>'
    }
  }
})
