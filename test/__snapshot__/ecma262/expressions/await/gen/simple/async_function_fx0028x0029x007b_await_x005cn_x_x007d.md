# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-14
- From: kataw/test/__snapshot__/parser/expressions/await/autogen.md
- Path: kataw/test/__snapshot__/parser/expressions/await/gen/simple
> :: test: simple
> :: case: async function f(){ await \n x; }
## Options

`````js
{}
`````
## Input

`````js
async function f(){ await \n x; }
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
                "text": "f",
                "rawText": "f",
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
                            "kind": 120,
                            "expression": {
                                "kind": 208,
                                "awaitKeyword": {
                                    "kind": 82196,
                                    "flags": 64,
                                    "start": 19,
                                    "end": 25
                                },
                                "expression": {
                                    "kind": 16637,
                                    "text": "",
                                    "rawText": "",
                                    "flags": 64,
                                    "start": 25,
                                    "end": 25
                                },
                                "flags": 32,
                                "start": 19,
                                "end": 25
                            },
                            "flags": 16,
                            "start": 19,
                            "end": 25
                        }
                    ],
                    "flags": 32,
                    "start": 19,
                    "end": 25
                },
                "flags": 32,
                "start": 18,
                "end": 25
            },
            "returnType": null,
            "flags": 144,
            "start": 0,
            "end": 25
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "n",
                "rawText": "n",
                "flags": 96,
                "start": 27,
                "end": 28
            },
            "flags": 16,
            "start": 27,
            "end": 28
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 96,
                "start": 28,
                "end": 30
            },
            "flags": 16,
            "start": 28,
            "end": 31
        }
    ],
    "isModule": false,
    "source": "async function f(){ await \\n x; }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 33
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Invalid hexadecimal escape sequence - start: 25, end: 26
✖ Identifier expected - start: 25, end: 27
✖ Expected a `;` - start: 28, end: 30
✖ Declaration or statement expected - start: 31, end: 33

```
