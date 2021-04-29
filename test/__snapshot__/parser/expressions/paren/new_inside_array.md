# Kataw parser test case

## Input

`````js
([new x]);

(x, [new y]);
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
                "kind": 121,
                "expression": {
                    "kind": 119,
                    "elementList": {
                        "kind": 270,
                        "elements": [
                            {
                                "kind": 210,
                                "newKeyword": {
                                    "kind": 138477661,
                                    "flags": 0,
                                    "start": 2,
                                    "end": 5
                                },
                                "expression": {
                                    "kind": 134299649,
                                    "text": "x",
                                    "rawText": "x",
                                    "flags": 96,
                                    "start": 5,
                                    "end": 7
                                },
                                "argumentList": null,
                                "flags": 32,
                                "start": 2,
                                "end": 7
                            }
                        ],
                        "trailingComma": false,
                        "flags": 32,
                        "start": 2,
                        "end": 7
                    },
                    "flags": 32,
                    "start": 1,
                    "end": 8
                },
                "flags": 32,
                "start": 0,
                "end": 9
            },
            "flags": 16,
            "start": 0,
            "end": 10
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 132,
                    "expressions": [
                        {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "start": 13,
                            "end": 14
                        },
                        {
                            "kind": 119,
                            "elementList": {
                                "kind": 270,
                                "elements": [
                                    {
                                        "kind": 210,
                                        "newKeyword": {
                                            "kind": 138477661,
                                            "flags": 0,
                                            "start": 17,
                                            "end": 20
                                        },
                                        "expression": {
                                            "kind": 134299649,
                                            "text": "y",
                                            "rawText": "y",
                                            "flags": 96,
                                            "start": 20,
                                            "end": 22
                                        },
                                        "argumentList": null,
                                        "flags": 32,
                                        "start": 17,
                                        "end": 22
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 17,
                                "end": 22
                            },
                            "flags": 32,
                            "start": 15,
                            "end": 23
                        }
                    ],
                    "flags": 32,
                    "start": 10,
                    "end": 24
                },
                "flags": 32,
                "start": 10,
                "end": 24
            },
            "flags": 16,
            "start": 10,
            "end": 25
        }
    ],
    "isModule": false,
    "source": "([new x]);\n\n(x, [new y]);",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 25
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
