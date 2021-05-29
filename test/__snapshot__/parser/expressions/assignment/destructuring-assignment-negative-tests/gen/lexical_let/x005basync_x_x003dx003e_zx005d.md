# Auto-generated test cases ( Kataw )
- Regenerated: 2021-05-29
- From: kataw7/test\__snapshot__/parser/expressions/assignment/destructuring-assignment-negative-tests/autogen.md
- Path: kataw7/test\__snapshot__\parser\expressions\assignment\destructuring-assignment-negative-tests\gen\lexical_let
> :: test: lexical let
> :: case: [async x => z]
## Input

`````js
'use strict'; let x, y, z; ([async x => z]= {});
`````
## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [
        {
            "kind": 201392131,
            "text": "use strict",
            "rawText": "'use strict'",
            "flags": 4194400,
            "start": 0,
            "end": 12
        }
    ],
    "statements": [
        {
            "kind": 162,
            "lexicalKeyword": {
                "kind": 41951307,
                "flags": 80,
                "start": 13,
                "end": 17
            },
            "binding": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "start": 17,
                            "end": 19
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": null,
                        "flags": 16,
                        "start": 17,
                        "end": 19
                    },
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 134299649,
                            "text": "y",
                            "rawText": "y",
                            "flags": 96,
                            "start": 20,
                            "end": 22
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": null,
                        "flags": 16,
                        "start": 20,
                        "end": 22
                    },
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 134299649,
                            "text": "z",
                            "rawText": "z",
                            "flags": 96,
                            "start": 23,
                            "end": 25
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": null,
                        "flags": 16,
                        "start": 23,
                        "end": 25
                    }
                ],
                "flags": 16,
                "start": 17,
                "end": 25
            },
            "flags": 33554448,
            "start": 13,
            "end": 26
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 125,
                    "left": {
                        "kind": 119,
                        "elementList": {
                            "kind": 270,
                            "elements": [
                                {
                                    "kind": 271,
                                    "arrowToken": {
                                        "kind": 10,
                                        "flags": 64,
                                        "start": 36,
                                        "end": 39
                                    },
                                    "typeParameters": null,
                                    "parameters": {
                                        "kind": 134299649,
                                        "text": "x",
                                        "rawText": "x",
                                        "flags": 96,
                                        "start": 34,
                                        "end": 36
                                    },
                                    "asyncKeyword": {
                                        "kind": 82031,
                                        "flags": 64,
                                        "start": 29,
                                        "end": 34
                                    },
                                    "returnType": null,
                                    "contents": {
                                        "kind": 134299649,
                                        "text": "z",
                                        "rawText": "z",
                                        "flags": 96,
                                        "start": 39,
                                        "end": 41
                                    },
                                    "flags": 288,
                                    "start": 29,
                                    "end": 41
                                }
                            ],
                            "trailingComma": false,
                            "flags": 32,
                            "start": 29,
                            "end": 41
                        },
                        "flags": 32,
                        "start": 28,
                        "end": 42
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "flags": 64,
                        "start": 42,
                        "end": 43
                    },
                    "right": {
                        "kind": 220,
                        "propertyList": {
                            "kind": 218,
                            "properties": [],
                            "trailingComma": false,
                            "flags": 16,
                            "start": 45,
                            "end": 45
                        },
                        "flags": 48,
                        "start": 43,
                        "end": 46
                    },
                    "flags": 32,
                    "start": 28,
                    "end": 46
                },
                "flags": 32,
                "start": 26,
                "end": 47
            },
            "flags": 16,
            "start": 26,
            "end": 48
        }
    ],
    "isModule": false,
    "source": "'use strict'; let x, y, z; ([async x => z]= {});",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 48
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ The left-hand side must be a variable or a property access. - start: 42, end: 43

```
