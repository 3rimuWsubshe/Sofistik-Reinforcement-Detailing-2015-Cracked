# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-03
- From: kataw8/test\__snapshot__/parser/misc/destructuring/valid-cases/autogen.md
- Path: kataw8/test\__snapshot__\parser\misc\destructuring\valid-cases\gen\stand_alone
> :: test: stand alone
> :: case: x=y=z
## Input

`````js
x=y=z
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
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 96,
                    "start": 0,
                    "end": 1
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 64,
                    "start": 1,
                    "end": 2
                },
                "right": {
                    "kind": 125,
                    "left": {
                        "kind": 134299649,
                        "text": "y",
                        "rawText": "y",
                        "flags": 96,
                        "start": 2,
                        "end": 3
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "flags": 64,
                        "start": 3,
                        "end": 4
                    },
                    "right": {
                        "kind": 134299649,
                        "text": "z",
                        "rawText": "z",
                        "flags": 96,
                        "start": 4,
                        "end": 5
                    },
                    "flags": 32,
                    "start": 2,
                    "end": 5
                },
                "flags": 32,
                "start": 0,
                "end": 5
            },
            "flags": 16,
            "start": 0,
            "end": 5
        }
    ],
    "isModule": false,
    "source": "x=y=z",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 5
}
```

### Printed

```javascript

x = y = z;
```

### Diagnostics

```javascript
✔ No errors
```
