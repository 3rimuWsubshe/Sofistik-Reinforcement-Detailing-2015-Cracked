# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-14
- From: kataw/test/__snapshot__/parser/declarations/function/func-decl-errors/autogen.md
- Path: kataw/test/__snapshot__/parser/declarations/function/func-decl-errors/gen/in_func_expr_body
> :: test: in func expr body
> :: case: do function foo() {} while (0);
## Options

`````js
{}
`````
## Input

`````js
(function() {do function foo() {} while (0);})()
`````
## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 120,
            "expression": {
                "kind": 131,
                "expression": {
                    "kind": 121,
                    "expression": {
                        "kind": 177,
                        "asyncKeyword": null,
                        "functionKeyword": {
                            "kind": 37822554,
                            "flags": 64,
                            "start": 1,
                            "end": 9
                        },
                        "asteriskToken": null,
                        "name": null,
                        "typeParameters": null,
                        "formalParameterList": {
                            "kind": 214,
                            "formalParameters": [],
                            "trailingComma": false,
                            "flags": 32,
                            "start": 10,
                            "end": 10
                        },
                        "contents": {
                            "kind": 216,
                            "functionStatementList": {
                                "kind": 217,
                                "directives": [],
                                "statements": [
                                    {
                                        "kind": 169,
                                        "doKeyword": {
                                            "kind": 4202580,
                                            "flags": 80,
                                            "start": 13,
                                            "end": 15
                                        },
                                        "statement": {
                                            "kind": 176,
                                            "declareKeyword": null,
                                            "asyncKeyword": null,
                                            "functionKeyword": {
                                                "kind": 37822554,
                                                "flags": 64,
                                                "start": 15,
                                                "end": 24
                                            },
                                            "asteriskToken": null,
                                            "name": {
                                                "kind": 134299649,
                                                "text": "foo",
                                                "rawText": "foo",
                                                "flags": 96,
                                                "start": 24,
                                                "end": 28
                                            },
                                            "typeParameters": null,
                                            "formalParameterList": {
                                                "kind": 214,
                                                "formalParameters": [],
                                                "trailingComma": false,
                                                "flags": 32,
                                                "start": 29,
                                                "end": 29
                                            },
                                            "contents": {
                                                "kind": 216,
                                                "functionStatementList": {
                                                    "kind": 217,
                                                    "directives": [],
                                                    "statements": [],
                                                    "flags": 32,
                                                    "start": 32,
                                                    "end": 32
                                                },
                                                "flags": 32,
                                                "start": 30,
                                                "end": 33
                                            },
                                            "returnType": null,
                                            "flags": 16,
                                            "start": 15,
                                            "end": 33
                                        },
                                        "whileKeyword": {
                                            "kind": 37757028,
                                            "flags": 64,
                                            "start": 33,
                                            "end": 39
                                        },
                                        "expression": {
                                            "kind": 201392130,
                                            "text": 0,
                                            "rawText": "0",
                                            "flags": 96,
                                            "start": 41,
                                            "end": 42
                                        },
                                        "flags": 80,
                                        "start": 13,
                                        "end": 44
                                    }
                                ],
                                "flags": 32,
                                "start": 13,
                                "end": 44
                            },
                            "flags": 32,
                            "start": 11,
                            "end": 45
                        },
                        "returnType": null,
                        "flags": 32,
                        "start": 1,
                        "end": 45
                    },
                    "flags": 32,
                    "start": 0,
                    "end": 46
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 47,
                    "end": 47
                },
                "flags": 268435488,
                "start": 0,
                "end": 48
            },
            "flags": 16,
            "start": 0,
            "end": 48
        }
    ],
    "isModule": false,
    "source": "(function() {do function foo() {} while (0);})()",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 48
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Function declarations cannot be used in a single-statement context - start: 15, end: 24

```
