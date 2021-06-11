# Kataw parser test case

## Input

`````js
type x = [-1];
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
                "text": "x",
                "rawText": "x",
                "flags": 96,
                "start": 4,
                "end": 6
            },
            "typeParameters": null,
            "type": {
                "kind": 147,
                "elementTypes": [
                    {
                        "kind": 271,
                        "subtractionToken": {
                            "kind": 134318643,
                            "flags": 64,
                            "start": 10,
                            "end": 11
                        },
                        "value": 1,
                        "flags": 64,
                        "start": 10,
                        "end": 12
                    }
                ],
                "trailingComma": false,
                "flags": 0,
                "start": 8,
                "end": 13
            },
            "flags": 16,
            "start": 0,
            "end": 14
        }
    ],
    "isModule": false,
    "source": "type x = [-1];",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 14
}
```

### Printed

```javascript


```

### Diagnostics

```javascript
✔ No errors
```
