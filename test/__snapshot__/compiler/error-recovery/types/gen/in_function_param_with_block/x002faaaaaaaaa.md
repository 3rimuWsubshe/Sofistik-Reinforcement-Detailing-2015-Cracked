# Auto-generated test cases ( Kataw )
- Regenerated: 2021-03-14
- From: kataw/test/__snapshot__/compiler/error-recovery/types/autogen.md
- Path: kataw/test/__snapshot__/compiler/error-recovery/types/gen/in_function_param_with_block
> :: test: in function param with block
> :: case: /aaaaaaaaa
## Input

`````js
function ( /aaaaaaaaa ) {/aaaaaaaaa}
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "function ( /aaaaaaaaa ) {/aaaaaaaaa}",
    "filename": "",
    "statements": [
        {
            "kind": 264284,
            "name": {
                "kind": 131102,
                "text": "",
                "rawText": "",
                "flags": 1,
                "symbol": null,
                "transformFlags": 1025,
                "start": 8,
                "end": 8
            },
            "formalParameters": {
                "kind": 90,
                "formalParameterList": [],
                "trailingComma": false,
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 10,
                "end": 12
            },
            "type": null,
            "contents": {
                "kind": 91,
                "functionStatementList": {
                    "kind": 94,
                    "statements": [
                        {
                            "kind": 2097233,
                            "expression": {
                                "kind": 196712,
                                "text": "aaaaaaaaa",
                                "rawText": "aaaaaaaaa",
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 12,
                                "end": 21
                            },
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 12,
                            "end": 21
                        }
                    ],
                    "multiline": false,
                    "flags": 1,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 12,
                    "end": 21
                },
                "flags": 1,
                "symbol": null,
                "transformFlags": 0,
                "start": 10,
                "end": 21
            },
            "typeParameters": null,
            "flags": 1,
            "symbol": null,
            "transformFlags": 256,
            "start": 0,
            "end": 21
        },
        {
            "kind": 2099237,
            "block": {
                "kind": 2084,
                "statements": [
                    {
                        "kind": 2097233,
                        "expression": {
                            "kind": 4260544,
                            "text": "/aaaaaaaaa}",
                            "flags": 1048576,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 25,
                            "end": 36
                        },
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 25,
                        "end": 36
                    }
                ],
                "multiline": false,
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 25,
                "end": 36
            },
            "flags": 1,
            "symbol": null,
            "transformFlags": 0,
            "start": 23,
            "end": 36
        }
    ],
    "isModule": false,
    "printable": true,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "message": "Identifier expected",
            "start": 9,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "')' expected.",
            "start": 11,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "';' expected.",
            "start": 22,
            "length": 0
        },
        {
            "kind": 2,
            "source": 0,
            "message": "Unterminated regular expression literal",
            "start": 36,
            "length": 1
        },
        {
            "kind": 2,
            "source": 2,
            "message": "'}' expected.",
            "start": 25,
            "length": 0
        }
    ],
    "original": null,
    "symbol": null,
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 36
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```
