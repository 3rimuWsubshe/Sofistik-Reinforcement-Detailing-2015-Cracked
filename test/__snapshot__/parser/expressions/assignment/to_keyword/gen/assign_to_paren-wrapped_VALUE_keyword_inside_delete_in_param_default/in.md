# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-03
- From: kataw8/test\__snapshot__/parser/expressions/assignment/to_keyword/autogen.md
- Path: kataw8/test\__snapshot__\parser\expressions\assignment\to_keyword\gen\assign_to_paren-wrapped_VALUE_keyword_inside_delete_in_param_default
> :: test: assign to paren-wrapped VALUE keyword inside delete in param default
> :: case: in
## Input

`````js
function *f(x = delete ((in) = f)) {}
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
            "generatorToken": {
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
            "formalParameters": {
                "kind": 214,
                "formalParameterList": [
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
                            "kind": 126,
                            "operandToken": {
                                "kind": 4259886,
                                "flags": 64,
                                "start": 15,
                                "end": 22
                            },
                            "operand": {
                                "kind": 121,
                                "expression": {
                                    "kind": 125,
                                    "left": {
                                        "kind": 121,
                                        "expression": {
                                            "kind": 198,
                                            "left": {
                                                "kind": 16637,
                                                "text": "",
                                                "flags": 64,
                                                "start": 25,
                                                "end": 25
                                            },
                                            "operatorToken": {
                                                "kind": 21006388,
                                                "flags": 64,
                                                "start": 25,
                                                "end": 27
                                            },
                                            "right": {
                                                "kind": 16637,
                                                "text": "",
                                                "flags": 64,
                                                "start": 27,
                                                "end": 27
                                            },
                                            "flags": 32,
                                            "start": 25,
                                            "end": 27
                                        },
                                        "flags": 32,
                                        "start": 24,
                                        "end": 28
                                    },
                                    "operatorToken": {
                                        "kind": 4125,
                                        "flags": 64,
                                        "start": 28,
                                        "end": 30
                                    },
                                    "right": {
                                        "kind": 134299649,
                                        "text": "f",
                                        "rawText": "f",
                                        "flags": 96,
                                        "start": 30,
                                        "end": 32
                                    },
                                    "flags": 32,
                                    "start": 24,
                                    "end": 32
                                },
                                "flags": 32,
                                "start": 22,
                                "end": 33
                            },
                            "flags": 32,
                            "start": 15,
                            "end": 33
                        },
                        "flags": 34,
                        "start": 12,
                        "end": 33
                    }
                ],
                "trailingComma": false,
                "flags": 34,
                "start": 11,
                "end": 34
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [],
                    "flags": 32,
                    "start": 36,
                    "end": 36
                },
                "flags": 32,
                "start": 34,
                "end": 37
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 272,
            "start": 0,
            "end": 37
        }
    ],
    "isModule": false,
    "source": "function *f(x = delete ((in) = f)) {}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 37
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Identifier expected - start: 25, end: 27
✖ Identifier expected - start: 27, end: 28

```
