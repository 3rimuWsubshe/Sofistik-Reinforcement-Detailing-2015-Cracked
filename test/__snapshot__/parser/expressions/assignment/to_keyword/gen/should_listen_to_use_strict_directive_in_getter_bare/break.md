# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-03
- From: kataw8/test\__snapshot__/parser/expressions/assignment/to_keyword/autogen.md
- Path: kataw8/test\__snapshot__\parser\expressions\assignment\to_keyword\gen\should_listen_to_use_strict_directive_in_getter_bare
> :: test: should listen to use strict directive in getter bare
> :: case: break
## Input

`````js
foo = {
  get x(){
    "use strict";
    break = x
  }
}
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
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "foo",
                    "rawText": "foo",
                    "flags": 96,
                    "start": 0,
                    "end": 3
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 64,
                    "start": 3,
                    "end": 5
                },
                "right": {
                    "kind": 125,
                    "left": {
                        "kind": 220,
                        "propertyList": {
                            "kind": 218,
                            "properties": [
                                {
                                    "kind": 257,
                                    "asyncKeyword": null,
                                    "generatorToken": null,
                                    "getKeyword": {
                                        "kind": 16498,
                                        "flags": 64,
                                        "start": 7,
                                        "end": 13
                                    },
                                    "setKeyword": null,
                                    "method": {
                                        "kind": 209,
                                        "name": {
                                            "kind": 134299649,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 96,
                                            "start": 13,
                                            "end": 15
                                        },
                                        "typeParameters": null,
                                        "formalParameters": {
                                            "kind": 214,
                                            "formalParameterList": [],
                                            "trailingComma": false,
                                            "flags": 1056,
                                            "start": 16,
                                            "end": 17
                                        },
                                        "returnType": null,
                                        "contents": {
                                            "kind": 216,
                                            "functionStatementList": {
                                                "kind": 217,
                                                "directives": [
                                                    {
                                                        "kind": 201392131,
                                                        "text": "use strict",
                                                        "rawText": "\"use strict\"",
                                                        "flags": 97,
                                                        "start": 18,
                                                        "end": 35
                                                    }
                                                ],
                                                "statements": [
                                                    {
                                                        "kind": 150,
                                                        "breakKeyword": {
                                                            "kind": 37757005,
                                                            "flags": 81,
                                                            "start": 36,
                                                            "end": 46
                                                        },
                                                        "label": {
                                                            "kind": 16637,
                                                            "text": "",
                                                            "flags": 64,
                                                            "start": 46,
                                                            "end": 46
                                                        },
                                                        "flags": 16,
                                                        "start": 36,
                                                        "end": 46
                                                    }
                                                ],
                                                "flags": 33,
                                                "start": 18,
                                                "end": 46
                                            },
                                            "flags": 32,
                                            "start": 17,
                                            "end": 46
                                        },
                                        "flags": 1056,
                                        "start": 15,
                                        "end": 46
                                    },
                                    "flags": 32,
                                    "start": 7,
                                    "end": 46
                                }
                            ],
                            "trailingComma": false,
                            "flags": 17,
                            "start": 7,
                            "end": 46
                        },
                        "flags": 49,
                        "start": 5,
                        "end": 46
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "flags": 64,
                        "start": 46,
                        "end": 48
                    },
                    "right": {
                        "kind": 134299649,
                        "text": "x",
                        "rawText": "x",
                        "flags": 96,
                        "start": 48,
                        "end": 50
                    },
                    "flags": 32,
                    "start": 5,
                    "end": 50
                },
                "flags": 32,
                "start": 0,
                "end": 50
            },
            "flags": 16,
            "start": 0,
            "end": 50
        }
    ],
    "isModule": false,
    "source": "foo = {\n  get x(){\n    \"use strict\";\n    break = x\n  }\n}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 56
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Identifier expected - start: 46, end: 48
✖ A 'break' statement can only jump to a label of an enclosing statement - start: 46, end: 48
✖ The left-hand side must be a variable or a property access. - start: 46, end: 48
✖ Declaration or statement expected - start: 50, end: 54
✖ Declaration or statement expected - start: 54, end: 56

```
