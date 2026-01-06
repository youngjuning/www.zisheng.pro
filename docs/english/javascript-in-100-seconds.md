---
description: 'Javascript, a high-level, single-threaded, garbage-collected, interpreted, or just-in-time compiled prototype-based, multi-paradigm, dynamic language with a non-blocking event loop, made famous for building websites.'
keywords: [程序员, 紫升英文晨读]
group:
  title: 紫升英文晨读
order: 1
toc: content
---

## Javascript in 100 Seconds

<iframe width="100%" height="415" src="https://www.youtube.com/embed/DHjqpvDnNGE?si=zNoou0SS0TexPPA1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

Javascript, a high-level, single-threaded, garbage-collected, interpreted, or just-in-time compiled prototype-based, multi-paradigm, dynamic language with a non-blocking event loop, made famous for building websites.

It was created in 1995, in just one week, by Brendan Eich, with the goal of adding an easy-to-learn scripting language to the Netscape browser. It was originally named Mocha, but the genius marketing people of the time wanted it to sound like that sexy new Java language.

Today, it's a fully-featured language that continues to evolve through the ECMAScript standard. It's most well-known for building front-end web applications, because it's the only language other than WebAssembly that is natively supported in browsers. However, anything that can be built with Javascript will be built with Javascript, like server-side applications with Node.js, mobile applications with React Native or Ionic, and desktop apps with Electron.

It's an interpreted scripting language, but tools like the V8 Engine and Chromium use a just-in-time compiler to convert it to machine code at runtime. It's also excellent at handling I.O. intensive jobs, despite the fact that it's a single-threaded language made possible by a non-blocking event loop that can queue up work in the background without blocking the main thread.

To get started, create a file ending in `.js`. Your code will start executing from the global context. Use the console to log a value with the built-in debugger. Now think about where you want to run this file. Is it a front-end browser or a back-end Node.js server?

In the browser, you can reference it with a script tag, then the browser will execute it when you open that HTML file. On a website, Javascript is often used to grab an element from the DOM. `document.querySelector` will grab the first button, then we can assign it to a variable with either `var`, `let`, or `const`. `var` is the OG way to do it, but is typically avoided. `let` is for variables that can be reassigned, while `const` is for variables that cannot be reassigned. Now to make the button interactive, we can add an event listener to it by defining a function for the `onClick` event.

We can use the `function` keyword here, or the more concise arrow syntax. Now the event loop will execute this function whenever a new click occurs. Functions are first-class objects to support functional programming patterns, but Javascript also supports classes and inheritance for object-oriented patterns. Even though it's single-threaded, it can do work asynchronously with the promise API, which also supports the async-await syntax.

JS code can also run on the server thanks to the Node.js runtime. Instead of buttons on a webpage, it interacts with things like the file system API. Execute your code on the server by pulling up the terminal and entering the node command.

## 100 秒 Javascript 速览

> 喜马拉雅：https://m.ximalaya.com/sound/811947378?from=pc

Javascript 是一种高级、单线程、垃圾回收、解释型或即时编译的基于原型的多范式动态语言，具有非阻塞的事件循环，因其构建网站而闻名。

它于 1995 年创建，由 Brendan Eich 在短短一周内完成，目的是为 Netscape 浏览器添加一种易于学习的脚本语言。最初命名为 Mocha，但当时的营销天才们希望它听起来像那种性感的新 Java 语言。

今天，Javascript 已经是一个功能齐全的语言，它通过 ECMAScript 标准不断进化。它最著名的用途是构建前端网页应用，因为除了 WebAssembly 之外，它是唯一一种在浏览器中原生支持的编程语言。然而，任何可以用 Javascript 构建的应用都将使用 Javascript，比如使用 Node.js 的服务器端应用，使用 React Native 或 Ionic 的移动应用，以及使用 Electron 的桌面应用。

它是一种解释型脚本语言，但像 V8 引擎和 Chromium 这样的工具使用即时编译器在运行时将其转换为机器码。尽管它是一种单线程语言，但由于具有非阻塞的事件循环，可以在后台排队工作而不阻塞主线程，因此它也非常擅长处理 I/O 密集型任务。

要开始学习，创建一个以 `.js` 结尾的文件。代码将从全局上下文开始执行。使用内置的调试器在控制台记录一个值。现在考虑你想要在哪里运行这个文件。是前端浏览器还是后端 Node.js 服务器？

在浏览器中，你可以通过 script 标签来引用它，然后浏览器会在打开该 HTML 文件时执行它。在网站上，Javascript 通常用于从 DOM 中获取元素。 document.querySelector 会获取第一个按钮，然后我们可以用 `var`、`let` 或 `const` 将其赋值给变量。`var` 是原始的方法，但通常应避免使用。`let` 用于可重新赋值的变量，而 `const` 用于不可重新赋值的变量。现在为了使按钮可交互，我们可以通过定义一个函数来为它添加事件监听器，该函数对应于 `onClick` 事件。

这里可以使用 `function` 关键字，或者更简洁的箭头语法。现在事件循环会在每次发生新的点击时执行这个函数。函数是一等对象，支持函数式编程模式，但 Javascript 也支持类和继承来支持面向对象模式。尽管它是单线程的，但它可以通过 promise API 异步执行工作，该 API 也支持 async-await 语法。

借助 Node.js 运行时，JS 代码也可以在服务器上运行。它不是网页上的按钮，而是与文件系统 API 等事物交互。在终端中输入 `node` 命令来在服务器上执行代码。

## 单词&短语

1. **garbage-collected**：垃圾回收
2. **interpreted** /ɪnˈtɜːrprɪtɪd/：解释性的
3. **just-in-time compiled**：即时编译
4. **prototype-based**：原型式
5. **multi-paradigm**：多范式
6. **dynamic language**：动态语言
7. **non-blocking event loop** [ˌnɑːnˈblɑːkɪŋ ɪˈvent luːp]：非阻塞事件循环
8. **Mocha** [ˈmokər]： 摩卡
9. **continues** [kənˈtɪnjuːz]：继续
10. **evolve** [iˈvɑːlv/]：逐步发展，逐渐发展，逐渐演变
11. **interpreted** [ɪnˈtɜːrprɪtɪd]：解释性的
12. **thread** [θred]：【计】线程
13. **V8 Engine** [ˈendʒɪn]：V8 引擎
14. **Chromium** [ˈkroʊmiəm]：谷歌浏览器
15. **I.O. intensive jobs** [ɪnˈtensɪv]：I/O 密集型任务
16. **context** [ˈkɑntɛkst]：【计】上下文
17. **first-class objects**：一等对象
18. **functional programming patterns** [ˈfʌŋkʃənl ˈproʊɡræmɪŋ ˈpætərnz]：函数式编程模式
19. **object-oriented patterns**：面向对象编程模式
20. **file system API**：文件系统 API
21. **Brendan Eich**：布兰登·艾奇
22. **concise** [kənˈsaɪs]：简洁的
23. **asynchronously** [eɪˈsɪŋkrənəslɪ]：adv. 异步地
24. **async-await syntax** [əˈsɪŋk əˈweɪt ˈsɪntæks]：async-await 语法
25. **querySelector** [ˈkwɪri sɪˈlektər]：查询选择器
