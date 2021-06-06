# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-06
- From: kataw8/test\__snapshot__/parser/miscellaneous/should-pass/autogen.md
- Path: kataw8/test\__snapshot__\parser\miscellaneous\should-pass\gen\in_a_block
> :: test: in a block
> :: case: (function not_gen() {yield * 2;})
## Input

`````js
{ (function not_gen() {yield * 2;}) }
`````
## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 124,
            "block": {
                "kind": 249,
                "statements": [
                    {
                        "kind": 120,
                        "expression": {
                            "kind": 121,
                            "expression": {
                                "kind": 177,
                                "asyncKeyword": null,
                                "functionKeyword": {
                                    "kind": 37822554,
                                    "flags": 64,
                                    "start": 3,
                                    "end": 11
                                },
                                "generatorToken": null,
                                "name": {
                                    "kind": 134299649,
                                    "text": "not_gen",
                                    "rawText": "not_gen",
                                    "flags": 96,
                                    "start": 11,
                                    "end": 19
                                },
                                "formalParameters": {
                                    "kind": 214,
                                    "formalParameterList": [],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "start": 19,
                                    "end": 21
                                },
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "directives": [],
                                        "statements": [
                                            {
                                                "kind": 120,
                                                "expression": {
                                                    "kind": 198,
                                                    "left": {
                                                        "kind": 134299649,
                                                        "text": "yield",
                                                        "rawText": "yield",
                                                        "flags": 96,
                                                        "start": 23,
                                                        "end": 28
                                                    },
                                                    "operatorToken": {
                                                        "kind": 67143222,
                                                        "flags": 64,
                                                        "start": 28,
                                                        "end": 30
                                                    },
                                                    "right": {
                                                        "kind": 201392130,
                                                        "text": 2,
                                                        "rawText": "2",
                                                        "flags": 96,
                                                        "start": 30,
                                                        "end": 32
                                                    },
                                                    "flags": 32,
                                                    "start": 23,
                                                    "end": 32
                                                },
                                                "flags": 16,
                                                "start": 23,
                                                "end": 33
                                            }
                                        ],
                                        "flags": 32,
                                        "start": 23,
                                        "end": 33
                                    },
                                    "flags": 32,
                                    "start": 21,
                                    "end": 34
                                },
                                "typeParameters": null,
                                "returnType": null,
                                "flags": 32,
                                "start": 3,
                                "end": 34
                            },
                            "flags": 32,
                            "start": 1,
                            "end": 35
                        },
                        "flags": 16,
                        "start": 1,
                        "end": 35
                    }
                ],
                "flags": 16,
                "start": 1,
                "end": 35
            },
            "flags": 16,
            "start": 0,
            "end": 37
        }
    ],
    "isModule": false,
    "source": "{ (function not_gen() {yield * 2;}) }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 37
}
```

### Printed

```javascript

{
  (function not_gen() {
      yield * 2;
    });
}
```

### Diagnostics

```javascript
✔ No errors
```

