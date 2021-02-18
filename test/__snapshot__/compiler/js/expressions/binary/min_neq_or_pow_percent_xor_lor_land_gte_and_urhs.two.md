# Kataw parser test case

## Input

`````js
x0 - x1 != x2 | x3 ** x4 % x5 ^ x6 || x7 && x8 >= x9 & x10 >>> x
`````

## Output


### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "x0 - x1 != x2 | x3 ** x4 % x5 ^ x6 || x7 && x8 >= x9 & x10 >>> x",
    "filename": "",
    "scriptBody": {
        "kind": 197,
        "statements": [
            {
                "kind": 2097233,
                "expression": {
                    "kind": 65563,
                    "left": {
                        "kind": 65563,
                        "left": {
                            "kind": 65563,
                            "left": {
                                "kind": 65563,
                                "left": {
                                    "kind": 196712,
                                    "text": "x0",
                                    "rawText": "x0",
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "parent": null,
                                    "emitNode": null,
                                    "start": 0,
                                    "end": 2
                                },
                                "operator": "-",
                                "right": {
                                    "kind": 196712,
                                    "text": "x1",
                                    "rawText": "x1",
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "parent": null,
                                    "emitNode": null,
                                    "start": 4,
                                    "end": 7
                                },
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "parent": null,
                                "emitNode": null,
                                "start": 0,
                                "end": 7
                            },
                            "operator": "!=",
                            "right": {
                                "kind": 196712,
                                "text": "x2",
                                "rawText": "x2",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "parent": null,
                                "emitNode": null,
                                "start": 10,
                                "end": 13
                            },
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "parent": null,
                            "emitNode": null,
                            "start": 0,
                            "end": 13
                        },
                        "operator": "|",
                        "right": {
                            "kind": 65563,
                            "left": {
                                "kind": 65563,
                                "left": {
                                    "kind": 65563,
                                    "left": {
                                        "kind": 196712,
                                        "text": "x3",
                                        "rawText": "x3",
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "parent": null,
                                        "emitNode": null,
                                        "start": 15,
                                        "end": 18
                                    },
                                    "operator": "**",
                                    "right": {
                                        "kind": 196712,
                                        "text": "x4",
                                        "rawText": "x4",
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "parent": null,
                                        "emitNode": null,
                                        "start": 21,
                                        "end": 24
                                    },
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 2,
                                    "parent": null,
                                    "emitNode": null,
                                    "start": 18,
                                    "end": 24
                                },
                                "operator": "%",
                                "right": {
                                    "kind": 196712,
                                    "text": "x5",
                                    "rawText": "x5",
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "parent": null,
                                    "emitNode": null,
                                    "start": 26,
                                    "end": 29
                                },
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "parent": null,
                                "emitNode": null,
                                "start": 18,
                                "end": 29
                            },
                            "operator": "^",
                            "right": {
                                "kind": 196712,
                                "text": "x6",
                                "rawText": "x6",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "parent": null,
                                "emitNode": null,
                                "start": 31,
                                "end": 34
                            },
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "parent": null,
                            "emitNode": null,
                            "start": 18,
                            "end": 34
                        },
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 0,
                        "parent": null,
                        "emitNode": null,
                        "start": 0,
                        "end": 34
                    },
                    "operator": "||",
                    "right": {
                        "kind": 65563,
                        "left": {
                            "kind": 196712,
                            "text": "x7",
                            "rawText": "x7",
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "parent": null,
                            "emitNode": null,
                            "start": 37,
                            "end": 40
                        },
                        "operator": "&&",
                        "right": {
                            "kind": 65563,
                            "left": {
                                "kind": 65563,
                                "left": {
                                    "kind": 196712,
                                    "text": "x8",
                                    "rawText": "x8",
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "parent": null,
                                    "emitNode": null,
                                    "start": 43,
                                    "end": 46
                                },
                                "operator": ">=",
                                "right": {
                                    "kind": 196712,
                                    "text": "x9",
                                    "rawText": "x9",
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "parent": null,
                                    "emitNode": null,
                                    "start": 49,
                                    "end": 52
                                },
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "parent": null,
                                "emitNode": null,
                                "start": 46,
                                "end": 52
                            },
                            "operator": "&",
                            "right": {
                                "kind": 65563,
                                "left": {
                                    "kind": 196712,
                                    "text": "x10",
                                    "rawText": "x10",
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "parent": null,
                                    "emitNode": null,
                                    "start": 54,
                                    "end": 58
                                },
                                "operator": ">>>",
                                "right": {
                                    "kind": 196712,
                                    "text": "x",
                                    "rawText": "x",
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "parent": null,
                                    "emitNode": null,
                                    "start": 62,
                                    "end": 64
                                },
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "parent": null,
                                "emitNode": null,
                                "start": 58,
                                "end": 64
                            },
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "parent": null,
                            "emitNode": null,
                            "start": 46,
                            "end": 64
                        },
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 0,
                        "parent": null,
                        "emitNode": null,
                        "start": 40,
                        "end": 64
                    },
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "parent": null,
                    "emitNode": null,
                    "start": 0,
                    "end": 64
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "parent": null,
                "emitNode": null,
                "start": 0,
                "end": 64
            }
        ],
        "transformFlags": 0,
        "flags": 0,
        "intersects": false,
        "parent": null,
        "emitNode": null,
        "start": 0,
        "end": 64
    },
    "jsx": false,
    "printable": true,
    "diagnostics": [],
    "parent": null,
    "emitNode": null,
    "incremental": false,
    "flags": 0,
    "intersects": false,
    "transformFlags": 0,
    "start": 0,
    "end": 64
}
```

### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics


```javascript

```
