# Kataw parser test case

## Input

`````js
function f(){ do        if (x) break y   ; while(true);}
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
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 64,
                "start": 0,
                "end": 8
            },
            "generatorToken": null,
            "name": {
                "kind": 134299649,
                "text": "f",
                "rawText": "f",
                "flags": 96,
                "start": 8,
                "end": 10
            },
            "formalParameters": {
                "kind": 214,
                "formalParameterList": [],
                "trailingComma": false,
                "flags": 32,
                "start": 10,
                "end": 12
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [
                        {
                            "kind": 169,
                            "doKeyword": {
                                "kind": 4202580,
                                "flags": 80,
                                "start": 13,
                                "end": 16
                            },
                            "expression": {
                                "kind": 24752947,
                                "flags": 96,
                                "start": 49,
                                "end": 53
                            },
                            "whileKeyword": {
                                "kind": 37757028,
                                "flags": 64,
                                "start": 42,
                                "end": 48
                            },
                            "statement": {
                                "kind": 164,
                                "ifKeyword": {
                                    "kind": 37757019,
                                    "flags": 80,
                                    "start": 16,
                                    "end": 26
                                },
                                "expression": {
                                    "kind": 134299649,
                                    "text": "x",
                                    "rawText": "x",
                                    "flags": 96,
                                    "start": 28,
                                    "end": 29
                                },
                                "consequent": {
                                    "kind": 150,
                                    "breakKeyword": {
                                        "kind": 37757005,
                                        "flags": 80,
                                        "start": 30,
                                        "end": 36
                                    },
                                    "label": {
                                        "kind": 134299649,
                                        "text": "y",
                                        "rawText": "y",
                                        "flags": 96,
                                        "start": 36,
                                        "end": 38
                                    },
                                    "flags": 16,
                                    "start": 30,
                                    "end": 42
                                },
                                "elseKeyword": null,
                                "alternate": null,
                                "flags": 16,
                                "start": 16,
                                "end": 42
                            },
                            "flags": 16,
                            "start": 13,
                            "end": 55
                        }
                    ],
                    "flags": 32,
                    "start": 13,
                    "end": 55
                },
                "flags": 32,
                "start": 12,
                "end": 56
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 16,
            "start": 0,
            "end": 56
        }
    ],
    "isModule": false,
    "source": "function f(){ do        if (x) break y   ; while(true);}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 56
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ A 'break' statement can only jump to a label of an enclosing statement - start: 38, end: 42

```
