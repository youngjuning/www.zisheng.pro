import { defineConfig } from 'dumi';

export default defineConfig({
  favicons: ['https://cdn.jsdelivr.net/gh/youngjuning/images@main/1687969566388.png'],
  autoAlias: false,
  themeConfig: {
    name: '全栈紫升',
    logo: 'https://cdn.jsdelivr.net/gh/youngjuning/images@main/1687969566388.png',
    prefersColor: { default: 'auto' },
    editLink:
      'https://github.com/youngjuning/zisheng.pro/edit/main/{filename}',
    socialLinks: {
      github: 'https://github.com/youngjuning/zisheng.pro',
      twitter: 'https://twitter.com/luozhu2021',
    },
    hd: { rules: [] },
    footer: `Made with ❤️ by <a href="https://github.com/youngjuning" target="_blank">紫升</a>`,
  },
  theme: {
    '@c-primary': '#00cc99',
  },
  publicPath: '/',
  // analytics: {
  // ga_v2: '',
  // },
  // sitemap: {
  // hostname: 'https://zisheng.pro',
  // },
  hash: true,
  ...(process.env.NODE_ENV === 'development' ? {} : { ssr: {} }),
  headScripts: process.env.NODE_ENV === 'development' ? [] : [
    { src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js', async: true, crossorigin: 'anonymous' }
  ],
});
