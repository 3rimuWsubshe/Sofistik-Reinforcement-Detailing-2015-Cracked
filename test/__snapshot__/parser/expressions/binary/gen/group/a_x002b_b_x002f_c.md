# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: p
> :: test: group
> :: case: a + b / c
## Input

`````js
( a + b / c )
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 198,
                    "left": {
                        "kind": 134299649,
                        "text": "a",
                        "rawText": "a",
                        "flags": 96,
                        "start": 1,
                        "end": 3
                    },
                    "operatorToken": {
                        "kind": 34098,
                        "flags": 64,
                        "start": 3,
                        "end": 5
                    },
                    "right": {
                        "kind": 198,
                        "left": {
                            "kind": 134299649,
                            "text": "b",
                            "rawText": "b",
                            "flags": 96,
                            "start": 5,
                            "end": 7
                        },
                        "operatorToken": {
                            "kind": 35640,
                            "flags": 64,
                            "start": 7,
                            "end": 9
                        },
                        "right": {
                            "kind": 134299649,
                            "text": "c",
                            "rawText": "c",
                            "flags": 96,
                            "start": 9,
                            "end": 11
                        },
                        "flags": 32,
                        "start": 7,
                        "end": 11
                    },
                    "flags": 32,
                    "start": 0,
                    "end": 11
                },
                "flags": 32,
                "start": 0,
                "end": 13
            },
            "flags": 16,
            "start": 0,
            "end": 13
        }
    ],
    "isModule": false,
    "source": "( a + b / c )",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 13
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✔ No errors
```
