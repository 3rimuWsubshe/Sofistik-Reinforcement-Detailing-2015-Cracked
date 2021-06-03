# Kataw parser test case

## Options

`````js
{ jsx: true, disableWebCompat: true, module: true }
`````

## Input

`````js
@a[b]
class C2 {
  method() {}
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
            "decorators": {
                "kind": 207,
                "elements": [
                    {
                        "kind": 34611453,
                        "decoratorToken": {
                            "kind": 34611453,
                            "flags": 64,
                            "start": 0,
                            "end": 1
                        },
                        "expression": {
                            "kind": 536871042,
                            "member": {
                                "kind": 134299649,
                                "text": "a",
                                "rawText": "a",
                                "flags": 96,
                                "start": 1,
                                "end": 2
                            },
                            "expression": {
                                "kind": 134299649,
                                "text": "b",
                                "rawText": "b",
                                "flags": 96,
                                "start": 3,
                                "end": 4
                            },
                            "flags": 32,
                            "start": 1,
                            "end": 5
                        },
                        "flags": 1,
                        "start": 1,
                        "end": 5
                    }
                ],
                "flags": 32,
                "start": 0,
                "end": 5
            },
            "classKeyword": {
                "kind": 37822544,
                "flags": 81,
                "start": 0,
                "end": 11
            },
            "name": {
                "kind": 134299649,
                "text": "C2",
                "rawText": "C2",
                "flags": 96,
                "start": 11,
                "end": 14
            },
            "typeParameters": null,
            "tail": {
                "kind": 277,
                "classHeritage": null,
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
                                    "text": "method",
                                    "rawText": "method",
                                    "flags": 96,
                                    "start": 16,
                                    "end": 25
                                },
                                "typeParameters": null,
                                "formalParameters": {
                                    "kind": 214,
                                    "formalParameterList": [],
                                    "trailingComma": false,
                                    "flags": 0,
                                    "start": 26,
                                    "end": 27
                                },
                                "returnType": null,
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "directives": [],
                                        "statements": [],
                                        "flags": 32,
                                        "start": 29,
                                        "end": 29
                                    },
                                    "flags": 32,
                                    "start": 27,
                                    "end": 30
                                },
                                "flags": 0,
                                "start": 25,
                                "end": 30
                            },
                            "flags": 0,
                            "start": 16,
                            "end": 30
                        }
                    ],
                    "flags": 32,
                    "start": 16,
                    "end": 30
                },
                "flags": 14,
                "start": 32,
                "end": 32
            },
            "flags": 16,
            "start": 0,
            "end": 32
        }
    ],
    "isModule": true,
    "source": "@a[b]\nclass C2 {\n  method() {}\n}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 32
}
```

### Printed

```javascript

@
class C2 {
  method() {}
}
```

### Diagnostics

```javascript
✔ No errors
```
