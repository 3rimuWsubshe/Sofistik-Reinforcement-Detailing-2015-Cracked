# Kataw parser test case

## Input

`````js
type a = (a[a & b[a]][c][-1][][]) => T;
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
            "kind": 200,
            "declareToken": null,
            "typeToken": {
                "kind": 24775,
                "flags": 64,
                "start": 0,
                "end": 6
            },
            "name": {
                "kind": 134299649,
                "text": "a",
                "rawText": "a",
                "flags": 96,
                "start": 4,
                "end": 6
            },
            "typeParameters": null,
            "type": {
                "kind": 261,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "start": 33,
                    "end": 36
                },
                "parameters": {
                    "kind": 144,
                    "id": {
                        "kind": 136,
                        "type": {
                            "kind": 136,
                            "type": {
                                "kind": 268,
                                "objectType": {
                                    "kind": 268,
                                    "objectType": {
                                        "kind": 268,
                                        "objectType": {
                                            "kind": 134299649,
                                            "text": "a",
                                            "rawText": "a",
                                            "flags": 96,
                                            "start": 10,
                                            "end": 11
                                        },
                                        "indexType": {
                                            "kind": 138,
                                            "types": [
                                                {
                                                    "kind": 144,
                                                    "id": {
                                                        "kind": 134299649,
                                                        "text": "a",
                                                        "rawText": "a",
                                                        "flags": 96,
                                                        "start": 12,
                                                        "end": 13
                                                    },
                                                    "typeParameters": null,
                                                    "flags": 0,
                                                    "start": 12,
                                                    "end": 13
                                                },
                                                {
                                                    "kind": 268,
                                                    "objectType": {
                                                        "kind": 144,
                                                        "id": {
                                                            "kind": 134299649,
                                                            "text": "b",
                                                            "rawText": "b",
                                                            "flags": 96,
                                                            "start": 15,
                                                            "end": 17
                                                        },
                                                        "typeParameters": null,
                                                        "flags": 0,
                                                        "start": 15,
                                                        "end": 17
                                                    },
                                                    "indexType": {
                                                        "kind": 144,
                                                        "id": {
                                                            "kind": 134299649,
                                                            "text": "a",
                                                            "rawText": "a",
                                                            "flags": 96,
                                                            "start": 18,
                                                            "end": 19
                                                        },
                                                        "typeParameters": null,
                                                        "flags": 0,
                                                        "start": 18,
                                                        "end": 19
                                                    },
                                                    "flags": 0,
                                                    "start": 18,
                                                    "end": 21
                                                }
                                            ],
                                            "flags": 0,
                                            "start": 13,
                                            "end": 20
                                        },
                                        "flags": 0,
                                        "start": 12,
                                        "end": 22
                                    },
                                    "indexType": {
                                        "kind": 144,
                                        "id": {
                                            "kind": 134299649,
                                            "text": "c",
                                            "rawText": "c",
                                            "flags": 96,
                                            "start": 22,
                                            "end": 23
                                        },
                                        "typeParameters": null,
                                        "flags": 0,
                                        "start": 22,
                                        "end": 23
                                    },
                                    "flags": 0,
                                    "start": 22,
                                    "end": 25
                                },
                                "indexType": {
                                    "kind": 271,
                                    "subtractionToken": {
                                        "kind": 134318643,
                                        "flags": 64,
                                        "start": 25,
                                        "end": 26
                                    },
                                    "value": 1,
                                    "flags": 64,
                                    "start": 25,
                                    "end": 27
                                },
                                "flags": 0,
                                "start": 25,
                                "end": 29
                            },
                            "flags": 0,
                            "start": 29,
                            "end": 30
                        },
                        "flags": 0,
                        "start": 31,
                        "end": 32
                    },
                    "typeParameters": null,
                    "flags": 0,
                    "start": 8,
                    "end": 32
                },
                "returnType": {
                    "kind": 144,
                    "id": {
                        "kind": 134299649,
                        "text": "T",
                        "rawText": "T",
                        "flags": 96,
                        "start": 36,
                        "end": 38
                    },
                    "typeParameters": null,
                    "flags": 0,
                    "start": 36,
                    "end": 38
                },
                "typeParameters": null,
                "flags": 0,
                "start": 8,
                "end": 38
            },
            "flags": 16,
            "start": 0,
            "end": 39
        }
    ],
    "isModule": false,
    "source": "type a = (a[a & b[a]][c][-1][][]) => T;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 39
}
```

### Printed

```javascript


```

### Diagnostics

```javascript
✔ No errors
```
