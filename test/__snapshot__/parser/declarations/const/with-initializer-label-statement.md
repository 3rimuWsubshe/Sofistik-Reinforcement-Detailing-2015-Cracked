# Kataw parser test case

## Input

`````js
label: const x = 1;
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 163,
            "label": {
                "kind": 134299649,
                "text": "label",
                "rawText": "label",
                "flags": 96,
                "start": 0,
                "end": 5
            },
            "labels": [
                {
                    "kind": 256,
                    "label": "label",
                    "iterationStatement": false,
                    "flags": 16,
                    "start": 0,
                    "end": 5
                }
            ],
            "colonToken": {
                "kind": 21,
                "flags": 0,
                "start": 5,
                "end": 6
            },
            "statement": {
                "kind": 120,
                "expression": {
                    "kind": 16637,
                    "text": "",
                    "flags": 68,
                    "start": 6,
                    "end": 6
                },
                "flags": 16,
                "start": 6,
                "end": 6
            },
            "flags": 16,
            "start": 0,
            "end": 6
        },
        {
            "kind": 162,
            "lexicalKeyword": {
                "kind": 37757004,
                "flags": 0,
                "start": 6,
                "end": 12
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
                            "start": 12,
                            "end": 14
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": {
                            "kind": 201392130,
                            "text": 1,
                            "rawText": "1",
                            "flags": 96,
                            "start": 16,
                            "end": 18
                        },
                        "flags": 16,
                        "start": 12,
                        "end": 18
                    }
                ],
                "flags": 16777232,
                "start": 12,
                "end": 18
            },
            "flags": 33554448,
            "start": 6,
            "end": 19
        }
    ],
    "isModule": false,
    "source": "label: const x = 1;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 19
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ Expression expected - start: 6, end: 12
✖ Expected a `;` - start: 6, end: 12

```
