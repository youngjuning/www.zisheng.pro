---
title: OpenAI 消息角色
description: "OpenAI API 中的消息角色主要有 system、user、assistant、function 和 tool，本文为你详细介绍，并给出相应的消息示例"
keywords: [openai, function, system, user, tool]
toc: content
---

OpenAI API 中的消息角色主要有 system、user、assistant、function 和 tool，本文为你详细介绍，并给出相应的消息示例。

## system（系统）

### 作用

用于设定对话的整体背景、角色或提供一般性的指导信息，引导对话的风格和方向。

### 消息格式

- **content**：【必须】提供的 string 类型，表示 system 的消息内容
- **role**：【必须】提供的 string 类型，表示消息作者的角色，对于 system message 应该是 `"system"`
- **name**：【可选】的 string 类型，表示对话参与者的名称

### 消息示例

```json
{
  "role": "system",
  "content": "你是一个专业的法律顾问，为用户提供准确的法律建议。"
}
```

## user（用户）

### 作用

代表用户输入的内容，用于向模型传达具体的问题、指令或陈述等信息，明确告知模型需要完成的任务。

### 消息格式

- **role**：【必须】提供的 string 类型，表示消息作者的角色，对于 user message 应该是 `"user"`
- **content**：【必须】提供的 string 或 array 类型，二选一，表示 user 的消息内容
    - 为 string 类型时，表示消息的文本内容
    - 为 array 类型时，一般用于调用多模态模型，用来包含多个内容部分的数组，一般是一个文本内容的 json 对象和一个或多个图片内容的 json 对象。仅当使用 gpt-4o 这样的多模态模型时才支持图像输入。具体字段如下：
        - 文本内容部分，是一个 json 对象：
            - **type**：【必须】提供的 string 类型，表示内容部分的类型，一般是 `"text"`
            - **text**：【必须】提供的 string 类型，文字内容
        - 图片内容部分，是一个 json 对象：
            - **type**：【必须】提供的 string 类型，表示内容部分的类型，一般是 `"image_url"`
            - **image_url**：【必须】提供的 json 对象类型，字段有：
              - **url**：【必须】提供的 string 类型，图像的 URL 或 Base64 编码的图像数据
              - **detail**：【可选】的 string 类型，一般默认是 `"auto"`
- **name**：【可选】的 string 类型，表示对话参与者的名称

### 消息示例

```json
{
  "role": "user",
  "content": "我想了解一下关于劳动合同解除的相关法律规定。"
}
```

## assistant（助手）

- **作用**：是模型根据用户消息和系统消息生成的回复内容，为用户提供答案、建议、解释等。
- **消息示例**：
    ```json
    {
      "role": "assistant",
      "content": "根据《劳动法合同》的规定，劳动合同的解除分为协商解除、劳动者单方解除和用人单位单方解除等情形...",
      "tool_calls": [
        {
          "id": "call_1",
          "type": "function",
          "function": {
            "name": "get_current_weather",
            "arguments": "{\"location\": \"Beijing\", \"units\": \"metric\"}"
          }
        }
      ]
    }
    ```

### tool_calls

assistant 角色消息，有一个可选的 `tool_calls` 属性，用于描述大模型生成的工具调用，例如函数调用。`tool_calls` 数组的每个元素是一个 json 对象，代表一个函数调用，包含的字段有：

- **id**：必须提供的 string 类型，表示函数调用的 id
- **type**：必须提供的 string 类型，表示工具调用的类型。目前仅支持 `"function"` 类型
- **function**：必须提供的 string 类型，表示模型针对工具调用为用户生成的函数说明，即模型在特定任务和场景下下，在用户提供的函数中，会推断出应该使用哪一个函数，以及函数的参数应该是什么。所以包括的字段有：
    - **name**：必须提供的string类型，要调用的函数的名称
    - **arguments**：必须提供的 string 类型，表示调用函数所用的参数，由模型以 JSON 格式生成(如：`"{\n\"location\": \"Boston, MA\"\n}"`)。但是请注意，模型并不总是生成有效的参数，并且可能会产生未由函数定义的参数。在调用函数之前最好验证参数的准确性。

> 验证参数可以使用 zod 或者轻量点的 valibot 库

## tool（工具）

### 作用

与函数调用消息相关，用于传递工具的输出结果给大模型，以便模型根据结果进行后续的回复生成。

### 消息格式

- **content**：【必须】提供的 string 类型，表示工具消息的内容，一般是把函数调用的结果描述在这里
- **role**：【必须】提供的 string 类型，表示消息作者的角色，对于 tool message 应该是 `"tool"`
- **tool_call_id**：【必须】提供的string类型，表示本次消息是对哪个函数调用的结果反馈，应该与 assistant `message.tool_calls.id` 对应

### 消息示例

```json
{
  "role": "tool",
  "content": "北京当前天气为晴，温度28摄氏度，微风。",
  "tool_call_id": "call_1"
}
```

这里的 `content` 字段包含了天气查询工具返回的具体信息。

### tool 消息由谁发起？

tool 消息不是由用户发送的，而是由大模型在需要调用外部工具时，通过 API 以 tool 角色发送的。

当模型判断需要借助外部工具来回答用户问题时，会先在 assistant 消息中通过 tool_calls 参数告知客户端需要调用的工具及相关参数。客户端根据这些信息调用相应工具，工具执行完成后，模型会以 tool 角色消息来接收工具返回的结果，然后再根据该结果生成最终的 assistant 消息回复给用户。
