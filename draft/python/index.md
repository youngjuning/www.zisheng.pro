---
title: "第一天：环境搭建"
description: 'An algorithm is a mathematical method of solving problems both big and small. Though computers run algorithms constantly, humans can also solve problems with algorithms. David J. Malan explains how algorithms can be used in seemingly simple situations and also complex ones.'
keywords: [程序员, Python 入门]
nav:
  title: Python
  order: 1
order: 1
toc: content
---

## 前提条件

开始之前，请确保您已安装

- Python 已安装（推荐 3.8 或更高版本）
- Git 用于版本控制
- 已安装 Cursor 并更新到最新版本

## 必备扩展
​
### 核心 Python 支持

以下扩展程序将 Cursor 配置为功能齐全的 Python 开发环境。它们为您提供语法高亮、代码检查、调试和单元测试。

- Python：来自 Microsoft 的核心语言支持
- Python Debugger：增强的调试功能（Python 包内置）

### 代码质量工具

- Python Environments：统一的 python 虚拟环境体验
- Python Path：管理 Python 路径
- Python Snippets 3：Python 代码片段
- isort：Python import 排序
- Black Formatter：代码格式化
- Pylint：Python 静态代码分析

- [Cursor 中配置完美 Python 开发环境的综合指南](https://docs.cursor.ac.cn/guides/languages/python)
- [如何在 Cursor 中使用现有 Python 环境](https://cursor.fan/zh/tutorial/HowTo/how-to-use-existing-python-environments/)

## 高级 Python 工具

虽然以上扩展程序以前是 Cursor 中最流行的 Python 开发扩展程序，但我们还添加了一些额外的扩展程序，可以帮助您充分利用 Python 开发。

### uv - Python 环境管理器

uv 是一个现代 Python 包管理器，除了取代 pip 作为默认包管理器外，还可以用于创建和管理虚拟环境。

要安装 uv，请在终端中运行以下命令

```sh
pip install uv
```

## Cursor 配置
​
### 1. Python 解释器

在 Cursor 中配置您的 Python 解释器

1. 打开命令面板 (Cmd/Ctrl + Shift + P)
2. 搜索 “Python: Select Interpreter”
3. 选择您的 Python 解释器（如果您正在使用虚拟环境，则选择虚拟环境）
​

## 框架支持

Cursor 与流行的 Python 框架无缝协作

- **Web 框架**：Django、Flask、FastAPI
- **数据科学**：Jupyter、NumPy、Pandas
- **机器学习**：TensorFlow、PyTorch、scikit-learn
- **测试**：pytest、unittest
- **API**：requests、aiohttp
- **数据库**：SQLAlchemy、psycopg2

## 教程

- [Python3 教程 | 菜鸟教程](https://www.runoob.com/python3/python3-tutorial.html)
- [Python - 100天从新手到大师](https://github.com/jackfrued/Python-100-Days?tab=readme-ov-file)
