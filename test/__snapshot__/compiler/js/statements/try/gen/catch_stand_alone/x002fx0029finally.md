# Auto-generated test cases ( Kataw )
- Regenerated: 2021-02-15
- From: kataw_dev\test\__snapshot__/compiler/js/statements/try/autogen.md
- Path: kataw_dev\test\__snapshot__\compiler\js\statements\try\gen\catch_stand_alone
> :: test: catch stand alone
> :: case: /)finally
## Input

`````js
catch /)finally
`````

## Output


### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "catch /)finally",
    "filename": "",
    "scriptBody": {
        "kind": 197,
        "statements": [
            {
                "kind": 2097375,
                "block": {
                    "kind": 2099237,
                    "block": {
                        "kind": 2084,
                        "statements": [],
                        "multiline": false,
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 0,
                        "parent": null,
                        "emitNode": null,
                        "start": 0,
                        "end": 0
                    },
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "parent": null,
                    "emitNode": null,
                    "start": 0,
                    "end": 0
                },
                "catchClause": {
                    "kind": 2095,
                    "catchParameter": null,
                    "block": {
                        "kind": 2099237,
                        "block": {
                            "kind": 2084,
                            "statements": [],
                            "multiline": false,
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "parent": null,
                            "emitNode": null,
                            "start": 5,
                            "end": 5
                        },
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 0,
                        "parent": null,
                        "emitNode": null,
                        "start": 5,
                        "end": 5
                    },
                    "flags": 524290,
                    "intersects": false,
                    "transformFlags": 16,
                    "parent": null,
                    "emitNode": null,
                    "start": 0,
                    "end": 5
                },
                "finallyBlock": null,
                "flags": 524290,
                "intersects": false,
                "transformFlags": 16,
                "parent": null,
                "emitNode": null,
                "start": 0,
                "end": 5
            },
            {
                "kind": 2097233,
                "expression": {
                    "kind": 4260544,
                    "text": "/)finally",
                    "flags": 524290,
                    "intersects": false,
                    "transformFlags": 0,
                    "parent": null,
                    "emitNode": null,
                    "start": 5,
                    "end": 15
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "parent": null,
                "emitNode": null,
                "start": 5,
                "end": 15
            }
        ],
        "transformFlags": 0,
        "flags": 0,
        "intersects": false,
        "parent": null,
        "emitNode": null,
        "start": 0,
        "end": 15
    },
    "jsx": false,
    "printable": true,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "message": "'try' expected.",
            "start": 0,
            "length": 0
        },
        {
            "kind": 2,
            "source": 0,
            "message": "Unterminated regular expression literal",
            "start": 15,
            "length": 1
        },
        {
            "kind": 2,
            "source": 2,
            "message": "'{' expected.",
            "start": 6,
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
    "end": 15
}
```

### Printed


```javascript

try {}
catch {}

/)finally

```

### Diagnostics


```javascript
✖ Unterminated regular expression literal - start: 27, end: 1

```
