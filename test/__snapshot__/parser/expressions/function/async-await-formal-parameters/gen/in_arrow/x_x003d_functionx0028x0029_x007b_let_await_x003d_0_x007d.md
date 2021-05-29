# Auto-generated test cases ( Kataw )
- Regenerated: 2021-05-29
- From: kataw7/test\__snapshot__/parser/expressions/function/async-await-formal-parameters/autogen.md
- Path: kataw7/test\__snapshot__\parser\expressions\function\async-await-formal-parameters\gen\in_arrow
> :: test: in arrow
> :: case: x = function() { let await = 0; }
## Input

`````js
'use strict'; var f = async(x = function() { let await = 0; }) => {}
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
                            "text": "f",
                            "rawText": "f",
                            "flags": 96,
                            "start": 17,
                            "end": 19
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": {
                            "kind": 271,
                            "arrowToken": {
                                "kind": 10,
                                "flags": 64,
                                "start": 62,
                                "end": 65
                            },
                            "typeParameters": null,
                            "parameters": [
                                {
                                    "kind": 125,
                                    "left": {
                                        "kind": 134299649,
                                        "text": "x",
                                        "rawText": "x",
                                        "flags": 96,
                                        "start": 28,
                                        "end": 29
                                    },
                                    "operatorToken": {
                                        "kind": 4125,
                                        "flags": 64,
                                        "start": 29,
                                        "end": 31
                                    },
                                    "right": {
                                        "kind": 177,
                                        "asyncKeyword": null,
                                        "functionKeyword": {
                                            "kind": 37822554,
                                            "flags": 64,
                                            "start": 31,
                                            "end": 40
                                        },
                                        "generatorToken": null,
                                        "name": null,
                                        "formalParameters": {
                                            "kind": 214,
                                            "formalParameterList": [],
                                            "trailingComma": false,
                                            "flags": 32,
                                            "start": 40,
                                            "end": 42
                                        },
                                        "contents": {
                                            "kind": 216,
                                            "functionStatementList": {
                                                "kind": 217,
                                                "directives": [],
                                                "statements": [
                                                    {
                                                        "kind": 162,
                                                        "lexicalKeyword": {
                                                            "kind": 41951307,
                                                            "flags": 80,
                                                            "start": 44,
                                                            "end": 48
                                                        },
                                                        "binding": {
                                                            "kind": 151,
                                                            "bindingList": [
                                                                {
                                                                    "kind": 190,
                                                                    "binding": {
                                                                        "kind": 134299649,
                                                                        "text": "await",
                                                                        "rawText": "await",
                                                                        "flags": 96,
                                                                        "start": 48,
                                                                        "end": 54
                                                                    },
                                                                    "optionalToken": null,
                                                                    "type": null,
                                                                    "initializer": {
                                                                        "kind": 201392130,
                                                                        "text": 0,
                                                                        "rawText": "0",
                                                                        "flags": 96,
                                                                        "start": 56,
                                                                        "end": 58
                                                                    },
                                                                    "flags": 16,
                                                                    "start": 48,
                                                                    "end": 58
                                                                }
                                                            ],
                                                            "flags": 16,
                                                            "start": 48,
                                                            "end": 58
                                                        },
                                                        "flags": 33554448,
                                                        "start": 44,
                                                        "end": 59
                                                    }
                                                ],
                                                "flags": 32,
                                                "start": 44,
                                                "end": 59
                                            },
                                            "flags": 32,
                                            "start": 42,
                                            "end": 61
                                        },
                                        "typeParameters": null,
                                        "returnType": null,
                                        "flags": 32,
                                        "start": 31,
                                        "end": 61
                                    },
                                    "flags": 32,
                                    "start": 28,
                                    "end": 61
                                }
                            ],
                            "asyncKeyword": {
                                "kind": 82031,
                                "flags": 64,
                                "start": 21,
                                "end": 27
                            },
                            "returnType": null,
                            "contents": {
                                "kind": 216,
                                "functionStatementList": {
                                    "kind": 217,
                                    "directives": [],
                                    "statements": [],
                                    "flags": 32,
                                    "start": 67,
                                    "end": 67
                                },
                                "flags": 32,
                                "start": 65,
                                "end": 68
                            },
                            "flags": 290,
                            "start": 21,
                            "end": 68
                        },
                        "flags": 16,
                        "start": 17,
                        "end": 68
                    }
                ],
                "flags": 16,
                "start": 17,
                "end": 68
            },
            "flags": 16,
            "start": 13,
            "end": 68
        }
    ],
    "isModule": false,
    "source": "'use strict'; var f = async(x = function() { let await = 0; }) => {}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 68
}
```

### Printed

```javascript

var f = async (x = function () {
  let await = 0;
}) =>  {};
```

### Diagnostics

```javascript
✔ No errors
```
