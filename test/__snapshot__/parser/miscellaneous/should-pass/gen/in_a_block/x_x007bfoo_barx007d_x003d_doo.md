# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-06
- From: kataw/test/__snapshot__/parser/miscellaneous/should-pass/autogen.md
- Path: kataw/test/__snapshot__/parser/miscellaneous/should-pass/gen/in_a_block
> :: test: in a block
> :: case: x, {foo, bar} = doo
## Input

`````js
{ x, {foo, bar} = doo }
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
                            "kind": 132,
                            "expressions": [
                                {
                                    "kind": 134299649,
                                    "text": "x",
                                    "rawText": "x",
                                    "flags": 96,
                                    "start": 1,
                                    "end": 3
                                },
                                {
                                    "kind": 125,
                                    "left": {
                                        "kind": 220,
                                        "propertyList": {
                                            "kind": 218,
                                            "properties": [
                                                {
                                                    "kind": 134299649,
                                                    "text": "foo",
                                                    "rawText": "foo",
                                                    "flags": 96,
                                                    "start": 6,
                                                    "end": 9
                                                },
                                                {
                                                    "kind": 134299649,
                                                    "text": "bar",
                                                    "rawText": "bar",
                                                    "flags": 96,
                                                    "start": 10,
                                                    "end": 14
                                                }
                                            ],
                                            "trailingComma": false,
                                            "flags": 16,
                                            "start": 6,
                                            "end": 14
                                        },
                                        "flags": 48,
                                        "start": 4,
                                        "end": 15
                                    },
                                    "operatorToken": {
                                        "kind": 4125,
                                        "flags": 64,
                                        "start": 15,
                                        "end": 17
                                    },
                                    "right": {
                                        "kind": 134299649,
                                        "text": "doo",
                                        "rawText": "doo",
                                        "flags": 96,
                                        "start": 17,
                                        "end": 21
                                    },
                                    "flags": 32,
                                    "start": 4,
                                    "end": 21
                                }
                            ],
                            "flags": 32,
                            "start": 1,
                            "end": 21
                        },
                        "flags": 16,
                        "start": 1,
                        "end": 21
                    }
                ],
                "flags": 16,
                "start": 1,
                "end": 21
            },
            "flags": 16,
            "start": 0,
            "end": 23
        }
    ],
    "isModule": false,
    "source": "{ x, {foo, bar} = doo }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 23
}
```

### Printed

```javascript

{
  x, { foo, bar } = doo;
}
```

### Diagnostics

```javascript
✔ No errors
```

