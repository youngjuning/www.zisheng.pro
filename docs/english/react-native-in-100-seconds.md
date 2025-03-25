---
description: 'Redux a single source of truth for all the data in your Javascript application.'
keywords: [程序员, 英文晨读]
group:
  title: 紫升英文晨读
order: 7
---

> 喜马拉雅：https://m.ximalaya.com/sound/821163980?from=pc

# React Native in 100 Seconds

React Native, Write Javascript and React to build apps for iOS, Android, and the web from a single code base. According to Atwood's law, any application that can be written in Javascript will eventually be written in Javascript. The first way JS developers tried to build mobile apps was by wrapping their native applications in a sandbox browser called a WebView, using tools like Apache, Cordova and Adobe PhoneGap. The philosophy is write once, run anywhere.

This works, but it can be hard to make a website feel like a true native experience. React Native takes a different approach, it feels just like React DOM for the web. But instead of using HTML and the DOM as building blocks for the UI, it uses the native components that you would find on iOS and Android. The philosophy is learn once, write anywhere. You can't just take your existing React web app and upload it to the App Store, but you can use the React skills. You already have to build a native app without ever having to touch Java or Objective-C.

Instead, you import building block components like button, switch, scrollview, and the most fundamental of which is View. At runtime, it will use the true native component on the corresponding platform, like UIView, Android View, or DIV on the web. It's like building three apps for the price of one. But in some cases, you may want a different visual experience based on the underlying OS. The Platform module allows you to check which platform you're on and render different components accordingly. When it comes to visuals, there's no CSS in React Native.

Instead, every core component takes a style prop that can be customized with a style sheet constructed from Javascript. In development, it supports fast refresh, which means you can instantly see the changes you make to your code on any platform. You may also want to tap into native features like the device camera, push notifications, and geolocation. These concerns are handled by one of the most active open-source communities on GitHub. There's open-source packages for almost everything that can be installed with NPM, just like any other Javascript project.

And there's frameworks like Expo that build on top of React Native primitives to provide all the tooling required to ship your app to production. You can use React Native to build a complete mobile app, or integrate it with existing iOS and Android projects. It's not an all-or-nothing solution. This has been React Native in 100 seconds. If you want to see more short videos like this, hit the like button and subscribe.

And let me know if you want to see more React Native content in the comments. Thanks for watching and I will see you in the next one.

## 词汇

1. eventually /ɪˈventʃuəli/：adv.最终，结果
1. wrapping /ˈræpɪŋ/：包装、封装
1. sandbox /ˈsændbɑːks/：沙箱
1. Apache /əˈpæʃ/：阿帕奇
1. Cordova /ˈkɔːrdəvə/：一个重要的开源移动应用程序开发框架
1. Adobe PhoneGap /əˈdoʊbi ˈfoʊnɡæp/：一创建移动跨平台移动应用程序的快速开发平台
1. philosophy /fəˈlɑːsəfi/：理念
1. anywhere /ˈeniwer/：adv. 任何地方，无论何处
1. experience /ɪkˈspɪriəns/： 体验
1. component /kəm'poʊnənt/：组件
1. already /ɔːlˈredi/：adv. 已经
1. fundamental /ˌfʌndəˈmentl/：基本的；基础的
1. corresponding /ˌkɔːrəˈspɑːndɪŋ/：相应的
1. visual/ˈvɪʒuəl/（u 丢掉）：视觉的
1. underlying /ˌʌndərˈlaɪɪŋ/：底层的
1. accordingly /əˈkɔːrdɪŋli/：adv. 相应地
1. primitive /ˈprɪmətɪv/：基元
1. constructed /kənˈstrʌktɪd/：构建、构造、创建
1. instantly /ˈɪnstəntli/：adv. 立即地
1. geolocation /ˌdʒiːəʊləʊˈkeɪʃ(ə)n/：定位
1. all-or-nothing /ˌɔːlɔːr ˈnʌθɪŋ/：非全即无
1. integrate /ˈɪntɪˌɡreɪt/：集成

## 译文

React Native，编写 Javascript 和 React，通过单一代码库为 iOS、Android 和 Web 构建应用程序。根据阿特伍德定律，任何能用 Javascript 编写的应用最终都会用 Javascript 编写。JS 开发人员尝试构建移动应用的第一种方式是使用 Apache、Cordova 和 Adobe PhoneGap 等工具，将他们的原生应用封装在称为 WebView 的沙盒浏览器中。其理念是一次编写，随处运行。

这种方法行之有效，但要让网站感觉像真正的原生体验却很难。React Native 采用了一种不同的方法，感觉就像用于网络的 React DOM。但它并不使用 HTML 和 DOM 作为用户界面的构建模块，而是使用 iOS 和 Android 上的原生组件。它的理念是 “一次学习，随处编写”。你不能把现有的 React Web 应用程序上传到 App Store，但你可以使用 React 技能。你已经有了构建原生应用的能力，而无需接触 Java 或 Objective-C。

取而代之的是，你导入按钮、开关、滚动视图等构建块组件，其中最基本的是 View。运行时，它将使用相应平台上的真正原生组件，如 UIView、Android View 或网页上的 DIV。这就好比用一个应用程序的价格构建了三个应用程序。但在某些情况下，你可能希望根据底层操作系统获得不同的视觉体验。平台模块可以让你检查你所处的平台，并相应地呈现不同的组件。说到视觉效果，React Native 中没有 CSS。

相反，每个核心组件都会采取一种样式属性，可以用 Javascript 构建的样式表进行自定义。在开发过程中，它支持快速刷新，这意味着你可以在任何平台上立即看到你对代码所做的修改。你可能还想利用设备摄像头、推送通知和地理位置等本地功能。这些问题都由 GitHub 上最活跃的开源社区之一来处理。几乎所有的开源软件包都可以用 NPM 安装，就像其他 Javascript 项目一样。

还有像 Expo 这样的框架，它们建立在 React Native 基元之上，提供将你的应用交付到生产所需的所有工具。你可以使用 React Native 构建一个完整的移动应用程序，也可以将其与现有的 iOS 和 Android 项目集成。这不是一个全有或全无的解决方案。这就是 React Native 100 秒。如果你想看到更多这样的短视频，请点击 “喜欢 ”按钮并订阅。

如果你想看更多 React 原生内容，请在评论中告诉我。感谢观看，我们下期再见。
