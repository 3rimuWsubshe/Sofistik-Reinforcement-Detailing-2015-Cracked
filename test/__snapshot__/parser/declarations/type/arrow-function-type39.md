# Kataw parser test case

## Input

`````js
type a = (...x: string) => T;
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
                "kind": 261,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "start": 23,
                    "end": 26
                },
                "parameters": {
                    "kind": 208,
                    "parameters": [
                        {
                            "kind": 149,
                            "ellipsisToken": {
                                "kind": 524302,
                                "flags": 64,
                                "start": 10,
                                "end": 13
                            },
                            "name": {
                                "kind": 134299649,
                                "text": "x",
                                "rawText": "x",
                                "flags": 96,
                                "start": 13,
                                "end": 14
                            },
                            "optionalToken": null,
                            "types": {
                                "kind": 134234347,
                                "flags": 64,
                                "start": 15,
                                "end": 22
                            },
                            "flags": 0,
                            "start": 10,
                            "end": 22
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 10,
                    "end": 22
                },
                "returnType": {
                    "kind": 144,
                    "id": {
                        "kind": 134299649,
                        "text": "T",
                        "rawText": "T",
                        "flags": 96,
                        "start": 26,
                        "end": 28
                    },
                    "typeParameters": null,
                    "flags": 0,
                    "start": 26,
                    "end": 28
                },
                "typeParameters": null,
                "flags": 0,
                "start": 8,
                "end": 28
            },
            "flags": 16,
            "start": 0,
            "end": 29
        }
    ],
    "isModule": false,
    "source": "type a = (...x: string) => T;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 29
}
```

### Printed

```javascript


```

### Diagnostics

```javascript
✔ No errors
```
