# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: k
> :: test: return with unclosed block
> :: case: =! class function try while with foo!
## Input

`````js
return {} return(x) { =! class function try while with foo!
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 161,
            "returnKeyword": {
                "kind": 37757022,
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
            "flags": 16,
            "start": 0,
            "end": 0
        },
        {
            "kind": 161,
            "returnKeyword": {
                "kind": 37757022,
                "flags": 0,
                "start": 9,
                "end": 16
            },
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 96,
                    "start": 17,
                    "end": 18
                },
                "flags": 32,
                "start": 16,
                "end": 19
            },
            "flags": 16,
            "start": 0,
            "end": 9
        },
        {
            "kind": 249,
            "block": {
                "kind": 124,
                "statements": [],
                "flags": 16,
                "start": 21,
                "end": 21
            },
            "flags": 16,
            "start": 19,
            "end": 23
        },
        {
            "kind": 120,
            "expression": {
                "kind": 126,
                "operandToken": {
                    "kind": 65584,
                    "flags": 64,
                    "start": 23,
                    "end": 24
                },
                "expression": {
                    "kind": 189,
                    "decorators": null,
                    "classKeyword": {
                        "kind": 37822544,
                        "flags": 0,
                        "start": 24,
                        "end": 30
                    },
                    "name": null,
                    "typeParameters": null,
                    "classHeritage": null,
                    "members": {
                        "kind": 277,
                        "elements": [],
                        "flags": 32,
                        "start": 24,
                        "end": 24
                    },
                    "flags": 32,
                    "start": 24,
                    "end": 30
                },
                "flags": 32,
                "start": 23,
                "end": 30
            },
            "flags": 16,
            "start": 23,
            "end": 30
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 0,
                "start": 30,
                "end": 39
            },
            "generatorToken": null,
            "name": {
                "kind": 16637,
                "text": "",
                "flags": 68,
                "start": 39,
                "end": 39
            },
            "formalParameters": {
                "kind": 214,
                "formalParameterList": [],
                "trailingComma": false,
                "flags": 32,
                "start": 39,
                "end": 39
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
                "start": 39,
                "end": 39
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 16,
            "start": 30,
            "end": 39
        },
        {
            "kind": 159,
            "tryKeyword": {
                "kind": 37757027,
                "flags": 0,
                "start": 39,
                "end": 43
            },
            "block": {
                "kind": 249,
                "block": {
                    "kind": 124,
                    "statements": [],
                    "flags": 16,
                    "start": 43,
                    "end": 43
                },
                "flags": 16,
                "start": 43,
                "end": 43
            },
            "catchClause": null,
            "finallyKeyword": null,
            "finallyBlock": {
                "kind": 249,
                "block": {
                    "kind": 124,
                    "statements": [],
                    "flags": 16,
                    "start": 49,
                    "end": 49
                },
                "flags": 16,
                "start": 49,
                "end": 49
            },
            "flags": 16,
            "start": 39,
            "end": 49
        },
        {
            "kind": 153,
            "withKeyword": {
                "kind": 37757029,
                "flags": 0,
                "start": 49,
                "end": 54
            },
            "expression": {
                "kind": 134299649,
                "text": "foo",
                "rawText": "foo",
                "flags": 96,
                "start": 54,
                "end": 58
            },
            "statement": {
                "kind": 120,
                "expression": {
                    "kind": 126,
                    "operandToken": {
                        "kind": 65584,
                        "flags": 64,
                        "start": 58,
                        "end": 59
                    },
                    "expression": {
                        "kind": 16637,
                        "text": "",
                        "flags": 68,
                        "start": 59,
                        "end": 59
                    },
                    "flags": 32,
                    "start": 58,
                    "end": 59
                },
                "flags": 16,
                "start": 58,
                "end": 59
            },
            "flags": 16,
            "start": 49,
            "end": 59
        }
    ],
    "isModule": false,
    "source": "return {} return(x) { =! class function try while with foo!",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 59
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ A return statement can only be used within a function_body - start: 0, end: 6
✖ A return statement can only be used within a function_body - start: 9, end: 16
✖ Declaration or statement expected. This follows a block of statements so if you intended to write a destructuring assignment you might need to wrap the whole assignment in parentheses - start: 23, end: 24
✖ Binding identifier expected - start: 39, end: 43
✖ Unexpected token. - start: 39, end: 43
✖ Expression expected - start: 59, end: 59

```
