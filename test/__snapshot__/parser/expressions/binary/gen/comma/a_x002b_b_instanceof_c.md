# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: a
> :: test: comma
> :: case: a + b instanceof c
## Input

`````js
x, a + b instanceof c
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
                "kind": 132,
                "expressions": [
                    {
                        "kind": 134299649,
                        "text": "x",
                        "rawText": "x",
                        "flags": 96,
                        "start": 0,
                        "end": 1
                    },
                    {
                        "kind": 198,
                        "left": {
                            "kind": 134299649,
                            "text": "a",
                            "rawText": "a",
                            "flags": 96,
                            "start": 2,
                            "end": 4
                        },
                        "operatorToken": {
                            "kind": 34098,
                            "flags": 64,
                            "start": 4,
                            "end": 6
                        },
                        "right": {
                            "kind": 198,
                            "left": {
                                "kind": 134299649,
                                "text": "b",
                                "rawText": "b",
                                "flags": 96,
                                "start": 6,
                                "end": 8
                            },
                            "operatorToken": {
                                "kind": 4229173,
                                "flags": 64,
                                "start": 8,
                                "end": 19
                            },
                            "right": {
                                "kind": 134299649,
                                "text": "c",
                                "rawText": "c",
                                "flags": 96,
                                "start": 19,
                                "end": 21
                            },
                            "flags": 32,
                            "start": 8,
                            "end": 21
                        },
                        "flags": 32,
                        "start": 2,
                        "end": 21
                    }
                ],
                "flags": 32,
                "start": 0,
                "end": 21
            },
            "flags": 16,
            "start": 0,
            "end": 21
        }
    ],
    "isModule": false,
    "source": "x, a + b instanceof c",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 21
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
