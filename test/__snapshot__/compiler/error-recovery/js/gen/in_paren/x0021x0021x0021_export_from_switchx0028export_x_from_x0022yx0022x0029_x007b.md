# Auto-generated test cases ( Kataw )
- Regenerated: 2021-03-17
- From: kataw/test/__snapshot__/compiler/error-recovery/js/autogen.md
- Path: kataw/test/__snapshot__/compiler/error-recovery/js/gen/in_paren
> :: test: in paren
> :: case: !!! export from switch(export x from "y") {
## Input

`````js
(!!! export from switch(export x from "y") {)
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "(!!! export from switch(export x from \"y\") {)",
    "filename": "",
    "statements": [
        {
            "kind": 2097233,
            "expression": {
                "kind": 66224,
                "expression": {
                    "kind": 65774,
                    "operator": "!",
                    "operand": {
                        "kind": 65774,
                        "operator": "!",
                        "operand": {
                            "kind": 65774,
                            "operator": "!",
                            "operand": {
                                "kind": 131322,
                                "text": "",
                                "flags": 3,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 4,
                                "end": 4
                            },
                            "flags": 1,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 3,
                            "end": 4
                        },
                        "flags": 1,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 2,
                        "end": 4
                    },
                    "flags": 1,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 1,
                    "end": 4
                },
                "flags": 1,
                "symbol": null,
                "transformFlags": 0,
                "start": 0,
                "end": 4
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 0,
            "end": 4
        },
        {
            "kind": 76,
            "declaration": null,
            "namedExports": null,
            "exportFromClause": null,
            "fromClause": null,
            "isTypeOnly": false,
            "flags": 1,
            "symbol": null,
            "transformFlags": 0,
            "start": 4,
            "end": 11
        },
        {
            "kind": 2097233,
            "expression": {
                "kind": 196712,
                "text": "from",
                "rawText": "from",
                "flags": 1,
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
        },
        {
            "kind": 2097362,
            "expression": {
                "kind": 131322,
                "text": "",
                "flags": 3,
                "symbol": null,
                "transformFlags": 0,
                "start": 24,
                "end": 24
            },
            "caseBlock": {
                "kind": 2093,
                "clauses": [],
                "flags": 1,
                "symbol": null,
                "transformFlags": 0,
                "start": 24,
                "end": 24
            },
            "flags": 1,
            "symbol": null,
            "transformFlags": 0,
            "start": 16,
            "end": 24
        },
        {
            "kind": 76,
            "declaration": null,
            "namedExports": null,
            "exportFromClause": null,
            "fromClause": null,
            "isTypeOnly": false,
            "flags": 1,
            "symbol": null,
            "transformFlags": 0,
            "start": 24,
            "end": 30
        },
        {
            "kind": 2097233,
            "expression": {
                "kind": 196712,
                "text": "x",
                "rawText": "x",
                "flags": 1,
                "symbol": null,
                "transformFlags": 0,
                "start": 30,
                "end": 32
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 30,
            "end": 32
        },
        {
            "kind": 2097233,
            "expression": {
                "kind": 196712,
                "text": "from",
                "rawText": "from",
                "flags": 1,
                "symbol": null,
                "transformFlags": 0,
                "start": 32,
                "end": 37
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 32,
            "end": 37
        },
        {
            "kind": 2097233,
            "expression": {
                "kind": 4261583,
                "text": "y",
                "rawText": "y",
                "flags": 1,
                "symbol": null,
                "transformFlags": 0,
                "start": 37,
                "end": 41
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 37,
            "end": 41
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
                "start": 44,
                "end": 44
            },
            "flags": 1,
            "symbol": null,
            "transformFlags": 0,
            "start": 42,
            "end": 44
        }
    ],
    "isModule": false,
    "printable": true,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "message": "Identifier expected",
            "start": 5,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "Unexpected token.",
            "start": 12,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "';' expected.",
            "start": 17,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "Identifier expected",
            "start": 24,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "Unexpected token.",
            "start": 31,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "';' expected.",
            "start": 33,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "';' expected.",
            "start": 38,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "';' expected.",
            "start": 41,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "'}' expected.",
            "start": 44,
            "length": 0
        }
    ],
    "original": null,
    "symbol": null,
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 45
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```
