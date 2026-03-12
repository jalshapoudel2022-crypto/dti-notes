import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "DTI Notes",
  description: "Digital Technology and Innovation Study Notes",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'DTI', link: '/DTI/terminal' }
    ],

    sidebar: [
      {
        text: 'DTI',
        items: [
          { text: 'Terminal', link: '/DTI/terminal' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
