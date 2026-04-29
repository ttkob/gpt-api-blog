import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'zh-CN',
  title: 'API中转站导航与使用指南',
  description: 'API中转站、AI中转站、国内API中转、大模型聚合中转平台使用指南，涵盖 GPT API、Claude API、Gemini API 等常见模型接口接入教程。',
  lastUpdated: true,

  head: [
    ['link', { rel: 'icon', type: 'image/jpeg', href: '/favicon.jpg' }]
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
            { text: 'Claude API 分类首页', link: '/blog/claude-api/' }
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
            { text: 'Gemini API 分类首页', link: '/blog/gemini-api/' }
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
