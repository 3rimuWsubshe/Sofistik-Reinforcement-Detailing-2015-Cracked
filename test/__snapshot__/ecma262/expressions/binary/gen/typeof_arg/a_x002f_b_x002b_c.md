# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-14
- From: kataw/test/__snapshot__/parser/expressions/binary/autogen.md
- Path: kataw/test/__snapshot__/parser/expressions/binary/gen/typeof_arg
> :: test: typeof arg
> :: case: a / b + c
## Options

`````js
{}
`````
## Input

`````js
typeof a / b + c
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
                "kind": 198,
                "left": {
                    "kind": 198,
                    "left": {
                        "kind": 126,
                        "operandToken": {
                            "kind": 138477613,
                            "flags": 96,
                            "start": 0,
                            "end": 6
                        },
                        "operand": {
                            "kind": 134299649,
                            "text": "a",
                            "rawText": "a",
                            "flags": 96,
                            "start": 6,
                            "end": 8
                        },
                        "flags": 32,
                        "start": 0,
                        "end": 8
                    },
                    "operatorToken": {
                        "kind": 35640,
                        "flags": 96,
                        "start": 8,
                        "end": 10
                    },
                    "right": {
                        "kind": 134299649,
                        "text": "b",
                        "rawText": "b",
                        "flags": 96,
                        "start": 10,
                        "end": 12
                    },
                    "flags": 32,
                    "start": 0,
                    "end": 12
                },
                "operatorToken": {
                    "kind": 99634,
                    "flags": 96,
                    "start": 12,
                    "end": 14
                },
                "right": {
                    "kind": 134299649,
                    "text": "c",
                    "rawText": "c",
                    "flags": 96,
                    "start": 14,
                    "end": 16
                },
                "flags": 32,
                "start": 0,
                "end": 16
            },
            "flags": 16,
            "start": 0,
            "end": 16
        }
    ],
    "isModule": false,
    "source": "typeof a / b + c",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 16
}
```

### Printed

```javascript

typeof  a / b + c;

```

### Diagnostics

```javascript
✔ No errors
```
