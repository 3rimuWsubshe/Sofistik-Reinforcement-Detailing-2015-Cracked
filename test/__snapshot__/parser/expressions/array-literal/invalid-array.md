# Kataw parser test case

## Input

`````js
[

  ;

]!
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 120,
            "expression": {
                "kind": 119,
                "elementList": {
                    "kind": 270,
                    "elements": [],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 1,
                    "end": 1
                },
                "flags": 32,
                "start": 0,
                "end": 1
            },
            "flags": 16,
            "start": 0,
            "end": 6
        },
        {
            "kind": 120,
            "expression": {
                "kind": 126,
                "operandToken": {
                    "kind": 65584,
                    "flags": 64,
                    "start": 9,
                    "end": 10
                },
                "expression": {
                    "kind": 16637,
                    "text": "",
                    "flags": 68,
                    "start": 10,
                    "end": 10
                },
                "flags": 32,
                "start": 9,
                "end": 10
            },
            "flags": 16,
            "start": 9,
            "end": 10
        }
    ],
    "isModule": false,
    "source": "[\n\n  ;\n\n]!",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 10
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ Statement expected - start: 6, end: 9
✖ Expression expected - start: 10, end: 10

```
