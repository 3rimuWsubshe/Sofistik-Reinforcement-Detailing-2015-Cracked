# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-14
- From: kataw/test/__snapshot__/parser/statements/do-while/autogen.md
- Path: kataw/test/__snapshot__/parser/statements/do-while/gen/missing_parens_and_block
> :: test: missing parens and block
> :: case: false
## Options

`````js
{}
`````
## Input

`````js
do false while
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
                "kind": 120,
                "expression": {
                    "kind": 205586437,
                    "flags": 96,
                    "start": 2,
                    "end": 8
                },
                "flags": 16,
                "start": 2,
                "end": 8
            },
            "whileKeyword": {
                "kind": 37757028,
                "flags": 64,
                "start": 8,
                "end": 14
            },
            "expression": {
                "kind": 16637,
                "text": "",
                "rawText": "",
                "flags": 64,
                "start": 14,
                "end": 14
            },
            "flags": 80,
            "start": 0,
            "end": 14
        }
    ],
    "isModule": false,
    "source": "do false while",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 14
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Expected a `;` - start: 8, end: 14

```
