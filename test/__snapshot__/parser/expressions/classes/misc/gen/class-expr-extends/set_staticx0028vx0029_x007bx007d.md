# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: s
> :: test: class-expr-extends
> :: case: set static(v) {}
## Input

`````js
(class extends Base {set static(v) {}});
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
                    "kind": 189,
                    "decorators": null,
                    "classKeyword": {
                        "kind": 37822544,
                        "flags": 0,
                        "start": 1,
                        "end": 6
                    },
                    "name": null,
                    "typeParameters": null,
                    "classHeritage": {
                        "kind": 279,
                        "extendsKeyword": {
                            "kind": 4194391,
                            "flags": 0,
                            "start": 6,
                            "end": 14
                        },
                        "expression": {
                            "kind": 134299649,
                            "text": "Base",
                            "rawText": "Base",
                            "flags": 96,
                            "start": 14,
                            "end": 19
                        },
                        "typeParameter": null,
                        "flags": 16,
                        "start": 14,
                        "end": 19
                    },
                    "members": {
                        "kind": 277,
                        "elements": [
                            {
                                "kind": 278,
                                "declareToken": null,
                                "decorators": null,
                                "generatorToken": null,
                                "staticKeyword": null,
                                "asyncKeyword": null,
                                "setKeyword": null,
                                "getKeyword": {
                                    "kind": 16499,
                                    "flags": 64,
                                    "start": 21,
                                    "end": 24
                                },
                                "method": {
                                    "kind": 209,
                                    "name": {
                                        "kind": 134299649,
                                        "text": "static",
                                        "rawText": "static",
                                        "flags": 96,
                                        "start": 24,
                                        "end": 31
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
                                                    "text": "v",
                                                    "rawText": "v",
                                                    "flags": 96,
                                                    "start": 32,
                                                    "end": 33
                                                },
                                                "optionalToken": null,
                                                "type": null,
                                                "initializer": null,
                                                "flags": 32,
                                                "start": 32,
                                                "end": 33
                                            }
                                        ],
                                        "trailingComma": false,
                                        "flags": 544,
                                        "start": 32,
                                        "end": 34
                                    },
                                    "type": null,
                                    "contents": {
                                        "kind": 216,
                                        "functionStatementList": {
                                            "kind": 217,
                                            "directives": [],
                                            "statements": [],
                                            "flags": 32,
                                            "start": 36,
                                            "end": 36
                                        },
                                        "flags": 32,
                                        "start": 34,
                                        "end": 37
                                    },
                                    "flags": 512,
                                    "start": 31,
                                    "end": 37
                                },
                                "flags": 512,
                                "start": 21,
                                "end": 37
                            }
                        ],
                        "flags": 32,
                        "start": 21,
                        "end": 38
                    },
                    "flags": 32,
                    "start": 1,
                    "end": 38
                },
                "flags": 32,
                "start": 0,
                "end": 39
            },
            "flags": 16,
            "start": 0,
            "end": 40
        }
    ],
    "isModule": false,
    "source": "(class extends Base {set static(v) {}});",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 40
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✔ No errors
```
