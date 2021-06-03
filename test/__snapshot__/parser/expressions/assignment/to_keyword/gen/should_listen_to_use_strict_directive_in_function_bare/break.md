# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-03
- From: kataw8/test\__snapshot__/parser/expressions/assignment/to_keyword/autogen.md
- Path: kataw8/test\__snapshot__\parser\expressions\assignment\to_keyword\gen\should_listen_to_use_strict_directive_in_function_bare
> :: test: should listen to use strict directive in function bare
> :: case: break
## Input

`````js
function f() {
  "use strict";
  break = x
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
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 64,
                "start": 0,
                "end": 8
            },
            "generatorToken": null,
            "name": {
                "kind": 134299649,
                "text": "f",
                "rawText": "f",
                "flags": 96,
                "start": 8,
                "end": 10
            },
            "formalParameters": {
                "kind": 214,
                "formalParameterList": [],
                "trailingComma": false,
                "flags": 32,
                "start": 10,
                "end": 12
            },
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
                            "start": 14,
                            "end": 29
                        }
                    ],
                    "statements": [
                        {
                            "kind": 150,
                            "breakKeyword": {
                                "kind": 37757005,
                                "flags": 81,
                                "start": 30,
                                "end": 38
                            },
                            "label": {
                                "kind": 16637,
                                "text": "",
                                "flags": 64,
                                "start": 38,
                                "end": 38
                            },
                            "flags": 16,
                            "start": 30,
                            "end": 38
                        }
                    ],
                    "flags": 33,
                    "start": 14,
                    "end": 38
                },
                "flags": 32,
                "start": 12,
                "end": 38
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 16,
            "start": 0,
            "end": 38
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 96,
                "start": 40,
                "end": 42
            },
            "flags": 16,
            "start": 40,
            "end": 42
        }
    ],
    "isModule": false,
    "source": "function f() {\n  \"use strict\";\n  break = x\n}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 44
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Identifier expected - start: 38, end: 40
✖ A 'break' statement can only jump to a label of an enclosing statement - start: 38, end: 40
✖ Declaration or statement expected - start: 42, end: 44

```
