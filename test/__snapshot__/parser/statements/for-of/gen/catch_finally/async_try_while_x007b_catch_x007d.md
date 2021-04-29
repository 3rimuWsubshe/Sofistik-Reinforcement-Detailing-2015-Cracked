# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: y
> :: test: catch finally
> :: case: async try while { catch }
## Input

`````js
catch async try while { catch } finally
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
            "catchClause": null,
            "finallyKeyword": null,
            "finallyBlock": {
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
            "start": 0,
            "end": 11
        },
        {
            "kind": 159,
            "tryKeyword": {
                "kind": 37757027,
                "flags": 0,
                "start": 11,
                "end": 15
            },
            "block": {
                "kind": 249,
                "block": {
                    "kind": 124,
                    "statements": [],
                    "flags": 16,
                    "start": 15,
                    "end": 15
                },
                "flags": 16,
                "start": 15,
                "end": 15
            },
            "catchClause": null,
            "finallyKeyword": null,
            "finallyBlock": {
                "kind": 249,
                "block": {
                    "kind": 124,
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
                                    "start": 29,
                                    "end": 29
                                },
                                "flags": 16,
                                "start": 29,
                                "end": 29
                            },
                            "catchClause": null,
                            "finallyKeyword": null,
                            "finallyBlock": {
                                "kind": 249,
                                "block": {
                                    "kind": 124,
                                    "statements": [],
                                    "flags": 16,
                                    "start": 31,
                                    "end": 31
                                },
                                "flags": 16,
                                "start": 31,
                                "end": 31
                            },
                            "flags": 16,
                            "start": 23,
                            "end": 31
                        },
                        {
                            "kind": 159,
                            "tryKeyword": null,
                            "block": {
                                "kind": 249,
                                "block": {
                                    "kind": 124,
                                    "statements": [],
                                    "flags": 16,
                                    "start": 39,
                                    "end": 39
                                },
                                "flags": 16,
                                "start": 39,
                                "end": 39
                            },
                            "catchClause": null,
                            "finallyKeyword": null,
                            "finallyBlock": {
                                "kind": 249,
                                "block": {
                                    "kind": 124,
                                    "statements": [],
                                    "flags": 16,
                                    "start": 39,
                                    "end": 39
                                },
                                "flags": 16,
                                "start": 39,
                                "end": 39
                            },
                            "flags": 16,
                            "start": 31,
                            "end": 39
                        }
                    ],
                    "flags": 16,
                    "start": 23,
                    "end": 39
                },
                "flags": 16,
                "start": 21,
                "end": 39
            },
            "flags": 16,
            "start": 11,
            "end": 39
        }
    ],
    "isModule": false,
    "source": "catch async try while { catch } finally",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 39
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ 'try' expected - start: 0, end: 5
✖ 'try' expected - start: 23, end: 29
✖ 'try' expected - start: 31, end: 39

```
