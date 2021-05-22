# Kataw parser test case

## Options

`````js
{ jsx: true, disableWebCompat: true, next: true }
`````

## Input

`````js
class C {
  static {
    (function await(await) {});
  }
}
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
            "tail": {
                "kind": 277,
                "classHeritage": null,
                "body": {
                    "kind": 262,
                    "elements": [
                        {
                            "kind": 263,
                            "decorators": null,
                            "declaredKeyword": null,
                            "staticKeyword": null,
                            "block": {
                                "kind": 124,
                                "block": {
                                    "kind": 249,
                                    "statements": [
                                        {
                                            "kind": 120,
                                            "expression": {
                                                "kind": 121,
                                                "expression": {
                                                    "kind": 177,
                                                    "asyncKeyword": null,
                                                    "functionKeyword": {
                                                        "kind": 37822554,
                                                        "flags": 0,
                                                        "start": 26,
                                                        "end": 34
                                                    },
                                                    "generatorToken": null,
                                                    "name": {
                                                        "kind": 134299649,
                                                        "text": "await",
                                                        "rawText": "await",
                                                        "flags": 96,
                                                        "start": 34,
                                                        "end": 40
                                                    },
                                                    "formalParameters": {
                                                        "kind": 214,
                                                        "formalParameterList": [
                                                            {
                                                                "kind": 215,
                                                                "ellipsisToken": null,
                                                                "binding": {
                                                                    "kind": 134299649,
                                                                    "text": "await",
                                                                    "rawText": "await",
                                                                    "flags": 96,
                                                                    "start": 41,
                                                                    "end": 46
                                                                },
                                                                "optionalToken": null,
                                                                "type": null,
                                                                "initializer": null,
                                                                "flags": 32,
                                                                "start": 41,
                                                                "end": 46
                                                            }
                                                        ],
                                                        "trailingComma": false,
                                                        "flags": 32,
                                                        "start": 40,
                                                        "end": 47
                                                    },
                                                    "contents": {
                                                        "kind": 216,
                                                        "functionStatementList": {
                                                            "kind": 217,
                                                            "directives": [],
                                                            "statements": [],
                                                            "flags": 32,
                                                            "start": 49,
                                                            "end": 49
                                                        },
                                                        "flags": 32,
                                                        "start": 47,
                                                        "end": 50
                                                    },
                                                    "typeParameters": null,
                                                    "returnType": null,
                                                    "flags": 32,
                                                    "start": 26,
                                                    "end": 50
                                                },
                                                "flags": 32,
                                                "start": 20,
                                                "end": 51
                                            },
                                            "flags": 16,
                                            "start": 20,
                                            "end": 52
                                        }
                                    ],
                                    "flags": 17,
                                    "start": 20,
                                    "end": 52
                                },
                                "flags": 16,
                                "start": 9,
                                "end": 56
                            },
                            "flags": 32,
                            "start": 9,
                            "end": 56
                        }
                    ],
                    "flags": 32,
                    "start": 9,
                    "end": 56
                },
                "flags": 32,
                "start": 7,
                "end": 58
            },
            "flags": 16,
            "start": 0,
            "end": 58
        }
    ],
    "isModule": false,
    "source": "class C {\n  static {\n    (function await(await) {});\n  }\n}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 58
}
```

### Printed

```javascript

class C {
  import ;
}
```

### Diagnostics

```javascript
✔ No errors
```
