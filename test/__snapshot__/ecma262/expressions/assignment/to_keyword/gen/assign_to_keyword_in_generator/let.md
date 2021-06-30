# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-14
- From: kataw/test/__snapshot__/parser/expressions/assignment/to_keyword/autogen.md
- Path: kataw/test/__snapshot__/parser/expressions/assignment/to_keyword/gen/assign_to_keyword_in_generator
> :: test: assign to keyword in generator
> :: case: let
## Options

`````js
{}
`````
## Input

`````js
function *f(){
  let = 1;
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
                "formalParameters": [],
                "trailingComma": false,
                "flags": 32,
                "start": 12,
                "end": 12
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
                                "kind": 125,
                                "left": {
                                    "kind": 134299649,
                                    "text": "let",
                                    "rawText": "let",
                                    "flags": 96,
                                    "start": 14,
                                    "end": 20
                                },
                                "operatorToken": {
                                    "kind": 4125,
                                    "flags": 96,
                                    "start": 20,
                                    "end": 22
                                },
                                "right": {
                                    "kind": 201392130,
                                    "text": 1,
                                    "rawText": "1",
                                    "flags": 96,
                                    "start": 22,
                                    "end": 24
                                },
                                "flags": 32,
                                "start": 14,
                                "end": 24
                            },
                            "flags": 16,
                            "start": 14,
                            "end": 25
                        }
                    ],
                    "flags": 33,
                    "start": 14,
                    "end": 25
                },
                "flags": 32,
                "start": 13,
                "end": 27
            },
            "returnType": null,
            "flags": 272,
            "start": 0,
            "end": 27
        }
    ],
    "isModule": false,
    "source": "function *f(){\n  let = 1;\n}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 27
}
```

### Printed

```javascript

function* f() {
  let = 1;
}

```

### Diagnostics

```javascript
✔ No errors
```
