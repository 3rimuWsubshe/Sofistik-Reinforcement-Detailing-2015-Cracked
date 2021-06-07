# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-06
- From: kataw8/test\__snapshot__/parser/miscellaneous/should-fail/autogen.md
- Path: kataw8/test\__snapshot__\parser\miscellaneous\should-fail\gen\with_strict_directive
> :: test: with strict directive
> :: case: try {} finally {} catch(e) {}
## Input

`````js
"use strict"; try {} finally {} catch(e) {}
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
            "kind": 159,
            "tryKeyword": {
                "kind": 37757027,
                "flags": 80,
                "start": 13,
                "end": 17
            },
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
                "start": 17,
                "end": 20
            },
            "catchClause": null,
            "finallyKeyword": {
                "kind": 37757016,
                "flags": 64,
                "start": 20,
                "end": 28
            },
            "finallyBlock": {
                "kind": 124,
                "block": {
                    "kind": 249,
                    "statements": [],
                    "flags": 16,
                    "start": 30,
                    "end": 30
                },
                "flags": 16,
                "start": 28,
                "end": 31
            },
            "flags": 16,
            "start": 13,
            "end": 31
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
                    "start": 31,
                    "end": 31
                },
                "flags": 16,
                "start": 31,
                "end": 31
            },
            "catchClause": {
                "kind": 173,
                "catchKeyword": {
                    "kind": 4202575,
                    "flags": 80,
                    "start": 31,
                    "end": 37
                },
                "catchParameter": {
                    "kind": 134299649,
                    "text": "e",
                    "rawText": "e",
                    "flags": 96,
                    "start": 38,
                    "end": 39
                },
                "block": {
                    "kind": 124,
                    "block": {
                        "kind": 249,
                        "statements": [],
                        "flags": 16,
                        "start": 42,
                        "end": 42
                    },
                    "flags": 16,
                    "start": 40,
                    "end": 43
                },
                "flags": 16,
                "start": 31,
                "end": 43
            },
            "finallyKeyword": null,
            "finallyBlock": null,
            "flags": 16,
            "start": 31,
            "end": 43
        }
    ],
    "isModule": false,
    "source": "\"use strict\"; try {} finally {} catch(e) {}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 43
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ 'try' expected - start: 31, end: 37

```
