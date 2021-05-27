# Kataw parser test case

## Input

`````js
async function f() {
  for await (x = 0;false;);
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
            "asyncKeyword": {
                "kind": 82031,
                "flags": 64,
                "start": 0,
                "end": 5
            },
            "functionKeyword": {
                "kind": 37822554,
                "flags": 0,
                "start": 5,
                "end": 14
            },
            "generatorToken": null,
            "name": {
                "kind": 134299649,
                "text": "f",
                "rawText": "f",
                "flags": 96,
                "start": 14,
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
                            "kind": 165,
                            "forKeyword": {
                                "kind": 37757017,
                                "flags": 1,
                                "start": 20,
                                "end": 26
                            },
                            "initializer": {
                                "kind": 125,
                                "left": {
                                    "kind": 134299649,
                                    "text": "x",
                                    "rawText": "x",
                                    "flags": 96,
                                    "start": 34,
                                    "end": 35
                                },
                                "operatorToken": {
                                    "kind": 4125,
                                    "flags": 64,
                                    "start": 35,
                                    "end": 37
                                },
                                "right": {
                                    "kind": 201392130,
                                    "text": 0,
                                    "rawText": "0",
                                    "flags": 96,
                                    "start": 37,
                                    "end": 39
                                },
                                "flags": 32,
                                "start": 20,
                                "end": 39
                            },
                            "condition": null,
                            "incrementor": {
                                "kind": 134,
                                "text": false,
                                "flags": 96,
                                "start": 40,
                                "end": 45
                            },
                            "statement": {
                                "kind": 168,
                                "flags": 16,
                                "start": 47,
                                "end": 48
                            },
                            "flags": 16,
                            "start": 20,
                            "end": 48
                        }
                    ],
                    "flags": 33,
                    "start": 20,
                    "end": 48
                },
                "flags": 32,
                "start": 18,
                "end": 50
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 144,
            "start": 0,
            "end": 50
        }
    ],
    "isModule": false,
    "source": "async function f() {\n  for await (x = 0;false;);\n}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 50
}
```

### Printed

```javascript

async function f() {
  for (; ; false);
}
```

### Diagnostics

```javascript
✔ No errors
```
