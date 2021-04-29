# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: y
> :: test: catch finally
> :: case: catch { try
## Input

`````js
catch catch { try finally
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 159,
            "tryKeyword": null,
            "block": {
                "kind": 249,
                "block": {
                    "kind": 124,
                    "statements": [],
                    "flags": 16,
                    "start": 5,
                    "end": 5
                },
                "flags": 16,
                "start": 5,
                "end": 5
            },
            "catchClause": {
                "kind": 173,
                "catchKeyword": {
                    "kind": 4202575,
                    "flags": 0,
                    "start": 5,
                    "end": 11
                },
                "catchParameter": null,
                "block": {
                    "kind": 249,
                    "block": {
                        "kind": 124,
                        "statements": [
                            {
                                "kind": 159,
                                "tryKeyword": {
                                    "kind": 37757027,
                                    "flags": 0,
                                    "start": 13,
                                    "end": 17
                                },
                                "block": {
                                    "kind": 249,
                                    "block": {
                                        "kind": 124,
                                        "statements": [],
                                        "flags": 16,
                                        "start": 17,
                                        "end": 17
                                    },
                                    "flags": 16,
                                    "start": 17,
                                    "end": 17
                                },
                                "catchClause": null,
                                "finallyKeyword": {
                                    "kind": 37757016,
                                    "flags": 0,
                                    "start": 17,
                                    "end": 25
                                },
                                "finallyBlock": {
                                    "kind": 249,
                                    "block": {
                                        "kind": 124,
                                        "statements": [],
                                        "flags": 16,
                                        "start": 25,
                                        "end": 25
                                    },
                                    "flags": 16,
                                    "start": 25,
                                    "end": 25
                                },
                                "flags": 16,
                                "start": 13,
                                "end": 25
                            }
                        ],
                        "flags": 16,
                        "start": 13,
                        "end": 25
                    },
                    "flags": 16,
                    "start": 11,
                    "end": 25
                },
                "flags": 16,
                "start": 5,
                "end": 25
            },
            "finallyKeyword": null,
            "finallyBlock": null,
            "flags": 16,
            "start": 0,
            "end": 25
        }
    ],
    "isModule": false,
    "source": "catch catch { try finally",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 25
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ 'try' expected - start: 0, end: 5

```
