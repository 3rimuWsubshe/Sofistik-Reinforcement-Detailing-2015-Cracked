# Kataw parser test case

## Input

`````js
declare function one(value :null) :false;

declare function two(value :void) :false;

declare function three(value :mixed) :boolean;
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
            "kind": 176,
            "declareKeyword": {
                "kind": 82165,
                "flags": 64,
                "start": 0,
                "end": 7
            },
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 64,
                "start": 7,
                "end": 16
            },
            "generatorToken": null,
            "name": {
                "kind": 134299649,
                "text": "one",
                "rawText": "one",
                "flags": 96,
                "start": 16,
                "end": 20
            },
            "formalParameters": {
                "kind": 214,
                "formalParameterList": [
                    {
                        "kind": 281,
                        "ellipsisToken": null,
                        "left": {
                            "kind": 134299649,
                            "text": "value",
                            "rawText": "value",
                            "flags": 96,
                            "start": 21,
                            "end": 26
                        },
                        "optionalToken": null,
                        "type": {
                            "kind": 139,
                            "type": {
                                "kind": 138477575,
                                "flags": 2097216,
                                "start": 28,
                                "end": 32
                            },
                            "flags": 2097152,
                            "start": 26,
                            "end": 32
                        },
                        "right": null,
                        "flags": 32,
                        "start": 21,
                        "end": 32
                    }
                ],
                "trailingComma": false,
                "flags": 32,
                "start": 20,
                "end": 33
            },
            "contents": null,
            "typeParameters": null,
            "returnType": {
                "kind": 139,
                "type": {
                    "kind": 205586437,
                    "flags": 2097216,
                    "start": 35,
                    "end": 40
                },
                "flags": 2097152,
                "start": 7,
                "end": 40
            },
            "flags": 4112,
            "start": 7,
            "end": 40
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 40,
            "end": 41
        },
        {
            "kind": 176,
            "declareKeyword": {
                "kind": 82165,
                "flags": 64,
                "start": 41,
                "end": 50
            },
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 64,
                "start": 50,
                "end": 59
            },
            "generatorToken": null,
            "name": {
                "kind": 134299649,
                "text": "two",
                "rawText": "two",
                "flags": 96,
                "start": 59,
                "end": 63
            },
            "formalParameters": {
                "kind": 214,
                "formalParameterList": [
                    {
                        "kind": 281,
                        "ellipsisToken": null,
                        "left": {
                            "kind": 134299649,
                            "text": "value",
                            "rawText": "value",
                            "flags": 96,
                            "start": 64,
                            "end": 69
                        },
                        "optionalToken": null,
                        "type": {
                            "kind": 139,
                            "type": {
                                "kind": 138477615,
                                "flags": 2097216,
                                "start": 71,
                                "end": 75
                            },
                            "flags": 2097152,
                            "start": 69,
                            "end": 75
                        },
                        "right": null,
                        "flags": 32,
                        "start": 64,
                        "end": 75
                    }
                ],
                "trailingComma": false,
                "flags": 32,
                "start": 63,
                "end": 76
            },
            "contents": null,
            "typeParameters": null,
            "returnType": {
                "kind": 139,
                "type": {
                    "kind": 205586437,
                    "flags": 2097216,
                    "start": 78,
                    "end": 83
                },
                "flags": 2097152,
                "start": 50,
                "end": 83
            },
            "flags": 4112,
            "start": 50,
            "end": 83
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 83,
            "end": 84
        },
        {
            "kind": 176,
            "declareKeyword": {
                "kind": 82165,
                "flags": 64,
                "start": 84,
                "end": 93
            },
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 64,
                "start": 93,
                "end": 102
            },
            "generatorToken": null,
            "name": {
                "kind": 134299649,
                "text": "three",
                "rawText": "three",
                "flags": 96,
                "start": 102,
                "end": 108
            },
            "formalParameters": {
                "kind": 214,
                "formalParameterList": [
                    {
                        "kind": 281,
                        "ellipsisToken": null,
                        "left": {
                            "kind": 134299649,
                            "text": "value",
                            "rawText": "value",
                            "flags": 96,
                            "start": 109,
                            "end": 114
                        },
                        "optionalToken": null,
                        "type": {
                            "kind": 139,
                            "type": {
                                "kind": 144,
                                "id": {
                                    "kind": 134299649,
                                    "text": "mixed",
                                    "rawText": "mixed",
                                    "flags": 96,
                                    "start": 116,
                                    "end": 121
                                },
                                "typeParameters": null,
                                "flags": 2097152,
                                "start": 116,
                                "end": 121
                            },
                            "flags": 2097152,
                            "start": 114,
                            "end": 121
                        },
                        "right": null,
                        "flags": 32,
                        "start": 109,
                        "end": 121
                    }
                ],
                "trailingComma": false,
                "flags": 32,
                "start": 108,
                "end": 122
            },
            "contents": null,
            "typeParameters": null,
            "returnType": {
                "kind": 139,
                "type": {
                    "kind": 134234254,
                    "flags": 2097216,
                    "start": 124,
                    "end": 131
                },
                "flags": 2097152,
                "start": 93,
                "end": 131
            },
            "flags": 4112,
            "start": 93,
            "end": 131
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 131,
            "end": 132
        }
    ],
    "isModule": false,
    "source": "declare function one(value :null) :false;\n\ndeclare function two(value :void) :false;\n\ndeclare function three(value :mixed) :boolean;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 132
}
```

### Printed

```javascript

function one(value);
function two(value);
function three(value);

```

### Diagnostics

```javascript
✔ No errors
```
