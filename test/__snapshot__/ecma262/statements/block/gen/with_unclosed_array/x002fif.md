# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/statements/block/autogen.md
- Path: kataw/test/__snapshot__/ecma262/statements/block/gen/with_unclosed_array
> :: test: with unclosed array
> :: case: /if
## Options

`````js
{}
`````
## Input

`````js
{[ /if
`````
## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 124,
            "block": {
                "kind": 249,
                "statements": [
                    {
                        "kind": 120,
                        "expression": {
                            "kind": 119,
                            "elementList": {
                                "kind": 270,
                                "elements": [
                                    {
                                        "kind": 371,
                                        "text": "/if",
                                        "rawText": "/if",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 2,
                                        "end": 6
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 2,
                                "end": 6
                            },
                            "flags": 32,
                            "transformFlags": 8,
                            "start": 1,
                            "end": 6
                        },
                        "flags": 16,
                        "transformFlags": 4096,
                        "start": 1,
                        "end": 6
                    }
                ],
                "flags": 16,
                "transformFlags": 0,
                "start": 1,
                "end": 6
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 6
        }
    ],
    "isModule": false,
    "source": "{[ /if",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 6
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Unterminated regular expression - start: 2, end: 6
✖ ',' expected - start: 3, end: 6

```

