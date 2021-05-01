# Kataw parser test case

## Input

`````js
eval: x;
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 163,
            "label": {
                "kind": 134299649,
                "text": "eval",
                "rawText": "eval",
                "flags": 96,
                "start": 0,
                "end": 4
            },
            "labels": [
                {
                    "kind": 256,
                    "label": "eval",
                    "iterationStatement": false,
                    "flags": 16,
                    "start": 0,
                    "end": 4
                }
            ],
            "colonToken": {
                "kind": 21,
                "flags": 0,
                "start": 4,
                "end": 5
            },
            "statement": {
                "kind": 120,
                "expression": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 96,
                    "start": 5,
                    "end": 7
                },
                "flags": 16,
                "start": 5,
                "end": 8
            },
            "flags": 16,
            "start": 0,
            "end": 8
        }
    ],
    "isModule": false,
    "source": "eval: x;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 8
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
