# Kataw parser test case

## Input

`````js
type a = ((q, x)=> T) => T;
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
            "assignToken": {
                "kind": 4125,
                "flags": 64,
                "start": 6,
                "end": 8
            },
            "type": {
                "kind": 261,
                "arrowTypeParameterList": {
                    "kind": 10,
                    "flags": 64,
                    "start": 21,
                    "end": 24
                },
                "arrowToken": {
                    "kind": 279,
                    "parameters": [
                        {
                            "kind": 261,
                            "arrowTypeParameterList": {
                                "kind": 10,
                                "flags": 64,
                                "start": 16,
                                "end": 18
                            },
                            "arrowToken": {
                                "kind": 279,
                                "parameters": [
                                    {
                                        "kind": 279,
                                        "parameters": [
                                            {
                                                "kind": 149,
                                                "ellipsisToken": null,
                                                "name": {
                                                    "kind": 144,
                                                    "id": {
                                                        "kind": 134299649,
                                                        "text": "q",
                                                        "rawText": "q",
                                                        "flags": 96,
                                                        "start": 11,
                                                        "end": 12
                                                    },
                                                    "typeParameters": null,
                                                    "flags": 2097152,
                                                    "start": 8,
                                                    "end": 12
                                                },
                                                "optionalToken": null,
                                                "types": null,
                                                "flags": 2097152,
                                                "start": 8,
                                                "end": 12
                                            },
                                            {
                                                "kind": 284,
                                                "ellipsisToken": null,
                                                "name": null,
                                                "optionalToken": null,
                                                "types": {
                                                    "kind": 144,
                                                    "id": {
                                                        "kind": 134299649,
                                                        "text": "x",
                                                        "rawText": "x",
                                                        "flags": 96,
                                                        "start": 13,
                                                        "end": 15
                                                    },
                                                    "typeParameters": null,
                                                    "flags": 2097152,
                                                    "start": 13,
                                                    "end": 15
                                                },
                                                "flags": 2097152,
                                                "start": 13,
                                                "end": 15
                                            }
                                        ],
                                        "trailingComma": false,
                                        "flags": 2097152,
                                        "start": 8,
                                        "end": 15
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 2097152,
                                "start": 8,
                                "end": 18
                            },
                            "returnType": {
                                "kind": 144,
                                "id": {
                                    "kind": 134299649,
                                    "text": "T",
                                    "rawText": "T",
                                    "flags": 96,
                                    "start": 18,
                                    "end": 20
                                },
                                "typeParameters": null,
                                "flags": 2097152,
                                "start": 18,
                                "end": 20
                            },
                            "typeParameters": null,
                            "flags": 2097152,
                            "start": 8,
                            "end": 20
                        }
                    ],
                    "trailingComma": false,
                    "flags": 2097152,
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
                    "flags": 2097152,
                    "start": 24,
                    "end": 26
                },
                "typeParameters": null,
                "flags": 2097152,
                "start": 8,
                "end": 26
            },
            "flags": 2097152,
            "start": 0,
            "end": 27
        }
    ],
    "isModule": false,
    "source": "type a = ((q, x)=> T) => T;",
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
