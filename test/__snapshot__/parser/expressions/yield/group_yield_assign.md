# Kataw parser test case

## Input

`````js
(x=(yield)=y)
`````

## Output

### CST

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
                    "kind": 125,
                    "left": {
                        "kind": 134299649,
                        "text": "x",
                        "rawText": "x",
                        "flags": 96,
                        "start": 1,
                        "end": 2
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "flags": 64,
                        "start": 2,
                        "end": 3
                    },
                    "right": {
                        "kind": 125,
                        "left": {
                            "kind": 121,
                            "expression": {
                                "kind": 134299649,
                                "text": "yield",
                                "rawText": "yield",
                                "flags": 96,
                                "start": 4,
                                "end": 9
                            },
                            "flags": 32,
                            "start": 3,
                            "end": 10
                        },
                        "operatorToken": {
                            "kind": 4125,
                            "flags": 64,
                            "start": 10,
                            "end": 11
                        },
                        "right": {
                            "kind": 134299649,
                            "text": "y",
                            "rawText": "y",
                            "flags": 96,
                            "start": 11,
                            "end": 12
                        },
                        "flags": 32,
                        "start": 3,
                        "end": 12
                    },
                    "flags": 32,
                    "start": 0,
                    "end": 12
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
    "source": "(x=(yield)=y)",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 13
}
```

### Printed

```javascript

(x = (yield) = y);
```

### Diagnostics

```javascript
✔ No errors
```
