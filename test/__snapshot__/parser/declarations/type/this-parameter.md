# Kataw parser test case

## Input

`````js
type six = (this: number) => void;
type seven = (this: number, a: number) => void;
type eight = (this: number, ...a: any) => void;
type nine = <T>(this: T) => void;
type ten = {
  m1(this: string): void,
  m2(this: string, a: number): void,
  m3(this: string, ...a: any): void,
  m4<T>(this: T): void,
};
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
            "kind": 200,
            "declareToken": null,
            "typeToken": {
                "kind": 24775,
                "flags": 64,
                "start": 0,
                "end": 8
            },
            "name": {
                "kind": 134299649,
                "text": "six",
                "rawText": "six",
                "flags": 96,
                "start": 4,
                "end": 8
            },
            "typeParameters": null,
            "type": {
                "kind": 261,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "start": 25,
                    "end": 28
                },
                "parameters": {
                    "kind": 208,
                    "functionTypeParameterList": [
                        {
                            "kind": 149,
                            "ellipsisToken": null,
                            "name": {
                                "kind": 134299649,
                                "text": "this",
                                "rawText": "this",
                                "flags": 96,
                                "start": 12,
                                "end": 16
                            },
                            "optionalToken": null,
                            "typeAnnotation": {
                                "kind": 134234345,
                                "flags": 64,
                                "start": 17,
                                "end": 24
                            },
                            "flags": 0,
                            "start": 12,
                            "end": 24
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 12,
                    "end": 24
                },
                "returnType": {
                    "kind": 138477615,
                    "flags": 64,
                    "start": 28,
                    "end": 33
                },
                "typeParameters": null,
                "flags": 0,
                "start": 10,
                "end": 33
            },
            "flags": 16,
            "start": 0,
            "end": 34
        },
        {
            "kind": 200,
            "declareToken": null,
            "typeToken": {
                "kind": 24775,
                "flags": 64,
                "start": 34,
                "end": 45
            },
            "name": {
                "kind": 134299649,
                "text": "seven",
                "rawText": "seven",
                "flags": 96,
                "start": 39,
                "end": 45
            },
            "typeParameters": null,
            "type": {
                "kind": 261,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "start": 73,
                    "end": 76
                },
                "parameters": {
                    "kind": 208,
                    "functionTypeParameterList": [
                        {
                            "kind": 149,
                            "ellipsisToken": null,
                            "name": {
                                "kind": 134299649,
                                "text": "this",
                                "rawText": "this",
                                "flags": 96,
                                "start": 49,
                                "end": 53
                            },
                            "optionalToken": null,
                            "typeAnnotation": {
                                "kind": 134234345,
                                "flags": 64,
                                "start": 54,
                                "end": 61
                            },
                            "flags": 0,
                            "start": 49,
                            "end": 61
                        },
                        {
                            "kind": 149,
                            "ellipsisToken": null,
                            "name": {
                                "kind": 134299649,
                                "text": "a",
                                "rawText": "a",
                                "flags": 96,
                                "start": 62,
                                "end": 64
                            },
                            "optionalToken": null,
                            "typeAnnotation": {
                                "kind": 134234345,
                                "flags": 64,
                                "start": 65,
                                "end": 72
                            },
                            "flags": 0,
                            "start": 62,
                            "end": 72
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 49,
                    "end": 72
                },
                "returnType": {
                    "kind": 138477615,
                    "flags": 64,
                    "start": 76,
                    "end": 81
                },
                "typeParameters": null,
                "flags": 0,
                "start": 47,
                "end": 81
            },
            "flags": 16,
            "start": 34,
            "end": 82
        },
        {
            "kind": 200,
            "declareToken": null,
            "typeToken": {
                "kind": 24775,
                "flags": 64,
                "start": 82,
                "end": 93
            },
            "name": {
                "kind": 134299649,
                "text": "eight",
                "rawText": "eight",
                "flags": 96,
                "start": 87,
                "end": 93
            },
            "typeParameters": null,
            "type": {
                "kind": 261,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "start": 121,
                    "end": 124
                },
                "parameters": {
                    "kind": 208,
                    "functionTypeParameterList": [
                        {
                            "kind": 149,
                            "ellipsisToken": null,
                            "name": {
                                "kind": 134299649,
                                "text": "this",
                                "rawText": "this",
                                "flags": 96,
                                "start": 97,
                                "end": 101
                            },
                            "optionalToken": null,
                            "typeAnnotation": {
                                "kind": 134234345,
                                "flags": 64,
                                "start": 102,
                                "end": 109
                            },
                            "flags": 0,
                            "start": 97,
                            "end": 109
                        },
                        {
                            "kind": 149,
                            "ellipsisToken": {
                                "kind": 524302,
                                "flags": 64,
                                "start": 110,
                                "end": 114
                            },
                            "name": {
                                "kind": 134299649,
                                "text": "a",
                                "rawText": "a",
                                "flags": 96,
                                "start": 114,
                                "end": 115
                            },
                            "optionalToken": null,
                            "typeAnnotation": {
                                "kind": 134234252,
                                "flags": 64,
                                "start": 116,
                                "end": 120
                            },
                            "flags": 0,
                            "start": 110,
                            "end": 120
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 97,
                    "end": 120
                },
                "returnType": {
                    "kind": 138477615,
                    "flags": 64,
                    "start": 124,
                    "end": 129
                },
                "typeParameters": null,
                "flags": 0,
                "start": 95,
                "end": 129
            },
            "flags": 16,
            "start": 82,
            "end": 130
        },
        {
            "kind": 200,
            "declareToken": null,
            "typeToken": {
                "kind": 24775,
                "flags": 64,
                "start": 130,
                "end": 140
            },
            "name": {
                "kind": 134299649,
                "text": "nine",
                "rawText": "nine",
                "flags": 96,
                "start": 135,
                "end": 140
            },
            "typeParameters": null,
            "type": {
                "kind": 261,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "start": 155,
                    "end": 158
                },
                "parameters": {
                    "kind": 208,
                    "functionTypeParameterList": [
                        {
                            "kind": 149,
                            "ellipsisToken": null,
                            "name": {
                                "kind": 134299649,
                                "text": "this",
                                "rawText": "this",
                                "flags": 96,
                                "start": 147,
                                "end": 151
                            },
                            "optionalToken": null,
                            "typeAnnotation": {
                                "kind": 144,
                                "id": {
                                    "kind": 134299649,
                                    "text": "T",
                                    "rawText": "T",
                                    "flags": 96,
                                    "start": 152,
                                    "end": 154
                                },
                                "typeParameters": null,
                                "flags": 0,
                                "start": 152,
                                "end": 154
                            },
                            "flags": 0,
                            "start": 147,
                            "end": 154
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 147,
                    "end": 154
                },
                "returnType": {
                    "kind": 138477615,
                    "flags": 64,
                    "start": 158,
                    "end": 163
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
                                "start": 144,
                                "end": 145
                            },
                            "type": null,
                            "defaultType": null,
                            "flags": 0,
                            "start": 144,
                            "end": 145
                        }
                    ],
                    "flags": 0,
                    "start": 142,
                    "end": 146
                },
                "flags": 0,
                "start": 142,
                "end": 163
            },
            "flags": 16,
            "start": 130,
            "end": 164
        },
        {
            "kind": 200,
            "declareToken": null,
            "typeToken": {
                "kind": 24775,
                "flags": 64,
                "start": 164,
                "end": 173
            },
            "name": {
                "kind": 134299649,
                "text": "ten",
                "rawText": "ten",
                "flags": 96,
                "start": 169,
                "end": 173
            },
            "typeParameters": null,
            "type": {
                "kind": 134234353,
                "properties": [
                    {
                        "kind": 193,
                        "key": {
                            "kind": 134299649,
                            "text": "m1",
                            "rawText": "m1",
                            "flags": 96,
                            "start": 177,
                            "end": 182
                        },
                        "value": {
                            "kind": 148,
                            "parameters": {
                                "kind": 208,
                                "functionTypeParameterList": [
                                    {
                                        "kind": 149,
                                        "ellipsisToken": null,
                                        "name": {
                                            "kind": 134299649,
                                            "text": "this",
                                            "rawText": "this",
                                            "flags": 96,
                                            "start": 183,
                                            "end": 187
                                        },
                                        "optionalToken": null,
                                        "typeAnnotation": {
                                            "kind": 134234347,
                                            "flags": 64,
                                            "start": 188,
                                            "end": 195
                                        },
                                        "flags": 0,
                                        "start": 183,
                                        "end": 195
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 183,
                                "end": 195
                            },
                            "returnType": {
                                "kind": 138477615,
                                "flags": 64,
                                "start": 197,
                                "end": 202
                            },
                            "typeParameters": null,
                            "flags": 0,
                            "start": 182,
                            "end": 202
                        },
                        "optionalToken": null,
                        "staticToken": null,
                        "flags": 0,
                        "start": 177,
                        "end": 202
                    },
                    {
                        "kind": 193,
                        "key": {
                            "kind": 134299649,
                            "text": "m2",
                            "rawText": "m2",
                            "flags": 96,
                            "start": 203,
                            "end": 208
                        },
                        "value": {
                            "kind": 148,
                            "parameters": {
                                "kind": 208,
                                "functionTypeParameterList": [
                                    {
                                        "kind": 149,
                                        "ellipsisToken": null,
                                        "name": {
                                            "kind": 134299649,
                                            "text": "this",
                                            "rawText": "this",
                                            "flags": 96,
                                            "start": 209,
                                            "end": 213
                                        },
                                        "optionalToken": null,
                                        "typeAnnotation": {
                                            "kind": 134234347,
                                            "flags": 64,
                                            "start": 214,
                                            "end": 221
                                        },
                                        "flags": 0,
                                        "start": 209,
                                        "end": 221
                                    },
                                    {
                                        "kind": 149,
                                        "ellipsisToken": null,
                                        "name": {
                                            "kind": 134299649,
                                            "text": "a",
                                            "rawText": "a",
                                            "flags": 96,
                                            "start": 222,
                                            "end": 224
                                        },
                                        "optionalToken": null,
                                        "typeAnnotation": {
                                            "kind": 134234345,
                                            "flags": 64,
                                            "start": 225,
                                            "end": 232
                                        },
                                        "flags": 0,
                                        "start": 222,
                                        "end": 232
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 209,
                                "end": 232
                            },
                            "returnType": {
                                "kind": 138477615,
                                "flags": 64,
                                "start": 234,
                                "end": 239
                            },
                            "typeParameters": null,
                            "flags": 0,
                            "start": 208,
                            "end": 239
                        },
                        "optionalToken": null,
                        "staticToken": null,
                        "flags": 0,
                        "start": 203,
                        "end": 239
                    },
                    {
                        "kind": 193,
                        "key": {
                            "kind": 134299649,
                            "text": "m3",
                            "rawText": "m3",
                            "flags": 96,
                            "start": 240,
                            "end": 245
                        },
                        "value": {
                            "kind": 148,
                            "parameters": {
                                "kind": 208,
                                "functionTypeParameterList": [
                                    {
                                        "kind": 149,
                                        "ellipsisToken": null,
                                        "name": {
                                            "kind": 134299649,
                                            "text": "this",
                                            "rawText": "this",
                                            "flags": 96,
                                            "start": 246,
                                            "end": 250
                                        },
                                        "optionalToken": null,
                                        "typeAnnotation": {
                                            "kind": 134234347,
                                            "flags": 64,
                                            "start": 251,
                                            "end": 258
                                        },
                                        "flags": 0,
                                        "start": 246,
                                        "end": 258
                                    },
                                    {
                                        "kind": 149,
                                        "ellipsisToken": {
                                            "kind": 524302,
                                            "flags": 64,
                                            "start": 259,
                                            "end": 263
                                        },
                                        "name": {
                                            "kind": 134299649,
                                            "text": "a",
                                            "rawText": "a",
                                            "flags": 96,
                                            "start": 263,
                                            "end": 264
                                        },
                                        "optionalToken": null,
                                        "typeAnnotation": {
                                            "kind": 134234252,
                                            "flags": 64,
                                            "start": 265,
                                            "end": 269
                                        },
                                        "flags": 0,
                                        "start": 259,
                                        "end": 269
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 246,
                                "end": 269
                            },
                            "returnType": {
                                "kind": 138477615,
                                "flags": 64,
                                "start": 271,
                                "end": 276
                            },
                            "typeParameters": null,
                            "flags": 0,
                            "start": 245,
                            "end": 276
                        },
                        "optionalToken": null,
                        "staticToken": null,
                        "flags": 0,
                        "start": 240,
                        "end": 276
                    },
                    {
                        "kind": 193,
                        "key": {
                            "kind": 134299649,
                            "text": "m4",
                            "rawText": "m4",
                            "flags": 96,
                            "start": 277,
                            "end": 282
                        },
                        "value": {
                            "kind": 148,
                            "parameters": {
                                "kind": 208,
                                "functionTypeParameterList": [
                                    {
                                        "kind": 149,
                                        "ellipsisToken": null,
                                        "name": {
                                            "kind": 134299649,
                                            "text": "this",
                                            "rawText": "this",
                                            "flags": 96,
                                            "start": 286,
                                            "end": 290
                                        },
                                        "optionalToken": null,
                                        "typeAnnotation": {
                                            "kind": 144,
                                            "id": {
                                                "kind": 134299649,
                                                "text": "T",
                                                "rawText": "T",
                                                "flags": 96,
                                                "start": 291,
                                                "end": 293
                                            },
                                            "typeParameters": null,
                                            "flags": 0,
                                            "start": 291,
                                            "end": 293
                                        },
                                        "flags": 0,
                                        "start": 286,
                                        "end": 293
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 286,
                                "end": 293
                            },
                            "returnType": {
                                "kind": 138477615,
                                "flags": 64,
                                "start": 295,
                                "end": 300
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
                                            "start": 283,
                                            "end": 284
                                        },
                                        "type": null,
                                        "defaultType": null,
                                        "flags": 0,
                                        "start": 283,
                                        "end": 284
                                    }
                                ],
                                "flags": 0,
                                "start": 282,
                                "end": 285
                            },
                            "flags": 0,
                            "start": 282,
                            "end": 300
                        },
                        "optionalToken": null,
                        "staticToken": null,
                        "flags": 0,
                        "start": 277,
                        "end": 300
                    }
                ],
                "indexers": [],
                "callProperties": [],
                "internalSlots": [],
                "flags": 0,
                "start": 175,
                "end": 303
            },
            "flags": 16,
            "start": 164,
            "end": 304
        }
    ],
    "isModule": false,
    "source": "type six = (this: number) => void;\ntype seven = (this: number, a: number) => void;\ntype eight = (this: number, ...a: any) => void;\ntype nine = <T>(this: T) => void;\ntype ten = {\n  m1(this: string): void,\n  m2(this: string, a: number): void,\n  m3(this: string, ...a: any): void,\n  m4<T>(this: T): void,\n};",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 304
}
```

### Printed

```javascript






```

### Diagnostics

```javascript
✔ No errors
```
