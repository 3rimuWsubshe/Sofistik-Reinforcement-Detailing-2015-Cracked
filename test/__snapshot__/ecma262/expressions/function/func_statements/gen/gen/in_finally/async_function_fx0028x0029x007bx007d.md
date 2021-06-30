# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-14
- From: kataw/test/__snapshot__/parser/expressions/function/func_statements/gen/autogen.md
- Path: kataw/test/__snapshot__/parser/expressions/function/func_statements/gen/gen/in_finally
> :: test: in finally
> :: case: async function f(){}
## Options

`````js
{}
`````
## Input

`````js
try {
} finally {
  async function f(){}
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
            "kind": 159,
            "tryKeyword": {
                "kind": 37757027,
                "flags": 80,
                "start": 0,
                "end": 3
            },
            "block": {
                "kind": 124,
                "block": {
                    "kind": 249,
                    "statements": [],
                    "flags": 17,
                    "start": 5,
                    "end": 5
                },
                "flags": 16,
                "start": 3,
                "end": 7
            },
            "catchClause": null,
            "finallyKeyword": {
                "kind": 37757016,
                "flags": 64,
                "start": 7,
                "end": 15
            },
            "finallyBlock": {
                "kind": 124,
                "block": {
                    "kind": 249,
                    "statements": [
                        {
                            "kind": 176,
                            "declareKeyword": null,
                            "asyncKeyword": {
                                "kind": 82031,
                                "flags": 65,
                                "start": 17,
                                "end": 25
                            },
                            "functionKeyword": {
                                "kind": 37822554,
                                "flags": 64,
                                "start": 25,
                                "end": 34
                            },
                            "asteriskToken": null,
                            "name": {
                                "kind": 134299649,
                                "text": "f",
                                "rawText": "f",
                                "flags": 96,
                                "start": 34,
                                "end": 36
                            },
                            "typeParameters": null,
                            "formalParameterList": {
                                "kind": 214,
                                "formalParameters": [],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 37,
                                "end": 37
                            },
                            "contents": {
                                "kind": 216,
                                "functionStatementList": {
                                    "kind": 217,
                                    "directives": [],
                                    "statements": [],
                                    "flags": 32,
                                    "start": 39,
                                    "end": 39
                                },
                                "flags": 32,
                                "start": 38,
                                "end": 40
                            },
                            "returnType": null,
                            "flags": 144,
                            "start": 17,
                            "end": 40
                        }
                    ],
                    "flags": 17,
                    "start": 17,
                    "end": 40
                },
                "flags": 16,
                "start": 15,
                "end": 42
            },
            "flags": 16,
            "start": 0,
            "end": 42
        }
    ],
    "isModule": false,
    "source": "try {\n} finally {\n  async function f(){}\n}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 42
}
```

### Printed

```javascript

try {
}
finally {
  async function f() { }
}

```

### Diagnostics

```javascript
✔ No errors
```
