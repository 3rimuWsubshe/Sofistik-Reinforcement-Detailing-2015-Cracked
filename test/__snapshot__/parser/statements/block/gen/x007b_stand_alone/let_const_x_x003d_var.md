# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: { stand alone
> :: case: let const x = var
## Input

`````js
{ let const x = var
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 249,
            "block": {
                "kind": 124,
                "statements": [
                    {
                        "kind": 120,
                        "expression": {
                            "kind": 134299649,
                            "text": "let",
                            "rawText": "let",
                            "flags": 96,
                            "start": 1,
                            "end": 5
                        },
                        "flags": 16,
                        "start": 1,
                        "end": 5
                    },
                    {
                        "kind": 162,
                        "lexicalKeyword": {
                            "kind": 37757004,
                            "flags": 0,
                            "start": 5,
                            "end": 11
                        },
                        "binding": {
                            "kind": 151,
                            "bindingList": [
                                {
                                    "kind": 190,
                                    "binding": {
                                        "kind": 134299649,
                                        "text": "x",
                                        "rawText": "x",
                                        "flags": 96,
                                        "start": 11,
                                        "end": 13
                                    },
                                    "optionalToken": null,
                                    "type": null,
                                    "initializer": {
                                        "kind": 16637,
                                        "text": "",
                                        "flags": 68,
                                        "start": 15,
                                        "end": 15
                                    },
                                    "flags": 16,
                                    "start": 11,
                                    "end": 15
                                }
                            ],
                            "flags": 16777232,
                            "start": 11,
                            "end": 15
                        },
                        "flags": 33554448,
                        "start": 5,
                        "end": 15
                    },
                    {
                        "kind": 155,
                        "declareKeyword": null,
                        "varKeyword": {
                            "kind": 37757002,
                            "flags": 0,
                            "start": 15,
                            "end": 19
                        },
                        "declarationList": {
                            "kind": 156,
                            "declarations": [],
                            "flags": 16,
                            "start": 19,
                            "end": 19
                        },
                        "flags": 16,
                        "start": 15,
                        "end": 19
                    }
                ],
                "flags": 16,
                "start": 1,
                "end": 19
            },
            "flags": 16,
            "start": 0,
            "end": 19
        }
    ],
    "isModule": false,
    "source": "{ let const x = var",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 19
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ Expression expected - start: 15, end: 19
✖ ',' expected - start: 15, end: 19

```
