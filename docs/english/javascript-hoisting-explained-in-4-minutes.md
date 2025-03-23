---
description: 'There are mainly three types of scopes that we come across in our day-to-day use of the language.'
keywords: [程序员, 英文晨读]
group:
  title: 紫升英文晨读
order: 13
toc: content
---

# JavaScript Hoisting Explained in 4 Minutes

> 喜马拉雅：

Hoisting is the process of the Javascript interpreter pulling up or hoisting `var`, variable and function declarations to the top of their scope before any code is executed. So this is the equivalent of them being at the top of your program, even when they are not. It's a fairly simple idea that can lead to some strange behavior that can get confusing at times. As we'll see in some of the examples coming up, we're going to cover exactly how hoisting works and go over some techniques to avoid it.

As we just discussed, `var` variable declarations are hoisted to the top of their scope. So the code that you can currently see on screen is actually processed by the Javascript interpreter. Like this, you can see that the declaration has been separated from the initialization, as the declaration has been hoisted above all of the other lines of code. In that scope, this means that it's possible to reference the variable even before it has been declared. `var` variable initializations are not hoisted, however, so the variable will not have a value.

Let's look at an example to see what's going on. So here we're printing out `x` and declaring it. After that, you can see that the result is `undefined` and not an error as you'd get in other languages. As the declaration was hoisted up before the `console.log` statement was executed. obviously if we remove the declaration, we'll get an error as the variable doesn't exist anymore.

Now, have a look what happens if we give `x` a value of 27?

The output will still be `undefined`. This is because the declaration gets hoisted above the `console.log`, but the initialization stays below that line. So it doesn't know anything about the value 27 at the time of execution. Now, let's see what happens if we remove the `var` keyword declaration from this example.

What happens? we get an error, but why is that? because, for those that don't know, when we initialize a variable without a keyword, it will automatically create a `var` declaration for that variable. Well, the reason we get an error is that the declaration is created on the line of the assignment and not before that line is executed.

So there is no declarations to hoist at the beginning. Therefore, when we attempt to `console.log`, there is no declaration for `x`. If we move the `console.log` below the line of initialization, we get the value printed out. This behavior is unique to variables declared with the keyword `var`. Variables declared with the keyword `let` are not hoisted.

Let's have a look at the same example we just looked at. But we'll replace the keyword `var` for `let`. As you can see, we get an error saying that `x` cannot be accessed before initialization. This is our first approach to avoiding hoisting, using the `let` or `const` keyword for variable declaration.

Hoisting also applies to function declarations. This allows us to call functions before they're even declared, which sounds bizarre when you're familiar with other languages like C++ or Java. Let's have a look at an example here. You can see that we've called a function before it's even declared, and it works perfectly.

As we get our statement printed out from the console.

Log in the Function Body. This function call works because of the same hoisting principles that apply to `var` declarations, the function declaration is hoisted up to the top of its scope. So, when our first line is executed, which is our function call, the program is already aware of the function. However, hoisting does not apply to anonymous functions. Let's have a look at an example.

As you can see, we've got the same sort of example. But we've now assigned the function to a variable anonymously, and we now receive an error. Because it's only name functions that get hoisted, so this is the second approach to avoiding hoisting, and that is by avoiding using name functions. Hoisting is a good topic to be aware of. Not only because it can cause some strange behavior in your code, but because a significant number of developers who use Javascript day-to-day probably aren't even aware of this taking place. This makes hoisting a good topic for an interview question, as it can really test the candidates knowledge of the language. If you enjoyed this video, like and subscribe as I've got some really interesting videos coming up.

Comment what you'd like to see me cover next? Cheers.

## 核心词汇

1. hoisting /ˈhɔɪstɪŋ/：提升

## 译文
