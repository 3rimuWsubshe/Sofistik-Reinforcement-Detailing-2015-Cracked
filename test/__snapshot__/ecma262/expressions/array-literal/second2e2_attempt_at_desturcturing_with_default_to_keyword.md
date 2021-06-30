# Kataw parser test case

## Input

`````js
[...{a: function=x} = c]
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
                "kind": 119,
                "elementList": {
                    "kind": 270,
                    "elements": [
                        {
                            "kind": 223,
                            "ellipsisToken": {
                                "kind": 524302,
                                "flags": 64,
                                "start": 1,
                                "end": 4
                            },
                            "argument": {
                                "kind": 125,
                                "left": {
                                    "kind": 220,
                                    "propertyList": {
                                        "kind": 218,
                                        "properties": [
                                            {
                                                "kind": 219,
                                                "asteriskToken": null,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": "a",
                                                    "rawText": "a",
                                                    "flags": 96,
                                                    "start": 5,
                                                    "end": 6
                                                },
                                                "right": {
                                                    "kind": 125,
                                                    "left": {
                                                        "kind": 177,
                                                        "asyncKeyword": null,
                                                        "functionKeyword": {
                                                            "kind": 37822554,
                                                            "flags": 64,
                                                            "start": 7,
                                                            "end": 16
                                                        },
                                                        "asteriskToken": null,
                                                        "name": null,
                                                        "typeParameters": null,
                                                        "formalParameterList": {
                                                            "kind": 214,
                                                            "formalParameters": [],
                                                            "trailingComma": false,
                                                            "flags": 32,
                                                            "start": 16,
                                                            "end": 16
                                                        },
                                                        "contents": {
                                                            "kind": 216,
                                                            "functionStatementList": {
                                                                "kind": 217,
                                                                "directives": [],
                                                                "statements": [],
                                                                "flags": 32,
                                                                "start": 16,
                                                                "end": 16
                                                            },
                                                            "flags": 32,
                                                            "start": 16,
                                                            "end": 16
                                                        },
                                                        "returnType": null,
                                                        "flags": 32,
                                                        "start": 7,
                                                        "end": 16
                                                    },
                                                    "operatorToken": {
                                                        "kind": 4125,
                                                        "flags": 96,
                                                        "start": 16,
                                                        "end": 17
                                                    },
                                                    "right": {
                                                        "kind": 134299649,
                                                        "text": "x",
                                                        "rawText": "x",
                                                        "flags": 96,
                                                        "start": 17,
                                                        "end": 18
                                                    },
                                                    "flags": 32,
                                                    "start": 5,
                                                    "end": 18
                                                },
                                                "flags": 32,
                                                "start": 5,
                                                "end": 18
                                            }
                                        ],
                                        "trailingComma": false,
                                        "flags": 16,
                                        "start": 5,
                                        "end": 18
                                    },
                                    "flags": 48,
                                    "start": 4,
                                    "end": 19
                                },
                                "operatorToken": {
                                    "kind": 4125,
                                    "flags": 96,
                                    "start": 19,
                                    "end": 21
                                },
                                "right": {
                                    "kind": 134299649,
                                    "text": "c",
                                    "rawText": "c",
                                    "flags": 96,
                                    "start": 21,
                                    "end": 23
                                },
                                "flags": 32,
                                "start": 4,
                                "end": 23
                            },
                            "flags": 1073741856,
                            "start": 1,
                            "end": 23
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 1,
                    "end": 23
                },
                "flags": 32,
                "start": 0,
                "end": 24
            },
            "flags": 16,
            "start": 0,
            "end": 24
        }
    ],
    "isModule": false,
    "source": "[...{a: function=x} = c]",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 24
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Missing an opening parentheses - '( - start: 16, end: 17
✖ The left-hand side of an assignment expression must be a variable or a property access - start: 16, end: 17
✖ The left-hand side must be a variable or a property access. - start: 4, end: 21

```
