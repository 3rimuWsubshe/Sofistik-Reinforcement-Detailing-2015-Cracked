# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: condiional_paren_middle
> :: case: eval => { 'use strict'; 0 }
## Input

`````js
bar ? (eval => { 'use strict'; 0 }) : baz;
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 120,
            "expression": {
                "kind": 197,
                "shortCircuit": {
                    "kind": 134299649,
                    "text": "bar",
                    "rawText": "bar",
                    "flags": 96,
                    "start": 0,
                    "end": 3
                },
                "questionToken": {
                    "kind": 134217750,
                    "flags": 0,
                    "start": 3,
                    "end": 5
                },
                "consequent": {
                    "kind": 121,
                    "expression": {
                        "kind": 271,
                        "arrowToken": {
                            "kind": 10,
                            "flags": 0,
                            "start": 11,
                            "end": 14
                        },
                        "typeParameters": null,
                        "parameters": {
                            "kind": 134299649,
                            "text": "eval",
                            "rawText": "eval",
                            "flags": 96,
                            "start": 7,
                            "end": 11
                        },
                        "asyncToken": null,
                        "returnType": null,
                        "contents": {
                            "kind": 216,
                            "functionStatementList": {
                                "kind": 217,
                                "directives": [
                                    {
                                        "kind": 201392131,
                                        "text": "use strict",
                                        "rawText": "use strict",
                                        "flags": 4194400,
                                        "start": 16,
                                        "end": 29
                                    }
                                ],
                                "statements": [
                                    {
                                        "kind": 120,
                                        "expression": {
                                            "kind": 201392130,
                                            "text": 0,
                                            "rawText": "0",
                                            "flags": 96,
                                            "start": 30,
                                            "end": 32
                                        },
                                        "flags": 16,
                                        "start": 30,
                                        "end": 32
                                    }
                                ],
                                "flags": 4194336,
                                "start": 16,
                                "end": 32
                            },
                            "flags": 32,
                            "start": 14,
                            "end": 34
                        },
                        "flags": 32,
                        "start": 7,
                        "end": 34
                    },
                    "flags": 32,
                    "start": 5,
                    "end": 35
                },
                "colonToken": {
                    "kind": 21,
                    "flags": 0,
                    "start": 35,
                    "end": 37
                },
                "alternate": {
                    "kind": 134299649,
                    "text": "baz",
                    "rawText": "baz",
                    "flags": 96,
                    "start": 37,
                    "end": 41
                },
                "flags": 32,
                "start": 0,
                "end": 41
            },
            "flags": 16,
            "start": 0,
            "end": 42
        }
    ],
    "isModule": false,
    "source": "bar ? (eval => { 'use strict'; 0 }) : baz;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 42
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
