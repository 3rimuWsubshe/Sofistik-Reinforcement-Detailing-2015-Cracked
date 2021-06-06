# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-06
- From: kataw8/test\__snapshot__/parser/miscellaneous/should-pass/autogen.md
- Path: kataw8/test\__snapshot__\parser\miscellaneous\should-pass\gen\in_a_block
> :: test: in a block
> :: case: test !== false ? success() : error()
## Input

`````js
{ test !== false ? success() : error() }
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
                        "kind": 120,
                        "expression": {
                            "kind": 197,
                            "shortCircuit": {
                                "kind": 198,
                                "left": {
                                    "kind": 134299649,
                                    "text": "test",
                                    "rawText": "test",
                                    "flags": 96,
                                    "start": 1,
                                    "end": 6
                                },
                                "operatorToken": {
                                    "kind": 34621,
                                    "flags": 64,
                                    "start": 6,
                                    "end": 10
                                },
                                "right": {
                                    "kind": 205586437,
                                    "flags": 96,
                                    "start": 10,
                                    "end": 16
                                },
                                "flags": 32,
                                "start": 1,
                                "end": 16
                            },
                            "questionToken": {
                                "kind": 134217750,
                                "flags": 64,
                                "start": 16,
                                "end": 18
                            },
                            "consequent": {
                                "kind": 131,
                                "expression": {
                                    "kind": 134299649,
                                    "text": "success",
                                    "rawText": "success",
                                    "flags": 96,
                                    "start": 18,
                                    "end": 26
                                },
                                "argumentList": {
                                    "kind": 256,
                                    "elements": [],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "start": 27,
                                    "end": 27
                                },
                                "flags": 268435488,
                                "start": 18,
                                "end": 28
                            },
                            "colonToken": {
                                "kind": 21,
                                "flags": 64,
                                "start": 28,
                                "end": 30
                            },
                            "alternate": {
                                "kind": 131,
                                "expression": {
                                    "kind": 134299649,
                                    "text": "error",
                                    "rawText": "error",
                                    "flags": 96,
                                    "start": 30,
                                    "end": 36
                                },
                                "argumentList": {
                                    "kind": 256,
                                    "elements": [],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "start": 37,
                                    "end": 37
                                },
                                "flags": 268435488,
                                "start": 30,
                                "end": 38
                            },
                            "flags": 32,
                            "start": 1,
                            "end": 38
                        },
                        "flags": 16,
                        "start": 1,
                        "end": 38
                    }
                ],
                "flags": 16,
                "start": 1,
                "end": 38
            },
            "flags": 16,
            "start": 0,
            "end": 40
        }
    ],
    "isModule": false,
    "source": "{ test !== false ? success() : error() }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 40
}
```

### Printed

```javascript

{
  test !== false ? success() : error();
}
```

### Diagnostics

```javascript
✔ No errors
```

