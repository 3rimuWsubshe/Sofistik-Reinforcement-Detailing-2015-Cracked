# Kataw parser test case

## Input

`````js
function a({ option1, option2 } = {}) {
  "use strict";
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
                "text": "a",
                "rawText": "a",
                "flags": 96,
                "start": 8,
                "end": 10
            },
            "formalParameters": {
                "kind": 214,
                "formalParameterList": [
                    {
                        "kind": 215,
                        "ellipsisToken": null,
                        "binding": {
                            "kind": 212,
                            "propertyList": {
                                "kind": 213,
                                "properties": [
                                    {
                                        "kind": 222,
                                        "ellipsisToken": null,
                                        "left": {
                                            "kind": 134299649,
                                            "text": "option1",
                                            "rawText": "option1",
                                            "flags": 96,
                                            "start": 12,
                                            "end": 20
                                        },
                                        "right": null,
                                        "flags": 32,
                                        "start": 12,
                                        "end": 20
                                    },
                                    {
                                        "kind": 222,
                                        "ellipsisToken": null,
                                        "left": {
                                            "kind": 134299649,
                                            "text": "option2",
                                            "rawText": "option2",
                                            "flags": 96,
                                            "start": 21,
                                            "end": 29
                                        },
                                        "right": null,
                                        "flags": 32,
                                        "start": 21,
                                        "end": 29
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 12,
                                "end": 29
                            },
                            "flags": 32,
                            "start": 11,
                            "end": 31
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": {
                            "kind": 220,
                            "propertyList": {
                                "kind": 218,
                                "properties": [],
                                "trailingComma": false,
                                "flags": 16,
                                "start": 35,
                                "end": 35
                            },
                            "flags": 48,
                            "start": 33,
                            "end": 36
                        },
                        "flags": 34,
                        "start": 11,
                        "end": 36
                    }
                ],
                "trailingComma": false,
                "flags": 34,
                "start": 10,
                "end": 37
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [
                        {
                            "kind": 201392131,
                            "text": "use strict",
                            "rawText": "\"use strict\"",
                            "flags": 97,
                            "start": 39,
                            "end": 54
                        }
                    ],
                    "statements": [],
                    "flags": 33,
                    "start": 39,
                    "end": 55
                },
                "flags": 32,
                "start": 37,
                "end": 57
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 16,
            "start": 0,
            "end": 57
        }
    ],
    "isModule": false,
    "source": "function a({ option1, option2 } = {}) {\n  \"use strict\";\n}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 57
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ 'use strict' directive cannot be used with non-simple parameter list. - start: 11, end: 55

```
