# Kataw parser test case

## Input

`````js
wrap({*123(){}});
`````

## Output

### CST

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
                    "text": "wrap",
                    "rawText": "wrap",
                    "flags": 96,
                    "start": 0,
                    "end": 4
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
                                        "kind": 351,
                                        "asyncKeyword": null,
                                        "asteriskToken": {
                                            "kind": 67143222,
                                            "flags": 64,
                                            "start": 6,
                                            "end": 7
                                        },
                                        "getKeyword": null,
                                        "setKeyword": null,
                                        "method": {
                                            "kind": 209,
                                            "name": {
                                                "kind": 201392130,
                                                "text": 123,
                                                "rawText": "123",
                                                "flags": 96,
                                                "start": 7,
                                                "end": 10
                                            },
                                            "typeParameters": null,
                                            "formalParameterList": {
                                                "kind": 214,
                                                "formalParameters": [],
                                                "trailingComma": false,
                                                "flags": 160,
                                                "start": 11,
                                                "end": 12
                                            },
                                            "returnType": null,
                                            "contents": {
                                                "kind": 216,
                                                "functionStatementList": {
                                                    "kind": 217,
                                                    "directives": [],
                                                    "statements": [],
                                                    "flags": 32,
                                                    "start": 13,
                                                    "end": 13
                                                },
                                                "flags": 32,
                                                "start": 12,
                                                "end": 14
                                            },
                                            "flags": 160,
                                            "start": 10,
                                            "end": 14
                                        },
                                        "flags": 32,
                                        "start": 6,
                                        "end": 14
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 16,
                                "start": 6,
                                "end": 14
                            },
                            "flags": 48,
                            "start": 5,
                            "end": 15
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 5,
                    "end": 15
                },
                "flags": 268435488,
                "start": 0,
                "end": 16
            },
            "flags": 16,
            "start": 0,
            "end": 17
        }
    ],
    "isModule": false,
    "source": "wrap({*123(){}});",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 17
}
```

### Printed

```javascript

wrap({ * 123() { } });

```

### Diagnostics

```javascript
✔ No errors
```
