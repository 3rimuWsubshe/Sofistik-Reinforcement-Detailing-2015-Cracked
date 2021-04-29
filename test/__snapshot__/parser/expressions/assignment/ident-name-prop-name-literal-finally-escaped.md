# Kataw parser test case

## Input

`````js
var y = { \u0066inally: x } = { finally: 42 };
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 155,
            "declareKeyword": null,
            "varKeyword": {
                "kind": 37757002,
                "flags": 0,
                "start": 0,
                "end": 3
            },
            "declarationList": {
                "kind": 156,
                "declarations": [
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 134299649,
                            "text": "y",
                            "rawText": "y",
                            "flags": 96,
                            "start": 3,
                            "end": 5
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": {
                            "kind": 125,
                            "left": {
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
                                                "kind": 134299649,
                                                "text": "x",
                                                "rawText": "x",
                                                "flags": 96,
                                                "start": 23,
                                                "end": 25
                                            },
                                            "right": {
                                                "kind": 134299649,
                                                "text": "finally",
                                                "rawText": "y",
                                                "flags": 96,
                                                "start": 9,
                                                "end": 22
                                            },
                                            "flags": 32,
                                            "start": 9,
                                            "end": 25
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 16400,
                                    "start": 9,
                                    "end": 25
                                },
                                "flags": 32,
                                "start": 7,
                                "end": 27
                            },
                            "operatorToken": {
                                "kind": 4125,
                                "flags": 64,
                                "start": 27,
                                "end": 29
                            },
                            "right": {
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
                                                "kind": 201392130,
                                                "text": 42,
                                                "rawText": "42",
                                                "flags": 96,
                                                "start": 40,
                                                "end": 43
                                            },
                                            "right": {
                                                "kind": 134299649,
                                                "text": "finally",
                                                "rawText": "finally",
                                                "flags": 96,
                                                "start": 31,
                                                "end": 39
                                            },
                                            "flags": 32,
                                            "start": 31,
                                            "end": 43
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 16,
                                    "start": 31,
                                    "end": 43
                                },
                                "flags": 32,
                                "start": 29,
                                "end": 45
                            },
                            "flags": 32,
                            "start": 7,
                            "end": 45
                        },
                        "flags": 16,
                        "start": 3,
                        "end": 45
                    }
                ],
                "flags": 16,
                "start": 3,
                "end": 45
            },
            "flags": 16,
            "start": 0,
            "end": 46
        }
    ],
    "isModule": false,
    "source": "var y = { \\u0066inally: x } = { finally: 42 };",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 46
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✔ No errors
```
