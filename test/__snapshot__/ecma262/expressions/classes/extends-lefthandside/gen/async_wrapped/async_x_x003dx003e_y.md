# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-14
- From: kataw/test/__snapshot__/parser/expressions/classes/extends-lefthandside/autogen.md
- Path: kataw/test/__snapshot__/parser/expressions/classes/extends-lefthandside/gen/async_wrapped
> :: test: async wrapped
> :: case: async
>          x => y
## Options

`````js
{}
`````
## Input

`````js
async function p(){
  class C extends async
x => y {}
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
            "asyncKeyword": {
                "kind": 82031,
                "flags": 64,
                "start": 0,
                "end": 5
            },
            "functionKeyword": {
                "kind": 37822554,
                "flags": 64,
                "start": 5,
                "end": 14
            },
            "asteriskToken": null,
            "name": {
                "kind": 134299649,
                "text": "p",
                "rawText": "p",
                "flags": 96,
                "start": 14,
                "end": 16
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [],
                "trailingComma": false,
                "flags": 32,
                "start": 17,
                "end": 17
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
                                "start": 19,
                                "end": 27
                            },
                            "name": {
                                "kind": 134299649,
                                "text": "C",
                                "rawText": "C",
                                "flags": 96,
                                "start": 27,
                                "end": 29
                            },
                            "typeParameters": null,
                            "tail": {
                                "kind": 277,
                                "classHeritage": {
                                    "kind": 279,
                                    "extendsKeyword": {
                                        "kind": 4194391,
                                        "flags": 80,
                                        "start": 29,
                                        "end": 37
                                    },
                                    "expression": {
                                        "kind": 134299649,
                                        "text": "async",
                                        "rawText": "async",
                                        "flags": 96,
                                        "start": 37,
                                        "end": 43
                                    },
                                    "typeParameter": null,
                                    "flags": 16,
                                    "start": 37,
                                    "end": 43
                                },
                                "body": {
                                    "kind": 303,
                                    "elements": [],
                                    "flags": 32,
                                    "start": 29,
                                    "end": 29
                                },
                                "flags": 29,
                                "start": 32,
                                "end": 29
                            },
                            "flags": 17,
                            "start": 19,
                            "end": 43
                        },
                        {
                            "kind": 120,
                            "expression": {
                                "kind": 271,
                                "asyncKeyword": null,
                                "typeParameters": null,
                                "arrowPatameterList": {
                                    "kind": 134299649,
                                    "text": "x",
                                    "rawText": "x",
                                    "flags": 96,
                                    "start": 43,
                                    "end": 45
                                },
                                "returnType": null,
                                "arrowToken": {
                                    "kind": 10,
                                    "flags": 64,
                                    "start": 45,
                                    "end": 48
                                },
                                "contents": {
                                    "kind": 134299649,
                                    "text": "y",
                                    "rawText": "y",
                                    "flags": 96,
                                    "start": 48,
                                    "end": 50
                                },
                                "flags": 32,
                                "start": 43,
                                "end": 50
                            },
                            "flags": 16,
                            "start": 43,
                            "end": 50
                        },
                        {
                            "kind": 124,
                            "block": {
                                "kind": 249,
                                "statements": [],
                                "flags": 16,
                                "start": 52,
                                "end": 52
                            },
                            "flags": 16,
                            "start": 50,
                            "end": 53
                        }
                    ],
                    "flags": 33,
                    "start": 19,
                    "end": 53
                },
                "flags": 32,
                "start": 18,
                "end": 55
            },
            "returnType": null,
            "flags": 144,
            "start": 0,
            "end": 55
        }
    ],
    "isModule": false,
    "source": "async function p(){\n  class C extends async\nx => y {}\n}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 55
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Missing an opening brace - '{ - start: 44, end: 45
✖ Expected a `;` - start: 50, end: 52

```
