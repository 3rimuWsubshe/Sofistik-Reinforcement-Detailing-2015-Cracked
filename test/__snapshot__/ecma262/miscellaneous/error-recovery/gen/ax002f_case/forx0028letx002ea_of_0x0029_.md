# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-14
- From: kataw/test/__snapshot__/parser/miscellaneous/error-recovery/autogen.md
- Path: kataw/test/__snapshot__/parser/miscellaneous/error-recovery/gen/ax002f_case
> :: test: a/ case
> :: case: for(let.a of 0);
## Options

`````js
{}
`````
## Input

`````js
for(let.a of 0);
`````
## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 167,
            "forKeyword": {
                "kind": 37757017,
                "flags": 80,
                "start": 0,
                "end": 3
            },
            "awaitKeyword": null,
            "initializer": {
                "kind": 129,
                "member": {
                    "kind": 134299649,
                    "text": "let",
                    "rawText": "let",
                    "flags": 96,
                    "start": 4,
                    "end": 7
                },
                "expression": {
                    "kind": 134299649,
                    "text": "a",
                    "rawText": "a",
                    "flags": 96,
                    "start": 8,
                    "end": 9
                },
                "flags": 96,
                "start": 4,
                "end": 9
            },
            "ofKeyword": {
                "kind": 16793717,
                "flags": 64,
                "start": 9,
                "end": 12
            },
            "expression": {
                "kind": 201392130,
                "text": 0,
                "rawText": "0",
                "flags": 96,
                "start": 12,
                "end": 14
            },
            "statement": {
                "kind": 168,
                "flags": 16,
                "start": 15,
                "end": 16
            },
            "flags": 80,
            "start": 0,
            "end": 16
        }
    ],
    "isModule": false,
    "source": "for(let.a of 0);",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 16
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ The left-hand side of a for-of loop cannot start with 'let' - start: 9, end: 12

```
