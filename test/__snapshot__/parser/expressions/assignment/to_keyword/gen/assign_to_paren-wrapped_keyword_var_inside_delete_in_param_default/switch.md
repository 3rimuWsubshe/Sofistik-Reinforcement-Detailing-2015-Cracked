# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-03
- From: kataw8/test\__snapshot__/parser/expressions/assignment/to_keyword/autogen.md
- Path: kataw8/test\__snapshot__\parser\expressions\assignment\to_keyword\gen\assign_to_paren-wrapped_keyword_var_inside_delete_in_param_default
> :: test: assign to paren-wrapped keyword var inside delete in param default
> :: case: switch
## Input

`````js
(x = delete ((switch) = f)) => {}
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
                    "end": 14
                },
                "flags": 32,
                "start": 0,
                "end": 14
            },
            "flags": 16,
            "start": 0,
            "end": 14
        },
        {
            "kind": 160,
            "switchKeyword": {
                "kind": 37757024,
                "flags": 80,
                "start": 14,
                "end": 20
            },
            "expression": {
                "kind": 16637,
                "text": "",
                "flags": 64,
                "start": 20,
                "end": 20
            },
            "caseBlock": {
                "kind": 152,
                "clauses": [],
                "flags": 16,
                "start": 21,
                "end": 21
            },
            "flags": 16,
            "start": 14,
            "end": 21
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "f",
                "rawText": "f",
                "flags": 96,
                "start": 23,
                "end": 25
            },
            "flags": 16,
            "start": 23,
            "end": 25
        },
        {
            "kind": 124,
            "block": {
                "kind": 249,
                "statements": [],
                "flags": 16,
                "start": 32,
                "end": 32
            },
            "flags": 16,
            "start": 30,
            "end": 33
        }
    ],
    "isModule": false,
    "source": "(x = delete ((switch) = f)) => {}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 33
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Identifier expected - start: 14, end: 20
✖ Missing an opening parentheses - '( - start: 20, end: 21
✖ The parser expected to find a '}' to match the '{' token here - start: 21, end: 23
✖ Expected a `;` - start: 25, end: 26
✖ Declaration or statement expected - start: 26, end: 27
✖ Declaration or statement expected - start: 27, end: 30

```
