# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-03
- From: kataw8/test\__snapshot__/parser/expressions/assignment/to_keyword/autogen.md
- Path: kataw8/test\__snapshot__\parser\expressions\assignment\to_keyword\gen\assign_to_paren_wrapped_keyword_in_a_generator
> :: test: assign to paren wrapped keyword in a generator
> :: case: const
## Input

`````js
function *f(){
  (const) = 1;
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
                            "kind": 120,
                            "expression": {
                                "kind": 121,
                                "expression": {
                                    "kind": 16637,
                                    "text": "",
                                    "flags": 64,
                                    "start": 18,
                                    "end": 18
                                },
                                "flags": 32,
                                "start": 14,
                                "end": 18
                            },
                            "flags": 16,
                            "start": 14,
                            "end": 18
                        },
                        {
                            "kind": 162,
                            "lexicalKeyword": {
                                "kind": 37757004,
                                "flags": 80,
                                "start": 18,
                                "end": 23
                            },
                            "binding": {
                                "kind": 151,
                                "bindingList": [],
                                "flags": 16777232,
                                "start": 23,
                                "end": 23
                            },
                            "flags": 33554448,
                            "start": 18,
                            "end": 23
                        }
                    ],
                    "flags": 33,
                    "start": 14,
                    "end": 23
                },
                "flags": 32,
                "start": 13,
                "end": 23
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 272,
            "start": 0,
            "end": 23
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392130,
                "text": 1,
                "rawText": "1",
                "flags": 96,
                "start": 26,
                "end": 28
            },
            "flags": 16,
            "start": 26,
            "end": 29
        }
    ],
    "isModule": false,
    "source": "function *f(){\n  (const) = 1;\n}",
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
✖ Identifier expected - start: 18, end: 23
✖ Expected a `;` - start: 23, end: 24
✖ Declaration or statement expected - start: 24, end: 26
✖ Declaration or statement expected - start: 29, end: 31

```
