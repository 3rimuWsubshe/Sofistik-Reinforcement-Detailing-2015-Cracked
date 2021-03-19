# Auto-generated test cases ( Kataw )
- Regenerated: 2021-03-17
- From: kataw/test/__snapshot__/compiler/js/expressions/yield/autogen.md
- Path: kataw/test/__snapshot__/compiler/js/expressions/yield/gen/function_declaration
> :: test: function declaration
> :: case: async function a(){     async ([y] = [{m: 5 + t(await bar)}]) => {}     }
## Input

`````js
function not_gen() { async function a(){     async ([y] = [{m: 5 + t(await bar)}]) => {}     } }}
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "function not_gen() { async function a(){     async ([y] = [{m: 5 + t(await bar)}]) => {}     } }}",
    "filename": "",
    "statements": [
        {
            "kind": 264284,
            "name": {
                "kind": 131102,
                "text": "not_gen",
                "rawText": "not_gen",
                "flags": 0,
                "symbol": null,
                "transformFlags": 1025,
                "start": 8,
                "end": 16
            },
            "formalParameters": {
                "kind": 90,
                "formalParameterList": [],
                "trailingComma": false,
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 17,
                "end": 18
            },
            "type": null,
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
                                "start": 35,
                                "end": 37
                            },
                            "formalParameters": {
                                "kind": 90,
                                "formalParameterList": [],
                                "trailingComma": false,
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 38,
                                "end": 39
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
                                                                                "start": 53,
                                                                                "end": 54
                                                                            }
                                                                        ],
                                                                        "trailingComma": false,
                                                                        "multiline": false,
                                                                        "flags": 0,
                                                                        "symbol": null,
                                                                        "transformFlags": 0,
                                                                        "start": 53,
                                                                        "end": 54
                                                                    },
                                                                    "flags": 0,
                                                                    "symbol": null,
                                                                    "transformFlags": 0,
                                                                    "start": 52,
                                                                    "end": 55
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
                                                                                                "start": 60,
                                                                                                "end": 61
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
                                                                                                    "start": 62,
                                                                                                    "end": 64
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
                                                                                                        "start": 66,
                                                                                                        "end": 68
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
                                                                                                                    "start": 74,
                                                                                                                    "end": 78
                                                                                                                },
                                                                                                                "flags": 0,
                                                                                                                "symbol": null,
                                                                                                                "transformFlags": 32780,
                                                                                                                "start": 69,
                                                                                                                "end": 78
                                                                                                            }
                                                                                                        ],
                                                                                                        "trailingComma": false,
                                                                                                        "transformFlags": 0,
                                                                                                        "flags": 0,
                                                                                                        "symbol": null,
                                                                                                        "start": 74,
                                                                                                        "end": 79
                                                                                                    },
                                                                                                    "flags": 0,
                                                                                                    "symbol": null,
                                                                                                    "transformFlags": 0,
                                                                                                    "start": 68,
                                                                                                    "end": 79
                                                                                                },
                                                                                                "flags": 0,
                                                                                                "symbol": null,
                                                                                                "transformFlags": 0,
                                                                                                "start": 62,
                                                                                                "end": 79
                                                                                            },
                                                                                            "accessModifier": null,
                                                                                            "decorators": null,
                                                                                            "flags": 0,
                                                                                            "symbol": null,
                                                                                            "transformFlags": 0,
                                                                                            "start": 60,
                                                                                            "end": 79
                                                                                        }
                                                                                    ],
                                                                                    "trailingComma": false,
                                                                                    "multiline": false,
                                                                                    "flags": 0,
                                                                                    "symbol": null,
                                                                                    "transformFlags": 0,
                                                                                    "start": 60,
                                                                                    "end": 79
                                                                                },
                                                                                "flags": 0,
                                                                                "symbol": null,
                                                                                "transformFlags": 0,
                                                                                "start": 59,
                                                                                "end": 80
                                                                            }
                                                                        ],
                                                                        "trailingComma": false,
                                                                        "multiline": false,
                                                                        "flags": 0,
                                                                        "symbol": null,
                                                                        "transformFlags": 0,
                                                                        "start": 59,
                                                                        "end": 80
                                                                    },
                                                                    "flags": 0,
                                                                    "symbol": null,
                                                                    "transformFlags": 0,
                                                                    "start": 57,
                                                                    "end": 81
                                                                },
                                                                "flags": 0,
                                                                "symbol": null,
                                                                "transformFlags": 0,
                                                                "start": 52,
                                                                "end": 81
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
                                                            "start": 52,
                                                            "end": 82
                                                        }
                                                    ],
                                                    "type": null,
                                                    "accessModifier": null,
                                                    "trailingComma": false,
                                                    "flags": 0,
                                                    "symbol": null,
                                                    "transformFlags": 0,
                                                    "start": 53,
                                                    "end": 82
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
                                                        "start": 87,
                                                        "end": 87
                                                    },
                                                    "flags": 0,
                                                    "symbol": null,
                                                    "transformFlags": 0,
                                                    "start": 85,
                                                    "end": 88
                                                },
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 40,
                                                "end": 88
                                            },
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 40,
                                            "end": 88
                                        }
                                    ],
                                    "multiline": false,
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 40,
                                    "end": 88
                                },
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 39,
                                "end": 94
                            },
                            "typeParameters": null,
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 260,
                            "start": 20,
                            "end": 94
                        }
                    ],
                    "multiline": false,
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 20,
                    "end": 94
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 18,
                "end": 96
            },
            "typeParameters": null,
            "flags": 0,
            "symbol": null,
            "transformFlags": 256,
            "start": 0,
            "end": 96
        }
    ],
    "isModule": false,
    "printable": true,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "message": "Declaration or statement expected",
            "start": 96,
            "length": 0
        }
    ],
    "original": null,
    "symbol": null,
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 97
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```
