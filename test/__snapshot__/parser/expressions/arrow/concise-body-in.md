# Kataw parser test case

## Input

`````js
for (() => { x in y };;);
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 165,
            "forKeyword": {
                "kind": 37757017,
                "flags": 0,
                "start": 0,
                "end": 3
            },
            "initializer": {
                "kind": 271,
                "arrowToken": {
                    "kind": 10,
                    "flags": 0,
                    "start": 7,
                    "end": 10
                },
                "typeParameters": null,
                "parameters": [],
                "asyncToken": null,
                "returnType": null,
                "contents": {
                    "kind": 216,
                    "functionStatementList": {
                        "kind": 217,
                        "directives": [],
                        "statements": [
                            {
                                "kind": 120,
                                "expression": {
                                    "kind": 198,
                                    "left": {
                                        "kind": 134299649,
                                        "text": "x",
                                        "rawText": "x",
                                        "flags": 96,
                                        "start": 12,
                                        "end": 14
                                    },
                                    "operatorToken": {
                                        "kind": 21006388,
                                        "flags": 64,
                                        "start": 14,
                                        "end": 17
                                    },
                                    "right": {
                                        "kind": 134299649,
                                        "text": "y",
                                        "rawText": "y",
                                        "flags": 96,
                                        "start": 17,
                                        "end": 19
                                    },
                                    "flags": 32,
                                    "start": 12,
                                    "end": 19
                                },
                                "flags": 16,
                                "start": 12,
                                "end": 19
                            }
                        ],
                        "flags": 32,
                        "start": 12,
                        "end": 19
                    },
                    "flags": 32,
                    "start": 10,
                    "end": 21
                },
                "flags": 32,
                "start": 5,
                "end": 21
            },
            "condition": null,
            "incrementor": null,
            "statement": {
                "kind": 168,
                "flags": 16,
                "start": 24,
                "end": 25
            },
            "flags": 16,
            "start": 0,
            "end": 25
        }
    ],
    "isModule": false,
    "source": "for (() => { x in y };;);",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 25
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
