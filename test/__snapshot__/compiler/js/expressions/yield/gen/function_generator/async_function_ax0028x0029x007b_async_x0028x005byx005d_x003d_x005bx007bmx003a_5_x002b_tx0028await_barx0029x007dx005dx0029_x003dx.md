# Auto-generated test cases ( Kataw )
- Regenerated: 2021-03-17
- From: kataw/test/__snapshot__/compiler/js/expressions/yield/autogen.md
- Path: kataw/test/__snapshot__/compiler/js/expressions/yield/gen/function_generator
> :: test: function generator
> :: case: async function a(){     async ([y] = [{m: 5 + t(await bar)}]) => {}     }
## Input

`````js
function * gen() { function not_gen() { async function a(){     async ([y] = [{m: 5 + t(await bar)}]) => {}     } }}
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "function * gen() { function not_gen() { async function a(){     async ([y] = [{m: 5 + t(await bar)}]) => {}     } }}",
    "filename": "",
    "statements": [
        {
            "kind": 788576,
            "name": {
                "kind": 131102,
                "text": "gen",
                "rawText": "gen",
                "flags": 0,
                "symbol": null,
                "transformFlags": 1025,
                "start": 10,
                "end": 14
            },
            "formalParameters": {
                "kind": 90,
                "formalParameterList": [],
                "trailingComma": false,
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 15,
                "end": 16
            },
            "type": null,
            "contents": {
                "kind": 91,
                "functionStatementList": {
                    "kind": 94,
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
                                "start": 27,
                                "end": 35
                            },
                            "formalParameters": {
                                "kind": 90,
                                "formalParameterList": [],
                                "trailingComma": false,
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 36,
                                "end": 37
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
                                                "start": 54,
                                                "end": 56
                                            },
                                            "formalParameters": {
                                                "kind": 90,
                                                "formalParameterList": [],
                                                "trailingComma": false,
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 57,
                                                "end": 58
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
                                                                                                "start": 72,
                                                                                                "end": 73
                                                                                            }
                                                                                        ],
                                                                                        "trailingComma": false,
                                                                                        "multiline": false,
                                                                                        "flags": 0,
                                                                                        "symbol": null,
                                                                                        "transformFlags": 0,
                                                                                        "start": 72,
                                                                                        "end": 73
                                                                                    },
                                                                                    "flags": 0,
                                                                                    "symbol": null,
                                                                                    "transformFlags": 0,
                                                                                    "start": 71,
                                                                                    "end": 74
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
                                                                                                                "start": 79,
                                                                                                                "end": 80
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
                                                                                                                    "start": 81,
                                                                                                                    "end": 83
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
                                                                                                                        "start": 85,
                                                                                                                        "end": 87
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
                                                                                                                                    "start": 93,
                                                                                                                                    "end": 97
                                                                                                                                },
                                                                                                                                "flags": 0,
                                                                                                                                "symbol": null,
                                                                                                                                "transformFlags": 32780,
                                                                                                                                "start": 88,
                                                                                                                                "end": 97
                                                                                                                            }
                                                                                                                        ],
                                                                                                                        "trailingComma": false,
                                                                                                                        "transformFlags": 0,
                                                                                                                        "flags": 0,
                                                                                                                        "symbol": null,
                                                                                                                        "start": 93,
                                                                                                                        "end": 98
                                                                                                                    },
                                                                                                                    "flags": 0,
                                                                                                                    "symbol": null,
                                                                                                                    "transformFlags": 0,
                                                                                                                    "start": 87,
                                                                                                                    "end": 98
                                                                                                                },
                                                                                                                "flags": 0,
                                                                                                                "symbol": null,
                                                                                                                "transformFlags": 0,
                                                                                                                "start": 81,
                                                                                                                "end": 98
                                                                                                            },
                                                                                                            "accessModifier": null,
                                                                                                            "decorators": null,
                                                                                                            "flags": 0,
                                                                                                            "symbol": null,
                                                                                                            "transformFlags": 0,
                                                                                                            "start": 79,
                                                                                                            "end": 98
                                                                                                        }
                                                                                                    ],
                                                                                                    "trailingComma": false,
                                                                                                    "multiline": false,
                                                                                                    "flags": 0,
                                                                                                    "symbol": null,
                                                                                                    "transformFlags": 0,
                                                                                                    "start": 79,
                                                                                                    "end": 98
                                                                                                },
                                                                                                "flags": 0,
                                                                                                "symbol": null,
                                                                                                "transformFlags": 0,
                                                                                                "start": 78,
                                                                                                "end": 99
                                                                                            }
                                                                                        ],
                                                                                        "trailingComma": false,
                                                                                        "multiline": false,
                                                                                        "flags": 0,
                                                                                        "symbol": null,
                                                                                        "transformFlags": 0,
                                                                                        "start": 78,
                                                                                        "end": 99
                                                                                    },
                                                                                    "flags": 0,
                                                                                    "symbol": null,
                                                                                    "transformFlags": 0,
                                                                                    "start": 76,
                                                                                    "end": 100
                                                                                },
                                                                                "flags": 0,
                                                                                "symbol": null,
                                                                                "transformFlags": 0,
                                                                                "start": 71,
                                                                                "end": 100
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
                                                                            "start": 71,
                                                                            "end": 101
                                                                        }
                                                                    ],
                                                                    "type": null,
                                                                    "accessModifier": null,
                                                                    "trailingComma": false,
                                                                    "flags": 0,
                                                                    "symbol": null,
                                                                    "transformFlags": 0,
                                                                    "start": 72,
                                                                    "end": 101
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
                                                                        "start": 106,
                                                                        "end": 106
                                                                    },
                                                                    "flags": 0,
                                                                    "symbol": null,
                                                                    "transformFlags": 0,
                                                                    "start": 104,
                                                                    "end": 107
                                                                },
                                                                "flags": 0,
                                                                "symbol": null,
                                                                "transformFlags": 0,
                                                                "start": 59,
                                                                "end": 107
                                                            },
                                                            "flags": 0,
                                                            "symbol": null,
                                                            "transformFlags": 0,
                                                            "start": 59,
                                                            "end": 107
                                                        }
                                                    ],
                                                    "multiline": false,
                                                    "flags": 0,
                                                    "symbol": null,
                                                    "transformFlags": 0,
                                                    "start": 59,
                                                    "end": 107
                                                },
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 58,
                                                "end": 113
                                            },
                                            "typeParameters": null,
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 260,
                                            "start": 39,
                                            "end": 113
                                        }
                                    ],
                                    "multiline": false,
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 39,
                                    "end": 113
                                },
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 37,
                                "end": 115
                            },
                            "typeParameters": null,
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 256,
                            "start": 18,
                            "end": 115
                        }
                    ],
                    "multiline": false,
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 18,
                    "end": 115
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 16,
                "end": 116
            },
            "typeParameters": null,
            "flags": 0,
            "symbol": null,
            "transformFlags": 384,
            "start": 0,
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
