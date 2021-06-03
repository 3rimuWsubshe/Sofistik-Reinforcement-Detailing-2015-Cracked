# Kataw parser test case

## Input

`````js
a ? (b = (c) => d) : e => f;
`````

## Options

### Parser Options

`````js
{ allowTypes : true }
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
                "kind": 197,
                "shortCircuit": {
                    "kind": 134299649,
                    "text": "a",
                    "rawText": "a",
                    "flags": 96,
                    "start": 0,
                    "end": 1
                },
                "questionToken": {
                    "kind": 134217750,
                    "flags": 64,
                    "start": 1,
                    "end": 3
                },
                "consequent": {
                    "kind": 121,
                    "expression": {
                        "kind": 125,
                        "left": {
                            "kind": 134299649,
                            "text": "b",
                            "rawText": "b",
                            "flags": 96,
                            "start": 5,
                            "end": 6
                        },
                        "operatorToken": {
                            "kind": 4125,
                            "flags": 64,
                            "start": 6,
                            "end": 8
                        },
                        "right": {
                            "kind": 271,
                            "arrowToken": {
                                "kind": 10,
                                "flags": 64,
                                "start": 12,
                                "end": 15
                            },
                            "typeParameters": null,
                            "parameters": [
                                {
                                    "kind": 134299649,
                                    "text": "c",
                                    "rawText": "c",
                                    "flags": 96,
                                    "start": 10,
                                    "end": 11
                                }
                            ],
                            "asyncKeyword": null,
                            "returnType": null,
                            "contents": {
                                "kind": 134299649,
                                "text": "d",
                                "rawText": "d",
                                "flags": 96,
                                "start": 15,
                                "end": 17
                            },
                            "flags": 32,
                            "start": 8,
                            "end": 17
                        },
                        "flags": 32,
                        "start": 3,
                        "end": 17
                    },
                    "flags": 32,
                    "start": 3,
                    "end": 18
                },
                "colonToken": {
                    "kind": 21,
                    "flags": 64,
                    "start": 18,
                    "end": 20
                },
                "alternate": {
                    "kind": 271,
                    "arrowToken": {
                        "kind": 10,
                        "flags": 64,
                        "start": 22,
                        "end": 25
                    },
                    "typeParameters": null,
                    "parameters": {
                        "kind": 134299649,
                        "text": "e",
                        "rawText": "e",
                        "flags": 96,
                        "start": 20,
                        "end": 22
                    },
                    "asyncKeyword": null,
                    "returnType": null,
                    "contents": {
                        "kind": 134299649,
                        "text": "f",
                        "rawText": "f",
                        "flags": 96,
                        "start": 25,
                        "end": 27
                    },
                    "flags": 32,
                    "start": 20,
                    "end": 27
                },
                "flags": 32,
                "start": 0,
                "end": 27
            },
            "flags": 16,
            "start": 0,
            "end": 28
        }
    ],
    "isModule": false,
    "source": "a ? (b = (c) => d) : e => f;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 28
}
```

### Printed

```javascript

a ? (b = (c) =>  d) : e =>  f;
```

### Diagnostics

```javascript
✔ No errors
```
