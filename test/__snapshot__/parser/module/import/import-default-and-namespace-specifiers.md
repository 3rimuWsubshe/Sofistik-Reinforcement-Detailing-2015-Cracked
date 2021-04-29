# Kataw parser test case

## Options

`````js
{ jsx: true, disableWebCompat: true, module: true }
`````

## Input

`````js
import foo, * as bar from "foo";
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 263,
            "importKeyword": {
                "kind": 37814364,
                "flags": 0,
                "start": 0,
                "end": 6
            },
            "fromClause": {
                "kind": 134299649,
                "text": "bar",
                "rawText": "bar",
                "flags": 96,
                "start": 16,
                "end": 20
            },
            "moduleSpecifier": null,
            "importClause": {
                "kind": 262,
                "defaultBinding": {
                    "kind": 134299649,
                    "text": "foo",
                    "rawText": "foo",
                    "flags": 96,
                    "start": 6,
                    "end": 10
                },
                "nameSpaceImport": {
                    "kind": 134299649,
                    "text": "as",
                    "rawText": "as",
                    "flags": 96,
                    "start": 13,
                    "end": 16
                },
                "namedImports": null,
                "flags": 16,
                "start": 6,
                "end": 16
            },
            "flags": 16,
            "start": 6,
            "end": 20
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "from",
                "rawText": "from",
                "flags": 96,
                "start": 20,
                "end": 25
            },
            "flags": 16,
            "start": 20,
            "end": 25
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392131,
                "text": "foo",
                "rawText": "foo",
                "flags": 96,
                "start": 25,
                "end": 31
            },
            "flags": 16,
            "start": 25,
            "end": 32
        }
    ],
    "isModule": true,
    "source": "import foo, * as bar from \"foo\";",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 32
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✔ No errors
```
