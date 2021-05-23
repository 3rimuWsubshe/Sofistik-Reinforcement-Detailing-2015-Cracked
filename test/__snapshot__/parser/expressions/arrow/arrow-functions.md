# Kataw parser test case

## Input

`````js
const bar1 = (x: number): string => {};
const bar2 = (x?) => {};
const bar3 = (x?: string) => {};
const bar4 = (x, y?: string) => {};
const bar5 = (x, ...y?: string) => {};
const bar6 = x => {};
const bar7 = (x): string => {};
const bar8 = (x: number) => {};
const bar9 = <T>(x) => {};
`````

## Options

### Parser Options

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
                "flags": 0,
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
                            "text": "bar1",
                            "rawText": "bar1",
                            "flags": 96,
                            "start": 5,
                            "end": 10
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": {
                            "kind": 271,
                            "arrowToken": {
                                "kind": 10,
                                "flags": 0,
                                "start": 32,
                                "end": 35
                            },
                            "typeParameters": null,
                            "parameters": [
                                {
                                    "kind": 215,
                                    "ellipsisToken": null,
                                    "binding": {
                                        "kind": 134299649,
                                        "text": "x",
                                        "rawText": "x",
                                        "flags": 96,
                                        "start": 14,
                                        "end": 15
                                    },
                                    "optionalToken": null,
                                    "type": {
                                        "kind": 139,
                                        "type": {
                                            "kind": 134234345,
                                            "flags": 64,
                                            "start": 16,
                                            "end": 23
                                        },
                                        "flags": 0,
                                        "start": 15,
                                        "end": 23
                                    },
                                    "initializer": null,
                                    "flags": 32,
                                    "start": 12,
                                    "end": 23
                                }
                            ],
                            "asyncKeyword": null,
                            "returnType": {
                                "kind": 139,
                                "type": {
                                    "kind": 134234347,
                                    "flags": 64,
                                    "start": 25,
                                    "end": 32
                                },
                                "flags": 0,
                                "start": 24,
                                "end": 32
                            },
                            "contents": {
                                "kind": 216,
                                "functionStatementList": {
                                    "kind": 217,
                                    "directives": [],
                                    "statements": [],
                                    "flags": 32,
                                    "start": 37,
                                    "end": 37
                                },
                                "flags": 32,
                                "start": 35,
                                "end": 38
                            },
                            "flags": 32,
                            "start": 12,
                            "end": 38
                        },
                        "flags": 16,
                        "start": 5,
                        "end": 38
                    }
                ],
                "flags": 16777232,
                "start": 5,
                "end": 38
            },
            "flags": 33554448,
            "start": 0,
            "end": 39
        },
        {
            "kind": 162,
            "lexicalKeyword": {
                "kind": 37757004,
                "flags": 1,
                "start": 39,
                "end": 45
            },
            "binding": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 134299649,
                            "text": "bar2",
                            "rawText": "bar2",
                            "flags": 96,
                            "start": 45,
                            "end": 50
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": {
                            "kind": 271,
                            "arrowToken": {
                                "kind": 10,
                                "flags": 0,
                                "start": 57,
                                "end": 60
                            },
                            "typeParameters": null,
                            "parameters": [
                                {
                                    "kind": 215,
                                    "ellipsisToken": null,
                                    "binding": {
                                        "kind": 134299649,
                                        "text": "x",
                                        "rawText": "x",
                                        "flags": 96,
                                        "start": 54,
                                        "end": 55
                                    },
                                    "optionalToken": {
                                        "kind": 134217750,
                                        "flags": 64,
                                        "start": 55,
                                        "end": 56
                                    },
                                    "type": null,
                                    "initializer": null,
                                    "flags": 32,
                                    "start": 52,
                                    "end": 56
                                }
                            ],
                            "asyncKeyword": null,
                            "returnType": null,
                            "contents": {
                                "kind": 216,
                                "functionStatementList": {
                                    "kind": 217,
                                    "directives": [],
                                    "statements": [],
                                    "flags": 32,
                                    "start": 62,
                                    "end": 62
                                },
                                "flags": 32,
                                "start": 60,
                                "end": 63
                            },
                            "flags": 32,
                            "start": 52,
                            "end": 63
                        },
                        "flags": 16,
                        "start": 45,
                        "end": 63
                    }
                ],
                "flags": 16777232,
                "start": 45,
                "end": 63
            },
            "flags": 33554448,
            "start": 39,
            "end": 64
        },
        {
            "kind": 162,
            "lexicalKeyword": {
                "kind": 37757004,
                "flags": 1,
                "start": 64,
                "end": 70
            },
            "binding": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 134299649,
                            "text": "bar3",
                            "rawText": "bar3",
                            "flags": 96,
                            "start": 70,
                            "end": 75
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": {
                            "kind": 271,
                            "arrowToken": {
                                "kind": 10,
                                "flags": 0,
                                "start": 90,
                                "end": 93
                            },
                            "typeParameters": null,
                            "parameters": [
                                {
                                    "kind": 215,
                                    "ellipsisToken": null,
                                    "binding": {
                                        "kind": 134299649,
                                        "text": "x",
                                        "rawText": "x",
                                        "flags": 96,
                                        "start": 79,
                                        "end": 80
                                    },
                                    "optionalToken": {
                                        "kind": 134217750,
                                        "flags": 64,
                                        "start": 80,
                                        "end": 81
                                    },
                                    "type": {
                                        "kind": 139,
                                        "type": {
                                            "kind": 134234347,
                                            "flags": 64,
                                            "start": 82,
                                            "end": 89
                                        },
                                        "flags": 0,
                                        "start": 81,
                                        "end": 89
                                    },
                                    "initializer": null,
                                    "flags": 32,
                                    "start": 77,
                                    "end": 89
                                }
                            ],
                            "asyncKeyword": null,
                            "returnType": null,
                            "contents": {
                                "kind": 216,
                                "functionStatementList": {
                                    "kind": 217,
                                    "directives": [],
                                    "statements": [],
                                    "flags": 32,
                                    "start": 95,
                                    "end": 95
                                },
                                "flags": 32,
                                "start": 93,
                                "end": 96
                            },
                            "flags": 32,
                            "start": 77,
                            "end": 96
                        },
                        "flags": 16,
                        "start": 70,
                        "end": 96
                    }
                ],
                "flags": 16777232,
                "start": 70,
                "end": 96
            },
            "flags": 33554448,
            "start": 64,
            "end": 97
        },
        {
            "kind": 162,
            "lexicalKeyword": {
                "kind": 37757004,
                "flags": 1,
                "start": 97,
                "end": 103
            },
            "binding": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 134299649,
                            "text": "bar4",
                            "rawText": "bar4",
                            "flags": 96,
                            "start": 103,
                            "end": 108
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": {
                            "kind": 271,
                            "arrowToken": {
                                "kind": 10,
                                "flags": 0,
                                "start": 126,
                                "end": 129
                            },
                            "typeParameters": null,
                            "parameters": [
                                [
                                    {
                                        "kind": 134299649,
                                        "text": "x",
                                        "rawText": "x",
                                        "flags": 96,
                                        "start": 112,
                                        "end": 113
                                    },
                                    {
                                        "kind": 215,
                                        "ellipsisToken": null,
                                        "binding": {
                                            "kind": 134299649,
                                            "text": "y",
                                            "rawText": "y",
                                            "flags": 96,
                                            "start": 114,
                                            "end": 116
                                        },
                                        "optionalToken": {
                                            "kind": 134217750,
                                            "flags": 64,
                                            "start": 116,
                                            "end": 117
                                        },
                                        "type": {
                                            "kind": 139,
                                            "type": {
                                                "kind": 134234347,
                                                "flags": 64,
                                                "start": 118,
                                                "end": 125
                                            },
                                            "flags": 0,
                                            "start": 117,
                                            "end": 125
                                        },
                                        "initializer": null,
                                        "flags": 32,
                                        "start": 110,
                                        "end": 125
                                    }
                                ]
                            ],
                            "asyncKeyword": null,
                            "returnType": null,
                            "contents": {
                                "kind": 216,
                                "functionStatementList": {
                                    "kind": 217,
                                    "directives": [],
                                    "statements": [],
                                    "flags": 32,
                                    "start": 131,
                                    "end": 131
                                },
                                "flags": 32,
                                "start": 129,
                                "end": 132
                            },
                            "flags": 32,
                            "start": 110,
                            "end": 132
                        },
                        "flags": 16,
                        "start": 103,
                        "end": 132
                    }
                ],
                "flags": 16777232,
                "start": 103,
                "end": 132
            },
            "flags": 33554448,
            "start": 97,
            "end": 133
        },
        {
            "kind": 162,
            "lexicalKeyword": {
                "kind": 37757004,
                "flags": 1,
                "start": 133,
                "end": 139
            },
            "binding": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 134299649,
                            "text": "bar5",
                            "rawText": "bar5",
                            "flags": 96,
                            "start": 139,
                            "end": 144
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": {
                            "kind": 271,
                            "arrowToken": {
                                "kind": 10,
                                "flags": 0,
                                "start": 165,
                                "end": 168
                            },
                            "typeParameters": null,
                            "parameters": [
                                [
                                    {
                                        "kind": 134299649,
                                        "text": "x",
                                        "rawText": "x",
                                        "flags": 96,
                                        "start": 148,
                                        "end": 149
                                    },
                                    {
                                        "kind": 215,
                                        "ellipsisToken": {
                                            "kind": 524302,
                                            "flags": 64,
                                            "start": 150,
                                            "end": 154
                                        },
                                        "binding": {
                                            "kind": 134299649,
                                            "text": "y",
                                            "rawText": "y",
                                            "flags": 96,
                                            "start": 154,
                                            "end": 155
                                        },
                                        "optionalToken": {
                                            "kind": 134217750,
                                            "flags": 64,
                                            "start": 155,
                                            "end": 156
                                        },
                                        "type": {
                                            "kind": 139,
                                            "type": {
                                                "kind": 134234347,
                                                "flags": 64,
                                                "start": 157,
                                                "end": 164
                                            },
                                            "flags": 0,
                                            "start": 156,
                                            "end": 164
                                        },
                                        "initializer": null,
                                        "flags": 34,
                                        "start": 150,
                                        "end": 164
                                    }
                                ]
                            ],
                            "asyncKeyword": null,
                            "returnType": null,
                            "contents": {
                                "kind": 216,
                                "functionStatementList": {
                                    "kind": 217,
                                    "directives": [],
                                    "statements": [],
                                    "flags": 32,
                                    "start": 170,
                                    "end": 170
                                },
                                "flags": 32,
                                "start": 168,
                                "end": 171
                            },
                            "flags": 32,
                            "start": 146,
                            "end": 171
                        },
                        "flags": 16,
                        "start": 139,
                        "end": 171
                    }
                ],
                "flags": 16777232,
                "start": 139,
                "end": 171
            },
            "flags": 33554448,
            "start": 133,
            "end": 172
        },
        {
            "kind": 162,
            "lexicalKeyword": {
                "kind": 37757004,
                "flags": 1,
                "start": 172,
                "end": 178
            },
            "binding": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 134299649,
                            "text": "bar6",
                            "rawText": "bar6",
                            "flags": 96,
                            "start": 178,
                            "end": 183
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": {
                            "kind": 271,
                            "arrowToken": {
                                "kind": 10,
                                "flags": 0,
                                "start": 187,
                                "end": 190
                            },
                            "typeParameters": null,
                            "parameters": {
                                "kind": 134299649,
                                "text": "x",
                                "rawText": "x",
                                "flags": 96,
                                "start": 185,
                                "end": 187
                            },
                            "asyncKeyword": null,
                            "returnType": null,
                            "contents": {
                                "kind": 216,
                                "functionStatementList": {
                                    "kind": 217,
                                    "directives": [],
                                    "statements": [],
                                    "flags": 32,
                                    "start": 192,
                                    "end": 192
                                },
                                "flags": 32,
                                "start": 190,
                                "end": 193
                            },
                            "flags": 32,
                            "start": 185,
                            "end": 193
                        },
                        "flags": 16,
                        "start": 178,
                        "end": 193
                    }
                ],
                "flags": 16777232,
                "start": 178,
                "end": 193
            },
            "flags": 33554448,
            "start": 172,
            "end": 194
        },
        {
            "kind": 162,
            "lexicalKeyword": {
                "kind": 37757004,
                "flags": 1,
                "start": 194,
                "end": 200
            },
            "binding": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 134299649,
                            "text": "bar7",
                            "rawText": "bar7",
                            "flags": 96,
                            "start": 200,
                            "end": 205
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": {
                            "kind": 271,
                            "arrowToken": {
                                "kind": 10,
                                "flags": 0,
                                "start": 219,
                                "end": 222
                            },
                            "typeParameters": null,
                            "parameters": [
                                {
                                    "kind": 134299649,
                                    "text": "x",
                                    "rawText": "x",
                                    "flags": 96,
                                    "start": 209,
                                    "end": 210
                                }
                            ],
                            "asyncKeyword": null,
                            "returnType": {
                                "kind": 139,
                                "type": {
                                    "kind": 134234347,
                                    "flags": 64,
                                    "start": 212,
                                    "end": 219
                                },
                                "flags": 0,
                                "start": 211,
                                "end": 219
                            },
                            "contents": {
                                "kind": 216,
                                "functionStatementList": {
                                    "kind": 217,
                                    "directives": [],
                                    "statements": [],
                                    "flags": 32,
                                    "start": 224,
                                    "end": 224
                                },
                                "flags": 32,
                                "start": 222,
                                "end": 225
                            },
                            "flags": 32,
                            "start": 207,
                            "end": 225
                        },
                        "flags": 16,
                        "start": 200,
                        "end": 225
                    }
                ],
                "flags": 16777232,
                "start": 200,
                "end": 225
            },
            "flags": 33554448,
            "start": 194,
            "end": 226
        },
        {
            "kind": 162,
            "lexicalKeyword": {
                "kind": 37757004,
                "flags": 1,
                "start": 226,
                "end": 232
            },
            "binding": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 134299649,
                            "text": "bar8",
                            "rawText": "bar8",
                            "flags": 96,
                            "start": 232,
                            "end": 237
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": {
                            "kind": 271,
                            "arrowToken": {
                                "kind": 10,
                                "flags": 0,
                                "start": 251,
                                "end": 254
                            },
                            "typeParameters": null,
                            "parameters": [
                                {
                                    "kind": 215,
                                    "ellipsisToken": null,
                                    "binding": {
                                        "kind": 134299649,
                                        "text": "x",
                                        "rawText": "x",
                                        "flags": 96,
                                        "start": 241,
                                        "end": 242
                                    },
                                    "optionalToken": null,
                                    "type": {
                                        "kind": 139,
                                        "type": {
                                            "kind": 134234345,
                                            "flags": 64,
                                            "start": 243,
                                            "end": 250
                                        },
                                        "flags": 0,
                                        "start": 242,
                                        "end": 250
                                    },
                                    "initializer": null,
                                    "flags": 32,
                                    "start": 239,
                                    "end": 250
                                }
                            ],
                            "asyncKeyword": null,
                            "returnType": null,
                            "contents": {
                                "kind": 216,
                                "functionStatementList": {
                                    "kind": 217,
                                    "directives": [],
                                    "statements": [],
                                    "flags": 32,
                                    "start": 256,
                                    "end": 256
                                },
                                "flags": 32,
                                "start": 254,
                                "end": 257
                            },
                            "flags": 32,
                            "start": 239,
                            "end": 257
                        },
                        "flags": 16,
                        "start": 232,
                        "end": 257
                    }
                ],
                "flags": 16777232,
                "start": 232,
                "end": 257
            },
            "flags": 33554448,
            "start": 226,
            "end": 258
        },
        {
            "kind": 162,
            "lexicalKeyword": {
                "kind": 37757004,
                "flags": 1,
                "start": 258,
                "end": 264
            },
            "binding": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 134299649,
                            "text": "bar9",
                            "rawText": "bar9",
                            "flags": 96,
                            "start": 264,
                            "end": 269
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": {
                            "kind": 271,
                            "arrowToken": {
                                "kind": 10,
                                "flags": 0,
                                "start": 278,
                                "end": 281
                            },
                            "typeParameters": {
                                "kind": 265,
                                "typeParameters": [
                                    {
                                        "kind": 146,
                                        "name": {
                                            "kind": 134299649,
                                            "text": "T",
                                            "rawText": "T",
                                            "flags": 96,
                                            "start": 273,
                                            "end": 274
                                        },
                                        "type": null,
                                        "defaultType": null,
                                        "flags": 0,
                                        "start": 273,
                                        "end": 274
                                    }
                                ],
                                "flags": 0,
                                "start": 271,
                                "end": 275
                            },
                            "parameters": [
                                {
                                    "kind": 134299649,
                                    "text": "x",
                                    "rawText": "x",
                                    "flags": 96,
                                    "start": 276,
                                    "end": 277
                                }
                            ],
                            "asyncKeyword": null,
                            "returnType": null,
                            "contents": {
                                "kind": 216,
                                "functionStatementList": {
                                    "kind": 217,
                                    "directives": [],
                                    "statements": [],
                                    "flags": 32,
                                    "start": 283,
                                    "end": 283
                                },
                                "flags": 32,
                                "start": 281,
                                "end": 284
                            },
                            "flags": 32,
                            "start": 271,
                            "end": 284
                        },
                        "flags": 16,
                        "start": 264,
                        "end": 284
                    }
                ],
                "flags": 16777232,
                "start": 264,
                "end": 284
            },
            "flags": 33554448,
            "start": 258,
            "end": 285
        }
    ],
    "isModule": false,
    "source": "const bar1 = (x: number): string => {};\nconst bar2 = (x?) => {};\nconst bar3 = (x?: string) => {};\nconst bar4 = (x, y?: string) => {};\nconst bar5 = (x, ...y?: string) => {};\nconst bar6 = x => {};\nconst bar7 = (x): string => {};\nconst bar8 = (x: number) => {};\nconst bar9 = <T>(x) => {};",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 285
}
```

### Printed

```javascript

const bar1 = (x) =>  {};
const bar2 = (x?) =>  {};
const bar3 = (x?) =>  {};
const bar4 = () =>  {};
const bar5 = () =>  {};
const bar6 = x =>  {};
const bar7 = (x) =>  {};
const bar8 = (x) =>  {};
const bar9 = (x) =>  {};
```

### Diagnostics

```javascript
✔ No errors
```
