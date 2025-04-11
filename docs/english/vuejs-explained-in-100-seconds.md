---
description: "Vue.js. It's a Javascript framework for building front-end UIs."
keywords:  [程序员, 英文晨读]
group:
  title: 全栈英文晨读
order: 8
toc: content
---

## Vue.js Explained in 100 Seconds

<iframe width="100%" height="415" src="https://www.youtube.com/embed/nhBVL41-_Cw?si=tfZhbPwrIX79Ijki" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

Vue.js. It's a Javascript framework for building front-end UIs. In Vue. You can start simple and then progressively add in the tools and features that you need to build a complex web application. At its core, it provides a way to build components that encapsulate data or state in your Javascript and then connect that state reactively to a template in HTML. We call these components declarative views, because the same data inputs will always produce the same output in the visual UI.

When we declare data on this data object, it links or binds it to the HTML on the template. When the value of the data changes, the component will automatically re-render. Or, in other words, it's reactive. And the framework does a ton of work under the hood to make sure that this process is performant across a huge component tree. We can work with this data in the template thanks to Vue's HTML-based template syntax, we can interpolate a value or expression using double braces.

And we also have a variety of directives to control the behavior of the HTML based on the data. We can use `v-if` to only render an element when the value on the right side is truthy, and then we might have a fallback element after that. That's only rendered when the value is falsy with `v-else`.

We can make the app interactive by listening to events using the `v-on` directive. We can listen to an event on an element, then run some code to handle that event on the right side. We can do that directly in the template or define a custom method in the component's methods object. The method has access to our reactive data, and that means all we have to do is change the value of the data and the component will automatically re-render. And that's all it takes to build an interactive reactive declarative UI component with Vue.

The framework is loved by developers for the simplicity, but also its ability to scale up in complexity incrementally. Its plugin system allows you to easily drop in things like a router, state management, firebase support, and more. And perhaps best of all, it's not sponsored by some mega corporation. It's not pressured to push out new releases all the time and does a great job listening to its community. This has been Vue.js in 100 seconds.

Stay tuned for a full length tutorial here on YouTube in the near future, and check out my Vue Firebase course on Fireship if you're ready to start building a full stack app. Thanks for watching and I will see you in the next one.

## 100 秒解释 Vue.js

> 喜马拉雅：https://xima.tv/1_4oqOGM?_sonic=0

Vue.js。这是一个用于构建前端用户界面的 Javascript 框架。在 Vue.js 中，您可以从简单的开始，然后逐步添加构建复杂网络应用所需的工具和功能。你可以从简单的开始，然后逐步添加构建复杂网络应用所需的工具和功能。Vue 的核心是提供一种构建组件的方法，这些组件在你的 Javascript 中封装数据或状态，然后将这些状态反应式地连接到 HTML 中的模板。我们称这些组件为声明式视图，因为相同的数据输入总是会在可视化用户界面中产生相同的输出。

当我们在该数据对象上声明数据时，它会将其链接或绑定到模板上的 HTML。当数据值发生变化时，组件将自动重新渲染。换句话说，它是被动的。该框架在引擎盖下做了大量工作，以确保这一过程在庞大的组件树中表现良好。得益于 Vue 基于 HTML 的模板语法，我们可以在模板中处理这些数据。

我们还可以使用各种指令，根据数据控制 HTML 的行为。我们可以使用 “v-if”，只在右边的值为真时才渲染一个元素，然后我们可能会在其后添加一个回退元素。只有当`v-else`的值为假时，才会呈现该元素。

我们可以使用 `v-on` 指令监听事件，使应用程序具有交互性。我们可以监听元素上的事件，然后在右侧运行一些代码来处理该事件。我们可以直接在模板中这样做，或者在组件的方法对象中定义一个自定义方法。该方法可以访问我们的反应数据，这意味着我们只需更改数据值，组件就会自动重新渲染。这就是使用 Vue 构建交互式反应声明式用户界面组件的全部过程。

Vue 框架因其简洁性和逐步提高复杂性的能力而深受开发人员的喜爱。它的插件系统允许你轻松添加路由器、状态管理、firebase 支持等功能。也许最重要的是，它不是由某个大型企业赞助的。它不会迫于压力而不断推出新版本，并能很好地倾听社区的声音。这就是 Vue.js 100 秒。

如果您准备开始构建全栈应用程序，请查看我在 Fireship 上的 Vue Firebase 课程。感谢观看，我们下期再见。

## 单词&短语

1. **progressively** [prəˈɡresɪvli]：*adv.* 渐进地
2. **encapsulate** [ɪnˈkæpsjuleɪt]：*vt.* 封装
3. **declarative** [dɪˈklærətɪv]：*adj.* 【计】声明式
4. **call sth. sth.**：*phr.* 把...成之为..
5. **produce** [prəˈdu:s]：*v.* 生成
6. **automatically** [ˌɔːtəˈmætɪkli]：adv. 自动地
7. **in other words**：*phr.* 换句话说
8. **a ton of**：*phr.* 大量的
9. **under the hood**：*phr.* 在幕后，在底层
10. **performant** [pərˈfɔːrmənt]：*adj.* 高性能的
11. **interpolate** [ɪnˈtɜːrpəleɪt]：*vt.* 插入，篡改
12. **expression** [ɪkˈsprɛʃən]：*n.* 表达式
13. **a variety of** [vəˈraɪəti]：各种各样的
14. **by listening to** [ˈlɪsnɪŋ]：*phr.* 通过监听...
15. **directive** [dɪˈrɛktɪv]：*n.* 【计】指令
16. **incrementally** [ˌɪŋkrəˈmentəli]：*adv.* 渐进地
17. **scale up in complexity incrementally**：随着复杂度逐步扩展
18. **drop in** [drɑːp]：*phr.* 添加
19. **perhaps best of all**： *phr.* 最重要的是，最好的是
20. **be sponsored by** [ˈspɑːnsərd]：*phr.* 由...赞助
21. **mega corporation** [ˈmeɡə ˌkɔːrpəˈreɪʃn]：大公司
