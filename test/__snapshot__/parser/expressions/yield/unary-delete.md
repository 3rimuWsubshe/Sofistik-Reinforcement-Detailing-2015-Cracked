# Kataw parser test case

## Input

`````js
function *f() {  return delete yield;  }
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
            "generatorToken": {
                "kind": 67143222,
                "flags": 64,
                "start": 8,
                "end": 10
            },
            "name": {
                "kind": 134299649,
                "text": "f",
                "rawText": "f",
                "flags": 96,
                "start": 10,
                "end": 11
            },
            "formalParameters": {
                "kind": 214,
                "formalParameterList": [],
                "trailingComma": false,
                "flags": 32,
                "start": 11,
                "end": 13
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
                                "start": 15,
                                "end": 23
                            },
                            "expression": {
                                "kind": 126,
                                "operandToken": {
                                    "kind": 4259886,
                                    "flags": 64,
                                    "start": 23,
                                    "end": 30
                                },
                                "operand": {
                                    "kind": 229,
                                    "yieldKeyword": {
                                        "kind": 8454253,
                                        "flags": 64,
                                        "start": 30,
                                        "end": 36
                                    },
                                    "delegate": false,
                                    "asteriskToken": null,
                                    "expression": null,
                                    "flags": 32,
                                    "start": 30,
                                    "end": 36
                                },
                                "flags": 32,
                                "start": 23,
                                "end": 36
                            },
                            "flags": 16,
                            "start": 0,
                            "end": 15
                        }
                    ],
                    "flags": 32,
                    "start": 15,
                    "end": 37
                },
                "flags": 32,
                "start": 13,
                "end": 40
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 272,
            "start": 0,
            "end": 40
        }
    ],
    "isModule": false,
    "source": "function *f() {  return delete yield;  }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 40
}
```

### Printed

```javascript

function * f() {
  return  delete  yield;
}
```

### Diagnostics

```javascript
✔ No errors
```
