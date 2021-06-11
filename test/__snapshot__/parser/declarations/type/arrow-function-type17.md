# Kataw parser test case

## Input

`````js
type a = (bj[c], a | b) => T;
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
                    "start": 23,
                    "end": 26
                },
                "parameters": {
                    "kind": 279,
                    "parameters": [
                        {
                            "kind": 149,
                            "ellipsisToken": null,
                            "name": {
                                "kind": 144,
                                "id": {
                                    "kind": 268,
                                    "objectType": {
                                        "kind": 134299649,
                                        "text": "bj",
                                        "rawText": "bj",
                                        "flags": 96,
                                        "start": 10,
                                        "end": 12
                                    },
                                    "indexType": {
                                        "kind": 144,
                                        "id": {
                                            "kind": 134299649,
                                            "text": "c",
                                            "rawText": "c",
                                            "flags": 96,
                                            "start": 13,
                                            "end": 14
                                        },
                                        "typeParameters": null,
                                        "flags": 0,
                                        "start": 13,
                                        "end": 14
                                    },
                                    "flags": 0,
                                    "start": 13,
                                    "end": 16
                                },
                                "typeParameters": null,
                                "flags": 0,
                                "start": 8,
                                "end": 15
                            },
                            "optionalToken": null,
                            "types": null,
                            "flags": 0,
                            "start": 8,
                            "end": 15
                        },
                        {
                            "kind": 149,
                            "ellipsisToken": null,
                            "name": null,
                            "optionalToken": null,
                            "types": {
                                "kind": 137,
                                "types": [
                                    {
                                        "kind": 144,
                                        "id": {
                                            "kind": 134299649,
                                            "text": "a",
                                            "rawText": "a",
                                            "flags": 96,
                                            "start": 16,
                                            "end": 18
                                        },
                                        "typeParameters": null,
                                        "flags": 0,
                                        "start": 16,
                                        "end": 18
                                    },
                                    {
                                        "kind": 144,
                                        "id": {
                                            "kind": 134299649,
                                            "text": "b",
                                            "rawText": "b",
                                            "flags": 96,
                                            "start": 20,
                                            "end": 22
                                        },
                                        "typeParameters": null,
                                        "flags": 0,
                                        "start": 20,
                                        "end": 22
                                    }
                                ],
                                "flags": 0,
                                "start": 18,
                                "end": 22
                            },
                            "flags": 0,
                            "start": 16,
                            "end": 22
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 8,
                    "end": 22
                },
                "returnType": {
                    "kind": 144,
                    "id": {
                        "kind": 134299649,
                        "text": "T",
                        "rawText": "T",
                        "flags": 96,
                        "start": 26,
                        "end": 28
                    },
                    "typeParameters": null,
                    "flags": 0,
                    "start": 26,
                    "end": 28
                },
                "typeParameters": null,
                "flags": 0,
                "start": 8,
                "end": 28
            },
            "flags": 16,
            "start": 0,
            "end": 29
        }
    ],
    "isModule": false,
    "source": "type a = (bj[c], a | b) => T;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 29
}
```

### Printed

```javascript


```

### Diagnostics

```javascript
✔ No errors
```
