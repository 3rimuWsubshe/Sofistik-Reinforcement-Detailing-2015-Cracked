# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: return stand alone
> :: case: /false//a
## Input

`````js
return /false//a
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
                "kind": 198,
                "left": {
                    "kind": 221,
                    "text": "/false/",
                    "flags": 96,
                    "start": 6,
                    "end": 14
                },
                "operatorToken": {
                    "kind": 35640,
                    "flags": 64,
                    "start": 14,
                    "end": 15
                },
                "right": {
                    "kind": 134299649,
                    "text": "a",
                    "rawText": "a",
                    "flags": 96,
                    "start": 15,
                    "end": 16
                },
                "flags": 32,
                "start": 6,
                "end": 16
            },
            "flags": 16,
            "start": 0,
            "end": 0
        }
    ],
    "isModule": false,
    "source": "return /false//a",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 16
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ A return statement can only be used within a function_body - start: 0, end: 6

```
