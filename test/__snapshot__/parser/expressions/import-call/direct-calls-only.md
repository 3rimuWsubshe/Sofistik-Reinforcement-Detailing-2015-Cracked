# Kataw parser test case

## Input

`````js
function failsParse() {
  return import.then();
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
                "flags": 0,
                "start": 0,
                "end": 8
            },
            "generatorToken": null,
            "name": {
                "kind": 134299649,
                "text": "failsParse",
                "rawText": "failsParse",
                "flags": 96,
                "start": 8,
                "end": 19
            },
            "formalParameters": {
                "kind": 214,
                "formalParameterList": [],
                "trailingComma": false,
                "flags": 32,
                "start": 19,
                "end": 21
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
                                "flags": 1,
                                "start": 23,
                                "end": 32
                            },
                            "expression": {
                                "kind": 120,
                                "expression": {
                                    "kind": 131,
                                    "expression": {
                                        "kind": 207,
                                        "importKeyword": {
                                            "kind": 37814364,
                                            "flags": 0,
                                            "start": 32,
                                            "end": 39
                                        },
                                        "metaIdentifier": null,
                                        "flags": 39,
                                        "start": 96,
                                        "end": 44
                                    },
                                    "argumentList": {
                                        "kind": 256,
                                        "elements": [],
                                        "trailingComma": false,
                                        "flags": 32,
                                        "start": 45,
                                        "end": 45
                                    },
                                    "flags": 268435488,
                                    "start": 39,
                                    "end": 46
                                },
                                "flags": 16,
                                "start": 39,
                                "end": 47
                            },
                            "flags": 16,
                            "start": 1,
                            "end": 23
                        }
                    ],
                    "flags": 33,
                    "start": 23,
                    "end": 47
                },
                "flags": 32,
                "start": 21,
                "end": 49
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 16,
            "start": 0,
            "end": 49
        }
    ],
    "isModule": false,
    "source": "function failsParse() {\n  return import.then();\n}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 49
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ 'import.meta' is the only valid meta property for import - start: 44, end: 45

```
