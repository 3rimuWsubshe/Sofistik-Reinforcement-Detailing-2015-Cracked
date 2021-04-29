# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: g
> :: test: new arg
> :: case: new.target
## Input

`````js
new new.target
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
                "kind": 210,
                "newKeyword": {
                    "kind": 138477661,
                    "flags": 0,
                    "start": 0,
                    "end": 3
                },
                "expression": {
                    "kind": 211,
                    "targetKeyword": {
                        "kind": 16594,
                        "flags": 0,
                        "start": 8,
                        "end": 14
                    },
                    "flags": 96,
                    "start": 3,
                    "end": 14
                },
                "argumentList": null,
                "flags": 32,
                "start": 0,
                "end": 14
            },
            "flags": 16,
            "start": 0,
            "end": 14
        }
    ],
    "isModule": false,
    "source": "new new.target",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 14
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ 'new.target' only allowed within functions - start: 14, end: 14

```
