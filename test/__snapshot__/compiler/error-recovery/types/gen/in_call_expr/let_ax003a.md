# Auto-generated test cases ( Kataw )
- Regenerated: 2021-03-14
- From: kataw/test/__snapshot__/compiler/error-recovery/types/autogen.md
- Path: kataw/test/__snapshot__/compiler/error-recovery/types/gen/in_call_expr
> :: test: in call expr
> :: case: let a:
## Input

`````js
x(let a:)
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "x(let a:)",
    "filename": "",
    "statements": [
        {
            "kind": 2097233,
            "expression": {
                "kind": 1073807915,
                "expression": {
                    "kind": 196712,
                    "text": "x",
                    "rawText": "x",
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 0,
                    "end": 1
                },
                "typeArguments": null,
                "argumentList": {
                    "kind": 3,
                    "elements": [
                        {
                            "kind": 196712,
                            "text": "let",
                            "rawText": "let",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 2,
                            "end": 5
                        },
                        {
                            "kind": 16473,
                            "ellipsis": false,
                            "binding": {
                                "kind": 4325406,
                                "text": "a",
                                "rawText": "a",
                                "flags": 1,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 5,
                                "end": 7
                            },
                            "isOptional": false,
                            "type": {
                                "kind": 134226156,
                                "typeName": {
                                    "kind": 196712,
                                    "text": "",
                                    "rawText": "",
                                    "flags": 1,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 8,
                                    "end": 8
                                },
                                "typeArguments": null,
                                "flags": 1,
                                "symbol": null,
                                "transformFlags": 2097152,
                                "start": 8,
                                "end": 9
                            },
                            "initializer": null,
                            "decorators": null,
                            "accessModifier": null,
                            "isReadOnly": false,
                            "flags": 1,
                            "symbol": null,
                            "transformFlags": 1,
                            "start": 5,
                            "end": 8
                        }
                    ],
                    "trailingComma": false,
                    "transformFlags": 0,
                    "flags": 0,
                    "symbol": null,
                    "start": 5,
                    "end": 9
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 1,
                "end": 9
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 0,
            "end": 9
        }
    ],
    "isModule": false,
    "printable": true,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "message": "',' expected.",
            "start": 6,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "Type expected",
            "start": 8,
            "length": 0
        }
    ],
    "original": null,
    "symbol": null,
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 9
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```
