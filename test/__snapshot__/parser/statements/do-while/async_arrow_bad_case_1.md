# Kataw parser test case

## Input

`````js
do async
 () => x; while(y)
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 169,
            "doKeyword": {
                "kind": 4202580,
                "flags": 0,
                "start": 0,
                "end": 2
            },
            "expression": {
                "kind": 134299649,
                "text": "y",
                "rawText": "y",
                "flags": 96,
                "start": 25,
                "end": 26
            },
            "whileKeyword": {
                "kind": 37757028,
                "flags": 0,
                "start": 18,
                "end": 24
            },
            "statement": {
                "kind": 120,
                "expression": {
                    "kind": 271,
                    "arrowToken": {
                        "kind": 10,
                        "flags": 0,
                        "start": 12,
                        "end": 15
                    },
                    "typeParameters": null,
                    "parameters": [],
                    "asyncToken": {
                        "kind": 82031,
                        "flags": 64,
                        "start": 2,
                        "end": 8
                    },
                    "returnType": null,
                    "contents": {
                        "kind": 134299649,
                        "text": "x",
                        "rawText": "x",
                        "flags": 96,
                        "start": 15,
                        "end": 17
                    },
                    "flags": 288,
                    "start": 2,
                    "end": 17
                },
                "flags": 16,
                "start": 2,
                "end": 18
            },
            "flags": 16,
            "start": 0,
            "end": 27
        }
    ],
    "isModule": false,
    "source": "do async\n () => x; while(y)",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 27
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
