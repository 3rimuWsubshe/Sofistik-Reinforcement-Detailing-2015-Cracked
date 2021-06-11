# Kataw parser test case

## Input

`````js
type a = (bj[c])
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
                "text": "a",
                "rawText": "a",
                "flags": 96,
                "start": 4,
                "end": 6
            },
            "typeParameters": null,
            "type": {
                "kind": 260,
                "type": {
                    "kind": 144,
                    "id": {
                        "kind": 268,
                        "objectType": {
                            "kind": 134299649,
                            "text": "bj",
                            "rawText": "bj",
                            "flags": 96,
                            "start": 10,
                            "end": 12
                        },
                        "indexType": {
                            "kind": 144,
                            "id": {
                                "kind": 134299649,
                                "text": "c",
                                "rawText": "c",
                                "flags": 96,
                                "start": 13,
                                "end": 14
                            },
                            "typeParameters": null,
                            "flags": 0,
                            "start": 13,
                            "end": 14
                        },
                        "flags": 0,
                        "start": 13,
                        "end": 16
                    },
                    "typeParameters": null,
                    "flags": 0,
                    "start": 8,
                    "end": 15
                },
                "flags": 0,
                "start": 8,
                "end": 16
            },
            "flags": 16,
            "start": 0,
            "end": 16
        }
    ],
    "isModule": false,
    "source": "type a = (bj[c])",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 16
}
```

### Printed

```javascript


```

### Diagnostics

```javascript
✔ No errors
```
