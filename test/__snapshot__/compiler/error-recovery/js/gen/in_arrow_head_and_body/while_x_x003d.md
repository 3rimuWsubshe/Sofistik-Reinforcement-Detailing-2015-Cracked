# Auto-generated test cases ( Kataw )
- Regenerated: 2021-03-17
- From: kataw/test/__snapshot__/compiler/error-recovery/js/autogen.md
- Path: kataw/test/__snapshot__/compiler/error-recovery/js/gen/in_arrow_head_and_body
> :: test: in arrow head and body
> :: case: while x =
## Input

`````js
(while x =) => {x = {while x =}}
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "(while x =) => {x = {while x =}}",
    "filename": "",
    "statements": [
        {
            "kind": 2097233,
            "expression": {
                "kind": 66224,
                "expression": {
                    "kind": 131322,
                    "text": "",
                    "flags": 3,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 1,
                    "end": 1
                },
                "flags": 1,
                "symbol": null,
                "transformFlags": 0,
                "start": 0,
                "end": 1
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 0,
            "end": 1
        },
        {
            "kind": 2097399,
            "expression": {
                "kind": 65550,
                "left": {
                    "kind": 196712,
                    "text": "x",
                    "rawText": "x",
                    "flags": 1,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 6,
                    "end": 8
                },
                "operator": "=",
                "right": {
                    "kind": 131322,
                    "text": "",
                    "flags": 3,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 10,
                    "end": 10
                },
                "flags": 1,
                "symbol": null,
                "transformFlags": 0,
                "start": 6,
                "end": 10
            },
            "statement": {
                "kind": 2097233,
                "expression": {
                    "kind": 83976,
                    "typeParameters": null,
                    "parameters": {
                        "kind": 4325406,
                        "text": "",
                        "flags": 3,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 11,
                        "end": 11
                    },
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
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 16,
                                            "end": 17
                                        },
                                        "operator": "=",
                                        "right": {
                                            "kind": 98984,
                                            "propertyList": {
                                                "kind": 65722,
                                                "properties": [
                                                    {
                                                        "kind": 196711,
                                                        "text": "while",
                                                        "rawText": "while",
                                                        "flags": 0,
                                                        "symbol": null,
                                                        "transformFlags": 0,
                                                        "start": 21,
                                                        "end": 26
                                                    },
                                                    {
                                                        "kind": 65597,
                                                        "left": {
                                                            "kind": 196712,
                                                            "text": "x",
                                                            "rawText": "x",
                                                            "flags": 1,
                                                            "symbol": null,
                                                            "transformFlags": 0,
                                                            "start": 26,
                                                            "end": 28
                                                        },
                                                        "isOptional": false,
                                                        "exclamation": false,
                                                        "right": {
                                                            "kind": 131322,
                                                            "text": "",
                                                            "flags": 3,
                                                            "symbol": null,
                                                            "transformFlags": 0,
                                                            "start": 30,
                                                            "end": 30
                                                        },
                                                        "accessModifier": null,
                                                        "flags": 1,
                                                        "symbol": null,
                                                        "transformFlags": 1,
                                                        "start": 26,
                                                        "end": 30
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "multiline": false,
                                                "flags": 1,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 21,
                                                "end": 30
                                            },
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 19,
                                            "end": 31
                                        },
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 16,
                                        "end": 31
                                    },
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 16,
                                    "end": 31
                                }
                            ],
                            "multiline": false,
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 16,
                            "end": 31
                        },
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 14,
                        "end": 32
                    },
                    "flags": 1073741824,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 11,
                    "end": 32
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 11,
                "end": 32
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 1,
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
            "start": 1,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "'(' expected.",
            "start": 7,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "Identifier expected",
            "start": 10,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "Identifier expected",
            "start": 12,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "',' expected.",
            "start": 27,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "Identifier expected",
            "start": 30,
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
