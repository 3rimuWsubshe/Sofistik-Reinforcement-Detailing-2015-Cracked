# Kataw parser test case

## Input

`````js
type X = $Call<(<T>(T) => T) & (<T>(T) => T), A | B>;
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
                "text": "X",
                "rawText": "X",
                "flags": 96,
                "start": 4,
                "end": 6
            },
            "typeParameters": null,
            "type": {
                "kind": 144,
                "id": {
                    "kind": 134299649,
                    "text": "$Call",
                    "rawText": "$Call",
                    "flags": 96,
                    "start": 8,
                    "end": 14
                },
                "typeParameters": {
                    "kind": 266,
                    "parameters": [
                        {
                            "kind": 267,
                            "type": {
                                "kind": 138,
                                "types": [
                                    {
                                        "kind": 260,
                                        "type": {
                                            "kind": 261,
                                            "arrowToken": null,
                                            "parameters": {
                                                "kind": 208,
                                                "parameters": [],
                                                "trailingComma": false,
                                                "flags": 32,
                                                "start": 19,
                                                "end": 19
                                            },
                                            "returnType": {
                                                "kind": 261,
                                                "arrowToken": {
                                                    "kind": 10,
                                                    "flags": 64,
                                                    "start": 22,
                                                    "end": 25
                                                },
                                                "parameters": {
                                                    "kind": 144,
                                                    "id": {
                                                        "kind": 134299649,
                                                        "text": "T",
                                                        "rawText": "T",
                                                        "flags": 96,
                                                        "start": 20,
                                                        "end": 21
                                                    },
                                                    "typeParameters": null,
                                                    "flags": 0,
                                                    "start": 19,
                                                    "end": 21
                                                },
                                                "returnType": {
                                                    "kind": 144,
                                                    "id": {
                                                        "kind": 134299649,
                                                        "text": "T",
                                                        "rawText": "T",
                                                        "flags": 96,
                                                        "start": 25,
                                                        "end": 27
                                                    },
                                                    "typeParameters": null,
                                                    "flags": 0,
                                                    "start": 25,
                                                    "end": 27
                                                },
                                                "typeParameters": null,
                                                "flags": 0,
                                                "start": 19,
                                                "end": 27
                                            },
                                            "typeParameters": {
                                                "kind": 265,
                                                "typeParameters": [
                                                    {
                                                        "kind": 146,
                                                        "name": {
                                                            "kind": 134299649,
                                                            "text": "T",
                                                            "rawText": "T",
                                                            "flags": 96,
                                                            "start": 17,
                                                            "end": 18
                                                        },
                                                        "type": null,
                                                        "defaultType": null,
                                                        "flags": 0,
                                                        "start": 17,
                                                        "end": 18
                                                    }
                                                ],
                                                "flags": 0,
                                                "start": 16,
                                                "end": 19
                                            },
                                            "flags": 0,
                                            "start": 16,
                                            "end": 27
                                        },
                                        "flags": 0,
                                        "start": 15,
                                        "end": 28
                                    },
                                    {
                                        "kind": 260,
                                        "type": {
                                            "kind": 261,
                                            "arrowToken": null,
                                            "parameters": {
                                                "kind": 208,
                                                "parameters": [],
                                                "trailingComma": false,
                                                "flags": 32,
                                                "start": 35,
                                                "end": 35
                                            },
                                            "returnType": {
                                                "kind": 261,
                                                "arrowToken": {
                                                    "kind": 10,
                                                    "flags": 64,
                                                    "start": 38,
                                                    "end": 41
                                                },
                                                "parameters": {
                                                    "kind": 144,
                                                    "id": {
                                                        "kind": 134299649,
                                                        "text": "T",
                                                        "rawText": "T",
                                                        "flags": 96,
                                                        "start": 36,
                                                        "end": 37
                                                    },
                                                    "typeParameters": null,
                                                    "flags": 0,
                                                    "start": 35,
                                                    "end": 37
                                                },
                                                "returnType": {
                                                    "kind": 144,
                                                    "id": {
                                                        "kind": 134299649,
                                                        "text": "T",
                                                        "rawText": "T",
                                                        "flags": 96,
                                                        "start": 41,
                                                        "end": 43
                                                    },
                                                    "typeParameters": null,
                                                    "flags": 0,
                                                    "start": 41,
                                                    "end": 43
                                                },
                                                "typeParameters": null,
                                                "flags": 0,
                                                "start": 35,
                                                "end": 43
                                            },
                                            "typeParameters": {
                                                "kind": 265,
                                                "typeParameters": [
                                                    {
                                                        "kind": 146,
                                                        "name": {
                                                            "kind": 134299649,
                                                            "text": "T",
                                                            "rawText": "T",
                                                            "flags": 96,
                                                            "start": 33,
                                                            "end": 34
                                                        },
                                                        "type": null,
                                                        "defaultType": null,
                                                        "flags": 0,
                                                        "start": 33,
                                                        "end": 34
                                                    }
                                                ],
                                                "flags": 0,
                                                "start": 32,
                                                "end": 35
                                            },
                                            "flags": 0,
                                            "start": 32,
                                            "end": 43
                                        },
                                        "flags": 0,
                                        "start": 30,
                                        "end": 44
                                    }
                                ],
                                "flags": 0,
                                "start": 28,
                                "end": 44
                            },
                            "flags": 0,
                            "start": 15,
                            "end": 44
                        },
                        {
                            "kind": 267,
                            "type": {
                                "kind": 137,
                                "types": [
                                    {
                                        "kind": 144,
                                        "id": {
                                            "kind": 134299649,
                                            "text": "A",
                                            "rawText": "A",
                                            "flags": 96,
                                            "start": 45,
                                            "end": 47
                                        },
                                        "typeParameters": null,
                                        "flags": 0,
                                        "start": 45,
                                        "end": 47
                                    },
                                    {
                                        "kind": 144,
                                        "id": {
                                            "kind": 134299649,
                                            "text": "B",
                                            "rawText": "B",
                                            "flags": 96,
                                            "start": 49,
                                            "end": 51
                                        },
                                        "typeParameters": null,
                                        "flags": 0,
                                        "start": 49,
                                        "end": 51
                                    }
                                ],
                                "flags": 0,
                                "start": 47,
                                "end": 51
                            },
                            "flags": 0,
                            "start": 45,
                            "end": 51
                        }
                    ],
                    "flags": 0,
                    "start": 14,
                    "end": 52
                },
                "flags": 0,
                "start": 8,
                "end": 52
            },
            "flags": 16,
            "start": 0,
            "end": 53
        }
    ],
    "isModule": false,
    "source": "type X = $Call<(<T>(T) => T) & (<T>(T) => T), A | B>;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 53
}
```

### Printed

```javascript


```

### Diagnostics

```javascript
✔ No errors
```
