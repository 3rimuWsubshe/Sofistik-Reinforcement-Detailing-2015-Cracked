# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-14
- From: kataw/test/__snapshot__/parser/expressions/assignment/keyword_with_escapes_check/autogen.md
- Path: kataw/test/__snapshot__/parser/expressions/assignment/keyword_with_escapes_check/gen/inside_a_generator_func
> :: test: inside a generator func
> :: case: \u0066unction
## Options

`````js
{}
`````
## Input

`````js
function *f(){
  \u0066unction = x
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
                            "kind": 176,
                            "declareKeyword": null,
                            "asyncKeyword": null,
                            "functionKeyword": {
                                "kind": 37822554,
                                "flags": 16449,
                                "start": 14,
                                "end": 30
                            },
                            "asteriskToken": null,
                            "name": null,
                            "typeParameters": null,
                            "formalParameterList": {
                                "kind": 214,
                                "formalParameters": [],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 30,
                                "end": 30
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
                                "start": 30,
                                "end": 30
                            },
                            "returnType": null,
                            "flags": 16,
                            "start": 14,
                            "end": 30
                        }
                    ],
                    "flags": 16417,
                    "start": 14,
                    "end": 30
                },
                "flags": 32,
                "start": 13,
                "end": 30
            },
            "returnType": null,
            "flags": 272,
            "start": 0,
            "end": 30
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 96,
                "start": 32,
                "end": 34
            },
            "flags": 16,
            "start": 32,
            "end": 34
        }
    ],
    "isModule": false,
    "source": "function *f(){\n  \\u0066unction = x\n}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 36
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Binding identifier expected - start: 30, end: 32
✖ Missing an opening parentheses - '( - start: 31, end: 32
✖ Declaration or statement expected - start: 34, end: 36

```
