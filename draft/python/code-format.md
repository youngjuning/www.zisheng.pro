在 Python 中，**官方推荐的缩进标准是使用 4 个空格（spaces）**。

## 📏 官方规范依据（PEP 8）

Python 的代码风格指南 [**PEP 8**](https://pep8.org/#indentation) 明确规定：

> **Use 4 spaces per indentation level.**
> （每个缩进层级使用 4 个空格。）

并且强调：
- **不要混合使用空格和制表符（Tab）**。
- **不要使用 Tab 缩进**（虽然 Python 解释器能处理 Tab，但 PEP 8 强烈建议用空格）。

## ✅ 正确示例（4 个空格）：

```python
def greet(name):
    if name:
        print(f"Hello, {name}!")
    else:
        print("Hello, stranger!")
```

## ⚠️ 常见错误

- 使用 **2 个空格**：虽然某些语言（如 JavaScript）常用 2 空格，但在 Python 社区中不符合主流规范。
- 使用 **Tab 键**：不同编辑器对 Tab 的显示宽度设置不同（可能是 2、4、8 个字符），容易导致代码在别人机器上错乱。
- **混用空格和 Tab**：Python 3 会直接报错 `IndentationError: unindent does not match any outer indentation level`。

## 🔧 Cursor 设置建议

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

## 💡 小贴士

- Python **靠缩进来定义代码块**（不像 C/Java 用 `{}`），所以缩进不仅是风格问题，更是语法要求。
- 团队协作时，统一缩进风格能极大减少 merge 冲突和 bug。

✅ 总结：**Python 缩进 = 4 个空格，不用 Tab，不混用，坚持 PEP 8。**
