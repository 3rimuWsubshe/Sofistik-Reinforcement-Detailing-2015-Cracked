# Kataw parser test case

## Input

`````js
class x extends y { foo(){ return () => () => super[bar]; }}
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
                    "kind": 262,
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
                                    "text": "foo",
                                    "rawText": "foo",
                                    "flags": 96,
                                    "start": 19,
                                    "end": 23
                                },
                                "typeParameters": null,
                                "formalParameters": {
                                    "kind": 214,
                                    "formalParameterList": [],
                                    "trailingComma": false,
                                    "flags": 0,
                                    "start": 24,
                                    "end": 25
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
                                                    "start": 26,
                                                    "end": 33
                                                },
                                                "expression": {
                                                    "kind": 271,
                                                    "arrowToken": {
                                                        "kind": 10,
                                                        "flags": 64,
                                                        "start": 36,
                                                        "end": 39
                                                    },
                                                    "typeParameters": null,
                                                    "parameters": [],
                                                    "asyncKeyword": null,
                                                    "returnType": null,
                                                    "contents": {
                                                        "kind": 271,
                                                        "arrowToken": {
                                                            "kind": 10,
                                                            "flags": 64,
                                                            "start": 42,
                                                            "end": 45
                                                        },
                                                        "typeParameters": null,
                                                        "parameters": [],
                                                        "asyncKeyword": null,
                                                        "returnType": null,
                                                        "contents": {
                                                            "kind": 536871042,
                                                            "member": {
                                                                "kind": 225,
                                                                "superKeyword": {
                                                                    "kind": 4259935,
                                                                    "flags": 96,
                                                                    "start": 45,
                                                                    "end": 51
                                                                },
                                                                "flags": 96,
                                                                "start": 45,
                                                                "end": 51
                                                            },
                                                            "expression": {
                                                                "kind": 134299649,
                                                                "text": "bar",
                                                                "rawText": "bar",
                                                                "flags": 96,
                                                                "start": 52,
                                                                "end": 55
                                                            },
                                                            "flags": 32,
                                                            "start": 45,
                                                            "end": 56
                                                        },
                                                        "flags": 32,
                                                        "start": 39,
                                                        "end": 56
                                                    },
                                                    "flags": 32,
                                                    "start": 33,
                                                    "end": 56
                                                },
                                                "flags": 16,
                                                "start": 0,
                                                "end": 26
                                            }
                                        ],
                                        "flags": 32,
                                        "start": 26,
                                        "end": 57
                                    },
                                    "flags": 32,
                                    "start": 25,
                                    "end": 59
                                },
                                "flags": 0,
                                "start": 23,
                                "end": 59
                            },
                            "flags": 0,
                            "start": 19,
                            "end": 59
                        }
                    ],
                    "flags": 32,
                    "start": 19,
                    "end": 59
                },
                "flags": 7,
                "start": 32,
                "end": 60
            },
            "flags": 16,
            "start": 0,
            "end": 60
        }
    ],
    "isModule": false,
    "source": "class x extends y { foo(){ return () => () => super[bar]; }}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 60
}
```

### Printed

```javascript

class x  {
  foo() {
    return  () =>  () =>  ;
  }
}
```

### Diagnostics

```javascript
✔ No errors
```
