# Kataw parser test case

## Input

`````js
([x?: string, y: number]) =>  {};
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
            "kind": 120,
            "expression": {
                "kind": 271,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "start": 25,
                    "end": 28
                },
                "typeParameters": null,
                "parameters": [
                    {
                        "kind": 119,
                        "elementList": {
                            "kind": 270,
                            "elements": [
                                {
                                    "kind": 244,
                                    "ellipsisToken": null,
                                    "binding": {
                                        "kind": 134299649,
                                        "text": "x",
                                        "rawText": "x",
                                        "flags": 96,
                                        "start": 2,
                                        "end": 3
                                    },
                                    "optionalToken": {
                                        "kind": 134217750,
                                        "flags": 64,
                                        "start": 3,
                                        "end": 4
                                    },
                                    "type": {
                                        "kind": 139,
                                        "type": {
                                            "kind": 134234347,
                                            "flags": 64,
                                            "start": 5,
                                            "end": 12
                                        },
                                        "flags": 0,
                                        "start": 4,
                                        "end": 12
                                    },
                                    "initializer": null,
                                    "flags": 32,
                                    "start": 2,
                                    "end": 12
                                },
                                {
                                    "kind": 244,
                                    "ellipsisToken": null,
                                    "binding": {
                                        "kind": 134299649,
                                        "text": "y",
                                        "rawText": "y",
                                        "flags": 96,
                                        "start": 13,
                                        "end": 15
                                    },
                                    "optionalToken": null,
                                    "type": {
                                        "kind": 139,
                                        "type": {
                                            "kind": 134234345,
                                            "flags": 64,
                                            "start": 16,
                                            "end": 23
                                        },
                                        "flags": 0,
                                        "start": 15,
                                        "end": 23
                                    },
                                    "initializer": null,
                                    "flags": 32,
                                    "start": 13,
                                    "end": 23
                                }
                            ],
                            "trailingComma": false,
                            "flags": 32,
                            "start": 2,
                            "end": 23
                        },
                        "flags": 32,
                        "start": 1,
                        "end": 24
                    }
                ],
                "asyncKeyword": null,
                "returnType": null,
                "contents": {
                    "kind": 216,
                    "functionStatementList": {
                        "kind": 217,
                        "directives": [],
                        "statements": [],
                        "flags": 32,
                        "start": 31,
                        "end": 31
                    },
                    "flags": 32,
                    "start": 28,
                    "end": 32
                },
                "flags": 34,
                "start": 0,
                "end": 32
            },
            "flags": 16,
            "start": 0,
            "end": 33
        }
    ],
    "isModule": false,
    "source": "([x?: string, y: number]) =>  {};",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 33
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ An optional parameter not allowed in an formal parameter list. - start: 4, end: 5

```
