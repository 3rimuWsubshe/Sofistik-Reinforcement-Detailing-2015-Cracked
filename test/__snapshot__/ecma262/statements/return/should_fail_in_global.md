# Kataw parser test case

## Input

`````js
return
`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 161,
            "returnKeyword": {
                "kind": 37757022,
                "flags": 80,
                "start": 0,
                "end": 6
            },
            "expression": null,
            "flags": 80,
            "start": 0,
            "end": 6
        }
    ],
    "isModule": false,
    "source": "return",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 6
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ A return statement can only be used within a function_body - start: 0, end: 6

```
