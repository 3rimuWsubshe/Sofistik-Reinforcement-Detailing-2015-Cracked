# Auto-generated test cases ( Kataw )
- Regenerated: 2021-03-17
- From: kataw/test/__snapshot__/compiler/error-recovery/js/autogen.md
- Path: kataw/test/__snapshot__/compiler/error-recovery/js/gen/in_throw_stmt
> :: test: in throw stmt
> :: case: import { 123 } from "foo";
## Input

`````js
throw import { 123 } from "foo";
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "throw import { 123 } from \"foo\";",
    "filename": "",
    "statements": [
        {
            "kind": 2097373,
            "expression": {
                "kind": 66156,
                "typeArguments": null,
                "expression": {
                    "kind": 98984,
                    "propertyList": {
                        "kind": 65722,
                        "properties": [
                            {
                                "kind": 65721,
                                "left": {
                                    "kind": 4261540,
                                    "text": 123,
                                    "rawText": "123",
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 14,
                                    "end": 18
                                },
                                "right": {
                                    "kind": 131322,
                                    "text": "",
                                    "flags": 3,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 18,
                                    "end": 18
                                },
                                "accessModifier": null,
                                "decorators": null,
                                "flags": 1,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 14,
                                "end": 18
                            }
                        ],
                        "trailingComma": false,
                        "multiline": false,
                        "flags": 1,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 14,
                        "end": 18
                    },
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 12,
                    "end": 20
                },
                "flags": 1,
                "symbol": null,
                "transformFlags": 262152,
                "start": 5,
                "end": 20
            },
            "flags": 1,
            "symbol": null,
            "transformFlags": 0,
            "start": 0,
            "end": 20
        },
        {
            "kind": 2097233,
            "expression": {
                "kind": 196712,
                "text": "from",
                "rawText": "from",
                "flags": 1,
                "symbol": null,
                "transformFlags": 0,
                "start": 20,
                "end": 25
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 20,
            "end": 25
        },
        {
            "kind": 2097233,
            "expression": {
                "kind": 4261583,
                "text": "foo",
                "rawText": "foo",
                "flags": 1,
                "symbol": null,
                "transformFlags": 0,
                "start": 25,
                "end": 31
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 25,
            "end": 32
        }
    ],
    "isModule": false,
    "printable": true,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "message": "'(' expected.",
            "start": 13,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "':' expected.",
            "start": 19,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "')' expected.",
            "start": 21,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "';' expected.",
            "start": 26,
            "length": 0
        }
    ],
    "original": null,
    "symbol": null,
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 32
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```
