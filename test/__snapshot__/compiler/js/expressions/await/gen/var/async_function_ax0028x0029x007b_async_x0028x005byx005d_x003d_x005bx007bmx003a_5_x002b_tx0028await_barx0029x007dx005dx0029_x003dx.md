# Auto-generated test cases ( Kataw )
- Regenerated: 2021-03-17
- From: kataw/test/__snapshot__/compiler/js/expressions/await/autogen.md
- Path: kataw/test/__snapshot__/compiler/js/expressions/await/gen/var
> :: test: var
> :: case: async function a(){     async ([y] = [{m: 5 + t(await bar)}]) => {}     }
## Input

`````js
var await; var f = (async function() { async function a(){     async ([y] = [{m: 5 + t(await bar)}]) => {}     } });
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "var await; var f = (async function() { async function a(){     async ([y] = [{m: 5 + t(await bar)}]) => {}     } });",
    "filename": "",
    "statements": [
        {
            "kind": 2097397,
            "declarationList": {
                "kind": 244,
                "declarations": [
                    {
                        "kind": 16627,
                        "binding": {
                            "kind": 131102,
                            "text": "await",
                            "rawText": "await",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 1025,
                            "start": 3,
                            "end": 9
                        },
                        "exclamation": false,
                        "type": null,
                        "initializer": null,
                        "flags": 3,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 0,
                        "end": 9
                    }
                ],
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 3,
                "end": 9
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 0,
            "end": 10
        },
        {
            "kind": 2097397,
            "declarationList": {
                "kind": 244,
                "declarations": [
                    {
                        "kind": 16627,
                        "binding": {
                            "kind": 131102,
                            "text": "f",
                            "rawText": "f",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 1025,
                            "start": 14,
                            "end": 16
                        },
                        "exclamation": false,
                        "type": null,
                        "initializer": {
                            "kind": 66224,
                            "expression": {
                                "kind": 9439250,
                                "name": null,
                                "formalParameters": {
                                    "kind": 90,
                                    "formalParameterList": [],
                                    "trailingComma": false,
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 35,
                                    "end": 36
                                },
                                "contents": {
                                    "kind": 91,
                                    "functionStatementList": {
                                        "kind": 94,
                                        "statements": [
                                            {
                                                "kind": 1312785,
                                                "name": {
                                                    "kind": 131102,
                                                    "text": "a",
                                                    "rawText": "a",
                                                    "flags": 0,
                                                    "symbol": null,
                                                    "transformFlags": 1025,
                                                    "start": 53,
                                                    "end": 55
                                                },
                                                "formalParameters": {
                                                    "kind": 90,
                                                    "formalParameterList": [],
                                                    "trailingComma": false,
                                                    "flags": 0,
                                                    "symbol": null,
                                                    "transformFlags": 0,
                                                    "start": 56,
                                                    "end": 57
                                                },
                                                "type": null,
                                                "contents": {
                                                    "kind": 91,
                                                    "functionStatementList": {
                                                        "kind": 94,
                                                        "statements": [
                                                            {
                                                                "kind": 2097233,
                                                                "expression": {
                                                                    "kind": 81936,
                                                                    "typeParameters": null,
                                                                    "parameters": {
                                                                        "kind": 81929,
                                                                        "elements": [
                                                                            {
                                                                                "kind": 16473,
                                                                                "ellipsis": false,
                                                                                "binding": {
                                                                                    "kind": 16412,
                                                                                    "left": {
                                                                                        "kind": 33554437,
                                                                                        "elementList": {
                                                                                            "kind": 29,
                                                                                            "elements": [
                                                                                                {
                                                                                                    "kind": 4325406,
                                                                                                    "text": "y",
                                                                                                    "rawText": "y",
                                                                                                    "flags": 0,
                                                                                                    "symbol": null,
                                                                                                    "transformFlags": 0,
                                                                                                    "start": 71,
                                                                                                    "end": 72
                                                                                                }
                                                                                            ],
                                                                                            "trailingComma": false,
                                                                                            "multiline": false,
                                                                                            "flags": 0,
                                                                                            "symbol": null,
                                                                                            "transformFlags": 0,
                                                                                            "start": 71,
                                                                                            "end": 72
                                                                                        },
                                                                                        "flags": 0,
                                                                                        "symbol": null,
                                                                                        "transformFlags": 0,
                                                                                        "start": 70,
                                                                                        "end": 73
                                                                                    },
                                                                                    "right": {
                                                                                        "kind": 98822,
                                                                                        "elementList": {
                                                                                            "kind": 65605,
                                                                                            "elements": [
                                                                                                {
                                                                                                    "kind": 98984,
                                                                                                    "propertyList": {
                                                                                                        "kind": 65722,
                                                                                                        "properties": [
                                                                                                            {
                                                                                                                "kind": 65721,
                                                                                                                "left": {
                                                                                                                    "kind": 196711,
                                                                                                                    "text": "m",
                                                                                                                    "rawText": "m",
                                                                                                                    "flags": 0,
                                                                                                                    "symbol": null,
                                                                                                                    "transformFlags": 0,
                                                                                                                    "start": 78,
                                                                                                                    "end": 79
                                                                                                                },
                                                                                                                "right": {
                                                                                                                    "kind": 65563,
                                                                                                                    "left": {
                                                                                                                        "kind": 4261540,
                                                                                                                        "text": 5,
                                                                                                                        "rawText": "5",
                                                                                                                        "flags": 0,
                                                                                                                        "symbol": null,
                                                                                                                        "transformFlags": 0,
                                                                                                                        "start": 80,
                                                                                                                        "end": 82
                                                                                                                    },
                                                                                                                    "operator": "+",
                                                                                                                    "right": {
                                                                                                                        "kind": 1073807915,
                                                                                                                        "expression": {
                                                                                                                            "kind": 196712,
                                                                                                                            "text": "t",
                                                                                                                            "rawText": "t",
                                                                                                                            "flags": 0,
                                                                                                                            "symbol": null,
                                                                                                                            "transformFlags": 0,
                                                                                                                            "start": 84,
                                                                                                                            "end": 86
                                                                                                                        },
                                                                                                                        "typeArguments": null,
                                                                                                                        "argumentList": {
                                                                                                                            "kind": 3,
                                                                                                                            "elements": [
                                                                                                                                {
                                                                                                                                    "kind": 65559,
                                                                                                                                    "expression": {
                                                                                                                                        "kind": 196712,
                                                                                                                                        "text": "bar",
                                                                                                                                        "rawText": "bar",
                                                                                                                                        "flags": 0,
                                                                                                                                        "symbol": null,
                                                                                                                                        "transformFlags": 0,
                                                                                                                                        "start": 92,
                                                                                                                                        "end": 96
                                                                                                                                    },
                                                                                                                                    "flags": 0,
                                                                                                                                    "symbol": null,
                                                                                                                                    "transformFlags": 32780,
                                                                                                                                    "start": 87,
                                                                                                                                    "end": 96
                                                                                                                                }
                                                                                                                            ],
                                                                                                                            "trailingComma": false,
                                                                                                                            "transformFlags": 0,
                                                                                                                            "flags": 0,
                                                                                                                            "symbol": null,
                                                                                                                            "start": 92,
                                                                                                                            "end": 97
                                                                                                                        },
                                                                                                                        "flags": 0,
                                                                                                                        "symbol": null,
                                                                                                                        "transformFlags": 0,
                                                                                                                        "start": 86,
                                                                                                                        "end": 97
                                                                                                                    },
                                                                                                                    "flags": 0,
                                                                                                                    "symbol": null,
                                                                                                                    "transformFlags": 0,
                                                                                                                    "start": 80,
                                                                                                                    "end": 97
                                                                                                                },
                                                                                                                "accessModifier": null,
                                                                                                                "decorators": null,
                                                                                                                "flags": 0,
                                                                                                                "symbol": null,
                                                                                                                "transformFlags": 0,
                                                                                                                "start": 78,
                                                                                                                "end": 97
                                                                                                            }
                                                                                                        ],
                                                                                                        "trailingComma": false,
                                                                                                        "multiline": false,
                                                                                                        "flags": 0,
                                                                                                        "symbol": null,
                                                                                                        "transformFlags": 0,
                                                                                                        "start": 78,
                                                                                                        "end": 97
                                                                                                    },
                                                                                                    "flags": 0,
                                                                                                    "symbol": null,
                                                                                                    "transformFlags": 0,
                                                                                                    "start": 77,
                                                                                                    "end": 98
                                                                                                }
                                                                                            ],
                                                                                            "trailingComma": false,
                                                                                            "multiline": false,
                                                                                            "flags": 0,
                                                                                            "symbol": null,
                                                                                            "transformFlags": 0,
                                                                                            "start": 77,
                                                                                            "end": 98
                                                                                        },
                                                                                        "flags": 0,
                                                                                        "symbol": null,
                                                                                        "transformFlags": 0,
                                                                                        "start": 75,
                                                                                        "end": 99
                                                                                    },
                                                                                    "flags": 0,
                                                                                    "symbol": null,
                                                                                    "transformFlags": 0,
                                                                                    "start": 70,
                                                                                    "end": 99
                                                                                },
                                                                                "isOptional": false,
                                                                                "type": null,
                                                                                "initializer": null,
                                                                                "decorators": null,
                                                                                "accessModifier": null,
                                                                                "isReadOnly": false,
                                                                                "flags": 0,
                                                                                "symbol": null,
                                                                                "transformFlags": 1,
                                                                                "start": 70,
                                                                                "end": 100
                                                                            }
                                                                        ],
                                                                        "type": null,
                                                                        "accessModifier": null,
                                                                        "trailingComma": false,
                                                                        "flags": 0,
                                                                        "symbol": null,
                                                                        "transformFlags": 0,
                                                                        "start": 71,
                                                                        "end": 100
                                                                    },
                                                                    "contents": {
                                                                        "kind": 91,
                                                                        "functionStatementList": {
                                                                            "kind": 94,
                                                                            "statements": [],
                                                                            "multiline": false,
                                                                            "flags": 0,
                                                                            "symbol": null,
                                                                            "transformFlags": 0,
                                                                            "start": 105,
                                                                            "end": 105
                                                                        },
                                                                        "flags": 0,
                                                                        "symbol": null,
                                                                        "transformFlags": 0,
                                                                        "start": 103,
                                                                        "end": 106
                                                                    },
                                                                    "flags": 0,
                                                                    "symbol": null,
                                                                    "transformFlags": 0,
                                                                    "start": 58,
                                                                    "end": 106
                                                                },
                                                                "flags": 0,
                                                                "symbol": null,
                                                                "transformFlags": 0,
                                                                "start": 58,
                                                                "end": 106
                                                            }
                                                        ],
                                                        "multiline": false,
                                                        "flags": 0,
                                                        "symbol": null,
                                                        "transformFlags": 0,
                                                        "start": 58,
                                                        "end": 106
                                                    },
                                                    "flags": 0,
                                                    "symbol": null,
                                                    "transformFlags": 0,
                                                    "start": 57,
                                                    "end": 112
                                                },
                                                "typeParameters": null,
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 260,
                                                "start": 38,
                                                "end": 112
                                            }
                                        ],
                                        "multiline": false,
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 38,
                                        "end": 112
                                    },
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 36,
                                    "end": 114
                                },
                                "typeParameters": null,
                                "type": null,
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 4,
                                "start": 20,
                                "end": 114
                            },
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 18,
                            "end": 115
                        },
                        "flags": 14,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 0,
                        "end": 115
                    }
                ],
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 14,
                "end": 115
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 10,
            "end": 116
        }
    ],
    "isModule": false,
    "printable": true,
    "diagnostics": [],
    "original": null,
    "symbol": null,
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 116
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```
