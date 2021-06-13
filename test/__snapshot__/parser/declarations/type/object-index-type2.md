# Kataw parser test case

## Input

`````js
type X = {[bj[c] & a | b]: string};
`````

## Options

### Parser Options

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
            "kind": 200,
            "declareToken": null,
            "typeToken": {
                "kind": 24775,
                "flags": 64,
                "start": 0,
                "end": 6
            },
            "name": {
                "kind": 134299649,
                "text": "X",
                "rawText": "X",
                "flags": 96,
                "start": 4,
                "end": 6
            },
            "typeParameters": null,
            "assignToken": {
                "kind": 4125,
                "flags": 64,
                "start": 6,
                "end": 8
            },
            "type": {
                "kind": 134234353,
                "properties": [
                    {
                        "kind": 195,
                        "protoKeyword": null,
                        "staticToken": null,
                        "name": null,
                        "key": {
                            "kind": 137,
                            "types": [
                                {
                                    "kind": 138,
                                    "types": [
                                        {
                                            "kind": 268,
                                            "objectType": {
                                                "kind": 144,
                                                "id": {
                                                    "kind": 134299649,
                                                    "text": "bj",
                                                    "rawText": "bj",
                                                    "flags": 96,
                                                    "start": 11,
                                                    "end": 13
                                                },
                                                "typeParameters": null,
                                                "flags": 2097152,
                                                "start": 10,
                                                "end": 13
                                            },
                                            "indexType": {
                                                "kind": 144,
                                                "id": {
                                                    "kind": 134299649,
                                                    "text": "c",
                                                    "rawText": "c",
                                                    "flags": 96,
                                                    "start": 14,
                                                    "end": 15
                                                },
                                                "typeParameters": null,
                                                "flags": 2097152,
                                                "start": 14,
                                                "end": 15
                                            },
                                            "flags": 2097152,
                                            "start": 14,
                                            "end": 18
                                        },
                                        {
                                            "kind": 144,
                                            "id": {
                                                "kind": 134299649,
                                                "text": "a",
                                                "rawText": "a",
                                                "flags": 96,
                                                "start": 18,
                                                "end": 20
                                            },
                                            "typeParameters": null,
                                            "flags": 2097152,
                                            "start": 18,
                                            "end": 20
                                        }
                                    ],
                                    "flags": 2097152,
                                    "start": 16,
                                    "end": 20
                                },
                                {
                                    "kind": 144,
                                    "id": {
                                        "kind": 134299649,
                                        "text": "b",
                                        "rawText": "b",
                                        "flags": 96,
                                        "start": 22,
                                        "end": 24
                                    },
                                    "typeParameters": null,
                                    "flags": 2097152,
                                    "start": 22,
                                    "end": 24
                                }
                            ],
                            "flags": 2097152,
                            "start": 20,
                            "end": 24
                        },
                        "type": {
                            "kind": 134234347,
                            "flags": 2097216,
                            "start": 26,
                            "end": 33
                        },
                        "flags": 2097152,
                        "start": 10,
                        "end": 33
                    }
                ],
                "trailingComma": false,
                "flags": 2097152,
                "start": 8,
                "end": 34
            },
            "flags": 2097152,
            "start": 0,
            "end": 35
        }
    ],
    "isModule": false,
    "source": "type X = {[bj[c] & a | b]: string};",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 35
}
```

### Printed

```javascript


```

### Diagnostics

```javascript
✔ No errors
```
