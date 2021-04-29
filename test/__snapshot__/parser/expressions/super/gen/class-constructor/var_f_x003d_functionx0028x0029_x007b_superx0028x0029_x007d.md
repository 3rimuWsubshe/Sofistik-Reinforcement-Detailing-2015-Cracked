# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: r
> :: test: class-constructor
> :: case: var f = function() { super(); }
## Input

`````js
class C { constructor() { var f = function() { super(); } } }
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 178,
            "declareKeyword": null,
            "decorators": null,
            "classKeyword": {
                "kind": 37822544,
                "flags": 0,
                "start": 0,
                "end": 5
            },
            "name": {
                "kind": 134299649,
                "text": "C",
                "rawText": "C",
                "flags": 96,
                "start": 5,
                "end": 7
            },
            "typeParameters": null,
            "classHeritage": null,
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
                        "getKeyword": null,
                        "method": {
                            "kind": 209,
                            "name": {
                                "kind": 134299649,
                                "text": "constructor",
                                "rawText": "constructor",
                                "flags": 96,
                                "start": 9,
                                "end": 21
                            },
                            "typeParameters": null,
                            "formalParameters": {
                                "kind": 214,
                                "formalParameterList": [],
                                "trailingComma": false,
                                "flags": 2048,
                                "start": 22,
                                "end": 23
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
                                                "start": 25,
                                                "end": 29
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
                                                            "start": 29,
                                                            "end": 31
                                                        },
                                                        "optionalToken": null,
                                                        "type": null,
                                                        "initializer": {
                                                            "kind": 177,
                                                            "asyncKeyword": null,
                                                            "functionKeyword": {
                                                                "kind": 37822554,
                                                                "flags": 0,
                                                                "start": 33,
                                                                "end": 42
                                                            },
                                                            "generatorToken": null,
                                                            "name": null,
                                                            "formalParameters": {
                                                                "kind": 214,
                                                                "formalParameterList": [],
                                                                "trailingComma": false,
                                                                "flags": 32,
                                                                "start": 42,
                                                                "end": 44
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
                                                                                        "start": 46,
                                                                                        "end": 52
                                                                                    },
                                                                                    "flags": 96,
                                                                                    "start": 46,
                                                                                    "end": 52
                                                                                },
                                                                                "argumentList": {
                                                                                    "kind": 256,
                                                                                    "elements": [],
                                                                                    "trailingComma": false,
                                                                                    "flags": 32,
                                                                                    "start": 53,
                                                                                    "end": 53
                                                                                },
                                                                                "flags": 32,
                                                                                "start": 46,
                                                                                "end": 54
                                                                            },
                                                                            "flags": 16,
                                                                            "start": 46,
                                                                            "end": 55
                                                                        }
                                                                    ],
                                                                    "flags": 32,
                                                                    "start": 46,
                                                                    "end": 55
                                                                },
                                                                "flags": 32,
                                                                "start": 44,
                                                                "end": 57
                                                            },
                                                            "typeParameters": null,
                                                            "returnType": null,
                                                            "flags": 32,
                                                            "start": 33,
                                                            "end": 57
                                                        },
                                                        "flags": 16,
                                                        "start": 29,
                                                        "end": 57
                                                    }
                                                ],
                                                "flags": 16,
                                                "start": 29,
                                                "end": 57
                                            },
                                            "flags": 16,
                                            "start": 25,
                                            "end": 57
                                        }
                                    ],
                                    "flags": 32,
                                    "start": 25,
                                    "end": 57
                                },
                                "flags": 32,
                                "start": 23,
                                "end": 59
                            },
                            "flags": 2048,
                            "start": 21,
                            "end": 59
                        },
                        "flags": 2048,
                        "start": 9,
                        "end": 59
                    }
                ],
                "flags": 32,
                "start": 9,
                "end": 61
            },
            "flags": 16,
            "start": 0,
            "end": 61
        }
    ],
    "isModule": false,
    "source": "class C { constructor() { var f = function() { super(); } } }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 61
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ 'super' can only be referenced in members of derived classes or object literal expressions - start: 52, end: 53

```
