# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-06
- From: kataw8/test\__snapshot__/parser/miscellaneous/should-pass/autogen.md
- Path: kataw8/test\__snapshot__\parser\miscellaneous\should-pass\gen\stand-alone
> :: test: stand-alone
> :: case: 0, {} = undefined;
## Input

`````js
0, {} = undefined;
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
                "kind": 132,
                "expressions": [
                    {
                        "kind": 201392130,
                        "text": 0,
                        "rawText": "0",
                        "flags": 96,
                        "start": 0,
                        "end": 1
                    },
                    {
                        "kind": 125,
                        "left": {
                            "kind": 220,
                            "propertyList": {
                                "kind": 218,
                                "properties": [],
                                "trailingComma": false,
                                "flags": 16,
                                "start": 4,
                                "end": 4
                            },
                            "flags": 48,
                            "start": 2,
                            "end": 5
                        },
                        "operatorToken": {
                            "kind": 4125,
                            "flags": 64,
                            "start": 5,
                            "end": 7
                        },
                        "right": {
                            "kind": 134299649,
                            "text": "undefined",
                            "rawText": "undefined",
                            "flags": 96,
                            "start": 7,
                            "end": 17
                        },
                        "flags": 32,
                        "start": 2,
                        "end": 17
                    }
                ],
                "flags": 32,
                "start": 0,
                "end": 17
            },
            "flags": 16,
            "start": 0,
            "end": 18
        }
    ],
    "isModule": false,
    "source": "0, {} = undefined;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 18
}
```

### Printed

```javascript

0, {} = undefined;
```

### Diagnostics

```javascript
✔ No errors
```
