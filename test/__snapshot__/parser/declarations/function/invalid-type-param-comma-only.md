# Kataw parser test case

## Input

`````js
function foo<,>() {}
`````

## Output

### CST

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
                "flags": 64,
                "start": 0,
                "end": 8
            },
            "generatorToken": null,
            "name": {
                "kind": 134299649,
                "text": "foo",
                "rawText": "foo",
                "flags": 96,
                "start": 8,
                "end": 12
            },
            "typeParameters": {
                "kind": 307,
                "declarations": {
                    "kind": 337,
                    "parameters": [],
                    "trailingComma": false,
                    "flags": 2097152,
                    "start": 13,
                    "end": 13
                },
                "flags": 2097152,
                "start": 12,
                "end": 13
            },
            "formalParameters": {
                "kind": 214,
                "formalParameterList": [],
                "trailingComma": false,
                "flags": 32,
                "start": 13,
                "end": 13
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [],
                    "flags": 32,
                    "start": 13,
                    "end": 13
                },
                "flags": 32,
                "start": 13,
                "end": 13
            },
            "returnType": null,
            "flags": 16,
            "start": 0,
            "end": 13
        },
        {
            "kind": 120,
            "expression": {
                "kind": 198,
                "left": {
                    "kind": 16637,
                    "text": "",
                    "flags": 64,
                    "start": 14,
                    "end": 14
                },
                "operatorToken": {
                    "kind": 34883,
                    "flags": 96,
                    "start": 14,
                    "end": 15
                },
                "right": {
                    "kind": 271,
                    "arrowToken": null,
                    "typeParameters": null,
                    "parameters": [],
                    "asyncKeyword": null,
                    "returnType": null,
                    "contents": {
                        "kind": 216,
                        "functionStatementList": {
                            "kind": 217,
                            "directives": [],
                            "statements": [],
                            "flags": 32,
                            "start": 19,
                            "end": 19
                        },
                        "flags": 32,
                        "start": 17,
                        "end": 20
                    },
                    "flags": 32,
                    "start": 15,
                    "end": 20
                },
                "flags": 32,
                "start": 14,
                "end": 20
            },
            "flags": 16,
            "start": 14,
            "end": 20
        }
    ],
    "isModule": false,
    "source": "function foo<,>() {}",
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
✖ Expected to find a '>' to match the '<' token here. - start: 13, end: 14
✖ Identifier expected - start: 14, end: 15
✖ Expected a `;` - start: 17, end: 19
✖ Expected a `;` - start: 17, end: 19

```
