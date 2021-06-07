# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-06
- From: kataw8/test\__snapshot__/parser/miscellaneous/should-pass/autogen.md
- Path: kataw8/test\__snapshot__\parser\miscellaneous\should-pass\gen\stand-alone
> :: test: stand-alone
> :: case: /* before */async function /* a */ f /* b */ ( /* c */ x /* d */ , /* e */ y /* f */ ) /* g */ { /* h */ ; /* i */ ; /* j */ }/* after */
## Input

`````js
/* before */async function /* a */ f /* b */ ( /* c */ x /* d */ , /* e */ y /* f */ ) /* g */ { /* h */ ; /* i */ ; /* j */ }/* after */
`````
## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": {
                "kind": 82031,
                "flags": 64,
                "start": 0,
                "end": 17
            },
            "functionKeyword": {
                "kind": 37822554,
                "flags": 64,
                "start": 17,
                "end": 26
            },
            "generatorToken": null,
            "name": {
                "kind": 134299649,
                "text": "f",
                "rawText": "f",
                "flags": 96,
                "start": 26,
                "end": 36
            },
            "formalParameters": {
                "kind": 214,
                "formalParameterList": [
                    {
                        "kind": 134299649,
                        "text": "x",
                        "rawText": "x",
                        "flags": 96,
                        "start": 46,
                        "end": 56
                    },
                    {
                        "kind": 134299649,
                        "text": "y",
                        "rawText": "y",
                        "flags": 96,
                        "start": 66,
                        "end": 76
                    }
                ],
                "trailingComma": false,
                "flags": 32,
                "start": 36,
                "end": 86
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [
                        {
                            "kind": 168,
                            "flags": 16,
                            "start": 96,
                            "end": 106
                        },
                        {
                            "kind": 168,
                            "flags": 16,
                            "start": 106,
                            "end": 116
                        }
                    ],
                    "flags": 32,
                    "start": 96,
                    "end": 116
                },
                "flags": 32,
                "start": 86,
                "end": 126
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 144,
            "start": 0,
            "end": 126
        }
    ],
    "isModule": false,
    "source": "/* before */async function /* a */ f /* b */ ( /* c */ x /* d */ , /* e */ y /* f */ ) /* g */ { /* h */ ; /* i */ ; /* j */ }/* after */",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 137
}
```

### Printed

```javascript
/* before */
async function f /* b */(/* c */ x /* d */, /* e */ y /* f */) /* g */ {

} /* after */
```

### Diagnostics

```javascript
✔ No errors
```
