# Kataw parser test case

## Input

`````js
class Tag {
    constructor() {
        var a1: Array<Tag|string> = [];
        var a2: Array<Tag|string> = a1;
    }
}

type Node = Tag_ | string;
class Tag_ {
    constructor() {
        var a1: Array<Node> = [new Tag_];
        var a2: Array<Node> = a1;
    }
}

class C {
    x: ?number|string;
    constructor() {
        this.x = null;
    }
}

class D {
    content: string|C;
    copyContent(content: C): string|C {
        this.content = content;
        return this.content;
    }
}

var numberAndStringArr:Array<number|string> = [1,2];
var stringArr:Array<string> = ['a','b'];
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
                "text": "Tag",
                "rawText": "Tag",
                "flags": 96,
                "start": 5,
                "end": 9
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
                                    "start": 11,
                                    "end": 27
                                },
                                "typeParameters": null,
                                "formalParameters": {
                                    "kind": 214,
                                    "formalParameterList": [],
                                    "trailingComma": false,
                                    "flags": 2048,
                                    "start": 28,
                                    "end": 29
                                },
                                "returnType": null,
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "directives": [],
                                        "statements": [
                                            {
                                                "kind": 155,
                                                "declareKeyword": null,
                                                "varKeyword": {
                                                    "kind": 37757002,
                                                    "flags": 81,
                                                    "start": 31,
                                                    "end": 43
                                                },
                                                "declarationList": {
                                                    "kind": 156,
                                                    "declarations": [
                                                        {
                                                            "kind": 157,
                                                            "binding": {
                                                                "kind": 134299649,
                                                                "text": "a1",
                                                                "rawText": "a1",
                                                                "flags": 96,
                                                                "start": 43,
                                                                "end": 46
                                                            },
                                                            "optionalToken": null,
                                                            "type": {
                                                                "kind": 139,
                                                                "type": {
                                                                    "kind": 144,
                                                                    "id": {
                                                                        "kind": 134299649,
                                                                        "text": "Array",
                                                                        "rawText": "Array",
                                                                        "flags": 96,
                                                                        "start": 47,
                                                                        "end": 53
                                                                    },
                                                                    "typeParameters": {
                                                                        "kind": 266,
                                                                        "parameters": [
                                                                            {
                                                                                "kind": 267,
                                                                                "type": {
                                                                                    "kind": 137,
                                                                                    "types": [
                                                                                        {
                                                                                            "kind": 144,
                                                                                            "id": {
                                                                                                "kind": 134299649,
                                                                                                "text": "Tag",
                                                                                                "rawText": "Tag",
                                                                                                "flags": 96,
                                                                                                "start": 54,
                                                                                                "end": 57
                                                                                            },
                                                                                            "typeParameters": null,
                                                                                            "flags": 0,
                                                                                            "start": 54,
                                                                                            "end": 57
                                                                                        },
                                                                                        {
                                                                                            "kind": 134234347,
                                                                                            "flags": 64,
                                                                                            "start": 58,
                                                                                            "end": 64
                                                                                        }
                                                                                    ],
                                                                                    "flags": 0,
                                                                                    "start": 57,
                                                                                    "end": 64
                                                                                },
                                                                                "flags": 0,
                                                                                "start": 54,
                                                                                "end": 64
                                                                            }
                                                                        ],
                                                                        "flags": 0,
                                                                        "start": 53,
                                                                        "end": 65
                                                                    },
                                                                    "flags": 0,
                                                                    "start": 47,
                                                                    "end": 65
                                                                },
                                                                "flags": 0,
                                                                "start": 46,
                                                                "end": 65
                                                            },
                                                            "initializer": {
                                                                "kind": 119,
                                                                "elementList": {
                                                                    "kind": 270,
                                                                    "elements": [],
                                                                    "trailingComma": false,
                                                                    "flags": 32,
                                                                    "start": 69,
                                                                    "end": 69
                                                                },
                                                                "flags": 32,
                                                                "start": 67,
                                                                "end": 70
                                                            },
                                                            "flags": 16,
                                                            "start": 43,
                                                            "end": 70
                                                        }
                                                    ],
                                                    "flags": 16,
                                                    "start": 43,
                                                    "end": 70
                                                },
                                                "flags": 16,
                                                "start": 31,
                                                "end": 71
                                            },
                                            {
                                                "kind": 155,
                                                "declareKeyword": null,
                                                "varKeyword": {
                                                    "kind": 37757002,
                                                    "flags": 81,
                                                    "start": 71,
                                                    "end": 83
                                                },
                                                "declarationList": {
                                                    "kind": 156,
                                                    "declarations": [
                                                        {
                                                            "kind": 157,
                                                            "binding": {
                                                                "kind": 134299649,
                                                                "text": "a2",
                                                                "rawText": "a2",
                                                                "flags": 96,
                                                                "start": 83,
                                                                "end": 86
                                                            },
                                                            "optionalToken": null,
                                                            "type": {
                                                                "kind": 139,
                                                                "type": {
                                                                    "kind": 144,
                                                                    "id": {
                                                                        "kind": 134299649,
                                                                        "text": "Array",
                                                                        "rawText": "Array",
                                                                        "flags": 96,
                                                                        "start": 87,
                                                                        "end": 93
                                                                    },
                                                                    "typeParameters": {
                                                                        "kind": 266,
                                                                        "parameters": [
                                                                            {
                                                                                "kind": 267,
                                                                                "type": {
                                                                                    "kind": 137,
                                                                                    "types": [
                                                                                        {
                                                                                            "kind": 144,
                                                                                            "id": {
                                                                                                "kind": 134299649,
                                                                                                "text": "Tag",
                                                                                                "rawText": "Tag",
                                                                                                "flags": 96,
                                                                                                "start": 94,
                                                                                                "end": 97
                                                                                            },
                                                                                            "typeParameters": null,
                                                                                            "flags": 0,
                                                                                            "start": 94,
                                                                                            "end": 97
                                                                                        },
                                                                                        {
                                                                                            "kind": 134234347,
                                                                                            "flags": 64,
                                                                                            "start": 98,
                                                                                            "end": 104
                                                                                        }
                                                                                    ],
                                                                                    "flags": 0,
                                                                                    "start": 97,
                                                                                    "end": 104
                                                                                },
                                                                                "flags": 0,
                                                                                "start": 94,
                                                                                "end": 104
                                                                            }
                                                                        ],
                                                                        "flags": 0,
                                                                        "start": 93,
                                                                        "end": 105
                                                                    },
                                                                    "flags": 0,
                                                                    "start": 87,
                                                                    "end": 105
                                                                },
                                                                "flags": 0,
                                                                "start": 86,
                                                                "end": 105
                                                            },
                                                            "initializer": {
                                                                "kind": 134299649,
                                                                "text": "a1",
                                                                "rawText": "a1",
                                                                "flags": 96,
                                                                "start": 107,
                                                                "end": 110
                                                            },
                                                            "flags": 16,
                                                            "start": 83,
                                                            "end": 110
                                                        }
                                                    ],
                                                    "flags": 16,
                                                    "start": 83,
                                                    "end": 110
                                                },
                                                "flags": 16,
                                                "start": 71,
                                                "end": 111
                                            }
                                        ],
                                        "flags": 33,
                                        "start": 31,
                                        "end": 111
                                    },
                                    "flags": 32,
                                    "start": 29,
                                    "end": 117
                                },
                                "flags": 2048,
                                "start": 27,
                                "end": 117
                            },
                            "flags": 2048,
                            "start": 11,
                            "end": 117
                        }
                    ],
                    "flags": 32,
                    "start": 11,
                    "end": 117
                },
                "flags": 9,
                "start": 32,
                "end": 119
            },
            "flags": 16,
            "start": 0,
            "end": 119
        },
        {
            "kind": 200,
            "declareToken": null,
            "typeToken": {
                "kind": 24775,
                "flags": 64,
                "start": 119,
                "end": 130
            },
            "name": {
                "kind": 134299649,
                "text": "Node",
                "rawText": "Node",
                "flags": 96,
                "start": 125,
                "end": 130
            },
            "typeParameters": null,
            "type": {
                "kind": 137,
                "types": [
                    {
                        "kind": 144,
                        "id": {
                            "kind": 134299649,
                            "text": "Tag_",
                            "rawText": "Tag_",
                            "flags": 96,
                            "start": 132,
                            "end": 137
                        },
                        "typeParameters": null,
                        "flags": 0,
                        "start": 132,
                        "end": 137
                    },
                    {
                        "kind": 134234347,
                        "flags": 64,
                        "start": 139,
                        "end": 146
                    }
                ],
                "flags": 0,
                "start": 137,
                "end": 146
            },
            "flags": 16,
            "start": 119,
            "end": 147
        },
        {
            "kind": 178,
            "declareKeyword": null,
            "decorators": null,
            "classKeyword": {
                "kind": 37822544,
                "flags": 81,
                "start": 147,
                "end": 153
            },
            "name": {
                "kind": 134299649,
                "text": "Tag_",
                "rawText": "Tag_",
                "flags": 96,
                "start": 153,
                "end": 158
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
                                    "start": 160,
                                    "end": 176
                                },
                                "typeParameters": null,
                                "formalParameters": {
                                    "kind": 214,
                                    "formalParameterList": [],
                                    "trailingComma": false,
                                    "flags": 2048,
                                    "start": 177,
                                    "end": 178
                                },
                                "returnType": null,
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "directives": [],
                                        "statements": [
                                            {
                                                "kind": 155,
                                                "declareKeyword": null,
                                                "varKeyword": {
                                                    "kind": 37757002,
                                                    "flags": 81,
                                                    "start": 180,
                                                    "end": 192
                                                },
                                                "declarationList": {
                                                    "kind": 156,
                                                    "declarations": [
                                                        {
                                                            "kind": 157,
                                                            "binding": {
                                                                "kind": 134299649,
                                                                "text": "a1",
                                                                "rawText": "a1",
                                                                "flags": 96,
                                                                "start": 192,
                                                                "end": 195
                                                            },
                                                            "optionalToken": null,
                                                            "type": {
                                                                "kind": 139,
                                                                "type": {
                                                                    "kind": 144,
                                                                    "id": {
                                                                        "kind": 134299649,
                                                                        "text": "Array",
                                                                        "rawText": "Array",
                                                                        "flags": 96,
                                                                        "start": 196,
                                                                        "end": 202
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
                                                                                        "text": "Node",
                                                                                        "rawText": "Node",
                                                                                        "flags": 96,
                                                                                        "start": 203,
                                                                                        "end": 207
                                                                                    },
                                                                                    "typeParameters": null,
                                                                                    "flags": 0,
                                                                                    "start": 203,
                                                                                    "end": 207
                                                                                },
                                                                                "flags": 0,
                                                                                "start": 203,
                                                                                "end": 207
                                                                            }
                                                                        ],
                                                                        "flags": 0,
                                                                        "start": 202,
                                                                        "end": 208
                                                                    },
                                                                    "flags": 0,
                                                                    "start": 196,
                                                                    "end": 208
                                                                },
                                                                "flags": 0,
                                                                "start": 195,
                                                                "end": 208
                                                            },
                                                            "initializer": {
                                                                "kind": 119,
                                                                "elementList": {
                                                                    "kind": 270,
                                                                    "elements": [
                                                                        {
                                                                            "kind": 210,
                                                                            "newKeyword": {
                                                                                "kind": 138477661,
                                                                                "flags": 96,
                                                                                "start": 212,
                                                                                "end": 215
                                                                            },
                                                                            "expression": {
                                                                                "kind": 134299649,
                                                                                "text": "Tag_",
                                                                                "rawText": "Tag_",
                                                                                "flags": 96,
                                                                                "start": 215,
                                                                                "end": 220
                                                                            },
                                                                            "argumentList": null,
                                                                            "flags": 32,
                                                                            "start": 212,
                                                                            "end": 220
                                                                        }
                                                                    ],
                                                                    "trailingComma": false,
                                                                    "flags": 32,
                                                                    "start": 212,
                                                                    "end": 220
                                                                },
                                                                "flags": 32,
                                                                "start": 210,
                                                                "end": 221
                                                            },
                                                            "flags": 16,
                                                            "start": 192,
                                                            "end": 221
                                                        }
                                                    ],
                                                    "flags": 16,
                                                    "start": 192,
                                                    "end": 221
                                                },
                                                "flags": 16,
                                                "start": 180,
                                                "end": 222
                                            },
                                            {
                                                "kind": 155,
                                                "declareKeyword": null,
                                                "varKeyword": {
                                                    "kind": 37757002,
                                                    "flags": 81,
                                                    "start": 222,
                                                    "end": 234
                                                },
                                                "declarationList": {
                                                    "kind": 156,
                                                    "declarations": [
                                                        {
                                                            "kind": 157,
                                                            "binding": {
                                                                "kind": 134299649,
                                                                "text": "a2",
                                                                "rawText": "a2",
                                                                "flags": 96,
                                                                "start": 234,
                                                                "end": 237
                                                            },
                                                            "optionalToken": null,
                                                            "type": {
                                                                "kind": 139,
                                                                "type": {
                                                                    "kind": 144,
                                                                    "id": {
                                                                        "kind": 134299649,
                                                                        "text": "Array",
                                                                        "rawText": "Array",
                                                                        "flags": 96,
                                                                        "start": 238,
                                                                        "end": 244
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
                                                                                        "text": "Node",
                                                                                        "rawText": "Node",
                                                                                        "flags": 96,
                                                                                        "start": 245,
                                                                                        "end": 249
                                                                                    },
                                                                                    "typeParameters": null,
                                                                                    "flags": 0,
                                                                                    "start": 245,
                                                                                    "end": 249
                                                                                },
                                                                                "flags": 0,
                                                                                "start": 245,
                                                                                "end": 249
                                                                            }
                                                                        ],
                                                                        "flags": 0,
                                                                        "start": 244,
                                                                        "end": 250
                                                                    },
                                                                    "flags": 0,
                                                                    "start": 238,
                                                                    "end": 250
                                                                },
                                                                "flags": 0,
                                                                "start": 237,
                                                                "end": 250
                                                            },
                                                            "initializer": {
                                                                "kind": 134299649,
                                                                "text": "a1",
                                                                "rawText": "a1",
                                                                "flags": 96,
                                                                "start": 252,
                                                                "end": 255
                                                            },
                                                            "flags": 16,
                                                            "start": 234,
                                                            "end": 255
                                                        }
                                                    ],
                                                    "flags": 16,
                                                    "start": 234,
                                                    "end": 255
                                                },
                                                "flags": 16,
                                                "start": 222,
                                                "end": 256
                                            }
                                        ],
                                        "flags": 33,
                                        "start": 180,
                                        "end": 256
                                    },
                                    "flags": 32,
                                    "start": 178,
                                    "end": 262
                                },
                                "flags": 2048,
                                "start": 176,
                                "end": 262
                            },
                            "flags": 2048,
                            "start": 160,
                            "end": 262
                        }
                    ],
                    "flags": 32,
                    "start": 160,
                    "end": 262
                },
                "flags": 158,
                "start": 32,
                "end": 264
            },
            "flags": 16,
            "start": 147,
            "end": 264
        },
        {
            "kind": 178,
            "declareKeyword": null,
            "decorators": null,
            "classKeyword": {
                "kind": 37822544,
                "flags": 81,
                "start": 264,
                "end": 271
            },
            "name": {
                "kind": 134299649,
                "text": "C",
                "rawText": "C",
                "flags": 96,
                "start": 271,
                "end": 273
            },
            "typeParameters": null,
            "tail": {
                "kind": 277,
                "classHeritage": null,
                "body": {
                    "kind": 262,
                    "elements": [
                        {
                            "kind": 280,
                            "decorators": null,
                            "declaredToken": null,
                            "staticToken": null,
                            "asyncKeyword": null,
                            "key": {
                                "kind": 134299649,
                                "text": "x",
                                "rawText": "x",
                                "flags": 96,
                                "start": 275,
                                "end": 281
                            },
                            "optionalToken": null,
                            "type": {
                                "kind": 139,
                                "type": {
                                    "kind": 137,
                                    "types": [
                                        {
                                            "kind": 134217970,
                                            "nullableToken": {
                                                "kind": 134217750,
                                                "flags": 64,
                                                "start": 282,
                                                "end": 284
                                            },
                                            "type": {
                                                "kind": 134234345,
                                                "flags": 64,
                                                "start": 284,
                                                "end": 290
                                            },
                                            "flags": 0,
                                            "start": 282,
                                            "end": 290
                                        },
                                        {
                                            "kind": 134234347,
                                            "flags": 64,
                                            "start": 291,
                                            "end": 297
                                        }
                                    ],
                                    "flags": 0,
                                    "start": 290,
                                    "end": 297
                                },
                                "flags": 0,
                                "start": 281,
                                "end": 297
                            },
                            "initializer": null,
                            "flags": 32,
                            "start": 275,
                            "end": 297
                        },
                        {
                            "kind": 281,
                            "flags": 96,
                            "start": 297,
                            "end": 298
                        },
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
                                    "start": 298,
                                    "end": 314
                                },
                                "typeParameters": null,
                                "formalParameters": {
                                    "kind": 214,
                                    "formalParameterList": [],
                                    "trailingComma": false,
                                    "flags": 2048,
                                    "start": 315,
                                    "end": 316
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
                                                    "kind": 125,
                                                    "left": {
                                                        "kind": 129,
                                                        "member": {
                                                            "kind": 4276321,
                                                            "flags": 97,
                                                            "start": 318,
                                                            "end": 331
                                                        },
                                                        "expression": {
                                                            "kind": 134299649,
                                                            "text": "x",
                                                            "rawText": "x",
                                                            "flags": 96,
                                                            "start": 332,
                                                            "end": 333
                                                        },
                                                        "flags": 536870944,
                                                        "start": 318,
                                                        "end": 333
                                                    },
                                                    "operatorToken": {
                                                        "kind": 4125,
                                                        "flags": 64,
                                                        "start": 333,
                                                        "end": 335
                                                    },
                                                    "right": {
                                                        "kind": 138477575,
                                                        "flags": 96,
                                                        "start": 335,
                                                        "end": 340
                                                    },
                                                    "flags": 32,
                                                    "start": 318,
                                                    "end": 340
                                                },
                                                "flags": 16,
                                                "start": 318,
                                                "end": 341
                                            }
                                        ],
                                        "flags": 33,
                                        "start": 318,
                                        "end": 341
                                    },
                                    "flags": 32,
                                    "start": 316,
                                    "end": 347
                                },
                                "flags": 2048,
                                "start": 314,
                                "end": 347
                            },
                            "flags": 2048,
                            "start": 298,
                            "end": 347
                        }
                    ],
                    "flags": 32,
                    "start": 275,
                    "end": 347
                },
                "flags": 273,
                "start": 32,
                "end": 349
            },
            "flags": 16,
            "start": 264,
            "end": 349
        },
        {
            "kind": 178,
            "declareKeyword": null,
            "decorators": null,
            "classKeyword": {
                "kind": 37822544,
                "flags": 81,
                "start": 349,
                "end": 356
            },
            "name": {
                "kind": 134299649,
                "text": "D",
                "rawText": "D",
                "flags": 96,
                "start": 356,
                "end": 358
            },
            "typeParameters": null,
            "tail": {
                "kind": 277,
                "classHeritage": null,
                "body": {
                    "kind": 262,
                    "elements": [
                        {
                            "kind": 280,
                            "decorators": null,
                            "declaredToken": null,
                            "staticToken": null,
                            "asyncKeyword": null,
                            "key": {
                                "kind": 134299649,
                                "text": "content",
                                "rawText": "content",
                                "flags": 96,
                                "start": 360,
                                "end": 372
                            },
                            "optionalToken": null,
                            "type": {
                                "kind": 139,
                                "type": {
                                    "kind": 137,
                                    "types": [
                                        {
                                            "kind": 134234347,
                                            "flags": 64,
                                            "start": 373,
                                            "end": 380
                                        },
                                        {
                                            "kind": 144,
                                            "id": {
                                                "kind": 134299649,
                                                "text": "C",
                                                "rawText": "C",
                                                "flags": 96,
                                                "start": 381,
                                                "end": 382
                                            },
                                            "typeParameters": null,
                                            "flags": 0,
                                            "start": 381,
                                            "end": 382
                                        }
                                    ],
                                    "flags": 0,
                                    "start": 380,
                                    "end": 382
                                },
                                "flags": 0,
                                "start": 372,
                                "end": 382
                            },
                            "initializer": null,
                            "flags": 32,
                            "start": 360,
                            "end": 382
                        },
                        {
                            "kind": 281,
                            "flags": 96,
                            "start": 382,
                            "end": 383
                        },
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
                                    "text": "copyContent",
                                    "rawText": "copyContent",
                                    "flags": 96,
                                    "start": 383,
                                    "end": 399
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
                                                "text": "content",
                                                "rawText": "content",
                                                "flags": 96,
                                                "start": 400,
                                                "end": 407
                                            },
                                            "optionalToken": null,
                                            "type": {
                                                "kind": 139,
                                                "type": {
                                                    "kind": 144,
                                                    "id": {
                                                        "kind": 134299649,
                                                        "text": "C",
                                                        "rawText": "C",
                                                        "flags": 96,
                                                        "start": 408,
                                                        "end": 410
                                                    },
                                                    "typeParameters": null,
                                                    "flags": 0,
                                                    "start": 408,
                                                    "end": 410
                                                },
                                                "flags": 0,
                                                "start": 407,
                                                "end": 410
                                            },
                                            "right": null,
                                            "flags": 32,
                                            "start": 400,
                                            "end": 410
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "start": 400,
                                    "end": 411
                                },
                                "returnType": {
                                    "kind": 139,
                                    "type": {
                                        "kind": 137,
                                        "types": [
                                            {
                                                "kind": 134234347,
                                                "flags": 64,
                                                "start": 412,
                                                "end": 419
                                            },
                                            {
                                                "kind": 144,
                                                "id": {
                                                    "kind": 134299649,
                                                    "text": "C",
                                                    "rawText": "C",
                                                    "flags": 96,
                                                    "start": 420,
                                                    "end": 421
                                                },
                                                "typeParameters": null,
                                                "flags": 0,
                                                "start": 420,
                                                "end": 421
                                            }
                                        ],
                                        "flags": 0,
                                        "start": 419,
                                        "end": 421
                                    },
                                    "flags": 0,
                                    "start": 411,
                                    "end": 421
                                },
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "directives": [],
                                        "statements": [
                                            {
                                                "kind": 120,
                                                "expression": {
                                                    "kind": 125,
                                                    "left": {
                                                        "kind": 129,
                                                        "member": {
                                                            "kind": 4276321,
                                                            "flags": 97,
                                                            "start": 423,
                                                            "end": 436
                                                        },
                                                        "expression": {
                                                            "kind": 134299649,
                                                            "text": "content",
                                                            "rawText": "content",
                                                            "flags": 96,
                                                            "start": 437,
                                                            "end": 444
                                                        },
                                                        "flags": 536870944,
                                                        "start": 423,
                                                        "end": 444
                                                    },
                                                    "operatorToken": {
                                                        "kind": 4125,
                                                        "flags": 64,
                                                        "start": 444,
                                                        "end": 446
                                                    },
                                                    "right": {
                                                        "kind": 134299649,
                                                        "text": "content",
                                                        "rawText": "content",
                                                        "flags": 96,
                                                        "start": 446,
                                                        "end": 454
                                                    },
                                                    "flags": 32,
                                                    "start": 423,
                                                    "end": 454
                                                },
                                                "flags": 16,
                                                "start": 423,
                                                "end": 455
                                            },
                                            {
                                                "kind": 161,
                                                "returnKeyword": {
                                                    "kind": 37757022,
                                                    "flags": 81,
                                                    "start": 455,
                                                    "end": 470
                                                },
                                                "expression": {
                                                    "kind": 129,
                                                    "member": {
                                                        "kind": 4276321,
                                                        "flags": 96,
                                                        "start": 470,
                                                        "end": 475
                                                    },
                                                    "expression": {
                                                        "kind": 134299649,
                                                        "text": "content",
                                                        "rawText": "content",
                                                        "flags": 96,
                                                        "start": 476,
                                                        "end": 483
                                                    },
                                                    "flags": 536870944,
                                                    "start": 470,
                                                    "end": 483
                                                },
                                                "flags": 16,
                                                "start": 1,
                                                "end": 455
                                            }
                                        ],
                                        "flags": 33,
                                        "start": 423,
                                        "end": 484
                                    },
                                    "flags": 32,
                                    "start": 421,
                                    "end": 490
                                },
                                "flags": 0,
                                "start": 399,
                                "end": 490
                            },
                            "flags": 0,
                            "start": 383,
                            "end": 490
                        }
                    ],
                    "flags": 32,
                    "start": 360,
                    "end": 490
                },
                "flags": 358,
                "start": 32,
                "end": 492
            },
            "flags": 16,
            "start": 349,
            "end": 492
        },
        {
            "kind": 155,
            "declareKeyword": null,
            "varKeyword": {
                "kind": 37757002,
                "flags": 81,
                "start": 492,
                "end": 497
            },
            "declarationList": {
                "kind": 156,
                "declarations": [
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 134299649,
                            "text": "numberAndStringArr",
                            "rawText": "numberAndStringArr",
                            "flags": 96,
                            "start": 497,
                            "end": 516
                        },
                        "optionalToken": null,
                        "type": {
                            "kind": 139,
                            "type": {
                                "kind": 144,
                                "id": {
                                    "kind": 134299649,
                                    "text": "Array",
                                    "rawText": "Array",
                                    "flags": 96,
                                    "start": 517,
                                    "end": 522
                                },
                                "typeParameters": {
                                    "kind": 266,
                                    "parameters": [
                                        {
                                            "kind": 267,
                                            "type": {
                                                "kind": 137,
                                                "types": [
                                                    {
                                                        "kind": 134234345,
                                                        "flags": 64,
                                                        "start": 523,
                                                        "end": 529
                                                    },
                                                    {
                                                        "kind": 134234347,
                                                        "flags": 64,
                                                        "start": 530,
                                                        "end": 536
                                                    }
                                                ],
                                                "flags": 0,
                                                "start": 529,
                                                "end": 536
                                            },
                                            "flags": 0,
                                            "start": 523,
                                            "end": 536
                                        }
                                    ],
                                    "flags": 0,
                                    "start": 522,
                                    "end": 537
                                },
                                "flags": 0,
                                "start": 517,
                                "end": 537
                            },
                            "flags": 0,
                            "start": 516,
                            "end": 537
                        },
                        "initializer": {
                            "kind": 119,
                            "elementList": {
                                "kind": 270,
                                "elements": [
                                    {
                                        "kind": 201392130,
                                        "text": 1,
                                        "rawText": "1",
                                        "flags": 96,
                                        "start": 541,
                                        "end": 542
                                    },
                                    {
                                        "kind": 201392130,
                                        "text": 2,
                                        "rawText": "2",
                                        "flags": 96,
                                        "start": 543,
                                        "end": 544
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 541,
                                "end": 544
                            },
                            "flags": 32,
                            "start": 539,
                            "end": 545
                        },
                        "flags": 16,
                        "start": 497,
                        "end": 545
                    }
                ],
                "flags": 16,
                "start": 497,
                "end": 545
            },
            "flags": 16,
            "start": 492,
            "end": 546
        },
        {
            "kind": 155,
            "declareKeyword": null,
            "varKeyword": {
                "kind": 37757002,
                "flags": 81,
                "start": 546,
                "end": 550
            },
            "declarationList": {
                "kind": 156,
                "declarations": [
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 134299649,
                            "text": "stringArr",
                            "rawText": "stringArr",
                            "flags": 96,
                            "start": 550,
                            "end": 560
                        },
                        "optionalToken": null,
                        "type": {
                            "kind": 139,
                            "type": {
                                "kind": 144,
                                "id": {
                                    "kind": 134299649,
                                    "text": "Array",
                                    "rawText": "Array",
                                    "flags": 96,
                                    "start": 561,
                                    "end": 566
                                },
                                "typeParameters": {
                                    "kind": 266,
                                    "parameters": [
                                        {
                                            "kind": 267,
                                            "type": {
                                                "kind": 134234347,
                                                "flags": 64,
                                                "start": 567,
                                                "end": 573
                                            },
                                            "flags": 0,
                                            "start": 567,
                                            "end": 573
                                        }
                                    ],
                                    "flags": 0,
                                    "start": 566,
                                    "end": 574
                                },
                                "flags": 0,
                                "start": 561,
                                "end": 574
                            },
                            "flags": 0,
                            "start": 560,
                            "end": 574
                        },
                        "initializer": {
                            "kind": 119,
                            "elementList": {
                                "kind": 270,
                                "elements": [
                                    {
                                        "kind": 201392131,
                                        "text": "a",
                                        "rawText": "'a'",
                                        "flags": 4194400,
                                        "start": 578,
                                        "end": 581
                                    },
                                    {
                                        "kind": 201392131,
                                        "text": "b",
                                        "rawText": "'b'",
                                        "flags": 4194400,
                                        "start": 582,
                                        "end": 585
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 4194336,
                                "start": 578,
                                "end": 585
                            },
                            "flags": 32,
                            "start": 576,
                            "end": 586
                        },
                        "flags": 16,
                        "start": 550,
                        "end": 586
                    }
                ],
                "flags": 16,
                "start": 550,
                "end": 586
            },
            "flags": 16,
            "start": 546,
            "end": 587
        }
    ],
    "isModule": false,
    "source": "class Tag {\n    constructor() {\n        var a1: Array<Tag|string> = [];\n        var a2: Array<Tag|string> = a1;\n    }\n}\n\ntype Node = Tag_ | string;\nclass Tag_ {\n    constructor() {\n        var a1: Array<Node> = [new Tag_];\n        var a2: Array<Node> = a1;\n    }\n}\n\nclass C {\n    x: ?number|string;\n    constructor() {\n        this.x = null;\n    }\n}\n\nclass D {\n    content: string|C;\n    copyContent(content: C): string|C {\n        this.content = content;\n        return this.content;\n    }\n}\n\nvar numberAndStringArr:Array<number|string> = [1,2];\nvar stringArr:Array<string> = ['a','b'];",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 587
}
```

### Printed

```javascript

class Tag {
  constructor() {
    var a1 = [];
    var a2 = a1;
  }
}

class Tag_ {
  constructor() {
    var a1 = [new  Tag_()];
    var a2 = a1;
  }
}
class C {
  x;

  constructor() {
    this.x = null;
  }
}
class D {
  content;

  copyContent(content) {
    this.content = content;
    return  this.content;
  }
}
var numberAndStringArr = [1, 2];
var stringArr = ["'a'", "'b'"];
```

### Diagnostics

```javascript
✔ No errors
```
