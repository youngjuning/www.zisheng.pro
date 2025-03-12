---
title: Redux in 100 Seconds
description: 'Redux a single source of truth for all the data in your Javascript application.'
keywords: [程序员, 英文晨读]
group:
  title: 紫升英文晨读
order: 4
---

## 原文

Redux, A single source of truth for all the data in your Javascript application. Modern web applications are represented as a complex tree of components. Components that constantly produce and share data called state. And when state is decentralized, it can become difficult to understand and test.

Redux is both a pattern and library that helps developers implement complex state management requirements at scale. It was created by Dan Abramov and Andrew Clark at Facebook and is one of the most loved and hated libraries in the React ecosystem. It relies on a single immutable object to store all of the application's state kind of like a client-side database to change the state. Like, when a button is clicked, an action will be dispatched, which has a name, like an event, and a payload with the data that it wants to change.

Remember, the store is immutable. So, to change the state of the application, an entirely new object is created by passing the current state and the action payload into a reducer function, which returns a new object with the entire application's state. The end result is a one-way data flow that is predictable and testable. And it also opens the door to awesome dev tools that allow you to time travel through your application's data. But it comes at a cost of additional boilerplate code that might add too much complexity to a smaller project. To get started, create a React app with your favorite tool, then install the Redux toolkit. First, use ConfigureStore to set up the GlobalStore object, which will register any reducers defined elsewhere in the code.

Then, provider will make its data accessible to the entire component tree. Next, create a slice like pizza to represent some data in the store. It should have a unique name and initial state. But most importantly, it contains a collection of reducers, which are functions that take the old state and an action. Then define the logic required to change the state. Redux toolkit will automatically generate actions that correspond to the names of these reducer functions. We can export them, then put them to use in an actual UI component.

The beauty of Redux is that we can select data anywhere in the application without the need for context or prop drilling. Instead, we can grab any reactive value or slice in the store with the `useSelector` hook. Now, to change the application's data, an action needs to be dispatched to the store. That can be accomplished with the `useDispatch` hook, which might send an action name and data payload. On a normal browser event, like a button click.

Now, serve the application and install the Redux DevTools browser extension. Unlike a normal project, you're able to inspect and debug the entire timeline of actions and state changes in your application. This has been Redux in 100 seconds. Upgrade to Fireship Pro if you want to learn all kinds of other react concepts in a format like this. Thanks for watching and I will see you in the next one.

## 翻译

Redux 为您的 Javascript 应用程序中的所有数据提供单一真实源。现代网络应用程序表现为一棵复杂的组件树，这些组件不断生成和共享称为状态的数据。如果状态是去中心化的，就很难理解和测试。

Redux 既是一种模式，也是一个库，可以帮助开发人员大规模地实现复杂的状态管理要求。它由 Facebook 的 Dan Abramov 和 Andrew Clark 创建，是 React 生态系统中最受喜爱和憎恨的库之一。它依靠一个不可变对象来存储应用程序的所有状态，有点像客户端数据库来改变状态。比如，当按钮被点击时，一个动作将被派发，该动作有一个像事件一样的名称，以及一个包含要更改的数据的有效载荷。

请记住，存储是不可变的。因此，要改变应用程序的状态，需要将当前状态和动作有效载荷传递给一个还原函数，从而创建一个全新的对象，该还原函数会返回一个包含整个应用程序状态的新对象。最终形成的单向数据流是可预测和可测试的。此外，它还为您打开了一扇通往超棒开发工具的大门，让您可以在应用程序的数据中进行时间旅行。但是，这样做的代价是需要额外的模板代码，这可能会给小型项目增加过多的复杂性。要开始使用，先用你喜欢的工具创建一个 React 应用程序，然后安装 Redux 工具包。首先，使用 ConfigureStore 设置 GlobalStore 对象，该对象将注册代码中其他地方定义的还原器。

然后，provider 将使整个组件树都能访问其数据。接下来，创建一个像披萨一样的切片来表示存储中的一些数据。它应该有一个唯一的名称和初始状态。但最重要的是，它包含一个还原器集合，还原器是接收旧状态和操作的函数。然后定义改变状态所需的逻辑。Redux 工具包会自动生成与这些还原器函数名称相对应的动作。我们可以导出它们，然后将它们用于实际的用户界面组件中。

Redux 的美妙之处在于，我们可以在应用程序的任何地方选择数据，而无需上下文或属性透传。相反，我们可以使用 `useSelector` 钩子抓取存储中的任何反应值或片段。现在，要更改应用程序的数据，需要向存储分发一个操作。这可以通过 `useDispatch` 钩子来实现，它可能会发送一个动作名称和数据有效载荷。在正常的浏览器事件中，如点击按钮。

现在，为应用程序提供服务并安装 Redux DevTools 浏览器扩展。与普通项目不同，你可以检查和调试应用程序中的整个操作和状态变化时间线。这就是 100 秒内的 Redux。如果你想以这样的形式学习其他各种 react 概念，请升级到 Fireship Pro。感谢观看，我们下期再见。

## 核心词汇

- be represented as /bi ˌreprɪˈzentɪd æz/：表现为...
- decentralized /ˌdiːˈsentrəlaɪzd/：分散的；去中心化的
- ecosystem /ˈiːkoʊsɪstəm/：生态系统
- predictable /prɪˈdɪktəb(ə)l/：可预测的
- boilerplate code /ˈbɔɪlərpleɪt koʊd/ 样板代码
- complexity /kəmˈplɛksɪti/：复杂度
- prop drilling /ˈprɑːp ˈdrɪlɪŋ/：属性透传
- concepts /ˈkɑːnsepts/：概念
