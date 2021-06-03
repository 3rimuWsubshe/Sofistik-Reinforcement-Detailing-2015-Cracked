# Kataw parser test case

## Input

`````js
a ? b ? (c) : (d) : (e) => f : g;
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
            "kind": 120,
            "expression": {
                "kind": 197,
                "shortCircuit": {
                    "kind": 134299649,
                    "text": "a",
                    "rawText": "a",
                    "flags": 96,
                    "start": 0,
                    "end": 1
                },
                "questionToken": {
                    "kind": 134217750,
                    "flags": 64,
                    "start": 1,
                    "end": 3
                },
                "consequent": {
                    "kind": 197,
                    "shortCircuit": {
                        "kind": 134299649,
                        "text": "b",
                        "rawText": "b",
                        "flags": 96,
                        "start": 3,
                        "end": 5
                    },
                    "questionToken": {
                        "kind": 134217750,
                        "flags": 64,
                        "start": 5,
                        "end": 7
                    },
                    "consequent": {
                        "kind": 121,
                        "expression": {
                            "kind": 134299649,
                            "text": "c",
                            "rawText": "c",
                            "flags": 96,
                            "start": 9,
                            "end": 10
                        },
                        "flags": 32,
                        "start": 7,
                        "end": 11
                    },
                    "colonToken": {
                        "kind": 21,
                        "flags": 64,
                        "start": 11,
                        "end": 13
                    },
                    "alternate": {
                        "kind": 271,
                        "arrowToken": {
                            "kind": 10,
                            "flags": 64,
                            "start": 23,
                            "end": 26
                        },
                        "typeParameters": null,
                        "parameters": [
                            {
                                "kind": 134299649,
                                "text": "d",
                                "rawText": "d",
                                "flags": 96,
                                "start": 15,
                                "end": 16
                            }
                        ],
                        "asyncKeyword": null,
                        "returnType": {
                            "kind": 139,
                            "type": {
                                "kind": 260,
                                "type": {
                                    "kind": 144,
                                    "id": {
                                        "kind": 134299649,
                                        "text": "e",
                                        "rawText": "e",
                                        "flags": 96,
                                        "start": 21,
                                        "end": 22
                                    },
                                    "typeParameters": null,
                                    "flags": 0,
                                    "start": 21,
                                    "end": 22
                                },
                                "flags": 0,
                                "start": 19,
                                "end": 23
                            },
                            "flags": 0,
                            "start": 17,
                            "end": 23
                        },
                        "contents": {
                            "kind": 134299649,
                            "text": "f",
                            "rawText": "f",
                            "flags": 96,
                            "start": 26,
                            "end": 28
                        },
                        "flags": 32,
                        "start": 13,
                        "end": 28
                    },
                    "flags": 32,
                    "start": 3,
                    "end": 28
                },
                "colonToken": {
                    "kind": 21,
                    "flags": 64,
                    "start": 28,
                    "end": 30
                },
                "alternate": {
                    "kind": 134299649,
                    "text": "g",
                    "rawText": "g",
                    "flags": 96,
                    "start": 30,
                    "end": 32
                },
                "flags": 32,
                "start": 0,
                "end": 32
            },
            "flags": 16,
            "start": 0,
            "end": 33
        }
    ],
    "isModule": false,
    "source": "a ? b ? (c) : (d) : (e) => f : g;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 33
}
```

### Printed

```javascript

a ? b ? (c) : (d) =>  f : g;
```

### Diagnostics

```javascript
✔ No errors
```
