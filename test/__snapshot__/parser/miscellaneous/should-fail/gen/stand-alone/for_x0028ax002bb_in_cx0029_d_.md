# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-06
- From: kataw8/test\__snapshot__/parser/miscellaneous/should-fail/autogen.md
- Path: kataw8/test\__snapshot__\parser\miscellaneous\should-fail\gen\stand-alone
> :: test: stand-alone
> :: case: for (a+b in c) d;
## Input

`````js
for (a+b in c) d;
`````
## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 165,
            "forKeyword": {
                "kind": 37757017,
                "flags": 80,
                "start": 0,
                "end": 3
            },
            "initializer": {
                "kind": 198,
                "left": {
                    "kind": 134299649,
                    "text": "a",
                    "rawText": "a",
                    "flags": 96,
                    "start": 5,
                    "end": 6
                },
                "operatorToken": {
                    "kind": 99634,
                    "flags": 64,
                    "start": 6,
                    "end": 7
                },
                "right": {
                    "kind": 198,
                    "left": {
                        "kind": 134299649,
                        "text": "b",
                        "rawText": "b",
                        "flags": 96,
                        "start": 7,
                        "end": 8
                    },
                    "operatorToken": {
                        "kind": 21006388,
                        "flags": 64,
                        "start": 8,
                        "end": 11
                    },
                    "right": {
                        "kind": 134299649,
                        "text": "c",
                        "rawText": "c",
                        "flags": 96,
                        "start": 11,
                        "end": 13
                    },
                    "flags": 32,
                    "start": 8,
                    "end": 13
                },
                "flags": 32,
                "start": 0,
                "end": 13
            },
            "condition": null,
            "incrementor": {
                "kind": 16637,
                "text": "",
                "flags": 64,
                "start": 13,
                "end": 13
            },
            "statement": {
                "kind": 120,
                "expression": {
                    "kind": 134299649,
                    "text": "d",
                    "rawText": "d",
                    "flags": 96,
                    "start": 14,
                    "end": 16
                },
                "flags": 16,
                "start": 14,
                "end": 17
            },
            "flags": 16,
            "start": 0,
            "end": 17
        }
    ],
    "isModule": false,
    "source": "for (a+b in c) d;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 17
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Identifier expected - start: 13, end: 14

```
