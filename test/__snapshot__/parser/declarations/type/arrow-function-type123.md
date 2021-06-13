# Kataw parser test case

## Input

`````js
 type a = (|x);
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
                "end": 7
            },
            "name": {
                "kind": 134299649,
                "text": "a",
                "rawText": "a",
                "flags": 96,
                "start": 5,
                "end": 7
            },
            "typeParameters": null,
            "assignToken": {
                "kind": 4125,
                "flags": 64,
                "start": 7,
                "end": 9
            },
            "type": {
                "kind": 260,
                "type": {
                    "kind": 144,
                    "id": {
                        "kind": 134299649,
                        "text": "x",
                        "rawText": "x",
                        "flags": 96,
                        "start": 12,
                        "end": 13
                    },
                    "typeParameters": null,
                    "flags": 2097152,
                    "start": 12,
                    "end": 13
                },
                "flags": 2097152,
                "start": 9,
                "end": 14
            },
            "flags": 2097152,
            "start": 0,
            "end": 15
        }
    ],
    "isModule": false,
    "source": " type a = (|x);",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 15
}
```

### Printed

```javascript


```

### Diagnostics

```javascript
✔ No errors
```
