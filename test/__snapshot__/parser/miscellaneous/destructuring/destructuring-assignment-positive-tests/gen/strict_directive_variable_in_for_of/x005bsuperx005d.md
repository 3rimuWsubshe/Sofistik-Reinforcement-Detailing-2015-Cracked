# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-06
- From: kataw8/test\__snapshot__/parser/miscellaneous/destructuring/destructuring-assignment-positive-tests/autogen.md
- Path: kataw8/test\__snapshot__\parser\miscellaneous\destructuring\destructuring-assignment-positive-tests\gen\strict_directive_variable_in_for_of
> :: test: strict directive variable in for of
> :: case: [super]
## Input

`````js
'use strict'; var x, y, z; for ([super] of {});
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
            "kind": 155,
            "declareKeyword": null,
            "varKeyword": {
                "kind": 37757002,
                "flags": 80,
                "start": 13,
                "end": 17
            },
            "declarationList": {
                "kind": 156,
                "declarations": [
                    {
                        "kind": 157,
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
                        "kind": 157,
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
                        "kind": 157,
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
            "flags": 16,
            "start": 13,
            "end": 26
        },
        {
            "kind": 167,
            "forKeyword": {
                "kind": 37757017,
                "flags": 80,
                "start": 26,
                "end": 30
            },
            "awaitKeyword": null,
            "initializer": {
                "kind": 119,
                "elementList": {
                    "kind": 270,
                    "elements": [
                        {
                            "kind": 129,
                            "member": {
                                "kind": 225,
                                "superKeyword": {
                                    "kind": 4259935,
                                    "flags": 96,
                                    "start": 33,
                                    "end": 38
                                },
                                "flags": 96,
                                "start": 33,
                                "end": 38
                            },
                            "expression": {
                                "kind": 16637,
                                "text": "",
                                "flags": 64,
                                "start": 38,
                                "end": 38
                            },
                            "flags": 536870944,
                            "start": 33,
                            "end": 38
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 33,
                    "end": 38
                },
                "flags": 32,
                "start": 32,
                "end": 39
            },
            "ofKeyword": {
                "kind": 16793717,
                "flags": 64,
                "start": 39,
                "end": 42
            },
            "expression": {
                "kind": 220,
                "propertyList": {
                    "kind": 218,
                    "properties": [],
                    "trailingComma": false,
                    "flags": 16,
                    "start": 44,
                    "end": 44
                },
                "flags": 48,
                "start": 42,
                "end": 45
            },
            "statement": {
                "kind": 168,
                "flags": 16,
                "start": 46,
                "end": 47
            },
            "flags": 16,
            "start": 26,
            "end": 47
        }
    ],
    "isModule": false,
    "source": "'use strict'; var x, y, z; for ([super] of {});",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 47
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ 'super' must be followed by an argument list or member access. - start: 33, end: 39
✖ Dot property must be an identifier - start: 38, end: 39
✖ The left-hand side of a 'for...of' statement must be a variable or a property access. - start: 42, end: 44

```
