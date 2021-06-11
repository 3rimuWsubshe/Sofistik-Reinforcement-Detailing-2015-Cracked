# Kataw parser test case

## Input

`````js
type a = (?bj[c] & a | b) => T;
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
                    "start": 25,
                    "end": 28
                },
                "parameters": {
                    "kind": 279,
                    "parameters": [
                        {
                            "kind": 137,
                            "types": [
                                {
                                    "kind": 138,
                                    "types": [
                                        {
                                            "kind": 134217970,
                                            "nullableToken": {
                                                "kind": 134217750,
                                                "flags": 64,
                                                "start": 10,
                                                "end": 11
                                            },
                                            "type": {
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
                                                    "flags": 0,
                                                    "start": 11,
                                                    "end": 13
                                                },
                                                "indexType": {
                                                    "kind": 144,
                                                    "id": {
                                                        "kind": 134299649,
                                                        "text": "c",
                                                        "rawText": "c",
                                                        "flags": 96,
                                                        "start": 14,
                                                        "end": 15
                                                    },
                                                    "typeParameters": null,
                                                    "flags": 0,
                                                    "start": 14,
                                                    "end": 15
                                                },
                                                "flags": 0,
                                                "start": 14,
                                                "end": 18
                                            },
                                            "flags": 0,
                                            "start": 10,
                                            "end": 16
                                        },
                                        {
                                            "kind": 144,
                                            "id": {
                                                "kind": 134299649,
                                                "text": "a",
                                                "rawText": "a",
                                                "flags": 96,
                                                "start": 18,
                                                "end": 20
                                            },
                                            "typeParameters": null,
                                            "flags": 0,
                                            "start": 18,
                                            "end": 20
                                        }
                                    ],
                                    "flags": 0,
                                    "start": 16,
                                    "end": 20
                                },
                                {
                                    "kind": 144,
                                    "id": {
                                        "kind": 134299649,
                                        "text": "b",
                                        "rawText": "b",
                                        "flags": 96,
                                        "start": 22,
                                        "end": 24
                                    },
                                    "typeParameters": null,
                                    "flags": 0,
                                    "start": 22,
                                    "end": 24
                                }
                            ],
                            "flags": 0,
                            "start": 20,
                            "end": 24
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 8,
                    "end": 28
                },
                "returnType": {
                    "kind": 144,
                    "id": {
                        "kind": 134299649,
                        "text": "T",
                        "rawText": "T",
                        "flags": 96,
                        "start": 28,
                        "end": 30
                    },
                    "typeParameters": null,
                    "flags": 0,
                    "start": 28,
                    "end": 30
                },
                "typeParameters": null,
                "flags": 0,
                "start": 8,
                "end": 30
            },
            "flags": 16,
            "start": 0,
            "end": 31
        }
    ],
    "isModule": false,
    "source": "type a = (?bj[c] & a | b) => T;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 31
}
```

### Printed

```javascript


```

### Diagnostics

```javascript
✔ No errors
```
