# Kataw parser test case

## Input

`````js
const f = (x?, y?:Object = {}) => {}
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
                "kind": 37757004,
                "flags": 0,
                "start": 0,
                "end": 5
            },
            "binding": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 134299649,
                            "text": "f",
                            "rawText": "f",
                            "flags": 96,
                            "start": 5,
                            "end": 7
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": {
                            "kind": 271,
                            "arrowToken": {
                                "kind": 10,
                                "flags": 0,
                                "start": 30,
                                "end": 33
                            },
                            "typeParameters": null,
                            "parameters": [
                                [
                                    {
                                        "kind": 215,
                                        "ellipsisToken": null,
                                        "binding": {
                                            "kind": 134299649,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 96,
                                            "start": 11,
                                            "end": 12
                                        },
                                        "optionalToken": {
                                            "kind": 134217750,
                                            "flags": 64,
                                            "start": 12,
                                            "end": 13
                                        },
                                        "type": null,
                                        "initializer": null,
                                        "flags": 32,
                                        "start": 9,
                                        "end": 13
                                    },
                                    {
                                        "kind": 215,
                                        "ellipsisToken": null,
                                        "binding": {
                                            "kind": 134299649,
                                            "text": "y",
                                            "rawText": "y",
                                            "flags": 96,
                                            "start": 14,
                                            "end": 16
                                        },
                                        "optionalToken": {
                                            "kind": 134217750,
                                            "flags": 64,
                                            "start": 16,
                                            "end": 17
                                        },
                                        "type": {
                                            "kind": 139,
                                            "type": {
                                                "kind": 144,
                                                "id": {
                                                    "kind": 134299649,
                                                    "text": "Object",
                                                    "rawText": "Object",
                                                    "flags": 96,
                                                    "start": 18,
                                                    "end": 24
                                                },
                                                "typeParameters": null,
                                                "flags": 0,
                                                "start": 18,
                                                "end": 24
                                            },
                                            "flags": 0,
                                            "start": 17,
                                            "end": 24
                                        },
                                        "initializer": {
                                            "kind": 220,
                                            "propertyList": {
                                                "kind": 218,
                                                "properties": [],
                                                "trailingComma": false,
                                                "flags": 16,
                                                "start": 28,
                                                "end": 28
                                            },
                                            "flags": 48,
                                            "start": 26,
                                            "end": 29
                                        },
                                        "flags": 32,
                                        "start": 9,
                                        "end": 29
                                    }
                                ]
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
                                    "start": 35,
                                    "end": 35
                                },
                                "flags": 32,
                                "start": 33,
                                "end": 36
                            },
                            "flags": 32,
                            "start": 9,
                            "end": 36
                        },
                        "flags": 16,
                        "start": 5,
                        "end": 36
                    }
                ],
                "flags": 16777232,
                "start": 5,
                "end": 36
            },
            "flags": 33554448,
            "start": 0,
            "end": 36
        }
    ],
    "isModule": false,
    "source": "const f = (x?, y?:Object = {}) => {}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 36
}
```

### Printed

```javascript

const f = () =>  {};
```

### Diagnostics

```javascript
✔ No errors
```
