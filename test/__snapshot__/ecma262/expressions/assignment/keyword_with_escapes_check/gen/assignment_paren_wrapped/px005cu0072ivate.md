# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-14
- From: kataw/test/__snapshot__/parser/expressions/assignment/keyword_with_escapes_check/autogen.md
- Path: kataw/test/__snapshot__/parser/expressions/assignment/keyword_with_escapes_check/gen/assignment_paren_wrapped
> :: test: assignment paren wrapped
> :: case: p\u0072ivate
## Options

`````js
{}
`````
## Input

`````js
(p\u0072ivate = x);
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
                "kind": 121,
                "expression": {
                    "kind": 125,
                    "left": {
                        "kind": 134299649,
                        "text": "private",
                        "rawText": "p\\u0072ivate",
                        "flags": 96,
                        "start": 1,
                        "end": 13
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "flags": 96,
                        "start": 13,
                        "end": 15
                    },
                    "right": {
                        "kind": 134299649,
                        "text": "x",
                        "rawText": "x",
                        "flags": 96,
                        "start": 15,
                        "end": 17
                    },
                    "flags": 32,
                    "start": 0,
                    "end": 17
                },
                "flags": 32,
                "start": 0,
                "end": 18
            },
            "flags": 16,
            "start": 0,
            "end": 19
        }
    ],
    "isModule": false,
    "source": "(p\\u0072ivate = x);",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 19
}
```

### Printed

```javascript

(p\u0072ivate = x);

```

### Diagnostics

```javascript
✔ No errors
```
