# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-14
- From: kataw/test/__snapshot__/parser/expressions/yield/autogen.md
- Path: kataw/test/__snapshot__/parser/expressions/yield/gen/simple
> :: test: simple
> :: case: async function f(){ await await foo; }
## Options

`````js
{}
`````
## Input

`````js
async function f(){ await await foo; }
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
            "asteriskToken": null,
            "name": {
                "kind": 134299649,
                "text": "f",
                "rawText": "f",
                "flags": 96,
                "start": 14,
                "end": 16
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [],
                "trailingComma": false,
                "flags": 32,
                "start": 17,
                "end": 17
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
                                    "start": 19,
                                    "end": 25
                                },
                                "expression": {
                                    "kind": 208,
                                    "awaitKeyword": {
                                        "kind": 82196,
                                        "flags": 64,
                                        "start": 25,
                                        "end": 31
                                    },
                                    "expression": {
                                        "kind": 134299649,
                                        "text": "foo",
                                        "rawText": "foo",
                                        "flags": 96,
                                        "start": 31,
                                        "end": 35
                                    },
                                    "flags": 32,
                                    "start": 25,
                                    "end": 35
                                },
                                "flags": 32,
                                "start": 19,
                                "end": 35
                            },
                            "flags": 16,
                            "start": 19,
                            "end": 36
                        }
                    ],
                    "flags": 32,
                    "start": 19,
                    "end": 36
                },
                "flags": 32,
                "start": 18,
                "end": 38
            },
            "returnType": null,
            "flags": 144,
            "start": 0,
            "end": 38
        }
    ],
    "isModule": false,
    "source": "async function f(){ await await foo; }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 38
}
```

### Printed

```javascript

async function f() { await await foo; }

```

### Diagnostics

```javascript
✔ No errors
```
