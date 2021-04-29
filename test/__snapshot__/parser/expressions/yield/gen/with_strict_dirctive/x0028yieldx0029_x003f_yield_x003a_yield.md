# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: with_strict_dirctive
> :: case: (yield) ? yield : yield
## Input

`````js
'use strict'; (yield) ? yield : yield
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [
        {
            "kind": 201392131,
            "text": "use strict",
            "rawText": "use strict",
            "flags": 4194400,
            "start": 0,
            "end": 12
        }
    ],
    "statements": [
        {
            "kind": 120,
            "expression": {
                "kind": 197,
                "shortCircuit": {
                    "kind": 121,
                    "expression": {
                        "kind": 134299649,
                        "text": "yield",
                        "rawText": "yield",
                        "flags": 96,
                        "start": 15,
                        "end": 20
                    },
                    "flags": 32,
                    "start": 13,
                    "end": 21
                },
                "questionToken": {
                    "kind": 134217750,
                    "flags": 0,
                    "start": 21,
                    "end": 23
                },
                "consequent": {
                    "kind": 134299649,
                    "text": "yield",
                    "rawText": "yield",
                    "flags": 96,
                    "start": 23,
                    "end": 29
                },
                "colonToken": {
                    "kind": 21,
                    "flags": 0,
                    "start": 29,
                    "end": 31
                },
                "alternate": {
                    "kind": 134299649,
                    "text": "yield",
                    "rawText": "yield",
                    "flags": 96,
                    "start": 31,
                    "end": 37
                },
                "flags": 32,
                "start": 13,
                "end": 37
            },
            "flags": 16,
            "start": 13,
            "end": 37
        }
    ],
    "isModule": false,
    "source": "'use strict'; (yield) ? yield : yield",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 37
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✔ No errors
```
