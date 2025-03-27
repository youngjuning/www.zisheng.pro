---
description: "Zustand is incredibly simple to get started with"
keywords:  [程序员, 英文晨读]
group:
  title: 紫升英文晨读
order: 15
---

> 喜马拉雅：https://m.ximalaya.com/sound/826592114?from=pc

## 5 Zustand BEST Practices in 5 Minutes

Zustand is incredibly simple to get started with. It's unopinionated. But I'm gonna show you my favorite best practices when using it that will help keep it simple and maintainable as your app grows. The first one is how to pronounce it Zustand. Personally, though, I'm in camp Zustand.

If you don't know yet, Zustand is a state manager that makes global state effortless and only costs your bundle around a kilobyte. It really is the bare necessities for state management in React. But it's still powerful and allows you to enhance it with tools like middlewares to learn the best practices. We're going to need a Zustand store if you haven't used Zustand before. These next 20 seconds are going to be everything you need to get started. First, we need to create a hook.

`useTodoStore`. To do this, we use the Create function from Zustand, which we immediately invoke with a state setter function inside. In here, we define our initial state. In my case, that's going to be an empty todo array and `isSubscribed` is a Boolean.

Please go ahead and make that true. And then we have our `setTodos` action that uses the setter to immutably update the state with our new hook, any component can access and update the shared state. Making it incredibly easy to manage our `todos` across our entire application without prop drilling, context, overhead or any providers. Now, in the code that we just set up, I've already made a few mistakes, according to my best practices.

The first best practice is to only export custom hooks. Instead of using my `useTodoStore` hook to get the list of `todos`, instead, I should create a new hook that encapsulates my selector's logic and then uses this hook where I need to get the `todos`. This makes it cleaner and also means I don't have to repeat myself everywhere that I need the `todos` list. And it means I only have one place to modify the code if I want to change this selector's logic.

To enforce this, we're going to remove the export on the `useTodoStore` hook. This also ensures we can never accidentally subscribe to the entire store. You might think this code here is an efficient way to get the `todos` from the original hook. The problem is, your component will now rerender on any state change, not just the `todos`, even if they didn't change.

My next best practice is to use atomic stable selectors when you have multiple state values. One practice that might be coming from Redux users is to construct an object selector. This means in our hook, we extract all of the state that we need for a component in a newly constructed object. Like the `todos` and `isSubscribed`, don't do this. Zustand uses stricter quality to detect changes.

The trouble is, this selector, thanks to the way the Javascript works, creates a completely new object in memory. Every store update failing that stricter quality check and causing unnecessary re-renders, even when neither `todos` or the `isSubscribed` value has changed. That's why I prefer to just use two hooks, so I'll create `useSubscribed` to obtain that value. Now, if you really want object selectors, you can use the `useShallow` hook. Wrapping this around our selector. Means that Zustand performs a shallow comparison it checks if the individual properties of the object have changed, rather than comparing object references.

Personally, though, I prefer to just keep it atomic well, until we come to our actions. In this next tip, this tip is to keep your store organized by separating actions from state. Actions are our functions that modify state. These are static, they don't change, so we can create a single actions object on our store to hold all of them.

I would even go as far as separating the typescript types and then combining them into a single store type. Now, to use these functions, I would break that previous best practice for using atomic selectors and instead expose a single actions hook. Then, when I want to use an action, I can just destructure it. `useTodoActions` returns an object, so it sort of breaks our previous atomic rule. This is okay, though, in this one case, because the actions object should never change.

It's referentially stable, so even when we do use the destructuring pattern, state updates won't cause re-renders for unrelated state changes. As the selector is only looking at our actions, object, and that should be stable overall, these tips just help keep things nice and clean. Talking of our actions, another tip is to ensure that actions are modeled as events. This is true of nearly every state manager.

What this means is we don't simply make a `setTodos`'s action and then perform our business logic in our components, instead, we have the actions hold our business logic. So we have actions like `addTodo`, `removeTodo`, and `toggleIsSubscribed`. There we go, my Todo store is cleaned up. What happens when my app grows, though?

Easy Just create another store for the best experience. Ensure all of your stores are small and focused. In this case, I probably wouldn't even store the `isSubscribed` value in the Todo store, I'd create a separate one. This keeps us organized, cuts down on errors from accidental re-renders and makes testing easier.

Now there is a guide on having one store and utilizing separate slices instead for a slice. You don't use the hook, you use the setter function inside of the hook. You create a few of these and then we apply them to a single bound store. I personally just prefer separated stores. My final bonus tip is to look into middleware. You can use Emma to help cut down on messy destructuring in your stores. You can use Persist to automatically set up a local storage, and you can use DevTools to use ZooStand in Redux, DevTools in Chrome.

There we go. Let me know in the comments. If you have any of your own best practices while you're down there, subscribe and, as always, see you in the next one.

## 词汇

1. Zustand [zuːstænd]：Zustand 是一个用于 JavaScript 应用程序的状态管理库

## 5 个 Zustand 最佳实践

Zustand 的上手非常简单。它没有主见。但我会向你展示我在使用它时最喜欢的最佳实践，这将有助于在你的应用程序成长过程中保持它的简单性和可维护性。首先是如何发音 Zustand。就我个人而言，我是 Zustand 阵营的。

如果你还不知道，Zustand 是一种状态管理器，它能让全局状态变得毫不费力，而且只需花费你的 bundle 约一千字节。它确实是 React 中最基本的状态管理工具。但它仍然很强大，允许你用中间件等工具来增强它，学习最佳实践。如果你之前没有使用过 Zustand，我们将需要一个 Zustand 存储。接下来的 20 秒将是你入门所需的一切。首先，我们需要创建一个钩子。

useTodoStore"。为此，我们使用 Zustand 的 Create 函数，并立即调用其中的状态设置函数。在这里，我们定义了初始状态。在我的例子中，这将是一个空的待办事项数组，而 `isSubscribed` 是一个布尔值。

请将其设置为 true。然后我们就有了 `setTodos` 操作，它使用 setter 通过我们的新钩子固定更新状态，任何组件都可以访问和更新共享状态。这样，在整个应用程序中管理 `todos` 就变得异常简单，无需钻取属性、上下文、开销或任何提供者。现在，在我们刚刚设置的代码中，根据我的最佳实践，我已经犯了一些错误。

第一个最佳实践是只导出自定义钩子。我不应该使用 “useTodoStore ”钩子来获取 “todos ”列表，而是应该创建一个新钩子，封装我的选择器逻辑，然后在需要获取 “todos ”的地方使用这个钩子。这样会更简洁，也意味着我不必到处重复我需要 `todos` 列表。这还意味着，如果我想改变这个选择器的逻辑，只需在一个地方修改代码即可。

为了实现这一点，我们将删除 `useTodoStore` 钩子上的导出。这也确保我们不会意外地订阅整个商店。你可能会认为这里的代码是从原始钩子中获取 `todos` 的有效方法。问题是，你的组件现在会在任何状态变化时重新渲染，而不仅仅是 `todos`，即使它们并没有变化。

我的下一个最佳实践是，当你有多个状态值时，使用原子稳定选择器。Redux 用户可能会采用的一种做法是构建对象选择器。这意味着在我们的钩子中，我们会在一个新构建的对象中提取组件所需的所有状态。与 `todos` 和 `isSubscribed` 一样，不要这样做。Zustand 使用更严格的质量来检测变化。

问题是，由于 Javascript 的工作方式，这个选择器会在内存中创建一个全新的对象。即使 `todos` 或 `isSubscribed` 值都没有改变，每次商店更新都会导致更严格的质量检查失败，并引起不必要的重新渲染。这就是为什么我更愿意只使用两个钩子，所以我将创建 `useSubscribed` 来获取该值。现在，如果你真的想要对象选择器，可以使用 `useShallow` 钩子。将此钩子缠绕在我们的选择器上。这意味着 Zustand 会执行浅层比较，检查对象的各个属性是否发生了变化，而不是比较对象引用。

不过，就我个人而言，我更喜欢保持原子状态，直到我们开始执行操作。在接下来的提示中，这个提示是通过将操作与状态分离来保持你的存储有序。操作是我们修改状态的函数。这些函数是静态的，不会改变，因此我们可以在存储中创建一个单独的动作对象来保存所有的动作。

我甚至可以将 typescript 类型分开，然后将它们合并到一个单一的存储类型中。现在，为了使用这些函数，我将打破之前使用原子选择器的最佳做法，转而公开一个单一的动作钩子。这样，当我想使用某个动作时，就可以对其进行重组。`useTodoActions` 返回的是一个对象，因此它有点打破了我们之前的原子规则。不过，在这种情况下也没关系，因为动作对象永远不会改变。

它在引用上是稳定的，因此即使我们使用了重构模式，状态更新也不会导致无关状态变化的重新呈现。由于选择器只关注我们的操作对象，而该对象应该是稳定的，因此这些提示有助于保持事情的整洁。说到我们的操作，另一个提示是确保将操作建模为事件。这几乎适用于所有状态管理器。

这意味着我们不会简单地制作一个 `setTodos`'s 操作，然后在组件中执行我们的业务逻辑，相反，我们会让操作承载我们的业务逻辑。因此，我们有`addTodo`、`removeTodo`和`toggleIsSubscribed`等操作。这样，我的 Todo 存储就清理完毕了。但是，当我的应用程序增长时会发生什么呢？

简单 只要创建另一个商店，就能获得最佳体验。确保你的所有存储都小而集中。在这种情况下，我甚至可能不会在 Todo 存储中存储 `isSubscribed` 值，而是创建一个单独的存储。这样做可以使我们的工作井井有条，减少因意外重新读取而造成的错误，并使测试变得更容易。

现在有一份关于拥有一个存储空间并利用独立分片来代替分片的指南。你不使用钩子，而是使用钩子内部的 setter 函数。你可以创建几个这样的函数，然后我们将它们应用到一个单一的绑定存储区。我个人更喜欢分隔存储。我的最后一个额外建议是研究中间件。你可以使用 Emma 来帮助减少商店中混乱的重构。你可以使用 Persist 自动设置本地存储，还可以使用 DevTools 在 Redux 中使用 ZooStand，在 Chrome 浏览器中使用 DevTools。

就是这样。请在评论中告诉我。如果你在下面的时候有任何自己的最佳实践，请订阅，并一如既往，下期见。
