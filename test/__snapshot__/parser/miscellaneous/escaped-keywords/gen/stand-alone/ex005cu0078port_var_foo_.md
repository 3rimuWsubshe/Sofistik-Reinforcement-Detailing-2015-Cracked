# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-06
- From: kataw8/test\__snapshot__/parser/miscellaneous/escaped-keywords/autogen.md
- Path: kataw8/test\__snapshot__\parser\miscellaneous\escaped-keywords\gen\stand-alone
> :: test: stand-alone
> :: case: e\u0078port var foo;
## Input

`````js
e\u0078port var foo;
`````
## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 257,
            "exportKeyword": {
                "kind": 4202582,
                "flags": 16464,
                "start": 0,
                "end": 11
            },
            "declaration": {
                "kind": 155,
                "declareKeyword": null,
                "varKeyword": {
                    "kind": 37757002,
                    "flags": 80,
                    "start": 11,
                    "end": 15
                },
                "declarationList": {
                    "kind": 156,
                    "declarations": [
                        {
                            "kind": 157,
                            "binding": {
                                "kind": 134299649,
                                "text": "foo",
                                "rawText": "foo",
                                "flags": 96,
                                "start": 15,
                                "end": 19
                            },
                            "optionalToken": null,
                            "type": null,
                            "initializer": null,
                            "flags": 16,
                            "start": 15,
                            "end": 19
                        }
                    ],
                    "flags": 16,
                    "start": 15,
                    "end": 19
                },
                "flags": 16,
                "start": 11,
                "end": 20
            },
            "namedExports": null,
            "exportFromClause": null,
            "fromClause": null,
            "exportKind": 0,
            "flags": 16,
            "start": 0,
            "end": 20
        }
    ],
    "isModule": false,
    "source": "e\\u0078port var foo;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 20
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ The `export` keyword can only be used with the module goal - start: 0, end: 11
✖ Keywords cannot contain escape characters - start: 0, end: 11

```
