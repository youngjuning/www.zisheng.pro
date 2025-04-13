---
title: '英文和中文的异同点'
description: '本文以 React 官方文档为素材总结了英文和中文的异同点'
keywords: [全栈, 紫升, 程序员, 阅读]
group:
  title: 阅读
  order: 2
order: 1
toc: content
---

## 相同点

1. 此类基本相同，都有名词、动词、代词、形容词、副词、连词等主要的词语类别。
2. 句子的总体结构相同，核心的词语在排列顺序上一致：
    - 主语 + 谓语（动词） + 宾语
    - 主语 + 系动词 + 表语

具体例子：

- Aaron is extremely handsome.（艾伦是非常帅的）
- Aaron likes writing coding.（艾伦喜欢写代码）

## 不同点

### 英文句子喜欢先讲重点

英文句子喜欢**先讲重点**，中文句子通常**先说细节**，这导致两者即使总体的句子结构一致，但部分词语（主要是修饰成分）的顺序有所不同。

具体例子：

1. **Aaron will play HOK** with his friends this evening.（艾伦将在今晚和他的朋友们一起玩王者荣耀）
    > 主句以 **Aaron**（执行者）开头，强调核心动作 **play HOK**，后接定语从句。
2. **React re-renders the component** whenever its state or props change.（每当组件的状态或属性发生变化时，React 会重新渲染该组件）
    > 主句直接以 **React**（执行者）开头，强调核心动作 **re-renders**，后接条件从句补充触发逻辑。
3. **State is isolated** between components, even if they render the same JSX.（各组件的状态是相互隔离的，即使它们渲染相同的 JSX 结构）
    > 主句以 **State**（核心概念）开头，直接说明其特性 **isolated**，后补充场景限制。
4. **Passing event handlers** like `onClick={handleClick}` connects UI to logic.（通过像 `onClick={handleClick}` 这样传递事件处理程序，用户界面与业务逻辑得以连接。）
    > 以动作 **​Passing event handlers** 开头，直接关联技术实现（`onClick`）与功能目的（连接UI与逻辑）
5. **JSX requires tags to be explicitly closed**，like `<img />` instead of `<img>`.（JSX 要求标签必须显式闭合，例如应使用 `<img />` 而不是 `<img>`）
    > 主句直接陈述规则 ​requires tags to be closed，后通过代码示例强化重点。
6. **Memorization with `useMemo` skips expensive recalculations** when dependencies are unchanged.（当依赖关系不变时，使用 `useMemo` 可以跳过昂贵的重新计算）
    > 主句以技术手段 **​Memoization with `useMemo`** 开头，直接说明其作用 **​skips recalculations**，后补充条件。

总结：

1. **​核心信息前置**：主句开头即点明动作主体（如 React、State、JSX）或技术手段（如 Hooks、Memoization）。
2. **​逻辑链清晰**：通过从句或分词结构补充条件、限制或结果（如 when...、by...、allowing...、like...）。
3. **技术术语突出**：关键概念（如 Re-render、State、JSX）常位于句首，便于快速抓取信息。

### 英文会更多地使用被动语态

相对于中文，英文会更多地使用**被动语态**。这在技术文档中体现的很明显。

1. A component **is mounted** to the DOM when it **is rendered** for the time.（当组件第一次被渲染时，它将被挂载到 DOM 上）
    > **is mounted** 和 **is rendered** 是典型的一般现在时被动语态，强调组件被挂载或渲染的动作，而非执行者（如 React 框架本身）
2. Event handlers **​are triggered** when user interactions occur, such as clicks **​are detected** on a button.（当用户交互发生时，如检测到**点击按钮，就会触发**事件处理程序。）
    > ​**"are triggered"** 和 ​**"are detected"** 通过被动语态隐藏执行者（如浏览器或 React 事件系统），聚焦于动作本身。
3. Side effects **are managed** using `useEffect`, which **is called** after the component **is updated**.（React 使用 `useEffect` 管理副作用，`useEffect` 会在组件被更新后调用。）
    > are managed 和 is called 强调副作用的管理和钩子的调用过程，而非开发者主动操作。
4. Memorized values **are recalculated** only when dependencies **are changed**.（记忆化的值仅当依赖被改变时会重新计算。）
    > **are recalculated** 和 **are changed** 通过被动语态描述计算逻辑的触发条件，符合技术文档客观性的要求
5. Error **are caught** by error boundaries, and context values **are provided** to nested components.（错误被错误边界捕获，上下文值是用来给嵌套组件用的。）
    > **are caught** 和 **are provided** 强调错误捕获和上下文传递的机制，而非具体实现细节。

被动语态在技术文档中的作用：

- **客观性**：隐藏执行者（如 React 内部机制），聚焦功能逻辑。
- **简洁性**：避免重复提及开发者或框架作为主语。
- **标准化**：符合技术写作中被动语态的通用规范。
