# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: y
> :: test: with unclosed array
> :: case: false
## Input

`````js
return[ false
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 161,
            "returnKeyword": {
                "kind": 37757022,
                "flags": 0,
                "start": 0,
                "end": 6
            },
            "expression": {
                "kind": 119,
                "elementList": {
                    "kind": 270,
                    "elements": [
                        {
                            "kind": 134,
                            "text": false,
                            "flags": 96,
                            "start": 7,
                            "end": 13
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 7,
                    "end": 13
                },
                "flags": 32,
                "start": 6,
                "end": 13
            },
            "flags": 16,
            "start": 0,
            "end": 0
        }
    ],
    "isModule": false,
    "source": "return[ false",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 13
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ A return statement can only be used within a function_body - start: 0, end: 6
✖ ',' expected - start: 13, end: 13

```
