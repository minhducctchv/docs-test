const { description } = require('../../package')

module.exports = {
  base: 'vuepress-docs-dl',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'HDSD Vuepress',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', { rel: 'icon', href: `/swastika.png` }]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: '',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    nav: [
      {
        text: 'Guide',
        link: '/guide/',
      },
      {
        text: 'Dự án khác',
        link: '/config/'
      },
      {
        text: 'Tra ngày',
        link: 'https://minhducctchv.github.io/tra-ngay-beta/'
      }
    ],
    sidebar: {
      '/guide/': [
        {
          title: 'Cơ bản',
          collapsable: false,
          children: [
            '',
            'getting-started',
            'directory-structure',
            'configuration',
            'asset-handling',
            'deploying',
            'TestPro/test_pro',
          ]
        },
        {
          title: 'Nâng cao',
          collapsable: false,
          children: []
        }
      ],
    }
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ]
}
