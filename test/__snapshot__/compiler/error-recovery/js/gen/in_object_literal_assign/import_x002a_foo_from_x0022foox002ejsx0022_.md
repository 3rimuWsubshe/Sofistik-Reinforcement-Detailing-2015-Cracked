# Auto-generated test cases ( Kataw )
- Regenerated: 2021-03-17
- From: kataw/test/__snapshot__/compiler/error-recovery/js/autogen.md
- Path: kataw/test/__snapshot__/compiler/error-recovery/js/gen/in_object_literal_assign
> :: test: in object literal assign
> :: case: import * foo from "foo.js";;
## Input

`````js
x = { x = import * foo from "foo.js";;}
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "x = { x = import * foo from \"foo.js\";;}",
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
                    "kind": 98984,
                    "propertyList": {
                        "kind": 65722,
                        "properties": [
                            {
                                "kind": 65597,
                                "left": {
                                    "kind": 196712,
                                    "text": "x",
                                    "rawText": "x",
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 5,
                                    "end": 7
                                },
                                "isOptional": false,
                                "exclamation": false,
                                "right": {
                                    "kind": 66156,
                                    "typeArguments": null,
                                    "expression": {
                                        "kind": 65563,
                                        "left": {
                                            "kind": 131322,
                                            "text": "",
                                            "flags": 3,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 16,
                                            "end": 16
                                        },
                                        "operator": "*",
                                        "right": {
                                            "kind": 196712,
                                            "text": "foo",
                                            "rawText": "foo",
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 18,
                                            "end": 22
                                        },
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 16,
                                        "end": 22
                                    },
                                    "flags": 1,
                                    "symbol": null,
                                    "transformFlags": 262152,
                                    "start": 9,
                                    "end": 22
                                },
                                "accessModifier": null,
                                "flags": 1,
                                "symbol": null,
                                "transformFlags": 1,
                                "start": 5,
                                "end": 22
                            },
                            {
                                "kind": 196711,
                                "text": "from",
                                "rawText": "from",
                                "flags": 1,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 22,
                                "end": 27
                            },
                            {
                                "kind": 65721,
                                "left": {
                                    "kind": 4261583,
                                    "text": "foo.js",
                                    "rawText": "foo.js",
                                    "flags": 1,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 27,
                                    "end": 36
                                },
                                "right": {
                                    "kind": 131322,
                                    "text": "",
                                    "flags": 3,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 36,
                                    "end": 36
                                },
                                "accessModifier": null,
                                "decorators": null,
                                "flags": 1,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 27,
                                "end": 36
                            }
                        ],
                        "trailingComma": false,
                        "multiline": false,
                        "flags": 1,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 5,
                        "end": 36
                    },
                    "flags": 1,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 3,
                    "end": 36
                },
                "flags": 1,
                "symbol": null,
                "transformFlags": 0,
                "start": 0,
                "end": 36
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 0,
            "end": 37
        },
        {
            "kind": 6291526,
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 37,
            "end": 38
        }
    ],
    "isModule": false,
    "printable": true,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "message": "'(' expected.",
            "start": 17,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "')' expected.",
            "start": 23,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "',' expected.",
            "start": 28,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "':' expected.",
            "start": 36,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "Declaration or statement expected",
            "start": 38,
            "length": 0
        }
    ],
    "original": null,
    "symbol": null,
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 39
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```
