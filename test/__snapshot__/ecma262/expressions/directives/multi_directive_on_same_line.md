# Kataw parser test case

## Input

`````js
"foo";"bar";
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
                "kind": 201392131,
                "text": "foo",
                "rawText": "\"foo\"",
                "flags": 96,
                "start": 0,
                "end": 5
            },
            "flags": 16,
            "start": 0,
            "end": 6
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392131,
                "text": "bar",
                "rawText": "\"bar\"",
                "flags": 96,
                "start": 6,
                "end": 11
            },
            "flags": 16,
            "start": 6,
            "end": 12
        }
    ],
    "isModule": false,
    "source": "\"foo\";\"bar\";",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 12
}
```

### Printed

```javascript

"\"foo\"";
"\"bar\"";

```

### Diagnostics

```javascript
✔ No errors
```
