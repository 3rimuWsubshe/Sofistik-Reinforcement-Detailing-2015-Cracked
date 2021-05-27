# Kataw parser test case

## Input

`````js
(async function foo() { });
`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 177,
                    "asyncKeyword": {
                        "kind": 82031,
                        "flags": 64,
                        "start": 1,
                        "end": 6
                    },
                    "functionKeyword": {
                        "kind": 37822554,
                        "flags": 0,
                        "start": 6,
                        "end": 15
                    },
                    "generatorToken": null,
                    "name": {
                        "kind": 134299649,
                        "text": "foo",
                        "rawText": "foo",
                        "flags": 96,
                        "start": 15,
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
                            "statements": [],
                            "flags": 32,
                            "start": 23,
                            "end": 23
                        },
                        "flags": 32,
                        "start": 21,
                        "end": 25
                    },
                    "typeParameters": null,
                    "returnType": null,
                    "flags": 160,
                    "start": 1,
                    "end": 25
                },
                "flags": 32,
                "start": 0,
                "end": 26
            },
            "flags": 16,
            "start": 0,
            "end": 27
        }
    ],
    "isModule": false,
    "source": "(async function foo() { });",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 27
}
```

### Printed

```javascript

(async function foo() {});
```

### Diagnostics

```javascript
✔ No errors
```
