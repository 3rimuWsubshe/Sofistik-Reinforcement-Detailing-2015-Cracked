# Auto-generated test cases ( Kataw )
- Regenerated: 2021-03-17
- From: kataw/test/__snapshot__/compiler/error-recovery/js/autogen.md
- Path: kataw/test/__snapshot__/compiler/error-recovery/js/gen/in_function_block
> :: test: in function block
> :: case: export * as
## Input

`````js
function x() {export * as}
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "function x() {export * as}",
    "filename": "",
    "statements": [
        {
            "kind": 264284,
            "name": {
                "kind": 131102,
                "text": "x",
                "rawText": "x",
                "flags": 0,
                "symbol": null,
                "transformFlags": 1025,
                "start": 8,
                "end": 10
            },
            "formalParameters": {
                "kind": 90,
                "formalParameterList": [],
                "trailingComma": false,
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 11,
                "end": 12
            },
            "type": null,
            "contents": {
                "kind": 91,
                "functionStatementList": {
                    "kind": 94,
                    "statements": [
                        {
                            "kind": 76,
                            "declaration": null,
                            "namedExports": null,
                            "exportFromClause": {
                                "kind": 78,
                                "moduleExportName": null,
                                "namedBinding": {
                                    "kind": 196712,
                                    "text": "",
                                    "rawText": "",
                                    "flags": 1,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 25,
                                    "end": 25
                                },
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 14,
                                "end": 25
                            },
                            "fromClause": {
                                "kind": 131322,
                                "text": "",
                                "flags": 3,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 25,
                                "end": 25
                            },
                            "isTypeOnly": false,
                            "flags": 1,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 14,
                            "end": 25
                        }
                    ],
                    "multiline": false,
                    "flags": 1,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 14,
                    "end": 25
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 12,
                "end": 26
            },
            "typeParameters": null,
            "flags": 0,
            "symbol": null,
            "transformFlags": 256,
            "start": 0,
            "end": 26
        }
    ],
    "isModule": false,
    "printable": true,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "message": "Identifier expected",
            "start": 25,
            "length": 0
        }
    ],
    "original": null,
    "symbol": null,
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 26
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```
