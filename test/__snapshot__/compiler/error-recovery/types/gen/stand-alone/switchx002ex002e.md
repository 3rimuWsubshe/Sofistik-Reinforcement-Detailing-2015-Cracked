# Auto-generated test cases ( Kataw )
- Regenerated: 2021-03-14
- From: kataw/test/__snapshot__/compiler/error-recovery/types/autogen.md
- Path: kataw/test/__snapshot__/compiler/error-recovery/types/gen/stand-alone
> :: test: stand-alone
> :: case: switch..
## Input

`````js
[ switch.. ]
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "[ switch.. ]",
    "filename": "",
    "statements": [
        {
            "kind": 2097233,
            "expression": {
                "kind": 98822,
                "elementList": {
                    "kind": 65605,
                    "elements": [],
                    "trailingComma": false,
                    "multiline": false,
                    "flags": 0,
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
            "kind": 2097362,
            "expression": {
                "kind": 67175096,
                "member": {
                    "kind": 67175096,
                    "member": {
                        "kind": 131322,
                        "text": "",
                        "flags": 3,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 8,
                        "end": 8
                    },
                    "expression": {
                        "kind": 196711,
                        "text": "",
                        "rawText": "",
                        "flags": 1,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 9,
                        "end": 9
                    },
                    "flags": 1,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 8,
                    "end": 9,
                    "period": {
                        "kind": 255,
                        "pos": 8,
                        "end": 9
                    }
                },
                "expression": {
                    "kind": 196711,
                    "text": "",
                    "rawText": "",
                    "flags": 1,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 10,
                    "end": 10
                },
                "flags": 1,
                "symbol": null,
                "transformFlags": 0,
                "start": 9,
                "end": 10,
                "period": {
                    "kind": 255,
                    "pos": 9,
                    "end": 10
                }
            },
            "caseBlock": {
                "kind": 2093,
                "clauses": [],
                "flags": 1,
                "symbol": null,
                "transformFlags": 0,
                "start": 10,
                "end": 10
            },
            "flags": 1,
            "symbol": null,
            "transformFlags": 0,
            "start": 1,
            "end": 10
        }
    ],
    "isModule": false,
    "printable": true,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "message": "']' expected.",
            "start": 2,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "'(' expected.",
            "start": 8,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "Dot property must be an identifier",
            "start": 9,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "Dot property must be an identifier",
            "start": 11,
            "length": 0
        }
    ],
    "original": null,
    "symbol": null,
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 12
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```
