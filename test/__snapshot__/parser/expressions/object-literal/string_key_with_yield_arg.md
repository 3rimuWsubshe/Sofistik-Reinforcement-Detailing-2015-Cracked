# Kataw parser test case

## Input

`````js
s = {"foo": yield /x/}
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "s",
                    "rawText": "s",
                    "flags": 96,
                    "start": 0,
                    "end": 1
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 64,
                    "start": 1,
                    "end": 3
                },
                "right": {
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
                                    "kind": 198,
                                    "left": {
                                        "kind": 198,
                                        "left": {
                                            "kind": 134299649,
                                            "text": "yield",
                                            "rawText": "yield",
                                            "flags": 96,
                                            "start": 11,
                                            "end": 17
                                        },
                                        "operatorToken": {
                                            "kind": 35640,
                                            "flags": 64,
                                            "start": 17,
                                            "end": 19
                                        },
                                        "right": {
                                            "kind": 134299649,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 96,
                                            "start": 19,
                                            "end": 20
                                        },
                                        "flags": 32,
                                        "start": 5,
                                        "end": 20
                                    },
                                    "operatorToken": {
                                        "kind": 35640,
                                        "flags": 64,
                                        "start": 20,
                                        "end": 21
                                    },
                                    "right": {
                                        "kind": 16637,
                                        "text": "",
                                        "flags": 68,
                                        "start": 21,
                                        "end": 21
                                    },
                                    "flags": 32,
                                    "start": 5,
                                    "end": 21
                                },
                                "right": {
                                    "kind": 201392131,
                                    "text": "foo",
                                    "rawText": "foo",
                                    "flags": 96,
                                    "start": 5,
                                    "end": 10
                                },
                                "flags": 32,
                                "start": 5,
                                "end": 21
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "start": 5,
                        "end": 21
                    },
                    "flags": 32,
                    "start": 3,
                    "end": 22
                },
                "flags": 32,
                "start": 0,
                "end": 22
            },
            "flags": 16,
            "start": 0,
            "end": 22
        }
    ],
    "isModule": false,
    "source": "s = {\"foo\": yield /x/}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 22
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ Expression expected - start: 21, end: 22

```
