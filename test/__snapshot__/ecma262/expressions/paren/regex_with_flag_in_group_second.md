# Kataw parser test case

## Input

`````js
(x, /x/g)
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
                    "kind": 132,
                    "expressions": [
                        {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "start": 1,
                            "end": 2
                        },
                        {
                            "kind": 371,
                            "text": "/x/g",
                            "flags": 96,
                            "start": 3,
                            "end": 8
                        }
                    ],
                    "flags": 32,
                    "start": 0,
                    "end": 8
                },
                "flags": 32,
                "start": 0,
                "end": 9
            },
            "flags": 16,
            "start": 0,
            "end": 9
        }
    ],
    "isModule": false,
    "source": "(x, /x/g)",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 9
}
```

### Printed

```javascript

(x, /x/g);

```

### Diagnostics

```javascript
✔ No errors
```
