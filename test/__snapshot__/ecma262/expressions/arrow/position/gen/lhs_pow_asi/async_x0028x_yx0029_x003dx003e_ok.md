# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-14
- From: kataw/test/__snapshot__/parser/expressions/arrow/position/autogen.md
- Path: kataw/test/__snapshot__/parser/expressions/arrow/position/gen/lhs_pow_asi
> :: test: lhs pow asi
> :: case: async (x, y) => ok
## Options

`````js
{}
`````
## Input

`````js
async (x, y) => ok
** x
`````
## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 271,
            "asyncKeyword": {
                "kind": 82031,
                "flags": 64,
                "start": 0,
                "end": 5
            },
            "typeParameters": null,
            "arrowPatameterList": {
                "kind": 342,
                "parameters": [
                    {
                        "kind": 134299649,
                        "text": "x",
                        "rawText": "x",
                        "flags": 96,
                        "start": 7,
                        "end": 8
                    },
                    {
                        "kind": 134299649,
                        "text": "y",
                        "rawText": "y",
                        "flags": 96,
                        "start": 9,
                        "end": 11
                    }
                ],
                "trailingComma": false,
                "flags": 32,
                "start": 7,
                "end": 12
            },
            "returnType": null,
            "arrowToken": {
                "kind": 10,
                "flags": 64,
                "start": 12,
                "end": 15
            },
            "contents": {
                "kind": 198,
                "left": {
                    "kind": 134299649,
                    "text": "ok",
                    "rawText": "ok",
                    "flags": 96,
                    "start": 15,
                    "end": 18
                },
                "operatorToken": {
                    "kind": 35897,
                    "flags": 97,
                    "start": 18,
                    "end": 21
                },
                "right": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 96,
                    "start": 21,
                    "end": 23
                },
                "flags": 32,
                "start": 15,
                "end": 23
            },
            "flags": 288,
            "start": 0,
            "end": 23
        }
    ],
    "isModule": false,
    "source": "async (x, y) => ok\n** x",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 23
}
```

### Printed

```javascript

async (x, y) => ok ** x

```

### Diagnostics

```javascript
✔ No errors
```
