# Kataw parser test case

## Input

`````js
function *g() { function f(x = x + yield y) {}; }
`````

## Output

### Hybrid CST

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
                "flags": 0,
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
                            "kind": 176,
                            "declareKeyword": null,
                            "asyncKeyword": null,
                            "functionKeyword": {
                                "kind": 37822554,
                                "flags": 0,
                                "start": 15,
                                "end": 24
                            },
                            "generatorToken": null,
                            "name": {
                                "kind": 134299649,
                                "text": "f",
                                "rawText": "f",
                                "flags": 96,
                                "start": 24,
                                "end": 26
                            },
                            "formalParameters": {
                                "kind": 214,
                                "formalParameterList": [
                                    {
                                        "kind": 215,
                                        "ellipsisToken": null,
                                        "binding": {
                                            "kind": 134299649,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 96,
                                            "start": 27,
                                            "end": 28
                                        },
                                        "optionalToken": null,
                                        "type": null,
                                        "initializer": {
                                            "kind": 198,
                                            "left": {
                                                "kind": 134299649,
                                                "text": "x",
                                                "rawText": "x",
                                                "flags": 96,
                                                "start": 30,
                                                "end": 32
                                            },
                                            "operatorToken": {
                                                "kind": 34098,
                                                "flags": 64,
                                                "start": 32,
                                                "end": 34
                                            },
                                            "right": {
                                                "kind": 134299649,
                                                "text": "yield",
                                                "rawText": "yield",
                                                "flags": 96,
                                                "start": 34,
                                                "end": 40
                                            },
                                            "flags": 32,
                                            "start": 30,
                                            "end": 40
                                        },
                                        "flags": 34,
                                        "start": 27,
                                        "end": 40
                                    },
                                    {
                                        "kind": 215,
                                        "ellipsisToken": null,
                                        "binding": {
                                            "kind": 134299649,
                                            "text": "y",
                                            "rawText": "y",
                                            "flags": 96,
                                            "start": 40,
                                            "end": 42
                                        },
                                        "optionalToken": null,
                                        "type": null,
                                        "initializer": null,
                                        "flags": 32,
                                        "start": 40,
                                        "end": 42
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 34,
                                "start": 26,
                                "end": 43
                            },
                            "contents": {
                                "kind": 216,
                                "functionStatementList": {
                                    "kind": 217,
                                    "directives": [],
                                    "statements": [],
                                    "flags": 32,
                                    "start": 45,
                                    "end": 45
                                },
                                "flags": 32,
                                "start": 43,
                                "end": 46
                            },
                            "typeParameters": null,
                            "returnType": null,
                            "flags": 16,
                            "start": 15,
                            "end": 46
                        },
                        {
                            "kind": 168,
                            "flags": 16,
                            "start": 46,
                            "end": 47
                        }
                    ],
                    "flags": 32,
                    "start": 15,
                    "end": 47
                },
                "flags": 32,
                "start": 13,
                "end": 49
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 272,
            "start": 0,
            "end": 49
        }
    ],
    "isModule": false,
    "source": "function *g() { function f(x = x + yield y) {}; }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 49
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ ',' expected - start: 40, end: 42

```
