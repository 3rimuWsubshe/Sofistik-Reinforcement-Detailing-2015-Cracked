# Auto-generated test cases ( Kataw )
- Regenerated: 2021-02-15
- From: kataw_dev\test\__snapshot__/compiler/js/statements/while/autogen.md
- Path: kataw_dev\test\__snapshot__\compiler\js\statements\while\gen\missing_parens_and_block
> :: test: missing parens and block
> :: case: function while
## Input

`````js
while while function while
`````

## Output


### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "while while function while",
    "filename": "",
    "scriptBody": {
        "kind": 197,
        "statements": [
            {
                "kind": 2097399,
                "expression": {
                    "kind": 131322,
                    "text": "",
                    "flags": 6,
                    "intersects": false,
                    "transformFlags": 0,
                    "parent": null,
                    "emitNode": null,
                    "start": 5,
                    "end": 5
                },
                "statement": {
                    "kind": 2097399,
                    "expression": {
                        "kind": 8456285,
                        "name": null,
                        "formalParameters": {
                            "kind": 90,
                            "formalParameterList": [],
                            "trailingComma": false,
                            "flags": 2,
                            "intersects": false,
                            "transformFlags": 0,
                            "parent": null,
                            "emitNode": null,
                            "start": 20,
                            "end": 20
                        },
                        "contents": {
                            "kind": 91,
                            "functionStatementList": {
                                "kind": 94,
                                "statements": [],
                                "multiline": false,
                                "flags": 2,
                                "intersects": false,
                                "transformFlags": 0,
                                "parent": null,
                                "emitNode": null,
                                "start": 20,
                                "end": 20
                            },
                            "flags": 2,
                            "intersects": false,
                            "transformFlags": 0,
                            "parent": null,
                            "emitNode": null,
                            "start": 20,
                            "end": 20
                        },
                        "typeParameters": null,
                        "type": null,
                        "flags": 2,
                        "intersects": false,
                        "transformFlags": 0,
                        "parent": null,
                        "emitNode": null,
                        "start": 11,
                        "end": 20
                    },
                    "statement": {
                        "kind": 2097399,
                        "expression": {
                            "kind": 131322,
                            "text": "",
                            "flags": 6,
                            "intersects": false,
                            "transformFlags": 0,
                            "parent": null,
                            "emitNode": null,
                            "start": 26,
                            "end": 26
                        },
                        "statement": {
                            "kind": 2097233,
                            "expression": {
                                "kind": 131322,
                                "text": "",
                                "flags": 6,
                                "intersects": false,
                                "transformFlags": 0,
                                "parent": null,
                                "emitNode": null,
                                "start": 26,
                                "end": 26
                            },
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "parent": null,
                            "emitNode": null,
                            "start": 26,
                            "end": 26
                        },
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 0,
                        "parent": null,
                        "emitNode": null,
                        "start": 20,
                        "end": 26
                    },
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "parent": null,
                    "emitNode": null,
                    "start": 5,
                    "end": 26
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "parent": null,
                "emitNode": null,
                "start": 0,
                "end": 26
            }
        ],
        "transformFlags": 0,
        "flags": 0,
        "intersects": false,
        "parent": null,
        "emitNode": null,
        "start": 0,
        "end": 26
    },
    "jsx": false,
    "printable": true,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "message": "'(' expected.",
            "start": 6,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "'(' expected.",
            "start": 12,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "'(' expected.",
            "start": 21,
            "length": 0
        }
    ],
    "parent": null,
    "emitNode": null,
    "incremental": false,
    "flags": 0,
    "intersects": false,
    "transformFlags": 0,
    "start": 0,
    "end": 26
}
```

### Printed


```javascript

while (undefined)
    while (function () { })
        while (undefined)
            undefined

```

### Diagnostics


```javascript
✔ No errors
```
