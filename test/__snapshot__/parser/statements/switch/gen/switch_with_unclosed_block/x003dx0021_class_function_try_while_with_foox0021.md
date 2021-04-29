# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: k
> :: test: switch with unclosed block
> :: case: =! class function try while with foo!
## Input

`````js
switch {} default(x) { =! class function try while with foo!
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 160,
            "switchKeyword": {
                "kind": 37757024,
                "flags": 0,
                "start": 0,
                "end": 6
            },
            "expression": {
                "kind": 220,
                "propertyList": {
                    "kind": 218,
                    "properties": [],
                    "trailingComma": false,
                    "flags": 16,
                    "start": 8,
                    "end": 8
                },
                "flags": 32,
                "start": 6,
                "end": 9
            },
            "caseBlock": {
                "kind": 152,
                "clauses": [
                    {
                        "kind": 170,
                        "defaultKeyword": {
                            "kind": 4194387,
                            "flags": 0,
                            "start": 9,
                            "end": 17
                        },
                        "statements": [
                            {
                                "kind": 120,
                                "expression": {
                                    "kind": 121,
                                    "expression": {
                                        "kind": 134299649,
                                        "text": "x",
                                        "rawText": "x",
                                        "flags": 96,
                                        "start": 18,
                                        "end": 19
                                    },
                                    "flags": 32,
                                    "start": 17,
                                    "end": 20
                                },
                                "flags": 16,
                                "start": 17,
                                "end": 20
                            },
                            {
                                "kind": 249,
                                "block": {
                                    "kind": 124,
                                    "statements": [],
                                    "flags": 16,
                                    "start": 22,
                                    "end": 22
                                },
                                "flags": 16,
                                "start": 20,
                                "end": 24
                            },
                            {
                                "kind": 120,
                                "expression": {
                                    "kind": 126,
                                    "operandToken": {
                                        "kind": 65584,
                                        "flags": 64,
                                        "start": 24,
                                        "end": 25
                                    },
                                    "expression": {
                                        "kind": 189,
                                        "decorators": null,
                                        "classKeyword": {
                                            "kind": 37822544,
                                            "flags": 0,
                                            "start": 25,
                                            "end": 31
                                        },
                                        "name": null,
                                        "typeParameters": null,
                                        "classHeritage": null,
                                        "members": {
                                            "kind": 277,
                                            "elements": [],
                                            "flags": 32,
                                            "start": 25,
                                            "end": 25
                                        },
                                        "flags": 32,
                                        "start": 25,
                                        "end": 31
                                    },
                                    "flags": 32,
                                    "start": 24,
                                    "end": 31
                                },
                                "flags": 16,
                                "start": 24,
                                "end": 31
                            },
                            {
                                "kind": 176,
                                "declareKeyword": null,
                                "asyncKeyword": null,
                                "functionKeyword": {
                                    "kind": 37822554,
                                    "flags": 0,
                                    "start": 31,
                                    "end": 40
                                },
                                "generatorToken": null,
                                "name": {
                                    "kind": 16637,
                                    "text": "",
                                    "flags": 68,
                                    "start": 40,
                                    "end": 40
                                },
                                "formalParameters": {
                                    "kind": 214,
                                    "formalParameterList": [],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "start": 40,
                                    "end": 40
                                },
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "directives": [],
                                        "statements": [],
                                        "flags": 32,
                                        "start": 40,
                                        "end": 40
                                    },
                                    "flags": 32,
                                    "start": 40,
                                    "end": 40
                                },
                                "typeParameters": null,
                                "returnType": null,
                                "flags": 16,
                                "start": 31,
                                "end": 40
                            },
                            {
                                "kind": 159,
                                "tryKeyword": {
                                    "kind": 37757027,
                                    "flags": 0,
                                    "start": 40,
                                    "end": 44
                                },
                                "block": {
                                    "kind": 249,
                                    "block": {
                                        "kind": 124,
                                        "statements": [],
                                        "flags": 16,
                                        "start": 44,
                                        "end": 44
                                    },
                                    "flags": 16,
                                    "start": 44,
                                    "end": 44
                                },
                                "catchClause": null,
                                "finallyKeyword": null,
                                "finallyBlock": {
                                    "kind": 249,
                                    "block": {
                                        "kind": 124,
                                        "statements": [],
                                        "flags": 16,
                                        "start": 50,
                                        "end": 50
                                    },
                                    "flags": 16,
                                    "start": 50,
                                    "end": 50
                                },
                                "flags": 16,
                                "start": 40,
                                "end": 50
                            },
                            {
                                "kind": 153,
                                "withKeyword": {
                                    "kind": 37757029,
                                    "flags": 0,
                                    "start": 50,
                                    "end": 55
                                },
                                "expression": {
                                    "kind": 134299649,
                                    "text": "foo",
                                    "rawText": "foo",
                                    "flags": 96,
                                    "start": 55,
                                    "end": 59
                                },
                                "statement": {
                                    "kind": 120,
                                    "expression": {
                                        "kind": 126,
                                        "operandToken": {
                                            "kind": 65584,
                                            "flags": 64,
                                            "start": 59,
                                            "end": 60
                                        },
                                        "expression": {
                                            "kind": 16637,
                                            "text": "",
                                            "flags": 68,
                                            "start": 60,
                                            "end": 60
                                        },
                                        "flags": 32,
                                        "start": 59,
                                        "end": 60
                                    },
                                    "flags": 16,
                                    "start": 59,
                                    "end": 60
                                },
                                "flags": 16,
                                "start": 50,
                                "end": 60
                            }
                        ],
                        "flags": 16,
                        "start": 9,
                        "end": 60
                    }
                ],
                "flags": 16,
                "start": 9,
                "end": 60
            },
            "flags": 16,
            "start": 0,
            "end": 60
        }
    ],
    "isModule": false,
    "source": "switch {} default(x) { =! class function try while with foo!",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 60
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ Declaration or statement expected. This follows a block of statements so if you intended to write a destructuring assignment you might need to wrap the whole assignment in parentheses - start: 24, end: 25
✖ Binding identifier expected - start: 40, end: 44
✖ Unexpected token. - start: 40, end: 44
✖ Expression expected - start: 60, end: 60

```
