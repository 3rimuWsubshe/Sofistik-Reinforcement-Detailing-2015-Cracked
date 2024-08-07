# Kataw parser test case

## Input

`````js
type a = (((symbol[{[x]:string}][][][] | ((y & [((x) => T)]) => T) => T) => T) => T) => T;
`````

## Options

### Parser Options

`````js
{ allowTypes : true }
`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 200,
            "declareToken": null,
            "typeToken": {
                "kind": 24775,
                "flags": 64,
                "transformFlags": 0,
                "start": 0,
                "end": 4
            },
            "name": {
                "kind": 134299649,
                "text": "a",
                "rawText": "a",
                "flags": 96,
                "transformFlags": 0,
                "start": 4,
                "end": 6
            },
            "typeParameters": null,
            "assignToken": {
                "kind": 4125,
                "flags": 64,
                "transformFlags": 0,
                "start": 6,
                "end": 8
            },
            "type": {
                "kind": 139,
                "bitwiseOrToken": null,
                "bitwiseAndToken": null,
                "type": {
                    "kind": 288,
                    "typeParameters": null,
                    "arrowTypeParameterList": {
                        "kind": 292,
                        "parameters": [
                            {
                                "kind": 288,
                                "typeParameters": null,
                                "arrowTypeParameterList": {
                                    "kind": 292,
                                    "parameters": [
                                        {
                                            "kind": 139,
                                            "bitwiseOrToken": null,
                                            "bitwiseAndToken": null,
                                            "type": {
                                                "kind": 288,
                                                "typeParameters": null,
                                                "arrowTypeParameterList": {
                                                    "kind": 292,
                                                    "parameters": [
                                                        {
                                                            "kind": 284,
                                                            "ellipsisToken": null,
                                                            "name": {
                                                                "kind": 137,
                                                                "types": [
                                                                    {
                                                                        "kind": 136,
                                                                        "type": {
                                                                            "kind": 136,
                                                                            "type": {
                                                                                "kind": 136,
                                                                                "type": {
                                                                                    "kind": 311,
                                                                                    "objectType": {
                                                                                        "kind": 134234343,
                                                                                        "flags": 64,
                                                                                        "transformFlags": 0,
                                                                                        "start": 12,
                                                                                        "end": 18
                                                                                    },
                                                                                    "indexType": {
                                                                                        "kind": 139,
                                                                                        "bitwiseOrToken": null,
                                                                                        "bitwiseAndToken": null,
                                                                                        "type": {
                                                                                            "kind": 134234353,
                                                                                            "properties": [
                                                                                                {
                                                                                                    "kind": 195,
                                                                                                    "protoKeyword": null,
                                                                                                    "staticKeyword": null,
                                                                                                    "key": {
                                                                                                        "kind": 144,
                                                                                                        "typeName": {
                                                                                                            "kind": 134299649,
                                                                                                            "text": "x",
                                                                                                            "rawText": "x",
                                                                                                            "flags": 96,
                                                                                                            "transformFlags": 0,
                                                                                                            "start": 21,
                                                                                                            "end": 22
                                                                                                        },
                                                                                                        "typeParameters": null,
                                                                                                        "flags": 2097152,
                                                                                                        "transformFlags": 0,
                                                                                                        "start": 20,
                                                                                                        "end": 22
                                                                                                    },
                                                                                                    "value": null,
                                                                                                    "type": {
                                                                                                        "kind": 139,
                                                                                                        "bitwiseOrToken": null,
                                                                                                        "bitwiseAndToken": null,
                                                                                                        "type": {
                                                                                                            "kind": 134234347,
                                                                                                            "flags": 2097216,
                                                                                                            "transformFlags": 0,
                                                                                                            "start": 24,
                                                                                                            "end": 30
                                                                                                        },
                                                                                                        "flags": 2097152,
                                                                                                        "transformFlags": 0,
                                                                                                        "start": 24,
                                                                                                        "end": 30
                                                                                                    },
                                                                                                    "flags": 2097152,
                                                                                                    "transformFlags": 0,
                                                                                                    "start": 20,
                                                                                                    "end": 30
                                                                                                }
                                                                                            ],
                                                                                            "trailingComma": false,
                                                                                            "flags": 2097152,
                                                                                            "transformFlags": 0,
                                                                                            "start": 19,
                                                                                            "end": 31
                                                                                        },
                                                                                        "flags": 2097152,
                                                                                        "transformFlags": 0,
                                                                                        "start": 19,
                                                                                        "end": 31
                                                                                    },
                                                                                    "flags": 0,
                                                                                    "transformFlags": 0,
                                                                                    "start": 18,
                                                                                    "end": 33
                                                                                },
                                                                                "flags": 2097152,
                                                                                "transformFlags": 0,
                                                                                "start": 18,
                                                                                "end": 34
                                                                            },
                                                                            "flags": 2097152,
                                                                            "transformFlags": 0,
                                                                            "start": 18,
                                                                            "end": 36
                                                                        },
                                                                        "flags": 2097152,
                                                                        "transformFlags": 0,
                                                                        "start": 18,
                                                                        "end": 38
                                                                    },
                                                                    {
                                                                        "kind": 288,
                                                                        "typeParameters": null,
                                                                        "arrowTypeParameterList": {
                                                                            "kind": 292,
                                                                            "parameters": [
                                                                                {
                                                                                    "kind": 288,
                                                                                    "typeParameters": null,
                                                                                    "arrowTypeParameterList": {
                                                                                        "kind": 292,
                                                                                        "parameters": [
                                                                                            {
                                                                                                "kind": 138,
                                                                                                "types": [
                                                                                                    {
                                                                                                        "kind": 144,
                                                                                                        "typeName": {
                                                                                                            "kind": 134299649,
                                                                                                            "text": "y",
                                                                                                            "rawText": "y",
                                                                                                            "flags": 96,
                                                                                                            "transformFlags": 0,
                                                                                                            "start": 43,
                                                                                                            "end": 44
                                                                                                        },
                                                                                                        "typeParameters": null,
                                                                                                        "flags": 2097152,
                                                                                                        "transformFlags": 0,
                                                                                                        "start": 40,
                                                                                                        "end": 44
                                                                                                    },
                                                                                                    {
                                                                                                        "kind": 147,
                                                                                                        "elementTypes": [
                                                                                                            {
                                                                                                                "kind": 139,
                                                                                                                "bitwiseOrToken": null,
                                                                                                                "bitwiseAndToken": null,
                                                                                                                "type": {
                                                                                                                    "kind": 290,
                                                                                                                    "type": {
                                                                                                                        "kind": 288,
                                                                                                                        "typeParameters": null,
                                                                                                                        "arrowTypeParameterList": {
                                                                                                                            "kind": 292,
                                                                                                                            "parameters": [
                                                                                                                                {
                                                                                                                                    "kind": 144,
                                                                                                                                    "typeName": {
                                                                                                                                        "kind": 134299649,
                                                                                                                                        "text": "x",
                                                                                                                                        "rawText": "x",
                                                                                                                                        "flags": 96,
                                                                                                                                        "transformFlags": 0,
                                                                                                                                        "start": 50,
                                                                                                                                        "end": 51
                                                                                                                                    },
                                                                                                                                    "typeParameters": null,
                                                                                                                                    "flags": 2097152,
                                                                                                                                    "transformFlags": 0,
                                                                                                                                    "start": 48,
                                                                                                                                    "end": 51
                                                                                                                                }
                                                                                                                            ],
                                                                                                                            "trailingComma": false,
                                                                                                                            "flags": 2097152,
                                                                                                                            "transformFlags": 0,
                                                                                                                            "start": 48,
                                                                                                                            "end": 55
                                                                                                                        },
                                                                                                                        "arrowToken": {
                                                                                                                            "kind": 10,
                                                                                                                            "flags": 64,
                                                                                                                            "transformFlags": 0,
                                                                                                                            "start": 52,
                                                                                                                            "end": 55
                                                                                                                        },
                                                                                                                        "returnType": {
                                                                                                                            "kind": 139,
                                                                                                                            "bitwiseOrToken": null,
                                                                                                                            "bitwiseAndToken": null,
                                                                                                                            "type": {
                                                                                                                                "kind": 144,
                                                                                                                                "typeName": {
                                                                                                                                    "kind": 134299649,
                                                                                                                                    "text": "T",
                                                                                                                                    "rawText": "T",
                                                                                                                                    "flags": 96,
                                                                                                                                    "transformFlags": 0,
                                                                                                                                    "start": 55,
                                                                                                                                    "end": 57
                                                                                                                                },
                                                                                                                                "typeParameters": null,
                                                                                                                                "flags": 2097152,
                                                                                                                                "transformFlags": 0,
                                                                                                                                "start": 55,
                                                                                                                                "end": 57
                                                                                                                            },
                                                                                                                            "flags": 2097152,
                                                                                                                            "transformFlags": 0,
                                                                                                                            "start": 55,
                                                                                                                            "end": 57
                                                                                                                        },
                                                                                                                        "flags": 2097152,
                                                                                                                        "transformFlags": 0,
                                                                                                                        "start": 48,
                                                                                                                        "end": 57
                                                                                                                    },
                                                                                                                    "flags": 2097152,
                                                                                                                    "transformFlags": 0,
                                                                                                                    "start": 48,
                                                                                                                    "end": 58
                                                                                                                },
                                                                                                                "flags": 2097152,
                                                                                                                "transformFlags": 0,
                                                                                                                "start": 48,
                                                                                                                "end": 58
                                                                                                            }
                                                                                                        ],
                                                                                                        "trailingComma": false,
                                                                                                        "flags": 2097152,
                                                                                                        "transformFlags": 0,
                                                                                                        "start": 46,
                                                                                                        "end": 59
                                                                                                    }
                                                                                                ],
                                                                                                "flags": 2097152,
                                                                                                "transformFlags": 0,
                                                                                                "start": 44,
                                                                                                "end": 59
                                                                                            }
                                                                                        ],
                                                                                        "trailingComma": false,
                                                                                        "flags": 2097152,
                                                                                        "transformFlags": 0,
                                                                                        "start": 40,
                                                                                        "end": 63
                                                                                    },
                                                                                    "arrowToken": {
                                                                                        "kind": 10,
                                                                                        "flags": 64,
                                                                                        "transformFlags": 0,
                                                                                        "start": 60,
                                                                                        "end": 63
                                                                                    },
                                                                                    "returnType": {
                                                                                        "kind": 139,
                                                                                        "bitwiseOrToken": null,
                                                                                        "bitwiseAndToken": null,
                                                                                        "type": {
                                                                                            "kind": 144,
                                                                                            "typeName": {
                                                                                                "kind": 134299649,
                                                                                                "text": "T",
                                                                                                "rawText": "T",
                                                                                                "flags": 96,
                                                                                                "transformFlags": 0,
                                                                                                "start": 63,
                                                                                                "end": 65
                                                                                            },
                                                                                            "typeParameters": null,
                                                                                            "flags": 2097152,
                                                                                            "transformFlags": 0,
                                                                                            "start": 63,
                                                                                            "end": 65
                                                                                        },
                                                                                        "flags": 2097152,
                                                                                        "transformFlags": 0,
                                                                                        "start": 63,
                                                                                        "end": 65
                                                                                    },
                                                                                    "flags": 2097152,
                                                                                    "transformFlags": 0,
                                                                                    "start": 40,
                                                                                    "end": 65
                                                                                }
                                                                            ],
                                                                            "trailingComma": false,
                                                                            "flags": 2097152,
                                                                            "transformFlags": 0,
                                                                            "start": 40,
                                                                            "end": 66
                                                                        },
                                                                        "arrowToken": {
                                                                            "kind": 10,
                                                                            "flags": 64,
                                                                            "transformFlags": 0,
                                                                            "start": 66,
                                                                            "end": 69
                                                                        },
                                                                        "returnType": {
                                                                            "kind": 139,
                                                                            "bitwiseOrToken": null,
                                                                            "bitwiseAndToken": null,
                                                                            "type": {
                                                                                "kind": 144,
                                                                                "typeName": {
                                                                                    "kind": 134299649,
                                                                                    "text": "T",
                                                                                    "rawText": "T",
                                                                                    "flags": 96,
                                                                                    "transformFlags": 0,
                                                                                    "start": 69,
                                                                                    "end": 71
                                                                                },
                                                                                "typeParameters": null,
                                                                                "flags": 2097152,
                                                                                "transformFlags": 0,
                                                                                "start": 69,
                                                                                "end": 71
                                                                            },
                                                                            "flags": 2097152,
                                                                            "transformFlags": 0,
                                                                            "start": 69,
                                                                            "end": 71
                                                                        },
                                                                        "flags": 2097152,
                                                                        "transformFlags": 0,
                                                                        "start": 40,
                                                                        "end": 71
                                                                    }
                                                                ],
                                                                "flags": 2097152,
                                                                "transformFlags": 0,
                                                                "start": 38,
                                                                "end": 71
                                                            },
                                                            "optionalToken": null,
                                                            "types": null,
                                                            "flags": 2097152,
                                                            "transformFlags": 0,
                                                            "start": 11,
                                                            "end": 72
                                                        }
                                                    ],
                                                    "trailingComma": false,
                                                    "flags": 2097152,
                                                    "transformFlags": 0,
                                                    "start": 11,
                                                    "end": 72
                                                },
                                                "arrowToken": {
                                                    "kind": 10,
                                                    "flags": 64,
                                                    "transformFlags": 0,
                                                    "start": 72,
                                                    "end": 75
                                                },
                                                "returnType": {
                                                    "kind": 139,
                                                    "bitwiseOrToken": null,
                                                    "bitwiseAndToken": null,
                                                    "type": {
                                                        "kind": 144,
                                                        "typeName": {
                                                            "kind": 134299649,
                                                            "text": "T",
                                                            "rawText": "T",
                                                            "flags": 96,
                                                            "transformFlags": 0,
                                                            "start": 75,
                                                            "end": 77
                                                        },
                                                        "typeParameters": null,
                                                        "flags": 2097152,
                                                        "transformFlags": 0,
                                                        "start": 75,
                                                        "end": 77
                                                    },
                                                    "flags": 2097152,
                                                    "transformFlags": 0,
                                                    "start": 75,
                                                    "end": 77
                                                },
                                                "flags": 2097152,
                                                "transformFlags": 0,
                                                "start": 11,
                                                "end": 77
                                            },
                                            "flags": 2097152,
                                            "transformFlags": 0,
                                            "start": 11,
                                            "end": 77
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 2097152,
                                    "transformFlags": 0,
                                    "start": 8,
                                    "end": 81
                                },
                                "arrowToken": {
                                    "kind": 10,
                                    "flags": 64,
                                    "transformFlags": 0,
                                    "start": 78,
                                    "end": 81
                                },
                                "returnType": {
                                    "kind": 139,
                                    "bitwiseOrToken": null,
                                    "bitwiseAndToken": null,
                                    "type": {
                                        "kind": 144,
                                        "typeName": {
                                            "kind": 134299649,
                                            "text": "T",
                                            "rawText": "T",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 81,
                                            "end": 83
                                        },
                                        "typeParameters": null,
                                        "flags": 2097152,
                                        "transformFlags": 0,
                                        "start": 81,
                                        "end": 83
                                    },
                                    "flags": 2097152,
                                    "transformFlags": 0,
                                    "start": 81,
                                    "end": 83
                                },
                                "flags": 2097152,
                                "transformFlags": 0,
                                "start": 8,
                                "end": 83
                            }
                        ],
                        "trailingComma": false,
                        "flags": 2097152,
                        "transformFlags": 0,
                        "start": 8,
                        "end": 84
                    },
                    "arrowToken": {
                        "kind": 10,
                        "flags": 64,
                        "transformFlags": 0,
                        "start": 84,
                        "end": 87
                    },
                    "returnType": {
                        "kind": 139,
                        "bitwiseOrToken": null,
                        "bitwiseAndToken": null,
                        "type": {
                            "kind": 144,
                            "typeName": {
                                "kind": 134299649,
                                "text": "T",
                                "rawText": "T",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 87,
                                "end": 89
                            },
                            "typeParameters": null,
                            "flags": 2097152,
                            "transformFlags": 0,
                            "start": 87,
                            "end": 89
                        },
                        "flags": 2097152,
                        "transformFlags": 0,
                        "start": 87,
                        "end": 89
                    },
                    "flags": 2097152,
                    "transformFlags": 0,
                    "start": 8,
                    "end": 89
                },
                "flags": 2097152,
                "transformFlags": 0,
                "start": 8,
                "end": 89
            },
            "flags": 64,
            "transformFlags": 0,
            "start": 0,
            "end": 90
        }
    ],
    "isModule": false,
    "source": "type a = (((symbol[{[x]:string}][][][] | ((y & [((x) => T)]) => T) => T) => T) => T) => T;",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 90
}
```

### Printed

```javascript
type a = (((symbol[{ [x]: string }][][][] |
  ((y & [((x) => T)]) => T) => T) => T) => T) => T
```

### Diagnostics

```javascript
✔ No errors
```

