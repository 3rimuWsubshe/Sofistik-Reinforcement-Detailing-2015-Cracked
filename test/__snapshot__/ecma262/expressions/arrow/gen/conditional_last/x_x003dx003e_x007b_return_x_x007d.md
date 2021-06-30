# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-14
- From: kataw/test/__snapshot__/parser/expressions/arrow/autogen.md
- Path: kataw/test/__snapshot__/parser/expressions/arrow/gen/conditional_last
> :: test: conditional_last
> :: case: x => { return x; }
## Options

`````js
{}
`````
## Input

`````js
bar, x => { return x; };
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
                "kind": 132,
                "expressions": [
                    {
                        "kind": 134299649,
                        "text": "bar",
                        "rawText": "bar",
                        "flags": 96,
                        "start": 0,
                        "end": 3
                    },
                    {
                        "kind": 271,
                        "asyncKeyword": null,
                        "typeParameters": null,
                        "arrowPatameterList": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "start": 4,
                            "end": 6
                        },
                        "returnType": null,
                        "arrowToken": {
                            "kind": 10,
                            "flags": 64,
                            "start": 6,
                            "end": 9
                        },
                        "contents": {
                            "kind": 216,
                            "functionStatementList": {
                                "kind": 217,
                                "directives": [],
                                "statements": [
                                    {
                                        "kind": 161,
                                        "returnKeyword": {
                                            "kind": 37757022,
                                            "flags": 80,
                                            "start": 11,
                                            "end": 18
                                        },
                                        "expression": {
                                            "kind": 134299649,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 96,
                                            "start": 18,
                                            "end": 20
                                        },
                                        "flags": 80,
                                        "start": 11,
                                        "end": 21
                                    }
                                ],
                                "flags": 32,
                                "start": 11,
                                "end": 21
                            },
                            "flags": 32,
                            "start": 9,
                            "end": 23
                        },
                        "flags": 32,
                        "start": 4,
                        "end": 23
                    }
                ],
                "flags": 32,
                "start": 0,
                "end": 23
            },
            "flags": 16,
            "start": 0,
            "end": 24
        }
    ],
    "isModule": false,
    "source": "bar, x => { return x; };",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 24
}
```

### Printed

```javascript

bar, x =>  { return x; };

```

### Diagnostics

```javascript
✔ No errors
```
