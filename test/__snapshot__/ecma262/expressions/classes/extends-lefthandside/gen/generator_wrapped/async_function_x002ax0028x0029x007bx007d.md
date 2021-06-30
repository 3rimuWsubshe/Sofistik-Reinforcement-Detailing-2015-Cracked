# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-14
- From: kataw/test/__snapshot__/parser/expressions/classes/extends-lefthandside/autogen.md
- Path: kataw/test/__snapshot__/parser/expressions/classes/extends-lefthandside/gen/generator_wrapped
> :: test: generator wrapped
> :: case: async function *(){}
## Options

`````js
{}
`````
## Input

`````js
function *P(){
  class D extends async function *(){} {}
}
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
                "text": "P",
                "rawText": "P",
                "flags": 96,
                "start": 10,
                "end": 11
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [],
                "trailingComma": false,
                "flags": 32,
                "start": 12,
                "end": 12
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
                                "flags": 81,
                                "start": 14,
                                "end": 22
                            },
                            "name": {
                                "kind": 134299649,
                                "text": "D",
                                "rawText": "D",
                                "flags": 96,
                                "start": 22,
                                "end": 24
                            },
                            "typeParameters": null,
                            "tail": {
                                "kind": 277,
                                "classHeritage": {
                                    "kind": 279,
                                    "extendsKeyword": {
                                        "kind": 4194391,
                                        "flags": 80,
                                        "start": 24,
                                        "end": 32
                                    },
                                    "expression": {
                                        "kind": 177,
                                        "asyncKeyword": {
                                            "kind": 82031,
                                            "flags": 64,
                                            "start": 32,
                                            "end": 38
                                        },
                                        "functionKeyword": {
                                            "kind": 37822554,
                                            "flags": 64,
                                            "start": 38,
                                            "end": 47
                                        },
                                        "asteriskToken": {
                                            "kind": 67143222,
                                            "flags": 64,
                                            "start": 47,
                                            "end": 49
                                        },
                                        "name": null,
                                        "typeParameters": null,
                                        "formalParameterList": {
                                            "kind": 214,
                                            "formalParameters": [],
                                            "trailingComma": false,
                                            "flags": 32,
                                            "start": 50,
                                            "end": 50
                                        },
                                        "contents": {
                                            "kind": 216,
                                            "functionStatementList": {
                                                "kind": 217,
                                                "directives": [],
                                                "statements": [],
                                                "flags": 32,
                                                "start": 52,
                                                "end": 52
                                            },
                                            "flags": 32,
                                            "start": 51,
                                            "end": 53
                                        },
                                        "returnType": null,
                                        "flags": 416,
                                        "start": 32,
                                        "end": 53
                                    },
                                    "typeParameter": null,
                                    "flags": 16,
                                    "start": 32,
                                    "end": 53
                                },
                                "body": {
                                    "kind": 303,
                                    "elements": [],
                                    "flags": 32,
                                    "start": 55,
                                    "end": 55
                                },
                                "flags": 24,
                                "start": 32,
                                "end": 56
                            },
                            "flags": 17,
                            "start": 14,
                            "end": 56
                        }
                    ],
                    "flags": 33,
                    "start": 14,
                    "end": 56
                },
                "flags": 32,
                "start": 13,
                "end": 58
            },
            "returnType": null,
            "flags": 272,
            "start": 0,
            "end": 58
        }
    ],
    "isModule": false,
    "source": "function *P(){\n  class D extends async function *(){} {}\n}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 58
}
```

### Printed

```javascript

function* P() {
  class D extends async function* () { } {
  }
}

```

### Diagnostics

```javascript
✔ No errors
```
