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
