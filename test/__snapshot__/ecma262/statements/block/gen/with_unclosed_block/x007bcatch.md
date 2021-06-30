# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-14
- From: kataw/test/__snapshot__/parser/statements/block/autogen.md
- Path: kataw/test/__snapshot__/parser/statements/block/gen/with_unclosed_block
> :: test: with unclosed block
> :: case: {catch
## Options

`````js
{}
`````
## Input

`````js
{ {} finally(x) { {catch
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
                        "kind": 124,
                        "block": {
                            "kind": 249,
                            "statements": [],
                            "flags": 16,
                            "start": 3,
                            "end": 3
                        },
                        "flags": 16,
                        "start": 1,
                        "end": 4
                    },
                    {
                        "kind": 159,
                        "tryKeyword": null,
                        "block": {
                            "kind": 124,
                            "block": {
                                "kind": 249,
                                "statements": [],
                                "flags": 16,
                                "start": 4,
                                "end": 4
                            },
                            "flags": 16,
                            "start": 4,
                            "end": 4
                        },
                        "catchClause": null,
                        "finallyKeyword": {
                            "kind": 37757016,
                            "flags": 64,
                            "start": 4,
                            "end": 12
                        },
                        "finallyBlock": {
                            "kind": 124,
                            "block": {
                                "kind": 249,
                                "statements": [],
                                "flags": 16,
                                "start": 12,
                                "end": 12
                            },
                            "flags": 16,
                            "start": 12,
                            "end": 12
                        },
                        "flags": 16,
                        "start": 4,
                        "end": 12
                    },
                    {
                        "kind": 120,
                        "expression": {
                            "kind": 121,
                            "expression": {
                                "kind": 134299649,
                                "text": "x",
                                "rawText": "x",
                                "flags": 96,
                                "start": 13,
                                "end": 14
                            },
                            "flags": 32,
                            "start": 12,
                            "end": 15
                        },
                        "flags": 16,
                        "start": 12,
                        "end": 15
                    },
                    {
                        "kind": 124,
                        "block": {
                            "kind": 249,
                            "statements": [
                                {
                                    "kind": 124,
                                    "block": {
                                        "kind": 249,
                                        "statements": [
                                            {
                                                "kind": 159,
                                                "tryKeyword": null,
                                                "block": {
                                                    "kind": 124,
                                                    "block": {
                                                        "kind": 249,
                                                        "statements": [],
                                                        "flags": 16,
                                                        "start": 19,
                                                        "end": 19
                                                    },
                                                    "flags": 16,
                                                    "start": 19,
                                                    "end": 19
                                                },
                                                "catchClause": {
                                                    "kind": 173,
                                                    "catchKeyword": {
                                                        "kind": 4202575,
                                                        "flags": 80,
                                                        "start": 19,
                                                        "end": 24
                                                    },
                                                    "catchParameter": null,
                                                    "block": {
                                                        "kind": 124,
                                                        "block": {
                                                            "kind": 249,
                                                            "statements": [],
                                                            "flags": 16,
                                                            "start": 24,
                                                            "end": 24
                                                        },
                                                        "flags": 16,
                                                        "start": 24,
                                                        "end": 24
                                                    },
                                                    "flags": 80,
                                                    "start": 19,
                                                    "end": 24
                                                },
                                                "finallyKeyword": null,
                                                "finallyBlock": null,
                                                "flags": 16,
                                                "start": 19,
                                                "end": 24
                                            }
                                        ],
                                        "flags": 16,
                                        "start": 19,
                                        "end": 24
                                    },
                                    "flags": 16,
                                    "start": 17,
                                    "end": 24
                                }
                            ],
                            "flags": 16,
                            "start": 17,
                            "end": 24
                        },
                        "flags": 16,
                        "start": 15,
                        "end": 24
                    }
                ],
                "flags": 16,
                "start": 1,
                "end": 24
            },
            "flags": 16,
            "start": 0,
            "end": 24
        }
    ],
    "isModule": false,
    "source": "{ {} finally(x) { {catch",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 24
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ 'try' expected - start: 4, end: 12
✖ Expected a `;` - start: 15, end: 17
✖ 'try' expected - start: 19, end: 24
✖ The parser expected to find a '}' to match the '{' token here - start: 19, end: 24

```
