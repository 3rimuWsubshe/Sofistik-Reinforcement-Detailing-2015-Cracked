# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: simple
> :: case: function yield(yield) { yield: yield (yield + yield(0)); }
## Input

`````js
function yield(yield) { yield: yield (yield + yield(0)); }
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 0,
                "start": 0,
                "end": 8
            },
            "generatorToken": null,
            "name": {
                "kind": 134299649,
                "text": "yield",
                "rawText": "yield",
                "flags": 96,
                "start": 8,
                "end": 14
            },
            "formalParameters": {
                "kind": 214,
                "formalParameterList": [
                    {
                        "kind": 215,
                        "ellipsisToken": null,
                        "binding": {
                            "kind": 134299649,
                            "text": "yield",
                            "rawText": "yield",
                            "flags": 96,
                            "start": 15,
                            "end": 20
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": null,
                        "flags": 32,
                        "start": 15,
                        "end": 20
                    }
                ],
                "trailingComma": false,
                "flags": 32,
                "start": 14,
                "end": 21
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [
                        {
                            "kind": 120,
                            "expression": {
                                "kind": 134299649,
                                "text": "yield",
                                "rawText": "yield",
                                "flags": 96,
                                "start": 23,
                                "end": 29
                            },
                            "flags": 16,
                            "start": 23,
                            "end": 29
                        }
                    ],
                    "flags": 32,
                    "start": 23,
                    "end": 29
                },
                "flags": 32,
                "start": 21,
                "end": 29
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 16,
            "start": 0,
            "end": 29
        },
        {
            "kind": 120,
            "expression": {
                "kind": 131,
                "expression": {
                    "kind": 134299649,
                    "text": "yield",
                    "rawText": "yield",
                    "flags": 96,
                    "start": 30,
                    "end": 36
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [
                        {
                            "kind": 198,
                            "left": {
                                "kind": 134299649,
                                "text": "yield",
                                "rawText": "yield",
                                "flags": 96,
                                "start": 38,
                                "end": 43
                            },
                            "operatorToken": {
                                "kind": 34098,
                                "flags": 64,
                                "start": 43,
                                "end": 45
                            },
                            "right": {
                                "kind": 131,
                                "expression": {
                                    "kind": 134299649,
                                    "text": "yield",
                                    "rawText": "yield",
                                    "flags": 96,
                                    "start": 45,
                                    "end": 51
                                },
                                "argumentList": {
                                    "kind": 256,
                                    "elements": [
                                        {
                                            "kind": 201392130,
                                            "text": 0,
                                            "rawText": "0",
                                            "flags": 96,
                                            "start": 52,
                                            "end": 53
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "start": 52,
                                    "end": 53
                                },
                                "flags": 32,
                                "start": 45,
                                "end": 54
                            },
                            "flags": 32,
                            "start": 38,
                            "end": 54
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 38,
                    "end": 54
                },
                "flags": 32,
                "start": 30,
                "end": 55
            },
            "flags": 16,
            "start": 30,
            "end": 56
        }
    ],
    "isModule": false,
    "source": "function yield(yield) { yield: yield (yield + yield(0)); }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 58
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ Statement expected - start: 29, end: 30
✖ Statement expected - start: 56, end: 58

```
