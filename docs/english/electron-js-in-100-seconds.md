---
description: 'Redux a single source of truth for all the data in your JavaScript application.'
keywords: [程序员, 英文晨读]
group:
  title: 紫升英文晨读
order: 5
toc: content
---

## Electron JS in 100 Seconds

<iframe width="100%" height="415" src="https://www.youtube.com/embed/m3OjWNFREJo?si=ABZb9D8oOHunM4FX" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

Electron build native desktop apps for platforms like MacOS and Windows using nothing but HTML, CSS, and JavaScript. It's a tool behind many popular apps that you might be using today, like VS Code, Slack and Discord, just to name a few. On the front end, you build UIs just like you would for a browser-based web app, and you can bring along your favorite frameworks. But in Electron, you also have access to Node.js, and that means you can access low-level APIs that you don't normally have access to in a sandbox. Browser like Electron combines the front-end and back-end technologies, and provides a bunch of other tools to work with native menus, the system tray, and so on.

Let's go ahead and build a desktop app. Now. Run `npm init` in an empty directory, then install Electron, then create a `main.js` file and set that as the main entry point into your app. Every Electron app has exactly one main process running. It manages the lifecycle of your app and opens the windows that the end user will see. Each window is its own independent render process, running with the Chromium web browser.

When your main app is ready, you can start a new render process by instantiating a browser window. Then tell the window to load a regular HTML file, it will render the HTML, CSS, and JavaScript. But do so in a native window and give you access to low-level APIs. To build a true desktop experience, create an `index.html` file and put whatever code you want inside of it. But notice how I'm accessing `Node.Globals` directly in my HTML.

That's not something you can do in a normal web browser, and Electron gives you control over the operating system UI as well. For example, add your own icon and controls to the system tray with just a few lines of code. Now, after you build something awesome, you can package it for multiple operating systems from a single codebase. Tools like Electron Packager or Forge can handle the entire distribution process for you with a single command.

This has been Electron in 100 seconds. Stay tuned for a full Electron project in a few days and make sure to hit the like button. If you want to see more short videos like this. Thanks for watching and I will see you in the next one.

## 100 秒 了解 Electron JS

> 喜马拉雅：https://m.ximalaya.com/sound/821630949?from=pc

Electron 只需使用 HTML、CSS 和 JavaScript，即可为 MacOS 和 Windows 等平台构建本地桌面应用程序。它是你现在可能正在使用的许多流行应用程序背后的工具，如 VS Code、Slack 和 Discord 等。在前端，你可以像构建基于浏览器的 Web 应用程序一样构建用户界面，还可以使用你最喜欢的框架。但在 Electron 中，你还可以访问 Node.js，这意味着你可以访问在沙盒中通常无法访问的低级 APIs。像 Electron 这样的浏览器结合了前端和后端技术，并提供了大量其他工具来处理本地菜单、系统托盘等。

让我们构建一个桌面应用程序。现在 在一个空目录下运行 `npm init`，然后安装 Electron，接着创建一个 `main.js` 文件，并将其设置为进入你的应用程序的主入口。每个 Electron 应用都有一个主进程在运行。它管理你的应用程序的生命周期，并打开最终用户将看到的窗口。每个窗口都是独立的渲染进程，使用 Chromium 网页浏览器运行。

当你的主应用准备就绪时，你可以通过实例化一个浏览器窗口来启动一个新的呈现进程。然后告诉窗口加载一个普通的 HTML 文件，它就会渲染 HTML、CSS 和 JavaScript。但要在本地窗口中进行，并让你访问低级 APIs。要构建真正的桌面体验，可创建一个 `index.html` 文件，并在其中放入你想要的任何代码。但请注意，我是如何在 HTML 中直接访问 `Node.Globals`的。

这在普通网页浏览器中是做不到的，而且 Electron 还能让你控制操作系统的用户界面。例如，只需几行代码就能在系统托盘中添加你自己的图标和控件。现在，在你创建了一些很棒的东西之后，你可以从一个代码库中为多个操作系统打包它。Electron Packager 或 Forge 等工具只需一条命令就能为你处理整个发布过程。

这就是 Electron 100 秒。请继续关注几天后的完整 Electron 项目，并确保点击 “赞” 按钮。如果你想看到更多类似的短视频，请点击 “喜欢” 按钮。感谢观看，我们下期再见。

## 单词&短语

1. **electron** [ɪˈlektrɑːn]：一个使用 JavaScript、HTML 和 CSS 等 Web 技术创建原生程序的开源框架。
2. **render process** [ˈrɛndərprɑːses]：渲染进程
3. **Chromium** [ˈkroʊmiəm]：Google 主导开发的一款网页浏览器，它基于 KHTML 的 Webkit 渲染引擎。
4. **instantiate** [ɪnˈstænʃieɪt]：【计】实例化
5. **icon** [ˈaɪkɑːn]：图标
6. **Discord** [ˈdɪskɔːrd]：一款实时聊天应用程序，由 Discord Inc. 开发。
7. **just to name a few**：仅举几例。
8. **browser-based**：基于浏览器的
9. **bring along**：和...使用
10. **access** ['ækses]：访问
11. **combines** [kəmˈbaɪnz]：结合
12. **a bunch of**：大量的
13. **process** [ˈprɑːses]：进程
14. **Chromium** [ˈkroʊmiəm]：Google 主导开发的一款网页浏览器，它基于 KHTML 的 Webkit 渲染引擎。
15. **experience** [ɪkˈspɪriəns]：体验
16. **command** [kəˈmænd]：命令
17. **stay tuned** [tjʊnd]：继续关注；敬请期待
