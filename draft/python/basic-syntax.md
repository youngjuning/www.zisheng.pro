---
title: "Python 语法"
description: "作为多语言开发者，适应不同语言的惯用风格是一种专业能力。就像你会根据场合切换说话方式（正式/随意），代码风格也应“入乡随俗”。"
keywords: [程序员, Python 入门]
order: 3
toc: content
---

## 编码

默认情况下，Python3 源码文件以 **UTF-8** 编码，所有字符串都是 unicode 字符串。

## 标识符

- 第一个字符必须以字母（a-z，A-Z）或下划线 `_`（JavaScript 不同的是允许 `$` 开头）
- 标识符其他的部分由字母、数字和下划线组成。
- 标识符对大小写敏感，`count` 和 `Count` 是不同的标识符。
- 标识符对长度无硬性限制，但建议保持简洁（一般不超过 20 个字符）。
- 禁止使用保留关键字，如 `if`、`for`、`class` 等不能作为标识符。

合法标识符：

```py
age = 25 # 普通变量名，最常见
user_name = "Alice" # 用下划线连接单词，清晰易读
_total = 100 # 下划线开头通常表示“内部使用”或“私有”
MAX_SIZE = 1024 # 全大写通常表示“常量”（固定不变的值）
calculate_area() # 函数名，动词+名词
StudentInfo # 类名，首字母大写（大驼峰命名法）
__private_var # 双下划线开头，有特殊含义
```

非法标识符：

```py
2nd_place = "silver" # 错误：以数字开头
user-name = "Bob" # 错误：包含连字符
class = "Math" # 错误：使用关键字
$price = 9.99 # 错误：包括特殊字符
for = "loop" # 错误：使用关键字
```

Python 3 允许使用 Unicode 字符作为标识符，可以用中文作为变量名，非 ASCII 标识符也是允许的了。

```py
姓名 = "张三" # 合法
π = 3.1415926 # 合法
```

测试标识符是否合法：

```py
def is_valid_identifier(name):
    try:
        exec(f"{name} = None")
        return True
    except:
        return False

print(is_valid_identifier("2var"))
print(is_valid_identifier("var2"))
```

:::info
**is_valid_identifier 原理说明：**

`exec(f"{name} = None")` 能检测标识符是否合法，是因为：

1. **`exec()` 函数的作用**：`exec()` 会将传入的字符串作为 Python 代码执行。如果字符串是合法的 Python 代码，执行成功；如果是非法的，会抛出 `SyntaxError` 异常。

2. **合法标识符的情况**：
   - 当 `name = "var2"` 时，`f"{name} = None"` 生成 `"var2 = None"`
   - 这是一个合法的赋值语句，`exec()` 可以成功执行，不会抛出异常

3. **非法标识符的情况**：
   - 当 `name = "2var"` 时，`f"{name} = None"` 生成 `"2var = None"`
   - 这不是合法的 Python 语句（因为标识符不能以数字开头），`exec()` 会抛出 `SyntaxError` 异常

4. **异常捕获**：通过 `try-except` 捕获异常，如果抛出异常说明标识符不合法，返回 `False`；如果没有异常，说明标识符合法，返回 `True`。

这是一种巧妙的技巧，利用了 Python 解释器的语法检查机制来验证标识符的合法性。
:::

## Python 保留关键字

保留字即关键字，我们不能把它们用作任何标识符名称。Python 的标准库提供了一个 keyword 模块，可以输出当前版本的所有关键字：

```sh
>>> import keyword
>>> keyword.kwlist
['False', 'None', 'True', 'and', 'as', 'assert', 'async', 'await', 'break', 'class', 'continue', 'def', 'del', 'elif', 'else', 'except', 'finally', 'for', 'from', 'global', 'if', 'import', 'in', 'is', 'lambda', 'nonlocal', 'not', 'or', 'pass', 'raise', 'return', 'try', 'while', 'with', 'yield']
>>>
```

## 注释

Python 中单行注释以 `#` 开头，实例如下：

```Python
#!/usr/bin/python3

# 第一个注释
print("Hello, Python!") # 第二个注释
```

执行以上代码，输出结果为：

```sh
Hello, Python!
```

多行注释可以用 `#` 号，还有 `'''` 和 `"""`：

```python
#!/usr/bin/Python3

# 第一个注释
# 第二个注释

'''
第三个注释
第四个注释
'''

"""
第五个注释
第六个注释
"""
print("Hello, Python!")
```

执行以上代码，输出结果为：

```
Hello, Python!
```

## 行与缩进

python 最具特色的就是使用缩进来表示代码块，不需要使用大括号 `{}`。

缩进的空额是可变的，但是同一个代码块的语句必须包含相同的缩进空格数。实例如下：

```python
if True:
    print("True")
else:
    print("False")
```

以下代码最后一行语句缩进的空格数不一致，会导致运行错误：

```python
if True:
    print("True")
else:
    print("Answer")
  print("False") # 缩进不一致，会导致运行错误
```

> IndentationError: unindent does not match any outer indentation level
