# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-14
- From: kataw/test/__snapshot__/parser/miscellaneous/destructuring/destructuring-assignment-positive-tests/autogen.md
- Path: kataw/test/__snapshot__/parser/miscellaneous/destructuring/destructuring-assignment-positive-tests/gen/strict_directive_lex_and_for_in
> :: test: strict directive lex and for in
> :: case: { x: new.target = 1 }
## Options

`````js
{}
`````
## Input

`````js
'use strict'; let x, y, z; for (x in x = { x: new.target = 1 } = z = {});
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
            "kind": 166,
            "forKeyword": {
                "kind": 37757017,
                "flags": 80,
                "start": 26,
                "end": 30
            },
            "initializer": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 96,
                "start": 32,
                "end": 33
            },
            "inKeyword": {
                "kind": 21006388,
                "flags": 64,
                "start": 33,
                "end": 36
            },
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 96,
                    "start": 36,
                    "end": 38
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "start": 38,
                    "end": 40
                },
                "right": {
                    "kind": 125,
                    "left": {
                        "kind": 220,
                        "propertyList": {
                            "kind": 218,
                            "properties": [
                                {
                                    "kind": 219,
                                    "asteriskToken": null,
                                    "left": {
                                        "kind": 134299649,
                                        "text": "x",
                                        "rawText": "x",
                                        "flags": 96,
                                        "start": 42,
                                        "end": 44
                                    },
                                    "right": {
                                        "kind": 125,
                                        "left": {
                                            "kind": 211,
                                            "newKeyword": {
                                                "kind": 138477661,
                                                "flags": 96,
                                                "start": 45,
                                                "end": 49
                                            },
                                            "targetIdentifier": {
                                                "kind": 16594,
                                                "flags": 96,
                                                "start": 50,
                                                "end": 56
                                            },
                                            "flags": 96,
                                            "start": 45,
                                            "end": 56
                                        },
                                        "operatorToken": {
                                            "kind": 4125,
                                            "flags": 96,
                                            "start": 56,
                                            "end": 58
                                        },
                                        "right": {
                                            "kind": 201392130,
                                            "text": 1,
                                            "rawText": "1",
                                            "flags": 96,
                                            "start": 58,
                                            "end": 60
                                        },
                                        "flags": 32,
                                        "start": 42,
                                        "end": 60
                                    },
                                    "flags": 32,
                                    "start": 42,
                                    "end": 60
                                }
                            ],
                            "trailingComma": false,
                            "flags": 16,
                            "start": 42,
                            "end": 60
                        },
                        "flags": 48,
                        "start": 40,
                        "end": 62
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "flags": 96,
                        "start": 62,
                        "end": 64
                    },
                    "right": {
                        "kind": 125,
                        "left": {
                            "kind": 134299649,
                            "text": "z",
                            "rawText": "z",
                            "flags": 96,
                            "start": 64,
                            "end": 66
                        },
                        "operatorToken": {
                            "kind": 4125,
                            "flags": 96,
                            "start": 66,
                            "end": 68
                        },
                        "right": {
                            "kind": 220,
                            "propertyList": {
                                "kind": 218,
                                "properties": [],
                                "trailingComma": false,
                                "flags": 16,
                                "start": 70,
                                "end": 70
                            },
                            "flags": 48,
                            "start": 68,
                            "end": 71
                        },
                        "flags": 32,
                        "start": 64,
                        "end": 71
                    },
                    "flags": 32,
                    "start": 40,
                    "end": 71
                },
                "flags": 32,
                "start": 36,
                "end": 71
            },
            "statement": {
                "kind": 168,
                "flags": 16,
                "start": 72,
                "end": 73
            },
            "flags": 80,
            "start": 26,
            "end": 73
        }
    ],
    "isModule": false,
    "source": "'use strict'; let x, y, z; for (x in x = { x: new.target = 1 } = z = {});",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 73
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ 'new.target' only allowed within functions - start: 45, end: 58
✖ The left-hand side of an assignment expression must be a variable or a property access - start: 56, end: 58
✖ The left-hand side must be a variable or a property access. - start: 40, end: 64

```
