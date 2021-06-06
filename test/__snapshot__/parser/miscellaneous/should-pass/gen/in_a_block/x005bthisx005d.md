# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-06
- From: kataw8/test\__snapshot__/parser/miscellaneous/should-pass/autogen.md
- Path: kataw8/test\__snapshot__\parser\miscellaneous\should-pass\gen\in_a_block
> :: test: in a block
> :: case: [this]
## Input

`````js
{ [this] }
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
                            "kind": 119,
                            "elementList": {
                                "kind": 270,
                                "elements": [
                                    {
                                        "kind": 4276321,
                                        "flags": 96,
                                        "start": 3,
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
                        "flags": 16,
                        "start": 1,
                        "end": 8
                    }
                ],
                "flags": 16,
                "start": 1,
                "end": 8
            },
            "flags": 16,
            "start": 0,
            "end": 10
        }
    ],
    "isModule": false,
    "source": "{ [this] }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 10
}
```

### Printed

```javascript

{
  [this];
}
```

### Diagnostics

```javascript
✔ No errors
```

