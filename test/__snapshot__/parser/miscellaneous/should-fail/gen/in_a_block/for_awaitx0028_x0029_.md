# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-06
- From: kataw8/test\__snapshot__/parser/miscellaneous/should-fail/autogen.md
- Path: kataw8/test\__snapshot__\parser\miscellaneous\should-fail\gen\in_a_block
> :: test: in a block
> :: case: for await(;;);
## Input

`````js
{ for await(;;); }
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
                        "kind": 165,
                        "forKeyword": {
                            "kind": 37757017,
                            "flags": 80,
                            "start": 1,
                            "end": 5
                        },
                        "initializer": null,
                        "condition": null,
                        "incrementor": null,
                        "statement": {
                            "kind": 168,
                            "flags": 16,
                            "start": 15,
                            "end": 16
                        },
                        "flags": 16,
                        "start": 1,
                        "end": 16
                    }
                ],
                "flags": 16,
                "start": 1,
                "end": 16
            },
            "flags": 16,
            "start": 0,
            "end": 18
        }
    ],
    "isModule": false,
    "source": "{ for await(;;); }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 18
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ A 'for-await-of' statement is only allowed within an async function or async generator. - start: 11, end: 12

```
