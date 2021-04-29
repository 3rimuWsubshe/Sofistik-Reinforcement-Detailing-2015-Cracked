# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: k
> :: test: try with unclosed block
> :: case: while try this and !foo
## Input

`````js
try {} finally(x) { while try this and !foo
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
            "tryKeyword": {
                "kind": 37757027,
                "flags": 0,
                "start": 0,
                "end": 3
            },
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
                "start": 3,
                "end": 6
            },
            "catchClause": null,
            "finallyKeyword": {
                "kind": 37757016,
                "flags": 0,
                "start": 6,
                "end": 14
            },
            "finallyBlock": {
                "kind": 249,
                "block": {
                    "kind": 124,
                    "statements": [],
                    "flags": 16,
                    "start": 14,
                    "end": 14
                },
                "flags": 16,
                "start": 14,
                "end": 14
            },
            "flags": 16,
            "start": 0,
            "end": 14
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 96,
                    "start": 15,
                    "end": 16
                },
                "flags": 32,
                "start": 14,
                "end": 17
            },
            "flags": 16,
            "start": 14,
            "end": 17
        },
        {
            "kind": 249,
            "block": {
                "kind": 124,
                "statements": [
                    {
                        "kind": 154,
                        "whileKeyword": {
                            "kind": 37757028,
                            "flags": 0,
                            "start": 19,
                            "end": 25
                        },
                        "expression": {
                            "kind": 16637,
                            "text": "",
                            "flags": 68,
                            "start": 25,
                            "end": 25
                        },
                        "statement": {
                            "kind": 159,
                            "tryKeyword": {
                                "kind": 37757027,
                                "flags": 0,
                                "start": 25,
                                "end": 29
                            },
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
                                    "start": 34,
                                    "end": 34
                                },
                                "flags": 16,
                                "start": 34,
                                "end": 34
                            },
                            "flags": 16,
                            "start": 25,
                            "end": 34
                        },
                        "flags": 16,
                        "start": 19,
                        "end": 34
                    },
                    {
                        "kind": 120,
                        "expression": {
                            "kind": 134299649,
                            "text": "and",
                            "rawText": "and",
                            "flags": 96,
                            "start": 34,
                            "end": 38
                        },
                        "flags": 16,
                        "start": 34,
                        "end": 38
                    },
                    {
                        "kind": 120,
                        "expression": {
                            "kind": 126,
                            "operandToken": {
                                "kind": 65584,
                                "flags": 64,
                                "start": 38,
                                "end": 40
                            },
                            "expression": {
                                "kind": 134299649,
                                "text": "foo",
                                "rawText": "foo",
                                "flags": 96,
                                "start": 40,
                                "end": 43
                            },
                            "flags": 32,
                            "start": 38,
                            "end": 43
                        },
                        "flags": 16,
                        "start": 38,
                        "end": 43
                    }
                ],
                "flags": 16,
                "start": 19,
                "end": 43
            },
            "flags": 16,
            "start": 17,
            "end": 43
        }
    ],
    "isModule": false,
    "source": "try {} finally(x) { while try this and !foo",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 43
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ Expression expected - start: 25, end: 29

```
