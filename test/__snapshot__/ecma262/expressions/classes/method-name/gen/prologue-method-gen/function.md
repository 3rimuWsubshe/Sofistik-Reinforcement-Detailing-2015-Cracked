# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-14
- From: kataw/test/__snapshot__/parser/expressions/classes/method-name/autogen.md
- Path: kataw/test/__snapshot__/parser/expressions/classes/method-name/gen/prologue-method-gen
> :: test: prologue-method-gen
> :: case: function
## Options

`````js
{}
`````
## Input

`````js
'use strict'; ({*function(x, y) {}});
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
                                "asteriskToken": {
                                    "kind": 67143222,
                                    "flags": 64,
                                    "start": 16,
                                    "end": 17
                                },
                                "getKeyword": null,
                                "setKeyword": null,
                                "method": {
                                    "kind": 209,
                                    "name": {
                                        "kind": 134299649,
                                        "text": "function",
                                        "rawText": "function",
                                        "flags": 96,
                                        "start": 17,
                                        "end": 25
                                    },
                                    "typeParameters": null,
                                    "formalParameterList": {
                                        "kind": 214,
                                        "formalParameters": [
                                            {
                                                "kind": 134299649,
                                                "text": "x",
                                                "rawText": "x",
                                                "flags": 96,
                                                "start": 26,
                                                "end": 27
                                            },
                                            {
                                                "kind": 134299649,
                                                "text": "y",
                                                "rawText": "y",
                                                "flags": 96,
                                                "start": 28,
                                                "end": 30
                                            }
                                        ],
                                        "trailingComma": false,
                                        "flags": 224,
                                        "start": 26,
                                        "end": 31
                                    },
                                    "returnType": null,
                                    "contents": {
                                        "kind": 216,
                                        "functionStatementList": {
                                            "kind": 217,
                                            "directives": [],
                                            "statements": [],
                                            "flags": 32,
                                            "start": 33,
                                            "end": 33
                                        },
                                        "flags": 32,
                                        "start": 31,
                                        "end": 34
                                    },
                                    "flags": 160,
                                    "start": 25,
                                    "end": 34
                                },
                                "flags": 32,
                                "start": 16,
                                "end": 34
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "start": 16,
                        "end": 34
                    },
                    "flags": 48,
                    "start": 15,
                    "end": 35
                },
                "flags": 32,
                "start": 13,
                "end": 36
            },
            "flags": 16,
            "start": 13,
            "end": 37
        }
    ],
    "isModule": false,
    "source": "'use strict'; ({*function(x, y) {}});",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 37
}
```

### Printed

```javascript

'\'use strict\'';
({ * function(x, y) { } });

```

### Diagnostics

```javascript
✔ No errors
```
