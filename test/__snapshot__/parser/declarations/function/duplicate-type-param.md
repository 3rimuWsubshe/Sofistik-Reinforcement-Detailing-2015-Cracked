# Kataw parser test case

## Input

`````js
function foo<T><T>() {}
`````

## Options

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
                "text": "foo",
                "rawText": "foo",
                "flags": 96,
                "start": 8,
                "end": 12
            },
            "typeParameters": {
                "kind": 307,
                "declarations": {
                    "kind": 337,
                    "parameters": [
                        {
                            "kind": 146,
                            "name": {
                                "kind": 134299649,
                                "text": "T",
                                "rawText": "T",
                                "flags": 96,
                                "start": 13,
                                "end": 14
                            },
                            "type": null,
                            "defaultType": null,
                            "flags": 2097152,
                            "start": 13,
                            "end": 14
                        }
                    ],
                    "trailingComma": false,
                    "flags": 2097152,
                    "start": 13,
                    "end": 14
                },
                "flags": 2097152,
                "start": 12,
                "end": 15
            },
            "formalParameters": {
                "kind": 214,
                "formalParameterList": [],
                "trailingComma": false,
                "flags": 32,
                "start": 15,
                "end": 15
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [],
                    "flags": 32,
                    "start": 15,
                    "end": 15
                },
                "flags": 32,
                "start": 15,
                "end": 15
            },
            "returnType": null,
            "flags": 16,
            "start": 0,
            "end": 15
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "arrowToken": null,
                "typeParameters": {
                    "kind": 307,
                    "declarations": {
                        "kind": 337,
                        "parameters": [
                            {
                                "kind": 146,
                                "name": {
                                    "kind": 134299649,
                                    "text": "T",
                                    "rawText": "T",
                                    "flags": 96,
                                    "start": 16,
                                    "end": 17
                                },
                                "type": null,
                                "defaultType": null,
                                "flags": 2097152,
                                "start": 16,
                                "end": 17
                            }
                        ],
                        "trailingComma": false,
                        "flags": 2097152,
                        "start": 16,
                        "end": 17
                    },
                    "flags": 2097152,
                    "start": 15,
                    "end": 18
                },
                "parameters": [],
                "asyncKeyword": null,
                "returnType": null,
                "contents": {
                    "kind": 216,
                    "functionStatementList": {
                        "kind": 217,
                        "directives": [],
                        "statements": [],
                        "flags": 32,
                        "start": 22,
                        "end": 22
                    },
                    "flags": 32,
                    "start": 20,
                    "end": 23
                },
                "flags": 32,
                "start": 15,
                "end": 23
            },
            "flags": 16,
            "start": 15,
            "end": 23
        }
    ],
    "isModule": false,
    "source": "function foo<T><T>() {}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 23
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Missing an opening parentheses - '( - start: 15, end: 16

```
