# Kataw parser test case

## Input

`````js
type X = (x.y<>) => T
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
            "type": {
                "kind": 261,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "start": 16,
                    "end": 19
                },
                "parameters": {
                    "kind": 144,
                    "id": {
                        "kind": 145,
                        "qualification": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "start": 10,
                            "end": 11
                        },
                        "id": {
                            "kind": 134299649,
                            "text": "y",
                            "rawText": "y",
                            "flags": 96,
                            "start": 12,
                            "end": 13
                        },
                        "flags": 0,
                        "start": 8,
                        "end": 13
                    },
                    "typeParameters": {
                        "kind": 266,
                        "parameters": [],
                        "flags": 0,
                        "start": 13,
                        "end": 15
                    },
                    "flags": 0,
                    "start": 8,
                    "end": 15
                },
                "returnType": {
                    "kind": 144,
                    "id": {
                        "kind": 134299649,
                        "text": "T",
                        "rawText": "T",
                        "flags": 96,
                        "start": 19,
                        "end": 21
                    },
                    "typeParameters": null,
                    "flags": 0,
                    "start": 19,
                    "end": 21
                },
                "typeParameters": null,
                "flags": 0,
                "start": 8,
                "end": 21
            },
            "flags": 16,
            "start": 0,
            "end": 21
        }
    ],
    "isModule": false,
    "source": "type X = (x.y<>) => T",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 21
}
```

### Printed

```javascript


```

### Diagnostics

```javascript
✔ No errors
```
