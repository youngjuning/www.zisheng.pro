---
description: 'TypeScript. Validate your Javascript ahead of time with static type checking.'
keywords: [程序员, 英文晨读]
group:
  title: 全栈英文晨读
order: 2
toc: content
---

## TypeScript in 100 Seconds

<iframe width="100%" height="415" src="https://www.youtube.com/embed/zQnBQ4tB3ZA?si=ldEpYn8lSduIwjbT" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

TypeScript. Validate your Javascript ahead of time with static type checking. Javascript is a dynamic language where we can do all kinds of crazy things, like reference variables that don't exist or work with objects of an unknown shape. The code is interpreted by a browser, but if your code is broken, you won't catch it until runtime, when the browser throws an error. TypeScript prevents errors like this from ever happening by extending Javascript with types.

The language is a strict superset of Javascript, which means when you open up a ts file, you can write plain Javascript with all of its extra features being completely optional. But notice in the code here how the IDE is providing feedback about using a variable that doesn't exist. Instead of fixing this issue weeks later in a stack trace after the company has lost millions of dollars, we can fix it right here, right now. The reason we get this instant feedback is because TypeScript behaves like a compiled language, where Javascript is the compilation target.

You can run the TypeScript compiler using the tsc command. It will take the ts file and transpile it into vanilla Javascript, and you can choose any flavor of Javascript you want if you need to target ancient browsers. And that means you can use the latest and greatest syntax features of Javascript without having to worry if they'll be supported in an older environment. Your TypeScript project will likely have a tsconfig file, which provides an infinite number of ways to customize the behavior of the compiler.

But the primary goal of TypeScript is to enable static typing. One way it achieves that is by allowing you to annotate your code with types. We can strongly type a variable using a colon followed by its type, like a string, boolean, or number. That's known as an explicit type. If we then try to assign its value as the wrong type, we get an error. Alternatively, if we set an initial value, it will implicitly infer the type. However, there may be cases where you want to opt out of this behavior, in which case you can annotate with the any type. That allows you to loosely type or opt out of type checking. When working with an array, use brackets to strongly type a list. In addition, you can define your own custom types and interfaces, which is especially powerful when working with objects. The char interface here defines various types of the properties on an object. We can then apply the interface to a plain Javascript object.

The beauty of having strongly typed code is that we get autocomplete everywhere in our IDE. We don't have to jump back and forth to documentation or dig through stack traces to figure out why our code's not working.

## 100 秒 TypeScript 速览

> 喜马拉雅：https://m.ximalaya.com/sound/818199337?from=pc

TypeScript 使用静态类型检查提前验证 Javascript。Javascript 是一种动态语言，在这种语言中，我们可以做各种疯狂的事情，比如引用不存在的变量或处理形状未知的对象。浏览器会对代码进行解释，但如果你的代码有问题，直到运行时浏览器抛出错误时你才会发现。TypeScript 通过对 Javascript 进行类型扩展，防止了类似错误的发生。

该语言是 Javascript 的严格超集，这意味着当你打开一个 ts 文件时，你可以编写纯 Javascript，其所有额外功能都是完全可选的。但请注意这里的代码，IDE 是如何反馈使用了一个不存在的变量。与其在几周后公司损失数百万美元后在堆栈跟踪中修复这个问题，我们现在就可以在这里修复它。我们之所以能获得这种即时反馈，是因为 TypeScript 的行为类似于编译语言，而 Javascript 是编译目标。

你可以使用 tsc 命令运行 TypeScript 编译器。它会将 ts 文件转译为普通 Javascript，如果你需要使用古老的浏览器，你可以选择任何你想要的 Javascript。这意味着你可以使用 Javascript 最新、最棒的语法特性，而不必担心它们是否能在旧环境中得到支持。你的 TypeScript 项目可能会有一个 tsconfig 文件，它提供了无数种自定义编译器行为的方法。

但 TypeScript 的主要目标是实现静态类型。它实现这一目标的方法之一就是允许你用类型注释代码。我们可以使用冒号对变量进行强类型化，在冒号后跟上变量的类型，如字符串、布尔或数字。这就是所谓的显式类型。如果我们试图将其值赋值为错误的类型，就会出现错误。或者，如果我们设置了初始值，它将隐式地推断出类型。不过，在某些情况下，你可能不想使用这种行为，在这种情况下，你可以使用任意类型进行注解。这样就可以松散地进行类型检查或选择不进行类型检查。在处理数组时，可以使用括号来强类型化列表。此外，你还可以定义自己的自定义类型和接口、这在处理对象时尤为强大。这里的 char 接口定义了对象属性的各种类型。然后，我们可以将该接口应用到普通的 Javascript 对象中。

拥有强类型代码的好处在于，我们可以在集成开发环境中随处获得自动完成功能。我们不必来回跳转文档或通过堆栈跟踪来找出代码无法运行的原因。

## 单词&短语

1. **ahead of time with** [əˈhed]：提前用...；借助...提前
2. **runtime** [ˈrʌntaɪm]：【计】运行期
3. **ever happening** [ˈhæpənɪŋ]： 永远不会发生
4. **millions of** [ˈmɪljənz əv]：数以百万计，大量
5. **compile** [kəmˈpaɪl]：v.【计】编译
6. **compiler** [ˈkɑmˌpaɪlər]：n. 【计】编译器
7. **compilation** [ˌkɑːmpəˈleɪʃn]：n.【计】编译
8. **transpile** [trænˈspaɪl]：转译
9. **vanilla** [vəˈnɪlə]：普通的、原味的
10. **ancient** [ˈeɪnʃənt]：古老的
11. **flavor of**：不同版本或特性的
12. **annotate** [ˈænəteɪt]：给...添加注解
13. **colon** [ˈkoʊlən]：冒号
14. **explicit** [ɪkˈsplɪsɪt]：adj.【计】显式的
15. **implicitly** [ɪmˈplɪsɪtli]：【计】隐式地
16. **objects** [ˈɑːbdʒekts]：【计】对象
17. **interpreted** [ɪntəˈprɪtɪd]：【计】解释性的
18. **an infinite number of**：无数种
19. **alternatively** [ɔːlˈtɜːrnətɪvli]： adv. 另外，此外；或者
20. **in addition**：此外，另外
21. **autocomplete** [ˈɔːtoʊkəmpliːt]：自动完成
