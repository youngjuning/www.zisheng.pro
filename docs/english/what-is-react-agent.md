---
description: "ReAct agents 是一种使用“推理和行动”（ReAct）的 AI agent 框架，该框架将思维链（CoT）推理与外部工具使用相结合。ReAct 框架增强了大语言模型（LLM）处理复杂任务和 agent 工作流中的决策能力。"
keywords: [AI, Agent, ReAct]
group:
  title: 外文翻译
order: 2
toc: content
---

## 什么是 ReAct agents

ReAct agents 是一种使用“推理和行动”（ReAct）的 AI agent 框架，该框架将思维链（CoT）推理与外部工具使用相结合。ReAct 框架增强了大语言模型（LLM）处理复杂任务和 agent 工作流中的决策能力。

ReAct 概念框架最早由 Yao 等人于 2023 年发表的论文 [ReAct: 在语言模型中协同推理和行动](/english/react-synergizing-reasoning-and-acting-in-language-models) 中提出，ReAct 可以简单理解为一种机器学习（ML）范式，用于整合 AI LLMs 的推理和行动能力。

更具体地说，ReAct 是构建能够以结构化但灵活的方式与环境交互的 AI agent 概念框架。通过将 LLM 作为 agent 的“大脑”来协调从简单的检索增强生成（RAG）到复杂的多 agent 工作流程。

与传统的 AI 系统不同，ReAct 代理不将决策与任务执行分开。因此，ReAct 范式的开发是生成式 AI 进化的重要一步，超越了对话聊天机器人，走向了复杂问题解决。

ReAct agents 及其衍生方法不断推动着 AI 应用，这些应用能够自主规划、执行并适应不可预见的情况。

### ReAct agents 是如何工作的？

ReAct 框架的灵感来源于人类如何直观地使用自然语言——通常通过我们自己的内心独白——以逐步规划并执行的方式解决复杂任务。

而不是实现基于规则或其他预定义的工作流程，ReAct agents 依靠其推理能力，根据新信息或先前步骤的结果动态调整其方法。

想象一下为短暂的旅行打包。你可能首先会确定关键考虑因素（“我在哪里的时候天气会怎样？”），然后积极咨询外部来源（“我会查看当地的天气预报。”）

通过使用新信息（“天气会变冷”），你确定下一个考虑因素（“我有什么保暖的衣服？”）和行动（“我会检查我得衣柜”）。在采取这一行动后，你可能会遇到意外的障碍（“我所有的保暖衣服都在储藏室里”）并相应地调整下一步的行动（“我能搭配哪些衣服？”）。

以类似的方式，ReAct 框架通过提示工程将 AI agent 的活动结构化为思考、行动和观察的正式模式：

- 用口头话的 CoT 推理步骤（思考）帮助模型将更大的任务分解成更易管理的子任务。
- 预定义的操作使模型能够使用工具、调用 API 并从外部来源（如搜索引擎）或知识库（如内部文档存储库）收集更多信息。
- 执行操作后，模型将重新评估其进度，并利用该观察结果来提供最终答案或告知下一轮思考。理想情况下，观察结果还应考虑先前信息，无论这些信息是来自模型的标准上下文窗口的早期阶段，还是来自外部记忆组件。


由于 ReAct agents 的性能很大程度上取决于其中心节点 LLM 能否“口头”思考复杂任务，因此 ReAct agents 从具有高级推理和指令遵循能力的模型中受益匪浅（比如 Claude 3.7 Sonnet）。

为了最小化成本和延迟，多 agent ReAct 框架可能会主要依赖一个更大、性能更强的模型作为中心节点 agent，其推理过程或行动可能涉及将子任务委托给更多 agent 使用更小、更高效的模型。

#### ReAct agents 循环

该框架本质上创建了一个反馈循环，模型通过迭代重复这种交织的“思考-行动-观察”过程来解决问题。

每当这个循环完成时——也就是说，每当 agent 根据该行动的结果采取行动并做出观察时——agent 必须决定是否重复或结束循环。

![ReAct agents 循环](https://cdn.jsdelivr.net/gh/youngjuning/images@main/1744697999790.png)

在设计 ReAct agents 时，何时以及如何结束推理循环式是一个重要的考虑因素。设定最大循环迭代次数是一种简单的方法来限制延迟、成本和 token 使用，并避免无限循环的可能性。

相反，可以设置循环在满足某些特定条件时结束，例如当模型识别出超过一定置信度阈值的潜在最终答案时。

要实现这种推理和行动循环，ReAct agentss 通常会使用某种变体的 ReAct 提示，无论是在提供给 LLM 的系统提示中，还是在用户查询的上下文中。

### ReAct 提示

ReAct 提示是一种特定的提示技术，旨在引导 LLM 遵循 ReAct 思考、行动和观察循环的模式。虽然在使用传统的 ReAct 提示方法时并非绝对必要，但大多数基于 ReAct 的 agent 都会实现或至少受到其启发。

ReAct 提示的主要功能是在原始 ReAct 论文中首次概述的，即指导 LLM 遵循 ReAct 循环并确定可以使用哪些工具——也就是说，可以采取哪些动作——在处理用户查询时。

无论通过明确的指令还是包含少量示例， ReAct 提示应：

- **指导模型使用思考连推理**：提示模型通过逐步思考、将思考与行动交织在一起的方式来完成任务。
- **定义动作**：建立模型可用的具体动作。一个动作可能涉及生成特定类型的下一个思考或子提示，但通常涉及使用外部工具或调用 API。
- **指导模型进行观察**：提示模型在每一步行动之后重新评估其上下文，并使用更新后的上下文来指导下一步的推理。
- **循环**：根据需要指示模型重复之前的步骤。您可以提供结束循环的具体条件，例如最大循环次数，或者指示 agent 在它觉得已经到达正确的最终输出时结束其推理过程。
- **输出最终答案**：当满足这些结束条件时，向用户提供针对其初始查询的最终输出。与许多使用 LLMs 的情况一样，作为在确定最终输出之前采用思考链推理的推理模型，ReAct agents 通常会被提示在“草稿本”中进行推理过程。

ReAct 提示的经典演示是 Langchain 的 LangGraph 中预建的 `ZERO_SHOT_REACT-DESCRIPTION` ReAct agents模块的系统提示。它被称为“零样本”，因为，使用这个预定义的系统提示，与该模块一起使用的LLM不需要任何其他示例即可作为 ReAct agents运行。

```txt
Answer the following questions as best you can. You have access to the following tools: 

Wikipedia: A wrapper around Wikipedia. Useful for when you need to answer general questions about people, places, companies, facts, historical events, or other subjects. Input should be a search query.
duckduckgo_search: A wrapper around DuckDuckGo Search. Useful for when you need to answer questions about current events. Input should be a search query.
Calculator: Useful for when you need to answer questions about math.

Use the following format:

Question: the input question you must answer
Thought: you should always think about what to do
Action: the action to take, should be one of [Wikipedia, duckduckgo_search, Calculator]
Action Input: the input to the action
Observation: the result of the action
... (this Thought/Action/Action Input/Observation can repeat N times)
Thought: I now know the final answer
Final Answer: the final answer to the original input question

Begin!

Question: {input}
Thought:{agent_scratchpad}
```

中文版：

```txt
请尽可能回答下列问题。您可以使用以下工具： 

维基百科： 维基百科包装器。当你需要回答有关人物、地点、公司、事实、历史事件或其他主题的一般问题时，它非常有用。输入应为搜索查询。
duckduckgoo_search： DuckDuckGo 搜索的包装器。在需要回答有关时事的问题时非常有用。输入应为搜索查询。
计算器 用于回答数学问题。

使用以下格式：

问题：必须回答的输入问题
想法：你应该经常思考该怎么做
操作：要采取的操作，应为 [维基百科、鸭鸭果_搜索、计算器] 中的一个
行动输入：行动的输入
观察：行动的结果
......（这种想法/行动/行动输入/观察可以重复 N 次）
想法 我现在知道最终答案了
最终答案：原始输入问题的最终答案

开始

问题：{input}
想法：{agent_scratchpad}。
```

### ReAct agents 的收益

ReAct 框架的引入是 LLM 驱动 agent 工作流程进步的重要一步。从实时地将 LLMs 在真实世界外部信息中定位，通过（RAG）到后续突破——如 Reflexion，它为现代推理模型做出贡献，ReAct 帮助催化了 LLMs 在文本生成之外的许多任务中的应用，比如 Browser-Use 和 Computor-User。

ReAct agents 的实用性主要来源于 ReAct 框架的一些固有特性：

- **通用性**：ReAct agents 可以配置与各种外部工具和 API 协同工作。尽管对使用相关工具进行 ReAct 提示微调可以提高性能，但**执行工具调用不需要对模型进行预先配置**。
- **适应性**：这种通用性，加上它们确定调用适当工具或 API 的动态和情境性，意味着 ReAct agents 可以利用其推理过程来适应新的挑战。尤其是在长时间上下文窗口内操作或辅以外部记忆时，它们可以从过去的错误和成功中学习，以应对未预见的障碍和情况。这使得 ReAct agents 具有灵活性和弹性。
- **可解释性**：ReAct agents 的口头推理过程简单易懂，这有助于调试并使它们相对易于构建和优化。
- **准确性**：正如原始 ReAct 论文所断言，仅凭思维链（CoT）推理本身就有许多好处，但同时也存在更高的幻觉风险。ReAct 将 CoT 与信息源之外的联系相结合，显著降低了幻觉的风险，使 ReAct agents 更加准确和可靠。

### ReAct agents vs. function calling

另一个显著的智能体 AI 范式是函数调用，该范式最初由 OpenAI 于 2023 年 6 月引入，旨在补充其 GPT 模型的智能体能力。

函数调用范式包括微调模型以识别何时应调用特定工具，并输出包含调用这些函数所需参数的格式化 JSON 对象。

许多专有和开源的 LLM 家族，包括 IBM Granite、Meta 的 Llama 系列、Anthropic 的 Claude 和 Google Gemini，现在都支持 Function Calling。

ReAct 或函数调用哪个“更好”通常取决于你特定用例的性质。在涉及相对简单（或至少可预测）任务的情况下，函数调用可以执行得更快，节省 token，并且比 ReAct agents 更容易实现。

在这种情况下，用于 ReAct agents 的 CoT 推理迭代循环的 token 数量可能被视为效率低下。

内在的权衡是相对缺乏自定义模型如何以及何时选择使用哪个工具的能力。同样，当 agent 处理需要复杂推理的任务，或动态或不可预测的场景时，Function Calling 的僵化可能会限制 agent 的适应性。在这种情况下，能够查看导致特定工具调用的逐步推理过程通常是有益的。

### 开始使用 ReAct agents

ReAct agents 可以被多种方式设计和实现，无论是从头用 Python 或 Node.js 编写，还是借助 BeeAI 等开源框架进行开发。由于 ReAct 范式的流行和持久性，社区已经有了大量的文献和教程，关于 ReAct agents 的内容可以在 GitHub 或其他开发者社区找到。

作为开发自定义 ReAct agents 的替代方案，许多 agent 型 AI 框架，包括 BeeAI、LlamaIndex 和 LangChain 的 LangGraph，都提供了针对特定用例的预配置 ReAct agent 模块。

## What is a ReAct agents?

<iframe src="https://www.ibm.com/think/topics/react-agent" width="100%" height="600px" style="border: 2px solid  #00cc99; border-radius: 10px;" />

## 单词&短语

- COT（Chain of Thought）：思考链
- zero-shot：零样本
- agentic：智能体的
