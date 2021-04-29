# Kataw parser test case

## Input

`````js
x({.9:a, 0x84:b, 0b1:c, 0o27:d, 1e234:e});

x({.9(){}, 0x84(){}, 0b1(){}, 0o27(){}, 1e234(){}});
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
                "kind": 131,
                "expression": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 96,
                    "start": 0,
                    "end": 1
                },
                "argumentList": {
                    "kind": 256,
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
                                            "kind": 134299649,
                                            "text": "a",
                                            "rawText": "a",
                                            "flags": 96,
                                            "start": 6,
                                            "end": 7
                                        },
                                        "right": {
                                            "kind": 201392130,
                                            "text": 0.9,
                                            "rawText": ".9",
                                            "flags": 32864,
                                            "start": 3,
                                            "end": 5
                                        },
                                        "flags": 32,
                                        "start": 3,
                                        "end": 7
                                    },
                                    {
                                        "kind": 219,
                                        "generatorToken": null,
                                        "asyncKeyword": null,
                                        "getKeyword": null,
                                        "setKeyword": null,
                                        "left": {
                                            "kind": 134299649,
                                            "text": "b",
                                            "rawText": "b",
                                            "flags": 96,
                                            "start": 14,
                                            "end": 15
                                        },
                                        "right": {
                                            "kind": 201392130,
                                            "text": 132,
                                            "rawText": "0x84",
                                            "flags": 1048672,
                                            "start": 8,
                                            "end": 13
                                        },
                                        "flags": 32,
                                        "start": 8,
                                        "end": 15
                                    },
                                    {
                                        "kind": 219,
                                        "generatorToken": null,
                                        "asyncKeyword": null,
                                        "getKeyword": null,
                                        "setKeyword": null,
                                        "left": {
                                            "kind": 134299649,
                                            "text": "c",
                                            "rawText": "c",
                                            "flags": 96,
                                            "start": 21,
                                            "end": 22
                                        },
                                        "right": {
                                            "kind": 201392130,
                                            "text": 1,
                                            "rawText": "0b1",
                                            "flags": 524384,
                                            "start": 16,
                                            "end": 20
                                        },
                                        "flags": 32,
                                        "start": 16,
                                        "end": 22
                                    },
                                    {
                                        "kind": 219,
                                        "generatorToken": null,
                                        "asyncKeyword": null,
                                        "getKeyword": null,
                                        "setKeyword": null,
                                        "left": {
                                            "kind": 134299649,
                                            "text": "d",
                                            "rawText": "d",
                                            "flags": 96,
                                            "start": 29,
                                            "end": 30
                                        },
                                        "right": {
                                            "kind": 201392130,
                                            "text": 23,
                                            "rawText": "0o27",
                                            "flags": 262240,
                                            "start": 23,
                                            "end": 28
                                        },
                                        "flags": 32,
                                        "start": 23,
                                        "end": 30
                                    },
                                    {
                                        "kind": 219,
                                        "generatorToken": null,
                                        "asyncKeyword": null,
                                        "getKeyword": null,
                                        "setKeyword": null,
                                        "left": {
                                            "kind": 134299649,
                                            "text": "e",
                                            "rawText": "e",
                                            "flags": 96,
                                            "start": 38,
                                            "end": 39
                                        },
                                        "right": {
                                            "kind": 201392130,
                                            "text": 1e+234,
                                            "rawText": "1e234",
                                            "flags": 96,
                                            "start": 31,
                                            "end": 37
                                        },
                                        "flags": 32,
                                        "start": 31,
                                        "end": 39
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32784,
                                "start": 3,
                                "end": 39
                            },
                            "flags": 32,
                            "start": 2,
                            "end": 40
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 2,
                    "end": 40
                },
                "flags": 32,
                "start": 0,
                "end": 41
            },
            "flags": 16,
            "start": 0,
            "end": 42
        },
        {
            "kind": 120,
            "expression": {
                "kind": 131,
                "expression": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 96,
                    "start": 42,
                    "end": 45
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [
                        {
                            "kind": 220,
                            "propertyList": {
                                "kind": 218,
                                "properties": [
                                    {
                                        "kind": 209,
                                        "name": {
                                            "kind": 201392130,
                                            "text": 0.9,
                                            "rawText": ".9",
                                            "flags": 32864,
                                            "start": 47,
                                            "end": 49
                                        },
                                        "typeParameters": null,
                                        "formalParameters": {
                                            "kind": 214,
                                            "formalParameterList": [],
                                            "trailingComma": false,
                                            "flags": 32,
                                            "start": 50,
                                            "end": 51
                                        },
                                        "type": null,
                                        "contents": {
                                            "kind": 216,
                                            "functionStatementList": {
                                                "kind": 217,
                                                "directives": [],
                                                "statements": [],
                                                "flags": 32,
                                                "start": 52,
                                                "end": 52
                                            },
                                            "flags": 32,
                                            "start": 51,
                                            "end": 53
                                        },
                                        "flags": 32,
                                        "start": 49,
                                        "end": 53
                                    },
                                    {
                                        "kind": 209,
                                        "name": {
                                            "kind": 201392130,
                                            "text": 132,
                                            "rawText": "0x84",
                                            "flags": 1048672,
                                            "start": 54,
                                            "end": 59
                                        },
                                        "typeParameters": null,
                                        "formalParameters": {
                                            "kind": 214,
                                            "formalParameterList": [],
                                            "trailingComma": false,
                                            "flags": 32,
                                            "start": 60,
                                            "end": 61
                                        },
                                        "type": null,
                                        "contents": {
                                            "kind": 216,
                                            "functionStatementList": {
                                                "kind": 217,
                                                "directives": [],
                                                "statements": [],
                                                "flags": 32,
                                                "start": 62,
                                                "end": 62
                                            },
                                            "flags": 32,
                                            "start": 61,
                                            "end": 63
                                        },
                                        "flags": 32,
                                        "start": 59,
                                        "end": 63
                                    },
                                    {
                                        "kind": 209,
                                        "name": {
                                            "kind": 201392130,
                                            "text": 1,
                                            "rawText": "0b1",
                                            "flags": 524384,
                                            "start": 64,
                                            "end": 68
                                        },
                                        "typeParameters": null,
                                        "formalParameters": {
                                            "kind": 214,
                                            "formalParameterList": [],
                                            "trailingComma": false,
                                            "flags": 32,
                                            "start": 69,
                                            "end": 70
                                        },
                                        "type": null,
                                        "contents": {
                                            "kind": 216,
                                            "functionStatementList": {
                                                "kind": 217,
                                                "directives": [],
                                                "statements": [],
                                                "flags": 32,
                                                "start": 71,
                                                "end": 71
                                            },
                                            "flags": 32,
                                            "start": 70,
                                            "end": 72
                                        },
                                        "flags": 32,
                                        "start": 68,
                                        "end": 72
                                    },
                                    {
                                        "kind": 209,
                                        "name": {
                                            "kind": 201392130,
                                            "text": 23,
                                            "rawText": "0o27",
                                            "flags": 262240,
                                            "start": 73,
                                            "end": 78
                                        },
                                        "typeParameters": null,
                                        "formalParameters": {
                                            "kind": 214,
                                            "formalParameterList": [],
                                            "trailingComma": false,
                                            "flags": 32,
                                            "start": 79,
                                            "end": 80
                                        },
                                        "type": null,
                                        "contents": {
                                            "kind": 216,
                                            "functionStatementList": {
                                                "kind": 217,
                                                "directives": [],
                                                "statements": [],
                                                "flags": 32,
                                                "start": 81,
                                                "end": 81
                                            },
                                            "flags": 32,
                                            "start": 80,
                                            "end": 82
                                        },
                                        "flags": 32,
                                        "start": 78,
                                        "end": 82
                                    },
                                    {
                                        "kind": 209,
                                        "name": {
                                            "kind": 201392130,
                                            "text": 1e+234,
                                            "rawText": "1e234",
                                            "flags": 96,
                                            "start": 83,
                                            "end": 89
                                        },
                                        "typeParameters": null,
                                        "formalParameters": {
                                            "kind": 214,
                                            "formalParameterList": [],
                                            "trailingComma": false,
                                            "flags": 32,
                                            "start": 90,
                                            "end": 91
                                        },
                                        "type": null,
                                        "contents": {
                                            "kind": 216,
                                            "functionStatementList": {
                                                "kind": 217,
                                                "directives": [],
                                                "statements": [],
                                                "flags": 32,
                                                "start": 92,
                                                "end": 92
                                            },
                                            "flags": 32,
                                            "start": 91,
                                            "end": 93
                                        },
                                        "flags": 32,
                                        "start": 89,
                                        "end": 93
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32784,
                                "start": 47,
                                "end": 93
                            },
                            "flags": 32,
                            "start": 46,
                            "end": 94
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 46,
                    "end": 94
                },
                "flags": 32,
                "start": 42,
                "end": 95
            },
            "flags": 16,
            "start": 42,
            "end": 96
        }
    ],
    "isModule": false,
    "source": "x({.9:a, 0x84:b, 0b1:c, 0o27:d, 1e234:e});\n\nx({.9(){}, 0x84(){}, 0b1(){}, 0o27(){}, 1e234(){}});",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 96
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
