# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/miscellaneous/should-pass/autogen.md
- Path: kataw/test/__snapshot__/ecma262/miscellaneous/should-pass/gen/stand-alone
> :: test: stand-alone
> :: case: [1, 2, ...target = source]
## Options

`````js
{}
`````
## Input

`````js
[1, 2, ...target = source]
`````
## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 120,
            "expression": {
                "kind": 119,
                "elementList": {
                    "kind": 270,
                    "elements": [
                        {
                            "kind": 201392130,
                            "text": 1,
                            "rawText": "1",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 1,
                            "end": 2
                        },
                        {
                            "kind": 201392130,
                            "text": 2,
                            "rawText": "2",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 3,
                            "end": 5
                        },
                        {
                            "kind": 223,
                            "ellipsisToken": {
                                "kind": 524302,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 6,
                                "end": 10
                            },
                            "argument": {
                                "kind": 125,
                                "left": {
                                    "kind": 134299649,
                                    "text": "target",
                                    "rawText": "target",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 10,
                                    "end": 16
                                },
                                "operatorToken": {
                                    "kind": 4125,
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 16,
                                    "end": 18
                                },
                                "right": {
                                    "kind": 134299649,
                                    "text": "source",
                                    "rawText": "source",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 18,
                                    "end": 25
                                },
                                "flags": 0,
                                "transformFlags": 128,
                                "start": 10,
                                "end": 25
                            },
                            "flags": 1073741856,
                            "transformFlags": 0,
                            "start": 6,
                            "end": 25
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 1,
                    "end": 25
                },
                "flags": 32,
                "transformFlags": 8,
                "start": 0,
                "end": 26
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 0,
            "end": 26
        }
    ],
    "isModule": false,
    "source": "[1, 2, ...target = source]",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 26
}
```

### Printed

```javascript
[1, 2, ...target = source];
```

### Diagnostics

```javascript
✔ No errors
```

