# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-06
- From: kataw8/test\__snapshot__/parser/declarations/function/async-generator-errors/autogen.md
- Path: kataw8/test\__snapshot__\parser\declarations\function\async-generator-errors\gen\declaration
> :: test: declaration
> :: case: class C extends await { }
## Input

`````js
async function * gen() {class C extends await { }}

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
            "asyncKeyword": {
                "kind": 82031,
                "flags": 64,
                "start": 0,
                "end": 5
            },
            "functionKeyword": {
                "kind": 37822554,
                "flags": 64,
                "start": 5,
                "end": 14
            },
            "generatorToken": {
                "kind": 67143222,
                "flags": 64,
                "start": 14,
                "end": 16
            },
            "name": {
                "kind": 134299649,
                "text": "gen",
                "rawText": "gen",
                "flags": 96,
                "start": 16,
                "end": 20
            },
            "formalParameters": {
                "kind": 214,
                "formalParameterList": [],
                "trailingComma": false,
                "flags": 32,
                "start": 20,
                "end": 22
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
                                "start": 24,
                                "end": 29
                            },
                            "name": {
                                "kind": 134299649,
                                "text": "C",
                                "rawText": "C",
                                "flags": 96,
                                "start": 29,
                                "end": 31
                            },
                            "typeParameters": null,
                            "tail": {
                                "kind": 277,
                                "classHeritage": {
                                    "kind": 279,
                                    "extendsKeyword": {
                                        "kind": 4194391,
                                        "flags": 80,
                                        "start": 31,
                                        "end": 39
                                    },
                                    "expression": {
                                        "kind": 134299649,
                                        "text": "await",
                                        "rawText": "await",
                                        "flags": 96,
                                        "start": 39,
                                        "end": 45
                                    },
                                    "typeParameter": null,
                                    "flags": 16,
                                    "start": 39,
                                    "end": 45
                                },
                                "body": {
                                    "kind": 262,
                                    "elements": [],
                                    "flags": 32,
                                    "start": 47,
                                    "end": 47
                                },
                                "flags": 31,
                                "start": 32,
                                "end": 49
                            },
                            "flags": 16,
                            "start": 24,
                            "end": 49
                        }
                    ],
                    "flags": 32,
                    "start": 24,
                    "end": 49
                },
                "flags": 32,
                "start": 22,
                "end": 50
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 400,
            "start": 0,
            "end": 50
        }
    ],
    "isModule": false,
    "source": "async function * gen() {class C extends await { }}\n",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 51
}
```

### Printed

```javascript

async function * gen() {
  class C  {}
}
```

### Diagnostics

```javascript
✔ No errors
```
