# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: y
> :: test: switch with invalid array
> :: case: false
## Input

`````js
switch [catch] false
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 160,
            "switchKeyword": {
                "kind": 37757024,
                "flags": 0,
                "start": 0,
                "end": 6
            },
            "expression": {
                "kind": 119,
                "elementList": {
                    "kind": 270,
                    "elements": [],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 8,
                    "end": 8
                },
                "flags": 32,
                "start": 6,
                "end": 8
            },
            "caseBlock": {
                "kind": 152,
                "clauses": [],
                "flags": 16,
                "start": 8,
                "end": 8
            },
            "flags": 16,
            "start": 0,
            "end": 8
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
                    "start": 13,
                    "end": 13
                },
                "flags": 16,
                "start": 13,
                "end": 13
            },
            "catchClause": null,
            "finallyKeyword": null,
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
            "start": 8,
            "end": 14
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134,
                "text": false,
                "flags": 96,
                "start": 14,
                "end": 20
            },
            "flags": 16,
            "start": 14,
            "end": 20
        }
    ],
    "isModule": false,
    "source": "switch [catch] false",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 20
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ 'try' expected - start: 8, end: 13

```
