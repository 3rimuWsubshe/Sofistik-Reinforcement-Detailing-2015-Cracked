# Kataw parser test case

## Options

`````js
{ jsx: true, disableWebCompat: true, next: true }
`````

## Input

`````js
class C {
  static {
    x: while (false) {
      break y;
    }
  }
}
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
                "flags": 0,
                "start": 0,
                "end": 5
            },
            "name": {
                "kind": 134299649,
                "text": "C",
                "rawText": "C",
                "flags": 96,
                "start": 5,
                "end": 7
            },
            "typeParameters": null,
            "tail": {
                "kind": 277,
                "classHeritage": null,
                "body": {
                    "kind": 262,
                    "elements": [
                        {
                            "kind": 263,
                            "decorators": null,
                            "declaredKeyword": null,
                            "staticKeyword": null,
                            "block": {
                                "kind": 124,
                                "block": {
                                    "kind": 249,
                                    "statements": [
                                        {
                                            "kind": 163,
                                            "label": {
                                                "kind": 134299649,
                                                "text": "x",
                                                "rawText": "x",
                                                "flags": 96,
                                                "start": 20,
                                                "end": 26
                                            },
                                            "labels": [
                                                {
                                                    "kind": 256,
                                                    "label": "x",
                                                    "iterationStatement": false,
                                                    "flags": 17,
                                                    "start": 20,
                                                    "end": 26
                                                }
                                            ],
                                            "colonToken": {
                                                "kind": 21,
                                                "flags": 0,
                                                "start": 26,
                                                "end": 27
                                            },
                                            "statement": {
                                                "kind": 154,
                                                "whileKeyword": {
                                                    "kind": 37757028,
                                                    "flags": 0,
                                                    "start": 27,
                                                    "end": 33
                                                },
                                                "expression": {
                                                    "kind": 134,
                                                    "text": false,
                                                    "flags": 96,
                                                    "start": 35,
                                                    "end": 40
                                                },
                                                "statement": {
                                                    "kind": 124,
                                                    "block": {
                                                        "kind": 249,
                                                        "statements": [
                                                            {
                                                                "kind": 150,
                                                                "breakKeyword": {
                                                                    "kind": 37757005,
                                                                    "flags": 1,
                                                                    "start": 43,
                                                                    "end": 55
                                                                },
                                                                "label": {
                                                                    "kind": 134299649,
                                                                    "text": "y",
                                                                    "rawText": "y",
                                                                    "flags": 96,
                                                                    "start": 55,
                                                                    "end": 57
                                                                },
                                                                "flags": 16,
                                                                "start": 43,
                                                                "end": 58
                                                            }
                                                        ],
                                                        "flags": 17,
                                                        "start": 43,
                                                        "end": 58
                                                    },
                                                    "flags": 16,
                                                    "start": 41,
                                                    "end": 64
                                                },
                                                "flags": 16,
                                                "start": 27,
                                                "end": 64
                                            },
                                            "flags": 17,
                                            "start": 20,
                                            "end": 64
                                        }
                                    ],
                                    "flags": 17,
                                    "start": 20,
                                    "end": 64
                                },
                                "flags": 16,
                                "start": 9,
                                "end": 68
                            },
                            "flags": 32,
                            "start": 9,
                            "end": 68
                        }
                    ],
                    "flags": 32,
                    "start": 9,
                    "end": 68
                },
                "flags": 32,
                "start": 7,
                "end": 70
            },
            "flags": 16,
            "start": 0,
            "end": 70
        }
    ],
    "isModule": false,
    "source": "class C {\n  static {\n    x: while (false) {\n      break y;\n    }\n  }\n}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 70
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Missing label - start: 57, end: 58

```
