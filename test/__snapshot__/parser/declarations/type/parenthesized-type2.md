# Kataw parser test case

## Input

`````js
type Foo = (string | number)
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
                "end": 8
            },
            "name": {
                "kind": 134299649,
                "text": "Foo",
                "rawText": "Foo",
                "flags": 96,
                "start": 4,
                "end": 8
            },
            "typeParameters": null,
            "type": {
                "kind": 260,
                "type": {
                    "kind": 144,
                    "id": {
                        "kind": 137,
                        "types": [
                            {
                                "kind": 134299649,
                                "text": "string",
                                "rawText": "string",
                                "flags": 96,
                                "start": 12,
                                "end": 18
                            },
                            {
                                "kind": 134234345,
                                "flags": 64,
                                "start": 20,
                                "end": 27
                            }
                        ],
                        "flags": 0,
                        "start": 18,
                        "end": 27
                    },
                    "typeParameters": null,
                    "flags": 0,
                    "start": 10,
                    "end": 27
                },
                "flags": 0,
                "start": 10,
                "end": 28
            },
            "flags": 16,
            "start": 0,
            "end": 28
        }
    ],
    "isModule": false,
    "source": "type Foo = (string | number)",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 28
}
```

### Printed

```javascript


```

### Diagnostics

```javascript
✔ No errors
```
