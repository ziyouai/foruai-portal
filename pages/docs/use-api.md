# 全局公共参数

**全局Header参数**

| 参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述 |
| --- | --- | ---- | ---- | ---- |
| 暂无参数 |

**全局Query参数**

| 参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述 |
| --- | --- | ---- | ---- | ---- |
| 暂无参数 |

**全局Body参数**

| 参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述 |
| --- | --- | ---- | ---- | ---- |
| 暂无参数 |

**全局认证方式**

> Bearer Token

> 在Header添加参数 Authorization，其值为在Bearer之后拼接空格和访问令牌

> Authorization: Bearer your_access_token

# 状态码说明

| 状态码 | 中文描述 |
| --- | ---- |
| 暂无参数 |

# 聊天（Chat）

> 创建人: 字友

> 更新人: 字友

> 创建时间: 2024-10-29

-- > 更新时间: 

```text
暂无描述
```

**目录Header参数**

| 参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述 |
| --- | --- | ---- | ---- | ---- |
| 暂无参数 |

**目录Query参数**

| 参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述 |
| --- | --- | ---- | ---- | ---- |
| 暂无参数 |

**目录Body参数**

| 参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述 |
| --- | --- | ---- | ---- | ---- |
| 暂无参数 |

**目录认证信息**

> 继承父级

## 基础对话

```text
暂无描述
```

**接口状态**

> 开发中

**接口URL**

> /v1/chat/completions

| 环境  | URL |
| --- | --- |
| 默认环境 | https://api.foruai.com |

**请求方式**

> POST

**Content-Type**

> json

**请求Body参数**

```javascript
{
    "stream": false,
    "messages": [
        {
            "role": "user",
            "content": "你好"
        }
    ],
    "model": "gpt-4o"
}
```

| 参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述 |
| --- | --- | ---- | ---- | ---- |
| stream | false | Boolean | 是 | 是否流式传输（打字机效果） |
| messages | - | Array | 是 | 至今为止对话所包含的消息列表。 |
| messages.role | user | String | 是 | - |
| messages.content | 你好 | String | 是 | - |
| model | gpt-4o | String | 是 | 要使用的对话 |

**认证方式**

> 继承父级

**响应示例**

* 成功(200)

```javascript
{
  "id": "chatcmpl-123",
  "object": "chat.completion",
  "created": 1677652288,
  "choices": [
    {
      "index": 0,
      "message": {
        "role": "assistant",
        "content": "\n\nHello there, how may I assist you today?"
      },
      "finish_reason": "stop"
    }
  ],
  "usage": {
    "prompt_tokens": 9,
    "completion_tokens": 12,
    "total_tokens": 21
  }
}
```

* 失败(404)

```javascript
暂无数据
```

## 函数调用

```text
暂无描述
```

**接口状态**

> 开发中

**接口URL**

> /v1/chat/completions

| 环境  | URL |
| --- | --- |
| 默认环境 | https://api.foruai.com |

**请求方式**

> POST

**Content-Type**

> json

**请求Body参数**

```javascript
{
    "stream": false,
    "messages": [
        {
            "role": "user",
            "content": "北京今天天气怎么样"
        }
    ],
    "tools": [
        {
            "type": "function",
            "function": {
                "name": "get_current_weather",
                "description": "Get the current weather in a given location",
                "parameters": {
                    "type": "object",
                    "properties": {
                        "location": {
                            "type": "string",
                            "description": "The city and state, e.g. San Francisco, CA"
                        },
                        "unit": {
                            "type": "string",
                            "enum": [
                                "celsius",
                                "fahrenheit"
                            ]
                        }
                    },
                    "required": [
                        "location"
                    ]
                }
            }
        }
    ],
    "model": "gpt-4o"
}
```

| 参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述 |
| --- | --- | ---- | ---- | ---- |
| stream | false | Boolean | 是 | 是否流式传输（打字机效果） |
| messages | - | Array | 是 | 至今为止对话所包含的消息列表。 |
| messages.role | user | String | 是 | - |
| messages.content | 你好 | String | 是 | - |
| model | gpt-4o | String | 是 | 要使用的对话 |

**认证方式**

> 继承父级

**响应示例**

* 成功(200)

```javascript
{
	"id": "chatcmpl-A2jJ1v77UvL5p3r9WHMVZf37POYtd",
	"object": "chat.completion",
	"created": 1725214176,
	"model": "gpt-4o-2024-05-13",
	"choices": [
		{
			"index": 0,
			"message": {
				"role": "assistant",
				"content": "",
				"tool_calls": [
					{
						"id": "call_yNASK0CfVmc0VNj1gTWCmTiq",
						"type": "function",
						"function": {
							"name": "get_current_weather",
							"arguments": "{\"location\":\"Beijing\",\"unit\":\"celsius\"}"
						}
					}
				]
			},
			"finish_reason": "tool_calls"
		}
	],
	"usage": {
		"prompt_tokens": 77,
		"completion_tokens": 21,
		"total_tokens": 98
	},
	"system_fingerprint": "fp_f5a70d8dc9"
}
```

* 失败(404)

```javascript
暂无数据
```

## 图片识别

```text
暂无描述
```

**接口状态**

> 开发中

**接口URL**

> https://api.foruai.com/v1/chat/completions

| 环境  | URL |
| --- | --- |
| 默认环境 | https://api.foruai.com |

**请求方式**

> POST

**Content-Type**

> json

**请求Body参数**

```javascript
{
  "model": "claude-3-5-sonnet-20240620",
  "messages": [
    {
      "role": "user",
      "content": [
        {
          "type": "text",
          "text": "这张图片有什么"
        },
        {
          "type": "image_url",
          "image_url": {
            "url": "https://p.upyun.com/demo/webp/webp/animated-gif-0.webp",
            "detail": "auto"
          }
        }
      ]
    }
  ]
}
```

| 参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述 |
| --- | --- | ---- | ---- | ---- |
| stream | false | Boolean | 是 | 是否流式传输（打字机效果） |
| messages | - | Array | 是 | 至今为止对话所包含的消息列表。 |
| messages.role | user | String | 是 | - |
| messages.content | 你好 | String | 是 | - |
| model | gpt-4o | String | 是 | 要使用的对话 |

**认证方式**

> 继承父级

**响应示例**

* 成功(200)

```javascript
{
	"id": "msg_vrtx_01FHZUeXJRdU2GNpsMhHu3ZW",
	"object": "chat.completion",
	"created": 1725214197,
	"choices": [
		{
			"index": 0,
			"message": {
				"role": "assistant",
				"content": "这张图片展示了一个宁静而神秘的水上场景。画面中有一个人躺在一艘小船上,船正穿梭在高大的水生植物之间。周围的植物以各种绿色色调呈现,给人一种茂密丛林的感觉。\n\n水面上反射出植物的影子,增添了一份宁静和神秘感。整个场景给人一种探险或冥想的氛围,仿佛这个人正在享受大自然的宁静,或者正在进行一次神奇的旅程。\n\n这幅图的风格看起来像是插图或动画,使用了简洁的线条和柔和的色彩,营造出一种梦幻般的氛围。整体来看,这幅图传达了一种与自然和谐相处、远离尘嚣的感觉。"
			},
			"finish_reason": "stop"
		}
	],
	"usage": {
		"prompt_tokens": 178,
		"completion_tokens": 260,
		"total_tokens": 438
	}
}
```

* 失败(404)

```javascript
暂无数据
```

# Midjourney（MJ绘图）

> 创建人: CaIon

> 更新人: CaIon

> 创建时间: 2024-09-18 21:49:57

> 更新时间: 2024-09-18 22:00:15

```text
暂无描述
```

**目录Header参数**

| 参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述 |
| --- | --- | ---- | ---- | ---- |
| 暂无参数 |

**目录Query参数**

| 参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述 |
| --- | --- | ---- | ---- | ---- |
| 暂无参数 |

**目录Body参数**

| 参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述 |
| --- | --- | ---- | ---- | ---- |
| 暂无参数 |

**目录认证信息**

> 继承父级

## Imagine（绘图）

```text
暂无描述
```

**接口状态**

> 开发中

**接口URL**

> /mj/submit/imagine

| 环境  | URL |
| --- | --- |
| 默认环境 | https://api.foruai.com |

**请求方式**

> POST

**Content-Type**

> json

**请求Body参数**

```javascript
{
    "prompt": "cute cat girl --niji 5"
}
```

**认证方式**

> 继承父级

**响应示例**

* 成功(200)

```javascript
{
	"code": 1,
	"description": "Submit success",
	"result": "1726667730xxxxx0",
	"properties": {
		"discordChannelId": "128581658337xxxxx8",
		"discordInstanceId": "1557366047791xxxxx4"
	}
}
```

| 参数名 | 示例值 | 参数类型 | 参数描述 |
| --- | --- | ---- | ---- |
| code | 1 | Number | 状态 |
| description | Submit success | String | - |
| result | 1726667730xxxxx0 | String | - |
| properties | - | Object | - |
| properties.discordChannelId | 128581658337xxxxx8 | String | - |
| properties.discordInstanceId | 1557366047791xxxxx4 | String | - |

* 失败(404)

```javascript
暂无数据
```

## Fetch（获取任务信息）

```text
暂无描述
```

**接口状态**

> 开发中

**接口URL**

> /mj/task/{id}/fetch

| 环境  | URL |
| --- | --- |
| 默认环境 | https://api.foruai.com |

**请求方式**

> GET

**Content-Type**

> none

**路径变量**

| 参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述 |
| --- | --- | ---- | ---- | ---- |
| id | - | String | 是 | 通过Imagine或者Action获得的任务ID |

**认证方式**

> 继承父级

**响应示例**

* 成功(200)

```javascript
{
	"id": "172666xxxxxxxx0",
	"action": "IMAGINE",
	"customId": "",
	"botType": "",
	"prompt": "cute cat girl --niji 5",
	"promptEn": "cute cat girl --niji 5",
	"description": "Submit success",
	"state": "",
	"submitTime": 1726667730879,
	"startTime": 1726667732086,
	"finishTime": 1726667765372,
	"imageUrl": "https://xxxxxxxx",
	"status": "SUCCESS",
	"progress": "100%",
	"failReason": "",
	"buttons": [
		{
			"customId": "MJ::JOB::upsample::1::bab70970-d663-464b-bf49-1d0d766064c3",
			"emoji": "",
			"label": "U1",
			"type": 2,
			"style": 2
		},
		{
			"customId": "MJ::JOB::upsample::2::bab70970-d663-464b-bf49-1d0d766064c3",
			"emoji": "",
			"label": "U2",
			"type": 2,
			"style": 2
		},
		{
			"customId": "MJ::JOB::upsample::3::bab70970-d663-464b-bf49-1d0d766064c3",
			"emoji": "",
			"label": "U3",
			"type": 2,
			"style": 2
		},
		{
			"customId": "MJ::JOB::upsample::4::bab70970-d663-464b-bf49-1d0d766064c3",
			"emoji": "",
			"label": "U4",
			"type": 2,
			"style": 2
		},
		{
			"customId": "MJ::JOB::reroll::0::bab70970-d663-464b-bf49-1d0d766064c3::SOLO",
			"emoji": "🔄",
			"label": "",
			"type": 2,
			"style": 2
		},
		{
			"customId": "MJ::JOB::variation::1::bab70970-d663-464b-bf49-1d0d766064c3",
			"emoji": "",
			"label": "V1",
			"type": 2,
			"style": 2
		},
		{
			"customId": "MJ::JOB::variation::2::bab70970-d663-464b-bf49-1d0d766064c3",
			"emoji": "",
			"label": "V2",
			"type": 2,
			"style": 2
		},
		{
			"customId": "MJ::JOB::variation::3::bab70970-d663-464b-bf49-1d0d766064c3",
			"emoji": "",
			"label": "V3",
			"type": 2,
			"style": 2
		},
		{
			"customId": "MJ::JOB::variation::4::bab70970-d663-464b-bf49-1d0d766064c3",
			"emoji": "",
			"label": "V4",
			"type": 2,
			"style": 2
		}
	],
	"maskBase64": "",
	"properties": {
		"finalPrompt": "cute cat girl --niji 5",
		"finalZhPrompt": ""
	}
}
```

* 失败(404)

```javascript
暂无数据
```

## Action（执行动作）

```text
暂无描述
```

**接口状态**

> 开发中

**接口URL**

> /mj/submit/action

| 环境  | URL |
| --- | --- |
| 默认环境 | https://api.foruai.com |

**请求方式**

> POST

**Content-Type**

> json

**请求Body参数**

```javascript
{
  "customId": "MJ::JOB::reroll::0::2fc2c79d-c16f-43ed-81c8-7b6fb7ff680e::SOLO",
  "taskId": "1710670579419505"
}
```

**认证方式**

> 继承父级

**响应示例**

* 成功(200)

```javascript
暂无数据
```

* 失败(404)

```javascript
暂无数据
```

# Python配置方式

```text
暂无描述
```

**目录Header参数**

| 参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述 |
| --- | --- | ---- | ---- | ---- |
| 暂无参数 |

**目录Query参数**

| 参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述 |
| --- | --- | ---- | ---- | ---- |
| 暂无参数 |

**目录Body参数**

| 参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述 |
| --- | --- | ---- | ---- | ---- |
| 暂无参数 |

**目录认证信息**

> 继承父级

## Python基础对话

```
key='sk-xxxx'


from openai import OpenAI

client = OpenAI(
    base_url="https://api.foruai.com/v1",
    api_key=key
)

response = client.chat.completions.create(
  model="gpt-4o",
  messages=[
    {"role": "user", "content": "你好?"},

  ]
)
print(response)
```

## Python使用gpt-4o识别图片

### 识别链接格式图片

```
from openai import OpenAI

client = OpenAI(
    base_url="https://api.foruai.com/v1",
    api_key=key
)

response = client.chat.completions.create(
  model="gpt-4o",
  messages=[
    {
      "role": "user",
      "content": [
        {"type": "text", "text": "What’s in this image?"},
        {
          "type": "image_url",
          "image_url": {
            "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Gfp-wisconsin-madison-the-nature-boardwalk.jpg/2560px-Gfp-wisconsin-madison-the-nature-boardwalk.jpg",
          },
        },
      ],
    }
  ],
  max_tokens=300,
)

print(response.choices[0])
```

### 识别Base64格式图片

```
import base64
import time
from openai import OpenAI
import openai

key = 'sk-xxxx' 

client = OpenAI(
    base_url="https://api.foruai.com/v1",
    api_key=key
)


def encode_image(image_path):
    with open(image_path, "rb") as image_file:
        return base64.b64encode(image_file.read()).decode('utf-8')


image_path = "图片.jpg"

base64_image = encode_image(image_path)

while True:
    response = client.chat.completions.create(
        model="claude-3-5-sonnet-20240620",
        messages=[
            {
                "role": "user",
                "content": [
                    {"type": "text", "text": "这张图片里有什么?请详细描述。"},
                    {
                        "type": "image_url",
                        "image_url": {
                            "url": f"data:image/jpeg;base64,{base64_image}"
                        }
                    }
                ]
            }
        ],
        temperature=1
    )
    print(response)
    print(response.choices[0].message.content)
    time.sleep(1)
```

## Python使用Claude识别图片

### 识别链接格式图片

```
from openai import OpenAI

client = OpenAI(
    base_url="https://api.foruai.com/v1",
    api_key=key
)

response = client.chat.completions.create(
  model="claude-3-5-sonnet-20240620",
  messages=[
    {
      "role": "user",
      "content": [
        {"type": "text", "text": "What’s in this image?"},
        {
          "type": "image_url",
          "image_url": {
            "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Gfp-wisconsin-madison-the-nature-boardwalk.jpg/2560px-Gfp-wisconsin-madison-the-nature-boardwalk.jpg",
          },
        },
      ],
    }
  ],
  max_tokens=300,
)

print(response.choices[0])
```

### 识别本地图片

```
import base64
import time
from openai import OpenAI
import openai

key = 'sk-xxxx' 

client = OpenAI(
    base_url="https://api.foruai.com/v1",
    api_key=key
)


def encode_image(image_path):
    with open(image_path, "rb") as image_file:
        return base64.b64encode(image_file.read()).decode('utf-8')


image_path = "图片.jpg"

base64_image = encode_image(image_path)

while True:
    response = client.chat.completions.create(
        model="claude-3-5-sonnet-20240620",
        messages=[
            {
                "role": "user",
                "content": [
                    {"type": "text", "text": "这张图片里有什么?请详细描述。"},
                    {
                        "type": "image_url",
                        "image_url": {
                            "url": f"data:image/jpeg;base64,{base64_image}"
                        }
                    }
                ]
            }
        ],
        temperature=1
    )
    print(response)
    print(response.choices[0].message.content)
    time.sleep(1)
```

# 如何使用API进行聊天

```text
暂无描述
```

**目录Header参数**

| 参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述 |
| --- | --- | ---- | ---- | ---- |
| 暂无参数 |

**目录Query参数**

| 参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述 |
| --- | --- | ---- | ---- | ---- |
| 暂无参数 |

**目录Body参数**

| 参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述 |
| --- | --- | ---- | ---- | ---- |
| 暂无参数 |

**目录认证信息**

> 继承父级

## ChatBox（推荐）

```text
ChatGPT开源桌面应用，支持全部桌面平台。
下载链接：https://github.com/Bin-Huang/chatbox/releases
使用方法：如图在设置中填入购买的密钥，并将代理设置为https://foruai.com 即可

```