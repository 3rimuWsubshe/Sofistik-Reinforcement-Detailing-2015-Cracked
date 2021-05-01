# Kataw parser test case

## Input

`````js
async function f(){
  for await (a = b of x);
}
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
                                "start": 19,
                                "end": 25
                            },
                            "initializer": {
                                "kind": 134299649,
                                "text": "a",
                                "rawText": "a",
                                "flags": 96,
                                "start": 33,
                                "end": 34
                            },
                            "condition": {
                                "kind": 134299649,
                                "text": "of",
                                "rawText": "of",
                                "flags": 96,
                                "start": 38,
                                "end": 41
                            },
                            "incrementor": {
                                "kind": 134299649,
                                "text": "b",
                                "rawText": "b",
                                "flags": 96,
                                "start": 36,
                                "end": 38
                            },
                            "statement": {
                                "kind": 120,
                                "expression": {
                                    "kind": 134299649,
                                    "text": "x",
                                    "rawText": "x",
                                    "flags": 96,
                                    "start": 41,
                                    "end": 43
                                },
                                "flags": 16,
                                "start": 41,
                                "end": 43
                            },
                            "flags": 16,
                            "start": 19,
                            "end": 43
                        }
                    ],
                    "flags": 33,
                    "start": 19,
                    "end": 43
                },
                "flags": 32,
                "start": 18,
                "end": 43
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 144,
            "start": 0,
            "end": 43
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 44,
            "end": 45
        }
    ],
    "isModule": false,
    "source": "async function f(){\n  for await (a = b of x);\n}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 47
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ Expected a `;` - start: 43, end: 44
✖ Statement expected - start: 43, end: 44
✖ Statement expected - start: 45, end: 47

```
