# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-06
- From: kataw8/test\__snapshot__/parser/miscellaneous/destructuring/positive-cases/autogen.md
- Path: kataw8/test\__snapshot__\parser\miscellaneous\destructuring\positive-cases\gen\parenthized_arrow_second_arg
> :: test: parenthized arrow second arg
> :: case: { __proto__: x, __proto__: y}
## Input

`````js
var f = (argument1,{ __proto__: x, __proto__: y}) => {};
`````
## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 155,
            "declareKeyword": null,
            "varKeyword": {
                "kind": 37757002,
                "flags": 80,
                "start": 0,
                "end": 3
            },
            "declarationList": {
                "kind": 156,
                "declarations": [
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 134299649,
                            "text": "f",
                            "rawText": "f",
                            "flags": 96,
                            "start": 3,
                            "end": 5
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": {
                            "kind": 271,
                            "arrowToken": {
                                "kind": 10,
                                "flags": 64,
                                "start": 49,
                                "end": 52
                            },
                            "typeParameters": null,
                            "parameters": [
                                {
                                    "kind": 134299649,
                                    "text": "argument1",
                                    "rawText": "argument1",
                                    "flags": 96,
                                    "start": 9,
                                    "end": 18
                                },
                                {
                                    "kind": 212,
                                    "propertyList": {
                                        "kind": 213,
                                        "properties": [
                                            {
                                                "kind": 204,
                                                "ellipsisToken": null,
                                                "key": {
                                                    "kind": 134299649,
                                                    "text": "__proto__",
                                                    "rawText": "__proto__",
                                                    "flags": 96,
                                                    "start": 20,
                                                    "end": 30
                                                },
                                                "value": {
                                                    "kind": 134299649,
                                                    "text": "x",
                                                    "rawText": "x",
                                                    "flags": 96,
                                                    "start": 31,
                                                    "end": 33
                                                },
                                                "initializer": null,
                                                "flags": 32,
                                                "start": 20,
                                                "end": 33
                                            },
                                            {
                                                "kind": 204,
                                                "ellipsisToken": null,
                                                "key": {
                                                    "kind": 134299649,
                                                    "text": "__proto__",
                                                    "rawText": "__proto__",
                                                    "flags": 96,
                                                    "start": 34,
                                                    "end": 44
                                                },
                                                "value": {
                                                    "kind": 134299649,
                                                    "text": "y",
                                                    "rawText": "y",
                                                    "flags": 96,
                                                    "start": 45,
                                                    "end": 47
                                                },
                                                "initializer": null,
                                                "flags": 32,
                                                "start": 34,
                                                "end": 47
                                            }
                                        ],
                                        "trailingComma": false,
                                        "flags": 32,
                                        "start": 20,
                                        "end": 47
                                    },
                                    "flags": 32,
                                    "start": 19,
                                    "end": 48
                                }
                            ],
                            "asyncKeyword": null,
                            "returnType": null,
                            "contents": {
                                "kind": 216,
                                "functionStatementList": {
                                    "kind": 217,
                                    "directives": [],
                                    "statements": [],
                                    "flags": 32,
                                    "start": 54,
                                    "end": 54
                                },
                                "flags": 32,
                                "start": 52,
                                "end": 55
                            },
                            "flags": 34,
                            "start": 7,
                            "end": 55
                        },
                        "flags": 16,
                        "start": 3,
                        "end": 55
                    }
                ],
                "flags": 16,
                "start": 3,
                "end": 55
            },
            "flags": 16,
            "start": 0,
            "end": 56
        }
    ],
    "isModule": false,
    "source": "var f = (argument1,{ __proto__: x, __proto__: y}) => {};",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 56
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ An object literal cannot have multiple properties with the name '__proto__' - start: 48, end: 49

```
