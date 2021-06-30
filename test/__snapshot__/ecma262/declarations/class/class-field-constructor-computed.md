# Kataw parser test case

## Input

`````js
class Foo { ['constructor'] }

class Foo { ['constructor'] = 1 }

class Foo { static ['constructor'] }

class Foo { static ['constructor'] = 1 }
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
                    "kind": 303,
                    "elements": [
                        {
                            "kind": 280,
                            "decorators": null,
                            "declaredToken": null,
                            "staticKeyword": null,
                            "asyncKeyword": null,
                            "key": {
                                "kind": 194,
                                "expression": {
                                    "kind": 201392131,
                                    "text": "constructor",
                                    "rawText": "'constructor'",
                                    "flags": 4194400,
                                    "start": 13,
                                    "end": 26
                                },
                                "flags": 32,
                                "start": 11,
                                "end": 27
                            },
                            "optionalToken": null,
                            "type": null,
                            "initializer": null,
                            "flags": 32,
                            "start": 11,
                            "end": 27
                        }
                    ],
                    "flags": 32,
                    "start": 11,
                    "end": 27
                },
                "flags": 9,
                "start": 32,
                "end": 29
            },
            "flags": 16,
            "start": 0,
            "end": 29
        },
        {
            "kind": 178,
            "declareKeyword": null,
            "decorators": null,
            "classKeyword": {
                "kind": 37822544,
                "flags": 81,
                "start": 29,
                "end": 36
            },
            "name": {
                "kind": 134299649,
                "text": "Foo",
                "rawText": "Foo",
                "flags": 96,
                "start": 36,
                "end": 40
            },
            "typeParameters": null,
            "tail": {
                "kind": 277,
                "classHeritage": null,
                "body": {
                    "kind": 303,
                    "elements": [
                        {
                            "kind": 280,
                            "decorators": null,
                            "declaredToken": null,
                            "staticKeyword": null,
                            "asyncKeyword": null,
                            "key": {
                                "kind": 194,
                                "expression": {
                                    "kind": 201392131,
                                    "text": "constructor",
                                    "rawText": "'constructor'",
                                    "flags": 4194400,
                                    "start": 44,
                                    "end": 57
                                },
                                "flags": 32,
                                "start": 42,
                                "end": 58
                            },
                            "optionalToken": null,
                            "type": null,
                            "initializer": {
                                "kind": 201392130,
                                "text": 1,
                                "rawText": "1",
                                "flags": 96,
                                "start": 60,
                                "end": 62
                            },
                            "flags": 32,
                            "start": 42,
                            "end": 62
                        }
                    ],
                    "flags": 32,
                    "start": 42,
                    "end": 62
                },
                "flags": 40,
                "start": 32,
                "end": 64
            },
            "flags": 17,
            "start": 29,
            "end": 64
        },
        {
            "kind": 178,
            "declareKeyword": null,
            "decorators": null,
            "classKeyword": {
                "kind": 37822544,
                "flags": 81,
                "start": 64,
                "end": 71
            },
            "name": {
                "kind": 134299649,
                "text": "Foo",
                "rawText": "Foo",
                "flags": 96,
                "start": 71,
                "end": 75
            },
            "typeParameters": null,
            "tail": {
                "kind": 277,
                "classHeritage": null,
                "body": {
                    "kind": 303,
                    "elements": [
                        {
                            "kind": 280,
                            "decorators": null,
                            "declaredToken": null,
                            "staticKeyword": {
                                "kind": 8388716,
                                "flags": 64,
                                "start": 77,
                                "end": 84
                            },
                            "asyncKeyword": null,
                            "key": {
                                "kind": 194,
                                "expression": {
                                    "kind": 201392131,
                                    "text": "constructor",
                                    "rawText": "'constructor'",
                                    "flags": 4194400,
                                    "start": 86,
                                    "end": 99
                                },
                                "flags": 32,
                                "start": 84,
                                "end": 100
                            },
                            "optionalToken": null,
                            "type": null,
                            "initializer": null,
                            "flags": 32,
                            "start": 84,
                            "end": 100
                        }
                    ],
                    "flags": 32,
                    "start": 77,
                    "end": 100
                },
                "flags": 75,
                "start": 32,
                "end": 102
            },
            "flags": 17,
            "start": 64,
            "end": 102
        },
        {
            "kind": 178,
            "declareKeyword": null,
            "decorators": null,
            "classKeyword": {
                "kind": 37822544,
                "flags": 81,
                "start": 102,
                "end": 109
            },
            "name": {
                "kind": 134299649,
                "text": "Foo",
                "rawText": "Foo",
                "flags": 96,
                "start": 109,
                "end": 113
            },
            "typeParameters": null,
            "tail": {
                "kind": 277,
                "classHeritage": null,
                "body": {
                    "kind": 303,
                    "elements": [
                        {
                            "kind": 280,
                            "decorators": null,
                            "declaredToken": null,
                            "staticKeyword": {
                                "kind": 8388716,
                                "flags": 64,
                                "start": 115,
                                "end": 122
                            },
                            "asyncKeyword": null,
                            "key": {
                                "kind": 194,
                                "expression": {
                                    "kind": 201392131,
                                    "text": "constructor",
                                    "rawText": "'constructor'",
                                    "flags": 4194400,
                                    "start": 124,
                                    "end": 137
                                },
                                "flags": 32,
                                "start": 122,
                                "end": 138
                            },
                            "optionalToken": null,
                            "type": null,
                            "initializer": {
                                "kind": 201392130,
                                "text": 1,
                                "rawText": "1",
                                "flags": 96,
                                "start": 140,
                                "end": 142
                            },
                            "flags": 32,
                            "start": 122,
                            "end": 142
                        }
                    ],
                    "flags": 32,
                    "start": 115,
                    "end": 142
                },
                "flags": 113,
                "start": 32,
                "end": 144
            },
            "flags": 17,
            "start": 102,
            "end": 144
        }
    ],
    "isModule": false,
    "source": "class Foo { ['constructor'] }\n\nclass Foo { ['constructor'] = 1 }\n\nclass Foo { static ['constructor'] }\n\nclass Foo { static ['constructor'] = 1 }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 144
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Duplicate identifier - start: 36, end: 40
✖ Duplicate identifier - start: 71, end: 75
✖ Duplicate identifier - start: 109, end: 113

```
