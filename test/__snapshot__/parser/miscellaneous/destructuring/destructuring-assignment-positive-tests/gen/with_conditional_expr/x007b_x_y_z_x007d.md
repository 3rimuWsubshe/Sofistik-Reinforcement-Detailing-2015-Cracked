# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-06
- From: kataw8/test\__snapshot__/parser/miscellaneous/destructuring/destructuring-assignment-positive-tests/autogen.md
- Path: kataw8/test\__snapshot__\parser\miscellaneous\destructuring\destructuring-assignment-positive-tests\gen\with_conditional_expr
> :: test: with conditional expr
> :: case: { x, y, z }
## Input

`````js
'use strict'; var x, y, z; m(['a']) ? { x, y, z } = {} : rhs
`````
## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [
        {
            "kind": 201392131,
            "text": "use strict",
            "rawText": "'use strict'",
            "flags": 4194400,
            "start": 0,
            "end": 12
        }
    ],
    "statements": [
        {
            "kind": 155,
            "declareKeyword": null,
            "varKeyword": {
                "kind": 37757002,
                "flags": 80,
                "start": 13,
                "end": 17
            },
            "declarationList": {
                "kind": 156,
                "declarations": [
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "start": 17,
                            "end": 19
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": null,
                        "flags": 16,
                        "start": 17,
                        "end": 19
                    },
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 134299649,
                            "text": "y",
                            "rawText": "y",
                            "flags": 96,
                            "start": 20,
                            "end": 22
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": null,
                        "flags": 16,
                        "start": 20,
                        "end": 22
                    },
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 134299649,
                            "text": "z",
                            "rawText": "z",
                            "flags": 96,
                            "start": 23,
                            "end": 25
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": null,
                        "flags": 16,
                        "start": 23,
                        "end": 25
                    }
                ],
                "flags": 16,
                "start": 17,
                "end": 25
            },
            "flags": 16,
            "start": 13,
            "end": 26
        },
        {
            "kind": 120,
            "expression": {
                "kind": 197,
                "shortCircuit": {
                    "kind": 131,
                    "expression": {
                        "kind": 134299649,
                        "text": "m",
                        "rawText": "m",
                        "flags": 96,
                        "start": 26,
                        "end": 28
                    },
                    "argumentList": {
                        "kind": 256,
                        "elements": [
                            {
                                "kind": 119,
                                "elementList": {
                                    "kind": 270,
                                    "elements": [
                                        {
                                            "kind": 201392131,
                                            "text": "a",
                                            "rawText": "'a'",
                                            "flags": 4194400,
                                            "start": 30,
                                            "end": 33
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 4194336,
                                    "start": 30,
                                    "end": 33
                                },
                                "flags": 32,
                                "start": 29,
                                "end": 34
                            }
                        ],
                        "trailingComma": false,
                        "flags": 32,
                        "start": 29,
                        "end": 34
                    },
                    "flags": 268435488,
                    "start": 26,
                    "end": 35
                },
                "questionToken": {
                    "kind": 134217750,
                    "flags": 64,
                    "start": 35,
                    "end": 37
                },
                "consequent": {
                    "kind": 125,
                    "left": {
                        "kind": 220,
                        "propertyList": {
                            "kind": 218,
                            "properties": [
                                {
                                    "kind": 134299649,
                                    "text": "x",
                                    "rawText": "x",
                                    "flags": 96,
                                    "start": 39,
                                    "end": 41
                                },
                                {
                                    "kind": 134299649,
                                    "text": "y",
                                    "rawText": "y",
                                    "flags": 96,
                                    "start": 42,
                                    "end": 44
                                },
                                {
                                    "kind": 134299649,
                                    "text": "z",
                                    "rawText": "z",
                                    "flags": 96,
                                    "start": 45,
                                    "end": 47
                                }
                            ],
                            "trailingComma": false,
                            "flags": 16,
                            "start": 39,
                            "end": 47
                        },
                        "flags": 48,
                        "start": 37,
                        "end": 49
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "flags": 64,
                        "start": 49,
                        "end": 51
                    },
                    "right": {
                        "kind": 220,
                        "propertyList": {
                            "kind": 218,
                            "properties": [],
                            "trailingComma": false,
                            "flags": 16,
                            "start": 53,
                            "end": 53
                        },
                        "flags": 48,
                        "start": 51,
                        "end": 54
                    },
                    "flags": 32,
                    "start": 37,
                    "end": 54
                },
                "colonToken": {
                    "kind": 21,
                    "flags": 64,
                    "start": 54,
                    "end": 56
                },
                "alternate": {
                    "kind": 134299649,
                    "text": "rhs",
                    "rawText": "rhs",
                    "flags": 96,
                    "start": 56,
                    "end": 60
                },
                "flags": 32,
                "start": 26,
                "end": 60
            },
            "flags": 16,
            "start": 26,
            "end": 60
        }
    ],
    "isModule": false,
    "source": "'use strict'; var x, y, z; m(['a']) ? { x, y, z } = {} : rhs",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 60
}
```

### Printed

```javascript

var x, y, z;
m(["'a'"]) ? { x, y, z } = {} : rhs;
```

### Diagnostics

```javascript
✔ No errors
```
