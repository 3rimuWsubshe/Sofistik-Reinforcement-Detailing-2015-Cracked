# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-14
- From: kataw/test/__snapshot__/parser/statements/do-while/autogen.md
- Path: kataw/test/__snapshot__/parser/statements/do-while/gen/do_stand_alone
> :: test: do stand alone
> :: case: /**/ /x do while
## Options

`````js
{}
`````
## Input

`````js
do /**/ /x do while
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
                    "kind": 371,
                    "text": "/x do while",
                    "flags": 96,
                    "start": 2,
                    "end": 19
                },
                "flags": 16,
                "start": 2,
                "end": 19
            },
            "whileKeyword": null,
            "expression": {
                "kind": 16637,
                "text": "",
                "rawText": "",
                "flags": 64,
                "start": 19,
                "end": 19
            },
            "flags": 80,
            "start": 0,
            "end": 19
        }
    ],
    "isModule": false,
    "source": "do /**/ /x do while",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 19
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Unterminated regular expression - start: 2, end: 19
✖ Missing an opening parentheses - '( - start: 8, end: 19

```
