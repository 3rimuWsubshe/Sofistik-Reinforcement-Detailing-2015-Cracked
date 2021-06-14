# Kataw parser test case

## Input

`````js
type T = ({});
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
            "assignToken": {
                "kind": 4125,
                "flags": 64,
                "start": 6,
                "end": 8
            },
            "type": {
                "kind": 139,
                "bitwiseOrToken": null,
                "bitwiseAndToken": null,
                "type": {
                    "kind": 290,
                    "type": {
                        "kind": 139,
                        "bitwiseOrToken": null,
                        "bitwiseAndToken": null,
                        "type": {
                            "kind": 134234353,
                            "properties": [],
                            "trailingComma": false,
                            "flags": 2097152,
                            "start": 10,
                            "end": 12
                        },
                        "flags": 2097152,
                        "start": 10,
                        "end": 12
                    },
                    "flags": 2097152,
                    "start": 8,
                    "end": 13
                },
                "flags": 2097152,
                "start": 8,
                "end": 13
            },
            "flags": 2097152,
            "start": 0,
            "end": 14
        }
    ],
    "isModule": false,
    "source": "type T = ({});",
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
