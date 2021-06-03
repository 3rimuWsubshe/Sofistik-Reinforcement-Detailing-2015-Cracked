# Kataw parser test case

## Input

`````js
throw x = y, z;
`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 158,
            "throwKeyword": {
                "kind": 37757026,
                "flags": 80,
                "start": 0,
                "end": 5
            },
            "expression": {
                "kind": 132,
                "expressions": [
                    {
                        "kind": 125,
                        "left": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "start": 5,
                            "end": 7
                        },
                        "operatorToken": {
                            "kind": 4125,
                            "flags": 64,
                            "start": 7,
                            "end": 9
                        },
                        "right": {
                            "kind": 134299649,
                            "text": "y",
                            "rawText": "y",
                            "flags": 96,
                            "start": 9,
                            "end": 11
                        },
                        "flags": 32,
                        "start": 5,
                        "end": 11
                    },
                    {
                        "kind": 134299649,
                        "text": "z",
                        "rawText": "z",
                        "flags": 96,
                        "start": 12,
                        "end": 14
                    }
                ],
                "flags": 32,
                "start": 5,
                "end": 14
            },
            "flags": 16,
            "start": 0,
            "end": 15
        }
    ],
    "isModule": false,
    "source": "throw x = y, z;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 15
}
```

### Printed

```javascript

throw  x = y, z;
```

### Diagnostics

```javascript
✔ No errors
```
