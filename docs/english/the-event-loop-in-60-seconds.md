---
description: 'Javascript is single-threaded, it can only handle one task at a time. We can use web APis to interact with the features leveraged by the browser, and some of these APIS allow us to initiate async tasks in the background'
keywords: [程序员, 英文晨读]
group:
  title: 紫升英文晨读
order: 2
toc: content
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
