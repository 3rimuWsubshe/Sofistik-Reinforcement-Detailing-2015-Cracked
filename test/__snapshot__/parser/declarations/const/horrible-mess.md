# Kataw parser test case

## Input

`````js
const processArgs =
  <A1: {}, A2: {}>(process: (args: A1) => A2) =>
  <S, C, I, R>(resolver: Resolver<S, A2, C, I, R>) =>
  (src: S, args: A1, appContext: C, info: I): Resolver<S, A1, C, I, R> =>
    resolver(src, process(args), appContext, info)
`````

## Options

`````js
{ allowTypes : true }
`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 162,
            "lexicalKeyword": {
                "kind": 37757004,
                "flags": 80,
                "start": 0,
                "end": 5
            },
            "binding": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 134299649,
                            "text": "processArgs",
                            "rawText": "processArgs",
                            "flags": 96,
                            "start": 5,
                            "end": 17
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": {
                            "kind": 271,
                            "arrowToken": {
                                "kind": 10,
                                "flags": 64,
                                "start": 65,
                                "end": 68
                            },
                            "typeParameters": {
                                "kind": 307,
                                "typeParameters": [
                                    {
                                        "kind": 146,
                                        "name": {
                                            "kind": 134299649,
                                            "text": "A1",
                                            "rawText": "A1",
                                            "flags": 96,
                                            "start": 23,
                                            "end": 25
                                        },
                                        "type": {
                                            "kind": 139,
                                            "type": {
                                                "kind": 134234353,
                                                "properties": [],
                                                "trailingComma": false,
                                                "flags": 2097152,
                                                "start": 26,
                                                "end": 29
                                            },
                                            "flags": 2097152,
                                            "start": 25,
                                            "end": 29
                                        },
                                        "defaultType": null,
                                        "flags": 2097152,
                                        "start": 23,
                                        "end": 29
                                    },
                                    {
                                        "kind": 146,
                                        "name": {
                                            "kind": 134299649,
                                            "text": "A2",
                                            "rawText": "A2",
                                            "flags": 96,
                                            "start": 30,
                                            "end": 33
                                        },
                                        "type": {
                                            "kind": 139,
                                            "type": {
                                                "kind": 134234353,
                                                "properties": [],
                                                "trailingComma": false,
                                                "flags": 2097152,
                                                "start": 34,
                                                "end": 37
                                            },
                                            "flags": 2097152,
                                            "start": 33,
                                            "end": 37
                                        },
                                        "defaultType": null,
                                        "flags": 2097152,
                                        "start": 30,
                                        "end": 37
                                    }
                                ],
                                "flags": 2097153,
                                "start": 19,
                                "end": 38
                            },
                            "parameters": [
                                {
                                    "kind": 281,
                                    "ellipsisToken": null,
                                    "left": {
                                        "kind": 134299649,
                                        "text": "process",
                                        "rawText": "process",
                                        "flags": 96,
                                        "start": 39,
                                        "end": 46
                                    },
                                    "optionalToken": null,
                                    "type": {
                                        "kind": 139,
                                        "type": {
                                            "kind": 288,
                                            "arrowTypeParameterList": {
                                                "kind": 10,
                                                "flags": 64,
                                                "start": 58,
                                                "end": 61
                                            },
                                            "arrowToken": {
                                                "kind": 292,
                                                "parameters": [
                                                    {
                                                        "kind": 149,
                                                        "ellipsisToken": null,
                                                        "name": {
                                                            "kind": 134299649,
                                                            "text": "args",
                                                            "rawText": "args",
                                                            "flags": 96,
                                                            "start": 49,
                                                            "end": 53
                                                        },
                                                        "optionalToken": null,
                                                        "types": {
                                                            "kind": 144,
                                                            "id": {
                                                                "kind": 134299649,
                                                                "text": "A1",
                                                                "rawText": "A1",
                                                                "flags": 96,
                                                                "start": 54,
                                                                "end": 57
                                                            },
                                                            "typeParameters": null,
                                                            "flags": 2097152,
                                                            "start": 54,
                                                            "end": 57
                                                        },
                                                        "flags": 2097152,
                                                        "start": 47,
                                                        "end": 57
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "flags": 2097152,
                                                "start": 47,
                                                "end": 57
                                            },
                                            "returnType": {
                                                "kind": 144,
                                                "id": {
                                                    "kind": 134299649,
                                                    "text": "A2",
                                                    "rawText": "A2",
                                                    "flags": 96,
                                                    "start": 61,
                                                    "end": 64
                                                },
                                                "typeParameters": null,
                                                "flags": 2097152,
                                                "start": 61,
                                                "end": 64
                                            },
                                            "typeParameters": null,
                                            "flags": 2097152,
                                            "start": 47,
                                            "end": 64
                                        },
                                        "flags": 2097152,
                                        "start": 46,
                                        "end": 64
                                    },
                                    "right": null,
                                    "flags": 32,
                                    "start": 19,
                                    "end": 64
                                }
                            ],
                            "asyncKeyword": null,
                            "returnType": null,
                            "contents": {
                                "kind": 271,
                                "arrowToken": {
                                    "kind": 10,
                                    "flags": 64,
                                    "start": 119,
                                    "end": 122
                                },
                                "typeParameters": {
                                    "kind": 307,
                                    "typeParameters": [
                                        {
                                            "kind": 146,
                                            "name": {
                                                "kind": 134299649,
                                                "text": "S",
                                                "rawText": "S",
                                                "flags": 96,
                                                "start": 72,
                                                "end": 73
                                            },
                                            "type": null,
                                            "defaultType": null,
                                            "flags": 2097152,
                                            "start": 72,
                                            "end": 73
                                        },
                                        {
                                            "kind": 146,
                                            "name": {
                                                "kind": 134299649,
                                                "text": "C",
                                                "rawText": "C",
                                                "flags": 96,
                                                "start": 74,
                                                "end": 76
                                            },
                                            "type": null,
                                            "defaultType": null,
                                            "flags": 2097152,
                                            "start": 74,
                                            "end": 76
                                        },
                                        {
                                            "kind": 146,
                                            "name": {
                                                "kind": 134299649,
                                                "text": "I",
                                                "rawText": "I",
                                                "flags": 96,
                                                "start": 77,
                                                "end": 79
                                            },
                                            "type": null,
                                            "defaultType": null,
                                            "flags": 2097152,
                                            "start": 77,
                                            "end": 79
                                        },
                                        {
                                            "kind": 146,
                                            "name": {
                                                "kind": 134299649,
                                                "text": "R",
                                                "rawText": "R",
                                                "flags": 96,
                                                "start": 80,
                                                "end": 82
                                            },
                                            "type": null,
                                            "defaultType": null,
                                            "flags": 2097152,
                                            "start": 80,
                                            "end": 82
                                        }
                                    ],
                                    "flags": 2097153,
                                    "start": 68,
                                    "end": 83
                                },
                                "parameters": [
                                    {
                                        "kind": 281,
                                        "ellipsisToken": null,
                                        "left": {
                                            "kind": 134299649,
                                            "text": "resolver",
                                            "rawText": "resolver",
                                            "flags": 96,
                                            "start": 84,
                                            "end": 92
                                        },
                                        "optionalToken": null,
                                        "type": {
                                            "kind": 139,
                                            "type": {
                                                "kind": 144,
                                                "id": {
                                                    "kind": 134299649,
                                                    "text": "Resolver",
                                                    "rawText": "Resolver",
                                                    "flags": 96,
                                                    "start": 93,
                                                    "end": 102
                                                },
                                                "typeParameters": {
                                                    "kind": 309,
                                                    "parameters": [
                                                        {
                                                            "kind": 310,
                                                            "type": {
                                                                "kind": 144,
                                                                "id": {
                                                                    "kind": 134299649,
                                                                    "text": "S",
                                                                    "rawText": "S",
                                                                    "flags": 96,
                                                                    "start": 103,
                                                                    "end": 104
                                                                },
                                                                "typeParameters": null,
                                                                "flags": 2097152,
                                                                "start": 103,
                                                                "end": 104
                                                            },
                                                            "flags": 2097152,
                                                            "start": 103,
                                                            "end": 104
                                                        },
                                                        {
                                                            "kind": 310,
                                                            "type": {
                                                                "kind": 144,
                                                                "id": {
                                                                    "kind": 134299649,
                                                                    "text": "A2",
                                                                    "rawText": "A2",
                                                                    "flags": 96,
                                                                    "start": 105,
                                                                    "end": 108
                                                                },
                                                                "typeParameters": null,
                                                                "flags": 2097152,
                                                                "start": 105,
                                                                "end": 108
                                                            },
                                                            "flags": 2097152,
                                                            "start": 105,
                                                            "end": 108
                                                        },
                                                        {
                                                            "kind": 310,
                                                            "type": {
                                                                "kind": 144,
                                                                "id": {
                                                                    "kind": 134299649,
                                                                    "text": "C",
                                                                    "rawText": "C",
                                                                    "flags": 96,
                                                                    "start": 109,
                                                                    "end": 111
                                                                },
                                                                "typeParameters": null,
                                                                "flags": 2097152,
                                                                "start": 109,
                                                                "end": 111
                                                            },
                                                            "flags": 2097152,
                                                            "start": 109,
                                                            "end": 111
                                                        },
                                                        {
                                                            "kind": 310,
                                                            "type": {
                                                                "kind": 144,
                                                                "id": {
                                                                    "kind": 134299649,
                                                                    "text": "I",
                                                                    "rawText": "I",
                                                                    "flags": 96,
                                                                    "start": 112,
                                                                    "end": 114
                                                                },
                                                                "typeParameters": null,
                                                                "flags": 2097152,
                                                                "start": 112,
                                                                "end": 114
                                                            },
                                                            "flags": 2097152,
                                                            "start": 112,
                                                            "end": 114
                                                        },
                                                        {
                                                            "kind": 310,
                                                            "type": {
                                                                "kind": 144,
                                                                "id": {
                                                                    "kind": 134299649,
                                                                    "text": "R",
                                                                    "rawText": "R",
                                                                    "flags": 96,
                                                                    "start": 115,
                                                                    "end": 117
                                                                },
                                                                "typeParameters": null,
                                                                "flags": 2097152,
                                                                "start": 115,
                                                                "end": 117
                                                            },
                                                            "flags": 2097152,
                                                            "start": 115,
                                                            "end": 117
                                                        }
                                                    ],
                                                    "flags": 2097152,
                                                    "start": 102,
                                                    "end": 118
                                                },
                                                "flags": 2097152,
                                                "start": 93,
                                                "end": 118
                                            },
                                            "flags": 2097152,
                                            "start": 92,
                                            "end": 118
                                        },
                                        "right": null,
                                        "flags": 32,
                                        "start": 68,
                                        "end": 118
                                    }
                                ],
                                "asyncKeyword": null,
                                "returnType": null,
                                "contents": {
                                    "kind": 271,
                                    "arrowToken": {
                                        "kind": 10,
                                        "flags": 64,
                                        "start": 193,
                                        "end": 196
                                    },
                                    "typeParameters": null,
                                    "parameters": [
                                        {
                                            "kind": 281,
                                            "ellipsisToken": null,
                                            "left": {
                                                "kind": 134299649,
                                                "text": "src",
                                                "rawText": "src",
                                                "flags": 96,
                                                "start": 126,
                                                "end": 129
                                            },
                                            "optionalToken": null,
                                            "type": {
                                                "kind": 139,
                                                "type": {
                                                    "kind": 144,
                                                    "id": {
                                                        "kind": 134299649,
                                                        "text": "S",
                                                        "rawText": "S",
                                                        "flags": 96,
                                                        "start": 130,
                                                        "end": 132
                                                    },
                                                    "typeParameters": null,
                                                    "flags": 2097152,
                                                    "start": 130,
                                                    "end": 132
                                                },
                                                "flags": 2097152,
                                                "start": 129,
                                                "end": 132
                                            },
                                            "right": null,
                                            "flags": 32,
                                            "start": 122,
                                            "end": 132
                                        },
                                        {
                                            "kind": 281,
                                            "ellipsisToken": null,
                                            "left": {
                                                "kind": 134299649,
                                                "text": "args",
                                                "rawText": "args",
                                                "flags": 96,
                                                "start": 133,
                                                "end": 138
                                            },
                                            "optionalToken": null,
                                            "type": {
                                                "kind": 139,
                                                "type": {
                                                    "kind": 144,
                                                    "id": {
                                                        "kind": 134299649,
                                                        "text": "A1",
                                                        "rawText": "A1",
                                                        "flags": 96,
                                                        "start": 139,
                                                        "end": 142
                                                    },
                                                    "typeParameters": null,
                                                    "flags": 2097152,
                                                    "start": 139,
                                                    "end": 142
                                                },
                                                "flags": 2097152,
                                                "start": 138,
                                                "end": 142
                                            },
                                            "right": null,
                                            "flags": 32,
                                            "start": 122,
                                            "end": 142
                                        },
                                        {
                                            "kind": 281,
                                            "ellipsisToken": null,
                                            "left": {
                                                "kind": 134299649,
                                                "text": "appContext",
                                                "rawText": "appContext",
                                                "flags": 96,
                                                "start": 143,
                                                "end": 154
                                            },
                                            "optionalToken": null,
                                            "type": {
                                                "kind": 139,
                                                "type": {
                                                    "kind": 144,
                                                    "id": {
                                                        "kind": 134299649,
                                                        "text": "C",
                                                        "rawText": "C",
                                                        "flags": 96,
                                                        "start": 155,
                                                        "end": 157
                                                    },
                                                    "typeParameters": null,
                                                    "flags": 2097152,
                                                    "start": 155,
                                                    "end": 157
                                                },
                                                "flags": 2097152,
                                                "start": 154,
                                                "end": 157
                                            },
                                            "right": null,
                                            "flags": 32,
                                            "start": 122,
                                            "end": 157
                                        },
                                        {
                                            "kind": 281,
                                            "ellipsisToken": null,
                                            "left": {
                                                "kind": 134299649,
                                                "text": "info",
                                                "rawText": "info",
                                                "flags": 96,
                                                "start": 158,
                                                "end": 163
                                            },
                                            "optionalToken": null,
                                            "type": {
                                                "kind": 139,
                                                "type": {
                                                    "kind": 144,
                                                    "id": {
                                                        "kind": 134299649,
                                                        "text": "I",
                                                        "rawText": "I",
                                                        "flags": 96,
                                                        "start": 164,
                                                        "end": 166
                                                    },
                                                    "typeParameters": null,
                                                    "flags": 2097152,
                                                    "start": 164,
                                                    "end": 166
                                                },
                                                "flags": 2097152,
                                                "start": 163,
                                                "end": 166
                                            },
                                            "right": null,
                                            "flags": 32,
                                            "start": 122,
                                            "end": 166
                                        }
                                    ],
                                    "asyncKeyword": null,
                                    "returnType": {
                                        "kind": 139,
                                        "type": {
                                            "kind": 144,
                                            "id": {
                                                "kind": 134299649,
                                                "text": "Resolver",
                                                "rawText": "Resolver",
                                                "flags": 96,
                                                "start": 168,
                                                "end": 177
                                            },
                                            "typeParameters": {
                                                "kind": 309,
                                                "parameters": [
                                                    {
                                                        "kind": 310,
                                                        "type": {
                                                            "kind": 144,
                                                            "id": {
                                                                "kind": 134299649,
                                                                "text": "S",
                                                                "rawText": "S",
                                                                "flags": 96,
                                                                "start": 178,
                                                                "end": 179
                                                            },
                                                            "typeParameters": null,
                                                            "flags": 2097152,
                                                            "start": 178,
                                                            "end": 179
                                                        },
                                                        "flags": 2097152,
                                                        "start": 178,
                                                        "end": 179
                                                    },
                                                    {
                                                        "kind": 310,
                                                        "type": {
                                                            "kind": 144,
                                                            "id": {
                                                                "kind": 134299649,
                                                                "text": "A1",
                                                                "rawText": "A1",
                                                                "flags": 96,
                                                                "start": 180,
                                                                "end": 183
                                                            },
                                                            "typeParameters": null,
                                                            "flags": 2097152,
                                                            "start": 180,
                                                            "end": 183
                                                        },
                                                        "flags": 2097152,
                                                        "start": 180,
                                                        "end": 183
                                                    },
                                                    {
                                                        "kind": 310,
                                                        "type": {
                                                            "kind": 144,
                                                            "id": {
                                                                "kind": 134299649,
                                                                "text": "C",
                                                                "rawText": "C",
                                                                "flags": 96,
                                                                "start": 184,
                                                                "end": 186
                                                            },
                                                            "typeParameters": null,
                                                            "flags": 2097152,
                                                            "start": 184,
                                                            "end": 186
                                                        },
                                                        "flags": 2097152,
                                                        "start": 184,
                                                        "end": 186
                                                    },
                                                    {
                                                        "kind": 310,
                                                        "type": {
                                                            "kind": 144,
                                                            "id": {
                                                                "kind": 134299649,
                                                                "text": "I",
                                                                "rawText": "I",
                                                                "flags": 96,
                                                                "start": 187,
                                                                "end": 189
                                                            },
                                                            "typeParameters": null,
                                                            "flags": 2097152,
                                                            "start": 187,
                                                            "end": 189
                                                        },
                                                        "flags": 2097152,
                                                        "start": 187,
                                                        "end": 189
                                                    },
                                                    {
                                                        "kind": 310,
                                                        "type": {
                                                            "kind": 144,
                                                            "id": {
                                                                "kind": 134299649,
                                                                "text": "R",
                                                                "rawText": "R",
                                                                "flags": 96,
                                                                "start": 190,
                                                                "end": 192
                                                            },
                                                            "typeParameters": null,
                                                            "flags": 2097152,
                                                            "start": 190,
                                                            "end": 192
                                                        },
                                                        "flags": 2097152,
                                                        "start": 190,
                                                        "end": 192
                                                    }
                                                ],
                                                "flags": 2097152,
                                                "start": 177,
                                                "end": 193
                                            },
                                            "flags": 2097152,
                                            "start": 168,
                                            "end": 193
                                        },
                                        "flags": 2097152,
                                        "start": 167,
                                        "end": 193
                                    },
                                    "contents": {
                                        "kind": 131,
                                        "expression": {
                                            "kind": 134299649,
                                            "text": "resolver",
                                            "rawText": "resolver",
                                            "flags": 96,
                                            "start": 196,
                                            "end": 209
                                        },
                                        "argumentList": {
                                            "kind": 256,
                                            "elements": [
                                                {
                                                    "kind": 134299649,
                                                    "text": "src",
                                                    "rawText": "src",
                                                    "flags": 96,
                                                    "start": 210,
                                                    "end": 213
                                                },
                                                {
                                                    "kind": 131,
                                                    "expression": {
                                                        "kind": 134299649,
                                                        "text": "process",
                                                        "rawText": "process",
                                                        "flags": 96,
                                                        "start": 214,
                                                        "end": 222
                                                    },
                                                    "argumentList": {
                                                        "kind": 256,
                                                        "elements": [
                                                            {
                                                                "kind": 134299649,
                                                                "text": "args",
                                                                "rawText": "args",
                                                                "flags": 96,
                                                                "start": 223,
                                                                "end": 227
                                                            }
                                                        ],
                                                        "trailingComma": false,
                                                        "flags": 32,
                                                        "start": 223,
                                                        "end": 227
                                                    },
                                                    "flags": 268435488,
                                                    "start": 214,
                                                    "end": 228
                                                },
                                                {
                                                    "kind": 134299649,
                                                    "text": "appContext",
                                                    "rawText": "appContext",
                                                    "flags": 96,
                                                    "start": 229,
                                                    "end": 240
                                                },
                                                {
                                                    "kind": 134299649,
                                                    "text": "info",
                                                    "rawText": "info",
                                                    "flags": 96,
                                                    "start": 241,
                                                    "end": 246
                                                }
                                            ],
                                            "trailingComma": false,
                                            "flags": 32,
                                            "start": 210,
                                            "end": 246
                                        },
                                        "flags": 268435488,
                                        "start": 196,
                                        "end": 247
                                    },
                                    "flags": 32,
                                    "start": 122,
                                    "end": 247
                                },
                                "flags": 32,
                                "start": 68,
                                "end": 247
                            },
                            "flags": 32,
                            "start": 19,
                            "end": 247
                        },
                        "flags": 16,
                        "start": 5,
                        "end": 247
                    }
                ],
                "flags": 16777232,
                "start": 5,
                "end": 247
            },
            "flags": 33554448,
            "start": 0,
            "end": 247
        }
    ],
    "isModule": false,
    "source": "const processArgs =\n  <A1: {}, A2: {}>(process: (args: A1) => A2) =>\n  <S, C, I, R>(resolver: Resolver<S, A2, C, I, R>) =>\n  (src: S, args: A1, appContext: C, info: I): Resolver<S, A1, C, I, R> =>\n    resolver(src, process(args), appContext, info)",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 247
}
```

### Printed

```javascript

const processArgs = (process) =>  (resolver) =>  (src,
args,
appContext,
info) =>  resolver(src, process(args), appContext, info);
```

### Diagnostics

```javascript
✔ No errors
```
