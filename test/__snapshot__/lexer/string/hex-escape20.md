# Kataw parser test case

## Options

`````js
{ jsx: true, disableWebCompat: true }
`````

## Input

`````js
"\xa
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 120,
            "expression": {
                "kind": 201392131,
                "text": "",
                "rawText": "\"\\xa",
                "flags": 2097248,
                "start": 0,
                "end": 4
            },
            "flags": 16,
            "start": 0,
            "end": 4
        }
    ],
    "isModule": false,
    "source": "\"\\xa",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 4
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ Invalid hexadecimal escape sequence - start: 0, end: 4
✖ Unterminated string literal - start: 0, end: 4

```
