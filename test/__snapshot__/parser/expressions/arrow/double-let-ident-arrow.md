# Kataw parser test case

## Input

`````js
let =>  x, let =>  x;
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
                "kind": 132,
                "expressions": [
                    {
                        "kind": 271,
                        "arrowToken": {
                            "kind": 10,
                            "flags": 0,
                            "start": 3,
                            "end": 6
                        },
                        "typeParameters": null,
                        "parameters": {
                            "kind": 134299649,
                            "text": "let",
                            "rawText": "let",
                            "flags": 96,
                            "start": 0,
                            "end": 3
                        },
                        "asyncKeyword": null,
                        "returnType": null,
                        "contents": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "start": 6,
                            "end": 9
                        },
                        "flags": 32,
                        "start": 0,
                        "end": 9
                    },
                    {
                        "kind": 271,
                        "arrowToken": {
                            "kind": 10,
                            "flags": 0,
                            "start": 14,
                            "end": 17
                        },
                        "typeParameters": null,
                        "parameters": {
                            "kind": 134299649,
                            "text": "let",
                            "rawText": "let",
                            "flags": 96,
                            "start": 10,
                            "end": 14
                        },
                        "asyncKeyword": null,
                        "returnType": null,
                        "contents": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "start": 17,
                            "end": 20
                        },
                        "flags": 32,
                        "start": 10,
                        "end": 20
                    }
                ],
                "flags": 32,
                "start": 0,
                "end": 20
            },
            "flags": 16,
            "start": 0,
            "end": 21
        }
    ],
    "isModule": false,
    "source": "let =>  x, let =>  x;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 21
}
```

### Printed

```javascript

let =>  x, let =>  x;
```

### Diagnostics

```javascript
✔ No errors
```
