import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'zh-CN',
  title: 'GPT API 使用指南',
  description: 'GPT API 与 API 中转站相关教程博客',

  lastUpdated: true,

  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '博客', link: '/blog/first-post' },
      { text: 'GPT API', link: '/blog/gpt-api/gpt-api-complete-guide-2026' }
    ],

    sidebar: {
      '/blog/': [
        {
          text: '基础文章',
          items: [
            { text: '我的第一篇博客', link: '/blog/first-post' },
            { text: 'GPT API 使用入门', link: '/blog/second-post' },
            { text: 'API 中转站完整说明', link: '/blog/api-middleman-guide' }
          ]
        },
        {
          text: 'GPT API 教程',
          collapsed: false,
          items: [
            {
              text: 'GPT API 完整使用指南',
              link: '/blog/gpt-api/gpt-api-complete-guide-2026'
            },
            {
              text: 'GPT API 价格说明与计费方式',
              link: '/blog/gpt-api/gpt-api-pricing-guide-2026'
            }
            
          ]
        },
        {
          text: 'API 中转站',
          collapsed: false,
          items: []
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
