# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: c
> :: test: inside a generator func
> :: case: \u0065xport
## Input

`````js
function *f(){
  \u0065xport = x
}
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 0,
                "start": 0,
                "end": 8
            },
            "generatorToken": {
                "kind": 67143222,
                "flags": 64,
                "start": 8,
                "end": 10
            },
            "name": {
                "kind": 134299649,
                "text": "f",
                "rawText": "f",
                "flags": 96,
                "start": 10,
                "end": 11
            },
            "formalParameters": {
                "kind": 214,
                "formalParameterList": [],
                "trailingComma": false,
                "flags": 32,
                "start": 11,
                "end": 13
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [
                        {
                            "kind": 257,
                            "exportKeyword": {
                                "kind": 4202582,
                                "flags": 16385,
                                "start": 14,
                                "end": 28
                            },
                            "declaration": null,
                            "namedExports": null,
                            "exportFromClause": null,
                            "fromClause": null,
                            "flags": 16,
                            "start": 14,
                            "end": 28
                        }
                    ],
                    "flags": 16417,
                    "start": 14,
                    "end": 28
                },
                "flags": 32,
                "start": 13,
                "end": 28
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 272,
            "start": 0,
            "end": 28
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 96,
                "start": 30,
                "end": 32
            },
            "flags": 16,
            "start": 30,
            "end": 32
        }
    ],
    "isModule": false,
    "source": "function *f(){\n  \\u0065xport = x\n}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 34
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ The `export` keyword can only be used with the module goal - start: 14, end: 28
✖ Unexpected token. - start: 28, end: 30
✖ Statement expected - start: 28, end: 30
✖ Statement expected - start: 32, end: 34

```
