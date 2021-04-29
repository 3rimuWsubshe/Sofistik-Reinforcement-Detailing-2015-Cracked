# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: d
> :: test: obj-method
> :: case: var f = function*() { super(); }
## Input

`````js
({ method() { var f = function*() { super(); } } })
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
                                    "text": "method",
                                    "rawText": "method",
                                    "flags": 96,
                                    "start": 2,
                                    "end": 9
                                },
                                "typeParameters": null,
                                "formalParameters": {
                                    "kind": 214,
                                    "formalParameterList": [],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "start": 10,
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
                                                                "generatorToken": {
                                                                    "kind": 67143222,
                                                                    "flags": 64,
                                                                    "start": 30,
                                                                    "end": 31
                                                                },
                                                                "name": null,
                                                                "formalParameters": {
                                                                    "kind": 214,
                                                                    "formalParameterList": [],
                                                                    "trailingComma": false,
                                                                    "flags": 32,
                                                                    "start": 31,
                                                                    "end": 33
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
                                                                                            "start": 35,
                                                                                            "end": 41
                                                                                        },
                                                                                        "flags": 96,
                                                                                        "start": 35,
                                                                                        "end": 41
                                                                                    },
                                                                                    "argumentList": {
                                                                                        "kind": 256,
                                                                                        "elements": [],
                                                                                        "trailingComma": false,
                                                                                        "flags": 32,
                                                                                        "start": 42,
                                                                                        "end": 42
                                                                                    },
                                                                                    "flags": 32,
                                                                                    "start": 35,
                                                                                    "end": 43
                                                                                },
                                                                                "flags": 16,
                                                                                "start": 35,
                                                                                "end": 44
                                                                            }
                                                                        ],
                                                                        "flags": 32,
                                                                        "start": 35,
                                                                        "end": 44
                                                                    },
                                                                    "flags": 32,
                                                                    "start": 33,
                                                                    "end": 46
                                                                },
                                                                "typeParameters": null,
                                                                "returnType": null,
                                                                "flags": 288,
                                                                "start": 21,
                                                                "end": 46
                                                            },
                                                            "flags": 16,
                                                            "start": 17,
                                                            "end": 46
                                                        }
                                                    ],
                                                    "flags": 16,
                                                    "start": 17,
                                                    "end": 46
                                                },
                                                "flags": 16,
                                                "start": 13,
                                                "end": 46
                                            }
                                        ],
                                        "flags": 32,
                                        "start": 13,
                                        "end": 46
                                    },
                                    "flags": 32,
                                    "start": 11,
                                    "end": 48
                                },
                                "flags": 32,
                                "start": 9,
                                "end": 48
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "start": 2,
                        "end": 48
                    },
                    "flags": 32,
                    "start": 1,
                    "end": 50
                },
                "flags": 32,
                "start": 0,
                "end": 51
            },
            "flags": 16,
            "start": 0,
            "end": 51
        }
    ],
    "isModule": false,
    "source": "({ method() { var f = function*() { super(); } } })",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 51
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ 'super' can only be referenced in members of derived classes or object literal expressions - start: 41, end: 42

```
