# Auto-generated test cases ( Kataw )
- Regenerated: 2021-03-14
- From: kataw/test/__snapshot__/compiler/error-recovery/types/autogen.md
- Path: kataw/test/__snapshot__/compiler/error-recovery/types/gen/in_interface
> :: test: in interface
> :: case: a: string
## Input

`````js
interface a: string {}
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "interface a: string {}",
    "filename": "",
    "statements": [
        {
            "kind": 8311,
            "name": {
                "kind": 196712,
                "text": "a",
                "rawText": "a",
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 9,
                "end": 11
            },
            "typeParameters": null,
            "heritageClauses": null,
            "objectTypeMembers": {
                "kind": 536871081,
                "members": [],
                "multiline": false,
                "flags": 1,
                "symbol": null,
                "transformFlags": 2097152,
                "start": 11,
                "end": 11
            },
            "flags": 1,
            "symbol": null,
            "transformFlags": 2097152,
            "start": 0,
            "end": 11
        },
        {
            "kind": 2097233,
            "expression": {
                "kind": 196712,
                "text": "string",
                "rawText": "string",
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 12,
                "end": 19
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 12,
            "end": 19
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
                "start": 21,
                "end": 21
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 19,
            "end": 22
        }
    ],
    "isModule": false,
    "printable": true,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "message": "'{' expected.",
            "start": 11,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "';' expected.",
            "start": 20,
            "length": 0
        }
    ],
    "original": null,
    "symbol": null,
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 22
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```
