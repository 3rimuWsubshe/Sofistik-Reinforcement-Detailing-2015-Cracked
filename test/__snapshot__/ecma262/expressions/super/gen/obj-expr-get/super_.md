# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-14
- From: kataw/test/__snapshot__/parser/expressions/super/autogen.md
- Path: kataw/test/__snapshot__/parser/expressions/super/gen/obj-expr-get
> :: test: obj-expr-get
> :: case: super;
## Options

`````js
{}
`````
## Input

`````js
({ get x() { super; } })
`````
## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 220,
                    "propertyList": {
                        "kind": 218,
                        "properties": [
                            {
                                "kind": 351,
                                "asyncKeyword": null,
                                "asteriskToken": null,
                                "getKeyword": {
                                    "kind": 16498,
                                    "flags": 96,
                                    "start": 2,
                                    "end": 6
                                },
                                "setKeyword": null,
                                "method": {
                                    "kind": 209,
                                    "name": {
                                        "kind": 134299649,
                                        "text": "x",
                                        "rawText": "x",
                                        "flags": 96,
                                        "start": 6,
                                        "end": 8
                                    },
                                    "typeParameters": null,
                                    "formalParameterList": {
                                        "kind": 214,
                                        "formalParameters": [],
                                        "trailingComma": false,
                                        "flags": 1056,
                                        "start": 9,
                                        "end": 10
                                    },
                                    "returnType": null,
                                    "contents": {
                                        "kind": 216,
                                        "functionStatementList": {
                                            "kind": 217,
                                            "directives": [],
                                            "statements": [
                                                {
                                                    "kind": 120,
                                                    "expression": {
                                                        "kind": 129,
                                                        "member": {
                                                            "kind": 4259935,
                                                            "flags": 96,
                                                            "start": 12,
                                                            "end": 18
                                                        },
                                                        "expression": {
                                                            "kind": 16637,
                                                            "text": "",
                                                            "rawText": "",
                                                            "flags": 64,
                                                            "start": 18,
                                                            "end": 18
                                                        },
                                                        "flags": 32,
                                                        "start": 12,
                                                        "end": 18
                                                    },
                                                    "flags": 16,
                                                    "start": 12,
                                                    "end": 19
                                                }
                                            ],
                                            "flags": 32,
                                            "start": 12,
                                            "end": 19
                                        },
                                        "flags": 32,
                                        "start": 10,
                                        "end": 21
                                    },
                                    "flags": 1056,
                                    "start": 8,
                                    "end": 21
                                },
                                "flags": 32,
                                "start": 2,
                                "end": 21
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "start": 2,
                        "end": 21
                    },
                    "flags": 48,
                    "start": 1,
                    "end": 23
                },
                "flags": 32,
                "start": 0,
                "end": 24
            },
            "flags": 16,
            "start": 0,
            "end": 24
        }
    ],
    "isModule": false,
    "source": "({ get x() { super; } })",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 24
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ 'super' must be followed by an argument list or member access. - start: 12, end: 19
✖ Dot property must be an identifier - start: 18, end: 19

```
