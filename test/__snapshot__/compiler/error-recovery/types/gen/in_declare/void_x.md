# Auto-generated test cases ( Kataw )
- Regenerated: 2021-03-14
- From: kataw/test/__snapshot__/compiler/error-recovery/types/autogen.md
- Path: kataw/test/__snapshot__/compiler/error-recovery/types/gen/in_declare
> :: test: in declare
> :: case: void x
## Input

`````js
declare void x
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "declare void x",
    "filename": "",
    "statements": [
        {
            "kind": 2097233,
            "expression": {
                "kind": 196712,
                "text": "declare",
                "rawText": "declare",
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 0,
                "end": 7
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 0,
            "end": 7
        },
        {
            "kind": 2097233,
            "expression": {
                "kind": 65774,
                "operator": "void",
                "operand": {
                    "kind": 196712,
                    "text": "x",
                    "rawText": "x",
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 12,
                    "end": 14
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 7,
                "end": 14
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 7,
            "end": 14
        }
    ],
    "isModule": false,
    "printable": true,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "message": "';' expected.",
            "start": 8,
            "length": 0
        }
    ],
    "original": null,
    "symbol": null,
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 14
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```
