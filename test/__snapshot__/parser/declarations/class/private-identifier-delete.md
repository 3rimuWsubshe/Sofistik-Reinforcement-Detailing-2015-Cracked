# Kataw parser test case

## Input

`````js
class Foo { #foo; foo() { delete this.#foo } }
`````

## Output

### CST

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
                "flags": 80,
                "start": 0,
                "end": 5
            },
            "name": {
                "kind": 134299649,
                "text": "Foo",
                "rawText": "Foo",
                "flags": 96,
                "start": 5,
                "end": 9
            },
            "typeParameters": null,
            "tail": {
                "kind": 277,
                "classHeritage": null,
                "body": {
                    "kind": 262,
                    "elements": [
                        {
                            "kind": 280,
                            "decorators": null,
                            "declaredToken": null,
                            "staticToken": null,
                            "asyncKeyword": null,
                            "key": {
                                "kind": 67174651,
                                "text": "#foo",
                                "flags": 96,
                                "start": 11,
                                "end": 16
                            },
                            "optionalToken": null,
                            "type": null,
                            "initializer": null,
                            "flags": 32,
                            "start": 11,
                            "end": 16
                        },
                        {
                            "kind": 281,
                            "flags": 96,
                            "start": 16,
                            "end": 17
                        },
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
                                    "text": "foo",
                                    "rawText": "foo",
                                    "flags": 96,
                                    "start": 17,
                                    "end": 21
                                },
                                "typeParameters": null,
                                "formalParameters": {
                                    "kind": 214,
                                    "formalParameterList": [],
                                    "trailingComma": false,
                                    "flags": 0,
                                    "start": 22,
                                    "end": 23
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
                                                    "kind": 126,
                                                    "operandToken": {
                                                        "kind": 4259886,
                                                        "flags": 64,
                                                        "start": 25,
                                                        "end": 32
                                                    },
                                                    "operand": {
                                                        "kind": 129,
                                                        "member": {
                                                            "kind": 4276321,
                                                            "flags": 96,
                                                            "start": 32,
                                                            "end": 37
                                                        },
                                                        "expression": {
                                                            "kind": 67174651,
                                                            "text": "#foo",
                                                            "flags": 96,
                                                            "start": 38,
                                                            "end": 42
                                                        },
                                                        "flags": 536870944,
                                                        "start": 32,
                                                        "end": 42
                                                    },
                                                    "flags": 32,
                                                    "start": 25,
                                                    "end": 42
                                                },
                                                "flags": 16,
                                                "start": 25,
                                                "end": 42
                                            }
                                        ],
                                        "flags": 32,
                                        "start": 25,
                                        "end": 42
                                    },
                                    "flags": 32,
                                    "start": 23,
                                    "end": 44
                                },
                                "flags": 0,
                                "start": 21,
                                "end": 44
                            },
                            "flags": 0,
                            "start": 17,
                            "end": 44
                        }
                    ],
                    "flags": 32,
                    "start": 11,
                    "end": 44
                },
                "flags": 9,
                "start": 32,
                "end": 46
            },
            "flags": 16,
            "start": 0,
            "end": 46
        }
    ],
    "isModule": false,
    "source": "class Foo { #foo; foo() { delete this.#foo } }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 46
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Prohibit delete of private class elements - start: 42, end: 44

```
