# Auto-generated test cases ( Kataw )
- Regenerated: 2021-03-14
- From: kataw/test/__snapshot__/compiler/error-recovery/types/autogen.md
- Path: kataw/test/__snapshot__/compiler/error-recovery/types/gen/stand-alone
> :: test: stand-alone
> :: case: function*foo(a = yield) {
## Input

`````js
[ function*foo(a = yield) { ]
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "[ function*foo(a = yield) { ]",
    "filename": "",
    "statements": [
        {
            "kind": 2097233,
            "expression": {
                "kind": 98822,
                "elementList": {
                    "kind": 65605,
                    "elements": [
                        {
                            "kind": 8915041,
                            "name": {
                                "kind": 131102,
                                "text": "foo",
                                "rawText": "foo",
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 1025,
                                "start": 11,
                                "end": 14
                            },
                            "formalParameters": {
                                "kind": 90,
                                "formalParameterList": [
                                    {
                                        "kind": 16473,
                                        "ellipsis": false,
                                        "binding": {
                                            "kind": 131102,
                                            "text": "a",
                                            "rawText": "a",
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 1025,
                                            "start": 15,
                                            "end": 16
                                        },
                                        "isOptional": false,
                                        "type": null,
                                        "initializer": {
                                            "kind": 196712,
                                            "text": "yield",
                                            "rawText": "yield",
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 18,
                                            "end": 24
                                        },
                                        "decorators": null,
                                        "accessModifier": null,
                                        "isReadOnly": false,
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 1,
                                        "start": 15,
                                        "end": 24
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 15,
                                "end": 25
                            },
                            "contents": {
                                "kind": 91,
                                "functionStatementList": {
                                    "kind": 94,
                                    "statements": [],
                                    "multiline": false,
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 27,
                                    "end": 27
                                },
                                "flags": 1,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 25,
                                "end": 27
                            },
                            "typeParameters": null,
                            "type": null,
                            "flags": 1,
                            "symbol": null,
                            "transformFlags": 128,
                            "start": 1,
                            "end": 27
                        }
                    ],
                    "trailingComma": false,
                    "multiline": false,
                    "flags": 1,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 1,
                    "end": 27
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 0,
                "end": 29
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 0,
            "end": 29
        }
    ],
    "isModule": false,
    "printable": true,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "message": "'}' expected.",
            "start": 28,
            "length": 0
        }
    ],
    "original": null,
    "symbol": null,
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 29
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```
