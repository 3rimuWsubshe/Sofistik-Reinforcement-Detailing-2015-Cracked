# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-03
- From: kataw8/test\__snapshot__/parser/expressions/assignment/to_keyword/autogen.md
- Path: kataw8/test\__snapshot__\parser\expressions\assignment\to_keyword\gen\assign_to_keyword_in_generator
> :: test: assign to keyword in generator
> :: case: class
## Input

`````js
function *f(){
  class = 1;
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
                "formalParameterList": [],
                "trailingComma": false,
                "flags": 32,
                "start": 11,
                "end": 13
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [
                        {
                            "kind": 178,
                            "declareKeyword": null,
                            "decorators": null,
                            "classKeyword": {
                                "kind": 37822544,
                                "flags": 81,
                                "start": 14,
                                "end": 22
                            },
                            "name": {
                                "kind": 16637,
                                "text": "",
                                "flags": 64,
                                "start": 22,
                                "end": 22
                            },
                            "typeParameters": null,
                            "tail": {
                                "kind": 277,
                                "classHeritage": null,
                                "body": {
                                    "kind": 262,
                                    "elements": [],
                                    "flags": 32,
                                    "start": 22,
                                    "end": 22
                                },
                                "flags": 22,
                                "start": 32,
                                "end": 22
                            },
                            "flags": 16,
                            "start": 14,
                            "end": 22
                        }
                    ],
                    "flags": 33,
                    "start": 14,
                    "end": 22
                },
                "flags": 32,
                "start": 13,
                "end": 22
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 272,
            "start": 0,
            "end": 22
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392130,
                "text": 1,
                "rawText": "1",
                "flags": 96,
                "start": 24,
                "end": 26
            },
            "flags": 16,
            "start": 24,
            "end": 27
        }
    ],
    "isModule": false,
    "source": "function *f(){\n  class = 1;\n}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 29
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Binding identifier expected - start: 22, end: 24
✖ Declaration or statement expected - start: 27, end: 29

```
