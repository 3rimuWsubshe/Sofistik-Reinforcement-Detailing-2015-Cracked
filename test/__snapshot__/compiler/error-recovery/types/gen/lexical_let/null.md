# Auto-generated test cases ( Kataw )
- Regenerated: 2021-03-14
- From: kataw/test/__snapshot__/compiler/error-recovery/types/autogen.md
- Path: kataw/test/__snapshot__/compiler/error-recovery/types/gen/lexical_let
> :: test: lexical let
> :: case: null
## Input

`````js
let x: null null
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "let x: null null",
    "filename": "",
    "statements": [
        {
            "kind": 142,
            "isConst": false,
            "binding": {
                "kind": 31,
                "bindingList": [
                    {
                        "kind": 16525,
                        "binding": {
                            "kind": 131102,
                            "text": "x",
                            "rawText": "x",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 1025,
                            "start": 3,
                            "end": 5
                        },
                        "exclamation": false,
                        "type": {
                            "kind": 4202655,
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 2097152,
                            "start": 6,
                            "end": 11
                        },
                        "initializer": null,
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 3,
                        "end": 11
                    }
                ],
                "flags": 9,
                "symbol": null,
                "transformFlags": 0,
                "start": 3,
                "end": 11
            },
            "flags": 9,
            "symbol": null,
            "transformFlags": 769,
            "start": 0,
            "end": 11
        },
        {
            "kind": 2097233,
            "expression": {
                "kind": 4260512,
                "text": null,
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 11,
                "end": 16
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 11,
            "end": 16
        }
    ],
    "isModule": false,
    "printable": true,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "message": "',' expected.",
            "start": 12,
            "length": 0
        }
    ],
    "original": null,
    "symbol": null,
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 16
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```
