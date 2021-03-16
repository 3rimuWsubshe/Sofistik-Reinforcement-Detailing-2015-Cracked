# Auto-generated test cases ( Kataw )
- Regenerated: 2021-03-14
- From: kataw/test/__snapshot__/compiler/error-recovery/types/autogen.md
- Path: kataw/test/__snapshot__/compiler/error-recovery/types/gen/in_class_expr
> :: test: in class expr
> :: case: [1, true];
## Input

`````js
(class { field: [1, true]; })
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "(class { field: [1, true]; })",
    "filename": "",
    "statements": [
        {
            "kind": 2097233,
            "expression": {
                "kind": 66224,
                "expression": {
                    "kind": 66099,
                    "name": null,
                    "typeParameters": null,
                    "classHeritage": null,
                    "implementClauses": null,
                    "members": {
                        "kind": 50,
                        "elements": [
                            {
                                "kind": 16468,
                                "key": {
                                    "kind": 196711,
                                    "text": "field",
                                    "rawText": "field",
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 8,
                                    "end": 14
                                },
                                "isInKeyword": false,
                                "expression": null,
                                "isAbstract": false,
                                "isReadOnly": false,
                                "isOptional": false,
                                "exclamation": false,
                                "type": {
                                    "kind": 134226144,
                                    "elementTypes": [
                                        {
                                            "kind": 8355,
                                            "text": 1,
                                            "rawText": "1",
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 2097152,
                                            "start": 17,
                                            "end": 18
                                        },
                                        {
                                            "kind": 8414,
                                            "text": "true",
                                            "rawText": "true",
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 2097152,
                                            "start": 19,
                                            "end": 24
                                        }
                                    ],
                                    "multiline": false,
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 2097152,
                                    "start": 15,
                                    "end": 25
                                },
                                "initializer": null,
                                "decorators": null,
                                "accessModifier": null,
                                "isStatic": false,
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 524352,
                                "start": 8,
                                "end": 26
                            }
                        ],
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 1,
                        "start": 8,
                        "end": 28
                    },
                    "decorators": null,
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 1,
                    "start": 1,
                    "end": 28
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
    "diagnostics": [],
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
