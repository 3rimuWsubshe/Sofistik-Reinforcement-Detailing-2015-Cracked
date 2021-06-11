# Kataw parser test case

## Input

`````js
type a = (...x?: string & foo | (...x?: string & foo | bar) => T) => T;
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
                    "start": 65,
                    "end": 68
                },
                "parameters": {
                    "kind": 208,
                    "parameters": [
                        {
                            "kind": 149,
                            "ellipsisToken": {
                                "kind": 524302,
                                "flags": 64,
                                "start": 10,
                                "end": 13
                            },
                            "name": {
                                "kind": 134299649,
                                "text": "x",
                                "rawText": "x",
                                "flags": 96,
                                "start": 13,
                                "end": 14
                            },
                            "optionalToken": {
                                "kind": 134217750,
                                "flags": 64,
                                "start": 14,
                                "end": 15
                            },
                            "types": {
                                "kind": 137,
                                "types": [
                                    {
                                        "kind": 138,
                                        "types": [
                                            {
                                                "kind": 134234347,
                                                "flags": 64,
                                                "start": 16,
                                                "end": 23
                                            },
                                            {
                                                "kind": 144,
                                                "id": {
                                                    "kind": 134299649,
                                                    "text": "foo",
                                                    "rawText": "foo",
                                                    "flags": 96,
                                                    "start": 25,
                                                    "end": 29
                                                },
                                                "typeParameters": null,
                                                "flags": 0,
                                                "start": 25,
                                                "end": 29
                                            }
                                        ],
                                        "flags": 0,
                                        "start": 23,
                                        "end": 29
                                    },
                                    {
                                        "kind": 261,
                                        "arrowToken": {
                                            "kind": 10,
                                            "flags": 64,
                                            "start": 59,
                                            "end": 62
                                        },
                                        "parameters": {
                                            "kind": 208,
                                            "parameters": [
                                                {
                                                    "kind": 149,
                                                    "ellipsisToken": {
                                                        "kind": 524302,
                                                        "flags": 64,
                                                        "start": 33,
                                                        "end": 36
                                                    },
                                                    "name": {
                                                        "kind": 134299649,
                                                        "text": "x",
                                                        "rawText": "x",
                                                        "flags": 96,
                                                        "start": 36,
                                                        "end": 37
                                                    },
                                                    "optionalToken": {
                                                        "kind": 134217750,
                                                        "flags": 64,
                                                        "start": 37,
                                                        "end": 38
                                                    },
                                                    "types": {
                                                        "kind": 137,
                                                        "types": [
                                                            {
                                                                "kind": 138,
                                                                "types": [
                                                                    {
                                                                        "kind": 134234347,
                                                                        "flags": 64,
                                                                        "start": 39,
                                                                        "end": 46
                                                                    },
                                                                    {
                                                                        "kind": 144,
                                                                        "id": {
                                                                            "kind": 134299649,
                                                                            "text": "foo",
                                                                            "rawText": "foo",
                                                                            "flags": 96,
                                                                            "start": 48,
                                                                            "end": 52
                                                                        },
                                                                        "typeParameters": null,
                                                                        "flags": 0,
                                                                        "start": 48,
                                                                        "end": 52
                                                                    }
                                                                ],
                                                                "flags": 0,
                                                                "start": 46,
                                                                "end": 52
                                                            },
                                                            {
                                                                "kind": 144,
                                                                "id": {
                                                                    "kind": 134299649,
                                                                    "text": "bar",
                                                                    "rawText": "bar",
                                                                    "flags": 96,
                                                                    "start": 54,
                                                                    "end": 58
                                                                },
                                                                "typeParameters": null,
                                                                "flags": 0,
                                                                "start": 54,
                                                                "end": 58
                                                            }
                                                        ],
                                                        "flags": 0,
                                                        "start": 52,
                                                        "end": 58
                                                    },
                                                    "flags": 0,
                                                    "start": 33,
                                                    "end": 58
                                                }
                                            ],
                                            "trailingComma": false,
                                            "flags": 32,
                                            "start": 33,
                                            "end": 58
                                        },
                                        "returnType": {
                                            "kind": 144,
                                            "id": {
                                                "kind": 134299649,
                                                "text": "T",
                                                "rawText": "T",
                                                "flags": 96,
                                                "start": 62,
                                                "end": 64
                                            },
                                            "typeParameters": null,
                                            "flags": 0,
                                            "start": 62,
                                            "end": 64
                                        },
                                        "typeParameters": null,
                                        "flags": 0,
                                        "start": 31,
                                        "end": 64
                                    }
                                ],
                                "flags": 0,
                                "start": 29,
                                "end": 64
                            },
                            "flags": 0,
                            "start": 10,
                            "end": 64
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 10,
                    "end": 64
                },
                "returnType": {
                    "kind": 144,
                    "id": {
                        "kind": 134299649,
                        "text": "T",
                        "rawText": "T",
                        "flags": 96,
                        "start": 68,
                        "end": 70
                    },
                    "typeParameters": null,
                    "flags": 0,
                    "start": 68,
                    "end": 70
                },
                "typeParameters": null,
                "flags": 0,
                "start": 8,
                "end": 70
            },
            "flags": 16,
            "start": 0,
            "end": 71
        }
    ],
    "isModule": false,
    "source": "type a = (...x?: string & foo | (...x?: string & foo | bar) => T) => T;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 71
}
```

### Printed

```javascript


```

### Diagnostics

```javascript
✔ No errors
```
