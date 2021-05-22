# Kataw parser test case

## Input

`````js
g => {
  try {}
  catch ([g]) {}
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
            "kind": 120,
            "expression": {
                "kind": 271,
                "arrowToken": {
                    "kind": 10,
                    "flags": 0,
                    "start": 1,
                    "end": 4
                },
                "typeParameters": null,
                "parameters": {
                    "kind": 134299649,
                    "text": "g",
                    "rawText": "g",
                    "flags": 96,
                    "start": 0,
                    "end": 1
                },
                "asyncKeyword": null,
                "returnType": null,
                "contents": {
                    "kind": 216,
                    "functionStatementList": {
                        "kind": 217,
                        "directives": [],
                        "statements": [
                            {
                                "kind": 159,
                                "tryKeyword": {
                                    "kind": 37757027,
                                    "flags": 1,
                                    "start": 6,
                                    "end": 12
                                },
                                "block": {
                                    "kind": 124,
                                    "block": {
                                        "kind": 249,
                                        "statements": [],
                                        "flags": 16,
                                        "start": 14,
                                        "end": 14
                                    },
                                    "flags": 16,
                                    "start": 12,
                                    "end": 15
                                },
                                "catchClause": {
                                    "kind": 173,
                                    "catchKeyword": {
                                        "kind": 4202575,
                                        "flags": 1,
                                        "start": 15,
                                        "end": 23
                                    },
                                    "catchParameter": {
                                        "kind": 201,
                                        "elementList": {
                                            "kind": 202,
                                            "elements": [
                                                {
                                                    "kind": 244,
                                                    "ellipsisToken": null,
                                                    "binding": {
                                                        "kind": 134299649,
                                                        "text": "g",
                                                        "rawText": "g",
                                                        "flags": 96,
                                                        "start": 26,
                                                        "end": 27
                                                    },
                                                    "optionalToken": null,
                                                    "type": null,
                                                    "initializer": null,
                                                    "flags": 32,
                                                    "start": 26,
                                                    "end": 27
                                                }
                                            ],
                                            "trailingComma": false,
                                            "flags": 0,
                                            "start": 26,
                                            "end": 27
                                        },
                                        "flags": 32,
                                        "start": 25,
                                        "end": 28
                                    },
                                    "initializer": null,
                                    "block": {
                                        "kind": 124,
                                        "block": {
                                            "kind": 249,
                                            "statements": [],
                                            "flags": 16,
                                            "start": 31,
                                            "end": 31
                                        },
                                        "flags": 16,
                                        "start": 29,
                                        "end": 32
                                    },
                                    "flags": 16,
                                    "start": 15,
                                    "end": 32
                                },
                                "finallyKeyword": null,
                                "finallyBlock": null,
                                "flags": 16,
                                "start": 6,
                                "end": 32
                            }
                        ],
                        "flags": 33,
                        "start": 6,
                        "end": 32
                    },
                    "flags": 32,
                    "start": 4,
                    "end": 34
                },
                "flags": 32,
                "start": 0,
                "end": 34
            },
            "flags": 16,
            "start": 0,
            "end": 34
        }
    ],
    "isModule": false,
    "source": "g => {\n  try {}\n  catch ([g]) {}\n}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 34
}
```

### Printed

```javascript

g =>  {
  try {
  } catch ([g]) {
  }
};
```

### Diagnostics

```javascript
✔ No errors
```
