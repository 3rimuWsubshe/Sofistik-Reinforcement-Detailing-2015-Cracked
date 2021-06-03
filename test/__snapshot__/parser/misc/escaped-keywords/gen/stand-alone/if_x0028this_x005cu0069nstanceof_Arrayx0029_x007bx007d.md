# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-03
- From: kataw8/test\__snapshot__/parser/misc/escaped-keywords/autogen.md
- Path: kataw8/test\__snapshot__\parser\misc\escaped-keywords\gen\stand-alone
> :: test: stand-alone
> :: case: if (this \u0069nstanceof Array) {}
## Input

`````js
if (this \u0069nstanceof Array) {}
`````
## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 164,
            "ifKeyword": {
                "kind": 37757019,
                "flags": 80,
                "start": 0,
                "end": 2
            },
            "expression": {
                "kind": 198,
                "left": {
                    "kind": 4276321,
                    "flags": 96,
                    "start": 4,
                    "end": 8
                },
                "operatorToken": {
                    "kind": 4229173,
                    "flags": 16448,
                    "start": 8,
                    "end": 24
                },
                "right": {
                    "kind": 134299649,
                    "text": "Array",
                    "rawText": "Array",
                    "flags": 96,
                    "start": 24,
                    "end": 30
                },
                "flags": 32,
                "start": 4,
                "end": 30
            },
            "consequent": {
                "kind": 124,
                "block": {
                    "kind": 249,
                    "statements": [],
                    "flags": 16,
                    "start": 33,
                    "end": 33
                },
                "flags": 16,
                "start": 31,
                "end": 34
            },
            "elseKeyword": null,
            "alternate": null,
            "flags": 16,
            "start": 0,
            "end": 34
        }
    ],
    "isModule": false,
    "source": "if (this \\u0069nstanceof Array) {}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 34
}
```

### Printed

```javascript

if (this inctanceof Array) {
  }
```

### Diagnostics

```javascript
✔ No errors
```
