# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-14
- From: kataw/test/__snapshot__/parser/statements/do-while/autogen.md
- Path: kataw/test/__snapshot__/parser/statements/do-while/gen/do_triple
> :: test: do triple
> :: case: /false//a
## Options

`````js
{}
`````
## Input

`````js
do do do /false//a while while while
`````
## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 169,
            "doKeyword": {
                "kind": 4202580,
                "flags": 80,
                "start": 0,
                "end": 2
            },
            "statement": {
                "kind": 169,
                "doKeyword": {
                    "kind": 4202580,
                    "flags": 80,
                    "start": 2,
                    "end": 5
                },
                "statement": {
                    "kind": 169,
                    "doKeyword": {
                        "kind": 4202580,
                        "flags": 80,
                        "start": 5,
                        "end": 8
                    },
                    "statement": {
                        "kind": 120,
                        "expression": {
                            "kind": 198,
                            "left": {
                                "kind": 371,
                                "text": "/false/",
                                "flags": 96,
                                "start": 8,
                                "end": 16
                            },
                            "operatorToken": {
                                "kind": 35640,
                                "flags": 96,
                                "start": 16,
                                "end": 17
                            },
                            "right": {
                                "kind": 134299649,
                                "text": "a",
                                "rawText": "a",
                                "flags": 96,
                                "start": 17,
                                "end": 18
                            },
                            "flags": 32,
                            "start": 8,
                            "end": 18
                        },
                        "flags": 16,
                        "start": 8,
                        "end": 18
                    },
                    "whileKeyword": {
                        "kind": 37757028,
                        "flags": 64,
                        "start": 18,
                        "end": 24
                    },
                    "expression": {
                        "kind": 16637,
                        "text": "",
                        "rawText": "",
                        "flags": 64,
                        "start": 24,
                        "end": 24
                    },
                    "flags": 80,
                    "start": 5,
                    "end": 24
                },
                "whileKeyword": {
                    "kind": 37757028,
                    "flags": 64,
                    "start": 24,
                    "end": 30
                },
                "expression": {
                    "kind": 16637,
                    "text": "",
                    "rawText": "",
                    "flags": 64,
                    "start": 30,
                    "end": 30
                },
                "flags": 80,
                "start": 2,
                "end": 30
            },
            "whileKeyword": {
                "kind": 37757028,
                "flags": 64,
                "start": 30,
                "end": 36
            },
            "expression": {
                "kind": 16637,
                "text": "",
                "rawText": "",
                "flags": 64,
                "start": 36,
                "end": 36
            },
            "flags": 80,
            "start": 0,
            "end": 36
        }
    ],
    "isModule": false,
    "source": "do do do /false//a while while while",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 36
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Expected a `;` - start: 18, end: 24
✖ Missing an opening parentheses - '( - start: 25, end: 30
✖ Missing an opening parentheses - '( - start: 31, end: 36

```
