---
description: 'Redux a single source of truth for all the data in your Javascript application.'
keywords: [程序员, 英文晨读]
group:
  title: 紫升英文晨读
order: 7
---

# Vite in 100 Seconds

Vite, a Javascript build tool that simplifies the way we build and develop front-end web applications. At its core, it does two things one serve your code locally during development, and two, bundle your Javascript, CSS, and other assets together for production. There are many other tools out there that do the same thing, like Webpack, so what makes Vite different? Well, it was created by Evan You, who also created Vue.js as a way to both simplify and speed up the build process.

Not long ago, web developers had no native way to combine Javascript files together in a modular way. This led to tools like WebPack and Rollup that concatenate multiple files together into a single bundle for the browser. The problem is that this process becomes increasingly slow as the app adds more code and dependencies. In 2015, ECMAScript modules were introduced and by 2020 had wide browser support, allowing developers to import and export code from different files in the browser. Vite leverages native ES modules in the browser to load your code instantly, no matter how large the app is.

It also supports hot module replacement for an extremely fast feedback loop during development. When building for production, it uses rollup under the hood, so you don't have to worry about configuring it. It's an opinionated tool that provides conventions that work out of the box for the majority of developers. To get started, run `npm init vite` from the command line and choose a starter project with your favorite front-end framework. You'll notice the project comes with a Vite config file.

It has a plugin ecosystem that can extend it with additional features, and you can also manually override the rollup defaults when necessary. And there are some really cool plugins out there, like Vite SSR that can do server-side rendering like Next.js. Now to serve the application locally. Run `npm run dev`. Even if I install a bunch of big dependencies like lodash and moment, the time to run the Dev server does not change. Now, if you open the Network tab in the browser Dev Tools, you'll notice that instead of importing a single Javascript bundle file, it's importing our actual source code like a raw TSX file.

In this case, it also makes TypeScript about 20-30 times faster because it skips type checking and uses esbuild to transpile your code. Now, as you're developing your app, you might change the state of it in the UI, then realize that some of the code needs to change. When you modify the source code, the changes will be reflected instantly without losing the state of the application. That's what we call hot module replacement.

Now, run `npm run build` to build the app for production. This will generate a Javascript bundle with Rollup with a bunch of automatic optimizations like automatic code splitting for any dynamic imports and CSS. This has been vite in 100 seconds. If you want to see more short videos like this, hit the Like button and subscribe. Thanks for watching and I will see you in the next one.

## 核心词汇

1. Vite /vit/：快速的
1. simplifies /ˈsɪmplɪfaɪz/：简化
1. during /ˈdʊrɪŋ/：在…期间
1. production /prəˈdʌkʃn/：生产
1. modular /ˈmɑːdʒələr/：模块化的
1. led to /liːd tu/：导致
1. concatenate /kɑnˈkæt(ə)ˌneɪt/：连接
1. leverage /ˈlevərɪdʒ/：利用（技术、工具、资源等）方面（leverages /ˈlevərɪdʒɪz/）
1. instantly /ˈɪnstəntli/：adv. 立即地
1. HMR (Hot Module Replacement) /hɑːt ˈmɑːdʒuːl rɪˈpleɪsmənt/：热模块替换
1. opinionated /əˈpɪnjəneɪtɪd/：有主见的；固执己见的
1. conventions /kən'venʃnz/：约定; 协定
1. majority /məˈdʒɔːrəti/：大多数，大部分
1. choose /tʃuːz/：选择
1. cool /kuːl/：酷的
1. manually /ˈmænjuəli/：手动地
1. override /ˌoʊvərˈraɪd/：覆盖
1. transpile /trænˈspaɪl/：转译
1. automatic /ˌɔːtəˈmætɪk/ ：自动的
1. optimization /ˌɑːptɪməˈzeɪʃn/：优化

## 翻译

Vite 是一款 Javascript 构建工具，它简化了我们构建和开发前端 Web 应用程序的方式。它的核心功能有两个：一是在开发过程中为你的代码提供本地服务；二是将你的 Javascript、CSS 和其他资产打包在一起用于生产。有很多其他工具也能做同样的事情，比如 Webpack，那么 Vite 有什么不同呢？Vite 是由尤雨溪创建的，他还创建了 Vue.js，以简化和加快构建过程。

不久前，网络开发人员还没有原生的方法将 Javascript 文件以模块化的方式组合在一起。这就催生了 WebPack 和 Rollup 这样的工具，它们能将多个文件串联在一起，成为浏览器的单一打包文件。问题是，随着应用程序添加更多代码和依赖，这一过程变得越来越慢。2015 年，ECMAScript 模块问世，到 2020 年已广泛支持浏览器，允许开发人员在浏览器中从不同文件导入和导出代码。Vite 利用浏览器中的原生 ES 模块，无论应用程序有多大，都能即时加载你的代码。

它还支持热模块替换，从而在开发过程中实现极快的反馈循环。在为生产构建时，它在内部使用 rollup，因此你不必担心配置问题。它是一个有主见的工具，为大多数开发人员提供了开箱即用的约定。要开始使用，请在命令行中运行 `npm init vite`，然后选择一个带有你最喜欢的前端框架的启动项目。你会发现该项目附带了一个 Vite 配置文件。

它有一个插件生态系统，可以为其扩展额外的功能，你也可以在必要时手动覆盖 rollup 默认值。此外，还有一些非常酷的插件，比如可以像 Next.js 一样进行服务器端渲染的 Vite SSR。现在为本地应用提供服务。运行 `npm run dev`。即使我安装了 lodash 和 moment 等一大堆依赖，运行 Dev 服务器的时间也不会改变。现在，如果你打开浏览器 Dev Tools 中的网络选项卡，你会发现它不是导入单个 Javascript 捆绑文件，而是导入我们的实际源代码，比如原始 TSX 文件。

在这种情况下，它还会使 TypeScript 的速度提高 20-30 倍，因为它会跳过类型检查，使用 esbuild 来转译你的代码。现在，当你在开发应用程序时，你可能会在 UI 中改变它的状态，然后意识到有些代码需要更改。当你修改源代码时，这些变化会立即反映出来，而不会丢失应用的状态。这就是我们所说的热模块替换。

现在，运行 `npm run build` 为生产构建应用程序。这会生成一个带有 rollup 的 Javascript 捆绑包，其中包含大量自动优化功能，例如对任何动态导入和 CSS 进行自动代码拆分。这就是 Vite 100 秒。如果你想看更多这样的短视频，请点击 “赞 ”按钮并订阅。感谢观看，我们下期再见。
