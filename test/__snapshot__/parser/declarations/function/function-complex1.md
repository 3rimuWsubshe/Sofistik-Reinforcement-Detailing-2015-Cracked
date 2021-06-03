# Kataw parser test case

## Input

`````js
function w<A: [number, number]>(x: A, f: (number, ...A) => void) {
  f(...x); // nope
  f(42, 42, 42); // nope
  f(42, ...x);
  f(42, ...x, ...x); // nope
}
function w2<A: Array<number>>(x: A, f: (number, ...A) => void) {
  f(...x);
  f(42, 42, 42); // nope
  f(42, 42, 42, ...x); // should be nope
  f(42, ...x);
  f(42, ...x, ...x);
}
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
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 64,
                "start": 0,
                "end": 8
            },
            "generatorToken": null,
            "name": {
                "kind": 134299649,
                "text": "w",
                "rawText": "w",
                "flags": 96,
                "start": 8,
                "end": 10
            },
            "formalParameters": {
                "kind": 214,
                "formalParameterList": [
                    {
                        "kind": 281,
                        "ellipsisToken": null,
                        "left": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "start": 32,
                            "end": 33
                        },
                        "optionalToken": null,
                        "type": {
                            "kind": 139,
                            "type": {
                                "kind": 144,
                                "id": {
                                    "kind": 134299649,
                                    "text": "A",
                                    "rawText": "A",
                                    "flags": 96,
                                    "start": 34,
                                    "end": 36
                                },
                                "typeParameters": null,
                                "flags": 0,
                                "start": 34,
                                "end": 36
                            },
                            "flags": 0,
                            "start": 33,
                            "end": 36
                        },
                        "right": null,
                        "flags": 32,
                        "start": 32,
                        "end": 36
                    },
                    {
                        "kind": 281,
                        "ellipsisToken": null,
                        "left": {
                            "kind": 134299649,
                            "text": "f",
                            "rawText": "f",
                            "flags": 96,
                            "start": 37,
                            "end": 39
                        },
                        "optionalToken": null,
                        "type": {
                            "kind": 139,
                            "type": {
                                "kind": 261,
                                "arrowToken": {
                                    "kind": 10,
                                    "flags": 64,
                                    "start": 55,
                                    "end": 58
                                },
                                "parameters": [
                                    {
                                        "kind": 134234345,
                                        "flags": 64,
                                        "start": 42,
                                        "end": 48
                                    },
                                    {
                                        "kind": 149,
                                        "ellipsisToken": {
                                            "kind": 524302,
                                            "flags": 64,
                                            "start": 49,
                                            "end": 53
                                        },
                                        "name": null,
                                        "optionalToken": null,
                                        "typeAnnotation": {
                                            "kind": 144,
                                            "id": {
                                                "kind": 134299649,
                                                "text": "A",
                                                "rawText": "A",
                                                "flags": 96,
                                                "start": 53,
                                                "end": 54
                                            },
                                            "typeParameters": null,
                                            "flags": 0,
                                            "start": 53,
                                            "end": 54
                                        },
                                        "flags": 0,
                                        "start": 49,
                                        "end": 54
                                    }
                                ],
                                "returnType": {
                                    "kind": 138477615,
                                    "flags": 64,
                                    "start": 58,
                                    "end": 63
                                },
                                "typeParameters": null,
                                "flags": 0,
                                "start": 40,
                                "end": 63
                            },
                            "flags": 0,
                            "start": 39,
                            "end": 63
                        },
                        "right": null,
                        "flags": 32,
                        "start": 37,
                        "end": 63
                    }
                ],
                "trailingComma": false,
                "flags": 32,
                "start": 31,
                "end": 64
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [
                        {
                            "kind": 120,
                            "expression": {
                                "kind": 131,
                                "expression": {
                                    "kind": 134299649,
                                    "text": "f",
                                    "rawText": "f",
                                    "flags": 96,
                                    "start": 66,
                                    "end": 70
                                },
                                "argumentList": {
                                    "kind": 256,
                                    "elements": [
                                        {
                                            "kind": 223,
                                            "ellipsisToken": {
                                                "kind": 524302,
                                                "flags": 64,
                                                "start": 71,
                                                "end": 74
                                            },
                                            "argument": {
                                                "kind": 134299649,
                                                "text": "x",
                                                "rawText": "x",
                                                "flags": 96,
                                                "start": 74,
                                                "end": 75
                                            },
                                            "flags": 32,
                                            "start": 71,
                                            "end": 75
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "start": 71,
                                    "end": 75
                                },
                                "flags": 268435488,
                                "start": 66,
                                "end": 76
                            },
                            "flags": 16,
                            "start": 66,
                            "end": 77
                        },
                        {
                            "kind": 120,
                            "expression": {
                                "kind": 131,
                                "expression": {
                                    "kind": 134299649,
                                    "text": "f",
                                    "rawText": "f",
                                    "flags": 96,
                                    "start": 77,
                                    "end": 89
                                },
                                "argumentList": {
                                    "kind": 256,
                                    "elements": [
                                        {
                                            "kind": 201392130,
                                            "text": 42,
                                            "rawText": "42",
                                            "flags": 96,
                                            "start": 90,
                                            "end": 92
                                        },
                                        {
                                            "kind": 201392130,
                                            "text": 42,
                                            "rawText": "42",
                                            "flags": 96,
                                            "start": 93,
                                            "end": 96
                                        },
                                        {
                                            "kind": 201392130,
                                            "text": 42,
                                            "rawText": "42",
                                            "flags": 96,
                                            "start": 97,
                                            "end": 100
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "start": 90,
                                    "end": 100
                                },
                                "flags": 268435488,
                                "start": 77,
                                "end": 101
                            },
                            "flags": 16,
                            "start": 77,
                            "end": 102
                        },
                        {
                            "kind": 120,
                            "expression": {
                                "kind": 131,
                                "expression": {
                                    "kind": 134299649,
                                    "text": "f",
                                    "rawText": "f",
                                    "flags": 96,
                                    "start": 102,
                                    "end": 114
                                },
                                "argumentList": {
                                    "kind": 256,
                                    "elements": [
                                        {
                                            "kind": 201392130,
                                            "text": 42,
                                            "rawText": "42",
                                            "flags": 96,
                                            "start": 115,
                                            "end": 117
                                        },
                                        {
                                            "kind": 223,
                                            "ellipsisToken": {
                                                "kind": 524302,
                                                "flags": 64,
                                                "start": 118,
                                                "end": 122
                                            },
                                            "argument": {
                                                "kind": 134299649,
                                                "text": "x",
                                                "rawText": "x",
                                                "flags": 96,
                                                "start": 122,
                                                "end": 123
                                            },
                                            "flags": 32,
                                            "start": 118,
                                            "end": 123
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "start": 115,
                                    "end": 123
                                },
                                "flags": 268435488,
                                "start": 102,
                                "end": 124
                            },
                            "flags": 16,
                            "start": 102,
                            "end": 125
                        },
                        {
                            "kind": 120,
                            "expression": {
                                "kind": 131,
                                "expression": {
                                    "kind": 134299649,
                                    "text": "f",
                                    "rawText": "f",
                                    "flags": 96,
                                    "start": 125,
                                    "end": 129
                                },
                                "argumentList": {
                                    "kind": 256,
                                    "elements": [
                                        {
                                            "kind": 201392130,
                                            "text": 42,
                                            "rawText": "42",
                                            "flags": 96,
                                            "start": 130,
                                            "end": 132
                                        },
                                        {
                                            "kind": 223,
                                            "ellipsisToken": {
                                                "kind": 524302,
                                                "flags": 64,
                                                "start": 133,
                                                "end": 137
                                            },
                                            "argument": {
                                                "kind": 134299649,
                                                "text": "x",
                                                "rawText": "x",
                                                "flags": 96,
                                                "start": 137,
                                                "end": 138
                                            },
                                            "flags": 32,
                                            "start": 133,
                                            "end": 138
                                        },
                                        {
                                            "kind": 223,
                                            "ellipsisToken": {
                                                "kind": 524302,
                                                "flags": 64,
                                                "start": 139,
                                                "end": 143
                                            },
                                            "argument": {
                                                "kind": 134299649,
                                                "text": "x",
                                                "rawText": "x",
                                                "flags": 96,
                                                "start": 143,
                                                "end": 144
                                            },
                                            "flags": 32,
                                            "start": 139,
                                            "end": 144
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "start": 130,
                                    "end": 144
                                },
                                "flags": 268435488,
                                "start": 125,
                                "end": 145
                            },
                            "flags": 16,
                            "start": 125,
                            "end": 146
                        }
                    ],
                    "flags": 33,
                    "start": 66,
                    "end": 146
                },
                "flags": 32,
                "start": 64,
                "end": 156
            },
            "typeParameters": {
                "kind": 265,
                "typeParameters": [
                    {
                        "kind": 146,
                        "name": {
                            "kind": 134299649,
                            "text": "A",
                            "rawText": "A",
                            "flags": 96,
                            "start": 11,
                            "end": 12
                        },
                        "type": {
                            "kind": 139,
                            "type": {
                                "kind": 147,
                                "elementTypes": [
                                    {
                                        "kind": 134234345,
                                        "flags": 64,
                                        "start": 15,
                                        "end": 21
                                    },
                                    {
                                        "kind": 134234345,
                                        "flags": 64,
                                        "start": 22,
                                        "end": 29
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 0,
                                "start": 13,
                                "end": 30
                            },
                            "flags": 0,
                            "start": 12,
                            "end": 30
                        },
                        "defaultType": null,
                        "flags": 0,
                        "start": 11,
                        "end": 30
                    }
                ],
                "flags": 0,
                "start": 10,
                "end": 31
            },
            "returnType": null,
            "flags": 16,
            "start": 0,
            "end": 156
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 65,
                "start": 156,
                "end": 165
            },
            "generatorToken": null,
            "name": {
                "kind": 134299649,
                "text": "w2",
                "rawText": "w2",
                "flags": 96,
                "start": 165,
                "end": 168
            },
            "formalParameters": {
                "kind": 214,
                "formalParameterList": [
                    {
                        "kind": 281,
                        "ellipsisToken": null,
                        "left": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "start": 187,
                            "end": 188
                        },
                        "optionalToken": null,
                        "type": {
                            "kind": 139,
                            "type": {
                                "kind": 144,
                                "id": {
                                    "kind": 134299649,
                                    "text": "A",
                                    "rawText": "A",
                                    "flags": 96,
                                    "start": 189,
                                    "end": 191
                                },
                                "typeParameters": null,
                                "flags": 0,
                                "start": 189,
                                "end": 191
                            },
                            "flags": 0,
                            "start": 188,
                            "end": 191
                        },
                        "right": null,
                        "flags": 32,
                        "start": 187,
                        "end": 191
                    },
                    {
                        "kind": 281,
                        "ellipsisToken": null,
                        "left": {
                            "kind": 134299649,
                            "text": "f",
                            "rawText": "f",
                            "flags": 96,
                            "start": 192,
                            "end": 194
                        },
                        "optionalToken": null,
                        "type": {
                            "kind": 139,
                            "type": {
                                "kind": 261,
                                "arrowToken": {
                                    "kind": 10,
                                    "flags": 64,
                                    "start": 210,
                                    "end": 213
                                },
                                "parameters": [
                                    {
                                        "kind": 134234345,
                                        "flags": 64,
                                        "start": 197,
                                        "end": 203
                                    },
                                    {
                                        "kind": 149,
                                        "ellipsisToken": {
                                            "kind": 524302,
                                            "flags": 64,
                                            "start": 204,
                                            "end": 208
                                        },
                                        "name": null,
                                        "optionalToken": null,
                                        "typeAnnotation": {
                                            "kind": 144,
                                            "id": {
                                                "kind": 134299649,
                                                "text": "A",
                                                "rawText": "A",
                                                "flags": 96,
                                                "start": 208,
                                                "end": 209
                                            },
                                            "typeParameters": null,
                                            "flags": 0,
                                            "start": 208,
                                            "end": 209
                                        },
                                        "flags": 0,
                                        "start": 204,
                                        "end": 209
                                    }
                                ],
                                "returnType": {
                                    "kind": 138477615,
                                    "flags": 64,
                                    "start": 213,
                                    "end": 218
                                },
                                "typeParameters": null,
                                "flags": 0,
                                "start": 195,
                                "end": 218
                            },
                            "flags": 0,
                            "start": 194,
                            "end": 218
                        },
                        "right": null,
                        "flags": 32,
                        "start": 192,
                        "end": 218
                    }
                ],
                "trailingComma": false,
                "flags": 32,
                "start": 186,
                "end": 219
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [
                        {
                            "kind": 120,
                            "expression": {
                                "kind": 131,
                                "expression": {
                                    "kind": 134299649,
                                    "text": "f",
                                    "rawText": "f",
                                    "flags": 96,
                                    "start": 221,
                                    "end": 225
                                },
                                "argumentList": {
                                    "kind": 256,
                                    "elements": [
                                        {
                                            "kind": 223,
                                            "ellipsisToken": {
                                                "kind": 524302,
                                                "flags": 64,
                                                "start": 226,
                                                "end": 229
                                            },
                                            "argument": {
                                                "kind": 134299649,
                                                "text": "x",
                                                "rawText": "x",
                                                "flags": 96,
                                                "start": 229,
                                                "end": 230
                                            },
                                            "flags": 32,
                                            "start": 226,
                                            "end": 230
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "start": 226,
                                    "end": 230
                                },
                                "flags": 268435488,
                                "start": 221,
                                "end": 231
                            },
                            "flags": 16,
                            "start": 221,
                            "end": 232
                        },
                        {
                            "kind": 120,
                            "expression": {
                                "kind": 131,
                                "expression": {
                                    "kind": 134299649,
                                    "text": "f",
                                    "rawText": "f",
                                    "flags": 96,
                                    "start": 232,
                                    "end": 236
                                },
                                "argumentList": {
                                    "kind": 256,
                                    "elements": [
                                        {
                                            "kind": 201392130,
                                            "text": 42,
                                            "rawText": "42",
                                            "flags": 96,
                                            "start": 237,
                                            "end": 239
                                        },
                                        {
                                            "kind": 201392130,
                                            "text": 42,
                                            "rawText": "42",
                                            "flags": 96,
                                            "start": 240,
                                            "end": 243
                                        },
                                        {
                                            "kind": 201392130,
                                            "text": 42,
                                            "rawText": "42",
                                            "flags": 96,
                                            "start": 244,
                                            "end": 247
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "start": 237,
                                    "end": 247
                                },
                                "flags": 268435488,
                                "start": 232,
                                "end": 248
                            },
                            "flags": 16,
                            "start": 232,
                            "end": 249
                        },
                        {
                            "kind": 120,
                            "expression": {
                                "kind": 131,
                                "expression": {
                                    "kind": 134299649,
                                    "text": "f",
                                    "rawText": "f",
                                    "flags": 96,
                                    "start": 249,
                                    "end": 261
                                },
                                "argumentList": {
                                    "kind": 256,
                                    "elements": [
                                        {
                                            "kind": 201392130,
                                            "text": 42,
                                            "rawText": "42",
                                            "flags": 96,
                                            "start": 262,
                                            "end": 264
                                        },
                                        {
                                            "kind": 201392130,
                                            "text": 42,
                                            "rawText": "42",
                                            "flags": 96,
                                            "start": 265,
                                            "end": 268
                                        },
                                        {
                                            "kind": 201392130,
                                            "text": 42,
                                            "rawText": "42",
                                            "flags": 96,
                                            "start": 269,
                                            "end": 272
                                        },
                                        {
                                            "kind": 223,
                                            "ellipsisToken": {
                                                "kind": 524302,
                                                "flags": 64,
                                                "start": 273,
                                                "end": 277
                                            },
                                            "argument": {
                                                "kind": 134299649,
                                                "text": "x",
                                                "rawText": "x",
                                                "flags": 96,
                                                "start": 277,
                                                "end": 278
                                            },
                                            "flags": 32,
                                            "start": 273,
                                            "end": 278
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "start": 262,
                                    "end": 278
                                },
                                "flags": 268435488,
                                "start": 249,
                                "end": 279
                            },
                            "flags": 16,
                            "start": 249,
                            "end": 280
                        },
                        {
                            "kind": 120,
                            "expression": {
                                "kind": 131,
                                "expression": {
                                    "kind": 134299649,
                                    "text": "f",
                                    "rawText": "f",
                                    "flags": 96,
                                    "start": 280,
                                    "end": 302
                                },
                                "argumentList": {
                                    "kind": 256,
                                    "elements": [
                                        {
                                            "kind": 201392130,
                                            "text": 42,
                                            "rawText": "42",
                                            "flags": 96,
                                            "start": 303,
                                            "end": 305
                                        },
                                        {
                                            "kind": 223,
                                            "ellipsisToken": {
                                                "kind": 524302,
                                                "flags": 64,
                                                "start": 306,
                                                "end": 310
                                            },
                                            "argument": {
                                                "kind": 134299649,
                                                "text": "x",
                                                "rawText": "x",
                                                "flags": 96,
                                                "start": 310,
                                                "end": 311
                                            },
                                            "flags": 32,
                                            "start": 306,
                                            "end": 311
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "start": 303,
                                    "end": 311
                                },
                                "flags": 268435488,
                                "start": 280,
                                "end": 312
                            },
                            "flags": 16,
                            "start": 280,
                            "end": 313
                        },
                        {
                            "kind": 120,
                            "expression": {
                                "kind": 131,
                                "expression": {
                                    "kind": 134299649,
                                    "text": "f",
                                    "rawText": "f",
                                    "flags": 96,
                                    "start": 313,
                                    "end": 317
                                },
                                "argumentList": {
                                    "kind": 256,
                                    "elements": [
                                        {
                                            "kind": 201392130,
                                            "text": 42,
                                            "rawText": "42",
                                            "flags": 96,
                                            "start": 318,
                                            "end": 320
                                        },
                                        {
                                            "kind": 223,
                                            "ellipsisToken": {
                                                "kind": 524302,
                                                "flags": 64,
                                                "start": 321,
                                                "end": 325
                                            },
                                            "argument": {
                                                "kind": 134299649,
                                                "text": "x",
                                                "rawText": "x",
                                                "flags": 96,
                                                "start": 325,
                                                "end": 326
                                            },
                                            "flags": 32,
                                            "start": 321,
                                            "end": 326
                                        },
                                        {
                                            "kind": 223,
                                            "ellipsisToken": {
                                                "kind": 524302,
                                                "flags": 64,
                                                "start": 327,
                                                "end": 331
                                            },
                                            "argument": {
                                                "kind": 134299649,
                                                "text": "x",
                                                "rawText": "x",
                                                "flags": 96,
                                                "start": 331,
                                                "end": 332
                                            },
                                            "flags": 32,
                                            "start": 327,
                                            "end": 332
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "start": 318,
                                    "end": 332
                                },
                                "flags": 268435488,
                                "start": 313,
                                "end": 333
                            },
                            "flags": 16,
                            "start": 313,
                            "end": 334
                        }
                    ],
                    "flags": 33,
                    "start": 221,
                    "end": 334
                },
                "flags": 32,
                "start": 219,
                "end": 336
            },
            "typeParameters": {
                "kind": 265,
                "typeParameters": [
                    {
                        "kind": 146,
                        "name": {
                            "kind": 134299649,
                            "text": "A",
                            "rawText": "A",
                            "flags": 96,
                            "start": 169,
                            "end": 170
                        },
                        "type": {
                            "kind": 139,
                            "type": {
                                "kind": 144,
                                "id": {
                                    "kind": 134299649,
                                    "text": "Array",
                                    "rawText": "Array",
                                    "flags": 96,
                                    "start": 171,
                                    "end": 177
                                },
                                "typeParameters": {
                                    "kind": 266,
                                    "parameters": [
                                        {
                                            "kind": 267,
                                            "type": {
                                                "kind": 134234345,
                                                "flags": 64,
                                                "start": 178,
                                                "end": 184
                                            },
                                            "flags": 0,
                                            "start": 178,
                                            "end": 184
                                        }
                                    ],
                                    "flags": 0,
                                    "start": 177,
                                    "end": 185
                                },
                                "flags": 0,
                                "start": 171,
                                "end": 185
                            },
                            "flags": 0,
                            "start": 170,
                            "end": 185
                        },
                        "defaultType": null,
                        "flags": 0,
                        "start": 169,
                        "end": 185
                    }
                ],
                "flags": 0,
                "start": 168,
                "end": 186
            },
            "returnType": null,
            "flags": 16,
            "start": 156,
            "end": 336
        }
    ],
    "isModule": false,
    "source": "function w<A: [number, number]>(x: A, f: (number, ...A) => void) {\n  f(...x); // nope\n  f(42, 42, 42); // nope\n  f(42, ...x);\n  f(42, ...x, ...x); // nope\n}\nfunction w2<A: Array<number>>(x: A, f: (number, ...A) => void) {\n  f(...x);\n  f(42, 42, 42); // nope\n  f(42, 42, 42, ...x); // should be nope\n  f(42, ...x);\n  f(42, ...x, ...x);\n}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 336
}
```

### Printed

```javascript

function w(x, f) {
  f(...x); // nope

  f(42, 42, 42); // nope

  f(42, ...x);
  f(42, ...x, ...x); // nope

}
function w2(x, f) {
  f(...x);
  f(42, 42, 42); // nope

  f(42, 42, 42, ...x); // should be nope

  f(42, ...x);
  f(42, ...x, ...x);
}
```

### Diagnostics

```javascript
✔ No errors
```
