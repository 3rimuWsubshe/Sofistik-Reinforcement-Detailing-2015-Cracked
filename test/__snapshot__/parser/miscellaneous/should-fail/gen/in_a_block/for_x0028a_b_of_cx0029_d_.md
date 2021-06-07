# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-06
- From: kataw8/test\__snapshot__/parser/miscellaneous/should-fail/autogen.md
- Path: kataw8/test\__snapshot__\parser\miscellaneous\should-fail\gen\in_a_block
> :: test: in a block
> :: case: for (a,b of c) d;
## Input

`````js
{ for (a,b of c) d; }
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
                        "kind": 165,
                        "forKeyword": {
                            "kind": 37757017,
                            "flags": 80,
                            "start": 1,
                            "end": 5
                        },
                        "initializer": {
                            "kind": 132,
                            "expressions": [
                                {
                                    "kind": 134299649,
                                    "text": "a",
                                    "rawText": "a",
                                    "flags": 96,
                                    "start": 7,
                                    "end": 8
                                },
                                {
                                    "kind": 134299649,
                                    "text": "b",
                                    "rawText": "b",
                                    "flags": 96,
                                    "start": 9,
                                    "end": 10
                                }
                            ],
                            "flags": 32,
                            "start": 1,
                            "end": 10
                        },
                        "condition": {
                            "kind": 134299649,
                            "text": "c",
                            "rawText": "c",
                            "flags": 96,
                            "start": 13,
                            "end": 15
                        },
                        "incrementor": {
                            "kind": 134299649,
                            "text": "of",
                            "rawText": "of",
                            "flags": 96,
                            "start": 10,
                            "end": 13
                        },
                        "statement": {
                            "kind": 120,
                            "expression": {
                                "kind": 134299649,
                                "text": "d",
                                "rawText": "d",
                                "flags": 96,
                                "start": 16,
                                "end": 18
                            },
                            "flags": 16,
                            "start": 16,
                            "end": 19
                        },
                        "flags": 16,
                        "start": 1,
                        "end": 19
                    }
                ],
                "flags": 16,
                "start": 1,
                "end": 19
            },
            "flags": 16,
            "start": 0,
            "end": 21
        }
    ],
    "isModule": false,
    "source": "{ for (a,b of c) d; }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 21
}
```

### Printed

```javascript

{
  for (a, b; c; of)
    d;
}
```

### Diagnostics

```javascript
✔ No errors
```
