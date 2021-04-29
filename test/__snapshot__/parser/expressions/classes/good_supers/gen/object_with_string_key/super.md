# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: y
> :: test: object with string key
> :: case: super
## Input

`````js
class x extends y {
  constructor() {
    ({"foo": super})
  }
}
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 178,
            "declareKeyword": null,
            "decorators": null,
            "classKeyword": {
                "kind": 37822544,
                "flags": 0,
                "start": 0,
                "end": 5
            },
            "name": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 96,
                "start": 5,
                "end": 7
            },
            "typeParameters": null,
            "classHeritage": {
                "kind": 279,
                "extendsKeyword": {
                    "kind": 4194391,
                    "flags": 0,
                    "start": 7,
                    "end": 15
                },
                "expression": {
                    "kind": 134299649,
                    "text": "y",
                    "rawText": "y",
                    "flags": 96,
                    "start": 15,
                    "end": 17
                },
                "typeParameter": null,
                "flags": 16,
                "start": 15,
                "end": 17
            },
            "members": {
                "kind": 277,
                "elements": [
                    {
                        "kind": 278,
                        "declareToken": null,
                        "decorators": null,
                        "generatorToken": null,
                        "staticKeyword": null,
                        "asyncKeyword": null,
                        "setKeyword": null,
                        "getKeyword": null,
                        "method": {
                            "kind": 209,
                            "name": {
                                "kind": 134299649,
                                "text": "constructor",
                                "rawText": "constructor",
                                "flags": 96,
                                "start": 19,
                                "end": 33
                            },
                            "typeParameters": null,
                            "formalParameters": {
                                "kind": 214,
                                "formalParameterList": [],
                                "trailingComma": false,
                                "flags": 0,
                                "start": 34,
                                "end": 35
                            },
                            "type": null,
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
                                                    "kind": 220,
                                                    "propertyList": {
                                                        "kind": 218,
                                                        "properties": [
                                                            {
                                                                "kind": 219,
                                                                "generatorToken": null,
                                                                "asyncKeyword": null,
                                                                "getKeyword": null,
                                                                "setKeyword": null,
                                                                "left": {
                                                                    "kind": 203,
                                                                    "chain": {
                                                                        "kind": 225,
                                                                        "superKeyword": {
                                                                            "kind": 4259935,
                                                                            "flags": 0,
                                                                            "start": 50,
                                                                            "end": 56
                                                                        },
                                                                        "flags": 96,
                                                                        "start": 50,
                                                                        "end": 56
                                                                    },
                                                                    "expression": {
                                                                        "kind": 16637,
                                                                        "text": "",
                                                                        "flags": 68,
                                                                        "start": 56,
                                                                        "end": 56
                                                                    },
                                                                    "flags": 32,
                                                                    "start": 50,
                                                                    "end": 56
                                                                },
                                                                "right": {
                                                                    "kind": 201392131,
                                                                    "text": "foo",
                                                                    "rawText": "foo",
                                                                    "flags": 96,
                                                                    "start": 44,
                                                                    "end": 49
                                                                },
                                                                "flags": 32,
                                                                "start": 44,
                                                                "end": 56
                                                            }
                                                        ],
                                                        "trailingComma": false,
                                                        "flags": 16,
                                                        "start": 44,
                                                        "end": 56
                                                    },
                                                    "flags": 32,
                                                    "start": 43,
                                                    "end": 57
                                                },
                                                "flags": 32,
                                                "start": 37,
                                                "end": 58
                                            },
                                            "flags": 16,
                                            "start": 37,
                                            "end": 58
                                        }
                                    ],
                                    "flags": 33,
                                    "start": 37,
                                    "end": 58
                                },
                                "flags": 32,
                                "start": 35,
                                "end": 62
                            },
                            "flags": 0,
                            "start": 33,
                            "end": 62
                        },
                        "flags": 0,
                        "start": 19,
                        "end": 62
                    }
                ],
                "flags": 32,
                "start": 19,
                "end": 64
            },
            "flags": 16,
            "start": 0,
            "end": 64
        }
    ],
    "isModule": false,
    "source": "class x extends y {\n  constructor() {\n    ({\"foo\": super})\n  }\n}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 64
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ 'super' must be followed by an argument list or member access. - start: 56, end: 57
✖ Dot property must be an identifier - start: 56, end: 57

```
