# Auto-generated test cases ( Kataw )
- Regenerated: 2021-03-14
- From: kataw/test/__snapshot__/compiler/error-recovery/types/autogen.md
- Path: kataw/test/__snapshot__/compiler/error-recovery/types/gen/in_lhs
> :: test: in lhs
> :: case: string[
## Input

`````js
 function (x:string[ = string[) {}
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": " function (x:string[ = string[) {}",
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
                "start": 9,
                "end": 9
            },
            "formalParameters": {
                "kind": 90,
                "formalParameterList": [
                    {
                        "kind": 16473,
                        "ellipsis": false,
                        "binding": {
                            "kind": 131102,
                            "text": "x",
                            "rawText": "x",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 1025,
                            "start": 11,
                            "end": 12
                        },
                        "isOptional": false,
                        "type": {
                            "kind": 8199,
                            "elementType": {
                                "kind": 4202702,
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 2097152,
                                "start": 13,
                                "end": 19
                            },
                            "flags": 1,
                            "symbol": null,
                            "transformFlags": 2097152,
                            "start": 13,
                            "end": 22
                        },
                        "initializer": {
                            "kind": 67174980,
                            "member": {
                                "kind": 196712,
                                "text": "string",
                                "rawText": "string",
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 22,
                                "end": 29
                            },
                            "expression": {
                                "kind": 131322,
                                "text": "",
                                "flags": 3,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 30,
                                "end": 30
                            },
                            "flags": 1,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 29,
                            "end": 30
                        },
                        "decorators": null,
                        "accessModifier": null,
                        "isReadOnly": false,
                        "flags": 1,
                        "symbol": null,
                        "transformFlags": 1,
                        "start": 11,
                        "end": 30
                    }
                ],
                "trailingComma": false,
                "flags": 1,
                "symbol": null,
                "transformFlags": 0,
                "start": 11,
                "end": 31
            },
            "type": null,
            "contents": {
                "kind": 91,
                "functionStatementList": {
                    "kind": 94,
                    "statements": [],
                    "multiline": false,
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 33,
                    "end": 33
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 31,
                "end": 34
            },
            "typeParameters": null,
            "flags": 0,
            "symbol": null,
            "transformFlags": 256,
            "start": 0,
            "end": 34
        }
    ],
    "isModule": false,
    "printable": true,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "message": "Identifier expected",
            "start": 10,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "']' expected.",
            "start": 21,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "Identifier expected",
            "start": 30,
            "length": 0
        }
    ],
    "original": null,
    "symbol": null,
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 34
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```
