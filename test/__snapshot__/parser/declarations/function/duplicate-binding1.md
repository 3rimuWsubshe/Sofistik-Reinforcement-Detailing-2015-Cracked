# Kataw parser test case

## Input

`````js
function f() { { function x() {} { var x } }}
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
                "flags": 0,
                "start": 0,
                "end": 8
            },
            "generatorToken": null,
            "name": {
                "kind": 134299649,
                "text": "f",
                "rawText": "f",
                "flags": 96,
                "start": 8,
                "end": 10
            },
            "formalParameters": {
                "kind": 214,
                "formalParameterList": [],
                "trailingComma": false,
                "flags": 32,
                "start": 10,
                "end": 12
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [
                        {
                            "kind": 124,
                            "block": {
                                "kind": 249,
                                "statements": [
                                    {
                                        "kind": 176,
                                        "declareKeyword": null,
                                        "asyncKeyword": null,
                                        "functionKeyword": {
                                            "kind": 37822554,
                                            "flags": 0,
                                            "start": 16,
                                            "end": 25
                                        },
                                        "generatorToken": null,
                                        "name": {
                                            "kind": 134299649,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 96,
                                            "start": 25,
                                            "end": 27
                                        },
                                        "formalParameters": {
                                            "kind": 214,
                                            "formalParameterList": [],
                                            "trailingComma": false,
                                            "flags": 32,
                                            "start": 27,
                                            "end": 29
                                        },
                                        "contents": {
                                            "kind": 216,
                                            "functionStatementList": {
                                                "kind": 217,
                                                "directives": [],
                                                "statements": [],
                                                "flags": 32,
                                                "start": 31,
                                                "end": 31
                                            },
                                            "flags": 32,
                                            "start": 29,
                                            "end": 32
                                        },
                                        "typeParameters": null,
                                        "returnType": null,
                                        "flags": 16,
                                        "start": 16,
                                        "end": 32
                                    },
                                    {
                                        "kind": 124,
                                        "block": {
                                            "kind": 249,
                                            "statements": [
                                                {
                                                    "kind": 155,
                                                    "declareKeyword": null,
                                                    "varKeyword": {
                                                        "kind": 37757002,
                                                        "flags": 0,
                                                        "start": 34,
                                                        "end": 38
                                                    },
                                                    "declarationList": {
                                                        "kind": 156,
                                                        "declarations": [
                                                            {
                                                                "kind": 157,
                                                                "binding": {
                                                                    "kind": 134299649,
                                                                    "text": "x",
                                                                    "rawText": "x",
                                                                    "flags": 96,
                                                                    "start": 38,
                                                                    "end": 40
                                                                },
                                                                "optionalToken": null,
                                                                "type": null,
                                                                "initializer": null,
                                                                "flags": 16,
                                                                "start": 38,
                                                                "end": 40
                                                            }
                                                        ],
                                                        "flags": 16,
                                                        "start": 38,
                                                        "end": 40
                                                    },
                                                    "flags": 16,
                                                    "start": 34,
                                                    "end": 40
                                                }
                                            ],
                                            "flags": 16,
                                            "start": 34,
                                            "end": 40
                                        },
                                        "flags": 16,
                                        "start": 32,
                                        "end": 42
                                    }
                                ],
                                "flags": 16,
                                "start": 16,
                                "end": 42
                            },
                            "flags": 16,
                            "start": 14,
                            "end": 44
                        }
                    ],
                    "flags": 32,
                    "start": 14,
                    "end": 44
                },
                "flags": 32,
                "start": 12,
                "end": 45
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 16,
            "start": 0,
            "end": 45
        }
    ],
    "isModule": false,
    "source": "function f() { { function x() {} { var x } }}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 45
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Cannot redeclare block-scoped variable - start: 38, end: 40

```
