# Kataw parser test case

## Input

`````js
function foo(callback: (_1:bool, ...foo:Array<number>) => number){}
`````

## Options

### Parser Options

`````js
{ allowTypes : true }
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 0,
                "start": 0,
                "end": 8
            },
            "generatorToken": null,
            "name": {
                "kind": 134299649,
                "text": "foo",
                "rawText": "foo",
                "flags": 96,
                "start": 8,
                "end": 12
            },
            "formalParameters": {
                "kind": 214,
                "formalParameterList": [
                    {
                        "kind": 215,
                        "ellipsisToken": null,
                        "binding": {
                            "kind": 134299649,
                            "text": "callback",
                            "rawText": "callback",
                            "flags": 96,
                            "start": 13,
                            "end": 21
                        },
                        "optionalToken": null,
                        "type": {
                            "kind": 139,
                            "type": {
                                "kind": 148,
                                "parameters": {
                                    "kind": 208,
                                    "functionTypeParameterList": [
                                        {
                                            "kind": 149,
                                            "ellipsisToken": null,
                                            "name": {
                                                "kind": 134299649,
                                                "text": "_1",
                                                "rawText": "_1",
                                                "flags": 96,
                                                "start": 24,
                                                "end": 26
                                            },
                                            "optionalToken": null,
                                            "typeAnnotation": {
                                                "kind": 144,
                                                "id": {
                                                    "kind": 134299649,
                                                    "text": "bool",
                                                    "rawText": "bool",
                                                    "flags": 96,
                                                    "start": 27,
                                                    "end": 31
                                                },
                                                "typeParameters": null,
                                                "flags": 0,
                                                "start": 27,
                                                "end": 31
                                            },
                                            "flags": 0,
                                            "start": 24,
                                            "end": 31
                                        },
                                        {
                                            "kind": 149,
                                            "ellipsisToken": {
                                                "kind": 524302,
                                                "flags": 64,
                                                "start": 32,
                                                "end": 36
                                            },
                                            "name": {
                                                "kind": 134299649,
                                                "text": "foo",
                                                "rawText": "foo",
                                                "flags": 96,
                                                "start": 36,
                                                "end": 39
                                            },
                                            "optionalToken": null,
                                            "typeAnnotation": {
                                                "kind": 144,
                                                "id": {
                                                    "kind": 134299649,
                                                    "text": "Array",
                                                    "rawText": "Array",
                                                    "flags": 96,
                                                    "start": 40,
                                                    "end": 45
                                                },
                                                "typeParameters": {
                                                    "kind": 146,
                                                    "types": [
                                                        {
                                                            "kind": 134234345,
                                                            "flags": 64,
                                                            "start": 46,
                                                            "end": 52
                                                        }
                                                    ],
                                                    "flags": 0,
                                                    "start": 45,
                                                    "end": 53
                                                },
                                                "flags": 0,
                                                "start": 40,
                                                "end": 53
                                            },
                                            "flags": 0,
                                            "start": 32,
                                            "end": 53
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "start": 24,
                                    "end": 53
                                },
                                "returnType": {
                                    "kind": 134234345,
                                    "flags": 64,
                                    "start": 57,
                                    "end": 64
                                },
                                "typeParameters": null,
                                "flags": 0,
                                "start": 22,
                                "end": 64
                            },
                            "flags": 0,
                            "start": 21,
                            "end": 64
                        },
                        "initializer": null,
                        "flags": 32,
                        "start": 13,
                        "end": 64
                    }
                ],
                "trailingComma": false,
                "flags": 32,
                "start": 12,
                "end": 65
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [],
                    "flags": 32,
                    "start": 66,
                    "end": 66
                },
                "flags": 32,
                "start": 65,
                "end": 67
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 16,
            "start": 0,
            "end": 67
        }
    ],
    "isModule": false,
    "source": "function foo(callback: (_1:bool, ...foo:Array<number>) => number){}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 67
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
