# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-14
- From: kataw/test/__snapshot__/parser/expressions/arrow/position/autogen.md
- Path: kataw/test/__snapshot__/parser/expressions/arrow/position/gen/template
> :: test: template
> :: case: async async => {}
## Options

`````js
{}
`````
## Input

`````js
`a ${async async => {}} b`
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
                "kind": 227,
                "spans": [
                    {
                        "kind": 65764,
                        "rawText": "a ",
                        "text": "a ",
                        "expression": {
                            "kind": 271,
                            "asyncKeyword": {
                                "kind": 82031,
                                "flags": 64,
                                "start": 5,
                                "end": 10
                            },
                            "typeParameters": null,
                            "arrowPatameterList": {
                                "kind": 134299649,
                                "text": "async",
                                "rawText": "async",
                                "flags": 96,
                                "start": 10,
                                "end": 16
                            },
                            "returnType": null,
                            "arrowToken": {
                                "kind": 10,
                                "flags": 64,
                                "start": 16,
                                "end": 19
                            },
                            "contents": {
                                "kind": 216,
                                "functionStatementList": {
                                    "kind": 217,
                                    "directives": [],
                                    "statements": [],
                                    "flags": 32,
                                    "start": 21,
                                    "end": 21
                                },
                                "flags": 32,
                                "start": 19,
                                "end": 22
                            },
                            "flags": 288,
                            "start": 5,
                            "end": 22
                        },
                        "flags": 32,
                        "start": 0,
                        "end": 22
                    }
                ],
                "tail": {
                    "kind": 458761,
                    "text": " b",
                    "rawText": " b",
                    "flags": 96,
                    "start": 22,
                    "end": 26
                },
                "flags": 32,
                "start": 0,
                "end": 26
            },
            "flags": 16,
            "start": 0,
            "end": 26
        }
    ],
    "isModule": false,
    "source": "`a ${async async => {}} b`",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 26
}
```

### Printed

```javascript

`a ${async async =>  { }} b`;

```

### Diagnostics

```javascript
✔ No errors
```
