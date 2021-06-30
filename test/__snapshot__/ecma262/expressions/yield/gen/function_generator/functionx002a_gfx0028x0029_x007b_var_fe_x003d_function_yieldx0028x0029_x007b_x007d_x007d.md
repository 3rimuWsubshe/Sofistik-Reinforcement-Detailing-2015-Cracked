# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-14
- From: kataw/test/__snapshot__/parser/expressions/yield/autogen.md
- Path: kataw/test/__snapshot__/parser/expressions/yield/gen/function_generator
> :: test: function generator
> :: case: function* gf() { var fe = function yield() { } }
## Options

`````js
{}
`````
## Input

`````js
function * gen() { function not_gen() { function* gf() { var fe = function yield() { } } }}
`````
## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 64,
                "start": 0,
                "end": 8
            },
            "asteriskToken": {
                "kind": 67143222,
                "flags": 64,
                "start": 8,
                "end": 10
            },
            "name": {
                "kind": 134299649,
                "text": "gen",
                "rawText": "gen",
                "flags": 96,
                "start": 10,
                "end": 14
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [],
                "trailingComma": false,
                "flags": 32,
                "start": 15,
                "end": 15
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
                            "asyncKeyword": null,
                            "functionKeyword": {
                                "kind": 37822554,
                                "flags": 64,
                                "start": 18,
                                "end": 27
                            },
                            "asteriskToken": null,
                            "name": {
                                "kind": 134299649,
                                "text": "not_gen",
                                "rawText": "not_gen",
                                "flags": 96,
                                "start": 27,
                                "end": 35
                            },
                            "typeParameters": null,
                            "formalParameterList": {
                                "kind": 214,
                                "formalParameters": [],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 36,
                                "end": 36
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
                                            "asyncKeyword": null,
                                            "functionKeyword": {
                                                "kind": 37822554,
                                                "flags": 64,
                                                "start": 39,
                                                "end": 48
                                            },
                                            "asteriskToken": {
                                                "kind": 67143222,
                                                "flags": 64,
                                                "start": 48,
                                                "end": 49
                                            },
                                            "name": {
                                                "kind": 134299649,
                                                "text": "gf",
                                                "rawText": "gf",
                                                "flags": 96,
                                                "start": 49,
                                                "end": 52
                                            },
                                            "typeParameters": null,
                                            "formalParameterList": {
                                                "kind": 214,
                                                "formalParameters": [],
                                                "trailingComma": false,
                                                "flags": 32,
                                                "start": 53,
                                                "end": 53
                                            },
                                            "contents": {
                                                "kind": 216,
                                                "functionStatementList": {
                                                    "kind": 217,
                                                    "directives": [],
                                                    "statements": [
                                                        {
                                                            "kind": 155,
                                                            "declareKeyword": null,
                                                            "varKeyword": {
                                                                "kind": 37757002,
                                                                "flags": 80,
                                                                "start": 56,
                                                                "end": 60
                                                            },
                                                            "declarationList": {
                                                                "kind": 156,
                                                                "declarations": [
                                                                    {
                                                                        "kind": 157,
                                                                        "binding": {
                                                                            "kind": 134299649,
                                                                            "text": "fe",
                                                                            "rawText": "fe",
                                                                            "flags": 96,
                                                                            "start": 60,
                                                                            "end": 63
                                                                        },
                                                                        "type": null,
                                                                        "initializer": {
                                                                            "kind": 177,
                                                                            "asyncKeyword": null,
                                                                            "functionKeyword": {
                                                                                "kind": 37822554,
                                                                                "flags": 64,
                                                                                "start": 65,
                                                                                "end": 74
                                                                            },
                                                                            "asteriskToken": null,
                                                                            "name": {
                                                                                "kind": 134299649,
                                                                                "text": "yield",
                                                                                "rawText": "yield",
                                                                                "flags": 96,
                                                                                "start": 74,
                                                                                "end": 80
                                                                            },
                                                                            "typeParameters": null,
                                                                            "formalParameterList": {
                                                                                "kind": 214,
                                                                                "formalParameters": [],
                                                                                "trailingComma": false,
                                                                                "flags": 32,
                                                                                "start": 81,
                                                                                "end": 81
                                                                            },
                                                                            "contents": {
                                                                                "kind": 216,
                                                                                "functionStatementList": {
                                                                                    "kind": 217,
                                                                                    "directives": [],
                                                                                    "statements": [],
                                                                                    "flags": 32,
                                                                                    "start": 84,
                                                                                    "end": 84
                                                                                },
                                                                                "flags": 32,
                                                                                "start": 82,
                                                                                "end": 86
                                                                            },
                                                                            "returnType": null,
                                                                            "flags": 32,
                                                                            "start": 65,
                                                                            "end": 86
                                                                        },
                                                                        "flags": 16,
                                                                        "start": 60,
                                                                        "end": 86
                                                                    }
                                                                ],
                                                                "flags": 16,
                                                                "start": 60,
                                                                "end": 86
                                                            },
                                                            "flags": 16,
                                                            "start": 56,
                                                            "end": 86
                                                        }
                                                    ],
                                                    "flags": 32,
                                                    "start": 56,
                                                    "end": 86
                                                },
                                                "flags": 32,
                                                "start": 54,
                                                "end": 88
                                            },
                                            "returnType": null,
                                            "flags": 272,
                                            "start": 39,
                                            "end": 88
                                        }
                                    ],
                                    "flags": 32,
                                    "start": 39,
                                    "end": 88
                                },
                                "flags": 32,
                                "start": 37,
                                "end": 90
                            },
                            "returnType": null,
                            "flags": 16,
                            "start": 18,
                            "end": 90
                        }
                    ],
                    "flags": 32,
                    "start": 18,
                    "end": 90
                },
                "flags": 32,
                "start": 16,
                "end": 91
            },
            "returnType": null,
            "flags": 272,
            "start": 0,
            "end": 91
        }
    ],
    "isModule": false,
    "source": "function * gen() { function not_gen() { function* gf() { var fe = function yield() { } } }}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 91
}
```

### Printed

```javascript

function* gen() { function not_gen() { function* gf() { var fe = function yield() { }; } } }

```

### Diagnostics

```javascript
✔ No errors
```
