# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-03
- From: kataw8/test\__snapshot__/parser/expressions/assignment/to_keyword/autogen.md
- Path: kataw8/test\__snapshot__\parser\expressions\assignment\to_keyword\gen\assign_to_paren-wrapped_keyword_in_arrow_param_default
> :: test: assign to paren-wrapped keyword in arrow param default
> :: case: extends
## Input

`````js
(x = (extends) = f) => {}
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
                    "kind": 132,
                    "expressions": [],
                    "flags": 32,
                    "start": 0,
                    "end": 6
                },
                "flags": 32,
                "start": 0,
                "end": 6
            },
            "flags": 16,
            "start": 0,
            "end": 6
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "f",
                "rawText": "f",
                "flags": 96,
                "start": 16,
                "end": 18
            },
            "flags": 16,
            "start": 16,
            "end": 18
        },
        {
            "kind": 124,
            "block": {
                "kind": 249,
                "statements": [],
                "flags": 16,
                "start": 24,
                "end": 24
            },
            "flags": 16,
            "start": 22,
            "end": 25
        }
    ],
    "isModule": false,
    "source": "(x = (extends) = f) => {}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 25
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Identifier expected - start: 6, end: 13
✖ Declaration or statement expected - start: 13, end: 14
✖ Declaration or statement expected - start: 14, end: 16
✖ Expected a `;` - start: 18, end: 19
✖ Declaration or statement expected - start: 19, end: 22

```
