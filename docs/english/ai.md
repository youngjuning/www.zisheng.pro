---
title: '人工智能'
description: '人工智能词汇库'
keywords: [人工智能, AI, 全栈, 紫升, 程序员, 词汇库]
group:
  title: 词汇库
order: 4
toc: content
---

## pip [pɪp]

pip is a package-management tool. With pip, you can conveniently install, upgrade and uninstall Python packages. For example, if you want to install a mathematical calculation library called numpy, you just need to type `pip install numpy` in the command line and the installation can be easily completed. It significantly improves the efficiency of Python developers in managing dependent packages and is an indispensable part of the Python ecosystem.

pip 是 Python 包管理工具。通过 pip 可以方便地安装、升级和卸载 Python 包。例如，当你想要安装一个名为 numpy 的数学计算库时，只需在命令行中输入 `pip install numpy` 就可以轻松完成安装。它极大地提高了 Python 开发者管理依赖包的效率，是 Python 生态系统中不可或缺的一部分。

## conda [ˈkɑːndə]

Conda is an open-source package management system and environment management system. It is mainly used for installing, running, and updating software packages and their dependencies. It is widely used in the fields of data science and software development. For example, when you need to use Python for data analysis and have to install multiple different libraries such as NumPy and pandas, Conda can help you easily install specific versions of libraries in different project environments and avoid library version conflicts between different projects. It can create isolated environments, and each environment is like an independent small space. In this space, you can customize the version combinations of software packages according to project requirements, which greatly improves the flexibility of development and deployment.

Conda 是一个开源的软件包管理系统和环境管理系统。它主要用于安装、运行和更新软件包及其依赖关系。在数据科学和软件开发领域应用广泛。例如，当你需要使用 Python 进行数据分析，并且要安装像 NumPy、pandas 等多个不同的库时，**Conda 可以帮助你轻松地在*不同的项目环境中*安装特定版本的库，避免不同项目之间的库版本冲突**。它能够创建独立的环境，每个环境就像是一个独立的小空间，在这个空间里你可以根据项目需求定制软件包的版本组合，极大地提高了开发和部署的灵活性。

## mamba <Badge>TODO</Badge>

## jupyter <Badge>TODO</Badge>

## prompt engineer /prɑːmpt ˌendʒɪˈnɪr/

A prompt engineer is a person who creates prompts for artificial intelligence (AI) models.

一个提示工程师是给人工智能（AI）模型创建提示词的人。

## token /ˈtoʊkən/ 标记

在 ChatGPT 中，“token”（标记）是用于处理语言的一种基本单位，可以是一个单词、一个字符，或一个子词的集合，具体取决于文本的内容和语言模型的分词方式。

**举个例子：**

在“ChatGPT is amazing!”这句话中，经过模型的分词处理后可能被分解成以下几个 token：

- Chat
- GPT
- is
- amazing
- !

总共就是 5 个 token。

**Token 的实际意义？**

1. 数据处理的单位
   GPT 模型在生成或理解文字内容时，会按 token 逐步处理输入内容，并基于 token 生成输出。
2. 长度计算
   ChatGPT 的输入和输出具有 token 限制。例如，GPT-3.5 的单次对话 token 限制为约 4,096 个 token，而 GPT-4 的单次对话 token 限制可能更高（比如 8,192 或 32,768 个 token，具体取决于设置和版本）。
3. 计费方式
   如果你在使用付费版的 ChatGPT，OpenAI 会根据对话中使用的 token 数量计费，包括输入和输出的总 token。

**如何理解 token 在用户输入中的作用？**

假设你输入了一段文字，长度为 100 个单词，但实际经过分词可能生成 150 个 token；随后，ChatGPT 生成的回复又包含 200 个 token，那么这次对话的总 token 消耗就是 `150 输入` + `200 输出` = `350 个 token`。

简单来说，**token 是 GPT 模型处理和计数的核心单位，是分割语言信息的一种方式！**

## tokenizer /ˈtoʊkənaɪzər/
