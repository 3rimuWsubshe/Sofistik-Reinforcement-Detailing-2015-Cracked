# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-14
- From: kataw/test/__snapshot__/parser/statements/for-await/for-await-of/autogen.md
- Path: kataw/test/__snapshot__/parser/statements/for-await/for-await-of/gen/Fourteen
> :: test: Fourteen
> :: case: ({[Symbol.iterator]: a} of [])
## Options

`````js
{}
`````
## Input

`````js
async function f() { for await
({[Symbol.iterator]: a} of [])  { } }
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
                            "kind": 167,
                            "forKeyword": {
                                "kind": 37757017,
                                "flags": 80,
                                "start": 20,
                                "end": 24
                            },
                            "awaitKeyword": {
                                "kind": 82196,
                                "flags": 64,
                                "start": 24,
                                "end": 30
                            },
                            "initializer": {
                                "kind": 220,
                                "propertyList": {
                                    "kind": 218,
                                    "properties": [
                                        {
                                            "kind": 219,
                                            "asteriskToken": null,
                                            "left": {
                                                "kind": 194,
                                                "expression": {
                                                    "kind": 129,
                                                    "member": {
                                                        "kind": 134299649,
                                                        "text": "Symbol",
                                                        "rawText": "Symbol",
                                                        "flags": 96,
                                                        "start": 34,
                                                        "end": 40
                                                    },
                                                    "expression": {
                                                        "kind": 134299649,
                                                        "text": "iterator",
                                                        "rawText": "iterator",
                                                        "flags": 96,
                                                        "start": 41,
                                                        "end": 49
                                                    },
                                                    "flags": 96,
                                                    "start": 34,
                                                    "end": 49
                                                },
                                                "flags": 32,
                                                "start": 33,
                                                "end": 50
                                            },
                                            "right": {
                                                "kind": 134299649,
                                                "text": "a",
                                                "rawText": "a",
                                                "flags": 96,
                                                "start": 51,
                                                "end": 53
                                            },
                                            "flags": 32,
                                            "start": 33,
                                            "end": 53
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 16,
                                    "start": 33,
                                    "end": 53
                                },
                                "flags": 48,
                                "start": 32,
                                "end": 54
                            },
                            "ofKeyword": {
                                "kind": 16793717,
                                "flags": 64,
                                "start": 54,
                                "end": 57
                            },
                            "expression": {
                                "kind": 119,
                                "elementList": {
                                    "kind": 270,
                                    "elements": [],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "start": 59,
                                    "end": 59
                                },
                                "flags": 32,
                                "start": 57,
                                "end": 60
                            },
                            "statement": {
                                "kind": 124,
                                "block": {
                                    "kind": 249,
                                    "statements": [],
                                    "flags": 16,
                                    "start": 64,
                                    "end": 64
                                },
                                "flags": 16,
                                "start": 61,
                                "end": 66
                            },
                            "flags": 80,
                            "start": 20,
                            "end": 66
                        }
                    ],
                    "flags": 32,
                    "start": 20,
                    "end": 66
                },
                "flags": 32,
                "start": 18,
                "end": 68
            },
            "returnType": null,
            "flags": 144,
            "start": 0,
            "end": 68
        }
    ],
    "isModule": false,
    "source": "async function f() { for await\n({[Symbol.iterator]: a} of [])  { } }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 68
}
```

### Printed

```javascript

async function f() { for await ({ [Symbol.iterator] : a } of []) { } }

```

### Diagnostics

```javascript
✔ No errors
```
