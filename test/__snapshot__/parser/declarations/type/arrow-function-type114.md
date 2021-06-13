# Kataw parser test case

## Input

`````js
type a = ((bj[[c]] & d) => T);

type a = (bj[[c]] & d) => T;

`````

## Options


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
            "assignToken": {
                "kind": 4125,
                "flags": 64,
                "start": 6,
                "end": 8
            },
            "type": {
                "kind": 260,
                "type": {
                    "kind": 261,
                    "arrowTypeParameterList": {
                        "kind": 10,
                        "flags": 64,
                        "start": 23,
                        "end": 26
                    },
                    "arrowToken": {
                        "kind": 279,
                        "parameters": [
                            {
                                "kind": 138,
                                "types": [
                                    {
                                        "kind": 268,
                                        "objectType": {
                                            "kind": 144,
                                            "id": {
                                                "kind": 134299649,
                                                "text": "bj",
                                                "rawText": "bj",
                                                "flags": 96,
                                                "start": 11,
                                                "end": 13
                                            },
                                            "typeParameters": null,
                                            "flags": 2097152,
                                            "start": 8,
                                            "end": 13
                                        },
                                        "indexType": {
                                            "kind": 147,
                                            "elementTypes": [
                                                {
                                                    "kind": 144,
                                                    "id": {
                                                        "kind": 134299649,
                                                        "text": "c",
                                                        "rawText": "c",
                                                        "flags": 96,
                                                        "start": 15,
                                                        "end": 16
                                                    },
                                                    "typeParameters": null,
                                                    "flags": 2097152,
                                                    "start": 15,
                                                    "end": 16
                                                }
                                            ],
                                            "trailingComma": false,
                                            "flags": 2097152,
                                            "start": 14,
                                            "end": 17
                                        },
                                        "flags": 2097152,
                                        "start": 14,
                                        "end": 20
                                    },
                                    {
                                        "kind": 144,
                                        "id": {
                                            "kind": 134299649,
                                            "text": "d",
                                            "rawText": "d",
                                            "flags": 96,
                                            "start": 20,
                                            "end": 22
                                        },
                                        "typeParameters": null,
                                        "flags": 2097152,
                                        "start": 20,
                                        "end": 22
                                    }
                                ],
                                "flags": 2097152,
                                "start": 18,
                                "end": 22
                            }
                        ],
                        "trailingComma": false,
                        "flags": 2097152,
                        "start": 8,
                        "end": 26
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
                        "flags": 2097152,
                        "start": 26,
                        "end": 28
                    },
                    "typeParameters": null,
                    "flags": 2097152,
                    "start": 8,
                    "end": 28
                },
                "flags": 2097152,
                "start": 8,
                "end": 29
            },
            "flags": 2097152,
            "start": 0,
            "end": 30
        },
        {
            "kind": 200,
            "declareToken": null,
            "typeToken": {
                "kind": 24775,
                "flags": 64,
                "start": 30,
                "end": 38
            },
            "name": {
                "kind": 134299649,
                "text": "a",
                "rawText": "a",
                "flags": 96,
                "start": 36,
                "end": 38
            },
            "typeParameters": null,
            "assignToken": {
                "kind": 4125,
                "flags": 64,
                "start": 38,
                "end": 40
            },
            "type": {
                "kind": 261,
                "arrowTypeParameterList": {
                    "kind": 10,
                    "flags": 64,
                    "start": 54,
                    "end": 57
                },
                "arrowToken": {
                    "kind": 138,
                    "types": [
                        {
                            "kind": 268,
                            "objectType": {
                                "kind": 144,
                                "id": {
                                    "kind": 134299649,
                                    "text": "bj",
                                    "rawText": "bj",
                                    "flags": 96,
                                    "start": 42,
                                    "end": 44
                                },
                                "typeParameters": null,
                                "flags": 2097152,
                                "start": 40,
                                "end": 44
                            },
                            "indexType": {
                                "kind": 147,
                                "elementTypes": [
                                    {
                                        "kind": 144,
                                        "id": {
                                            "kind": 134299649,
                                            "text": "c",
                                            "rawText": "c",
                                            "flags": 96,
                                            "start": 46,
                                            "end": 47
                                        },
                                        "typeParameters": null,
                                        "flags": 2097152,
                                        "start": 46,
                                        "end": 47
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 2097152,
                                "start": 45,
                                "end": 48
                            },
                            "flags": 2097152,
                            "start": 45,
                            "end": 51
                        },
                        {
                            "kind": 144,
                            "id": {
                                "kind": 134299649,
                                "text": "d",
                                "rawText": "d",
                                "flags": 96,
                                "start": 51,
                                "end": 53
                            },
                            "typeParameters": null,
                            "flags": 2097152,
                            "start": 51,
                            "end": 53
                        }
                    ],
                    "flags": 2097152,
                    "start": 49,
                    "end": 53
                },
                "returnType": {
                    "kind": 144,
                    "id": {
                        "kind": 134299649,
                        "text": "T",
                        "rawText": "T",
                        "flags": 96,
                        "start": 57,
                        "end": 59
                    },
                    "typeParameters": null,
                    "flags": 2097152,
                    "start": 57,
                    "end": 59
                },
                "typeParameters": null,
                "flags": 2097152,
                "start": 40,
                "end": 59
            },
            "flags": 2097153,
            "start": 30,
            "end": 60
        }
    ],
    "isModule": false,
    "source": "type a = ((bj[[c]] & d) => T);\n\ntype a = (bj[[c]] & d) => T;\n",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 61
}
```

### Printed

```javascript



```

### Diagnostics

```javascript
✔ No errors
```
