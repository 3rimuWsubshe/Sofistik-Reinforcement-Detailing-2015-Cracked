# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: t
> :: test: obj-expr-set
> :: case: var f = function { super(); }
## Input

`````js
({ set x(_) { var f = function { super(); } } })
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 220,
                    "propertyList": {
                        "kind": 218,
                        "properties": [
                            {
                                "kind": 209,
                                "name": {
                                    "kind": 134299649,
                                    "text": "x",
                                    "rawText": "x",
                                    "flags": 96,
                                    "start": 6,
                                    "end": 8
                                },
                                "typeParameters": null,
                                "formalParameters": {
                                    "kind": 214,
                                    "formalParameterList": [
                                        {
                                            "kind": 215,
                                            "ellipsisToken": null,
                                            "binding": {
                                                "kind": 134299649,
                                                "text": "_",
                                                "rawText": "_",
                                                "flags": 96,
                                                "start": 9,
                                                "end": 10
                                            },
                                            "optionalToken": null,
                                            "type": null,
                                            "initializer": null,
                                            "flags": 32,
                                            "start": 9,
                                            "end": 10
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 544,
                                    "start": 9,
                                    "end": 11
                                },
                                "type": null,
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "directives": [],
                                        "statements": [
                                            {
                                                "kind": 155,
                                                "declareKeyword": null,
                                                "varKeyword": {
                                                    "kind": 37757002,
                                                    "flags": 0,
                                                    "start": 13,
                                                    "end": 17
                                                },
                                                "declarationList": {
                                                    "kind": 156,
                                                    "declarations": [
                                                        {
                                                            "kind": 157,
                                                            "binding": {
                                                                "kind": 134299649,
                                                                "text": "f",
                                                                "rawText": "f",
                                                                "flags": 96,
                                                                "start": 17,
                                                                "end": 19
                                                            },
                                                            "optionalToken": null,
                                                            "type": null,
                                                            "initializer": {
                                                                "kind": 177,
                                                                "asyncKeyword": null,
                                                                "functionKeyword": {
                                                                    "kind": 37822554,
                                                                    "flags": 0,
                                                                    "start": 21,
                                                                    "end": 30
                                                                },
                                                                "generatorToken": null,
                                                                "name": null,
                                                                "formalParameters": {
                                                                    "kind": 214,
                                                                    "formalParameterList": [],
                                                                    "trailingComma": false,
                                                                    "flags": 32,
                                                                    "start": 30,
                                                                    "end": 30
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
                                                                                    "kind": 131,
                                                                                    "expression": {
                                                                                        "kind": 225,
                                                                                        "superKeyword": {
                                                                                            "kind": 4259935,
                                                                                            "flags": 0,
                                                                                            "start": 32,
                                                                                            "end": 38
                                                                                        },
                                                                                        "flags": 96,
                                                                                        "start": 32,
                                                                                        "end": 38
                                                                                    },
                                                                                    "argumentList": {
                                                                                        "kind": 256,
                                                                                        "elements": [],
                                                                                        "trailingComma": false,
                                                                                        "flags": 32,
                                                                                        "start": 39,
                                                                                        "end": 39
                                                                                    },
                                                                                    "flags": 32,
                                                                                    "start": 32,
                                                                                    "end": 40
                                                                                },
                                                                                "flags": 16,
                                                                                "start": 32,
                                                                                "end": 41
                                                                            }
                                                                        ],
                                                                        "flags": 32,
                                                                        "start": 32,
                                                                        "end": 41
                                                                    },
                                                                    "flags": 32,
                                                                    "start": 30,
                                                                    "end": 43
                                                                },
                                                                "typeParameters": null,
                                                                "returnType": null,
                                                                "flags": 32,
                                                                "start": 21,
                                                                "end": 43
                                                            },
                                                            "flags": 16,
                                                            "start": 17,
                                                            "end": 43
                                                        }
                                                    ],
                                                    "flags": 16,
                                                    "start": 17,
                                                    "end": 43
                                                },
                                                "flags": 16,
                                                "start": 13,
                                                "end": 43
                                            }
                                        ],
                                        "flags": 32,
                                        "start": 13,
                                        "end": 43
                                    },
                                    "flags": 32,
                                    "start": 11,
                                    "end": 45
                                },
                                "flags": 544,
                                "start": 8,
                                "end": 45
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "start": 2,
                        "end": 45
                    },
                    "flags": 32,
                    "start": 1,
                    "end": 47
                },
                "flags": 32,
                "start": 0,
                "end": 48
            },
            "flags": 16,
            "start": 0,
            "end": 48
        }
    ],
    "isModule": false,
    "source": "({ set x(_) { var f = function { super(); } } })",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 48
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ 'super' can only be referenced in members of derived classes or object literal expressions - start: 38, end: 39

```
