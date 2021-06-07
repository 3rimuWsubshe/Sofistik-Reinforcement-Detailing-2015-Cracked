# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-06
- From: kataw8/test\__snapshot__/parser/declarations/function/async-generator/autogen.md
- Path: kataw8/test\__snapshot__\parser\declarations\function\async-generator\gen\expression
> :: test: expression
> :: case: yield await /* comment\n */ 10
## Input

`````js
({ async * gen () {yield await /* comment\n */ 10} })
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
                                                        "delegate": false,
                                                        "asteriskToken": null,
                                                        "expression": {
                                                            "kind": 208,
                                                            "awaitKeyword": {
                                                                "kind": 82196,
                                                                "flags": 64,
                                                                "start": 24,
                                                                "end": 30
                                                            },
                                                            "expression": {
                                                                "kind": 201392130,
                                                                "text": 10,
                                                                "rawText": "10",
                                                                "flags": 96,
                                                                "start": 30,
                                                                "end": 49
                                                            },
                                                            "flags": 32,
                                                            "start": 24,
                                                            "end": 49
                                                        },
                                                        "flags": 32,
                                                        "start": 19,
                                                        "end": 49
                                                    },
                                                    "flags": 16,
                                                    "start": 19,
                                                    "end": 49
                                                }
                                            ],
                                            "flags": 32,
                                            "start": 19,
                                            "end": 49
                                        },
                                        "flags": 32,
                                        "start": 17,
                                        "end": 50
                                    },
                                    "flags": 416,
                                    "start": 14,
                                    "end": 50
                                },
                                "flags": 32,
                                "start": 2,
                                "end": 50
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "start": 2,
                        "end": 50
                    },
                    "flags": 48,
                    "start": 1,
                    "end": 52
                },
                "flags": 32,
                "start": 0,
                "end": 53
            },
            "flags": 16,
            "start": 0,
            "end": 53
        }
    ],
    "isModule": false,
    "source": "({ async * gen () {yield await /* comment\\n */ 10} })",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 53
}
```

### Printed

```javascript

({ * async gen() {
    yield await /* comment\n */ 10;
  } });
```

### Diagnostics

```javascript
✔ No errors
```
