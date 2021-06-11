# Kataw parser test case

## Input

`````js
type a = ([-1] | (x)) => T;
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
                    "start": 21,
                    "end": 24
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
                                    "kind": 260,
                                    "type": {
                                        "kind": 144,
                                        "id": {
                                            "kind": 134299649,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 96,
                                            "start": 18,
                                            "end": 19
                                        },
                                        "typeParameters": null,
                                        "flags": 0,
                                        "start": 16,
                                        "end": 19
                                    },
                                    "flags": 0,
                                    "start": 16,
                                    "end": 20
                                }
                            ],
                            "flags": 0,
                            "start": 14,
                            "end": 20
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 8,
                    "end": 24
                },
                "returnType": {
                    "kind": 144,
                    "id": {
                        "kind": 134299649,
                        "text": "T",
                        "rawText": "T",
                        "flags": 96,
                        "start": 24,
                        "end": 26
                    },
                    "typeParameters": null,
                    "flags": 0,
                    "start": 24,
                    "end": 26
                },
                "typeParameters": null,
                "flags": 0,
                "start": 8,
                "end": 26
            },
            "flags": 16,
            "start": 0,
            "end": 27
        }
    ],
    "isModule": false,
    "source": "type a = ([-1] | (x)) => T;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 27
}
```

### Printed

```javascript


```

### Diagnostics

```javascript
✔ No errors
```
