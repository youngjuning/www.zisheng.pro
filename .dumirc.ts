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
    footer: `
<div>Made with ❤️ by <a href="https://github.com/youngjuning" target="_blank">紫升</a></div>
<div>
  <span>本页访问量<span id="busuanzi_value_page_pv"></span></span> |
  <span>本站访问量<span id="busuanzi_value_site_pv"></span></span> |
  <span>本站总访人数<span id="busuanzi_value_site_uv"></span></span>
</div>`,
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
  exportStatic: {},
  ...(process.env.NODE_ENV === 'development' ? {} : { ssr: {} }),
  headScripts: [
    { src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js', async: true, crossorigin: 'anonymous' },
    { src: "//busuanzi.ibruce.info/busuanzi/2.3/busuanzi.pure.mini.js", async: true }
  ],
});
