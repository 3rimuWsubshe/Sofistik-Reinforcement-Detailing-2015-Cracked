# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-14
- From: kataw/test/__snapshot__/parser/expressions/await/autogen.md
- Path: kataw/test/__snapshot__/parser/expressions/await/gen/var
> :: test: var
> :: case: let x = function *f(foo = await){}
## Options

`````js
{}
`````
## Input

`````js
var await; var f = (async function() { let x = function *f(foo = await){} });
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
                "flags": 80,
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
                            "text": "await",
                            "rawText": "await",
                            "flags": 96,
                            "start": 3,
                            "end": 9
                        },
                        "type": null,
                        "initializer": null,
                        "flags": 16,
                        "start": 3,
                        "end": 9
                    }
                ],
                "flags": 16,
                "start": 3,
                "end": 9
            },
            "flags": 16,
            "start": 0,
            "end": 10
        },
        {
            "kind": 155,
            "declareKeyword": null,
            "varKeyword": {
                "kind": 37757002,
                "flags": 80,
                "start": 10,
                "end": 14
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
                            "start": 14,
                            "end": 16
                        },
                        "type": null,
                        "initializer": {
                            "kind": 121,
                            "expression": {
                                "kind": 177,
                                "asyncKeyword": {
                                    "kind": 82031,
                                    "flags": 64,
                                    "start": 20,
                                    "end": 25
                                },
                                "functionKeyword": {
                                    "kind": 37822554,
                                    "flags": 64,
                                    "start": 25,
                                    "end": 34
                                },
                                "asteriskToken": null,
                                "name": null,
                                "typeParameters": null,
                                "formalParameterList": {
                                    "kind": 214,
                                    "formalParameters": [],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "start": 35,
                                    "end": 35
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
                                                    "start": 38,
                                                    "end": 42
                                                },
                                                "binding": {
                                                    "kind": 151,
                                                    "bindingList": [
                                                        {
                                                            "kind": 190,
                                                            "binding": {
                                                                "kind": 134299649,
                                                                "text": "x",
                                                                "rawText": "x",
                                                                "flags": 96,
                                                                "start": 42,
                                                                "end": 44
                                                            },
                                                            "type": null,
                                                            "initializer": {
                                                                "kind": 177,
                                                                "asyncKeyword": null,
                                                                "functionKeyword": {
                                                                    "kind": 37822554,
                                                                    "flags": 64,
                                                                    "start": 46,
                                                                    "end": 55
                                                                },
                                                                "asteriskToken": {
                                                                    "kind": 67143222,
                                                                    "flags": 64,
                                                                    "start": 55,
                                                                    "end": 57
                                                                },
                                                                "name": {
                                                                    "kind": 134299649,
                                                                    "text": "f",
                                                                    "rawText": "f",
                                                                    "flags": 96,
                                                                    "start": 57,
                                                                    "end": 58
                                                                },
                                                                "typeParameters": null,
                                                                "formalParameterList": {
                                                                    "kind": 214,
                                                                    "formalParameters": [
                                                                        {
                                                                            "kind": 281,
                                                                            "ellipsisToken": null,
                                                                            "left": {
                                                                                "kind": 134299649,
                                                                                "text": "foo",
                                                                                "rawText": "foo",
                                                                                "flags": 96,
                                                                                "start": 59,
                                                                                "end": 62
                                                                            },
                                                                            "optionalToken": null,
                                                                            "type": null,
                                                                            "right": {
                                                                                "kind": 134299649,
                                                                                "text": "await",
                                                                                "rawText": "await",
                                                                                "flags": 96,
                                                                                "start": 64,
                                                                                "end": 70
                                                                            },
                                                                            "flags": 34,
                                                                            "start": 59,
                                                                            "end": 70
                                                                        }
                                                                    ],
                                                                    "trailingComma": false,
                                                                    "flags": 34,
                                                                    "start": 59,
                                                                    "end": 70
                                                                },
                                                                "contents": {
                                                                    "kind": 216,
                                                                    "functionStatementList": {
                                                                        "kind": 217,
                                                                        "directives": [],
                                                                        "statements": [],
                                                                        "flags": 32,
                                                                        "start": 72,
                                                                        "end": 72
                                                                    },
                                                                    "flags": 32,
                                                                    "start": 71,
                                                                    "end": 73
                                                                },
                                                                "returnType": null,
                                                                "flags": 288,
                                                                "start": 46,
                                                                "end": 73
                                                            },
                                                            "flags": 16,
                                                            "start": 42,
                                                            "end": 73
                                                        }
                                                    ],
                                                    "flags": 16,
                                                    "start": 42,
                                                    "end": 73
                                                },
                                                "flags": 33554448,
                                                "start": 38,
                                                "end": 73
                                            }
                                        ],
                                        "flags": 32,
                                        "start": 38,
                                        "end": 73
                                    },
                                    "flags": 32,
                                    "start": 36,
                                    "end": 75
                                },
                                "returnType": null,
                                "flags": 160,
                                "start": 20,
                                "end": 75
                            },
                            "flags": 32,
                            "start": 18,
                            "end": 76
                        },
                        "flags": 16,
                        "start": 14,
                        "end": 76
                    }
                ],
                "flags": 16,
                "start": 14,
                "end": 76
            },
            "flags": 16,
            "start": 10,
            "end": 77
        }
    ],
    "isModule": false,
    "source": "var await; var f = (async function() { let x = function *f(foo = await){} });",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 77
}
```

### Printed

```javascript

var await;
var f = (async function () { let x = function* f(foo = await) { }; });

```

### Diagnostics

```javascript
✔ No errors
```
