# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: k
> :: test: missing parens and block
> :: case: /false//a
## Input

`````js
if else /false//a
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 164,
            "ifKeyword": {
                "kind": 37757019,
                "flags": 0,
                "start": 0,
                "end": 2
            },
            "expression": {
                "kind": 16637,
                "text": "",
                "flags": 68,
                "start": 2,
                "end": 2
            },
            "consequent": {
                "kind": 120,
                "expression": {
                    "kind": 16637,
                    "text": "",
                    "flags": 68,
                    "start": 2,
                    "end": 2
                },
                "flags": 16,
                "start": 2,
                "end": 2
            },
            "elseKeyword": {
                "kind": 4194389,
                "flags": 64,
                "start": 2,
                "end": 7
            },
            "alternate": {
                "kind": 120,
                "expression": {
                    "kind": 198,
                    "left": {
                        "kind": 221,
                        "text": "/false/",
                        "flags": 96,
                        "start": 7,
                        "end": 15
                    },
                    "operatorToken": {
                        "kind": 35640,
                        "flags": 64,
                        "start": 15,
                        "end": 16
                    },
                    "right": {
                        "kind": 134299649,
                        "text": "a",
                        "rawText": "a",
                        "flags": 96,
                        "start": 16,
                        "end": 17
                    },
                    "flags": 32,
                    "start": 7,
                    "end": 17
                },
                "flags": 16,
                "start": 7,
                "end": 17
            },
            "flags": 16,
            "start": 0,
            "end": 17
        }
    ],
    "isModule": false,
    "source": "if else /false//a",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 17
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ Expression expected - start: 2, end: 7
✖ Expression expected - start: 2, end: 7

```
