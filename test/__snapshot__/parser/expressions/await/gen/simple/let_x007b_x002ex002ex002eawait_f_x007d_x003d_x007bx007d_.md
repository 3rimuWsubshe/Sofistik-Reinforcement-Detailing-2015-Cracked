# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: simple
> :: case: let { ...await f } = {};
## Input

`````js
let { ...await f } = {};
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 162,
            "lexicalKeyword": {
                "kind": 41951307,
                "flags": 80,
                "start": 0,
                "end": 3
            },
            "binding": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 212,
                            "propertyList": {
                                "kind": 213,
                                "properties": [
                                    {
                                        "kind": 222,
                                        "ellipsisToken": {
                                            "kind": 524302,
                                            "flags": 64,
                                            "start": 5,
                                            "end": 9
                                        },
                                        "left": {
                                            "kind": 134299649,
                                            "text": "await",
                                            "rawText": "await",
                                            "flags": 96,
                                            "start": 5,
                                            "end": 14
                                        },
                                        "right": null,
                                        "flags": 32,
                                        "start": 5,
                                        "end": 14
                                    },
                                    {
                                        "kind": 222,
                                        "ellipsisToken": null,
                                        "left": {
                                            "kind": 134299649,
                                            "text": "f",
                                            "rawText": "f",
                                            "flags": 96,
                                            "start": 14,
                                            "end": 16
                                        },
                                        "right": null,
                                        "flags": 32,
                                        "start": 14,
                                        "end": 16
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 5,
                                "end": 16
                            },
                            "flags": 32,
                            "start": 3,
                            "end": 18
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": {
                            "kind": 220,
                            "propertyList": {
                                "kind": 218,
                                "properties": [],
                                "trailingComma": false,
                                "flags": 16,
                                "start": 22,
                                "end": 22
                            },
                            "flags": 32,
                            "start": 20,
                            "end": 23
                        },
                        "flags": 16,
                        "start": 3,
                        "end": 23
                    }
                ],
                "flags": 33554448,
                "start": 3,
                "end": 23
            },
            "flags": 33554448,
            "start": 0,
            "end": 24
        }
    ],
    "isModule": false,
    "source": "let { ...await f } = {};",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 24
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ ',' expected - start: 14, end: 16

```
