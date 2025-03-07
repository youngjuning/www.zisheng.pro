---
order: 2
title: JavaScript in 100 Seconds
description: '《全栈工程师面试宝典》是专为有志投身全栈开发领域的求职者精心打造的实用指南。'
keywords: [程序员, 英文晨读]
nav:
  title: 程序员英语
  order: 1
group:
  title: 紫升英文晨读
  order: 0
---

JavaScript, a high-level, single-threaded, garbage-collected, interpreted, or just-in-time compiled prototype-based, multi-paradigm, dynamic language with a non-blocking event loop, made famous for building websites.

It was created in 1995, in just one week, by Brendan Eich, with the goal of adding an easy-to-learn scripting language to the Netscape browser. It was originally named Mocha, but the genius marketing people of the time wanted it to sound like that sexy new Java language.

Today, it's a fully-featured language that continues to evolve through the ECMAScript standard. It's most well-known for building front-end web applications, because it's the only language other than WebAssembly that is natively supported in browsers. However, anything that can be built with JavaScript will be built with JavaScript, like server-side applications with Node.js, mobile applications with React Native or Ionic, and desktop apps with Electron.

It's an interpreted scripting language, but tools like the V8 Engine and Chromium use a just-in-time compiler to convert it to machine code at runtime. It's also excellent at handling I.O. intensive jobs, despite the fact that it's a single-threaded language made possible by a non-blocking event loop that can queue up work in the background without blocking the main thread.

To get started, create a file ending in .js. Your code will start executing from the global context. Use the console to log a value with the built-in debugger. Now think about where you want to run this file.
Is it a front-end browser or a back-end Node.js server?

In the browser, you can reference it with a script tag, then the browser will execute it when you open that HTML file. On a website, JavaScript is often used to grab an element from the DOM. DocumentQuerySelector will grab the first button, then we can assign it to a variable with either var, let, or const. Var is the OG way to do it, but is typically avoided. Let is for variables that can be reassigned, while const is for variables that cannot be reassigned. Now to make the button interactive, we can add an event listener to it by defining a function for the onClick event.

We can use the function keyword here, or the more concise arrow syntax. Now the event loop will execute this function whenever a new click occurs. Functions are first-class objects to support functional programming patterns, but JavaScript also supports classes and inheritance for object-oriented patterns. Even though it's single-threaded, it can do work asynchronously with the promise API, which also supports the async-await syntax.

JS code can also run on the server thanks to the Node.js runtime. Instead of buttons on a webpage, it interacts with things like the file system API. Execute your code on the server by pulling up the terminal and entering the node command.
