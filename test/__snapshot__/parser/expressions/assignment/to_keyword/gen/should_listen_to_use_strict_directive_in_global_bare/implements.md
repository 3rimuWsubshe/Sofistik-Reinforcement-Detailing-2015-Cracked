# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-03
- From: kataw8/test\__snapshot__/parser/expressions/assignment/to_keyword/autogen.md
- Path: kataw8/test\__snapshot__\parser\expressions\assignment\to_keyword\gen\should_listen_to_use_strict_directive_in_global_bare
> :: test: should listen to use strict directive in global bare
> :: case: implements
## Input

`````js
"use strict"; implements = x;
`````
## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [
        {
            "kind": 201392131,
            "text": "use strict",
            "rawText": "\"use strict\"",
            "flags": 96,
            "start": 0,
            "end": 12
        }
    ],
    "statements": [
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "implements",
                    "rawText": "implements",
                    "flags": 96,
                    "start": 13,
                    "end": 24
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 64,
                    "start": 24,
                    "end": 26
                },
                "right": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 96,
                    "start": 26,
                    "end": 28
                },
                "flags": 32,
                "start": 13,
                "end": 28
            },
            "flags": 16,
            "start": 13,
            "end": 29
        }
    ],
    "isModule": false,
    "source": "\"use strict\"; implements = x;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 29
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Identifier expected. Reserved word in strict mode - start: 13, end: 24

```
