# Kataw parser test case

## Input

`````js
x = {
    get() {
    }
};;
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 96,
                    "start": 0,
                    "end": 1
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 64,
                    "start": 1,
                    "end": 3
                },
                "right": {
                    "kind": 220,
                    "propertyList": {
                        "kind": 218,
                        "properties": [
                            {
                                "kind": 209,
                                "name": {
                                    "kind": 134299649,
                                    "text": "get",
                                    "rawText": "get",
                                    "flags": 96,
                                    "start": 5,
                                    "end": 13
                                },
                                "typeParameters": null,
                                "formalParameters": {
                                    "kind": 214,
                                    "formalParameterList": [],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "start": 14,
                                    "end": 15
                                },
                                "type": null,
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "directives": [],
                                        "statements": [],
                                        "flags": 33,
                                        "start": 17,
                                        "end": 17
                                    },
                                    "flags": 32,
                                    "start": 15,
                                    "end": 23
                                },
                                "flags": 32,
                                "start": 13,
                                "end": 23
                            }
                        ],
                        "trailingComma": false,
                        "flags": 17,
                        "start": 5,
                        "end": 23
                    },
                    "flags": 32,
                    "start": 3,
                    "end": 25
                },
                "flags": 32,
                "start": 0,
                "end": 25
            },
            "flags": 16,
            "start": 0,
            "end": 26
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 26,
            "end": 27
        }
    ],
    "isModule": false,
    "source": "x = {\n    get() {\n    }\n};;",
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
