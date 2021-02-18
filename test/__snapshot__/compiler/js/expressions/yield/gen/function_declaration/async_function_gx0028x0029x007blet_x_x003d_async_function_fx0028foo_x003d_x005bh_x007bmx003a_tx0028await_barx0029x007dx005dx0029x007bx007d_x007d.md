# Auto-generated test cases ( Kataw )
- Regenerated: 2021-02-18
- From: kataw8\test\__snapshot__/compiler/js/expressions/yield/autogen.md
- Path: kataw8\test\__snapshot__\compiler\js\expressions\yield\gen\function_declaration
> :: test: function declaration
> :: case: async function g(){let x = async function f(foo = [h, {m: t(await bar)}]){}    }
## Input

`````js
function not_gen() { async function g(){let x = async function f(foo = [h, {m: t(await bar)}]){}    } }}
`````

## Output


### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "function not_gen() { async function g(){let x = async function f(foo = [h, {m: t(await bar)}]){}    } }}",
    "filename": "",
    "scriptBody": {
        "kind": 197,
        "statements": [
            {
                "kind": 264284,
                "name": {
                    "kind": 131102,
                    "text": "not_gen",
                    "rawText": "not_gen",
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 1025,
                    "parent": null,
                    "emitNode": null,
                    "start": 8,
                    "end": 16
                },
                "formalParameters": {
                    "kind": 90,
                    "formalParameterList": [],
                    "trailingComma": false,
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "parent": null,
                    "emitNode": null,
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
                                    "text": "g",
                                    "rawText": "g",
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 1025,
                                    "parent": null,
                                    "emitNode": null,
                                    "start": 35,
                                    "end": 37
                                },
                                "formalParameters": {
                                    "kind": 90,
                                    "formalParameterList": [],
                                    "trailingComma": false,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "parent": null,
                                    "emitNode": null,
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
                                                "kind": 142,
                                                "isConst": false,
                                                "binding": {
                                                    "kind": 31,
                                                    "bindingList": [
                                                        {
                                                            "kind": 141,
                                                            "binding": {
                                                                "kind": 131102,
                                                                "text": "x",
                                                                "rawText": "x",
                                                                "flags": 0,
                                                                "intersects": false,
                                                                "transformFlags": 1025,
                                                                "parent": null,
                                                                "emitNode": null,
                                                                "start": 43,
                                                                "end": 45
                                                            },
                                                            "exclamation": false,
                                                            "type": null,
                                                            "initializer": {
                                                                "kind": 9439250,
                                                                "name": {
                                                                    "kind": 131102,
                                                                    "text": "f",
                                                                    "rawText": "f",
                                                                    "flags": 0,
                                                                    "intersects": false,
                                                                    "transformFlags": 1025,
                                                                    "parent": null,
                                                                    "emitNode": null,
                                                                    "start": 62,
                                                                    "end": 64
                                                                },
                                                                "formalParameters": {
                                                                    "kind": 90,
                                                                    "formalParameterList": [
                                                                        {
                                                                            "kind": 89,
                                                                            "ellipsis": false,
                                                                            "binding": {
                                                                                "kind": 131102,
                                                                                "text": "foo",
                                                                                "rawText": "foo",
                                                                                "flags": 0,
                                                                                "intersects": false,
                                                                                "transformFlags": 1025,
                                                                                "parent": null,
                                                                                "emitNode": null,
                                                                                "start": 65,
                                                                                "end": 68
                                                                            },
                                                                            "isOptional": false,
                                                                            "type": null,
                                                                            "initializer": {
                                                                                "kind": 67207686,
                                                                                "elementList": {
                                                                                    "kind": 65605,
                                                                                    "elements": [
                                                                                        {
                                                                                            "kind": 196712,
                                                                                            "text": "h",
                                                                                            "rawText": "h",
                                                                                            "flags": 0,
                                                                                            "intersects": false,
                                                                                            "transformFlags": 0,
                                                                                            "parent": null,
                                                                                            "emitNode": null,
                                                                                            "start": 72,
                                                                                            "end": 73
                                                                                        },
                                                                                        {
                                                                                            "kind": 67224232,
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
                                                                                                            "intersects": false,
                                                                                                            "transformFlags": 0,
                                                                                                            "parent": null,
                                                                                                            "emitNode": null,
                                                                                                            "start": 76,
                                                                                                            "end": 77
                                                                                                        },
                                                                                                        "right": {
                                                                                                            "kind": 66091,
                                                                                                            "expression": {
                                                                                                                "kind": 196712,
                                                                                                                "text": "t",
                                                                                                                "rawText": "t",
                                                                                                                "flags": 0,
                                                                                                                "intersects": false,
                                                                                                                "transformFlags": 0,
                                                                                                                "parent": null,
                                                                                                                "emitNode": null,
                                                                                                                "start": 78,
                                                                                                                "end": 80
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
                                                                                                                            "intersects": false,
                                                                                                                            "transformFlags": 0,
                                                                                                                            "parent": null,
                                                                                                                            "emitNode": null,
                                                                                                                            "start": 86,
                                                                                                                            "end": 90
                                                                                                                        },
                                                                                                                        "flags": 0,
                                                                                                                        "intersects": false,
                                                                                                                        "transformFlags": 32780,
                                                                                                                        "parent": null,
                                                                                                                        "emitNode": null,
                                                                                                                        "start": 81,
                                                                                                                        "end": 90
                                                                                                                    }
                                                                                                                ],
                                                                                                                "trailingComma": false,
                                                                                                                "transformFlags": 0,
                                                                                                                "flags": 0,
                                                                                                                "intersects": false,
                                                                                                                "parent": null,
                                                                                                                "emitNode": null,
                                                                                                                "start": 86,
                                                                                                                "end": 91
                                                                                                            },
                                                                                                            "flags": 0,
                                                                                                            "intersects": false,
                                                                                                            "transformFlags": 0,
                                                                                                            "parent": null,
                                                                                                            "emitNode": null,
                                                                                                            "start": 80,
                                                                                                            "end": 91
                                                                                                        },
                                                                                                        "accessModifier": null,
                                                                                                        "decorators": null,
                                                                                                        "flags": 0,
                                                                                                        "intersects": false,
                                                                                                        "transformFlags": 0,
                                                                                                        "parent": null,
                                                                                                        "emitNode": null,
                                                                                                        "start": 76,
                                                                                                        "end": 91
                                                                                                    }
                                                                                                ],
                                                                                                "trailingComma": false,
                                                                                                "multiline": false,
                                                                                                "flags": 0,
                                                                                                "intersects": false,
                                                                                                "transformFlags": 0,
                                                                                                "parent": null,
                                                                                                "emitNode": null,
                                                                                                "start": 76,
                                                                                                "end": 91
                                                                                            },
                                                                                            "flags": 0,
                                                                                            "intersects": false,
                                                                                            "transformFlags": 0,
                                                                                            "parent": null,
                                                                                            "emitNode": null,
                                                                                            "start": 74,
                                                                                            "end": 92
                                                                                        }
                                                                                    ],
                                                                                    "trailingComma": false,
                                                                                    "multiline": false,
                                                                                    "flags": 0,
                                                                                    "intersects": false,
                                                                                    "transformFlags": 0,
                                                                                    "parent": null,
                                                                                    "emitNode": null,
                                                                                    "start": 72,
                                                                                    "end": 92
                                                                                },
                                                                                "flags": 0,
                                                                                "intersects": false,
                                                                                "transformFlags": 0,
                                                                                "parent": null,
                                                                                "emitNode": null,
                                                                                "start": 70,
                                                                                "end": 93
                                                                            },
                                                                            "decorators": null,
                                                                            "accessModifier": null,
                                                                            "isReadOnly": false,
                                                                            "flags": 0,
                                                                            "intersects": false,
                                                                            "transformFlags": 1,
                                                                            "parent": null,
                                                                            "emitNode": null,
                                                                            "start": 65,
                                                                            "end": 93
                                                                        }
                                                                    ],
                                                                    "trailingComma": false,
                                                                    "flags": 0,
                                                                    "intersects": false,
                                                                    "transformFlags": 0,
                                                                    "parent": null,
                                                                    "emitNode": null,
                                                                    "start": 65,
                                                                    "end": 94
                                                                },
                                                                "contents": {
                                                                    "kind": 91,
                                                                    "functionStatementList": {
                                                                        "kind": 94,
                                                                        "statements": [],
                                                                        "multiline": false,
                                                                        "flags": 0,
                                                                        "intersects": false,
                                                                        "transformFlags": 0,
                                                                        "parent": null,
                                                                        "emitNode": null,
                                                                        "start": 95,
                                                                        "end": 95
                                                                    },
                                                                    "flags": 0,
                                                                    "intersects": false,
                                                                    "transformFlags": 0,
                                                                    "parent": null,
                                                                    "emitNode": null,
                                                                    "start": 94,
                                                                    "end": 96
                                                                },
                                                                "typeParameters": null,
                                                                "type": null,
                                                                "flags": 0,
                                                                "intersects": false,
                                                                "transformFlags": 4,
                                                                "parent": null,
                                                                "emitNode": null,
                                                                "start": 47,
                                                                "end": 96
                                                            },
                                                            "flags": 0,
                                                            "intersects": false,
                                                            "transformFlags": 0,
                                                            "parent": null,
                                                            "emitNode": null,
                                                            "start": 43,
                                                            "end": 96
                                                        }
                                                    ],
                                                    "flags": 16,
                                                    "intersects": false,
                                                    "transformFlags": 0,
                                                    "parent": null,
                                                    "emitNode": null,
                                                    "start": 43,
                                                    "end": 96
                                                },
                                                "flags": 16,
                                                "intersects": false,
                                                "transformFlags": 769,
                                                "parent": null,
                                                "emitNode": null,
                                                "start": 40,
                                                "end": 96
                                            }
                                        ],
                                        "multiline": false,
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "parent": null,
                                        "emitNode": null,
                                        "start": 40,
                                        "end": 96
                                    },
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "parent": null,
                                    "emitNode": null,
                                    "start": 39,
                                    "end": 101
                                },
                                "typeParameters": null,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 260,
                                "parent": null,
                                "emitNode": null,
                                "start": 20,
                                "end": 101
                            }
                        ],
                        "multiline": false,
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 0,
                        "parent": null,
                        "emitNode": null,
                        "start": 20,
                        "end": 101
                    },
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "parent": null,
                    "emitNode": null,
                    "start": 18,
                    "end": 103
                },
                "typeParameters": null,
                "flags": 0,
                "intersects": false,
                "transformFlags": 256,
                "parent": null,
                "emitNode": null,
                "start": 0,
                "end": 103
            }
        ],
        "transformFlags": 0,
        "flags": 0,
        "intersects": false,
        "parent": null,
        "emitNode": null,
        "start": 0,
        "end": 104
    },
    "jsx": false,
    "printable": true,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "message": "Declaration or statement expected",
            "start": 103,
            "length": 0
        }
    ],
    "parent": null,
    "emitNode": null,
    "incremental": false,
    "flags": 0,
    "intersects": false,
    "transformFlags": 0,
    "start": 0,
    "end": 104
}
```

### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics


```javascript

```
