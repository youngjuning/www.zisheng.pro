---
description: "Javascript Promise in 100 Seconds"
keywords:  [程序员, 英文晨读]
group:
  title: 全栈英文晨读
order: 8
toc: content
---

## Javascript Promise in 100 Seconds

<iframe width="100%" height="415" src="https://www.youtube.com/embed/RvYYCGs45L4?si=7sseJ4tyA1U73eZT" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

A promise represents a value that is unknown now that may become known in the future, in other words, an asynchronous value. Think of it like a ride-hailing app When you request a ride, the driver makes a promise to pick you up while you're waiting. The ride is pending.

In the future, if all goes according to plan, the driver will resolve to pick you up, then take you somewhere. At which point your ride has been fulfilled, but in some cases, the driver might reject your ride, in which case, you'll need to catch one somewhere else. Either way, the original request is now finally settled. As a developer, you might want to create a promise to represent an asynchronous value, but more often than not, you'll be consuming promises to use the result of an asynchronous operation in your code.

On the left, we're making promises, on the right, we're using them. When constructed, a promise starts off in a pending state. It's your job to define a callback function, called an executor, that defines when to resolve or reject the promise. This is where you would kick off your asynchronous work. On the other side, the consumer of the promise has called its `then` method.

It's waiting for the asynchronous value to be fulfilled. When that happens, it will call this function with the value as its argument. We fulfill the promise by calling resolve. But there's always the possibility of an exception, in that case, we can reject the promise and send the error back down to the consumer. Which can use the `catch` method and an entirely different function for handling exceptions. And if you just want to run some code no matter what, you can use, `finally`, to handle both possibilities.

All of these methods return promises, which means they can be chained together to handle multiple asynchronous operations in a row. This has been Javascript promises in 100 seconds. Thanks for watching and also make sure to follow my brand new Instagram account for even more content on this topic. I will see you in the next one.

## 100 秒速览 Javascript Promise

promise 代表一个现在未知、将来可能会知道的值，换句话说，是一个异步值。把它想象成一个叫车应用程序 当你请求叫车时，司机会承诺在你等待时来接你。这趟车是待定的。

将来，如果一切按计划进行，司机会决定来接你，然后带你去某个地方。此时，你的搭车请求已经实现，但在某些情况下，司机可能会拒绝你的搭车请求，在这种情况下，你需要到其他地方搭车。无论如何，最初的请求现在终于解决了。作为开发人员，你可能想创建一个 promise 来表示异步值，但更多时候，你会在代码中消耗 promise 来使用异步操作的结果。

在左边，我们正在创建 promise，在右边，我们正在使用它们。在构建承诺时，承诺一开始处于待定状态。你的工作是定义一个回调函数，称为执行器，它定义了何时解析或拒绝承诺。你的异步工作将从这里开始。在另一侧，promise 的消费者调用了它的 `then` 方法。

它正在等待异步值的实现。一旦实现，它就会调用这个以值为参数的函数。我们通过调用 `resolve` 来实现承诺。但总是有可能出现异常，在这种情况下，我们可以拒绝该 promise，并将错误发送回消费者。我们可以使用 `catch` 方法和完全不同的函数来处理异常。而如果你只想无论如何都运行一些代码，你可以使用，`finally`，来处理这两种可能性。

所有这些方法都会返回 promise，这意味着它们可以串联起来，连续处理多个异步操作。以上就是 100 秒内的 Javascript promise。感谢您的收看，也请务必关注我全新的 Instagram 账户，以获取更多相关内容。我们下期再见。

## 单词&短语

1. **resolve** [rɪˈzɑːlv]：*v.* 解决，实现
1. **represents** [ˌreprɪˈzents]：*v.* 代表，表示
1. **reject** [rɪˈdʒɛkt]：*v.* 拒绝，拒绝
1. **will be consuming sth.** [kənˈsuːmɪŋ]：*v.* 将消费（consume 的将来进行时）
1. **Promise** [ˈprɑːmɪs]：*n.* 期约
1. **consumer** [kənˈsuːmər]：*n.* 消费者
1. **asynchronous** [eɪˈsɪŋkrənəs]：*adj.* 异步的
1. **fulfilled** [fʊlˈfɪld]：*adj.* 已完成的
1. **pick sb. up**：*phr.* 接某人
1. **make promise to do sth.**：*phr.* 承诺做某事
1. **ride-hailing** [ˈheɪlɪŋ]：*phr.* 网约车服务；叫车服务
1. **in which case**：*phr.* 在这种情况下
1. **Either way** [iːðər]：*phr.* 无论如何；不管怎样；无论哪种方式
1. **more often than not**： *phr.* 往往；通常；更常见的情况
1. **kick off**：*phr.* 开始，启动
1. **in the other side**：*phr.* 另一方面
1. **in a row**： *phr.* 连续地
