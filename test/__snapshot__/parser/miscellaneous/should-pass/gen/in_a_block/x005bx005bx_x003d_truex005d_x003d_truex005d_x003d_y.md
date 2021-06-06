# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-06
- From: kataw/test/__snapshot__/parser/miscellaneous/should-pass/autogen.md
- Path: kataw/test/__snapshot__/parser/miscellaneous/should-pass/gen/in_a_block
> :: test: in a block
> :: case: [[x = true] = true] = y
## Input

`````js
{ [[x = true] = true] = y }
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
                                            "kind": 125,
                                            "left": {
                                                "kind": 119,
                                                "elementList": {
                                                    "kind": 270,
                                                    "elements": [
                                                        {
                                                            "kind": 125,
                                                            "left": {
                                                                "kind": 134299649,
                                                                "text": "x",
                                                                "rawText": "x",
                                                                "flags": 96,
                                                                "start": 4,
                                                                "end": 5
                                                            },
                                                            "operatorToken": {
                                                                "kind": 4125,
                                                                "flags": 64,
                                                                "start": 5,
                                                                "end": 7
                                                            },
                                                            "right": {
                                                                "kind": 24752947,
                                                                "flags": 96,
                                                                "start": 7,
                                                                "end": 12
                                                            },
                                                            "flags": 32,
                                                            "start": 4,
                                                            "end": 12
                                                        }
                                                    ],
                                                    "trailingComma": false,
                                                    "flags": 32,
                                                    "start": 4,
                                                    "end": 12
                                                },
                                                "flags": 32,
                                                "start": 3,
                                                "end": 13
                                            },
                                            "operatorToken": {
                                                "kind": 4125,
                                                "flags": 64,
                                                "start": 13,
                                                "end": 15
                                            },
                                            "right": {
                                                "kind": 24752947,
                                                "flags": 96,
                                                "start": 15,
                                                "end": 20
                                            },
                                            "flags": 32,
                                            "start": 3,
                                            "end": 20
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "start": 3,
                                    "end": 20
                                },
                                "flags": 32,
                                "start": 1,
                                "end": 21
                            },
                            "operatorToken": {
                                "kind": 4125,
                                "flags": 64,
                                "start": 21,
                                "end": 23
                            },
                            "right": {
                                "kind": 134299649,
                                "text": "y",
                                "rawText": "y",
                                "flags": 96,
                                "start": 23,
                                "end": 25
                            },
                            "flags": 32,
                            "start": 1,
                            "end": 25
                        },
                        "flags": 16,
                        "start": 1,
                        "end": 25
                    }
                ],
                "flags": 16,
                "start": 1,
                "end": 25
            },
            "flags": 16,
            "start": 0,
            "end": 27
        }
    ],
    "isModule": false,
    "source": "{ [[x = true] = true] = y }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 27
}
```

### Printed

```javascript

{
  [[x = true] = true] = y;
}
```

### Diagnostics

```javascript
✔ No errors
```

