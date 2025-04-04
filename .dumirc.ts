import { defineConfig } from 'dumi';

export default defineConfig({
  favicons: ['https://www.zisheng.pro/favicon.ico'],
  autoAlias: false,
  themeConfig: {
    name: '全栈紫升',
    logo: 'https://www.zisheng.pro/avatar.png',
    prefersColor: { default: 'auto' },
    editLink: 'https://github.com/youngjuning/zisheng.pro/edit/main/{filename}',
    socialLinks: {
      github: 'https://github.com/youngjuning/zisheng.pro',
      twitter: 'https://twitter.com/luozhu2021',
    },
    nav: {
      mode: "append",
      value: [
        { title: '博客', link: 'https://youngjuning.js.org' },
        { title: '周刊', link: 'https://weekly.zisheng.pro' }
      ]
    },
    hd: { rules: [] },
    footer: `Made with ❤️ by <a href="https://github.com/youngjuning" target="_blank">紫升</a>`,
  },
  theme: {
    '@c-primary': '#00cc99',
  },
  publicPath: '/',
  analytics: {
    ga_v2: 'G-4SL4CSTE7X',
  },
  sitemap: {
    hostname: 'https://www.zisheng.pro',
  },
  hash: true,
  exportStatic: {},
  ...(process.env.NODE_ENV === 'development' ? {} : { ssr: {} }),
  headScripts: [
    { src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js', async: true, crossorigin: 'anonymous' }
  ],
});
