# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-06
- From: kataw8/test\__snapshot__/parser/miscellaneous/should-fail/autogen.md
- Path: kataw8/test\__snapshot__\parser\miscellaneous\should-fail\gen\stand-alone
> :: test: stand-alone
> :: case: yield (await foo)
## Input

`````js
yield (await foo)
`````
## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 120,
            "expression": {
                "kind": 131,
                "expression": {
                    "kind": 134299649,
                    "text": "yield",
                    "rawText": "yield",
                    "flags": 96,
                    "start": 0,
                    "end": 5
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [
                        {
                            "kind": 134299649,
                            "text": "await",
                            "rawText": "await",
                            "flags": 96,
                            "start": 7,
                            "end": 12
                        },
                        {
                            "kind": 134299649,
                            "text": "foo",
                            "rawText": "foo",
                            "flags": 96,
                            "start": 12,
                            "end": 16
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 7,
                    "end": 16
                },
                "flags": 268435488,
                "start": 0,
                "end": 17
            },
            "flags": 16,
            "start": 0,
            "end": 17
        }
    ],
    "isModule": false,
    "source": "yield (await foo)",
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
✖ ',' expected - start: 12, end: 16

```
