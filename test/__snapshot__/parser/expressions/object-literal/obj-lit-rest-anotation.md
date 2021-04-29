# Kataw parser test case

## Input

`````js
((...rest: Array<number>) => rest)
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
                    "kind": 121,
                    "expression": {
                        "kind": 132,
                        "flags": 32,
                        "start": 1,
                        "end": 9
                    },
                    "flags": 32,
                    "start": 1,
                    "end": 9
                },
                "flags": 32,
                "start": 0,
                "end": 9
            },
            "flags": 16,
            "start": 0,
            "end": 9
        },
        {
            "kind": 120,
            "expression": {
                "kind": 198,
                "left": {
                    "kind": 198,
                    "left": {
                        "kind": 134299649,
                        "text": "Array",
                        "rawText": "Array",
                        "flags": 96,
                        "start": 10,
                        "end": 16
                    },
                    "operatorToken": {
                        "kind": 536971330,
                        "flags": 64,
                        "start": 16,
                        "end": 17
                    },
                    "right": {
                        "kind": 134299649,
                        "text": "number",
                        "rawText": "number",
                        "flags": 96,
                        "start": 17,
                        "end": 23
                    },
                    "flags": 32,
                    "start": 10,
                    "end": 23
                },
                "operatorToken": {
                    "kind": 34883,
                    "flags": 64,
                    "start": 23,
                    "end": 24
                },
                "right": {
                    "kind": 16637,
                    "text": "",
                    "flags": 68,
                    "start": 24,
                    "end": 24
                },
                "flags": 32,
                "start": 10,
                "end": 24
            },
            "flags": 16,
            "start": 10,
            "end": 24
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "rest",
                "rawText": "rest",
                "flags": 96,
                "start": 28,
                "end": 33
            },
            "flags": 16,
            "start": 28,
            "end": 33
        }
    ],
    "isModule": false,
    "source": "((...rest: Array<number>) => rest)",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 34
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ Statement expected - start: 9, end: 10
✖ Expression expected - start: 24, end: 25
✖ Statement expected - start: 24, end: 25
✖ Statement expected - start: 25, end: 28
✖ Statement expected - start: 33, end: 34

```
