import { defineConfig } from 'dumi';

export default defineConfig({
  favicons: ['https://cdn.jsdelivr.net/gh/youngjuning/images@main/1742301937620.png'],
  autoAlias: false,
  themeConfig: {
    name: 'Aaron',
    logo: 'https://cdn.jsdelivr.net/gh/youngjuning/images@main/1742301937620.png',
    prefersColor: { default: 'auto' },
    // editLink:
    //   'https://github.com/youngjuning/zisheng.pro/edit/main/{filename}',
    socialLinks: {
      github: 'https://github.com/youngjuning/zisheng.pro',
      twitter: 'https://twitter.com/luozhu2021',
    },
    nav: {
      mode: "append",
      value: [{ title: 'Blog', link: 'https://youngjuning.js.org' }]
    },
    hd: { rules: [] },
    footer: `Made with ❤️ by <a href="https://github.com/youngjuning" target="_blank">紫升</a>`,
  },
  theme: {
    '@c-primary': '#00cc99',
  },
  locales: [
    { id: 'zh-CN', name: '中文' },
    { id: 'en-US', name: 'EN' },
  ],
  publicPath: '/',
  analytics: {
    ga_v2: 'G-4SL4CSTE7X',
  },
  sitemap: {
    hostname: 'https://zisheng.pro',
  },
  hash: true,
  ...(process.env.NODE_ENV === 'development' ? {} : { ssr: {} }),
  headScripts: process.env.NODE_ENV === 'development' ? [] : [
    { src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js', async: true, crossorigin: 'anonymous' }
  ],
});
