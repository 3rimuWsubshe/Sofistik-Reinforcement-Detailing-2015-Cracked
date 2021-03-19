# Auto-generated test cases ( Kataw )
- Regenerated: 2021-03-17
- From: kataw/test/__snapshot__/compiler/js/expressions/yield/autogen.md
- Path: kataw/test/__snapshot__/compiler/js/expressions/yield/gen/with_strict_dirctive
> :: test: with_strict_dirctive
> :: case: async function a(){     async ([y] = [{m: 5 + t(await bar)}]) => {}     }
## Input

`````js
'use strict'; async function a(){     async ([y] = [{m: 5 + t(await bar)}]) => {}     }
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "'use strict'; async function a(){     async ([y] = [{m: 5 + t(await bar)}]) => {}     }",
    "filename": "",
    "statements": [
        {
            "kind": 2097233,
            "expression": {
                "kind": 4261583,
                "text": "use strict",
                "rawText": "use strict",
                "flags": 33554432,
                "symbol": null,
                "transformFlags": 0,
                "start": 0,
                "end": 12
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 0,
            "end": 13
        },
        {
            "kind": 1312785,
            "name": {
                "kind": 131102,
                "text": "a",
                "rawText": "a",
                "flags": 0,
                "symbol": null,
                "transformFlags": 1025,
                "start": 28,
                "end": 30
            },
            "formalParameters": {
                "kind": 90,
                "formalParameterList": [],
                "trailingComma": false,
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 31,
                "end": 32
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
                                                                "start": 46,
                                                                "end": 47
                                                            }
                                                        ],
                                                        "trailingComma": false,
                                                        "multiline": false,
                                                        "flags": 0,
                                                        "symbol": null,
                                                        "transformFlags": 0,
                                                        "start": 46,
                                                        "end": 47
                                                    },
                                                    "flags": 0,
                                                    "symbol": null,
                                                    "transformFlags": 0,
                                                    "start": 45,
                                                    "end": 48
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
                                                                                "start": 53,
                                                                                "end": 54
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
                                                                                    "start": 55,
                                                                                    "end": 57
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
                                                                                        "start": 59,
                                                                                        "end": 61
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
                                                                                                    "start": 67,
                                                                                                    "end": 71
                                                                                                },
                                                                                                "flags": 0,
                                                                                                "symbol": null,
                                                                                                "transformFlags": 32780,
                                                                                                "start": 62,
                                                                                                "end": 71
                                                                                            }
                                                                                        ],
                                                                                        "trailingComma": false,
                                                                                        "transformFlags": 0,
                                                                                        "flags": 0,
                                                                                        "symbol": null,
                                                                                        "start": 67,
                                                                                        "end": 72
                                                                                    },
                                                                                    "flags": 0,
                                                                                    "symbol": null,
                                                                                    "transformFlags": 0,
                                                                                    "start": 61,
                                                                                    "end": 72
                                                                                },
                                                                                "flags": 0,
                                                                                "symbol": null,
                                                                                "transformFlags": 0,
                                                                                "start": 55,
                                                                                "end": 72
                                                                            },
                                                                            "accessModifier": null,
                                                                            "decorators": null,
                                                                            "flags": 0,
                                                                            "symbol": null,
                                                                            "transformFlags": 0,
                                                                            "start": 53,
                                                                            "end": 72
                                                                        }
                                                                    ],
                                                                    "trailingComma": false,
                                                                    "multiline": false,
                                                                    "flags": 0,
                                                                    "symbol": null,
                                                                    "transformFlags": 0,
                                                                    "start": 53,
                                                                    "end": 72
                                                                },
                                                                "flags": 0,
                                                                "symbol": null,
                                                                "transformFlags": 0,
                                                                "start": 52,
                                                                "end": 73
                                                            }
                                                        ],
                                                        "trailingComma": false,
                                                        "multiline": false,
                                                        "flags": 0,
                                                        "symbol": null,
                                                        "transformFlags": 0,
                                                        "start": 52,
                                                        "end": 73
                                                    },
                                                    "flags": 0,
                                                    "symbol": null,
                                                    "transformFlags": 0,
                                                    "start": 50,
                                                    "end": 74
                                                },
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 45,
                                                "end": 74
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
                                            "start": 45,
                                            "end": 75
                                        }
                                    ],
                                    "type": null,
                                    "accessModifier": null,
                                    "trailingComma": false,
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 46,
                                    "end": 75
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
                                        "start": 80,
                                        "end": 80
                                    },
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 78,
                                    "end": 81
                                },
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 33,
                                "end": 81
                            },
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 33,
                            "end": 81
                        }
                    ],
                    "multiline": false,
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 33,
                    "end": 81
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 32,
                "end": 87
            },
            "typeParameters": null,
            "flags": 0,
            "symbol": null,
            "transformFlags": 260,
            "start": 13,
            "end": 87
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
    "end": 87
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```
