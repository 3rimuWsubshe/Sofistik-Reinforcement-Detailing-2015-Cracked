# Auto-generated test cases ( Kataw )
- Regenerated: 2021-03-17
- From: kataw/test/__snapshot__/compiler/error-recovery/js/autogen.md
- Path: kataw/test/__snapshot__/compiler/error-recovery/js/gen/in_arrow_body
> :: test: in arrow body
> :: case: function x ( = y) {}
## Input

`````js
([ function x ( = y) {} ]) => {x = {function x ( = y) {}}}
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "([ function x ( = y) {} ]) => {x = {function x ( = y) {}}}",
    "filename": "",
    "statements": [
        {
            "kind": 2097233,
            "expression": {
                "kind": 66224,
                "expression": {
                    "kind": 98822,
                    "elementList": {
                        "kind": 65605,
                        "elements": [
                            {
                                "kind": 65550,
                                "left": {
                                    "kind": 8456285,
                                    "name": {
                                        "kind": 131102,
                                        "text": "x",
                                        "rawText": "x",
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 1025,
                                        "start": 11,
                                        "end": 13
                                    },
                                    "formalParameters": {
                                        "kind": 90,
                                        "formalParameterList": [],
                                        "trailingComma": false,
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 15,
                                        "end": 17
                                    },
                                    "contents": {
                                        "kind": 91,
                                        "functionStatementList": {
                                            "kind": 94,
                                            "statements": [],
                                            "multiline": false,
                                            "flags": 1,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 15,
                                            "end": 15
                                        },
                                        "flags": 1,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 15,
                                        "end": 15
                                    },
                                    "typeParameters": null,
                                    "type": null,
                                    "flags": 1,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 2,
                                    "end": 15
                                },
                                "operator": "=",
                                "right": {
                                    "kind": 196712,
                                    "text": "y",
                                    "rawText": "y",
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 17,
                                    "end": 19
                                },
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 2,
                                "end": 19
                            }
                        ],
                        "trailingComma": false,
                        "multiline": false,
                        "flags": 1,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 2,
                        "end": 19
                    },
                    "flags": 1,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 1,
                    "end": 19
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 0,
                "end": 20
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 0,
            "end": 20
        },
        {
            "kind": 2099237,
            "block": {
                "kind": 2084,
                "statements": [],
                "multiline": false,
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 22,
                "end": 22
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 20,
            "end": 23
        },
        {
            "kind": 2099237,
            "block": {
                "kind": 2084,
                "statements": [
                    {
                        "kind": 2097233,
                        "expression": {
                            "kind": 65550,
                            "left": {
                                "kind": 196712,
                                "text": "x",
                                "rawText": "x",
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 31,
                                "end": 32
                            },
                            "operator": "=",
                            "right": {
                                "kind": 98984,
                                "propertyList": {
                                    "kind": 65722,
                                    "properties": [
                                        {
                                            "kind": 196711,
                                            "text": "function",
                                            "rawText": "function",
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 36,
                                            "end": 44
                                        },
                                        {
                                            "kind": 16844946,
                                            "name": {
                                                "kind": 196711,
                                                "text": "x",
                                                "rawText": "x",
                                                "flags": 1,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 44,
                                                "end": 46
                                            },
                                            "formalParameters": {
                                                "kind": 90,
                                                "formalParameterList": [],
                                                "trailingComma": false,
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 48,
                                                "end": 50
                                            },
                                            "isSetter": false,
                                            "isGetter": false,
                                            "contents": {
                                                "kind": 91,
                                                "functionStatementList": {
                                                    "kind": 94,
                                                    "statements": [
                                                        {
                                                            "kind": 2097233,
                                                            "expression": {
                                                                "kind": 196712,
                                                                "text": "y",
                                                                "rawText": "y",
                                                                "flags": 0,
                                                                "symbol": null,
                                                                "transformFlags": 0,
                                                                "start": 50,
                                                                "end": 52
                                                            },
                                                            "flags": 0,
                                                            "symbol": null,
                                                            "transformFlags": 0,
                                                            "start": 50,
                                                            "end": 52
                                                        }
                                                    ],
                                                    "multiline": false,
                                                    "flags": 1,
                                                    "symbol": null,
                                                    "transformFlags": 0,
                                                    "start": 50,
                                                    "end": 52
                                                },
                                                "flags": 1,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 48,
                                                "end": 52
                                            },
                                            "decorators": null,
                                            "type": null,
                                            "accessModifier": null,
                                            "typeParameters": null,
                                            "flags": 1,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 46,
                                            "end": 52
                                        }
                                    ],
                                    "trailingComma": false,
                                    "multiline": false,
                                    "flags": 1,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 36,
                                    "end": 52
                                },
                                "flags": 1,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 34,
                                "end": 52
                            },
                            "flags": 1,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 31,
                            "end": 52
                        },
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 31,
                        "end": 52
                    }
                ],
                "multiline": false,
                "flags": 1,
                "symbol": null,
                "transformFlags": 0,
                "start": 31,
                "end": 52
            },
            "flags": 1,
            "symbol": null,
            "transformFlags": 0,
            "start": 29,
            "end": 52
        },
        {
            "kind": 2099237,
            "block": {
                "kind": 2084,
                "statements": [],
                "multiline": false,
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 55,
                "end": 55
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 53,
            "end": 56
        }
    ],
    "isModule": false,
    "printable": true,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "message": "')' expected.",
            "start": 16,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "',' expected.",
            "start": 19,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "';' expected.",
            "start": 21,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "Declaration or statement expected",
            "start": 24,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "Declaration or statement expected",
            "start": 25,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "Declaration or statement expected",
            "start": 27,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "',' expected.",
            "start": 45,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "')' expected.",
            "start": 49,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "';' expected.",
            "start": 52,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "Declaration or statement expected",
            "start": 56,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "Declaration or statement expected",
            "start": 57,
            "length": 0
        }
    ],
    "original": null,
    "symbol": null,
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 58
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```
