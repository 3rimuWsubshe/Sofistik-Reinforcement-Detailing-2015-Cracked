# Kataw parser test case

## Input

`````js
(x)=>{/x/}
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
                "kind": 271,
                "asyncKeyword": null,
                "typeParameters": null,
                "arrowPatameterList": {
                    "kind": 342,
                    "parameters": [
                        {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "start": 1,
                            "end": 2
                        }
                    ],
                    "trailingComma": false,
                    "flags": 0,
                    "start": 1,
                    "end": 3
                },
                "returnType": null,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "start": 3,
                    "end": 5
                },
                "contents": {
                    "kind": 216,
                    "functionStatementList": {
                        "kind": 217,
                        "directives": [],
                        "statements": [
                            {
                                "kind": 120,
                                "expression": {
                                    "kind": 371,
                                    "text": "/x/",
                                    "flags": 96,
                                    "start": 6,
                                    "end": 9
                                },
                                "flags": 16,
                                "start": 6,
                                "end": 9
                            }
                        ],
                        "flags": 32,
                        "start": 6,
                        "end": 9
                    },
                    "flags": 32,
                    "start": 5,
                    "end": 10
                },
                "flags": 32,
                "start": 0,
                "end": 10
            },
            "flags": 16,
            "start": 0,
            "end": 10
        }
    ],
    "isModule": false,
    "source": "(x)=>{/x/}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 10
}
```

### Printed

```javascript

(x) =>  { /x/; };

```

### Diagnostics

```javascript
✔ No errors
```
