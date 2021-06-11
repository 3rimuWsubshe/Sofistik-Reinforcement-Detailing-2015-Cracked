# Kataw parser test case

## Input

`````js
type a = ([-1] | x | q & (x)) => T;
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
                    "start": 29,
                    "end": 32
                },
                "parameters": {
                    "kind": 279,
                    "parameters": [
                        {
                            "kind": 137,
                            "types": [
                                {
                                    "kind": 147,
                                    "elementTypes": [
                                        {
                                            "kind": 271,
                                            "subtractionToken": {
                                                "kind": 134318643,
                                                "flags": 64,
                                                "start": 11,
                                                "end": 12
                                            },
                                            "value": 1,
                                            "flags": 64,
                                            "start": 11,
                                            "end": 13
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 0,
                                    "start": 10,
                                    "end": 14
                                },
                                {
                                    "kind": 144,
                                    "id": {
                                        "kind": 134299649,
                                        "text": "x",
                                        "rawText": "x",
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
                                    "kind": 138,
                                    "types": [
                                        {
                                            "kind": 144,
                                            "id": {
                                                "kind": 134299649,
                                                "text": "q",
                                                "rawText": "q",
                                                "flags": 96,
                                                "start": 20,
                                                "end": 22
                                            },
                                            "typeParameters": null,
                                            "flags": 0,
                                            "start": 20,
                                            "end": 22
                                        },
                                        {
                                            "kind": 260,
                                            "type": {
                                                "kind": 144,
                                                "id": {
                                                    "kind": 134299649,
                                                    "text": "x",
                                                    "rawText": "x",
                                                    "flags": 96,
                                                    "start": 26,
                                                    "end": 27
                                                },
                                                "typeParameters": null,
                                                "flags": 0,
                                                "start": 24,
                                                "end": 27
                                            },
                                            "flags": 0,
                                            "start": 24,
                                            "end": 28
                                        }
                                    ],
                                    "flags": 0,
                                    "start": 22,
                                    "end": 28
                                }
                            ],
                            "flags": 0,
                            "start": 14,
                            "end": 28
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
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
                        "start": 32,
                        "end": 34
                    },
                    "typeParameters": null,
                    "flags": 0,
                    "start": 32,
                    "end": 34
                },
                "typeParameters": null,
                "flags": 0,
                "start": 8,
                "end": 34
            },
            "flags": 16,
            "start": 0,
            "end": 35
        }
    ],
    "isModule": false,
    "source": "type a = ([-1] | x | q & (x)) => T;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 35
}
```

### Printed

```javascript


```

### Diagnostics

```javascript
✔ No errors
```
