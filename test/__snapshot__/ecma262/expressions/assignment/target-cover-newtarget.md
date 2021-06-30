# Kataw parser test case

## Input

`````js
function f() {
  (new.target) = 1;
}
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
            "asteriskToken": null,
            "name": {
                "kind": 134299649,
                "text": "f",
                "rawText": "f",
                "flags": 96,
                "start": 8,
                "end": 10
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [],
                "trailingComma": false,
                "flags": 32,
                "start": 11,
                "end": 11
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
                                "kind": 125,
                                "left": {
                                    "kind": 121,
                                    "expression": {
                                        "kind": 211,
                                        "newKeyword": {
                                            "kind": 138477661,
                                            "flags": 96,
                                            "start": 18,
                                            "end": 21
                                        },
                                        "targetIdentifier": {
                                            "kind": 16594,
                                            "flags": 96,
                                            "start": 22,
                                            "end": 28
                                        },
                                        "flags": 96,
                                        "start": 18,
                                        "end": 28
                                    },
                                    "flags": 32,
                                    "start": 14,
                                    "end": 29
                                },
                                "operatorToken": {
                                    "kind": 4125,
                                    "flags": 96,
                                    "start": 29,
                                    "end": 31
                                },
                                "right": {
                                    "kind": 201392130,
                                    "text": 1,
                                    "rawText": "1",
                                    "flags": 96,
                                    "start": 31,
                                    "end": 33
                                },
                                "flags": 32,
                                "start": 14,
                                "end": 33
                            },
                            "flags": 16,
                            "start": 14,
                            "end": 34
                        }
                    ],
                    "flags": 33,
                    "start": 14,
                    "end": 34
                },
                "flags": 32,
                "start": 12,
                "end": 36
            },
            "returnType": null,
            "flags": 16,
            "start": 0,
            "end": 36
        }
    ],
    "isModule": false,
    "source": "function f() {\n  (new.target) = 1;\n}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 36
}
```

### Printed

```javascript

function f() {
  (new.target) = 1;
}

```

### Diagnostics

```javascript
✔ No errors
```
