# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-06
- From: kataw8/test\__snapshot__/parser/miscellaneous/should-pass/autogen.md
- Path: kataw8/test\__snapshot__\parser\miscellaneous\should-pass\gen\stand-alone
> :: test: stand-alone
> :: case: for (var of of of){}
## Input

`````js
for (var of of of){}
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
                "kind": 156,
                "declarations": [
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 134299649,
                            "text": "of",
                            "rawText": "of",
                            "flags": 96,
                            "start": 8,
                            "end": 11
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": null,
                        "flags": 16,
                        "start": 8,
                        "end": 11
                    }
                ],
                "flags": 16,
                "start": 8,
                "end": 11
            },
            "ofKeyword": {
                "kind": 16793717,
                "flags": 64,
                "start": 11,
                "end": 14
            },
            "expression": {
                "kind": 134299649,
                "text": "of",
                "rawText": "of",
                "flags": 96,
                "start": 14,
                "end": 17
            },
            "statement": {
                "kind": 124,
                "block": {
                    "kind": 249,
                    "statements": [],
                    "flags": 16,
                    "start": 19,
                    "end": 19
                },
                "flags": 16,
                "start": 18,
                "end": 20
            },
            "flags": 16,
            "start": 0,
            "end": 20
        }
    ],
    "isModule": false,
    "source": "for (var of of of){}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 20
}
```

### Printed

```javascript

for ( of of)
  {
  }
```

### Diagnostics

```javascript
✔ No errors
```
