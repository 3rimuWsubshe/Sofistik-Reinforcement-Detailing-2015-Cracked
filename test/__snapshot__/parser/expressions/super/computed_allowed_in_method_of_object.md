# Kataw parser test case

## Input

`````js
x={ foo(){ super[foo]; }}
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
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 96,
                    "start": 0,
                    "end": 1
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 64,
                    "start": 1,
                    "end": 2
                },
                "right": {
                    "kind": 220,
                    "propertyList": {
                        "kind": 218,
                        "properties": [
                            {
                                "kind": 257,
                                "asyncKeyword": null,
                                "generatorToken": null,
                                "getKeyword": null,
                                "setKeyword": null,
                                "method": {
                                    "kind": 209,
                                    "name": {
                                        "kind": 134299649,
                                        "text": "foo",
                                        "rawText": "foo",
                                        "flags": 96,
                                        "start": 3,
                                        "end": 7
                                    },
                                    "typeParameters": null,
                                    "formalParameters": {
                                        "kind": 214,
                                        "formalParameterList": [],
                                        "trailingComma": false,
                                        "flags": 32,
                                        "start": 8,
                                        "end": 9
                                    },
                                    "returnType": null,
                                    "contents": {
                                        "kind": 216,
                                        "functionStatementList": {
                                            "kind": 217,
                                            "directives": [],
                                            "statements": [
                                                {
                                                    "kind": 120,
                                                    "expression": {
                                                        "kind": 536871042,
                                                        "member": {
                                                            "kind": 225,
                                                            "superKeyword": {
                                                                "kind": 4259935,
                                                                "flags": 96,
                                                                "start": 10,
                                                                "end": 16
                                                            },
                                                            "flags": 96,
                                                            "start": 10,
                                                            "end": 16
                                                        },
                                                        "expression": {
                                                            "kind": 134299649,
                                                            "text": "foo",
                                                            "rawText": "foo",
                                                            "flags": 96,
                                                            "start": 17,
                                                            "end": 20
                                                        },
                                                        "flags": 32,
                                                        "start": 10,
                                                        "end": 21
                                                    },
                                                    "flags": 16,
                                                    "start": 10,
                                                    "end": 22
                                                }
                                            ],
                                            "flags": 32,
                                            "start": 10,
                                            "end": 22
                                        },
                                        "flags": 32,
                                        "start": 9,
                                        "end": 24
                                    },
                                    "flags": 32,
                                    "start": 7,
                                    "end": 24
                                },
                                "flags": 32,
                                "start": 3,
                                "end": 24
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "start": 3,
                        "end": 24
                    },
                    "flags": 48,
                    "start": 2,
                    "end": 25
                },
                "flags": 32,
                "start": 0,
                "end": 25
            },
            "flags": 16,
            "start": 0,
            "end": 25
        }
    ],
    "isModule": false,
    "source": "x={ foo(){ super[foo]; }}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 25
}
```

### Printed

```javascript

x = { foo() {
    ;
  } };
```

### Diagnostics

```javascript
✔ No errors
```
