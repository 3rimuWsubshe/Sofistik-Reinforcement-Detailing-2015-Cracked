# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: k
> :: test: missing parens and block
> :: case: /false//a
## Input

`````js
switch case /false//a
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 160,
            "switchKeyword": {
                "kind": 37757024,
                "flags": 0,
                "start": 0,
                "end": 6
            },
            "expression": {
                "kind": 16637,
                "text": "",
                "flags": 68,
                "start": 6,
                "end": 6
            },
            "caseBlock": {
                "kind": 152,
                "clauses": [
                    {
                        "kind": 175,
                        "caseKeyword": {
                            "kind": 4194382,
                            "flags": 0,
                            "start": 6,
                            "end": 11
                        },
                        "expression": {
                            "kind": 198,
                            "left": {
                                "kind": 221,
                                "text": "/false/",
                                "flags": 96,
                                "start": 11,
                                "end": 19
                            },
                            "operatorToken": {
                                "kind": 35640,
                                "flags": 64,
                                "start": 19,
                                "end": 20
                            },
                            "right": {
                                "kind": 134299649,
                                "text": "a",
                                "rawText": "a",
                                "flags": 96,
                                "start": 20,
                                "end": 21
                            },
                            "flags": 32,
                            "start": 11,
                            "end": 21
                        },
                        "statements": [],
                        "flags": 16,
                        "start": 6,
                        "end": 21
                    }
                ],
                "flags": 16,
                "start": 6,
                "end": 21
            },
            "flags": 16,
            "start": 0,
            "end": 21
        }
    ],
    "isModule": false,
    "source": "switch case /false//a",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 21
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ Expression expected - start: 6, end: 11

```
