# Kataw parser test case

## Input

`````js
function *g() { async (x = y = yield z) => {}; }
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
            "generatorToken": {
                "kind": 67143222,
                "flags": 64,
                "start": 8,
                "end": 10
            },
            "name": {
                "kind": 134299649,
                "text": "g",
                "rawText": "g",
                "flags": 96,
                "start": 10,
                "end": 11
            },
            "formalParameters": {
                "kind": 214,
                "formalParameterList": [],
                "trailingComma": false,
                "flags": 32,
                "start": 11,
                "end": 13
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [
                        {
                            "kind": 271,
                            "arrowToken": {
                                "kind": 10,
                                "flags": 64,
                                "start": 39,
                                "end": 42
                            },
                            "typeParameters": null,
                            "parameters": [
                                {
                                    "kind": 281,
                                    "ellipsisToken": null,
                                    "left": {
                                        "kind": 134299649,
                                        "text": "x",
                                        "rawText": "x",
                                        "flags": 96,
                                        "start": 23,
                                        "end": 24
                                    },
                                    "optionalToken": null,
                                    "type": null,
                                    "right": {
                                        "kind": 125,
                                        "left": {
                                            "kind": 134299649,
                                            "text": "y",
                                            "rawText": "y",
                                            "flags": 96,
                                            "start": 26,
                                            "end": 28
                                        },
                                        "operatorToken": {
                                            "kind": 4125,
                                            "flags": 64,
                                            "start": 28,
                                            "end": 30
                                        },
                                        "right": {
                                            "kind": 229,
                                            "yieldKeyword": {
                                                "kind": 8454253,
                                                "flags": 64,
                                                "start": 30,
                                                "end": 36
                                            },
                                            "delegate": false,
                                            "asteriskToken": null,
                                            "expression": {
                                                "kind": 134299649,
                                                "text": "z",
                                                "rawText": "z",
                                                "flags": 96,
                                                "start": 36,
                                                "end": 38
                                            },
                                            "flags": 32,
                                            "start": 30,
                                            "end": 38
                                        },
                                        "flags": 32,
                                        "start": 26,
                                        "end": 38
                                    },
                                    "flags": 32,
                                    "start": 23,
                                    "end": 38
                                }
                            ],
                            "asyncKeyword": {
                                "kind": 82031,
                                "flags": 64,
                                "start": 15,
                                "end": 21
                            },
                            "returnType": null,
                            "contents": {
                                "kind": 216,
                                "functionStatementList": {
                                    "kind": 217,
                                    "directives": [],
                                    "statements": [],
                                    "flags": 32,
                                    "start": 44,
                                    "end": 44
                                },
                                "flags": 32,
                                "start": 42,
                                "end": 45
                            },
                            "flags": 290,
                            "start": 15,
                            "end": 45
                        },
                        {
                            "kind": 168,
                            "flags": 16,
                            "start": 45,
                            "end": 46
                        }
                    ],
                    "flags": 32,
                    "start": 15,
                    "end": 46
                },
                "flags": 32,
                "start": 13,
                "end": 48
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 272,
            "start": 0,
            "end": 48
        }
    ],
    "isModule": false,
    "source": "function *g() { async (x = y = yield z) => {}; }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 48
}
```

### Printed

```javascript

function * g() {
  async (x = y = yield z) =>  {}

}
```

### Diagnostics

```javascript
✔ No errors
```
