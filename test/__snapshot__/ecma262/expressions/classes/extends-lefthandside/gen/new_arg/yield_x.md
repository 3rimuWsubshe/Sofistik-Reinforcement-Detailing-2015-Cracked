# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-14
- From: kataw/test/__snapshot__/parser/expressions/classes/extends-lefthandside/autogen.md
- Path: kataw/test/__snapshot__/parser/expressions/classes/extends-lefthandside/gen/new_arg
> :: test: new arg
> :: case: yield
>          x
## Options

`````js
{}
`````
## Input

`````js
new yield
x
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
                "kind": 210,
                "newKeyword": {
                    "kind": 138477661,
                    "flags": 96,
                    "start": 0,
                    "end": 3
                },
                "expression": {
                    "kind": 134299649,
                    "text": "yield",
                    "rawText": "yield",
                    "flags": 96,
                    "start": 3,
                    "end": 9
                },
                "argumentList": null,
                "flags": 96,
                "start": 0,
                "end": 9
            },
            "flags": 16,
            "start": 0,
            "end": 9
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 96,
                "start": 9,
                "end": 11
            },
            "flags": 16,
            "start": 9,
            "end": 11
        }
    ],
    "isModule": false,
    "source": "new yield\nx",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 11
}
```

### Printed

```javascript

new yield;
x;

```

### Diagnostics

```javascript
✔ No errors
```
