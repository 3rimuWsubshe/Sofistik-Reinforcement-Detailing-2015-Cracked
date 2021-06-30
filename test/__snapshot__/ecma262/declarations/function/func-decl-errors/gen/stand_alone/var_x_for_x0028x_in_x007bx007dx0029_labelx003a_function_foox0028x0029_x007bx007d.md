# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-14
- From: kataw/test/__snapshot__/parser/declarations/function/func-decl-errors/autogen.md
- Path: kataw/test/__snapshot__/parser/declarations/function/func-decl-errors/gen/stand_alone
> :: test: stand alone
> :: case: var x; for (x in {}) label: function foo() {}
## Options

`````js
{}
`````
## Input

`````js
var x; for (x in {}) label: function foo() {}
`````
## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 155,
            "declareKeyword": null,
            "varKeyword": {
                "kind": 37757002,
                "flags": 80,
                "start": 0,
                "end": 3
            },
            "declarationList": {
                "kind": 156,
                "declarations": [
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "start": 3,
                            "end": 5
                        },
                        "type": null,
                        "initializer": null,
                        "flags": 16,
                        "start": 3,
                        "end": 5
                    }
                ],
                "flags": 16,
                "start": 3,
                "end": 5
            },
            "flags": 16,
            "start": 0,
            "end": 6
        },
        {
            "kind": 166,
            "forKeyword": {
                "kind": 37757017,
                "flags": 80,
                "start": 6,
                "end": 10
            },
            "initializer": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 96,
                "start": 12,
                "end": 13
            },
            "inKeyword": {
                "kind": 21006388,
                "flags": 64,
                "start": 13,
                "end": 16
            },
            "expression": {
                "kind": 220,
                "propertyList": {
                    "kind": 218,
                    "properties": [],
                    "trailingComma": false,
                    "flags": 16,
                    "start": 18,
                    "end": 18
                },
                "flags": 48,
                "start": 16,
                "end": 19
            },
            "statement": {
                "kind": 163,
                "label": {
                    "kind": 134299649,
                    "text": "label",
                    "rawText": "label",
                    "flags": 96,
                    "start": 20,
                    "end": 26
                },
                "colonToken": {
                    "kind": 21,
                    "flags": 64,
                    "start": 26,
                    "end": 27
                },
                "statement": {
                    "kind": 176,
                    "declareKeyword": null,
                    "asyncKeyword": null,
                    "functionKeyword": {
                        "kind": 37822554,
                        "flags": 64,
                        "start": 27,
                        "end": 36
                    },
                    "asteriskToken": null,
                    "name": {
                        "kind": 134299649,
                        "text": "foo",
                        "rawText": "foo",
                        "flags": 96,
                        "start": 36,
                        "end": 40
                    },
                    "typeParameters": null,
                    "formalParameterList": {
                        "kind": 214,
                        "formalParameters": [],
                        "trailingComma": false,
                        "flags": 32,
                        "start": 41,
                        "end": 41
                    },
                    "contents": {
                        "kind": 216,
                        "functionStatementList": {
                            "kind": 217,
                            "directives": [],
                            "statements": [],
                            "flags": 32,
                            "start": 44,
                            "end": 44
                        },
                        "flags": 32,
                        "start": 42,
                        "end": 45
                    },
                    "returnType": null,
                    "flags": 16,
                    "start": 27,
                    "end": 45
                },
                "flags": 16,
                "start": 20,
                "end": 45
            },
            "flags": 80,
            "start": 6,
            "end": 45
        }
    ],
    "isModule": false,
    "source": "var x; for (x in {}) label: function foo() {}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 45
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Function declarations cannot be used in a single-statement context - start: 27, end: 36

```
