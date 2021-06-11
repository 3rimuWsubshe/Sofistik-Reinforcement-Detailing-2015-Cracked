# Kataw parser test case

## Input

`````js
type T = { [[foo]]?: X }
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
                "text": "T",
                "rawText": "T",
                "flags": 96,
                "start": 4,
                "end": 6
            },
            "typeParameters": null,
            "type": {
                "kind": 134234353,
                "properties": [
                    {
                        "kind": 248,
                        "protoKeyword": null,
                        "name": {
                            "kind": 134299649,
                            "text": "foo",
                            "rawText": "foo",
                            "flags": 96,
                            "start": 13,
                            "end": 16
                        },
                        "value": {
                            "kind": 144,
                            "id": {
                                "kind": 134299649,
                                "text": "X",
                                "rawText": "X",
                                "flags": 96,
                                "start": 20,
                                "end": 22
                            },
                            "typeParameters": null,
                            "flags": 0,
                            "start": 20,
                            "end": 22
                        },
                        "optionalToken": {
                            "kind": 134217750,
                            "flags": 64,
                            "start": 18,
                            "end": 19
                        },
                        "staticToken": null,
                        "flags": 0,
                        "start": 10,
                        "end": 22
                    }
                ],
                "flags": 0,
                "start": 8,
                "end": 24
            },
            "flags": 16,
            "start": 0,
            "end": 24
        }
    ],
    "isModule": false,
    "source": "type T = { [[foo]]?: X }",
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
✔ No errors
```
