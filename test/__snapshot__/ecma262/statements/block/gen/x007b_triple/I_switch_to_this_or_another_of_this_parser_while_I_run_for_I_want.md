# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-14
- From: kataw/test/__snapshot__/parser/statements/block/autogen.md
- Path: kataw/test/__snapshot__/parser/statements/block/gen/x007b_triple
> :: test: { triple
> :: case: I switch to this or another of this parser while I run for I want
## Options

`````js
{}
`````
## Input

`````js
{ { { I switch to this or another of this parser while I run for I want
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
                        "kind": 124,
                        "block": {
                            "kind": 249,
                            "statements": [
                                {
                                    "kind": 124,
                                    "block": {
                                        "kind": 249,
                                        "statements": [
                                            {
                                                "kind": 120,
                                                "expression": {
                                                    "kind": 134299649,
                                                    "text": "I",
                                                    "rawText": "I",
                                                    "flags": 96,
                                                    "start": 5,
                                                    "end": 7
                                                },
                                                "flags": 16,
                                                "start": 5,
                                                "end": 7
                                            },
                                            {
                                                "kind": 160,
                                                "switchKeyword": {
                                                    "kind": 37757024,
                                                    "flags": 80,
                                                    "start": 7,
                                                    "end": 14
                                                },
                                                "expression": {
                                                    "kind": 134299649,
                                                    "text": "to",
                                                    "rawText": "to",
                                                    "flags": 96,
                                                    "start": 14,
                                                    "end": 17
                                                },
                                                "caseBlock": {
                                                    "kind": 152,
                                                    "clauses": [],
                                                    "flags": 16,
                                                    "start": 17,
                                                    "end": 17
                                                },
                                                "flags": 80,
                                                "start": 7,
                                                "end": 17
                                            },
                                            {
                                                "kind": 120,
                                                "expression": {
                                                    "kind": 4276321,
                                                    "flags": 96,
                                                    "start": 17,
                                                    "end": 22
                                                },
                                                "flags": 16,
                                                "start": 17,
                                                "end": 22
                                            },
                                            {
                                                "kind": 120,
                                                "expression": {
                                                    "kind": 134299649,
                                                    "text": "or",
                                                    "rawText": "or",
                                                    "flags": 96,
                                                    "start": 22,
                                                    "end": 25
                                                },
                                                "flags": 16,
                                                "start": 22,
                                                "end": 25
                                            },
                                            {
                                                "kind": 120,
                                                "expression": {
                                                    "kind": 134299649,
                                                    "text": "another",
                                                    "rawText": "another",
                                                    "flags": 96,
                                                    "start": 25,
                                                    "end": 33
                                                },
                                                "flags": 16,
                                                "start": 25,
                                                "end": 33
                                            },
                                            {
                                                "kind": 120,
                                                "expression": {
                                                    "kind": 134299649,
                                                    "text": "of",
                                                    "rawText": "of",
                                                    "flags": 96,
                                                    "start": 33,
                                                    "end": 36
                                                },
                                                "flags": 16,
                                                "start": 33,
                                                "end": 36
                                            },
                                            {
                                                "kind": 120,
                                                "expression": {
                                                    "kind": 4276321,
                                                    "flags": 96,
                                                    "start": 36,
                                                    "end": 41
                                                },
                                                "flags": 16,
                                                "start": 36,
                                                "end": 41
                                            },
                                            {
                                                "kind": 120,
                                                "expression": {
                                                    "kind": 134299649,
                                                    "text": "parser",
                                                    "rawText": "parser",
                                                    "flags": 96,
                                                    "start": 41,
                                                    "end": 48
                                                },
                                                "flags": 16,
                                                "start": 41,
                                                "end": 48
                                            },
                                            {
                                                "kind": 154,
                                                "whileKeyword": {
                                                    "kind": 37757028,
                                                    "flags": 80,
                                                    "start": 48,
                                                    "end": 54
                                                },
                                                "expression": {
                                                    "kind": 134299649,
                                                    "text": "I",
                                                    "rawText": "I",
                                                    "flags": 96,
                                                    "start": 54,
                                                    "end": 56
                                                },
                                                "statement": {
                                                    "kind": 120,
                                                    "expression": {
                                                        "kind": 134299649,
                                                        "text": "run",
                                                        "rawText": "run",
                                                        "flags": 96,
                                                        "start": 56,
                                                        "end": 60
                                                    },
                                                    "flags": 16,
                                                    "start": 56,
                                                    "end": 60
                                                },
                                                "flags": 80,
                                                "start": 48,
                                                "end": 60
                                            },
                                            {
                                                "kind": 165,
                                                "forKeyword": {
                                                    "kind": 37757017,
                                                    "flags": 80,
                                                    "start": 60,
                                                    "end": 64
                                                },
                                                "initializer": {
                                                    "kind": 134299649,
                                                    "text": "I",
                                                    "rawText": "I",
                                                    "flags": 96,
                                                    "start": 64,
                                                    "end": 66
                                                },
                                                "condition": {
                                                    "kind": 16637,
                                                    "text": "",
                                                    "rawText": "",
                                                    "flags": 64,
                                                    "start": 71,
                                                    "end": 71
                                                },
                                                "incrementor": {
                                                    "kind": 134299649,
                                                    "text": "want",
                                                    "rawText": "want",
                                                    "flags": 96,
                                                    "start": 66,
                                                    "end": 71
                                                },
                                                "statement": {
                                                    "kind": 120,
                                                    "expression": {
                                                        "kind": 16637,
                                                        "text": "",
                                                        "rawText": "",
                                                        "flags": 64,
                                                        "start": 71,
                                                        "end": 71
                                                    },
                                                    "flags": 16,
                                                    "start": 71,
                                                    "end": 71
                                                },
                                                "flags": 80,
                                                "start": 60,
                                                "end": 71
                                            }
                                        ],
                                        "flags": 16,
                                        "start": 5,
                                        "end": 71
                                    },
                                    "flags": 16,
                                    "start": 3,
                                    "end": 71
                                }
                            ],
                            "flags": 16,
                            "start": 3,
                            "end": 71
                        },
                        "flags": 16,
                        "start": 1,
                        "end": 71
                    }
                ],
                "flags": 16,
                "start": 1,
                "end": 71
            },
            "flags": 16,
            "start": 0,
            "end": 71
        }
    ],
    "isModule": false,
    "source": "{ { { I switch to this or another of this parser while I run for I want",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 71
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Expected a `;` - start: 7, end: 14
✖ Missing an opening parentheses - '( - start: 15, end: 17
✖ Declaration or statement expected - start: 18, end: 22
✖ Expected a `;` - start: 22, end: 25
✖ Expected a `;` - start: 25, end: 33
✖ Expected a `;` - start: 33, end: 36
✖ Expected a `;` - start: 36, end: 41
✖ Expected a `;` - start: 41, end: 48
✖ Expected a `;` - start: 48, end: 54
✖ Missing an opening parentheses - '( - start: 55, end: 56
✖ Declaration or statement expected - start: 57, end: 60
✖ Expected a `;` - start: 60, end: 64
✖ Missing an opening parentheses - '( - start: 65, end: 66
✖ Identifier expected - start: 71, end: 71

```
