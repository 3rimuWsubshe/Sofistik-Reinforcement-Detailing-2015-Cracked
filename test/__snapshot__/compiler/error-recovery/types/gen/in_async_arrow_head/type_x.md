# Auto-generated test cases ( Kataw )
- Regenerated: 2021-03-14
- From: kataw/test/__snapshot__/compiler/error-recovery/types/autogen.md
- Path: kataw/test/__snapshot__/compiler/error-recovery/types/gen/in_async_arrow_head
> :: test: in async arrow head
> :: case: type x
## Input

`````js
async ([ type x , x: type x ]) => {}
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "async ([ type x , x: type x ]) => {}",
    "filename": "",
    "statements": [
        {
            "kind": 2097233,
            "expression": {
                "kind": 1073807915,
                "expression": {
                    "kind": 196712,
                    "text": "async",
                    "rawText": "async",
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 0,
                    "end": 5
                },
                "typeArguments": null,
                "argumentList": {
                    "kind": 3,
                    "elements": [
                        {
                            "kind": 16473,
                            "ellipsis": false,
                            "binding": {
                                "kind": 33554437,
                                "elementList": {
                                    "kind": 29,
                                    "elements": [
                                        {
                                            "kind": 4325406,
                                            "text": "type",
                                            "rawText": "type",
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 8,
                                            "end": 13
                                        },
                                        {
                                            "kind": 4325406,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 1,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 13,
                                            "end": 15
                                        },
                                        {
                                            "kind": 4325406,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 17,
                                            "end": 19
                                        }
                                    ],
                                    "trailingComma": false,
                                    "multiline": false,
                                    "flags": 1,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 8,
                                    "end": 19
                                },
                                "flags": 1,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 7,
                                "end": 19
                            },
                            "isOptional": false,
                            "type": {
                                "kind": 134226156,
                                "typeName": {
                                    "kind": 196711,
                                    "text": "type",
                                    "rawText": "type",
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 20,
                                    "end": 25
                                },
                                "typeArguments": null,
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 2097152,
                                "start": 20,
                                "end": 27
                            },
                            "initializer": null,
                            "decorators": null,
                            "accessModifier": null,
                            "isReadOnly": false,
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 1,
                            "start": 7,
                            "end": 25
                        },
                        {
                            "kind": 196712,
                            "text": "x",
                            "rawText": "x",
                            "flags": 1,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 25,
                            "end": 27
                        }
                    ],
                    "trailingComma": false,
                    "transformFlags": 0,
                    "flags": 1,
                    "symbol": null,
                    "start": 8,
                    "end": 27
                },
                "flags": 1,
                "symbol": null,
                "transformFlags": 0,
                "start": 5,
                "end": 27
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 0,
            "end": 27
        },
        {
            "kind": 2099237,
            "block": {
                "kind": 2084,
                "statements": [],
                "multiline": false,
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 35,
                "end": 35
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 33,
            "end": 36
        }
    ],
    "isModule": false,
    "printable": true,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "message": "',' expected.",
            "start": 14,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "',' expected.",
            "start": 19,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "',' expected.",
            "start": 26,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "',' expected.",
            "start": 28,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "Declaration or statement expected",
            "start": 29,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "Declaration or statement expected",
            "start": 31,
            "length": 0
        }
    ],
    "original": null,
    "symbol": null,
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 36
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```
