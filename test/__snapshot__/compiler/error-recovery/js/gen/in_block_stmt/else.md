# Auto-generated test cases ( Kataw )
- Regenerated: 2021-03-17
- From: kataw/test/__snapshot__/compiler/error-recovery/js/autogen.md
- Path: kataw/test/__snapshot__/compiler/error-recovery/js/gen/in_block_stmt
> :: test: in block stmt
> :: case: else
## Input

`````js
{ else }
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "{ else }",
    "filename": "",
    "statements": [
        {
            "kind": 2099237,
            "block": {
                "kind": 2084,
                "statements": [],
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
        }
    ],
    "isModule": false,
    "printable": true,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "message": "'}' expected.",
            "start": 2,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "Declaration or statement expected",
            "start": 7,
            "length": 0
        }
    ],
    "original": null,
    "symbol": null,
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 8
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```
