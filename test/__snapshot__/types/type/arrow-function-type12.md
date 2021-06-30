# Kataw parser test case

## Input

`````js
type a = (1) => T;
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
                "end": 4
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
                    "kind": 288,
                    "typeParameters": null,
                    "arrowTypeParameterList": {
                        "kind": 292,
                        "parameters": [
                            {
                                "kind": 139,
                                "bitwiseOrToken": null,
                                "bitwiseAndToken": null,
                                "type": {
                                    "kind": 134217968,
                                    "text": 1,
                                    "rawText": "1",
                                    "flags": 2097216,
                                    "start": 10,
                                    "end": 11
                                },
                                "flags": 2097152,
                                "start": 10,
                                "end": 11
                            }
                        ],
                        "trailingComma": false,
                        "flags": 2097152,
                        "start": 8,
                        "end": 12
                    },
                    "arrowToken": {
                        "kind": 10,
                        "flags": 64,
                        "start": 12,
                        "end": 15
                    },
                    "returnType": {
                        "kind": 139,
                        "bitwiseOrToken": null,
                        "bitwiseAndToken": null,
                        "type": {
                            "kind": 144,
                            "typeName": {
                                "kind": 134299649,
                                "text": "T",
                                "rawText": "T",
                                "flags": 96,
                                "start": 15,
                                "end": 17
                            },
                            "typeParameters": null,
                            "flags": 2097152,
                            "start": 15,
                            "end": 17
                        },
                        "flags": 2097152,
                        "start": 15,
                        "end": 17
                    },
                    "flags": 2097152,
                    "start": 8,
                    "end": 17
                },
                "flags": 2097152,
                "start": 8,
                "end": 17
            },
            "flags": 64,
            "start": 0,
            "end": 18
        }
    ],
    "isModule": false,
    "source": "type a = (1) => T;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 18
}
```

### Printed

```javascript

type a = (1) => T

```

### Diagnostics

```javascript
✔ No errors
```
