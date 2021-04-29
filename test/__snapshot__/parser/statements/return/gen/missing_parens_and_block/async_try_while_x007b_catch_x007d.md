# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: k
> :: test: missing parens and block
> :: case: async try while { catch }
## Input

`````js
return catch async try while { catch }
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 161,
            "returnKeyword": {
                "kind": 37757022,
                "flags": 0,
                "start": 0,
                "end": 6
            },
            "expression": {
                "kind": 16637,
                "text": "",
                "flags": 68,
                "start": 6,
                "end": 6
            },
            "flags": 16,
            "start": 0,
            "end": 0
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
                    "start": 12,
                    "end": 12
                },
                "flags": 16,
                "start": 12,
                "end": 12
            },
            "catchClause": null,
            "finallyKeyword": null,
            "finallyBlock": {
                "kind": 249,
                "block": {
                    "kind": 124,
                    "statements": [],
                    "flags": 16,
                    "start": 18,
                    "end": 18
                },
                "flags": 16,
                "start": 18,
                "end": 18
            },
            "flags": 16,
            "start": 6,
            "end": 18
        },
        {
            "kind": 159,
            "tryKeyword": {
                "kind": 37757027,
                "flags": 0,
                "start": 18,
                "end": 22
            },
            "block": {
                "kind": 249,
                "block": {
                    "kind": 124,
                    "statements": [],
                    "flags": 16,
                    "start": 22,
                    "end": 22
                },
                "flags": 16,
                "start": 22,
                "end": 22
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
                                    "start": 36,
                                    "end": 36
                                },
                                "flags": 16,
                                "start": 36,
                                "end": 36
                            },
                            "catchClause": null,
                            "finallyKeyword": null,
                            "finallyBlock": {
                                "kind": 249,
                                "block": {
                                    "kind": 124,
                                    "statements": [],
                                    "flags": 16,
                                    "start": 38,
                                    "end": 38
                                },
                                "flags": 16,
                                "start": 38,
                                "end": 38
                            },
                            "flags": 16,
                            "start": 30,
                            "end": 38
                        }
                    ],
                    "flags": 16,
                    "start": 30,
                    "end": 38
                },
                "flags": 16,
                "start": 28,
                "end": 38
            },
            "flags": 16,
            "start": 18,
            "end": 38
        }
    ],
    "isModule": false,
    "source": "return catch async try while { catch }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 38
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ A return statement can only be used within a function_body - start: 0, end: 6
✖ Expression expected - start: 6, end: 12
✖ 'try' expected - start: 6, end: 12
✖ 'try' expected - start: 30, end: 36

```
