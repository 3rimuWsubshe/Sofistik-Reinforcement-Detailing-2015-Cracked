# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-06
- From: kataw8/test\__snapshot__/parser/miscellaneous/should-pass/autogen.md
- Path: kataw8/test\__snapshot__\parser\miscellaneous\should-pass\gen\in_a_block
> :: test: in a block
> :: case: [a,,b] = array;
## Input

`````js
{ [a,,b] = array; }
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
                            "kind": 125,
                            "left": {
                                "kind": 119,
                                "elementList": {
                                    "kind": 270,
                                    "elements": [
                                        {
                                            "kind": 134299649,
                                            "text": "a",
                                            "rawText": "a",
                                            "flags": 96,
                                            "start": 3,
                                            "end": 4
                                        },
                                        {
                                            "kind": 230,
                                            "flags": 96,
                                            "start": 5,
                                            "end": 5
                                        },
                                        {
                                            "kind": 134299649,
                                            "text": "b",
                                            "rawText": "b",
                                            "flags": 96,
                                            "start": 6,
                                            "end": 7
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "start": 3,
                                    "end": 7
                                },
                                "flags": 32,
                                "start": 1,
                                "end": 8
                            },
                            "operatorToken": {
                                "kind": 4125,
                                "flags": 64,
                                "start": 8,
                                "end": 10
                            },
                            "right": {
                                "kind": 134299649,
                                "text": "array",
                                "rawText": "array",
                                "flags": 96,
                                "start": 10,
                                "end": 16
                            },
                            "flags": 32,
                            "start": 1,
                            "end": 16
                        },
                        "flags": 16,
                        "start": 1,
                        "end": 17
                    }
                ],
                "flags": 16,
                "start": 1,
                "end": 17
            },
            "flags": 16,
            "start": 0,
            "end": 19
        }
    ],
    "isModule": false,
    "source": "{ [a,,b] = array; }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 19
}
```

### Printed

```javascript

{
  [a, , b] = array;
}
```

### Diagnostics

```javascript
✔ No errors
```

