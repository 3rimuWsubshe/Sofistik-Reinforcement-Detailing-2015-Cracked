# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-06
- From: kataw8/test\__snapshot__/parser/declarations/function/async-generator/autogen.md
- Path: kataw8/test\__snapshot__\parser\declarations\function\async-generator\gen\declaration
> :: test: declaration
> :: case: await (yield 10); return 20
## Input

`````js
async function * gen() {await (yield 10); return 20}

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
                                "kind": 208,
                                "awaitKeyword": {
                                    "kind": 82196,
                                    "flags": 64,
                                    "start": 24,
                                    "end": 29
                                },
                                "expression": {
                                    "kind": 121,
                                    "expression": {
                                        "kind": 229,
                                        "yieldKeyword": {
                                            "kind": 8454253,
                                            "flags": 64,
                                            "start": 31,
                                            "end": 36
                                        },
                                        "delegate": false,
                                        "asteriskToken": null,
                                        "expression": {
                                            "kind": 201392130,
                                            "text": 10,
                                            "rawText": "10",
                                            "flags": 96,
                                            "start": 36,
                                            "end": 39
                                        },
                                        "flags": 32,
                                        "start": 31,
                                        "end": 39
                                    },
                                    "flags": 32,
                                    "start": 29,
                                    "end": 40
                                },
                                "flags": 32,
                                "start": 24,
                                "end": 40
                            },
                            "flags": 16,
                            "start": 24,
                            "end": 41
                        },
                        {
                            "kind": 161,
                            "returnKeyword": {
                                "kind": 37757022,
                                "flags": 80,
                                "start": 41,
                                "end": 48
                            },
                            "expression": {
                                "kind": 201392130,
                                "text": 20,
                                "rawText": "20",
                                "flags": 96,
                                "start": 48,
                                "end": 51
                            },
                            "flags": 16,
                            "start": 0,
                            "end": 41
                        }
                    ],
                    "flags": 32,
                    "start": 24,
                    "end": 51
                },
                "flags": 32,
                "start": 22,
                "end": 52
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 400,
            "start": 0,
            "end": 52
        }
    ],
    "isModule": false,
    "source": "async function * gen() {await (yield 10); return 20}\n",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 53
}
```

### Printed

```javascript

async function * gen() {
  await (yield 10);
  return  20;
}
```

### Diagnostics

```javascript
✔ No errors
```
