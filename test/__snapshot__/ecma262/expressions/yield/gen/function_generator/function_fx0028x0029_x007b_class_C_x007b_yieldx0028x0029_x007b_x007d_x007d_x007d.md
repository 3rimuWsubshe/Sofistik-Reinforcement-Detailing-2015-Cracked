# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-14
- From: kataw/test/__snapshot__/parser/expressions/yield/autogen.md
- Path: kataw/test/__snapshot__/parser/expressions/yield/gen/function_generator
> :: test: function generator
> :: case: function f() { class C { yield() { } } }
## Options

`````js
{}
`````
## Input

`````js
function * gen() { function not_gen() { function f() { class C { yield() { } } } }}
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
                                            "asteriskToken": null,
                                            "name": {
                                                "kind": 134299649,
                                                "text": "f",
                                                "rawText": "f",
                                                "flags": 96,
                                                "start": 48,
                                                "end": 50
                                            },
                                            "typeParameters": null,
                                            "formalParameterList": {
                                                "kind": 214,
                                                "formalParameters": [],
                                                "trailingComma": false,
                                                "flags": 32,
                                                "start": 51,
                                                "end": 51
                                            },
                                            "contents": {
                                                "kind": 216,
                                                "functionStatementList": {
                                                    "kind": 217,
                                                    "directives": [],
                                                    "statements": [
                                                        {
                                                            "kind": 178,
                                                            "declareKeyword": null,
                                                            "decorators": null,
                                                            "classKeyword": {
                                                                "kind": 37822544,
                                                                "flags": 80,
                                                                "start": 54,
                                                                "end": 60
                                                            },
                                                            "name": {
                                                                "kind": 134299649,
                                                                "text": "C",
                                                                "rawText": "C",
                                                                "flags": 96,
                                                                "start": 60,
                                                                "end": 62
                                                            },
                                                            "typeParameters": null,
                                                            "tail": {
                                                                "kind": 277,
                                                                "classHeritage": null,
                                                                "body": {
                                                                    "kind": 303,
                                                                    "elements": [
                                                                        {
                                                                            "kind": 278,
                                                                            "declareToken": null,
                                                                            "decorators": null,
                                                                            "staticKeyword": null,
                                                                            "asyncKeyword": null,
                                                                            "setKeyword": null,
                                                                            "getKeyword": null,
                                                                            "asteriskToken": null,
                                                                            "method": {
                                                                                "kind": 209,
                                                                                "name": {
                                                                                    "kind": 134299649,
                                                                                    "text": "yield",
                                                                                    "rawText": "yield",
                                                                                    "flags": 96,
                                                                                    "start": 64,
                                                                                    "end": 70
                                                                                },
                                                                                "typeParameters": null,
                                                                                "formalParameterList": {
                                                                                    "kind": 214,
                                                                                    "formalParameters": [],
                                                                                    "trailingComma": false,
                                                                                    "flags": 0,
                                                                                    "start": 71,
                                                                                    "end": 72
                                                                                },
                                                                                "returnType": null,
                                                                                "contents": {
                                                                                    "kind": 216,
                                                                                    "functionStatementList": {
                                                                                        "kind": 217,
                                                                                        "directives": [],
                                                                                        "statements": [],
                                                                                        "flags": 32,
                                                                                        "start": 74,
                                                                                        "end": 74
                                                                                    },
                                                                                    "flags": 32,
                                                                                    "start": 72,
                                                                                    "end": 76
                                                                                },
                                                                                "flags": 0,
                                                                                "start": 70,
                                                                                "end": 76
                                                                            },
                                                                            "flags": 0,
                                                                            "start": 64,
                                                                            "end": 76
                                                                        }
                                                                    ],
                                                                    "flags": 32,
                                                                    "start": 64,
                                                                    "end": 76
                                                                },
                                                                "flags": 62,
                                                                "start": 32,
                                                                "end": 78
                                                            },
                                                            "flags": 16,
                                                            "start": 54,
                                                            "end": 78
                                                        }
                                                    ],
                                                    "flags": 32,
                                                    "start": 54,
                                                    "end": 78
                                                },
                                                "flags": 32,
                                                "start": 52,
                                                "end": 80
                                            },
                                            "returnType": null,
                                            "flags": 16,
                                            "start": 39,
                                            "end": 80
                                        }
                                    ],
                                    "flags": 32,
                                    "start": 39,
                                    "end": 80
                                },
                                "flags": 32,
                                "start": 37,
                                "end": 82
                            },
                            "returnType": null,
                            "flags": 16,
                            "start": 18,
                            "end": 82
                        }
                    ],
                    "flags": 32,
                    "start": 18,
                    "end": 82
                },
                "flags": 32,
                "start": 16,
                "end": 83
            },
            "returnType": null,
            "flags": 272,
            "start": 0,
            "end": 83
        }
    ],
    "isModule": false,
    "source": "function * gen() { function not_gen() { function f() { class C { yield() { } } } }}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 83
}
```

### Printed

```javascript

function* gen() { function not_gen() { function f() { class C {
  yield() { }
} } } }

```

### Diagnostics

```javascript
✔ No errors
```
