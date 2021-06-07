# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-06
- From: kataw8/test\__snapshot__/parser/miscellaneous/destructuring/destructuring-assignment-positive-tests/autogen.md
- Path: kataw8/test\__snapshot__\parser\miscellaneous\destructuring\destructuring-assignment-positive-tests\gen\strict_directive_lex_and_for_in
> :: test: strict directive lex and for in
> :: case: [super = 1]
## Input

`````js
'use strict'; let x, y, z; for (x in x = [super = 1] = z = {});
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
                    "flags": 64,
                    "start": 38,
                    "end": 40
                },
                "right": {
                    "kind": 125,
                    "left": {
                        "kind": 119,
                        "elementList": {
                            "kind": 270,
                            "elements": [
                                {
                                    "kind": 125,
                                    "left": {
                                        "kind": 129,
                                        "member": {
                                            "kind": 225,
                                            "superKeyword": {
                                                "kind": 4259935,
                                                "flags": 96,
                                                "start": 42,
                                                "end": 47
                                            },
                                            "flags": 96,
                                            "start": 42,
                                            "end": 47
                                        },
                                        "expression": {
                                            "kind": 16637,
                                            "text": "",
                                            "flags": 64,
                                            "start": 47,
                                            "end": 47
                                        },
                                        "flags": 536870944,
                                        "start": 42,
                                        "end": 47
                                    },
                                    "operatorToken": {
                                        "kind": 4125,
                                        "flags": 64,
                                        "start": 47,
                                        "end": 49
                                    },
                                    "right": {
                                        "kind": 201392130,
                                        "text": 1,
                                        "rawText": "1",
                                        "flags": 96,
                                        "start": 49,
                                        "end": 51
                                    },
                                    "flags": 32,
                                    "start": 42,
                                    "end": 51
                                }
                            ],
                            "trailingComma": false,
                            "flags": 32,
                            "start": 42,
                            "end": 51
                        },
                        "flags": 32,
                        "start": 40,
                        "end": 52
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "flags": 64,
                        "start": 52,
                        "end": 54
                    },
                    "right": {
                        "kind": 125,
                        "left": {
                            "kind": 134299649,
                            "text": "z",
                            "rawText": "z",
                            "flags": 96,
                            "start": 54,
                            "end": 56
                        },
                        "operatorToken": {
                            "kind": 4125,
                            "flags": 64,
                            "start": 56,
                            "end": 58
                        },
                        "right": {
                            "kind": 220,
                            "propertyList": {
                                "kind": 218,
                                "properties": [],
                                "trailingComma": false,
                                "flags": 16,
                                "start": 60,
                                "end": 60
                            },
                            "flags": 48,
                            "start": 58,
                            "end": 61
                        },
                        "flags": 32,
                        "start": 54,
                        "end": 61
                    },
                    "flags": 32,
                    "start": 40,
                    "end": 61
                },
                "flags": 32,
                "start": 36,
                "end": 61
            },
            "statement": {
                "kind": 168,
                "flags": 16,
                "start": 62,
                "end": 63
            },
            "flags": 16,
            "start": 26,
            "end": 63
        }
    ],
    "isModule": false,
    "source": "'use strict'; let x, y, z; for (x in x = [super = 1] = z = {});",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 63
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ 'super' must be followed by an argument list or member access. - start: 42, end: 49
✖ Dot property must be an identifier - start: 47, end: 49
✖ The left-hand side of an assignment expression must be a variable or a property access - start: 47, end: 49

```
