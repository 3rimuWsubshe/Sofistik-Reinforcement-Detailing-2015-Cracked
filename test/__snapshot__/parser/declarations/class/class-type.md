# Kataw parser test case

## Input

`````js
class A { }

class A {
  foo(x:number):void { }
}

function foo(x: Class<A>): A {
  return new x(); // OK
}

class B {
  constructor(_: any) { }
}

class C extends B {
  foo(x:string):void { }
}

type T = { [string]: Class<null> }
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
            "kind": 178,
            "declareKeyword": null,
            "decorators": null,
            "classKeyword": {
                "kind": 37822544,
                "flags": 80,
                "start": 0,
                "end": 5
            },
            "name": {
                "kind": 134299649,
                "text": "A",
                "rawText": "A",
                "flags": 96,
                "start": 5,
                "end": 7
            },
            "typeParameters": null,
            "tail": {
                "kind": 277,
                "classHeritage": null,
                "body": {
                    "kind": 262,
                    "elements": [],
                    "flags": 32,
                    "start": 9,
                    "end": 9
                },
                "flags": 7,
                "start": 32,
                "end": 11
            },
            "flags": 16,
            "start": 0,
            "end": 11
        },
        {
            "kind": 178,
            "declareKeyword": null,
            "decorators": null,
            "classKeyword": {
                "kind": 37822544,
                "flags": 81,
                "start": 11,
                "end": 18
            },
            "name": {
                "kind": 134299649,
                "text": "A",
                "rawText": "A",
                "flags": 96,
                "start": 18,
                "end": 20
            },
            "typeParameters": null,
            "tail": {
                "kind": 277,
                "classHeritage": null,
                "body": {
                    "kind": 262,
                    "elements": [
                        {
                            "kind": 278,
                            "declareToken": null,
                            "decorators": null,
                            "generatorToken": null,
                            "staticKeyword": null,
                            "asyncKeyword": null,
                            "setKeyword": null,
                            "getKeyword": null,
                            "method": {
                                "kind": 209,
                                "name": {
                                    "kind": 134299649,
                                    "text": "foo",
                                    "rawText": "foo",
                                    "flags": 96,
                                    "start": 22,
                                    "end": 28
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
                                                "text": "x",
                                                "rawText": "x",
                                                "flags": 96,
                                                "start": 29,
                                                "end": 30
                                            },
                                            "optionalToken": null,
                                            "type": {
                                                "kind": 139,
                                                "type": {
                                                    "kind": 134234345,
                                                    "flags": 64,
                                                    "start": 31,
                                                    "end": 37
                                                },
                                                "flags": 0,
                                                "start": 30,
                                                "end": 37
                                            },
                                            "right": null,
                                            "flags": 32,
                                            "start": 29,
                                            "end": 37
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "start": 29,
                                    "end": 38
                                },
                                "returnType": {
                                    "kind": 139,
                                    "type": {
                                        "kind": 138477615,
                                        "flags": 64,
                                        "start": 39,
                                        "end": 43
                                    },
                                    "flags": 0,
                                    "start": 38,
                                    "end": 43
                                },
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "directives": [],
                                        "statements": [],
                                        "flags": 32,
                                        "start": 45,
                                        "end": 45
                                    },
                                    "flags": 32,
                                    "start": 43,
                                    "end": 47
                                },
                                "flags": 0,
                                "start": 28,
                                "end": 47
                            },
                            "flags": 0,
                            "start": 22,
                            "end": 47
                        }
                    ],
                    "flags": 32,
                    "start": 22,
                    "end": 47
                },
                "flags": 20,
                "start": 32,
                "end": 49
            },
            "flags": 16,
            "start": 11,
            "end": 49
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 65,
                "start": 49,
                "end": 59
            },
            "generatorToken": null,
            "name": {
                "kind": 134299649,
                "text": "foo",
                "rawText": "foo",
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
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "start": 64,
                            "end": 65
                        },
                        "optionalToken": null,
                        "type": {
                            "kind": 139,
                            "type": {
                                "kind": 144,
                                "id": {
                                    "kind": 134299649,
                                    "text": "Class",
                                    "rawText": "Class",
                                    "flags": 96,
                                    "start": 66,
                                    "end": 72
                                },
                                "typeParameters": {
                                    "kind": 266,
                                    "parameters": [
                                        {
                                            "kind": 267,
                                            "type": {
                                                "kind": 144,
                                                "id": {
                                                    "kind": 134299649,
                                                    "text": "A",
                                                    "rawText": "A",
                                                    "flags": 96,
                                                    "start": 73,
                                                    "end": 74
                                                },
                                                "typeParameters": null,
                                                "flags": 0,
                                                "start": 73,
                                                "end": 74
                                            },
                                            "flags": 0,
                                            "start": 73,
                                            "end": 74
                                        }
                                    ],
                                    "flags": 0,
                                    "start": 72,
                                    "end": 75
                                },
                                "flags": 0,
                                "start": 66,
                                "end": 75
                            },
                            "flags": 0,
                            "start": 65,
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
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [
                        {
                            "kind": 161,
                            "returnKeyword": {
                                "kind": 37757022,
                                "flags": 81,
                                "start": 81,
                                "end": 90
                            },
                            "expression": {
                                "kind": 210,
                                "newKeyword": {
                                    "kind": 138477661,
                                    "flags": 96,
                                    "start": 90,
                                    "end": 94
                                },
                                "expression": {
                                    "kind": 134299649,
                                    "text": "x",
                                    "rawText": "x",
                                    "flags": 96,
                                    "start": 94,
                                    "end": 96
                                },
                                "argumentList": {
                                    "kind": 256,
                                    "elements": [],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "start": 97,
                                    "end": 97
                                },
                                "flags": 32,
                                "start": 90,
                                "end": 98
                            },
                            "flags": 16,
                            "start": 1,
                            "end": 81
                        }
                    ],
                    "flags": 33,
                    "start": 81,
                    "end": 99
                },
                "flags": 32,
                "start": 79,
                "end": 107
            },
            "typeParameters": null,
            "returnType": {
                "kind": 139,
                "type": {
                    "kind": 144,
                    "id": {
                        "kind": 134299649,
                        "text": "A",
                        "rawText": "A",
                        "flags": 96,
                        "start": 77,
                        "end": 79
                    },
                    "typeParameters": null,
                    "flags": 0,
                    "start": 77,
                    "end": 79
                },
                "flags": 0,
                "start": 49,
                "end": 79
            },
            "flags": 16,
            "start": 49,
            "end": 107
        },
        {
            "kind": 178,
            "declareKeyword": null,
            "decorators": null,
            "classKeyword": {
                "kind": 37822544,
                "flags": 81,
                "start": 107,
                "end": 114
            },
            "name": {
                "kind": 134299649,
                "text": "B",
                "rawText": "B",
                "flags": 96,
                "start": 114,
                "end": 116
            },
            "typeParameters": null,
            "tail": {
                "kind": 277,
                "classHeritage": null,
                "body": {
                    "kind": 262,
                    "elements": [
                        {
                            "kind": 278,
                            "declareToken": null,
                            "decorators": null,
                            "generatorToken": null,
                            "staticKeyword": null,
                            "asyncKeyword": null,
                            "setKeyword": null,
                            "getKeyword": null,
                            "method": {
                                "kind": 209,
                                "name": {
                                    "kind": 134299649,
                                    "text": "constructor",
                                    "rawText": "constructor",
                                    "flags": 96,
                                    "start": 118,
                                    "end": 132
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
                                                "text": "_",
                                                "rawText": "_",
                                                "flags": 96,
                                                "start": 133,
                                                "end": 134
                                            },
                                            "optionalToken": null,
                                            "type": {
                                                "kind": 139,
                                                "type": {
                                                    "kind": 134234252,
                                                    "flags": 64,
                                                    "start": 135,
                                                    "end": 139
                                                },
                                                "flags": 0,
                                                "start": 134,
                                                "end": 139
                                            },
                                            "right": null,
                                            "flags": 32,
                                            "start": 133,
                                            "end": 139
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 2080,
                                    "start": 133,
                                    "end": 140
                                },
                                "returnType": null,
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "directives": [],
                                        "statements": [],
                                        "flags": 32,
                                        "start": 142,
                                        "end": 142
                                    },
                                    "flags": 32,
                                    "start": 140,
                                    "end": 144
                                },
                                "flags": 2048,
                                "start": 132,
                                "end": 144
                            },
                            "flags": 2048,
                            "start": 118,
                            "end": 144
                        }
                    ],
                    "flags": 32,
                    "start": 118,
                    "end": 144
                },
                "flags": 116,
                "start": 32,
                "end": 146
            },
            "flags": 16,
            "start": 107,
            "end": 146
        },
        {
            "kind": 178,
            "declareKeyword": null,
            "decorators": null,
            "classKeyword": {
                "kind": 37822544,
                "flags": 81,
                "start": 146,
                "end": 153
            },
            "name": {
                "kind": 134299649,
                "text": "C",
                "rawText": "C",
                "flags": 96,
                "start": 153,
                "end": 155
            },
            "typeParameters": null,
            "tail": {
                "kind": 277,
                "classHeritage": {
                    "kind": 279,
                    "extendsKeyword": {
                        "kind": 4194391,
                        "flags": 80,
                        "start": 155,
                        "end": 163
                    },
                    "expression": {
                        "kind": 134299649,
                        "text": "B",
                        "rawText": "B",
                        "flags": 96,
                        "start": 163,
                        "end": 165
                    },
                    "typeParameter": null,
                    "flags": 16,
                    "start": 163,
                    "end": 165
                },
                "body": {
                    "kind": 262,
                    "elements": [
                        {
                            "kind": 278,
                            "declareToken": null,
                            "decorators": null,
                            "generatorToken": null,
                            "staticKeyword": null,
                            "asyncKeyword": null,
                            "setKeyword": null,
                            "getKeyword": null,
                            "method": {
                                "kind": 209,
                                "name": {
                                    "kind": 134299649,
                                    "text": "foo",
                                    "rawText": "foo",
                                    "flags": 96,
                                    "start": 167,
                                    "end": 173
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
                                                "text": "x",
                                                "rawText": "x",
                                                "flags": 96,
                                                "start": 174,
                                                "end": 175
                                            },
                                            "optionalToken": null,
                                            "type": {
                                                "kind": 139,
                                                "type": {
                                                    "kind": 134234347,
                                                    "flags": 64,
                                                    "start": 176,
                                                    "end": 182
                                                },
                                                "flags": 0,
                                                "start": 175,
                                                "end": 182
                                            },
                                            "right": null,
                                            "flags": 32,
                                            "start": 174,
                                            "end": 182
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "start": 174,
                                    "end": 183
                                },
                                "returnType": {
                                    "kind": 139,
                                    "type": {
                                        "kind": 138477615,
                                        "flags": 64,
                                        "start": 184,
                                        "end": 188
                                    },
                                    "flags": 0,
                                    "start": 183,
                                    "end": 188
                                },
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "directives": [],
                                        "statements": [],
                                        "flags": 32,
                                        "start": 190,
                                        "end": 190
                                    },
                                    "flags": 32,
                                    "start": 188,
                                    "end": 192
                                },
                                "flags": 0,
                                "start": 173,
                                "end": 192
                            },
                            "flags": 0,
                            "start": 167,
                            "end": 192
                        }
                    ],
                    "flags": 32,
                    "start": 167,
                    "end": 192
                },
                "flags": 155,
                "start": 32,
                "end": 194
            },
            "flags": 16,
            "start": 146,
            "end": 194
        },
        {
            "kind": 200,
            "declareToken": null,
            "typeToken": {
                "kind": 24775,
                "flags": 64,
                "start": 194,
                "end": 202
            },
            "name": {
                "kind": 134299649,
                "text": "T",
                "rawText": "T",
                "flags": 96,
                "start": 200,
                "end": 202
            },
            "typeParameters": null,
            "type": {
                "kind": 134234353,
                "properties": [],
                "indexers": [
                    {
                        "kind": 195,
                        "name": null,
                        "key": {
                            "kind": 134234347,
                            "flags": 64,
                            "start": 208,
                            "end": 214
                        },
                        "value": {
                            "kind": 144,
                            "id": {
                                "kind": 134299649,
                                "text": "Class",
                                "rawText": "Class",
                                "flags": 96,
                                "start": 216,
                                "end": 222
                            },
                            "typeParameters": {
                                "kind": 266,
                                "parameters": [
                                    {
                                        "kind": 267,
                                        "type": {
                                            "kind": 138477575,
                                            "flags": 64,
                                            "start": 223,
                                            "end": 227
                                        },
                                        "flags": 0,
                                        "start": 223,
                                        "end": 227
                                    }
                                ],
                                "flags": 0,
                                "start": 222,
                                "end": 228
                            },
                            "flags": 0,
                            "start": 216,
                            "end": 228
                        },
                        "staticToken": null,
                        "flags": 0,
                        "start": 206,
                        "end": 228
                    }
                ],
                "callProperties": [],
                "internalSlots": [],
                "flags": 0,
                "start": 204,
                "end": 230
            },
            "flags": 16,
            "start": 194,
            "end": 230
        }
    ],
    "isModule": false,
    "source": "class A { }\n\nclass A {\n  foo(x:number):void { }\n}\n\nfunction foo(x: Class<A>): A {\n  return new x(); // OK\n}\n\nclass B {\n  constructor(_: any) { }\n}\n\nclass C extends B {\n  foo(x:string):void { }\n}\n\ntype T = { [string]: Class<null> }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 230
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Duplicate identifier - start: 18, end: 20

```
