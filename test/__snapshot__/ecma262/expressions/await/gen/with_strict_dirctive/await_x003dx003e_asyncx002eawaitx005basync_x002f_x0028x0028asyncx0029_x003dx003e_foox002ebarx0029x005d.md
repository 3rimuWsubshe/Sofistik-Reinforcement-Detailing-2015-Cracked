# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-14
- From: kataw/test/__snapshot__/parser/expressions/await/autogen.md
- Path: kataw/test/__snapshot__/parser/expressions/await/gen/with_strict_dirctive
> :: test: with_strict_dirctive
> :: case: await => async.await[async / ((async) => foo.bar)]
## Options

`````js
{}
`````
## Input

`````js
'use strict'; await => async.await[async / ((async) => foo.bar)]
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
                "kind": 271,
                "asyncKeyword": null,
                "typeParameters": null,
                "arrowPatameterList": {
                    "kind": 134299649,
                    "text": "await",
                    "rawText": "await",
                    "flags": 96,
                    "start": 13,
                    "end": 19
                },
                "returnType": null,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "start": 19,
                    "end": 22
                },
                "contents": {
                    "kind": 130,
                    "member": {
                        "kind": 129,
                        "member": {
                            "kind": 134299649,
                            "text": "async",
                            "rawText": "async",
                            "flags": 96,
                            "start": 22,
                            "end": 28
                        },
                        "expression": {
                            "kind": 134299649,
                            "text": "await",
                            "rawText": "await",
                            "flags": 96,
                            "start": 29,
                            "end": 34
                        },
                        "flags": 96,
                        "start": 22,
                        "end": 34
                    },
                    "expression": {
                        "kind": 198,
                        "left": {
                            "kind": 134299649,
                            "text": "async",
                            "rawText": "async",
                            "flags": 96,
                            "start": 35,
                            "end": 40
                        },
                        "operatorToken": {
                            "kind": 35640,
                            "flags": 96,
                            "start": 40,
                            "end": 42
                        },
                        "right": {
                            "kind": 121,
                            "expression": {
                                "kind": 271,
                                "asyncKeyword": null,
                                "typeParameters": null,
                                "arrowPatameterList": {
                                    "kind": 342,
                                    "parameters": [
                                        {
                                            "kind": 134299649,
                                            "text": "async",
                                            "rawText": "async",
                                            "flags": 96,
                                            "start": 45,
                                            "end": 50
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 0,
                                    "start": 45,
                                    "end": 51
                                },
                                "returnType": null,
                                "arrowToken": {
                                    "kind": 10,
                                    "flags": 64,
                                    "start": 51,
                                    "end": 54
                                },
                                "contents": {
                                    "kind": 129,
                                    "member": {
                                        "kind": 134299649,
                                        "text": "foo",
                                        "rawText": "foo",
                                        "flags": 96,
                                        "start": 54,
                                        "end": 58
                                    },
                                    "expression": {
                                        "kind": 134299649,
                                        "text": "bar",
                                        "rawText": "bar",
                                        "flags": 96,
                                        "start": 59,
                                        "end": 62
                                    },
                                    "flags": 96,
                                    "start": 54,
                                    "end": 62
                                },
                                "flags": 32,
                                "start": 44,
                                "end": 62
                            },
                            "flags": 32,
                            "start": 42,
                            "end": 63
                        },
                        "flags": 32,
                        "start": 35,
                        "end": 63
                    },
                    "flags": 536870944,
                    "start": 22,
                    "end": 64
                },
                "flags": 32,
                "start": 13,
                "end": 64
            },
            "flags": 16,
            "start": 13,
            "end": 64
        }
    ],
    "isModule": false,
    "source": "'use strict'; await => async.await[async / ((async) => foo.bar)]",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 64
}
```

### Printed

```javascript

'\'use strict\'';
await => async.await[async / ((async) => foo.bar)];

```

### Diagnostics

```javascript
✔ No errors
```
