# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-06
- From: kataw8/test\__snapshot__/parser/declarations/function/async-generator-errors/autogen.md
- Path: kataw8/test\__snapshot__\parser\declarations\function\async-generator-errors\gen\declaration
> :: test: declaration
> :: case: await = 1;
## Input

`````js
async function * gen() {await = 1;}

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
                            "kind": 120,
                            "expression": {
                                "kind": 125,
                                "left": {
                                    "kind": 208,
                                    "awaitKeyword": {
                                        "kind": 82196,
                                        "flags": 64,
                                        "start": 24,
                                        "end": 29
                                    },
                                    "expression": {
                                        "kind": 16637,
                                        "text": "",
                                        "flags": 64,
                                        "start": 29,
                                        "end": 29
                                    },
                                    "flags": 32,
                                    "start": 24,
                                    "end": 29
                                },
                                "operatorToken": {
                                    "kind": 4125,
                                    "flags": 64,
                                    "start": 29,
                                    "end": 31
                                },
                                "right": {
                                    "kind": 201392130,
                                    "text": 1,
                                    "rawText": "1",
                                    "flags": 96,
                                    "start": 31,
                                    "end": 33
                                },
                                "flags": 32,
                                "start": 24,
                                "end": 33
                            },
                            "flags": 16,
                            "start": 24,
                            "end": 34
                        }
                    ],
                    "flags": 32,
                    "start": 24,
                    "end": 34
                },
                "flags": 32,
                "start": 22,
                "end": 35
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 400,
            "start": 0,
            "end": 35
        }
    ],
    "isModule": false,
    "source": "async function * gen() {await = 1;}\n",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 36
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Identifier expected - start: 29, end: 31
✖ The left-hand side of an assignment expression must be a variable or a property access - start: 29, end: 31

```
