# Kataw parser test case

## Input

`````js
'use strict'; ({0123: 4});
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [
        {
            "kind": 201392131,
            "text": "use strict",
            "rawText": "'use strict'",
            "flags": 4194400,
            "start": 0,
            "end": 12
        }
    ],
    "statements": [
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 220,
                    "propertyList": {
                        "kind": 218,
                        "properties": [
                            {
                                "kind": 219,
                                "generatorToken": null,
                                "left": {
                                    "kind": 201392130,
                                    "text": 4,
                                    "rawText": "4",
                                    "flags": 96,
                                    "start": 21,
                                    "end": 23
                                },
                                "right": {
                                    "kind": 201392130,
                                    "text": 123,
                                    "rawText": "0123",
                                    "flags": 131168,
                                    "start": 16,
                                    "end": 20
                                },
                                "flags": 32,
                                "start": 16,
                                "end": 23
                            }
                        ],
                        "trailingComma": false,
                        "flags": 131088,
                        "start": 16,
                        "end": 23
                    },
                    "flags": 32,
                    "start": 15,
                    "end": 24
                },
                "flags": 32,
                "start": 13,
                "end": 25
            },
            "flags": 16,
            "start": 13,
            "end": 26
        }
    ],
    "isModule": false,
    "source": "'use strict'; ({0123: 4});",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 26
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ Octal literals are not allowed in strict mode - start: 16, end: 20

```
