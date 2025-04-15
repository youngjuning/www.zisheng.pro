---
description:
keywords: [AI, Agent, ReAct]
group:
  title: 外文翻译
  order: 2
order: 4
toc: content
---

## ReAct：在语言模型中协同推理和行动

![在语言模型中协同推理和行动](https://cdn.jsdelivr.net/gh/youngjuning/images@main/1744678111027.png)

语言模型在推理（例如思维链提示）和行动（例如 WebGPT、SayCan、ACT-1）方面越来越好，但这两个方向一直保持独立。

> ReAct 提出，如果将这两个基本能力结合起来会怎样？

### 抽象

尽管大型语言模型（LLMs）在语言理解和交互式决策任务中展现出令人印象深刻的性能，但它们在推理（例如思维链提示）和行动（例如行动计划生成）方面的能力主要被作为独立主题进行研究。在本文中，我们探讨了使用 LLMs 以交错方式生成推理轨迹和特定任务的行动，从而在两者之间实现更大的协同效应：**推理轨迹帮助模型诱导、跟踪和更新行动计划，以及处理异常，而行动则允许它与外部来源（如知识库或环境）接口，以收集更多信息**。我们将我们的方法（命名为 ReAct）应用于各种语言和决策任务，并证明了其在最先进基线上的有效性，以及相对于没有推理或行动组件的方法，在人类可解释性和可靠性方面的改进。 具体来说，在问答（HotpotQA）和事实核查（Fever）方面，ReAct 通过与简单的维基百科 API 交互，克服了思维链推理中普遍存在的幻觉和错误传播问题，并生成比没有推理轨迹的基线更可解释的人类任务解决轨迹。在两个交互式决策基准（ALFWorld 和 WebShop）上，ReAct 通过仅提供一到两个上下文示例，分别以 34%和 10%的绝对成功率超过了模仿和强化学习方法。


## ReAct: Synergizing Reasoning and Acting in Language Models

<iframe src="https://react-lm.github.io/" width="100%" height="600px" style="border: 2px solid  #00cc99; border-radius: 10px;" />

## 单词&短语

- **synergizing** [ˈsɪnərˌdʒaɪzɪŋ]：*v.* 协同
- **reasoning** [ˈriːzənɪŋ]：*n.* 推理
- **Language Models** [ˈlæŋɡwɪdʒ ˈmɑːdlz]：*phr.* 语言模型
- **traces** [ˈtreɪsɪz]：*n.* 轨迹
