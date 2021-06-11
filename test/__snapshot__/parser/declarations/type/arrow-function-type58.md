# Kataw parser test case

## Input

`````js
let a: ([-1] | x | q & (x)) => T;
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
            "kind": 162,
            "lexicalKeyword": {
                "kind": 41951307,
                "flags": 80,
                "start": 0,
                "end": 3
            },
            "binding": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 134299649,
                            "text": "a",
                            "rawText": "a",
                            "flags": 96,
                            "start": 3,
                            "end": 5
                        },
                        "optionalToken": null,
                        "type": {
                            "kind": 139,
                            "type": {
                                "kind": 261,
                                "arrowToken": {
                                    "kind": 10,
                                    "flags": 64,
                                    "start": 27,
                                    "end": 30
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
                                                                "start": 9,
                                                                "end": 10
                                                            },
                                                            "value": 1,
                                                            "flags": 64,
                                                            "start": 9,
                                                            "end": 11
                                                        }
                                                    ],
                                                    "trailingComma": false,
                                                    "flags": 0,
                                                    "start": 8,
                                                    "end": 12
                                                },
                                                {
                                                    "kind": 144,
                                                    "id": {
                                                        "kind": 134299649,
                                                        "text": "x",
                                                        "rawText": "x",
                                                        "flags": 96,
                                                        "start": 14,
                                                        "end": 16
                                                    },
                                                    "typeParameters": null,
                                                    "flags": 0,
                                                    "start": 14,
                                                    "end": 16
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
                                                                "start": 18,
                                                                "end": 20
                                                            },
                                                            "typeParameters": null,
                                                            "flags": 0,
                                                            "start": 18,
                                                            "end": 20
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
                                                                    "start": 24,
                                                                    "end": 25
                                                                },
                                                                "typeParameters": null,
                                                                "flags": 0,
                                                                "start": 22,
                                                                "end": 25
                                                            },
                                                            "flags": 0,
                                                            "start": 22,
                                                            "end": 26
                                                        }
                                                    ],
                                                    "flags": 0,
                                                    "start": 20,
                                                    "end": 26
                                                }
                                            ],
                                            "flags": 0,
                                            "start": 12,
                                            "end": 26
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "start": 6,
                                    "end": 30
                                },
                                "returnType": {
                                    "kind": 144,
                                    "id": {
                                        "kind": 134299649,
                                        "text": "T",
                                        "rawText": "T",
                                        "flags": 96,
                                        "start": 30,
                                        "end": 32
                                    },
                                    "typeParameters": null,
                                    "flags": 0,
                                    "start": 30,
                                    "end": 32
                                },
                                "typeParameters": null,
                                "flags": 0,
                                "start": 6,
                                "end": 32
                            },
                            "flags": 0,
                            "start": 5,
                            "end": 32
                        },
                        "initializer": null,
                        "flags": 16,
                        "start": 3,
                        "end": 32
                    }
                ],
                "flags": 16,
                "start": 3,
                "end": 32
            },
            "flags": 33554448,
            "start": 0,
            "end": 33
        }
    ],
    "isModule": false,
    "source": "let a: ([-1] | x | q & (x)) => T;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 33
}
```

### Printed

```javascript

let a;
```

### Diagnostics

```javascript
✔ No errors
```
