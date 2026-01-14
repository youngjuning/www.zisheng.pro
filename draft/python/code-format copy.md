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
