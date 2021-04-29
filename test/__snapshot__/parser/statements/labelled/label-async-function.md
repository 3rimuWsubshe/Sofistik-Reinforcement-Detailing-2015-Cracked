# Kataw parser test case

## Input

`````js
label: async function () {}
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 163,
            "label": {
                "kind": 134299649,
                "text": "label",
                "rawText": "label",
                "flags": 96,
                "start": 0,
                "end": 5
            },
            "colonToken": {
                "kind": 21,
                "flags": 0,
                "start": 5,
                "end": 6
            },
            "statement": {
                "kind": 120,
                "expression": {
                    "kind": 177,
                    "asyncKeyword": {
                        "kind": 82031,
                        "flags": 64,
                        "start": 6,
                        "end": 12
                    },
                    "functionKeyword": {
                        "kind": 37822554,
                        "flags": 0,
                        "start": 12,
                        "end": 21
                    },
                    "generatorToken": null,
                    "name": null,
                    "formalParameters": {
                        "kind": 214,
                        "formalParameterList": [],
                        "trailingComma": false,
                        "flags": 32,
                        "start": 21,
                        "end": 24
                    },
                    "contents": {
                        "kind": 216,
                        "functionStatementList": {
                            "kind": 217,
                            "directives": [],
                            "statements": [],
                            "flags": 32,
                            "start": 26,
                            "end": 26
                        },
                        "flags": 32,
                        "start": 24,
                        "end": 27
                    },
                    "typeParameters": null,
                    "returnType": null,
                    "flags": 160,
                    "start": 6,
                    "end": 27
                },
                "flags": 16,
                "start": 6,
                "end": 27
            },
            "flags": 16,
            "start": 0,
            "end": 27
        }
    ],
    "isModule": false,
    "source": "label: async function () {}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 27
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✔ No errors
```
