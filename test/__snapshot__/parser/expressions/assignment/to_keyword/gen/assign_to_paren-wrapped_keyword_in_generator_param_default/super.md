# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-03
- From: kataw8/test\__snapshot__/parser/expressions/assignment/to_keyword/autogen.md
- Path: kataw8/test\__snapshot__\parser\expressions\assignment\to_keyword\gen\assign_to_paren-wrapped_keyword_in_generator_param_default
> :: test: assign to paren-wrapped keyword in generator param default
> :: case: super
## Input

`````js
function *f(x = (super) = f) {}
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
                            "kind": 125,
                            "left": {
                                "kind": 121,
                                "expression": {
                                    "kind": 129,
                                    "member": {
                                        "kind": 225,
                                        "superKeyword": {
                                            "kind": 4259935,
                                            "flags": 96,
                                            "start": 17,
                                            "end": 22
                                        },
                                        "flags": 96,
                                        "start": 17,
                                        "end": 22
                                    },
                                    "expression": {
                                        "kind": 16637,
                                        "text": "",
                                        "flags": 64,
                                        "start": 22,
                                        "end": 22
                                    },
                                    "flags": 536870944,
                                    "start": 17,
                                    "end": 22
                                },
                                "flags": 32,
                                "start": 15,
                                "end": 23
                            },
                            "operatorToken": {
                                "kind": 4125,
                                "flags": 64,
                                "start": 23,
                                "end": 25
                            },
                            "right": {
                                "kind": 134299649,
                                "text": "f",
                                "rawText": "f",
                                "flags": 96,
                                "start": 25,
                                "end": 27
                            },
                            "flags": 32,
                            "start": 15,
                            "end": 27
                        },
                        "flags": 34,
                        "start": 12,
                        "end": 27
                    }
                ],
                "trailingComma": false,
                "flags": 34,
                "start": 11,
                "end": 28
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [],
                    "flags": 32,
                    "start": 30,
                    "end": 30
                },
                "flags": 32,
                "start": 28,
                "end": 31
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 272,
            "start": 0,
            "end": 31
        }
    ],
    "isModule": false,
    "source": "function *f(x = (super) = f) {}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 31
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ 'super' must be followed by an argument list or member access. - start: 17, end: 23
✖ Dot property must be an identifier - start: 22, end: 23

```
