# Auto-generated test cases ( Kataw )
- Regenerated: 2021-03-14
- From: kataw/test/__snapshot__/compiler/error-recovery/types/autogen.md
- Path: kataw/test/__snapshot__/compiler/error-recovery/types/gen/in_function_param_with_block
> :: test: in function param with block
> :: case: T = t as
## Input

`````js
function ( T = t as ) {T = t as}
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "function ( T = t as ) {T = t as}",
    "filename": "",
    "statements": [
        {
            "kind": 264284,
            "name": {
                "kind": 131102,
                "text": "",
                "rawText": "",
                "flags": 1,
                "symbol": null,
                "transformFlags": 1025,
                "start": 8,
                "end": 8
            },
            "formalParameters": {
                "kind": 90,
                "formalParameterList": [
                    {
                        "kind": 16473,
                        "ellipsis": false,
                        "binding": {
                            "kind": 131102,
                            "text": "T",
                            "rawText": "T",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 1025,
                            "start": 10,
                            "end": 12
                        },
                        "isOptional": false,
                        "type": null,
                        "initializer": {
                            "kind": 73738,
                            "expression": {
                                "kind": 196712,
                                "text": "t",
                                "rawText": "t",
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 14,
                                "end": 16
                            },
                            "type": {
                                "kind": 134226156,
                                "typeName": {
                                    "kind": 196712,
                                    "text": "",
                                    "rawText": "",
                                    "flags": 1,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 19,
                                    "end": 19
                                },
                                "typeArguments": null,
                                "flags": 1,
                                "symbol": null,
                                "transformFlags": 2097152,
                                "start": 19,
                                "end": 21
                            },
                            "flags": 1,
                            "symbol": null,
                            "transformFlags": 2097152,
                            "start": 16,
                            "end": 19
                        },
                        "decorators": null,
                        "accessModifier": null,
                        "isReadOnly": false,
                        "flags": 1,
                        "symbol": null,
                        "transformFlags": 1,
                        "start": 10,
                        "end": 19
                    }
                ],
                "trailingComma": false,
                "flags": 1,
                "symbol": null,
                "transformFlags": 0,
                "start": 10,
                "end": 21
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
                                "kind": 65550,
                                "left": {
                                    "kind": 196712,
                                    "text": "T",
                                    "rawText": "T",
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 23,
                                    "end": 24
                                },
                                "operator": "=",
                                "right": {
                                    "kind": 73738,
                                    "expression": {
                                        "kind": 196712,
                                        "text": "t",
                                        "rawText": "t",
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 26,
                                        "end": 28
                                    },
                                    "type": {
                                        "kind": 134226156,
                                        "typeName": {
                                            "kind": 196712,
                                            "text": "",
                                            "rawText": "",
                                            "flags": 1,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 31,
                                            "end": 31
                                        },
                                        "typeArguments": null,
                                        "flags": 1,
                                        "symbol": null,
                                        "transformFlags": 2097152,
                                        "start": 31,
                                        "end": 32
                                    },
                                    "flags": 1,
                                    "symbol": null,
                                    "transformFlags": 2097152,
                                    "start": 28,
                                    "end": 31
                                },
                                "flags": 1,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 23,
                                "end": 31
                            },
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 23,
                            "end": 31
                        }
                    ],
                    "multiline": false,
                    "flags": 1,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 23,
                    "end": 31
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 21,
                "end": 32
            },
            "typeParameters": null,
            "flags": 0,
            "symbol": null,
            "transformFlags": 256,
            "start": 0,
            "end": 32
        }
    ],
    "isModule": false,
    "printable": true,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "message": "Identifier expected",
            "start": 9,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "Type expected",
            "start": 20,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "Type expected",
            "start": 31,
            "length": 0
        }
    ],
    "original": null,
    "symbol": null,
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 32
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```
