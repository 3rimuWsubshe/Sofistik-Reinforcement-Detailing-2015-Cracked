# Kataw parser test case

## Input

`````js
{ (x = {[yield]: 1}) => z }
`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 124,
            "block": {
                "kind": 249,
                "statements": [
                    {
                        "kind": 120,
                        "expression": {
                            "kind": 271,
                            "asyncKeyword": null,
                            "typeParameters": null,
                            "arrowPatameterList": {
                                "kind": 342,
                                "parameters": [
                                    {
                                        "kind": 281,
                                        "ellipsisToken": null,
                                        "left": {
                                            "kind": 134299649,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 96,
                                            "start": 3,
                                            "end": 4
                                        },
                                        "optionalToken": null,
                                        "type": null,
                                        "right": {
                                            "kind": 220,
                                            "propertyList": {
                                                "kind": 218,
                                                "properties": [
                                                    {
                                                        "kind": 219,
                                                        "asteriskToken": null,
                                                        "left": {
                                                            "kind": 194,
                                                            "expression": {
                                                                "kind": 134299649,
                                                                "text": "yield",
                                                                "rawText": "yield",
                                                                "flags": 96,
                                                                "start": 9,
                                                                "end": 14
                                                            },
                                                            "flags": 32,
                                                            "start": 8,
                                                            "end": 15
                                                        },
                                                        "right": {
                                                            "kind": 201392130,
                                                            "text": 1,
                                                            "rawText": "1",
                                                            "flags": 96,
                                                            "start": 16,
                                                            "end": 18
                                                        },
                                                        "flags": 32,
                                                        "start": 8,
                                                        "end": 18
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "flags": 16,
                                                "start": 8,
                                                "end": 18
                                            },
                                            "flags": 48,
                                            "start": 6,
                                            "end": 19
                                        },
                                        "flags": 32,
                                        "start": 1,
                                        "end": 19
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 2,
                                "start": 3,
                                "end": 20
                            },
                            "returnType": null,
                            "arrowToken": {
                                "kind": 10,
                                "flags": 64,
                                "start": 20,
                                "end": 23
                            },
                            "contents": {
                                "kind": 134299649,
                                "text": "z",
                                "rawText": "z",
                                "flags": 96,
                                "start": 23,
                                "end": 25
                            },
                            "flags": 34,
                            "start": 1,
                            "end": 25
                        },
                        "flags": 16,
                        "start": 1,
                        "end": 25
                    }
                ],
                "flags": 16,
                "start": 1,
                "end": 25
            },
            "flags": 16,
            "start": 0,
            "end": 27
        }
    ],
    "isModule": false,
    "source": "{ (x = {[yield]: 1}) => z }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 27
}
```

### Printed

```javascript

{
  (x = { [yield] : 1 }) => z;
}

```

### Diagnostics

```javascript
✔ No errors
```
