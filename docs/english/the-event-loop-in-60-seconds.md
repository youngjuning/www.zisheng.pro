---
description: 'Javascript is single-threaded, it can only handle one task at a time. We can use web APis to interact with the features leveraged by the browser, and some of these APIS allow us to initiate async tasks in the background'
keywords: [程序员, 英文晨读]
group:
  title: 紫升英文晨读
order: 2
---

# The event loop in 60 seconds

Javascript is single-threaded, it can only handle one task at a time. We can use web APIs to interact with the features leveraged by the browser, and some of these APIs allow us to initiate async tasks in the background, so the function call that initiates an async task like that is still added to the call stack, but this is just to hand it off to the browser. The actual async task is handled in the background, so it does not block the call stack.

The task queue is used by callback-based web APIs to enqueue the callback. Once the asynchronous task has completed, then we have the microtask queue, which is only used by promise handlers, the `async` function bodies after `await`, the `queueMicrotask()` queue callbacks and the `new MutationObserver` callbacks. This queue has priority over the task queue, and the event loop ensures that this queue is entirely empty before moving on to the task queue. And after handling each task from the task queue, the event loop again checks the microtask queue to ensure that nothing has been added in the meantime.

## 核心词汇

1. handle /ˈhændl/：处理
1. handlers /ˈhændlərz/：处理程序
1. leveraged /ˈlevərɪdʒd/：利用
1. initiate /ɪˈnɪʃiˌeɪt/：发起
1. async /əˈsɪŋk/ or /eɪ'sɪŋk/：abbr.异步
1. actual /ˈæktʃuəl/：实际的
1. event loop /ɪˈvent lup/：事件循环
1. single-threaded /ˈsɪŋɡl ˈθredɪd/：单线程的
1. call stack /kɔːl stæk/：调用栈
1. task queue /tæsk kjuː/→/tæskjuː/：任务队列
1. microtask queue /ˈmaɪkroʊtæsk kjuː/→/ˈmaɪkroʊtæskjuː/：微任务队列
1. priority /praɪˈɔːrəti/：优先权
1. ensures /ɪnˈʃʊrz/：确保
1. in the meantime /ɪn ðə ˈmiːntaɪm/→/ɪnə ˈmiːntaɪm/：与此同时
1. macrotask /ˈmækroʊtæsk/：宏任务

## 译文

Javascript 是单线程的，一次只能处理一个任务。我们可以使用网络 API 与浏览器利用的功能进行交互，其中一些 API 允许我们在后台启动异步任务，因此启动异步任务的函数调用仍会添加到调用栈中，但这只是为了将其交给浏览器。实际的异步任务是在后台处理的，因此不会阻塞调用栈。

基于回调的网络 API 会使用任务队列来对回调进行排队。异步任务完成后，我们就有了微任务队列，它只被 Promise 处理程序、`await` 后的 `async` 函数体、`queueMicrotask()` 回调和 `new MutationObserver` 回调使用。该队列的优先级高于任务队列，事件循环确保该队列完全清空后才会转到任务队列。在处理完任务队列中的每个任务后，事件循环会再次检查微任务队列，以确保在此期间没有添加任何任务。

## 微任务队列

### Promise 处理程序

```js
.then(() => { ... })
.catch(() => { ... })
.finally(() => { ... })
```

### `await` 后的 `async` 函数体

```js
async function asyncFunction() {
  await ...
  // Function body execution following await
}
```

### `queueMicrotask()` 回调

```js
queueMicrotask(() => {... })
```

### `new MutationObserver` 回调

```js
const observer = new MutationObserver(() => {... })
```

## 宏任务微任务

| **特性**       | **宏任务**                   | **微任务**                   |
|----------------|-----------------------------|-----------------------------|
| **优先级**     | 低（下一个事件循环）         | 高（当前宏任务结束后立即执行） |
| **典型场景**   | 定时器、I/O、渲染            | Promise、DOM 变更监听        |
| **队列处理**   | 每次事件循环处理一个         | 每次宏任务结束后清空全部      |

**关键点**：理解事件循环的“**同步 → 微任务 → 渲染 → 宏任务**”流程是掌握异步编程的核心。

### 宏任务（Macrotask）

由浏览器或 Node.js 环境触发的异步任务，每个宏任务会开启新的事件循环周期。常见类型包括

- `setTimeout`、`setInterval`
- I/O 操作（如文件读写、网络请求）
- UI 渲染（浏览器环境）
- `setImmediate`（Node.js 环境）

### ​微任务（Microtask）​

需在**当前宏任务结束后立即执行**的任务，优先级高于下一个宏任务。常见类型包括：

- `Promise.then`、`Promise.catch`、`Promise.finally`
- `MutationObserver`（DOM 变更监听）
- `process.nextTick`（Node.js 环境）

### 事件循环（Event Loop）的优先级规则

**​执行顺序流程**：

​- 同步代码：优先执行主线程的同步任务（如 `console.log`）。
​- 微任务队列：当前宏任务执行完毕后，立即清空所有微任务（包括执行过程中新产生的微任务）。
​- 渲染阶段​（浏览器环境）：检查是否需要 UI 渲染（如 DOM 更新）。
- ​下一个宏任务：从宏任务队列中取出一个任务执行，重复上述流程。

**​核心规则**：

- ​微任务优先级高于宏任务：当前宏任务结束后，必须先执行完所有微任务，才能执行下一个宏任务。
- ​微任务嵌套会立即执行：若微任务执行过程中产生新的微任务，会继续添加到当前微任务队列并立即执行，直到队列清空。

### 代码示例与执行顺序解析

```js
console.log("1"); // 同步任务
setTimeout(() => console.log("2"), 0); // 宏任务
Promise.resolve().then(() => console.log("3")); // 微任务
console.log("4"); // 同步任务
```

输出顺序：`1 → 4 → 3 → 2`

解释：

1. 同步任务输出 1 和 4。
2. 当前宏任务（主线程）结束后，执行微任务队列中的 `Promise.then`，输出 3。
3. 最后执行宏任务队列中的 `setTimeout`，输出 2。

### 常见场景与陷阱

1、​嵌套任务

若宏任务中产生微任务，微任务会在当前宏任务结束前执行：

```js
setTimeout(() => {
  console.log("宏任务");
  Promise.resolve().then(() => console.log("微任务"));
}, 0);
```

输出顺序为：`宏任务` → `微任务`。

2、​微任务阻塞渲染

长时间运行的微任务会延迟 UI 渲染，因为微任务队列必须在渲染前清空。
