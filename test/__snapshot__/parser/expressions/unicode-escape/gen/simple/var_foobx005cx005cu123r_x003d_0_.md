# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: simple
> :: case: var foob\\u123r = 0;
## Input

`````js
var foob\\u123r = 0;
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 155,
            "declareKeyword": null,
            "varKeyword": {
                "kind": 37757002,
                "flags": 0,
                "start": 0,
                "end": 3
            },
            "declarationList": {
                "kind": 156,
                "declarations": [
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 134299649,
                            "text": "foob",
                            "rawText": "foob",
                            "flags": 96,
                            "start": 3,
                            "end": 8
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": null,
                        "flags": 16,
                        "start": 3,
                        "end": 8
                    }
                ],
                "flags": 16,
                "start": 3,
                "end": 8
            },
            "flags": 16,
            "start": 0,
            "end": 8
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "u123r",
                    "rawText": "u123r",
                    "flags": 96,
                    "start": 10,
                    "end": 15
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 64,
                    "start": 15,
                    "end": 17
                },
                "right": {
                    "kind": 201392130,
                    "text": 0,
                    "rawText": "0",
                    "flags": 96,
                    "start": 17,
                    "end": 19
                },
                "flags": 32,
                "start": 10,
                "end": 19
            },
            "flags": 16,
            "start": 10,
            "end": 20
        }
    ],
    "isModule": false,
    "source": "var foob\\\\u123r = 0;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 20
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ Invalid hexadecimal escape sequence - start: 3, end: 8
✖ Invalid hexadecimal escape sequence - start: 8, end: 8
✖ ',' expected - start: 8, end: 9
✖ Statement expected - start: 8, end: 9
✖ Invalid hexadecimal escape sequence - start: 9, end: 9
✖ Statement expected - start: 9, end: 10

```
