# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: d
> :: test: assignment unwrapped
> :: case: v\u006fid
## Input

`````js
v\u006fid = x;
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
                "kind": 125,
                "left": {
                    "kind": 126,
                    "operandToken": {
                        "kind": 138477615,
                        "flags": 16448,
                        "start": 0,
                        "end": 9
                    },
                    "expression": {
                        "kind": 16637,
                        "text": "",
                        "flags": 68,
                        "start": 9,
                        "end": 9
                    },
                    "flags": 32,
                    "start": 0,
                    "end": 9
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 64,
                    "start": 9,
                    "end": 11
                },
                "right": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 96,
                    "start": 11,
                    "end": 13
                },
                "flags": 32,
                "start": 0,
                "end": 13
            },
            "flags": 16,
            "start": 0,
            "end": 14
        }
    ],
    "isModule": false,
    "source": "v\\u006fid = x;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 14
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ Invalid escaped keyword - start: 9, end: 11
✖ Expression expected - start: 9, end: 11
✖ The left-hand side of an assignment expression must be a variable or a property access - start: 9, end: 11

```
