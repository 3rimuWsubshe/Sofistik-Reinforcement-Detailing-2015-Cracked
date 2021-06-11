# Kataw parser test case

## Input

`````js
function e(x: {}): () => string {
  return x;
}

`````

## Options

### Parser Options

`````js
{ allowTypes : true }
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
                "text": "e",
                "rawText": "e",
                "flags": 96,
                "start": 8,
                "end": 10
            },
            "formalParameters": {
                "kind": 214,
                "formalParameterList": [
                    {
                        "kind": 281,
                        "ellipsisToken": null,
                        "left": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "start": 11,
                            "end": 12
                        },
                        "optionalToken": null,
                        "type": {
                            "kind": 139,
                            "type": {
                                "kind": 134234353,
                                "properties": [],
                                "flags": 0,
                                "start": 13,
                                "end": 16
                            },
                            "flags": 0,
                            "start": 12,
                            "end": 16
                        },
                        "right": null,
                        "flags": 32,
                        "start": 11,
                        "end": 16
                    }
                ],
                "trailingComma": false,
                "flags": 32,
                "start": 10,
                "end": 17
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
                                "flags": 81,
                                "start": 33,
                                "end": 42
                            },
                            "expression": {
                                "kind": 134299649,
                                "text": "x",
                                "rawText": "x",
                                "flags": 96,
                                "start": 42,
                                "end": 44
                            },
                            "flags": 81,
                            "start": 33,
                            "end": 45
                        }
                    ],
                    "flags": 33,
                    "start": 33,
                    "end": 45
                },
                "flags": 32,
                "start": 31,
                "end": 47
            },
            "typeParameters": null,
            "returnType": {
                "kind": 139,
                "type": {
                    "kind": 261,
                    "arrowToken": {
                        "kind": 10,
                        "flags": 64,
                        "start": 21,
                        "end": 24
                    },
                    "parameters": {
                        "kind": 208,
                        "parameters": [],
                        "trailingComma": false,
                        "flags": 32,
                        "start": 20,
                        "end": 20
                    },
                    "returnType": {
                        "kind": 134234347,
                        "flags": 64,
                        "start": 24,
                        "end": 31
                    },
                    "typeParameters": null,
                    "flags": 0,
                    "start": 18,
                    "end": 31
                },
                "flags": 0,
                "start": 0,
                "end": 31
            },
            "flags": 16,
            "start": 0,
            "end": 47
        }
    ],
    "isModule": false,
    "source": "function e(x: {}): () => string {\n  return x;\n}\n",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 48
}
```

### Printed

```javascript

function e(x) {
  return  x;
}
```

### Diagnostics

```javascript
✔ No errors
```
