# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-03
- From: kataw8/test\__snapshot__/parser/expressions/assignment/to_keyword/autogen.md
- Path: kataw8/test\__snapshot__\parser\expressions\assignment\to_keyword\gen\array_with_assign_to_paren-wrapped
> :: test: array with assign to paren-wrapped
> :: case: instanceof
## Input

`````js
async x => (instanceof) = 1
`````
## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "start": 7,
                    "end": 10
                },
                "typeParameters": null,
                "parameters": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 96,
                    "start": 5,
                    "end": 7
                },
                "asyncKeyword": {
                    "kind": 82031,
                    "flags": 64,
                    "start": 0,
                    "end": 5
                },
                "returnType": null,
                "contents": {
                    "kind": 125,
                    "left": {
                        "kind": 121,
                        "expression": {
                            "kind": 198,
                            "left": {
                                "kind": 16637,
                                "text": "",
                                "flags": 64,
                                "start": 12,
                                "end": 12
                            },
                            "operatorToken": {
                                "kind": 4229173,
                                "flags": 64,
                                "start": 12,
                                "end": 22
                            },
                            "right": {
                                "kind": 16637,
                                "text": "",
                                "flags": 64,
                                "start": 22,
                                "end": 22
                            },
                            "flags": 32,
                            "start": 12,
                            "end": 22
                        },
                        "flags": 32,
                        "start": 10,
                        "end": 23
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "flags": 64,
                        "start": 23,
                        "end": 25
                    },
                    "right": {
                        "kind": 201392130,
                        "text": 1,
                        "rawText": "1",
                        "flags": 96,
                        "start": 25,
                        "end": 27
                    },
                    "flags": 32,
                    "start": 10,
                    "end": 27
                },
                "flags": 288,
                "start": 0,
                "end": 27
            },
            "flags": 16,
            "start": 0,
            "end": 27
        }
    ],
    "isModule": false,
    "source": "async x => (instanceof) = 1",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 27
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Identifier expected - start: 12, end: 22
✖ Identifier expected - start: 22, end: 23

```
