# Kataw parser test case

## Input

`````js
var a: number[];
var a: ?number[];
var a: (?number)[];
var a: () => number[];
var a: typeof A[];
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
                                "kind": 136,
                                "type": {
                                    "kind": 134234345,
                                    "flags": 64,
                                    "start": 6,
                                    "end": 13
                                },
                                "flags": 0,
                                "start": 14,
                                "end": 15
                            },
                            "flags": 0,
                            "start": 5,
                            "end": 15
                        },
                        "initializer": null,
                        "flags": 16,
                        "start": 3,
                        "end": 15
                    }
                ],
                "flags": 16,
                "start": 3,
                "end": 15
            },
            "flags": 16,
            "start": 0,
            "end": 16
        },
        {
            "kind": 155,
            "declareKeyword": null,
            "varKeyword": {
                "kind": 37757002,
                "flags": 1,
                "start": 16,
                "end": 20
            },
            "declarationList": {
                "kind": 156,
                "declarations": [
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 134299649,
                            "text": "a",
                            "rawText": "a",
                            "flags": 96,
                            "start": 20,
                            "end": 22
                        },
                        "optionalToken": null,
                        "type": {
                            "kind": 139,
                            "type": {
                                "kind": 134217970,
                                "nullableToken": {
                                    "kind": 134217750,
                                    "flags": 64,
                                    "start": 23,
                                    "end": 25
                                },
                                "type": {
                                    "kind": 136,
                                    "type": {
                                        "kind": 134234345,
                                        "flags": 64,
                                        "start": 25,
                                        "end": 31
                                    },
                                    "flags": 0,
                                    "start": 32,
                                    "end": 33
                                },
                                "flags": 0,
                                "start": 23,
                                "end": 33
                            },
                            "flags": 0,
                            "start": 22,
                            "end": 33
                        },
                        "initializer": null,
                        "flags": 16,
                        "start": 20,
                        "end": 33
                    }
                ],
                "flags": 16,
                "start": 20,
                "end": 33
            },
            "flags": 16,
            "start": 16,
            "end": 34
        },
        {
            "kind": 155,
            "declareKeyword": null,
            "varKeyword": {
                "kind": 37757002,
                "flags": 1,
                "start": 34,
                "end": 38
            },
            "declarationList": {
                "kind": 156,
                "declarations": [
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 134299649,
                            "text": "a",
                            "rawText": "a",
                            "flags": 96,
                            "start": 38,
                            "end": 40
                        },
                        "optionalToken": null,
                        "type": {
                            "kind": 139,
                            "type": {
                                "kind": 136,
                                "type": {
                                    "kind": 260,
                                    "type": {
                                        "kind": 134217970,
                                        "nullableToken": {
                                            "kind": 134217750,
                                            "flags": 64,
                                            "start": 43,
                                            "end": 44
                                        },
                                        "type": {
                                            "kind": 134234345,
                                            "flags": 64,
                                            "start": 44,
                                            "end": 50
                                        },
                                        "flags": 0,
                                        "start": 43,
                                        "end": 50
                                    },
                                    "flags": 0,
                                    "start": 41,
                                    "end": 51
                                },
                                "flags": 0,
                                "start": 52,
                                "end": 53
                            },
                            "flags": 0,
                            "start": 40,
                            "end": 53
                        },
                        "initializer": null,
                        "flags": 16,
                        "start": 38,
                        "end": 53
                    }
                ],
                "flags": 16,
                "start": 38,
                "end": 53
            },
            "flags": 16,
            "start": 34,
            "end": 54
        },
        {
            "kind": 155,
            "declareKeyword": null,
            "varKeyword": {
                "kind": 37757002,
                "flags": 1,
                "start": 54,
                "end": 58
            },
            "declarationList": {
                "kind": 156,
                "declarations": [
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 134299649,
                            "text": "a",
                            "rawText": "a",
                            "flags": 96,
                            "start": 58,
                            "end": 60
                        },
                        "optionalToken": null,
                        "type": {
                            "kind": 139,
                            "type": {
                                "kind": 261,
                                "arrowToken": {
                                    "kind": 10,
                                    "flags": 64,
                                    "start": 64,
                                    "end": 67
                                },
                                "parameters": {
                                    "kind": 208,
                                    "functionTypeParameterList": [],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "start": 63,
                                    "end": 63
                                },
                                "returnType": {
                                    "kind": 136,
                                    "type": {
                                        "kind": 134234345,
                                        "flags": 64,
                                        "start": 67,
                                        "end": 74
                                    },
                                    "flags": 0,
                                    "start": 75,
                                    "end": 76
                                },
                                "typeParameters": null,
                                "flags": 0,
                                "start": 61,
                                "end": 76
                            },
                            "flags": 0,
                            "start": 60,
                            "end": 76
                        },
                        "initializer": null,
                        "flags": 16,
                        "start": 58,
                        "end": 76
                    }
                ],
                "flags": 16,
                "start": 58,
                "end": 76
            },
            "flags": 16,
            "start": 54,
            "end": 77
        },
        {
            "kind": 155,
            "declareKeyword": null,
            "varKeyword": {
                "kind": 37757002,
                "flags": 1,
                "start": 77,
                "end": 81
            },
            "declarationList": {
                "kind": 156,
                "declarations": [
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 134299649,
                            "text": "a",
                            "rawText": "a",
                            "flags": 96,
                            "start": 81,
                            "end": 83
                        },
                        "optionalToken": null,
                        "type": {
                            "kind": 139,
                            "type": {
                                "kind": 136,
                                "type": {
                                    "kind": 134299891,
                                    "typeOfKeyword": {
                                        "kind": 138477613,
                                        "flags": 0,
                                        "start": 84,
                                        "end": 91
                                    },
                                    "type": {
                                        "kind": 144,
                                        "id": {
                                            "kind": 134299649,
                                            "text": "A",
                                            "rawText": "A",
                                            "flags": 96,
                                            "start": 91,
                                            "end": 93
                                        },
                                        "typeParameters": null,
                                        "flags": 0,
                                        "start": 91,
                                        "end": 93
                                    },
                                    "flags": 0,
                                    "start": 84,
                                    "end": 93
                                },
                                "flags": 0,
                                "start": 94,
                                "end": 95
                            },
                            "flags": 0,
                            "start": 83,
                            "end": 95
                        },
                        "initializer": null,
                        "flags": 16,
                        "start": 81,
                        "end": 95
                    }
                ],
                "flags": 16,
                "start": 81,
                "end": 95
            },
            "flags": 16,
            "start": 77,
            "end": 96
        }
    ],
    "isModule": false,
    "source": "var a: number[];\nvar a: ?number[];\nvar a: (?number)[];\nvar a: () => number[];\nvar a: typeof A[];",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 96
}
```

### Printed

```javascript

var a;
var a;
var a;
var a;
var a;
```

### Diagnostics

```javascript
✔ No errors
```
