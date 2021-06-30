# Kataw parser test case

## Options

`````js
{ jsx: false, disableWebCompat: true, module: true }
`````

## Input

`````js
try {
} catch (e) {
  function(){}
}
`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 159,
            "tryKeyword": {
                "kind": 37757027,
                "flags": 80,
                "start": 0,
                "end": 3
            },
            "block": {
                "kind": 124,
                "block": {
                    "kind": 249,
                    "statements": [],
                    "flags": 17,
                    "start": 5,
                    "end": 5
                },
                "flags": 16,
                "start": 3,
                "end": 7
            },
            "catchClause": {
                "kind": 173,
                "catchKeyword": {
                    "kind": 4202575,
                    "flags": 80,
                    "start": 7,
                    "end": 13
                },
                "catchParameter": {
                    "kind": 134299649,
                    "text": "e",
                    "rawText": "e",
                    "flags": 96,
                    "start": 15,
                    "end": 16
                },
                "block": {
                    "kind": 124,
                    "block": {
                        "kind": 249,
                        "statements": [
                            {
                                "kind": 176,
                                "declareKeyword": null,
                                "asyncKeyword": null,
                                "functionKeyword": {
                                    "kind": 37822554,
                                    "flags": 65,
                                    "start": 19,
                                    "end": 30
                                },
                                "asteriskToken": null,
                                "name": null,
                                "typeParameters": null,
                                "formalParameterList": {
                                    "kind": 214,
                                    "formalParameters": [],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "start": 31,
                                    "end": 31
                                },
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "directives": [],
                                        "statements": [],
                                        "flags": 32,
                                        "start": 33,
                                        "end": 33
                                    },
                                    "flags": 32,
                                    "start": 32,
                                    "end": 34
                                },
                                "returnType": null,
                                "flags": 16,
                                "start": 19,
                                "end": 34
                            }
                        ],
                        "flags": 17,
                        "start": 19,
                        "end": 34
                    },
                    "flags": 16,
                    "start": 17,
                    "end": 36
                },
                "flags": 80,
                "start": 7,
                "end": 36
            },
            "finallyKeyword": null,
            "finallyBlock": null,
            "flags": 16,
            "start": 0,
            "end": 36
        }
    ],
    "isModule": true,
    "source": "try {\n} catch (e) {\n  function(){}\n}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 36
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Binding identifier expected - start: 30, end: 31

```
