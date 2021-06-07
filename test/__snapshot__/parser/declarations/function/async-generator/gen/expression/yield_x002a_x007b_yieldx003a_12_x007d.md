# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-06
- From: kataw8/test\__snapshot__/parser/declarations/function/async-generator/autogen.md
- Path: kataw8/test\__snapshot__\parser\declarations\function\async-generator\gen\expression
> :: test: expression
> :: case: yield *
>          { yield: 12 }
## Input

`````js
({ async * gen () {yield *
{ yield: 12 }} })
`````
## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 220,
                    "propertyList": {
                        "kind": 218,
                        "properties": [
                            {
                                "kind": 257,
                                "asyncKeyword": {
                                    "kind": 82031,
                                    "flags": 64,
                                    "start": 2,
                                    "end": 8
                                },
                                "generatorToken": {
                                    "kind": 67143222,
                                    "flags": 64,
                                    "start": 8,
                                    "end": 10
                                },
                                "getKeyword": null,
                                "setKeyword": null,
                                "method": {
                                    "kind": 209,
                                    "name": {
                                        "kind": 134299649,
                                        "text": "gen",
                                        "rawText": "gen",
                                        "flags": 96,
                                        "start": 10,
                                        "end": 14
                                    },
                                    "typeParameters": null,
                                    "formalParameters": {
                                        "kind": 214,
                                        "formalParameterList": [],
                                        "trailingComma": false,
                                        "flags": 416,
                                        "start": 16,
                                        "end": 17
                                    },
                                    "returnType": null,
                                    "contents": {
                                        "kind": 216,
                                        "functionStatementList": {
                                            "kind": 217,
                                            "directives": [],
                                            "statements": [
                                                {
                                                    "kind": 120,
                                                    "expression": {
                                                        "kind": 229,
                                                        "yieldKeyword": {
                                                            "kind": 8454253,
                                                            "flags": 64,
                                                            "start": 19,
                                                            "end": 24
                                                        },
                                                        "delegate": true,
                                                        "asteriskToken": {
                                                            "kind": 67143222,
                                                            "flags": 64,
                                                            "start": 24,
                                                            "end": 26
                                                        },
                                                        "expression": {
                                                            "kind": 220,
                                                            "propertyList": {
                                                                "kind": 218,
                                                                "properties": [
                                                                    {
                                                                        "kind": 219,
                                                                        "generatorToken": null,
                                                                        "left": {
                                                                            "kind": 134299649,
                                                                            "text": "yield",
                                                                            "rawText": "yield",
                                                                            "flags": 96,
                                                                            "start": 28,
                                                                            "end": 34
                                                                        },
                                                                        "right": {
                                                                            "kind": 201392130,
                                                                            "text": 12,
                                                                            "rawText": "12",
                                                                            "flags": 96,
                                                                            "start": 35,
                                                                            "end": 38
                                                                        },
                                                                        "flags": 32,
                                                                        "start": 28,
                                                                        "end": 38
                                                                    }
                                                                ],
                                                                "trailingComma": false,
                                                                "flags": 16,
                                                                "start": 28,
                                                                "end": 38
                                                            },
                                                            "flags": 48,
                                                            "start": 26,
                                                            "end": 40
                                                        },
                                                        "flags": 32,
                                                        "start": 19,
                                                        "end": 40
                                                    },
                                                    "flags": 16,
                                                    "start": 19,
                                                    "end": 40
                                                }
                                            ],
                                            "flags": 32,
                                            "start": 19,
                                            "end": 40
                                        },
                                        "flags": 32,
                                        "start": 17,
                                        "end": 41
                                    },
                                    "flags": 416,
                                    "start": 14,
                                    "end": 41
                                },
                                "flags": 32,
                                "start": 2,
                                "end": 41
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "start": 2,
                        "end": 41
                    },
                    "flags": 48,
                    "start": 1,
                    "end": 43
                },
                "flags": 32,
                "start": 0,
                "end": 44
            },
            "flags": 16,
            "start": 0,
            "end": 44
        }
    ],
    "isModule": false,
    "source": "({ async * gen () {yield *\n{ yield: 12 }} })",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 44
}
```

### Printed

```javascript

({ * async gen() {
    yield * { yield: 12 };
  } });
```

### Diagnostics

```javascript
✔ No errors
```
