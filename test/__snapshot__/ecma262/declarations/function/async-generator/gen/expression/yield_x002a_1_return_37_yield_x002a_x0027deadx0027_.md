# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-14
- From: kataw/test/__snapshot__/parser/declarations/function/async-generator/autogen.md
- Path: kataw/test/__snapshot__/parser/declarations/function/async-generator/gen/expression
> :: test: expression
> :: case: yield * 1; return 37; yield * 'dead';
## Options

`````js
{}
`````
## Input

`````js
({ async * gen () {yield * 1; return 37; yield * 'dead';} })
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
                                "kind": 351,
                                "asyncKeyword": {
                                    "kind": 82031,
                                    "flags": 352,
                                    "start": 2,
                                    "end": 8
                                },
                                "asteriskToken": {
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
                                    "formalParameterList": {
                                        "kind": 214,
                                        "formalParameters": [],
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
                                                            "kind": 201392130,
                                                            "text": 1,
                                                            "rawText": "1",
                                                            "flags": 96,
                                                            "start": 26,
                                                            "end": 28
                                                        },
                                                        "flags": 32,
                                                        "start": 19,
                                                        "end": 28
                                                    },
                                                    "flags": 16,
                                                    "start": 19,
                                                    "end": 29
                                                },
                                                {
                                                    "kind": 161,
                                                    "returnKeyword": {
                                                        "kind": 37757022,
                                                        "flags": 80,
                                                        "start": 29,
                                                        "end": 36
                                                    },
                                                    "expression": {
                                                        "kind": 201392130,
                                                        "text": 37,
                                                        "rawText": "37",
                                                        "flags": 96,
                                                        "start": 36,
                                                        "end": 39
                                                    },
                                                    "flags": 80,
                                                    "start": 29,
                                                    "end": 40
                                                },
                                                {
                                                    "kind": 120,
                                                    "expression": {
                                                        "kind": 229,
                                                        "yieldKeyword": {
                                                            "kind": 8454253,
                                                            "flags": 64,
                                                            "start": 40,
                                                            "end": 46
                                                        },
                                                        "delegate": true,
                                                        "asteriskToken": {
                                                            "kind": 67143222,
                                                            "flags": 64,
                                                            "start": 46,
                                                            "end": 48
                                                        },
                                                        "expression": {
                                                            "kind": 201392131,
                                                            "text": "dead",
                                                            "rawText": "'dead'",
                                                            "flags": 4194400,
                                                            "start": 48,
                                                            "end": 55
                                                        },
                                                        "flags": 32,
                                                        "start": 40,
                                                        "end": 55
                                                    },
                                                    "flags": 16,
                                                    "start": 40,
                                                    "end": 56
                                                }
                                            ],
                                            "flags": 32,
                                            "start": 19,
                                            "end": 56
                                        },
                                        "flags": 32,
                                        "start": 17,
                                        "end": 57
                                    },
                                    "flags": 416,
                                    "start": 14,
                                    "end": 57
                                },
                                "flags": 32,
                                "start": 2,
                                "end": 57
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "start": 2,
                        "end": 57
                    },
                    "flags": 48,
                    "start": 1,
                    "end": 59
                },
                "flags": 32,
                "start": 0,
                "end": 60
            },
            "flags": 16,
            "start": 0,
            "end": 60
        }
    ],
    "isModule": false,
    "source": "({ async * gen () {yield * 1; return 37; yield * 'dead';} })",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 60
}
```

### Printed

```javascript

({ async * gen() { yield* 1; return 37; yield* '\'dead\''; } });

```

### Diagnostics

```javascript
✔ No errors
```
