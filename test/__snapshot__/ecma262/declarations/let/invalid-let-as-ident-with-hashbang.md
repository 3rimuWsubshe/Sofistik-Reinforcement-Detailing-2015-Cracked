# Kataw parser test case

## Input

`````js
let x = ;
#! hashbang
`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 162,
            "lexicalKeyword": {
                "kind": 41951307,
                "flags": 80,
                "transformFlags": 0,
                "start": 0,
                "end": 3
            },
            "binding": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 3,
                            "end": 5
                        },
                        "type": null,
                        "initializer": {
                            "kind": 16637,
                            "text": "",
                            "rawText": "",
                            "flags": 64,
                            "transformFlags": 0,
                            "start": 7,
                            "end": 7
                        },
                        "flags": 16,
                        "transformFlags": 4224,
                        "start": 3,
                        "end": 7
                    }
                ],
                "flags": 16,
                "transformFlags": 0,
                "start": 3,
                "end": 7
            },
            "flags": 33554448,
            "transformFlags": 0,
            "start": 0,
            "end": 9
        },
        {
            "kind": 120,
            "expression": {
                "kind": 126,
                "operandToken": {
                    "kind": 65584,
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 11,
                    "end": 12
                },
                "operand": {
                    "kind": 134299649,
                    "text": "hashbang",
                    "rawText": "hashbang",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 12,
                    "end": 21
                },
                "flags": 32,
                "transformFlags": 16384,
                "start": 11,
                "end": 21
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 11,
            "end": 21
        }
    ],
    "isModule": false,
    "source": "let x = ;\n#! hashbang",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 21
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Identifier expected - start: 7, end: 9
✖ '#!' can only be used at the start of a file. - start: 10, end: 11
✖ Declaration or statement expected - start: 9, end: 11

```

