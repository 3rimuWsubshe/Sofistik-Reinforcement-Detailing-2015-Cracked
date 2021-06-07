# Kataw parser test case

## Input

`````js
x={ foo(a = super[foo]){ }}
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
                                        "formalParameterList": [
                                            {
                                                "kind": 281,
                                                "ellipsisToken": null,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": "a",
                                                    "rawText": "a",
                                                    "flags": 96,
                                                    "start": 8,
                                                    "end": 9
                                                },
                                                "optionalToken": null,
                                                "type": null,
                                                "right": {
                                                    "kind": 536871042,
                                                    "member": {
                                                        "kind": 225,
                                                        "superKeyword": {
                                                            "kind": 4259935,
                                                            "flags": 96,
                                                            "start": 11,
                                                            "end": 17
                                                        },
                                                        "flags": 96,
                                                        "start": 11,
                                                        "end": 17
                                                    },
                                                    "expression": {
                                                        "kind": 134299649,
                                                        "text": "foo",
                                                        "rawText": "foo",
                                                        "flags": 96,
                                                        "start": 18,
                                                        "end": 21
                                                    },
                                                    "flags": 32,
                                                    "start": 11,
                                                    "end": 22
                                                },
                                                "flags": 34,
                                                "start": 8,
                                                "end": 22
                                            }
                                        ],
                                        "trailingComma": false,
                                        "flags": 34,
                                        "start": 8,
                                        "end": 23
                                    },
                                    "returnType": null,
                                    "contents": {
                                        "kind": 216,
                                        "functionStatementList": {
                                            "kind": 217,
                                            "directives": [],
                                            "statements": [],
                                            "flags": 32,
                                            "start": 24,
                                            "end": 24
                                        },
                                        "flags": 32,
                                        "start": 23,
                                        "end": 26
                                    },
                                    "flags": 32,
                                    "start": 7,
                                    "end": 26
                                },
                                "flags": 32,
                                "start": 3,
                                "end": 26
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "start": 3,
                        "end": 26
                    },
                    "flags": 48,
                    "start": 2,
                    "end": 27
                },
                "flags": 32,
                "start": 0,
                "end": 27
            },
            "flags": 16,
            "start": 0,
            "end": 27
        }
    ],
    "isModule": false,
    "source": "x={ foo(a = super[foo]){ }}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 27
}
```

### Printed

```javascript

x = { foo(a = ) {} };
```

### Diagnostics

```javascript
✔ No errors
```
