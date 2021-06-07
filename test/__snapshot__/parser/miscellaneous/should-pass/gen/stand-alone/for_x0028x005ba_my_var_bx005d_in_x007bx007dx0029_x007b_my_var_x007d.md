# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-06
- From: kataw8/test\__snapshot__/parser/miscellaneous/should-pass/autogen.md
- Path: kataw8/test\__snapshot__\parser\miscellaneous\should-pass\gen\stand-alone
> :: test: stand-alone
> :: case: for ([a, my_var, b] in {}) { my_var; }
## Input

`````js
for ([a, my_var, b] in {}) { my_var; }
`````
## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 166,
            "forKeyword": {
                "kind": 37757017,
                "flags": 80,
                "start": 0,
                "end": 3
            },
            "initializer": {
                "kind": 119,
                "elementList": {
                    "kind": 270,
                    "elements": [
                        {
                            "kind": 134299649,
                            "text": "a",
                            "rawText": "a",
                            "flags": 96,
                            "start": 6,
                            "end": 7
                        },
                        {
                            "kind": 134299649,
                            "text": "my_var",
                            "rawText": "my_var",
                            "flags": 96,
                            "start": 8,
                            "end": 15
                        },
                        {
                            "kind": 134299649,
                            "text": "b",
                            "rawText": "b",
                            "flags": 96,
                            "start": 16,
                            "end": 18
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 6,
                    "end": 18
                },
                "flags": 32,
                "start": 5,
                "end": 19
            },
            "inKeyword": {
                "kind": 21006388,
                "flags": 64,
                "start": 19,
                "end": 22
            },
            "expression": {
                "kind": 220,
                "propertyList": {
                    "kind": 218,
                    "properties": [],
                    "trailingComma": false,
                    "flags": 16,
                    "start": 24,
                    "end": 24
                },
                "flags": 48,
                "start": 22,
                "end": 25
            },
            "statement": {
                "kind": 124,
                "block": {
                    "kind": 249,
                    "statements": [
                        {
                            "kind": 120,
                            "expression": {
                                "kind": 134299649,
                                "text": "my_var",
                                "rawText": "my_var",
                                "flags": 96,
                                "start": 28,
                                "end": 35
                            },
                            "flags": 16,
                            "start": 28,
                            "end": 36
                        }
                    ],
                    "flags": 16,
                    "start": 28,
                    "end": 36
                },
                "flags": 16,
                "start": 26,
                "end": 38
            },
            "flags": 16,
            "start": 0,
            "end": 38
        }
    ],
    "isModule": false,
    "source": "for ([a, my_var, b] in {}) { my_var; }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 38
}
```

### Printed

```javascript

for ([a, my_var, b] in {})
  {}
```

### Diagnostics

```javascript
✔ No errors
```
