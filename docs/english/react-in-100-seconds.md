---
description: 'React, a Javascript library for building user interfaces developed at Facebook and released in 2013.'
keywords: [程序员, 英文晨读]
group:
  title: 紫升英文晨读
order: 5
toc: content
---

# React in 100 Seconds

React, a Javascript library for building user interfaces developed at Facebook and released in 2013. It's safe to say React has been the most influential UI library of recent memory. We use it to build components that represent logical, reusable parts of the UI. The beauty of React is that the simplicity of building a component has been brought down to its theoretical minimum.

It's just a Javascript function. It's so easy, a caveman could do it. The return value from this function is your HTML or UI, which is written in a special syntax called JSX, allowing you to easily combine Javascript with HTML markup. If you want to pass data into a component, you simply pass it. A props argument, which you can then reference inside the function body or in the UI using braces. If the value changes, React will react to update the UI.

If we want to give our component its own internal state, we can use the state hook. The hook is just a function that returns a value, as well as a function to change the value. In this case, `count` is our reactive state, and `setCount` will change the state. When used in the template, the `count` will always show the most recent value. Then we can bind `setCount` to a button click event so the user can change the state.

React provides a variety of other built-in hooks to handle common use cases. But the main reason you might want to use React is not the library itself, but the massive ecosystem that surrounds it. React itself doesn't care about routing, state management, animation or anything like that. Instead, it lets those concerns evolve naturally within the open source community. No matter what you're trying to do, there's very likely a good supporting library to help you get it done. Need a static site?

You have Gatsby need server-side rendering, You have next for animation, you have Spring for forms, you have formic.

State management You've got Redux, Mobx, Flux, Recoil, XState and more. You have an endless supply of choices to get things done the way you like it. As an added bonus, once you have React down, you can easily jump into React Native and start building mobile apps. And it's no surprise that knowing this little UI library is one of the most in-demand skills for front-end developers.

Today, this has been React in 100 seconds. If you want to see more short videos like this, make sure to like and subscribe and check out more advanced React content on Fireship .io. And if you're curious how I make these videos, make sure to check out my new personal channel and video on that topic. Thanks for watching and I will see you in the next one.

## 核心词汇

1. built-in：内置的

## 译文

React 是 Facebook 开发的一个用于构建用户界面的 Javascript 库，于 2013 年发布。可以说，React 是近期最具影响力的用户界面库。我们用它来构建组件，这些组件代表了用户界面中符合逻辑、可重复使用的部分。React 的美妙之处在于将构建组件的简易性降到了理论上的最低点。

它只是一个 Javascript 函数。它是如此简单，一个穴居人都能做到。这个函数的返回值就是你的 HTML 或 UI，它们是用一种叫做 JSX 的特殊语法编写的，让你可以轻松地将 Javascript 与 HTML 标记结合起来。如果要向组件传递数据，只需传递 一个道具参数，然后您就可以在函数体内部或用户界面中使用大括号引用该参数。如果值发生变化，React 就会做出反应，更新用户界面。

如果我们想赋予组件自己的内部状态，可以使用状态钩子。钩子只是一个返回值的函数，也是一个改变值的函数。在本例中，“count ”是我们的反应状态，而 “setCount ”将改变该状态。在模板中使用时，`count` 将始终显示最近的值。然后，我们可以将 `setCount` 绑定到按钮点击事件，这样用户就可以更改状态了。

React 提供了多种其他内置钩子来处理常见用例。但是，您可能想要使用 React 的主要原因并不是该库本身，而是围绕它的庞大生态系统。React 本身并不关心路由、状态管理、动画或类似的东西。相反，它让这些问题在开源社区中自然发展。无论您想做什么，都很可能有一个很好的支持库来帮助您完成。需要一个静态网站？

你有 Gatsby 来进行服务器端渲染，你有 next 来制作动画，你有 Spring 来制作表单，你有 formic。

状态管理 你有 Redux、Mobx、Flux、Recoil、XState 等等。你有无穷无尽的选择，可以按照自己喜欢的方式完成工作。另外，一旦掌握了 React，您就可以轻松地跳转到 React Native，开始构建移动应用程序。毫不奇怪，了解这个小小的 UI 库是前端开发人员最需要的技能之一。

这就是今天的 React 100 秒。如果你想观看更多类似的短视频，请务必点赞和订阅，并在 Fireship .io 上查看更多高级 React 内容。如果你好奇我是如何制作这些视频的，请务必查看我的新个人频道和相关视频。感谢观看，我们下期再见。
