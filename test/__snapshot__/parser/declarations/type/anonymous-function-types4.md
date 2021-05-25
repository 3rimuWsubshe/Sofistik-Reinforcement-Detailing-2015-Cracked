# Kataw parser test case

## Input

`````js
type A = (Array<string>) => void
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
                "text": "A",
                "rawText": "A",
                "flags": 96,
                "start": 4,
                "end": 6
            },
            "typeParameters": null,
            "type": {
                "kind": 261,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "start": 24,
                    "end": 27
                },
                "parameters": [
                    {
                        "kind": 144,
                        "id": {
                            "kind": 134299649,
                            "text": "Array",
                            "rawText": "Array",
                            "flags": 96,
                            "start": 10,
                            "end": 15
                        },
                        "typeParameters": {
                            "kind": 266,
                            "parameters": [
                                {
                                    "kind": 267,
                                    "type": {
                                        "kind": 134234347,
                                        "flags": 64,
                                        "start": 16,
                                        "end": 22
                                    },
                                    "flags": 0,
                                    "start": 16,
                                    "end": 22
                                }
                            ],
                            "flags": 0,
                            "start": 15,
                            "end": 23
                        },
                        "flags": 0,
                        "start": 10,
                        "end": 23
                    }
                ],
                "returnType": {
                    "kind": 138477615,
                    "flags": 64,
                    "start": 27,
                    "end": 32
                },
                "typeParameters": null,
                "flags": 0,
                "start": 8,
                "end": 32
            },
            "flags": 16,
            "start": 0,
            "end": 32
        }
    ],
    "isModule": false,
    "source": "type A = (Array<string>) => void",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 32
}
```

### Printed

```javascript


```

### Diagnostics

```javascript
✔ No errors
```
