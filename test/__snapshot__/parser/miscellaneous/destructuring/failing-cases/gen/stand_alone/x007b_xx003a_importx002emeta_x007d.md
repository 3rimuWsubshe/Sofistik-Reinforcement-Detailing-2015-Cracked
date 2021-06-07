# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-06
- From: kataw8/test\__snapshot__/parser/miscellaneous/destructuring/failing-cases/autogen.md
- Path: kataw8/test\__snapshot__\parser\miscellaneous\destructuring\failing-cases\gen\stand_alone
> :: test: stand alone
> :: case: { x: import.meta }
## Input

`````js
{ x: import.meta }
`````
## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 124,
            "block": {
                "kind": 249,
                "statements": [
                    {
                        "kind": 163,
                        "label": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "start": 1,
                            "end": 3
                        },
                        "colonToken": {
                            "kind": 21,
                            "flags": 64,
                            "start": 3,
                            "end": 4
                        },
                        "statement": {
                            "kind": 120,
                            "expression": {
                                "kind": 120,
                                "expression": {
                                    "kind": 207,
                                    "importKeyword": {
                                        "kind": 37814364,
                                        "flags": 64,
                                        "start": 4,
                                        "end": 11
                                    },
                                    "metaIdentifier": {
                                        "kind": 16595,
                                        "flags": 64,
                                        "start": 12,
                                        "end": 16
                                    },
                                    "flags": 11,
                                    "start": 96,
                                    "end": 16
                                },
                                "flags": 16,
                                "start": 11,
                                "end": 16
                            },
                            "flags": 16,
                            "start": 4,
                            "end": 16
                        },
                        "flags": 16,
                        "start": 1,
                        "end": 16
                    }
                ],
                "flags": 16,
                "start": 1,
                "end": 16
            },
            "flags": 16,
            "start": 0,
            "end": 18
        }
    ],
    "isModule": false,
    "source": "{ x: import.meta }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 18
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Cannot use 'import.meta' outside a module - start: 16, end: 18

```
