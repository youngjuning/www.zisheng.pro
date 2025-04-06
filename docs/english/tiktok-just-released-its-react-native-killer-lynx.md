---
description: "It's the moment we've all been waiting for a brand new game-changing blazingly fast."
keywords:  [程序员, 英文晨读]
group:
  title: 紫升英文晨读
order: 999
toc: content
---

> 喜马拉雅：https://m.ximalaya.com/sound/825892333?from=pc

## TikTok just released its React Native killer Lynx

It's the moment we've all been waiting for a brand new game-changing blazingly fast. JavaScript framework just hit the timeline yesterday. Bytedance, the company that gave the world the gift of social media crack via TikTok, gave the world another gift. In the form of an open-source, multi-platform app development framework called Lynx. Developers can throw fossilized relics like React Native and Flutter in the garbage and rewrite their native mobile apps from scratch. With shiny new, rust-based tooling and a high-performance dual-threaded UI rendering engine like React Native, it empowers web developers to build shoddy iOS and Android apps with JavaScript.

But Lynx claims to achieve smoother pixel-perfect UIS and faster launch times compared to other cross-platform tools. That's a big claim, and in today's video, we'll try out Lynx and find out if it's a legit React native killer. It is March 6, 2025, and you're watching the code report. Lynx is not just another half-baked GitHub project written by a 19-year-old on prescription amphetamines. It's not the terminal browser with the same name, but rather a production-ready framework that's already in use in high-traffic apps at TikTok.

It doesn't power the main TikTok app where you would post your cringe dance videos, but it does power the search panel, TikTok Studio and a bunch of other ancillary apps. I find this very interesting because ByteDance was one of the early adopters of Flutter and is still on the Flutter showcase today. In addition, if they wanted to use web technologies to build mobile apps, why not just use something like React, Native, Ionic or NativeScript instead of reinventing the wheel? Well, the unspoken reason is that creating new frameworks gives U.S. developers job security. But the official reason in their blog post is mostly about performance. Throughout history, many people have criticized React Native for not feeling truly native. And that's because it relies on a single-threaded JavaScript bridge that allows JavaScript code to communicate with native code like Swift on iOS or Kotlin on Android.

But that single-threaded bridge is a big bottleneck that can create performance issues.

The React Native team has addressed this by building a custom engine called Hermes and released the fabric renderer a few years ago. Which some have called the new and improved bridge, or a bridgeless architecture. But ByteDance has taken a different approach, with links using a dual-threaded architecture, where user code and framework code are split into two distinct runtimes. The main thread is powered by PrimJs, which itself is built on QuickJs, which is a tiny, 210 kilobyte JavaScript engine. Its job is to handle synchronous UI tasks like event handling, while user code runs on A, which means the crappy, inefficient code you write won't block the main thread and degrade performance. And the end result is instant first frame rendering for the end user.

Or, in other words, no blank screens. That's pretty cool. But what's even more awesome is that this engine is framework agnostic. You don't have to use React and could build your app in Svelte Vue or whatever framework you want. In addition, it supports actual native CSS features for styling like transition, animations, variables, gradients, and so on, and that's a lot more intuitive for web developers.

The major problem, though, is that there's virtually no ecosystem around this framework. There's no expo tooling to solve all your problems, and there's no massive widget library like you have in Flutter. That being said, let's go ahead and try it out to find out if it has any potential. When you generate a project, the first thing you'll notice is that it uses RSPack, which is a Rust-based module bundler that's supposedly even faster than Vite. That'll generate a starter template in TypeScript. And if we look at the code, it looks like a basic React .js project, where the UI is represented with HTML and CSS.

But if we take a closer look at the markup, you'll notice we're using non-standard elements like Vue Text and Image. These look like HTML tags, but they actually correspond to native elements. On different platforms, like View is UIView in iOS, or ViewGroup in Android, but would translate to a DIV on the web. And what's especially awesome here is that we can use regular CSS or even Tailwind to style these elements. Which is, you can't really do in React Native, although you could use tools like NativeWind. But now let's go ahead and run it. The easiest way to run it on mobile is to use the Lynx Explorer app, which allows you to live preview it on your phone.

But when I tried to compile it on Windows, I immediately got an error, so I tried to switch to the Windows subsystem for Linux. And while it compiled, I could never actually get it to run on the Explorer app. So finally, I had to dust off my old MacBook and everything seemed to work a lot smoother on Macos. And as you can see here, when I make changes to my code locally, it'll automatically re-render the demo on my phone. Impressive, very nice. I think Lynx has a lot of potential.

And that's bad news because it means I need to re-write all my code with this shiny new object. At least I can review all that code automatically. Thanks to CodeRabbit, the sponsor of today's video, an AI Copilot for code reviews that gives you instant feedback on every pull request. Unlike basic Linters, it understands your entire codebase, so it can catch more subtle issues like bad code style or missing test coverage. Then it will suggest simple one-click fixes to help you get things cleaned up quickly.

CodeRabbit keeps learning from your PRs over time, so the more you use it, the smarter it gets. It's 100 free for open source projects, but you can get one month free for your team using the code Fireship with the link below. This has been the code report. Thanks for watching and I will see you in the next one.

## 单词&短语

1. Lynx [lɪŋks]：字节跳动的跨平台 UI 框架 Lynx

## TikTok 发布了 React Native 杀手 Lynx

这是我们期待已久的时刻。JavaScript 框架昨天刚刚进入时间线。通过 TikTok 给世界带来社交媒体裂缝的 Bytedance 公司，又给世界带来了一份礼物。它就是名为 Lynx 的开源多平台应用程序开发框架。开发人员可以把 React Native 和 Flutter 等陈旧过时的东西扔进垃圾桶，从头开始重写他们的原生移动应用程序。通过闪闪发光的基于 rust 的新工具和像 React Native 一样的高性能双线程用户界面渲染引擎，它让网络开发人员有能力用 JavaScript 构建低劣的 iOS 和 Android 应用程序。

但与其他跨平台工具相比，Lynx 声称能实现更流畅的像素级用户界面和更快的启动时间。在今天的视频中，我们将试用 Lynx，看看它是否是 React native 的合法杀手。现在是 2025 年 3 月 6 日，您正在观看的是代码报告。Lynx 并不是另一个由 19 岁的年轻人嗑安非他命写成的半成品 GitHub 项目。它不是同名的终端浏览器，而是已经在 TikTok 的高流量应用程序中使用的生产就绪框架。

它并不支持你发布蹩脚舞蹈视频的主 TikTok 应用程序，但它支持搜索面板、TikTok Studio 和其他一些辅助应用程序。我觉得这非常有趣，因为 ByteDance 是 Flutter 的早期采用者之一，如今仍在 Flutter 展示区。此外，如果他们想使用网络技术来构建移动应用程序，为什么不直接使用 React、Native、Ionic 或 NativeScript 等技术，而要重新发明轮子呢？说不清道不明的原因是，创建新框架能为美国开发人员提供工作保障。但他们博文中的官方理由主要是关于性能。纵观历史，很多人都批评 React Native 没有真正的原生感。这是因为它依赖于一个单线程 JavaScript 桥接器，允许 JavaScript 代码与 iOS 上的 Swift 或 Android 上的 Kotlin 等原生代码通信。

但是，单线程桥是一个很大的瓶颈，会产生性能问题。

React Native 团队通过构建一个名为 Hermes 的自定义引擎来解决这个问题，并在几年前发布了织物渲染器。有些人将其称为新的改进桥，或者无桥架构。但 ByteDance 采用了不同的方法，链接使用双线程架构，用户代码和框架代码被分成两个不同的运行时。主线程由 PrimJs 驱动，而 PrimJs 本身是基于 QuickJs 构建的，后者是一个 210 千字节的小型 JavaScript 引擎。它的任务是处理事件处理等同步用户界面任务，而用户代码则在 A 上运行，这意味着你编写的低效代码不会阻塞主线程，也不会降低性能。最终的结果是，终端用户可以立即看到第一帧的渲染效果。

换句话说，就是不会出现空白屏幕。这很酷。但更棒的是，这个引擎与框架无关。你不必使用 React，也可以用 Svelte Vue 或任何你想要的框架来构建你的应用。此外，它还支持用于样式设计的实际原生 CSS 功能，如过渡、动画、变量、渐变等，这对于网络开发人员来说更加直观。

但主要的问题是，这个框架周围几乎没有生态系统。没有 expo 工具来解决你的所有问题，也没有像 Flutter 那样的大规模 widget 库。尽管如此，我们还是来试试它是否有潜力。当你生成一个项目时，首先会注意到它使用了 RSPack，这是一个基于 Rust 的模块捆绑工具，据说比 Vite 更快。它会生成一个 TypeScript 初始模板。如果我们看一下代码，它看起来就像一个基本的 React .js 项目，用户界面用 HTML 和 CSS 表示。

但如果我们仔细看看这些标记，就会发现我们使用了一些非标准元素，比如 Vue Text 和 Image。这些元素看起来像 HTML 标记，但实际上对应的是本地元素。在不同的平台上，如 iOS 中的 View 是 UIView，Android 中的 ViewGroup 是 ViewGroup，而在网页上则是 DIV。最棒的是，我们可以使用常规的 CSS 或 Tailwind 来为这些元素设计样式。虽然你可以使用 NativeWind 这样的工具，但在 React Native 中却无法做到这一点。现在让我们继续运行它。在手机上运行它的最简单方法是使用 Lynx Explorer 应用程序，它允许你在手机上实时预览。

但当我尝试在 Windows 上编译它时，立即出现了错误，于是我尝试切换到 Linux 的 Windows 子系统。虽然编译成功了，但我始终无法让它在资源管理器应用程序上运行。最后，我只好把我的旧 MacBook 拿出来看看，在 Macos 上一切运行似乎都顺畅多了。正如你在这里看到的，当我在本地修改代码时，它会自动在我的手机上重新渲染演示。令人印象深刻，非常棒。我认为 Lynx 有很大的潜力。

这是个坏消息，因为这意味着我需要用这个闪亮的新对象重新编写我所有的代码。至少，我可以自动审查所有代码。感谢今天视频的赞助商 CodeRabbit，这是一款用于代码审查的 AI Copilot，它能为你的每个拉取请求提供即时反馈。与基本的 Linters 不同，它能理解你的整个代码库，因此能捕捉到更多细微的问题，比如糟糕的代码风格或缺失的测试覆盖率。然后，它会提出简单的一键修复建议，帮助你快速清理问题。

随着时间的推移，CodeRabbit 会不断从你的 PR 中学习，所以你用得越多，它就越聪明。它对开源项目是 100 免费的，但你可以通过下面的链接为你的团队使用代码 Fireship 获得一个月的免费服务。以上就是代码报告。感谢观看，我们下期再见。
