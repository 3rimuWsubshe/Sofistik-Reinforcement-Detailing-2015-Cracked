# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-14
- From: kataw/test/__snapshot__/parser/expressions/classes/extends-lefthandside/autogen.md
- Path: kataw/test/__snapshot__/parser/expressions/classes/extends-lefthandside/gen/for-in_lhs
> :: test: for-in lhs
> :: case: oh,no
## Options

`````js
{}
`````
## Input

`````js
for (oh,no in x) ;
`````
## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 165,
            "forKeyword": {
                "kind": 37757017,
                "flags": 80,
                "start": 0,
                "end": 3
            },
            "initializer": {
                "kind": 132,
                "expressions": [
                    {
                        "kind": 134299649,
                        "text": "oh",
                        "rawText": "oh",
                        "flags": 96,
                        "start": 5,
                        "end": 7
                    },
                    {
                        "kind": 198,
                        "left": {
                            "kind": 134299649,
                            "text": "no",
                            "rawText": "no",
                            "flags": 96,
                            "start": 8,
                            "end": 10
                        },
                        "operatorToken": {
                            "kind": 21006388,
                            "flags": 96,
                            "start": 10,
                            "end": 13
                        },
                        "right": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "start": 13,
                            "end": 15
                        },
                        "flags": 32,
                        "start": 8,
                        "end": 15
                    }
                ],
                "flags": 32,
                "start": 0,
                "end": 15
            },
            "condition": null,
            "incrementor": {
                "kind": 16637,
                "text": "",
                "rawText": "",
                "flags": 64,
                "start": 15,
                "end": 15
            },
            "statement": {
                "kind": 168,
                "flags": 16,
                "start": 16,
                "end": 18
            },
            "flags": 80,
            "start": 0,
            "end": 18
        }
    ],
    "isModule": false,
    "source": "for (oh,no in x) ;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 18
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Identifier expected - start: 15, end: 16

```
