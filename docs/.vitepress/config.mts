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
      { text: 'GPT API', link: '/blog/gpt-api/' },
      { text: 'Claude API', link: '/blog/claude-api/' },
      { text: 'Gemini API', link: '/blog/gemini-api/' },
      { text: '免责申明', link: '/disclaimer' }
    ],

    sidebar: {
      '/blog/gpt-api/': [
        {
          text: 'GPT API',
          items: [
            { text: 'GPT API 分类首页', link: '/blog/gpt-api/' },
            { text: 'AI API中转站完整指南：国内高效接入大模型API的实战经验解析', link: '/blog/gpt-api/ai-api-relay-integration-guide' },
            { text: 'GPT-Image-2 API 震撼上线！全网最全实测指南与高性价比 AI API 中转站推荐', link: '/blog/gpt-api/gpt-image-2-api-guide' },
            
          ]
        }
      ],
      '/blog/claude-api/': [
        {
          text: 'Claude API',
          items: [
            { text: 'Claude API 分类首页', link: '/blog/claude-api/' }
          ]
        }
      ],
      '/blog/gemini-api/': [
        {
          text: 'Gemini API',
          items: [
            { text: 'Gemini API 分类首页', link: '/blog/gemini-api/' }
          ]
        }
      ],
      '/blog/api-middleman/': [
        {
          text: 'API中转站',
          items: [
            { text: 'API中转站分类首页', link: '/blog/api-middleman/' }
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
    }
  }
})
