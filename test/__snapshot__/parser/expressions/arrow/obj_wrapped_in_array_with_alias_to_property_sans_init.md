# Kataw parser test case

## Input

`````js
([{x: y.z}]) => b
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "arrowToken": {
                    "kind": 10,
                    "flags": 0,
                    "start": 12,
                    "end": 15
                },
                "typeParameters": null,
                "parameters": [
                    {
                        "kind": 119,
                        "elementList": {
                            "kind": 270,
                            "elements": [
                                {
                                    "kind": 220,
                                    "propertyList": {
                                        "kind": 218,
                                        "properties": [
                                            {
                                                "kind": 219,
                                                "generatorToken": null,
                                                "asyncKeyword": null,
                                                "getKeyword": null,
                                                "setKeyword": null,
                                                "left": {
                                                    "kind": 129,
                                                    "member": {
                                                        "kind": 134299649,
                                                        "text": "y",
                                                        "rawText": "y",
                                                        "flags": 96,
                                                        "start": 5,
                                                        "end": 7
                                                    },
                                                    "expression": {
                                                        "kind": 134299649,
                                                        "text": "z",
                                                        "rawText": "z",
                                                        "flags": 96,
                                                        "start": 8,
                                                        "end": 9
                                                    },
                                                    "flags": 32,
                                                    "start": 3,
                                                    "end": 9
                                                },
                                                "right": {
                                                    "kind": 134299649,
                                                    "text": "x",
                                                    "rawText": "x",
                                                    "flags": 96,
                                                    "start": 3,
                                                    "end": 4
                                                },
                                                "flags": 32,
                                                "start": 3,
                                                "end": 9
                                            }
                                        ],
                                        "trailingComma": false,
                                        "flags": 16,
                                        "start": 3,
                                        "end": 9
                                    },
                                    "flags": 32,
                                    "start": 2,
                                    "end": 10
                                }
                            ],
                            "trailingComma": false,
                            "flags": 32,
                            "start": 2,
                            "end": 10
                        },
                        "flags": 32,
                        "start": 1,
                        "end": 11
                    }
                ],
                "asyncToken": null,
                "returnType": null,
                "contents": {
                    "kind": 134299649,
                    "text": "b",
                    "rawText": "b",
                    "flags": 96,
                    "start": 15,
                    "end": 17
                },
                "flags": 34,
                "start": 0,
                "end": 17
            },
            "flags": 16,
            "start": 0,
            "end": 17
        }
    ],
    "isModule": false,
    "source": "([{x: y.z}]) => b",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 17
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ The left hand side of the arrow is not destructible  - start: 12, end: 15

```
