# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-14
- From: kataw/test/__snapshot__/parser/miscellaneous/should-fail/autogen.md
- Path: kataw/test/__snapshot__/parser/miscellaneous/should-fail/gen/with_strict_directive
> :: test: with strict directive
> :: case: foo({ __proto__: null, other: null, "__proto__": null });
## Options

`````js
{}
`````
## Input

`````js
"use strict"; foo({ __proto__: null, other: null, "__proto__": null });
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
            "rawText": "\"use strict\"",
            "flags": 96,
            "start": 0,
            "end": 12
        }
    ],
    "statements": [
        {
            "kind": 120,
            "expression": {
                "kind": 131,
                "expression": {
                    "kind": 134299649,
                    "text": "foo",
                    "rawText": "foo",
                    "flags": 96,
                    "start": 13,
                    "end": 17
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [
                        {
                            "kind": 220,
                            "propertyList": {
                                "kind": 218,
                                "properties": [
                                    {
                                        "kind": 219,
                                        "asteriskToken": null,
                                        "left": {
                                            "kind": 134299649,
                                            "text": "__proto__",
                                            "rawText": "__proto__",
                                            "flags": 96,
                                            "start": 19,
                                            "end": 29
                                        },
                                        "right": {
                                            "kind": 138477575,
                                            "flags": 96,
                                            "start": 30,
                                            "end": 35
                                        },
                                        "flags": 36,
                                        "start": 19,
                                        "end": 35
                                    },
                                    {
                                        "kind": 219,
                                        "asteriskToken": null,
                                        "left": {
                                            "kind": 134299649,
                                            "text": "other",
                                            "rawText": "other",
                                            "flags": 96,
                                            "start": 36,
                                            "end": 42
                                        },
                                        "right": {
                                            "kind": 138477575,
                                            "flags": 96,
                                            "start": 43,
                                            "end": 48
                                        },
                                        "flags": 32,
                                        "start": 36,
                                        "end": 48
                                    },
                                    {
                                        "kind": 219,
                                        "asteriskToken": null,
                                        "left": {
                                            "kind": 201392131,
                                            "text": "__proto__",
                                            "rawText": "\"__proto__\"",
                                            "flags": 96,
                                            "start": 49,
                                            "end": 61
                                        },
                                        "right": {
                                            "kind": 138477575,
                                            "flags": 96,
                                            "start": 62,
                                            "end": 67
                                        },
                                        "flags": 36,
                                        "start": 49,
                                        "end": 67
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 20,
                                "start": 19,
                                "end": 67
                            },
                            "flags": 52,
                            "start": 18,
                            "end": 69
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 18,
                    "end": 69
                },
                "flags": 268435488,
                "start": 13,
                "end": 70
            },
            "flags": 16,
            "start": 13,
            "end": 71
        }
    ],
    "isModule": false,
    "source": "\"use strict\"; foo({ __proto__: null, other: null, \"__proto__\": null });",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 71
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ An object literal cannot have multiple properties with the name '__proto__' - start: 69, end: 70

```
