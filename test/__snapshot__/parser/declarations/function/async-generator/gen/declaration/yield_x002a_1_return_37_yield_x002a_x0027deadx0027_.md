# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-06
- From: kataw8/test\__snapshot__/parser/declarations/function/async-generator/autogen.md
- Path: kataw8/test\__snapshot__\parser\declarations\function\async-generator\gen\declaration
> :: test: declaration
> :: case: yield * 1; return 37; yield * 'dead';
## Input

`````js
async function * gen() {yield * 1; return 37; yield * 'dead';}

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
                                "kind": 229,
                                "yieldKeyword": {
                                    "kind": 8454253,
                                    "flags": 64,
                                    "start": 24,
                                    "end": 29
                                },
                                "delegate": true,
                                "asteriskToken": {
                                    "kind": 67143222,
                                    "flags": 64,
                                    "start": 29,
                                    "end": 31
                                },
                                "expression": {
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
                        },
                        {
                            "kind": 161,
                            "returnKeyword": {
                                "kind": 37757022,
                                "flags": 80,
                                "start": 34,
                                "end": 41
                            },
                            "expression": {
                                "kind": 201392130,
                                "text": 37,
                                "rawText": "37",
                                "flags": 96,
                                "start": 41,
                                "end": 44
                            },
                            "flags": 16,
                            "start": 0,
                            "end": 34
                        },
                        {
                            "kind": 120,
                            "expression": {
                                "kind": 229,
                                "yieldKeyword": {
                                    "kind": 8454253,
                                    "flags": 64,
                                    "start": 45,
                                    "end": 51
                                },
                                "delegate": true,
                                "asteriskToken": {
                                    "kind": 67143222,
                                    "flags": 64,
                                    "start": 51,
                                    "end": 53
                                },
                                "expression": {
                                    "kind": 201392131,
                                    "text": "dead",
                                    "rawText": "'dead'",
                                    "flags": 4194400,
                                    "start": 53,
                                    "end": 60
                                },
                                "flags": 32,
                                "start": 45,
                                "end": 60
                            },
                            "flags": 16,
                            "start": 45,
                            "end": 61
                        }
                    ],
                    "flags": 32,
                    "start": 24,
                    "end": 61
                },
                "flags": 32,
                "start": 22,
                "end": 62
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 400,
            "start": 0,
            "end": 62
        }
    ],
    "isModule": false,
    "source": "async function * gen() {yield * 1; return 37; yield * 'dead';}\n",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 63
}
```

### Printed

```javascript

async function * gen() {
  yield * 1;
  return  37;
  yield * "'dead'";
}
```

### Diagnostics

```javascript
✔ No errors
```
