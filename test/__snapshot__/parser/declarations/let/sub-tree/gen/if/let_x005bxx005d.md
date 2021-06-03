# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-03
- From: kataw8/test\__snapshot__/parser/declarations/let/sub-tree/autogen.md
- Path: kataw8/test\__snapshot__\parser\declarations\let\sub-tree\gen\if
> :: test: if
> :: case: let [x]
## Input

`````js
if (a) let [x]
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
                "kind": 134299649,
                "text": "a",
                "rawText": "a",
                "flags": 96,
                "start": 4,
                "end": 5
            },
            "consequent": {
                "kind": 120,
                "expression": {
                    "kind": 536871042,
                    "member": {
                        "kind": 134299649,
                        "text": "let",
                        "rawText": "let",
                        "flags": 96,
                        "start": 6,
                        "end": 10
                    },
                    "expression": {
                        "kind": 134299649,
                        "text": "x",
                        "rawText": "x",
                        "flags": 96,
                        "start": 12,
                        "end": 13
                    },
                    "flags": 32,
                    "start": 6,
                    "end": 14
                },
                "flags": 16,
                "start": 6,
                "end": 14
            },
            "elseKeyword": null,
            "alternate": null,
            "flags": 16,
            "start": 0,
            "end": 14
        }
    ],
    "isModule": false,
    "source": "if (a) let [x]",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 14
}
```

### Printed

```javascript

if (a) ;
```

### Diagnostics

```javascript
✔ No errors
```
