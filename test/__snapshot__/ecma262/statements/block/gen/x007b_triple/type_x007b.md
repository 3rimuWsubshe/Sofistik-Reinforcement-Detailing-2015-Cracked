# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/statements/block/autogen.md
- Path: kataw/test/__snapshot__/ecma262/statements/block/gen/x007b_triple
> :: test: { triple
> :: case: type {
## Options

`````js
{}
`````
## Input

`````js
{ { { type {
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
                        "kind": 124,
                        "block": {
                            "kind": 249,
                            "statements": [
                                {
                                    "kind": 124,
                                    "block": {
                                        "kind": 249,
                                        "statements": [
                                            {
                                                "kind": 120,
                                                "expression": {
                                                    "kind": 134299649,
                                                    "text": "type",
                                                    "rawText": "type",
                                                    "flags": 96,
                                                    "transformFlags": 0,
                                                    "start": 5,
                                                    "end": 10
                                                },
                                                "flags": 16,
                                                "transformFlags": 4096,
                                                "start": 5,
                                                "end": 10
                                            },
                                            {
                                                "kind": 124,
                                                "block": {
                                                    "kind": 249,
                                                    "statements": [],
                                                    "flags": 16,
                                                    "transformFlags": 0,
                                                    "start": 12,
                                                    "end": 12
                                                },
                                                "flags": 16,
                                                "transformFlags": 0,
                                                "start": 10,
                                                "end": 12
                                            }
                                        ],
                                        "flags": 16,
                                        "transformFlags": 0,
                                        "start": 5,
                                        "end": 12
                                    },
                                    "flags": 16,
                                    "transformFlags": 0,
                                    "start": 3,
                                    "end": 12
                                }
                            ],
                            "flags": 16,
                            "transformFlags": 0,
                            "start": 3,
                            "end": 12
                        },
                        "flags": 16,
                        "transformFlags": 0,
                        "start": 1,
                        "end": 12
                    }
                ],
                "flags": 16,
                "transformFlags": 0,
                "start": 1,
                "end": 12
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 12
        }
    ],
    "isModule": false,
    "source": "{ { { type {",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 12
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ '{' is not allowed here. Did you mean ';'? - start: 10, end: 12

```

