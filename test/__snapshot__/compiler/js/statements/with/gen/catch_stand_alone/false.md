# Auto-generated test cases ( Kataw )
- Regenerated: 2021-02-15
- From: kataw_dev\test\__snapshot__/compiler/js/statements/with/autogen.md
- Path: kataw_dev\test\__snapshot__\compiler\js\statements\with\gen\catch_stand_alone
> :: test: catch stand alone
> :: case: false
## Input

`````js
with false
`````

## Output


### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "with false",
    "filename": "",
    "scriptBody": {
        "kind": 197,
        "statements": [
            {
                "kind": 2097400,
                "expression": {
                    "kind": 4260391,
                    "text": false,
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "parent": null,
                    "emitNode": null,
                    "start": 4,
                    "end": 10
                },
                "statement": {
                    "kind": 2097233,
                    "expression": {
                        "kind": 131322,
                        "text": "",
                        "flags": 6,
                        "intersects": false,
                        "transformFlags": 0,
                        "parent": null,
                        "emitNode": null,
                        "start": 10,
                        "end": 10
                    },
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "parent": null,
                    "emitNode": null,
                    "start": 10,
                    "end": 10
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "parent": null,
                "emitNode": null,
                "start": 0,
                "end": 10
            }
        ],
        "transformFlags": 0,
        "flags": 0,
        "intersects": false,
        "parent": null,
        "emitNode": null,
        "start": 0,
        "end": 10
    },
    "jsx": false,
    "printable": true,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "message": "'(' expected.",
            "start": 5,
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
    "end": 10
}
```

### Printed


```javascript

with(false)
    undefined

```

### Diagnostics


```javascript
✔ No errors
```
