# Auto-generated test cases ( Kataw )
- Regenerated: 2021-03-17
- From: kataw/test/__snapshot__/compiler/error-recovery/js/autogen.md
- Path: kataw/test/__snapshot__/compiler/error-recovery/js/gen/in_double_assignment
> :: test: in double assignment
> :: case: for(var a,,,,,,,,,,,,,,,c in x) {}
## Input

`````js
x = y = x = {for(var a,,,,,,,,,,,,,,,c in x) {}}
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "x = y = x = {for(var a,,,,,,,,,,,,,,,c in x) {}}",
    "filename": "",
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
                    "start": 0,
                    "end": 1
                },
                "operator": "=",
                "right": {
                    "kind": 65550,
                    "left": {
                        "kind": 196712,
                        "text": "y",
                        "rawText": "y",
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 3,
                        "end": 5
                    },
                    "operator": "=",
                    "right": {
                        "kind": 65550,
                        "left": {
                            "kind": 196712,
                            "text": "x",
                            "rawText": "x",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 7,
                            "end": 9
                        },
                        "operator": "=",
                        "right": {
                            "kind": 98984,
                            "propertyList": {
                                "kind": 65722,
                                "properties": [
                                    {
                                        "kind": 16844946,
                                        "name": {
                                            "kind": 196711,
                                            "text": "for",
                                            "rawText": "for",
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 13,
                                            "end": 16
                                        },
                                        "formalParameters": {
                                            "kind": 90,
                                            "formalParameterList": [],
                                            "trailingComma": false,
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 17,
                                            "end": 20
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
                                                            "kind": 65590,
                                                            "expressions": [
                                                                {
                                                                    "kind": 196712,
                                                                    "text": "a",
                                                                    "rawText": "a",
                                                                    "flags": 0,
                                                                    "symbol": null,
                                                                    "transformFlags": 0,
                                                                    "start": 20,
                                                                    "end": 22
                                                                },
                                                                {
                                                                    "kind": 131322,
                                                                    "text": "",
                                                                    "flags": 3,
                                                                    "symbol": null,
                                                                    "transformFlags": 0,
                                                                    "start": 23,
                                                                    "end": 23
                                                                },
                                                                {
                                                                    "kind": 131322,
                                                                    "text": "",
                                                                    "flags": 3,
                                                                    "symbol": null,
                                                                    "transformFlags": 0,
                                                                    "start": 24,
                                                                    "end": 24
                                                                },
                                                                {
                                                                    "kind": 131322,
                                                                    "text": "",
                                                                    "flags": 3,
                                                                    "symbol": null,
                                                                    "transformFlags": 0,
                                                                    "start": 25,
                                                                    "end": 25
                                                                },
                                                                {
                                                                    "kind": 131322,
                                                                    "text": "",
                                                                    "flags": 3,
                                                                    "symbol": null,
                                                                    "transformFlags": 0,
                                                                    "start": 26,
                                                                    "end": 26
                                                                },
                                                                {
                                                                    "kind": 131322,
                                                                    "text": "",
                                                                    "flags": 3,
                                                                    "symbol": null,
                                                                    "transformFlags": 0,
                                                                    "start": 27,
                                                                    "end": 27
                                                                },
                                                                {
                                                                    "kind": 131322,
                                                                    "text": "",
                                                                    "flags": 3,
                                                                    "symbol": null,
                                                                    "transformFlags": 0,
                                                                    "start": 28,
                                                                    "end": 28
                                                                },
                                                                {
                                                                    "kind": 131322,
                                                                    "text": "",
                                                                    "flags": 3,
                                                                    "symbol": null,
                                                                    "transformFlags": 0,
                                                                    "start": 29,
                                                                    "end": 29
                                                                },
                                                                {
                                                                    "kind": 131322,
                                                                    "text": "",
                                                                    "flags": 3,
                                                                    "symbol": null,
                                                                    "transformFlags": 0,
                                                                    "start": 30,
                                                                    "end": 30
                                                                },
                                                                {
                                                                    "kind": 131322,
                                                                    "text": "",
                                                                    "flags": 3,
                                                                    "symbol": null,
                                                                    "transformFlags": 0,
                                                                    "start": 31,
                                                                    "end": 31
                                                                },
                                                                {
                                                                    "kind": 131322,
                                                                    "text": "",
                                                                    "flags": 3,
                                                                    "symbol": null,
                                                                    "transformFlags": 0,
                                                                    "start": 32,
                                                                    "end": 32
                                                                },
                                                                {
                                                                    "kind": 131322,
                                                                    "text": "",
                                                                    "flags": 3,
                                                                    "symbol": null,
                                                                    "transformFlags": 0,
                                                                    "start": 33,
                                                                    "end": 33
                                                                },
                                                                {
                                                                    "kind": 131322,
                                                                    "text": "",
                                                                    "flags": 3,
                                                                    "symbol": null,
                                                                    "transformFlags": 0,
                                                                    "start": 34,
                                                                    "end": 34
                                                                },
                                                                {
                                                                    "kind": 131322,
                                                                    "text": "",
                                                                    "flags": 3,
                                                                    "symbol": null,
                                                                    "transformFlags": 0,
                                                                    "start": 35,
                                                                    "end": 35
                                                                },
                                                                {
                                                                    "kind": 131322,
                                                                    "text": "",
                                                                    "flags": 3,
                                                                    "symbol": null,
                                                                    "transformFlags": 0,
                                                                    "start": 36,
                                                                    "end": 36
                                                                },
                                                                {
                                                                    "kind": 65563,
                                                                    "left": {
                                                                        "kind": 196712,
                                                                        "text": "c",
                                                                        "rawText": "c",
                                                                        "flags": 0,
                                                                        "symbol": null,
                                                                        "transformFlags": 0,
                                                                        "start": 37,
                                                                        "end": 38
                                                                    },
                                                                    "operator": "in",
                                                                    "right": {
                                                                        "kind": 196712,
                                                                        "text": "x",
                                                                        "rawText": "x",
                                                                        "flags": 0,
                                                                        "symbol": null,
                                                                        "transformFlags": 0,
                                                                        "start": 41,
                                                                        "end": 43
                                                                    },
                                                                    "flags": 0,
                                                                    "symbol": null,
                                                                    "transformFlags": 0,
                                                                    "start": 37,
                                                                    "end": 43
                                                                }
                                                            ],
                                                            "flags": 0,
                                                            "symbol": null,
                                                            "transformFlags": 0,
                                                            "start": 20,
                                                            "end": 43
                                                        },
                                                        "flags": 0,
                                                        "symbol": null,
                                                        "transformFlags": 0,
                                                        "start": 20,
                                                        "end": 43
                                                    }
                                                ],
                                                "multiline": false,
                                                "flags": 1,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 20,
                                                "end": 43
                                            },
                                            "flags": 1,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 17,
                                            "end": 43
                                        },
                                        "decorators": null,
                                        "type": null,
                                        "accessModifier": null,
                                        "typeParameters": null,
                                        "flags": 1,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 16,
                                        "end": 43
                                    }
                                ],
                                "trailingComma": false,
                                "multiline": false,
                                "flags": 1,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 13,
                                "end": 43
                            },
                            "flags": 1,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 11,
                            "end": 43
                        },
                        "flags": 1,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 7,
                        "end": 43
                    },
                    "flags": 1,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 3,
                    "end": 43
                },
                "flags": 1,
                "symbol": null,
                "transformFlags": 0,
                "start": 0,
                "end": 43
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 0,
            "end": 43
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
                "start": 46,
                "end": 46
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 44,
            "end": 47
        }
    ],
    "isModule": false,
    "printable": true,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "message": "')' expected.",
            "start": 17,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "Identifier expected",
            "start": 23,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "Identifier expected",
            "start": 24,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "Identifier expected",
            "start": 25,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "Identifier expected",
            "start": 26,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "Identifier expected",
            "start": 27,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "Identifier expected",
            "start": 28,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "Identifier expected",
            "start": 29,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "Identifier expected",
            "start": 30,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "Identifier expected",
            "start": 31,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "Identifier expected",
            "start": 32,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "Identifier expected",
            "start": 33,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "Identifier expected",
            "start": 34,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "Identifier expected",
            "start": 35,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "Identifier expected",
            "start": 36,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "';' expected.",
            "start": 43,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "Declaration or statement expected",
            "start": 47,
            "length": 0
        }
    ],
    "original": null,
    "symbol": null,
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 48
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```
