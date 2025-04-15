---
title: '计算机'
description: '词汇库'
keywords: [全栈, 紫升, 程序员, 词汇库]
group:
  title: 词汇库
  order: 5
order: 1
toc: content
proseWrap: preserve
---

## leverage [ˈlevərɪdʒ]

- 利用（技术、工具、资源等）方面
  - leverages existing libraries：利用现有的库
  - leverages data：利用数据
  - leverages computing resources：利用计算资源
- 发挥优势（技术、架构等）方面
  - leverages the scalability of a microservices architecture：发挥微服务架构的可扩展性优势
  - leverages the efficiency of the HTTP/3 protocol：发挥 HTTP/3 协议的效率优势

## override [ˌoʊvərˈraɪd]

- 函数重写
  - In object-oriented programming, a subclass can override a method of its superclass to provide a different implementation.（在面向对象编程中，子类可以重写父类的方法以提供不同的实现。）
- 配置覆盖
  - The user-specified settings override the default configurations.（用户指定的设置覆盖默认配置。）

## module [ˈmɑːdʒuːl]

- 模块
  - A module is a self-contained unit of code that encapsulates related functionality.（模块是一组相关功能的自包含代码单元。）
  - A module can be a single file, a directory, or a package.（模块可以是单个文件、目录或包。）

## Atwood's law [ˈætwɔːd]

- 阿特伍德定律：Any application that can be written in Javascript will eventually be written in Javascript.（任何能用 Javascript 编写的应用最终都会用 Javascript 编写。）

## SpeechRecognition [ˈspitʃrɪkəɡˈnɪʃən]

The SpeechRecognition interface of the Web Speech API is the controller interface for the recognition service; this also handles the SpeechRecognitionEvent sent from the recognition service.

**SpeechRecognition** 接口是网络语音 API的控制接口，用于识别服务；它还处理从识别服务发送的SpeechRecognitionEvent。

## Javascript [dʒɑːvəskrɪpt]

Javascript (JS) is a lightweight interpreted (or just-in-time compiled) programming language with first-class functions. While it is most well-known as the scripting language for Web pages, many non-browser environments also use it, such as Node.js, Apache CouchDB and Adobe Acrobat. Javascript is a prototype-based, multi-paradigm, single-threaded, dynamic language, supporting object-oriented, imperative, and declarative (e.g. functional programming) styles.

Javascript（JS）是一种具有函数优先特性的轻量级、解释型或者说即时编译型的编程语言。虽然作为 Web 页面中的脚本语言被人所熟知，但是它也被用到了很多非浏览器环境中，例如 Node.js、Apache CouchDB、Adobe Acrobat 等。进一步说，Javascript 是一种基于原型、多范式、单线程的动态语言，并且支持面向对象、命令式和声明式（如函数式编程）风格。

## React [riˈækt]

React is a declarative, efficient, and flexible **Javascript library** developed by Facebook (now Meta) for building **user interfaces**, particularly single-page applications (SPAs). It revolutionizes front-end development through its **component-based architecture**, allowing developers to create reusable UI components that manage their own state and logic. By leveraging a **virtual DOM**, React optimizes performance by minimizing direct manipulation of the actual DOM, updating only the parts of the interface that change. Its **declarative syntax** (JSX) enables a seamless blend of HTML-like templates with Javascript logic, simplifying code readability and maintenance. React also enforces **one-way data flow**, ensuring predictable state management, and supports modern features like **Hooks** for stateful functional components. With a robust ecosystem (e.g., React Native for mobile apps, Redux for state management) and a vast developer community, React has become a cornerstone of modern web development.

**React** 是一个**声明式、高效且灵活**的 **Javascript 库**，由 Facebook（现 Meta）开发，专注于构建**用户界面**，尤其是单页应用（SPA）。它通过**组件化架构**革新了前端开发模式，允许开发者创建可复用的 UI 组件，这些组件能自主管理状态和逻辑。
通过**虚拟 DOM** 技术，React 优化了性能：仅在状态变化时计算差异并更新实际 DOM 的对应部分，而非直接操作整个 DOM 树。其**声明式语法（JSX）** 将类 HTML 模板与 Javascript 逻辑无缝结合，提升代码可读性和可维护性。
React 采用**单向数据流**确保状态管理的可预测性，并引入 **Hooks**（如 `useState` 和 `useEffect`）支持函数组件管理状态与副作用，逐步替代传统类组件。
凭借强大的生态系统（如 React Native 用于移动开发、Redux 用于状态管理）和庞大社区，React 已成为现代 Web 开发的核心工具之一。

### Redux [ˈriːdʌks]

Redux is a predictable state container for Javascript applications. It's mainly used to manage the state of applications and is widely utilized especially in complex front - end single - page applications (SPAs) or React applications. The core concept is that the entire state of an application is stored in a single object tree, and this state tree is read - only. When the state needs to be modified, it can only be done by dispatching a plain object known as an "action" to describe what has occurred. Then, a function called a "reducer" generates a new state according to this action. This approach makes state changes predictable and facilitates debugging and understanding the state flow of an application. For example, in a large - scale e - commerce website application, the state of the shopping cart (such as adding items, deleting items, modifying quantities, etc.) can be well - managed by Redux, which ensures that every change to the shopping cart state can be tracked and understood.

Redux 是一个用于 Javascript 应用程序的可预测状态容器。它主要用于管理应用的状态，特别是在复杂的前端单页面应用（SPA）或者 React 应用中被广泛使用。它的核心概念是将应用的整个状态存储在一个单一的对象树中，这个状态树是只读的。当要修改状态时，只能通过发送一个被称为 `action` 的纯对象来描述发生了什么。然后有一个被称为 `reducer` 的函数会根据这个 `action` 来生成新的状态。这种方式使得状态的变化变得可预测，便于调试和理解应用的状态流程。例如，在一个大型的电商网站应用中，购物车的状态（商品的添加、删除、数量修改等）就可以很好地用 Redux 来管理，它能确保购物车状态的每一次改变都是可以追踪和理解的。

### Zustand [zuːstænd]

Zustand is a state management library for Javascript applications. It provides a simple and efficient way to manage and share state across different components. With Zustand, you can create a store that holds the application's state and allows components to access and update it. It's designed to be lightweight and easy to use, enabling developers to handle complex state - related operations without a lot of boilerplate code. It's especially useful in React applications, where it can help to streamline the process of passing data between components and keeping the state consistent.

Zustand 是一个用于 Javascript 应用程序的状态管理库。它提供了一种简单且高效的方式来在不同组件之间管理和共享状态。通过使用Zustand，你可以创建一个存储应用程序状态的存储区，并且允许组件访问和更新这个状态。它的设计轻巧且易于使用，使得开发者能够处理复杂的与状态相关的操作，同时无需大量的样板代码。它在React应用程序中尤其有用，在这些程序中，它有助于简化组件之间传递数据的过程，并保持状态的一致性。

<!-- #### Hooks

#### JSX

#### Virtual DOM

#### one-way data flow -->

## Node.js [nəʊdʒeɪ-es]

Node.js is a free, open-source, cross-platform Javascript runtime environment that lets developers create servers, web apps, command line tools and scripts.

Node.js 是一个免费、开源的跨平台 Javascript 运行时环境，让开发者创建服务器、Web 应用程序、命令行工具和脚本。

> 发音技巧：两个 d 在一起，念成一个 d

## WebAssembly [webəˈsembli]

WebAssembly (abbreviated Wasm) is a binary instruction format for a stack-based virtual machine. Wasm is designed as a portable compilation target for programming languages, enabling deployment on the web for client and server applications.

WebAssembly（缩写为 Wasm /'wɔzəm/）是一种基于堆栈的虚拟机的二进制指令格式。Wasm 被设计为编程语言的可移植编译目标，支持在 Web 上部署客户端和服务器应用程序。

## prototype-based programming [ˈproʊtəˌtaɪp-beɪst ˈproʊɡræmɪŋ]

Prototype-based programming is a style of object-oriented programming in which classes are not explicitly defined, but rather derived by adding properties and methods to an instance of another class or, less frequently, adding them to an empty object.

基于原型的编程是一种面向对象编程风格，在这种编程风格中，类不是显式定义的，而是通过向另一个类的实例添加属性和方法派生出来的，或者不太常见的是向一个空对象添加属性和方法。

## Expo [ˈekspoʊ]

Expo is an open-source platform for making universal native apps for Android, iOS, and the web with Javascript and React.

Expo 是一个开源平台，用于使用 Javascript 和 React 为 Android、iOS 和 Web 制作通用原生应用程序。

## scope [skoʊp]

- 作用域
  - 含义：作用域是指程序中变量、函数等标识符的可访问范围。例如，在编程语言中，变量的作用域决定了在程序的哪些部分可以访问和修改该变量。它有助于控制变量的生命周期和可见性，避免命名冲突等问题。
  - 例句：
    - In Javascript, the scope of a variable declared inside a function is limited to that function.（在 Javascript 中，在函数内部声明的变量的作用域仅限于该函数。）
    - The scope of a global variable is throughout the entire program.（全局变量的作用域贯穿整个程序。

## Lynx [lɪŋks]

- 跨平台 UI 框架
  - 介绍：2025 年 3 月字节跳动正式宣布开源其跨平台 UI 框架 Lynx，开发者可通过一份代码同时构建移动端原生界面与 Web 端界面， 已在 TikTok 等应用中得到验证，具有高性能多功能渲染引擎和性能优先的双线程 UI 编程范式等特性，其采用 Rust 开发的现代工具链，确保了运行时的效率与稳定性.
  - 例句：Lynx enables developers to build cross-platform applications more efficiently with its unique architecture and powerful features.（Lynx 凭借其独特的架构和强大的功能，使开发者能够更高效地构建跨平台应用程序。）

## 短语

### from scratch [frəm skrætʃ]

from scratch 意思是从头开始，这是一个口语表达。 它可以用来形容一件事情完全从零开始，从起跑线开始。

- Compile from scratch for maximum speed and performance. 从头开始编译以获得最大速度和性能。
- You can even create your own filetype from scratch. 你甚至可以从头开始创建自己的文件类型。

### built-in [bɪlt ɪn]

“内置的”。它通常用于描述一个功能或特性已经内置在某个软件或系统中，不需要额外的安装或配置。

- The camera has a built - in flash.（这个相机有一个内置闪光灯。）
- This computer has a built - in microphone.（这台电脑有一个内置麦克风。）
