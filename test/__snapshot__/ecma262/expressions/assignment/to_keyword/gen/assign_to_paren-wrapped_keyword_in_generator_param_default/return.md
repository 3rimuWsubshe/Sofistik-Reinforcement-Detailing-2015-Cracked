# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-14
- From: kataw/test/__snapshot__/parser/expressions/assignment/to_keyword/autogen.md
- Path: kataw/test/__snapshot__/parser/expressions/assignment/to_keyword/gen/assign_to_paren-wrapped_keyword_in_generator_param_default
> :: test: assign to paren-wrapped keyword in generator param default
> :: case: return
## Options

`````js
{}
`````
## Input

`````js
function *f(x = (return) = f) {}
`````
## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 64,
                "start": 0,
                "end": 8
            },
            "asteriskToken": {
                "kind": 67143222,
                "flags": 64,
                "start": 8,
                "end": 10
            },
            "name": {
                "kind": 134299649,
                "text": "f",
                "rawText": "f",
                "flags": 96,
                "start": 10,
                "end": 11
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [
                    {
                        "kind": 281,
                        "ellipsisToken": null,
                        "left": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "start": 12,
                            "end": 13
                        },
                        "optionalToken": null,
                        "type": null,
                        "right": {
                            "kind": 121,
                            "expression": {
                                "kind": 16637,
                                "text": "",
                                "rawText": "",
                                "flags": 64,
                                "start": 17,
                                "end": 17
                            },
                            "flags": 32,
                            "start": 15,
                            "end": 17
                        },
                        "flags": 34,
                        "start": 12,
                        "end": 17
                    }
                ],
                "trailingComma": false,
                "flags": 34,
                "start": 12,
                "end": 17
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [],
                    "flags": 32,
                    "start": 17,
                    "end": 17
                },
                "flags": 32,
                "start": 17,
                "end": 17
            },
            "returnType": null,
            "flags": 272,
            "start": 0,
            "end": 17
        },
        {
            "kind": 161,
            "returnKeyword": {
                "kind": 37757022,
                "flags": 80,
                "start": 17,
                "end": 23
            },
            "expression": {
                "kind": 16637,
                "text": "",
                "rawText": "",
                "flags": 64,
                "start": 23,
                "end": 23
            },
            "flags": 80,
            "start": 17,
            "end": 23
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "f",
                "rawText": "f",
                "flags": 96,
                "start": 26,
                "end": 28
            },
            "flags": 16,
            "start": 26,
            "end": 28
        },
        {
            "kind": 124,
            "block": {
                "kind": 249,
                "statements": [],
                "flags": 16,
                "start": 31,
                "end": 31
            },
            "flags": 16,
            "start": 29,
            "end": 32
        }
    ],
    "isModule": false,
    "source": "function *f(x = (return) = f) {}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 32
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Identifier expected - start: 17, end: 23
✖ A return statement can only be used within a function_body - start: 17, end: 23
✖ Identifier expected - start: 23, end: 24
✖ Declaration or statement expected - start: 24, end: 26
✖ Expected a `;` - start: 28, end: 29

```
