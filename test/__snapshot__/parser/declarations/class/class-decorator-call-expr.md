# Kataw parser test case

## Input

`````js
@foo('bar')
class Foo {}
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
            "decorators": {
                "kind": 207,
                "decoratorList": [
                    {
                        "kind": 34611453,
                        "expression": {
                            "kind": 131,
                            "expression": {
                                "kind": 134299649,
                                "text": "foo",
                                "rawText": "foo",
                                "flags": 96,
                                "start": 1,
                                "end": 4
                            },
                            "argumentList": {
                                "kind": 256,
                                "elements": [
                                    {
                                        "kind": 201392131,
                                        "text": "bar",
                                        "rawText": "'bar'",
                                        "flags": 4194400,
                                        "start": 5,
                                        "end": 10
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 5,
                                "end": 10
                            },
                            "flags": 268435488,
                            "start": 1,
                            "end": 11
                        },
                        "flags": 1,
                        "start": 1,
                        "end": 11
                    }
                ],
                "flags": 32,
                "start": 1,
                "end": 11
            },
            "classKeyword": {
                "kind": 37822544,
                "flags": 1,
                "start": 11,
                "end": 17
            },
            "name": {
                "kind": 134299649,
                "text": "Foo",
                "rawText": "Foo",
                "flags": 96,
                "start": 17,
                "end": 21
            },
            "typeParameters": null,
            "tail": {
                "kind": 277,
                "classHeritage": null,
                "body": {
                    "kind": 262,
                    "elements": [],
                    "flags": 32,
                    "start": 23,
                    "end": 23
                },
                "flags": 21,
                "start": 32,
                "end": 24
            },
            "flags": 16,
            "start": 0,
            "end": 24
        }
    ],
    "isModule": false,
    "source": "@foo('bar')\nclass Foo {}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 24
}
```

### Printed

```javascript

@foo("'bar'")
class Foo {}
```

### Diagnostics

```javascript
✔ No errors
```
