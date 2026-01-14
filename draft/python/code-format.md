---
title: "Python 代码风格"
description: "作为多语言开发者，适应不同语言的惯用风格是一种专业能力。就像你会根据场合切换说话方式（正式/随意），代码风格也应“入乡随俗”。"
keywords: [程序员, Python 入门]
order: 2
toc: content
---

## 缩进风格

在 Python 中，**官方推荐的缩进标准是使用 4 个空格（spaces）**。

:::info
作为多语言开发者，适应不同语言的惯用风格是一种专业能力。就像你会根据场合切换说话方式（正式/随意），代码风格也应“入乡随俗”。
:::

### 📏 官方规范依据（PEP 8）

Python 的代码风格指南 [**PEP 8**](https://pep8.org/#indentation) 明确规定：

> **Use 4 spaces per indentation level.**
> （每个缩进层级使用 4 个空格。）

并且强调：
- **不要混合使用空格和制表符（Tab）**。
- **不要使用 Tab 缩进**（虽然 Python 解释器能处理 Tab，但 PEP 8 强烈建议用空格）。

### ✅ 正确示例（4 个空格）：

```python
def greet(name):
    if name:
        print(f"Hello, {name}!")
    else:
        print("Hello, stranger!")
```

### ⚠️ 常见错误

- 使用 **2 个空格**：虽然某些语言（如 JavaScript）常用 2 空格，但在 Python 社区中不符合主流规范。
- 使用 **Tab 键**：不同编辑器对 Tab 的显示宽度设置不同（可能是 2、4、8 个字符），容易导致代码在别人机器上错乱。
- **混用空格和 Tab**：Python 3 会直接报错 `IndentationError: unindent does not match any outer indentation level`。

### 🔧 Cursor 设置建议

为确保自动使用 4 空格缩进：

1. 打开 VS Code。
2. 打开一个 `.py` 文件。
3. 查看右下角状态栏，点击当前缩进显示（如 “Tab Size: 4” 或 “Spaces: 4”）。
4. 选择 **“Indent Using Spaces”** 并设置 **“Tab Size: 4”**。
5. （可选）在 `settings.json` 中添加：

```json
{
  "[python]": {
    "editor.tabSize": 4,
    "editor.insertSpaces": true,
    "editor.detectIndentation": false
  }
}
```

这将强制所有 Python 文件使用 4 空格缩进，避免意外混入 Tab。

### 💡 小贴士

- Python **靠缩进来定义代码块**（不像 C/Java 用 `{}`），所以缩进不仅是风格问题，更是语法要求。
- 团队协作时，统一缩进风格能极大减少 merge 冲突和 bug。

✅ 总结：**Python 缩进 = 4 个空格，不用 Tab，不混用，坚持 PEP 8。**

## 代码块定义风格

**Python 不需要大括号 `{}` 来定义代码块**（比如函数体、条件语句、循环等），这是它和 JavaScript、C、Java 等语言最显著的区别之一。

### ✅ Python 用 **缩进（indentation）** 代替大括号

在 Python 中，**代码块的边界由缩进来决定**，而不是 `{}`。这是语言设计的核心原则之一，称为 **“可读性即语法”**。

### 对比示例

**JavaScript（用大括号）：**

```javascript
if (x > 0) {
  console.log("Positive");
  y = x * 2;
}
```

**Python（用缩进）：**

```python
if x > 0:
    print("Positive")
    y = x * 2
```

> 🔸 注意：`if` 后面有冒号 `:`，然后**下一行必须缩进**（通常是 4 个空格）。

### 📏 为什么这样设计？

- **强制统一风格**：所有 Python 代码看起来结构一致。
- **减少视觉噪音**：没有 `{}` 和 `;`，代码更简洁。
- **可读性优先**：缩进本身表达了逻辑结构，符合“代码是写给人看的”理念。

> 💡 这也是为什么 Python 对缩进错误（如混用空格和 Tab）会直接报 `IndentationError` —— **缩进是语法的一部分**，不是风格问题！

### ❗ 常见误区

| 误解 | 事实 |
|------|------|
| “缩进只是风格建议” | ❌ 缩进是**强制语法**，错一点就运行不了 |
| “可以用大括号代替缩进” | ❌ Python **不支持**用 `{}` 定义代码块 |
| “随便缩进几格都行” | ❌ 同一代码块必须**缩进一致**（通常 4 空格） |


### ⚠️ 特殊情况：什么时候会看到 `{}`？

虽然不用 `{}` 表示代码块，但 Python 中 `{}` 仍有其他用途：

| 用途 | 示例 |
|------|------|
| **字典（dict）** | `person = {"name": "Alice", "age": 30}` |
| **集合（set）** | `nums = {1, 2, 3}` |
| **f-string 表达式** | `f"Hello {name}!"` |
| **格式化字符串** | `"Value: {}".format(x)` |

> ✅ 所以 `{}` 在 Python 中存在，但**绝不用于控制流或函数体的界定**。

### ✅ 给 JS 开发者的建议

1. **彻底放弃“用大括号包住代码块”的思维**。
2. **养成写冒号 `:` 的习惯**：`if`、`for`、`def`、`class` 等后面都要加 `:`。
3. **严格使用 4 空格缩进**（PEP 8 标准），并在 VS Code 中开启“显示空白字符”以便调试。
4. **不要混用 Tab 和空格** —— 推荐 VS Code 设置：
   ```json
   "[python]": {
     "editor.insertSpaces": true,
     "editor.tabSize": 4
   }
   ```

### 总结

> **Python 用缩进 + 冒号 `:` 代替大括号 `{}` 来定义代码块。**
> 这不是“偷懒”，而是语言哲学：**让代码结构清晰可见，强制可读性**。

你从 JS 转过来，只要记住：

> **“冒号开头，缩进跟上，大括号留着写字典”** —— 就能轻松适应！ 😊
