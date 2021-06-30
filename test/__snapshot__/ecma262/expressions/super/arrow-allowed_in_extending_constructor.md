# Kataw parser test case

## Input

`````js
class x extends y { constructor(){ return () => super[bar]; }}
`````

## Output

### CST

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
                "flags": 80,
                "start": 0,
                "end": 5
            },
            "name": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 96,
                "start": 5,
                "end": 7
            },
            "typeParameters": null,
            "tail": {
                "kind": 277,
                "classHeritage": {
                    "kind": 279,
                    "extendsKeyword": {
                        "kind": 4194391,
                        "flags": 80,
                        "start": 7,
                        "end": 15
                    },
                    "expression": {
                        "kind": 134299649,
                        "text": "y",
                        "rawText": "y",
                        "flags": 96,
                        "start": 15,
                        "end": 17
                    },
                    "typeParameter": null,
                    "flags": 16,
                    "start": 15,
                    "end": 17
                },
                "body": {
                    "kind": 303,
                    "elements": [
                        {
                            "kind": 278,
                            "declareToken": null,
                            "decorators": null,
                            "staticKeyword": null,
                            "asyncKeyword": null,
                            "setKeyword": null,
                            "getKeyword": null,
                            "asteriskToken": null,
                            "method": {
                                "kind": 209,
                                "name": {
                                    "kind": 134299649,
                                    "text": "constructor",
                                    "rawText": "constructor",
                                    "flags": 96,
                                    "start": 19,
                                    "end": 31
                                },
                                "typeParameters": null,
                                "formalParameterList": {
                                    "kind": 214,
                                    "formalParameters": [],
                                    "trailingComma": false,
                                    "flags": 2048,
                                    "start": 32,
                                    "end": 33
                                },
                                "returnType": null,
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "directives": [],
                                        "statements": [
                                            {
                                                "kind": 161,
                                                "returnKeyword": {
                                                    "kind": 37757022,
                                                    "flags": 80,
                                                    "start": 34,
                                                    "end": 41
                                                },
                                                "expression": {
                                                    "kind": 271,
                                                    "asyncKeyword": null,
                                                    "typeParameters": null,
                                                    "arrowPatameterList": {
                                                        "kind": 342,
                                                        "parameters": [],
                                                        "trailingComma": false,
                                                        "flags": 0,
                                                        "start": 43,
                                                        "end": 43
                                                    },
                                                    "returnType": null,
                                                    "arrowToken": {
                                                        "kind": 10,
                                                        "flags": 64,
                                                        "start": 44,
                                                        "end": 47
                                                    },
                                                    "contents": {
                                                        "kind": 130,
                                                        "member": {
                                                            "kind": 4259935,
                                                            "flags": 96,
                                                            "start": 47,
                                                            "end": 53
                                                        },
                                                        "expression": {
                                                            "kind": 134299649,
                                                            "text": "bar",
                                                            "rawText": "bar",
                                                            "flags": 96,
                                                            "start": 54,
                                                            "end": 57
                                                        },
                                                        "flags": 536870944,
                                                        "start": 47,
                                                        "end": 58
                                                    },
                                                    "flags": 32,
                                                    "start": 41,
                                                    "end": 58
                                                },
                                                "flags": 80,
                                                "start": 34,
                                                "end": 59
                                            }
                                        ],
                                        "flags": 32,
                                        "start": 34,
                                        "end": 59
                                    },
                                    "flags": 32,
                                    "start": 33,
                                    "end": 61
                                },
                                "flags": 2048,
                                "start": 31,
                                "end": 61
                            },
                            "flags": 2048,
                            "start": 19,
                            "end": 61
                        }
                    ],
                    "flags": 32,
                    "start": 19,
                    "end": 61
                },
                "flags": 7,
                "start": 32,
                "end": 62
            },
            "flags": 16,
            "start": 0,
            "end": 62
        }
    ],
    "isModule": false,
    "source": "class x extends y { constructor(){ return () => super[bar]; }}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 62
}
```

### Printed

```javascript

class x extends y {
  constructor() { return () => super[bar]; }
}

```

### Diagnostics

```javascript
✔ No errors
```
