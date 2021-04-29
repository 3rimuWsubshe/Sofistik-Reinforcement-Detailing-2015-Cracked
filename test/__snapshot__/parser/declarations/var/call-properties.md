# Kataw parser test case

## Input

`````js
var a : { (): number; }

var a : { <T>(x: T): number; }
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
            "kind": 155,
            "declareKeyword": null,
            "varKeyword": {
                "kind": 37757002,
                "flags": 0,
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
                            "text": "a",
                            "rawText": "a",
                            "flags": 96,
                            "start": 3,
                            "end": 5
                        },
                        "optionalToken": null,
                        "type": {
                            "kind": 139,
                            "type": {
                                "kind": 134234353,
                                "properties": [],
                                "indexers": [],
                                "callProperties": [
                                    {
                                        "kind": 196,
                                        "typeParameter": null,
                                        "value": {
                                            "kind": 208,
                                            "functionTypeParameterList": [],
                                            "trailingComma": false,
                                            "flags": 32,
                                            "start": 11,
                                            "end": 11
                                        },
                                        "staticToken": false,
                                        "returnType": {
                                            "kind": 134234345,
                                            "flags": 64,
                                            "start": 13,
                                            "end": 20
                                        },
                                        "flags": 0,
                                        "start": 9,
                                        "end": 21
                                    }
                                ],
                                "internalSlots": [],
                                "flags": 0,
                                "start": 7,
                                "end": 23
                            },
                            "flags": 0,
                            "start": 5,
                            "end": 23
                        },
                        "initializer": null,
                        "flags": 16,
                        "start": 3,
                        "end": 23
                    }
                ],
                "flags": 16,
                "start": 3,
                "end": 23
            },
            "flags": 16,
            "start": 0,
            "end": 23
        },
        {
            "kind": 155,
            "declareKeyword": null,
            "varKeyword": {
                "kind": 37757002,
                "flags": 1,
                "start": 23,
                "end": 28
            },
            "declarationList": {
                "kind": 156,
                "declarations": [
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 134299649,
                            "text": "a",
                            "rawText": "a",
                            "flags": 96,
                            "start": 28,
                            "end": 30
                        },
                        "optionalToken": null,
                        "type": {
                            "kind": 139,
                            "type": {
                                "kind": 134234353,
                                "properties": [],
                                "indexers": [],
                                "callProperties": [
                                    {
                                        "kind": 196,
                                        "typeParameter": {
                                            "kind": 146,
                                            "types": [
                                                {
                                                    "kind": 144,
                                                    "id": {
                                                        "kind": 134299649,
                                                        "text": "T",
                                                        "rawText": "T",
                                                        "flags": 96,
                                                        "start": 36,
                                                        "end": 37
                                                    },
                                                    "typeParameters": null,
                                                    "flags": 0,
                                                    "start": 36,
                                                    "end": 37
                                                }
                                            ],
                                            "flags": 0,
                                            "start": 34,
                                            "end": 38
                                        },
                                        "value": {
                                            "kind": 208,
                                            "functionTypeParameterList": [
                                                {
                                                    "kind": 149,
                                                    "ellipsisToken": null,
                                                    "name": {
                                                        "kind": 134299649,
                                                        "text": "x",
                                                        "rawText": "x",
                                                        "flags": 96,
                                                        "start": 39,
                                                        "end": 40
                                                    },
                                                    "optionalToken": null,
                                                    "typeAnnotation": {
                                                        "kind": 144,
                                                        "id": {
                                                            "kind": 134299649,
                                                            "text": "T",
                                                            "rawText": "T",
                                                            "flags": 96,
                                                            "start": 41,
                                                            "end": 43
                                                        },
                                                        "typeParameters": null,
                                                        "flags": 0,
                                                        "start": 41,
                                                        "end": 43
                                                    },
                                                    "flags": 0,
                                                    "start": 39,
                                                    "end": 43
                                                }
                                            ],
                                            "trailingComma": false,
                                            "flags": 32,
                                            "start": 39,
                                            "end": 43
                                        },
                                        "staticToken": false,
                                        "returnType": {
                                            "kind": 134234345,
                                            "flags": 64,
                                            "start": 45,
                                            "end": 52
                                        },
                                        "flags": 0,
                                        "start": 34,
                                        "end": 53
                                    }
                                ],
                                "internalSlots": [],
                                "flags": 0,
                                "start": 32,
                                "end": 55
                            },
                            "flags": 0,
                            "start": 30,
                            "end": 55
                        },
                        "initializer": null,
                        "flags": 16,
                        "start": 28,
                        "end": 55
                    }
                ],
                "flags": 16,
                "start": 28,
                "end": 55
            },
            "flags": 16,
            "start": 23,
            "end": 55
        }
    ],
    "isModule": false,
    "source": "var a : { (): number; }\n\nvar a : { <T>(x: T): number; }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 55
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
