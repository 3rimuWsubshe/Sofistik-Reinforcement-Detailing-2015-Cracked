# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-14
- From: kataw/test/__snapshot__/parser/expressions/await/autogen.md
- Path: kataw/test/__snapshot__/parser/expressions/await/gen/with_strict_dirctive
> :: test: with_strict_dirctive
> :: case: async function f(){ await \n x; }
## Options

`````js
{}
`````
## Input

`````js
'use strict'; async function f(){ await \n x; }
`````
## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [
        {
            "kind": 201392131,
            "text": "use strict",
            "rawText": "'use strict'",
            "flags": 4194400,
            "start": 0,
            "end": 12
        }
    ],
    "statements": [
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": {
                "kind": 82031,
                "flags": 64,
                "start": 13,
                "end": 19
            },
            "functionKeyword": {
                "kind": 37822554,
                "flags": 64,
                "start": 19,
                "end": 28
            },
            "asteriskToken": null,
            "name": {
                "kind": 134299649,
                "text": "f",
                "rawText": "f",
                "flags": 96,
                "start": 28,
                "end": 30
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [],
                "trailingComma": false,
                "flags": 32,
                "start": 31,
                "end": 31
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
                                "kind": 208,
                                "awaitKeyword": {
                                    "kind": 82196,
                                    "flags": 64,
                                    "start": 33,
                                    "end": 39
                                },
                                "expression": {
                                    "kind": 16637,
                                    "text": "",
                                    "rawText": "",
                                    "flags": 64,
                                    "start": 39,
                                    "end": 39
                                },
                                "flags": 32,
                                "start": 33,
                                "end": 39
                            },
                            "flags": 16,
                            "start": 33,
                            "end": 39
                        }
                    ],
                    "flags": 32,
                    "start": 33,
                    "end": 39
                },
                "flags": 32,
                "start": 32,
                "end": 39
            },
            "returnType": null,
            "flags": 144,
            "start": 13,
            "end": 39
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "n",
                "rawText": "n",
                "flags": 96,
                "start": 41,
                "end": 42
            },
            "flags": 16,
            "start": 41,
            "end": 42
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 96,
                "start": 42,
                "end": 44
            },
            "flags": 16,
            "start": 42,
            "end": 45
        }
    ],
    "isModule": false,
    "source": "'use strict'; async function f(){ await \\n x; }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 47
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Invalid hexadecimal escape sequence - start: 39, end: 40
✖ Identifier expected - start: 39, end: 41
✖ Expected a `;` - start: 42, end: 44
✖ Declaration or statement expected - start: 45, end: 47

```
