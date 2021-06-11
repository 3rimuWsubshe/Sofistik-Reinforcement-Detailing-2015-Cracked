# Kataw parser test case

## Input

`````js
type a = ((x?:string | (x?:string)=> T)=> T) => T;
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
                "kind": 260,
                "type": {
                    "kind": 261,
                    "arrowToken": {
                        "kind": 10,
                        "flags": 64,
                        "start": 44,
                        "end": 47
                    },
                    "parameters": {
                        "kind": 279,
                        "parameters": [
                            {
                                "kind": 261,
                                "arrowToken": {
                                    "kind": 10,
                                    "flags": 64,
                                    "start": 39,
                                    "end": 41
                                },
                                "parameters": {
                                    "kind": 279,
                                    "parameters": [
                                        {
                                            "kind": 149,
                                            "ellipsisToken": null,
                                            "name": {
                                                "kind": 134299649,
                                                "text": "x",
                                                "rawText": "x",
                                                "flags": 96,
                                                "start": 11,
                                                "end": 12
                                            },
                                            "optionalToken": {
                                                "kind": 134217750,
                                                "flags": 64,
                                                "start": 12,
                                                "end": 13
                                            },
                                            "types": {
                                                "kind": 137,
                                                "types": [
                                                    {
                                                        "kind": 134234347,
                                                        "flags": 64,
                                                        "start": 14,
                                                        "end": 20
                                                    },
                                                    {
                                                        "kind": 261,
                                                        "arrowToken": {
                                                            "kind": 10,
                                                            "flags": 64,
                                                            "start": 34,
                                                            "end": 36
                                                        },
                                                        "parameters": {
                                                            "kind": 279,
                                                            "parameters": [
                                                                {
                                                                    "kind": 149,
                                                                    "ellipsisToken": null,
                                                                    "name": {
                                                                        "kind": 134299649,
                                                                        "text": "x",
                                                                        "rawText": "x",
                                                                        "flags": 96,
                                                                        "start": 24,
                                                                        "end": 25
                                                                    },
                                                                    "optionalToken": {
                                                                        "kind": 134217750,
                                                                        "flags": 64,
                                                                        "start": 25,
                                                                        "end": 26
                                                                    },
                                                                    "types": {
                                                                        "kind": 134234347,
                                                                        "flags": 64,
                                                                        "start": 27,
                                                                        "end": 33
                                                                    },
                                                                    "flags": 0,
                                                                    "start": 22,
                                                                    "end": 33
                                                                }
                                                            ],
                                                            "trailingComma": false,
                                                            "flags": 32,
                                                            "start": 22,
                                                            "end": 33
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
                                                        "start": 22,
                                                        "end": 38
                                                    }
                                                ],
                                                "flags": 0,
                                                "start": 20,
                                                "end": 38
                                            },
                                            "flags": 0,
                                            "start": 8,
                                            "end": 38
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "start": 8,
                                    "end": 38
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
                                "start": 8,
                                "end": 43
                            }
                        ],
                        "trailingComma": false,
                        "flags": 32,
                        "start": 8,
                        "end": 47
                    },
                    "returnType": {
                        "kind": 144,
                        "id": {
                            "kind": 134299649,
                            "text": "T",
                            "rawText": "T",
                            "flags": 96,
                            "start": 47,
                            "end": 49
                        },
                        "typeParameters": null,
                        "flags": 0,
                        "start": 47,
                        "end": 49
                    },
                    "typeParameters": null,
                    "flags": 0,
                    "start": 8,
                    "end": 49
                },
                "flags": 0,
                "start": 8,
                "end": 49
            },
            "flags": 16,
            "start": 0,
            "end": 50
        }
    ],
    "isModule": false,
    "source": "type a = ((x?:string | (x?:string)=> T)=> T) => T;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 50
}
```

### Printed

```javascript


```

### Diagnostics

```javascript
✔ No errors
```
