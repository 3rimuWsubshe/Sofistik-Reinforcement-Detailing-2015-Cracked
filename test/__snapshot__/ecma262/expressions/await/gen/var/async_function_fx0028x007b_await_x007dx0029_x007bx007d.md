# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-14
- From: kataw/test/__snapshot__/parser/expressions/await/autogen.md
- Path: kataw/test/__snapshot__/parser/expressions/await/gen/var
> :: test: var
> :: case: async function f({ await }) {}
## Options

`````js
{}
`````
## Input

`````js
var await; var f = (async function() { async function f({ await }) {} });
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
                                                "kind": 176,
                                                "declareKeyword": null,
                                                "asyncKeyword": {
                                                    "kind": 82031,
                                                    "flags": 64,
                                                    "start": 38,
                                                    "end": 44
                                                },
                                                "functionKeyword": {
                                                    "kind": 37822554,
                                                    "flags": 64,
                                                    "start": 44,
                                                    "end": 53
                                                },
                                                "asteriskToken": null,
                                                "name": {
                                                    "kind": 134299649,
                                                    "text": "f",
                                                    "rawText": "f",
                                                    "flags": 96,
                                                    "start": 53,
                                                    "end": 55
                                                },
                                                "typeParameters": null,
                                                "formalParameterList": {
                                                    "kind": 214,
                                                    "formalParameters": [
                                                        {
                                                            "kind": 212,
                                                            "propertyList": {
                                                                "kind": 213,
                                                                "properties": [
                                                                    {
                                                                        "kind": 134299649,
                                                                        "text": "await",
                                                                        "rawText": "await",
                                                                        "flags": 96,
                                                                        "start": 57,
                                                                        "end": 63
                                                                    }
                                                                ],
                                                                "trailingComma": false,
                                                                "flags": 32,
                                                                "start": 57,
                                                                "end": 63
                                                            },
                                                            "flags": 32,
                                                            "start": 56,
                                                            "end": 65
                                                        }
                                                    ],
                                                    "trailingComma": false,
                                                    "flags": 32,
                                                    "start": 56,
                                                    "end": 65
                                                },
                                                "contents": {
                                                    "kind": 216,
                                                    "functionStatementList": {
                                                        "kind": 217,
                                                        "directives": [],
                                                        "statements": [],
                                                        "flags": 32,
                                                        "start": 68,
                                                        "end": 68
                                                    },
                                                    "flags": 32,
                                                    "start": 66,
                                                    "end": 69
                                                },
                                                "returnType": null,
                                                "flags": 144,
                                                "start": 38,
                                                "end": 69
                                            }
                                        ],
                                        "flags": 32,
                                        "start": 38,
                                        "end": 69
                                    },
                                    "flags": 32,
                                    "start": 36,
                                    "end": 71
                                },
                                "returnType": null,
                                "flags": 160,
                                "start": 20,
                                "end": 71
                            },
                            "flags": 32,
                            "start": 18,
                            "end": 72
                        },
                        "flags": 16,
                        "start": 14,
                        "end": 72
                    }
                ],
                "flags": 16,
                "start": 14,
                "end": 72
            },
            "flags": 16,
            "start": 10,
            "end": 73
        }
    ],
    "isModule": false,
    "source": "var await; var f = (async function() { async function f({ await }) {} });",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 73
}
```

### Printed

```javascript

var await;
var f = (async function () { async function f({
    await
  }) { } });

```

### Diagnostics

```javascript
✔ No errors
```
