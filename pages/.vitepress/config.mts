import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "帆友AI，和朋友一起用的 AI 平台",
  description: "帆友AI，和朋友一起用的 AI 平台",
  head: [
    ['link', {rel: 'icon', href: '/public/img/logo_fan.ico'}]
  ],
  themeConfig: {
    search: {
      provider: 'local',
      options: {
        locales: {
          zh: {
            translations: {
              button: {
                buttonText: '搜索文档',
                buttonAriaLabel: '搜索文档'
              },
              modal: {
                noResultsText: '无法找到相关结果',
                resetButtonTitle: '清除查询条件',
                footer: {
                  selectText: '选择',
                  navigateText: '切换'
                }
              }
            }
          }
        }
      }
    },
    i18nRouting: false,
    logo: '/public/img/logo_fan.png',
    siteTitle: '帆友 AI',
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '主页', link: '/' },
      { text: '产品', items: [
        {text: '帆友 AI', link: 'https://foruai.com'},
        {text: 'API', link: 'https://api.foruai.com'}
      ] },
      { text: '文档', link: '/docs/what-is-foruai'},
      { text: '日志', link: ''},
      { text: '关于', link: '/docs/about'},
      { text: '联系我们', link: '/docs/contact'}
    ],

    sidebar: {
      '/docs/': [
        {
          text: '帆友 AI 简介',
          items: [
            { text: '什么是帆友 AI？', link: '/docs/what-is-foruai' },
            { text: '快速开始', link: '/docs/getting-started' }
          ]
        },
        {
          text: 'API 简介',
          items: [
            { text: '什么是API？', link: '/docs/what-is-api' },
            { text: '使用API', link: '/docs/use-api' }
          ]
        },
        {
          text: '一些工具',
          items: [
            { text: '如何访问谷歌', link: '/docs/how-to-use-google' }
          ]
        },
        {
          text: '开放平台', link: '/docs/open-platform'
        },
        {
          text: '关于我们',
          items: [
            { text: '关于我', link: '/docs/about' },
            { text: '联系我', link: '/docs/contact' }
          ]
        }
      ]
    },

    socialLinks: [
      // { icon: 'github', link: 'https://github.com/writefriend/foruportal' }
    ],

    footer: {
      message: '',
      copyright: 'Copyright ©2023-2024 字友'
    },
  },
  lastUpdated: true
})
