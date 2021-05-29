# Kataw parser test case

## Options

`````js
{ jsx: true, disableWebCompat: true, module: true }
`````

## Input

`````js
import 'x' assert {x}
`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 263,
            "importKeyword": {
                "kind": 37814364,
                "flags": 80,
                "start": 0,
                "end": 6
            },
            "fromClause": null,
            "moduleSpecifier": {
                "kind": 201392131,
                "text": "x",
                "rawText": "'x'",
                "flags": 4194400,
                "start": 6,
                "end": 10
            },
            "importClause": null,
            "flags": 16,
            "start": 0,
            "end": 10
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "assert",
                "rawText": "assert",
                "flags": 96,
                "start": 10,
                "end": 17
            },
            "flags": 16,
            "start": 10,
            "end": 17
        },
        {
            "kind": 124,
            "block": {
                "kind": 249,
                "statements": [
                    {
                        "kind": 120,
                        "expression": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "start": 19,
                            "end": 20
                        },
                        "flags": 16,
                        "start": 19,
                        "end": 20
                    }
                ],
                "flags": 16,
                "start": 19,
                "end": 20
            },
            "flags": 16,
            "start": 17,
            "end": 21
        }
    ],
    "isModule": true,
    "source": "import 'x' assert {x}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 21
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Expected a `;` - start: 10, end: 17
✖ Expected a `;` - start: 17, end: 19

```
