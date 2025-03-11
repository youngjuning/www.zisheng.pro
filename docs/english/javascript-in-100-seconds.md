---
order: 2
title: JavaScript in 100 Seconds
description: 'JavaScript, a high-level, single-threaded, garbage-collected, interpreted, or just-in-time compiled prototype-based, multi-paradigm, dynamic language with a non-blocking event loop, made famous for building websites.'
keywords: [程序员, 英文晨读]
nav:
  title: 程序员英语
  order: 1
group:
  title: 紫升英文晨读
  order: 0
---

## JavaScript in 100 Seconds

JavaScript, a high-level, single-threaded, garbage-collected, interpreted, or just-in-time compiled prototype-based, multi-paradigm, dynamic language with a non-blocking event loop, made famous for building websites.

It was created in 1995, in just one week, by Brendan Eich, with the goal of adding an easy-to-learn scripting language to the Netscape browser. It was originally named Mocha, but the genius marketing people of the time wanted it to sound like that sexy new Java language.

Today, it's a fully-featured language that continues to evolve through the ECMAScript standard. It's most well-known for building front-end web applications, because it's the only language other than WebAssembly that is natively supported in browsers. However, anything that can be built with JavaScript will be built with JavaScript, like server-side applications with Node.js, mobile applications with React Native or Ionic, and desktop apps with Electron.

It's an interpreted scripting language, but tools like the V8 Engine and Chromium use a just-in-time compiler to convert it to machine code at runtime. It's also excellent at handling I.O. intensive jobs, despite the fact that it's a single-threaded language made possible by a non-blocking event loop that can queue up work in the background without blocking the main thread.

To get started, create a file ending in .js. Your code will start executing from the global context. Use the console to log a value with the built-in debugger. Now think about where you want to run this file.
Is it a front-end browser or a back-end Node.js server?

In the browser, you can reference it with a script tag, then the browser will execute it when you open that HTML file. On a website, JavaScript is often used to grab an element from the DOM. DocumentQuerySelector will grab the first button, then we can assign it to a variable with either var, let, or const. Var is the OG way to do it, but is typically avoided. Let is for variables that can be reassigned, while const is for variables that cannot be reassigned. Now to make the button interactive, we can add an event listener to it by defining a function for the onClick event.

We can use the function keyword here, or the more concise arrow syntax. Now the event loop will execute this function whenever a new click occurs. Functions are first-class objects to support functional programming patterns, but JavaScript also supports classes and inheritance for object-oriented patterns. Even though it's single-threaded, it can do work asynchronously with the promise API, which also supports the async-await syntax.

JS code can also run on the server thanks to the Node.js runtime. Instead of buttons on a webpage, it interacts with things like the file system API. Execute your code on the server by pulling up the terminal and entering the node command.

## 翻译

JavaScript 是一种高级、单线程、垃圾回收、解释型或基于原型的即时编译、多范式、动态语言，具有非阻塞事件循环，因构建网站而闻名。

它于 1995 年由布兰登-艾奇（Brendan Eich）在短短一周内创建，目的是为网景浏览器添加一种易于学习的脚本语言。它最初被命名为 Mocha，但当时的天才营销人员希望它听起来像那种性感的 Java 新语言。

如今，它已成为一种功能齐全的语言，并通过 ECMAScript 标准不断发展。它在构建前端网络应用程序方面最为人熟知，因为除了 WebAssembly 之外，它是唯一一种浏览器原生支持的语言。不过，任何可以使用 JavaScript 构建的应用程序都将使用 JavaScript 构建，例如使用 Node.js 的服务器端应用程序、使用 React Native 或 Ionic 的移动应用程序以及使用 Electron 的桌面应用程序。

JavaScript 是一种解释型脚本语言，但 V8 引擎和 Chromium 等工具使用即时编译器在运行时将其转换为机器码。尽管 Electron 是一种单线程语言，但它能在不阻塞主线程的情况下在后台排队处理工作，因此它在处理 I.O. 密集型工作方面也非常出色。

要开始使用，请创建一个以 .js 结尾的文件。您的代码将从全局上下文开始执行。使用控制台的内置调试器记录数值。现在想想你想在哪里运行这个文件。
是前端浏览器还是后端 Node.js 服务器？

在浏览器中，您可以用脚本标签引用它，然后浏览器就会在您打开 HTML 文件时执行它。在网站上，JavaScript 通常用于从 DOM 中抓取元素。DocumentQuerySelector 会抓取第一个按钮，然后我们可以用 var、let 或 const 将其赋值给一个变量。Var 是最常用的方法，但一般不使用。Let 用于可以重新赋值的变量，而 const 用于不能重新赋值的变量。现在，为了使按钮具有交互性，我们可以为 onClick 事件定义一个函数，从而为按钮添加一个事件监听器。

在这里，我们可以使用函数关键字，也可以使用更简洁的箭头语法。现在，只要有新的点击发生，事件循环就会执行该函数。函数是支持函数式编程模式的一级对象，但 JavaScript 也支持面向对象模式的类和继承。尽管 JavaScript 是单线程的，但它可以使用 promise API 异步运行，该 API 也支持 async-await 语法。

借助 Node.js 运行时，JS 代码也可以在服务器上运行。它与文件系统 API 等交互，而不是网页上的按钮。调出终端并输入 node 命令，即可在服务器上执行代码。

## 核心词汇

- garbage-collected：垃圾回收
- interpreted /ɪnˈtɜːrprɪtɪd/：解释性的
- just-in-time compiled：即时编译
- prototype-based：原型式
- multi-paradigm：多范式
- dynamic language：动态语言
- non-blocking event loop：非阻塞事件循环
- V8 Engine：V8 引擎
- Chromium：谷歌浏览器
- I.O. intensive jobs：I/O 密集型任务
- first-class objects：一等对象
- functional programming patterns：函数式编程模式
- object-oriented patterns：面向对象编程模式
- file system API：文件系统 API
- Brendan Eich：布兰登·艾奇
