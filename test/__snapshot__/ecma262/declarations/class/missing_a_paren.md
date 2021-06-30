# Kataw parser test case

## Input

`````js
class A {"x"){}}
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
                "text": "A",
                "rawText": "A",
                "flags": 96,
                "start": 5,
                "end": 7
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
                                "kind": 201392131,
                                "text": "x",
                                "rawText": "\"x\"",
                                "flags": 96,
                                "start": 9,
                                "end": 12
                            },
                            "optionalToken": null,
                            "type": null,
                            "initializer": null,
                            "flags": 32,
                            "start": 9,
                            "end": 12
                        }
                    ],
                    "flags": 32,
                    "start": 9,
                    "end": 12
                },
                "flags": 7,
                "start": 32,
                "end": 12
            },
            "flags": 16,
            "start": 0,
            "end": 12
        },
        {
            "kind": 124,
            "block": {
                "kind": 249,
                "statements": [],
                "flags": 16,
                "start": 14,
                "end": 14
            },
            "flags": 16,
            "start": 13,
            "end": 15
        }
    ],
    "isModule": false,
    "source": "class A {\"x\"){}}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 16
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ The parser expected to find a '}' to match the '{' token here - start: 12, end: 13
✖ Declaration or statement expected - start: 15, end: 16

```
