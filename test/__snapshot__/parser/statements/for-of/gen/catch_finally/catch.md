# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: y
> :: test: catch finally
> :: case: catch
## Input

`````js
catch catch finally
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
                        "statements": [],
                        "flags": 16,
                        "start": 11,
                        "end": 11
                    },
                    "flags": 16,
                    "start": 11,
                    "end": 11
                },
                "flags": 16,
                "start": 5,
                "end": 11
            },
            "finallyKeyword": {
                "kind": 37757016,
                "flags": 0,
                "start": 11,
                "end": 19
            },
            "finallyBlock": {
                "kind": 249,
                "block": {
                    "kind": 124,
                    "statements": [],
                    "flags": 16,
                    "start": 19,
                    "end": 19
                },
                "flags": 16,
                "start": 19,
                "end": 19
            },
            "flags": 16,
            "start": 0,
            "end": 19
        }
    ],
    "isModule": false,
    "source": "catch catch finally",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 19
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
