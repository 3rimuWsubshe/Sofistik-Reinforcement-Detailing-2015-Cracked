# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: n
> :: test: function declaration
> :: case: yield * 1; return 37; yield * 'dead';
## Input

`````js
function not_gen() { yield * 1; return 37; yield * 'dead'; }}
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
                "text": "not_gen",
                "rawText": "not_gen",
                "flags": 96,
                "start": 8,
                "end": 16
            },
            "formalParameters": {
                "kind": 214,
                "formalParameterList": [],
                "trailingComma": false,
                "flags": 32,
                "start": 16,
                "end": 18
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
                                "kind": 198,
                                "left": {
                                    "kind": 134299649,
                                    "text": "yield",
                                    "rawText": "yield",
                                    "flags": 96,
                                    "start": 20,
                                    "end": 26
                                },
                                "operatorToken": {
                                    "kind": 67143222,
                                    "flags": 64,
                                    "start": 26,
                                    "end": 28
                                },
                                "right": {
                                    "kind": 201392130,
                                    "text": 1,
                                    "rawText": "1",
                                    "flags": 96,
                                    "start": 28,
                                    "end": 30
                                },
                                "flags": 32,
                                "start": 20,
                                "end": 30
                            },
                            "flags": 16,
                            "start": 20,
                            "end": 31
                        },
                        {
                            "kind": 161,
                            "returnKeyword": {
                                "kind": 37757022,
                                "flags": 0,
                                "start": 31,
                                "end": 38
                            },
                            "expression": {
                                "kind": 201392130,
                                "text": 37,
                                "rawText": "37",
                                "flags": 96,
                                "start": 38,
                                "end": 41
                            },
                            "flags": 16,
                            "start": 0,
                            "end": 31
                        },
                        {
                            "kind": 120,
                            "expression": {
                                "kind": 198,
                                "left": {
                                    "kind": 134299649,
                                    "text": "yield",
                                    "rawText": "yield",
                                    "flags": 96,
                                    "start": 42,
                                    "end": 48
                                },
                                "operatorToken": {
                                    "kind": 67143222,
                                    "flags": 64,
                                    "start": 48,
                                    "end": 50
                                },
                                "right": {
                                    "kind": 201392131,
                                    "text": "dead",
                                    "rawText": "dead",
                                    "flags": 4194400,
                                    "start": 50,
                                    "end": 57
                                },
                                "flags": 32,
                                "start": 42,
                                "end": 57
                            },
                            "flags": 16,
                            "start": 42,
                            "end": 58
                        }
                    ],
                    "flags": 32,
                    "start": 20,
                    "end": 58
                },
                "flags": 32,
                "start": 18,
                "end": 60
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 16,
            "start": 0,
            "end": 60
        }
    ],
    "isModule": false,
    "source": "function not_gen() { yield * 1; return 37; yield * 'dead'; }}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 61
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ Statement expected - start: 60, end: 61

```
