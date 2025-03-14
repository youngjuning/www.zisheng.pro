---
title: JavaScript Modules in 100 Seconds
description: 'JavaScript, a high-level, single-threaded, garbage-collected, interpreted, or just-in-time compiled prototype-based, multi-paradigm, dynamic language with a non-blocking event loop, made famous for building websites.'
keywords: [程序员, 英文晨读]
group:
  title: 紫升英文晨读
  order: 1
order: 2
---

# JavaScript Modules in 100 Seconds

Let's say you have some Javascript code that lives in a single file. You can turn this code into a module by exporting it. This allows other files to use an import statement to import this file as a dependency. So a module is nothing more than a file that exports its own code. This allows developers to organize code within their own projects or share code with the world through package managers like NPM.

In modern front-end development, it's most common to use ES modules, which became an official language feature in 2015.

This syntax is also supported in Node 13, but traditionally the way to do this in Node is with require js. It's a similar idea, but instead, we use this require function to import a module. Require is more common now, but the future is ES modules. A module can export its code in a variety of ways, and this will affect the way the consumer imports it.

A module can export a single default value, multiple values, or both. If a module provides a default export. It means the consumer can call import name from Path. The importing file can choose whatever name it wants. But a module also has the option to expose multiple exports from a single file. You can export them one by one or all together as a single export list. On the other side, the importer will use the exact name used in the module.

However, it is possible to rename an import using the `as` keyword. A huge benefit of named exports is that they make the module tree-shakeable. That means the consumer only imports the code they actually need, resulting in smaller bundle sizes and better performance. You can also combine the best of both worlds to give you a hybrid syntax that looks like this. It helps to have a cheat sheet.

![](https://cdn.jsdelivr.net/gh/youngjuning/images@main/1741913107018.png)

My personal favorite is the one from Samantha Ming. If you don't already follow her awesome post on Twitter, you definitely should be.

This has been ES modules in 100 seconds. Thanks for watching and I will see you in the next one.


## 翻译

比方说，你有一些存在于单个文件中的 Javascript 代码。你可以通过导出将这些代码变成一个模块。这样，其他文件就可以使用导入语句将该文件作为依赖文件导入。因此，模块只不过是一个导出自身代码的文件。这样，开发人员就可以在自己的项目中组织代码，或通过包管理器（如 NPM）与全世界共享代码。

在现代前端开发中，使用 ES 模块最为常见，该模块在 2015 年成为官方语言特性。

Node 13 也支持这种语法，但传统上在 Node 中使用 require.js 来实现这一功能。这是一个类似的想法，但我们使用这个 require 函数来导入模块。Require 现在更为常见，但 ES 模块才是未来的趋势。模块可以多种方式导出代码，这将影响消费者导入模块的方式。

模块可以导出一个默认值，也可以导出多个值，或者两者兼而有之。如果一个模块提供了默认导出，这意味着消费者可以调用导入名称。这意味着消费者可以从路径中调用导入名称。导入文件可以选择它想要的任何名称。但模块也可以选择从单个文件导出多个导出值。你可以逐个导出，也可以作为一个导出列表一起导出。另一方面，导入程序将使用模块中使用的确切名称。

不过，可以使用 `as` 关键字重命名导入。命名导出的一个巨大好处是，它可以使模块树具有可动摇性。这意味着用户只导入他们实际需要的代码，从而减小了捆绑包的大小，提高了性能。你还可以将这两种方法的优点结合起来，形成类似下面这样的混合语法。有一份小抄会很有帮助。

我个人最喜欢 Samantha Ming 提供的小抄。如果你还没有在 Twitter 上关注她的精彩文章，那就一定要关注。

这就是 ES 模块 100 秒。感谢观看，我们下期再见。

## 核心词汇

1. common /ˈkɑːmən/：常见的
1. module /ˈmɑːdʒuːl/：模块
1. syntax /ˈsɪntæks/：语法
1. but instead /ɪnˈsted/：但却；相反；但是
1. export /ɪkˈspɔːrt/：导出
1. a variety of /ə vəˈraɪəti əv/：多种；各种各样的
1. consumer /kənˈsuːmər/：消费者
