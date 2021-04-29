# Kataw parser test case

## Input

`````js
var a: number[];

var a: Map<string, Array<string>>;

var a: Map<string, Array<string> >;

var x: typeof Y = Y;

var x : () => number | () => string = fn;

var foo = bar ? (foo) : number => {} : baz;

var a: {numVal: number;};

var foo = bar ? (foo) : number;

var foo = ((bar): number => bar);

var foo = ((): number => bar);

var foo = async (bar): number => bar;

var foo = async (): number => bar;

var foo = async (foo: bar, bar: foo) => {}

var foo = (): number => bar;

var a: {param1: number; param2?: string}

var [x]: Array<string> = [ "hello" ];

var {x}: {x: string } = { x: "hello" };

var {x}: {x: string; } = { x: "hello" };

var a: ?{numVal: number};

var x: typeof Y | number = Y;

var a: {subObj: {strVal: string}}

class Array { concat(items:number | string) {}; }
`````

## Options

### Parser Options

`````js
{ allowTypes : true }
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 155,
            "declareKeyword": null,
            "varKeyword": {
                "kind": 37757002,
                "flags": 0,
                "start": 0,
                "end": 3
            },
            "declarationList": {
                "kind": 156,
                "declarations": [
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 134299649,
                            "text": "a",
                            "rawText": "a",
                            "flags": 96,
                            "start": 3,
                            "end": 5
                        },
                        "optionalToken": null,
                        "type": {
                            "kind": 139,
                            "type": {
                                "kind": 136,
                                "type": {
                                    "kind": 134234345,
                                    "flags": 64,
                                    "start": 6,
                                    "end": 13
                                },
                                "flags": 0,
                                "start": 14,
                                "end": 15
                            },
                            "flags": 0,
                            "start": 5,
                            "end": 15
                        },
                        "initializer": null,
                        "flags": 16,
                        "start": 3,
                        "end": 15
                    }
                ],
                "flags": 16,
                "start": 3,
                "end": 15
            },
            "flags": 16,
            "start": 0,
            "end": 16
        },
        {
            "kind": 155,
            "declareKeyword": null,
            "varKeyword": {
                "kind": 37757002,
                "flags": 1,
                "start": 16,
                "end": 21
            },
            "declarationList": {
                "kind": 156,
                "declarations": [
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 134299649,
                            "text": "a",
                            "rawText": "a",
                            "flags": 96,
                            "start": 21,
                            "end": 23
                        },
                        "optionalToken": null,
                        "type": {
                            "kind": 139,
                            "type": {
                                "kind": 144,
                                "id": {
                                    "kind": 134299649,
                                    "text": "Map",
                                    "rawText": "Map",
                                    "flags": 96,
                                    "start": 24,
                                    "end": 28
                                },
                                "typeParameters": {
                                    "kind": 146,
                                    "types": [
                                        {
                                            "kind": 134234347,
                                            "flags": 64,
                                            "start": 29,
                                            "end": 35
                                        },
                                        {
                                            "kind": 144,
                                            "id": {
                                                "kind": 134299649,
                                                "text": "Array",
                                                "rawText": "Array",
                                                "flags": 96,
                                                "start": 36,
                                                "end": 42
                                            },
                                            "typeParameters": {
                                                "kind": 146,
                                                "types": [
                                                    {
                                                        "kind": 134234347,
                                                        "flags": 64,
                                                        "start": 43,
                                                        "end": 49
                                                    }
                                                ],
                                                "flags": 0,
                                                "start": 42,
                                                "end": 50
                                            },
                                            "flags": 0,
                                            "start": 36,
                                            "end": 50
                                        }
                                    ],
                                    "flags": 0,
                                    "start": 28,
                                    "end": 51
                                },
                                "flags": 0,
                                "start": 24,
                                "end": 51
                            },
                            "flags": 0,
                            "start": 23,
                            "end": 51
                        },
                        "initializer": null,
                        "flags": 16,
                        "start": 21,
                        "end": 51
                    }
                ],
                "flags": 16,
                "start": 21,
                "end": 51
            },
            "flags": 16,
            "start": 16,
            "end": 52
        },
        {
            "kind": 155,
            "declareKeyword": null,
            "varKeyword": {
                "kind": 37757002,
                "flags": 1,
                "start": 52,
                "end": 57
            },
            "declarationList": {
                "kind": 156,
                "declarations": [
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 134299649,
                            "text": "a",
                            "rawText": "a",
                            "flags": 96,
                            "start": 57,
                            "end": 59
                        },
                        "optionalToken": null,
                        "type": {
                            "kind": 139,
                            "type": {
                                "kind": 144,
                                "id": {
                                    "kind": 134299649,
                                    "text": "Map",
                                    "rawText": "Map",
                                    "flags": 96,
                                    "start": 60,
                                    "end": 64
                                },
                                "typeParameters": {
                                    "kind": 146,
                                    "types": [
                                        {
                                            "kind": 134234347,
                                            "flags": 64,
                                            "start": 65,
                                            "end": 71
                                        },
                                        {
                                            "kind": 144,
                                            "id": {
                                                "kind": 134299649,
                                                "text": "Array",
                                                "rawText": "Array",
                                                "flags": 96,
                                                "start": 72,
                                                "end": 78
                                            },
                                            "typeParameters": {
                                                "kind": 146,
                                                "types": [
                                                    {
                                                        "kind": 134234347,
                                                        "flags": 64,
                                                        "start": 79,
                                                        "end": 85
                                                    }
                                                ],
                                                "flags": 0,
                                                "start": 78,
                                                "end": 86
                                            },
                                            "flags": 0,
                                            "start": 72,
                                            "end": 86
                                        }
                                    ],
                                    "flags": 0,
                                    "start": 64,
                                    "end": 88
                                },
                                "flags": 0,
                                "start": 60,
                                "end": 88
                            },
                            "flags": 0,
                            "start": 59,
                            "end": 88
                        },
                        "initializer": null,
                        "flags": 16,
                        "start": 57,
                        "end": 88
                    }
                ],
                "flags": 16,
                "start": 57,
                "end": 88
            },
            "flags": 16,
            "start": 52,
            "end": 89
        },
        {
            "kind": 155,
            "declareKeyword": null,
            "varKeyword": {
                "kind": 37757002,
                "flags": 1,
                "start": 89,
                "end": 94
            },
            "declarationList": {
                "kind": 156,
                "declarations": [
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "start": 94,
                            "end": 96
                        },
                        "optionalToken": null,
                        "type": {
                            "kind": 139,
                            "type": {
                                "kind": 134299891,
                                "type": {
                                    "kind": 144,
                                    "id": {
                                        "kind": 134299649,
                                        "text": "Y",
                                        "rawText": "Y",
                                        "flags": 96,
                                        "start": 104,
                                        "end": 106
                                    },
                                    "typeParameters": null,
                                    "flags": 0,
                                    "start": 104,
                                    "end": 106
                                },
                                "flags": 0,
                                "start": 97,
                                "end": 106
                            },
                            "flags": 0,
                            "start": 96,
                            "end": 106
                        },
                        "initializer": {
                            "kind": 134299649,
                            "text": "Y",
                            "rawText": "Y",
                            "flags": 96,
                            "start": 108,
                            "end": 110
                        },
                        "flags": 16,
                        "start": 94,
                        "end": 110
                    }
                ],
                "flags": 16,
                "start": 94,
                "end": 110
            },
            "flags": 16,
            "start": 89,
            "end": 111
        },
        {
            "kind": 155,
            "declareKeyword": null,
            "varKeyword": {
                "kind": 37757002,
                "flags": 1,
                "start": 111,
                "end": 116
            },
            "declarationList": {
                "kind": 156,
                "declarations": [
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "start": 116,
                            "end": 118
                        },
                        "optionalToken": null,
                        "type": {
                            "kind": 139,
                            "type": {
                                "kind": 148,
                                "parameters": {
                                    "kind": 208,
                                    "functionTypeParameterList": [],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "start": 122,
                                    "end": 122
                                },
                                "returnType": {
                                    "kind": 137,
                                    "types": [
                                        {
                                            "kind": 134234345,
                                            "flags": 64,
                                            "start": 126,
                                            "end": 133
                                        },
                                        {
                                            "kind": 148,
                                            "parameters": {
                                                "kind": 208,
                                                "functionTypeParameterList": [],
                                                "trailingComma": false,
                                                "flags": 32,
                                                "start": 137,
                                                "end": 137
                                            },
                                            "returnType": {
                                                "kind": 134234347,
                                                "flags": 64,
                                                "start": 141,
                                                "end": 148
                                            },
                                            "typeParameters": null,
                                            "flags": 0,
                                            "start": 135,
                                            "end": 148
                                        }
                                    ],
                                    "flags": 0,
                                    "start": 133,
                                    "end": 148
                                },
                                "typeParameters": null,
                                "flags": 0,
                                "start": 120,
                                "end": 148
                            },
                            "flags": 0,
                            "start": 118,
                            "end": 148
                        },
                        "initializer": {
                            "kind": 134299649,
                            "text": "fn",
                            "rawText": "fn",
                            "flags": 96,
                            "start": 150,
                            "end": 153
                        },
                        "flags": 16,
                        "start": 116,
                        "end": 153
                    }
                ],
                "flags": 16,
                "start": 116,
                "end": 153
            },
            "flags": 16,
            "start": 111,
            "end": 154
        },
        {
            "kind": 155,
            "declareKeyword": null,
            "varKeyword": {
                "kind": 37757002,
                "flags": 1,
                "start": 154,
                "end": 159
            },
            "declarationList": {
                "kind": 156,
                "declarations": [
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 134299649,
                            "text": "foo",
                            "rawText": "foo",
                            "flags": 96,
                            "start": 159,
                            "end": 163
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": {
                            "kind": 197,
                            "shortCircuit": {
                                "kind": 134299649,
                                "text": "bar",
                                "rawText": "bar",
                                "flags": 96,
                                "start": 165,
                                "end": 169
                            },
                            "questionToken": {
                                "kind": 134217750,
                                "flags": 0,
                                "start": 169,
                                "end": 171
                            },
                            "consequent": {
                                "kind": 271,
                                "arrowToken": {
                                    "kind": 10,
                                    "flags": 0,
                                    "start": 186,
                                    "end": 189
                                },
                                "typeParameters": null,
                                "parameters": [
                                    {
                                        "kind": 134299649,
                                        "text": "foo",
                                        "rawText": "foo",
                                        "flags": 96,
                                        "start": 173,
                                        "end": 176
                                    }
                                ],
                                "asyncToken": null,
                                "returnType": {
                                    "kind": 139,
                                    "type": {
                                        "kind": 134234345,
                                        "flags": 64,
                                        "start": 179,
                                        "end": 186
                                    },
                                    "flags": 0,
                                    "start": 177,
                                    "end": 186
                                },
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "directives": [],
                                        "statements": [],
                                        "flags": 32,
                                        "start": 191,
                                        "end": 191
                                    },
                                    "flags": 32,
                                    "start": 189,
                                    "end": 192
                                },
                                "flags": 32,
                                "start": 171,
                                "end": 192
                            },
                            "colonToken": {
                                "kind": 21,
                                "flags": 0,
                                "start": 192,
                                "end": 194
                            },
                            "alternate": {
                                "kind": 134299649,
                                "text": "baz",
                                "rawText": "baz",
                                "flags": 96,
                                "start": 194,
                                "end": 198
                            },
                            "flags": 32,
                            "start": 165,
                            "end": 198
                        },
                        "flags": 16,
                        "start": 159,
                        "end": 198
                    }
                ],
                "flags": 16,
                "start": 159,
                "end": 198
            },
            "flags": 16,
            "start": 154,
            "end": 199
        },
        {
            "kind": 155,
            "declareKeyword": null,
            "varKeyword": {
                "kind": 37757002,
                "flags": 1,
                "start": 199,
                "end": 204
            },
            "declarationList": {
                "kind": 156,
                "declarations": [
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 134299649,
                            "text": "a",
                            "rawText": "a",
                            "flags": 96,
                            "start": 204,
                            "end": 206
                        },
                        "optionalToken": null,
                        "type": {
                            "kind": 139,
                            "type": {
                                "kind": 134234353,
                                "properties": [
                                    {
                                        "kind": 193,
                                        "key": {
                                            "kind": 134299649,
                                            "text": "numVal",
                                            "rawText": "numVal",
                                            "flags": 96,
                                            "start": 209,
                                            "end": 215
                                        },
                                        "value": {
                                            "kind": 134234345,
                                            "flags": 64,
                                            "start": 216,
                                            "end": 223
                                        },
                                        "optionalToken": null,
                                        "staticToken": false,
                                        "flags": 0,
                                        "start": 209,
                                        "end": 223
                                    }
                                ],
                                "indexers": [],
                                "callProperties": [],
                                "internalSlots": [],
                                "flags": 0,
                                "start": 207,
                                "end": 225
                            },
                            "flags": 0,
                            "start": 206,
                            "end": 225
                        },
                        "initializer": null,
                        "flags": 16,
                        "start": 204,
                        "end": 225
                    }
                ],
                "flags": 16,
                "start": 204,
                "end": 225
            },
            "flags": 16,
            "start": 199,
            "end": 226
        },
        {
            "kind": 155,
            "declareKeyword": null,
            "varKeyword": {
                "kind": 37757002,
                "flags": 1,
                "start": 226,
                "end": 231
            },
            "declarationList": {
                "kind": 156,
                "declarations": [
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 134299649,
                            "text": "foo",
                            "rawText": "foo",
                            "flags": 96,
                            "start": 231,
                            "end": 235
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": {
                            "kind": 197,
                            "shortCircuit": {
                                "kind": 134299649,
                                "text": "bar",
                                "rawText": "bar",
                                "flags": 96,
                                "start": 237,
                                "end": 241
                            },
                            "questionToken": {
                                "kind": 134217750,
                                "flags": 0,
                                "start": 241,
                                "end": 243
                            },
                            "consequent": {
                                "kind": 121,
                                "expression": {
                                    "kind": 134299649,
                                    "text": "foo",
                                    "rawText": "foo",
                                    "flags": 96,
                                    "start": 245,
                                    "end": 248
                                },
                                "flags": 32,
                                "start": 243,
                                "end": 249
                            },
                            "colonToken": {
                                "kind": 21,
                                "flags": 0,
                                "start": 249,
                                "end": 251
                            },
                            "alternate": {
                                "kind": 134299649,
                                "text": "number",
                                "rawText": "number",
                                "flags": 96,
                                "start": 251,
                                "end": 258
                            },
                            "flags": 32,
                            "start": 237,
                            "end": 258
                        },
                        "flags": 16,
                        "start": 231,
                        "end": 258
                    }
                ],
                "flags": 16,
                "start": 231,
                "end": 258
            },
            "flags": 16,
            "start": 226,
            "end": 259
        },
        {
            "kind": 155,
            "declareKeyword": null,
            "varKeyword": {
                "kind": 37757002,
                "flags": 1,
                "start": 259,
                "end": 264
            },
            "declarationList": {
                "kind": 156,
                "declarations": [
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 134299649,
                            "text": "foo",
                            "rawText": "foo",
                            "flags": 96,
                            "start": 264,
                            "end": 268
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": {
                            "kind": 121,
                            "expression": {
                                "kind": 271,
                                "arrowToken": {
                                    "kind": 10,
                                    "flags": 0,
                                    "start": 285,
                                    "end": 288
                                },
                                "typeParameters": null,
                                "parameters": [
                                    {
                                        "kind": 134299649,
                                        "text": "bar",
                                        "rawText": "bar",
                                        "flags": 96,
                                        "start": 273,
                                        "end": 276
                                    }
                                ],
                                "asyncToken": null,
                                "returnType": {
                                    "kind": 139,
                                    "type": {
                                        "kind": 134234345,
                                        "flags": 64,
                                        "start": 278,
                                        "end": 285
                                    },
                                    "flags": 0,
                                    "start": 277,
                                    "end": 285
                                },
                                "contents": {
                                    "kind": 134299649,
                                    "text": "bar",
                                    "rawText": "bar",
                                    "flags": 96,
                                    "start": 288,
                                    "end": 292
                                },
                                "flags": 32,
                                "start": 272,
                                "end": 292
                            },
                            "flags": 32,
                            "start": 270,
                            "end": 293
                        },
                        "flags": 16,
                        "start": 264,
                        "end": 293
                    }
                ],
                "flags": 16,
                "start": 264,
                "end": 293
            },
            "flags": 16,
            "start": 259,
            "end": 294
        },
        {
            "kind": 155,
            "declareKeyword": null,
            "varKeyword": {
                "kind": 37757002,
                "flags": 1,
                "start": 294,
                "end": 299
            },
            "declarationList": {
                "kind": 156,
                "declarations": [
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 134299649,
                            "text": "foo",
                            "rawText": "foo",
                            "flags": 96,
                            "start": 299,
                            "end": 303
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": {
                            "kind": 121,
                            "expression": {
                                "kind": 271,
                                "arrowToken": {
                                    "kind": 10,
                                    "flags": 0,
                                    "start": 317,
                                    "end": 320
                                },
                                "typeParameters": null,
                                "parameters": [],
                                "asyncToken": null,
                                "returnType": {
                                    "kind": 139,
                                    "type": {
                                        "kind": 134234345,
                                        "flags": 64,
                                        "start": 310,
                                        "end": 317
                                    },
                                    "flags": 0,
                                    "start": 309,
                                    "end": 317
                                },
                                "contents": {
                                    "kind": 134299649,
                                    "text": "bar",
                                    "rawText": "bar",
                                    "flags": 96,
                                    "start": 320,
                                    "end": 324
                                },
                                "flags": 32,
                                "start": 307,
                                "end": 324
                            },
                            "flags": 32,
                            "start": 305,
                            "end": 325
                        },
                        "flags": 16,
                        "start": 299,
                        "end": 325
                    }
                ],
                "flags": 16,
                "start": 299,
                "end": 325
            },
            "flags": 16,
            "start": 294,
            "end": 326
        },
        {
            "kind": 155,
            "declareKeyword": null,
            "varKeyword": {
                "kind": 37757002,
                "flags": 1,
                "start": 326,
                "end": 331
            },
            "declarationList": {
                "kind": 156,
                "declarations": [
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 134299649,
                            "text": "foo",
                            "rawText": "foo",
                            "flags": 96,
                            "start": 331,
                            "end": 335
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": {
                            "kind": 271,
                            "arrowToken": {
                                "kind": 10,
                                "flags": 0,
                                "start": 357,
                                "end": 360
                            },
                            "typeParameters": null,
                            "parameters": [
                                {
                                    "kind": 134299649,
                                    "text": "bar",
                                    "rawText": "bar",
                                    "flags": 96,
                                    "start": 345,
                                    "end": 348
                                }
                            ],
                            "asyncToken": {
                                "kind": 82031,
                                "flags": 64,
                                "start": 337,
                                "end": 343
                            },
                            "returnType": {
                                "kind": 139,
                                "type": {
                                    "kind": 134234345,
                                    "flags": 64,
                                    "start": 350,
                                    "end": 357
                                },
                                "flags": 0,
                                "start": 349,
                                "end": 357
                            },
                            "contents": {
                                "kind": 134299649,
                                "text": "bar",
                                "rawText": "bar",
                                "flags": 96,
                                "start": 360,
                                "end": 364
                            },
                            "flags": 288,
                            "start": 337,
                            "end": 364
                        },
                        "flags": 16,
                        "start": 331,
                        "end": 364
                    }
                ],
                "flags": 16,
                "start": 331,
                "end": 364
            },
            "flags": 16,
            "start": 326,
            "end": 365
        },
        {
            "kind": 155,
            "declareKeyword": null,
            "varKeyword": {
                "kind": 37757002,
                "flags": 1,
                "start": 365,
                "end": 370
            },
            "declarationList": {
                "kind": 156,
                "declarations": [
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 134299649,
                            "text": "foo",
                            "rawText": "foo",
                            "flags": 96,
                            "start": 370,
                            "end": 374
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": {
                            "kind": 271,
                            "arrowToken": {
                                "kind": 10,
                                "flags": 0,
                                "start": 393,
                                "end": 396
                            },
                            "typeParameters": null,
                            "parameters": [],
                            "asyncToken": {
                                "kind": 82031,
                                "flags": 64,
                                "start": 376,
                                "end": 382
                            },
                            "returnType": {
                                "kind": 139,
                                "type": {
                                    "kind": 134234345,
                                    "flags": 64,
                                    "start": 386,
                                    "end": 393
                                },
                                "flags": 0,
                                "start": 385,
                                "end": 393
                            },
                            "contents": {
                                "kind": 134299649,
                                "text": "bar",
                                "rawText": "bar",
                                "flags": 96,
                                "start": 396,
                                "end": 400
                            },
                            "flags": 288,
                            "start": 376,
                            "end": 400
                        },
                        "flags": 16,
                        "start": 370,
                        "end": 400
                    }
                ],
                "flags": 16,
                "start": 370,
                "end": 400
            },
            "flags": 16,
            "start": 365,
            "end": 401
        },
        {
            "kind": 155,
            "declareKeyword": null,
            "varKeyword": {
                "kind": 37757002,
                "flags": 1,
                "start": 401,
                "end": 406
            },
            "declarationList": {
                "kind": 156,
                "declarations": [
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 134299649,
                            "text": "foo",
                            "rawText": "foo",
                            "flags": 96,
                            "start": 406,
                            "end": 410
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": {
                            "kind": 271,
                            "arrowToken": {
                                "kind": 10,
                                "flags": 0,
                                "start": 439,
                                "end": 442
                            },
                            "typeParameters": null,
                            "parameters": [
                                {
                                    "kind": 215,
                                    "ellipsisToken": null,
                                    "binding": {
                                        "kind": 134299649,
                                        "text": "foo",
                                        "rawText": "foo",
                                        "flags": 96,
                                        "start": 420,
                                        "end": 423
                                    },
                                    "optionalToken": null,
                                    "type": {
                                        "kind": 139,
                                        "type": {
                                            "kind": 144,
                                            "id": {
                                                "kind": 134299649,
                                                "text": "bar",
                                                "rawText": "bar",
                                                "flags": 96,
                                                "start": 424,
                                                "end": 428
                                            },
                                            "typeParameters": null,
                                            "flags": 0,
                                            "start": 424,
                                            "end": 428
                                        },
                                        "flags": 0,
                                        "start": 423,
                                        "end": 428
                                    },
                                    "initializer": null,
                                    "flags": 32,
                                    "start": 420,
                                    "end": 428
                                },
                                {
                                    "kind": 215,
                                    "ellipsisToken": null,
                                    "binding": {
                                        "kind": 134299649,
                                        "text": "bar",
                                        "rawText": "bar",
                                        "flags": 96,
                                        "start": 429,
                                        "end": 433
                                    },
                                    "optionalToken": null,
                                    "type": {
                                        "kind": 139,
                                        "type": {
                                            "kind": 144,
                                            "id": {
                                                "kind": 134299649,
                                                "text": "foo",
                                                "rawText": "foo",
                                                "flags": 96,
                                                "start": 434,
                                                "end": 438
                                            },
                                            "typeParameters": null,
                                            "flags": 0,
                                            "start": 434,
                                            "end": 438
                                        },
                                        "flags": 0,
                                        "start": 433,
                                        "end": 438
                                    },
                                    "initializer": null,
                                    "flags": 32,
                                    "start": 429,
                                    "end": 438
                                }
                            ],
                            "asyncToken": {
                                "kind": 82031,
                                "flags": 64,
                                "start": 412,
                                "end": 418
                            },
                            "returnType": null,
                            "contents": {
                                "kind": 216,
                                "functionStatementList": {
                                    "kind": 217,
                                    "directives": [],
                                    "statements": [],
                                    "flags": 32,
                                    "start": 444,
                                    "end": 444
                                },
                                "flags": 32,
                                "start": 442,
                                "end": 445
                            },
                            "flags": 288,
                            "start": 412,
                            "end": 445
                        },
                        "flags": 16,
                        "start": 406,
                        "end": 445
                    }
                ],
                "flags": 16,
                "start": 406,
                "end": 445
            },
            "flags": 16,
            "start": 401,
            "end": 445
        },
        {
            "kind": 155,
            "declareKeyword": null,
            "varKeyword": {
                "kind": 37757002,
                "flags": 1,
                "start": 445,
                "end": 450
            },
            "declarationList": {
                "kind": 156,
                "declarations": [
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 134299649,
                            "text": "foo",
                            "rawText": "foo",
                            "flags": 96,
                            "start": 450,
                            "end": 454
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": {
                            "kind": 271,
                            "arrowToken": {
                                "kind": 10,
                                "flags": 0,
                                "start": 467,
                                "end": 470
                            },
                            "typeParameters": null,
                            "parameters": [],
                            "asyncToken": null,
                            "returnType": {
                                "kind": 139,
                                "type": {
                                    "kind": 134234345,
                                    "flags": 64,
                                    "start": 460,
                                    "end": 467
                                },
                                "flags": 0,
                                "start": 459,
                                "end": 467
                            },
                            "contents": {
                                "kind": 134299649,
                                "text": "bar",
                                "rawText": "bar",
                                "flags": 96,
                                "start": 470,
                                "end": 474
                            },
                            "flags": 32,
                            "start": 456,
                            "end": 474
                        },
                        "flags": 16,
                        "start": 450,
                        "end": 474
                    }
                ],
                "flags": 16,
                "start": 450,
                "end": 474
            },
            "flags": 16,
            "start": 445,
            "end": 475
        },
        {
            "kind": 155,
            "declareKeyword": null,
            "varKeyword": {
                "kind": 37757002,
                "flags": 1,
                "start": 475,
                "end": 480
            },
            "declarationList": {
                "kind": 156,
                "declarations": [
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 134299649,
                            "text": "a",
                            "rawText": "a",
                            "flags": 96,
                            "start": 480,
                            "end": 482
                        },
                        "optionalToken": null,
                        "type": {
                            "kind": 139,
                            "type": {
                                "kind": 134234353,
                                "properties": [
                                    {
                                        "kind": 193,
                                        "key": {
                                            "kind": 134299649,
                                            "text": "param1",
                                            "rawText": "param1",
                                            "flags": 96,
                                            "start": 485,
                                            "end": 491
                                        },
                                        "value": {
                                            "kind": 134234345,
                                            "flags": 64,
                                            "start": 492,
                                            "end": 499
                                        },
                                        "optionalToken": null,
                                        "staticToken": false,
                                        "flags": 0,
                                        "start": 485,
                                        "end": 499
                                    },
                                    {
                                        "kind": 193,
                                        "key": {
                                            "kind": 134299649,
                                            "text": "param2",
                                            "rawText": "param2",
                                            "flags": 96,
                                            "start": 500,
                                            "end": 507
                                        },
                                        "value": {
                                            "kind": 134234347,
                                            "flags": 64,
                                            "start": 509,
                                            "end": 516
                                        },
                                        "optionalToken": {
                                            "kind": 134217750,
                                            "flags": 64,
                                            "start": 507,
                                            "end": 508
                                        },
                                        "staticToken": false,
                                        "flags": 0,
                                        "start": 500,
                                        "end": 516
                                    }
                                ],
                                "indexers": [],
                                "callProperties": [],
                                "internalSlots": [],
                                "flags": 0,
                                "start": 483,
                                "end": 517
                            },
                            "flags": 0,
                            "start": 482,
                            "end": 517
                        },
                        "initializer": null,
                        "flags": 16,
                        "start": 480,
                        "end": 517
                    }
                ],
                "flags": 16,
                "start": 480,
                "end": 517
            },
            "flags": 16,
            "start": 475,
            "end": 517
        },
        {
            "kind": 155,
            "declareKeyword": null,
            "varKeyword": {
                "kind": 37757002,
                "flags": 1,
                "start": 517,
                "end": 522
            },
            "declarationList": {
                "kind": 156,
                "declarations": [
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 201,
                            "elementList": {
                                "kind": 202,
                                "elements": [
                                    {
                                        "kind": 244,
                                        "ellipsisToken": null,
                                        "binding": {
                                            "kind": 134299649,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 96,
                                            "start": 524,
                                            "end": 525
                                        },
                                        "optionalToken": null,
                                        "type": null,
                                        "initializer": null,
                                        "flags": 32,
                                        "start": 524,
                                        "end": 525
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 524,
                                "end": 525
                            },
                            "flags": 32,
                            "start": 522,
                            "end": 526
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
                                    "start": 527,
                                    "end": 533
                                },
                                "typeParameters": {
                                    "kind": 146,
                                    "types": [
                                        {
                                            "kind": 134234347,
                                            "flags": 64,
                                            "start": 534,
                                            "end": 540
                                        }
                                    ],
                                    "flags": 0,
                                    "start": 533,
                                    "end": 541
                                },
                                "flags": 0,
                                "start": 527,
                                "end": 541
                            },
                            "flags": 0,
                            "start": 526,
                            "end": 541
                        },
                        "initializer": {
                            "kind": 119,
                            "elementList": {
                                "kind": 270,
                                "elements": [
                                    {
                                        "kind": 201392131,
                                        "text": "hello",
                                        "rawText": "hello",
                                        "flags": 96,
                                        "start": 545,
                                        "end": 553
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 545,
                                "end": 553
                            },
                            "flags": 32,
                            "start": 543,
                            "end": 555
                        },
                        "flags": 16,
                        "start": 522,
                        "end": 555
                    }
                ],
                "flags": 16,
                "start": 522,
                "end": 555
            },
            "flags": 16,
            "start": 517,
            "end": 556
        },
        {
            "kind": 155,
            "declareKeyword": null,
            "varKeyword": {
                "kind": 37757002,
                "flags": 1,
                "start": 556,
                "end": 561
            },
            "declarationList": {
                "kind": 156,
                "declarations": [
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 212,
                            "propertyList": {
                                "kind": 213,
                                "properties": [
                                    {
                                        "kind": 222,
                                        "ellipsisToken": null,
                                        "left": {
                                            "kind": 134299649,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 96,
                                            "start": 563,
                                            "end": 564
                                        },
                                        "right": null,
                                        "flags": 32,
                                        "start": 563,
                                        "end": 564
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 563,
                                "end": 564
                            },
                            "flags": 32,
                            "start": 561,
                            "end": 565
                        },
                        "optionalToken": null,
                        "type": {
                            "kind": 139,
                            "type": {
                                "kind": 134234353,
                                "properties": [
                                    {
                                        "kind": 193,
                                        "key": {
                                            "kind": 134299649,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 96,
                                            "start": 568,
                                            "end": 569
                                        },
                                        "value": {
                                            "kind": 134234347,
                                            "flags": 64,
                                            "start": 570,
                                            "end": 577
                                        },
                                        "optionalToken": null,
                                        "staticToken": false,
                                        "flags": 0,
                                        "start": 568,
                                        "end": 577
                                    }
                                ],
                                "indexers": [],
                                "callProperties": [],
                                "internalSlots": [],
                                "flags": 0,
                                "start": 566,
                                "end": 579
                            },
                            "flags": 0,
                            "start": 565,
                            "end": 579
                        },
                        "initializer": {
                            "kind": 220,
                            "propertyList": {
                                "kind": 218,
                                "properties": [
                                    {
                                        "kind": 219,
                                        "generatorToken": null,
                                        "asyncKeyword": null,
                                        "getKeyword": null,
                                        "setKeyword": null,
                                        "left": {
                                            "kind": 201392131,
                                            "text": "hello",
                                            "rawText": "hello",
                                            "flags": 96,
                                            "start": 586,
                                            "end": 594
                                        },
                                        "right": {
                                            "kind": 134299649,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 96,
                                            "start": 583,
                                            "end": 585
                                        },
                                        "flags": 32,
                                        "start": 583,
                                        "end": 594
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 16,
                                "start": 583,
                                "end": 594
                            },
                            "flags": 32,
                            "start": 581,
                            "end": 596
                        },
                        "flags": 16,
                        "start": 561,
                        "end": 596
                    }
                ],
                "flags": 16,
                "start": 561,
                "end": 596
            },
            "flags": 16,
            "start": 556,
            "end": 597
        },
        {
            "kind": 155,
            "declareKeyword": null,
            "varKeyword": {
                "kind": 37757002,
                "flags": 1,
                "start": 597,
                "end": 602
            },
            "declarationList": {
                "kind": 156,
                "declarations": [
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 212,
                            "propertyList": {
                                "kind": 213,
                                "properties": [
                                    {
                                        "kind": 222,
                                        "ellipsisToken": null,
                                        "left": {
                                            "kind": 134299649,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 96,
                                            "start": 604,
                                            "end": 605
                                        },
                                        "right": null,
                                        "flags": 32,
                                        "start": 604,
                                        "end": 605
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 604,
                                "end": 605
                            },
                            "flags": 32,
                            "start": 602,
                            "end": 606
                        },
                        "optionalToken": null,
                        "type": {
                            "kind": 139,
                            "type": {
                                "kind": 134234353,
                                "properties": [
                                    {
                                        "kind": 193,
                                        "key": {
                                            "kind": 134299649,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 96,
                                            "start": 609,
                                            "end": 610
                                        },
                                        "value": {
                                            "kind": 134234347,
                                            "flags": 64,
                                            "start": 611,
                                            "end": 618
                                        },
                                        "optionalToken": null,
                                        "staticToken": false,
                                        "flags": 0,
                                        "start": 609,
                                        "end": 618
                                    }
                                ],
                                "indexers": [],
                                "callProperties": [],
                                "internalSlots": [],
                                "flags": 0,
                                "start": 607,
                                "end": 621
                            },
                            "flags": 0,
                            "start": 606,
                            "end": 621
                        },
                        "initializer": {
                            "kind": 220,
                            "propertyList": {
                                "kind": 218,
                                "properties": [
                                    {
                                        "kind": 219,
                                        "generatorToken": null,
                                        "asyncKeyword": null,
                                        "getKeyword": null,
                                        "setKeyword": null,
                                        "left": {
                                            "kind": 201392131,
                                            "text": "hello",
                                            "rawText": "hello",
                                            "flags": 96,
                                            "start": 628,
                                            "end": 636
                                        },
                                        "right": {
                                            "kind": 134299649,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 96,
                                            "start": 625,
                                            "end": 627
                                        },
                                        "flags": 32,
                                        "start": 625,
                                        "end": 636
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 16,
                                "start": 625,
                                "end": 636
                            },
                            "flags": 32,
                            "start": 623,
                            "end": 638
                        },
                        "flags": 16,
                        "start": 602,
                        "end": 638
                    }
                ],
                "flags": 16,
                "start": 602,
                "end": 638
            },
            "flags": 16,
            "start": 597,
            "end": 639
        },
        {
            "kind": 155,
            "declareKeyword": null,
            "varKeyword": {
                "kind": 37757002,
                "flags": 1,
                "start": 639,
                "end": 644
            },
            "declarationList": {
                "kind": 156,
                "declarations": [
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 134299649,
                            "text": "a",
                            "rawText": "a",
                            "flags": 96,
                            "start": 644,
                            "end": 646
                        },
                        "optionalToken": null,
                        "type": {
                            "kind": 139,
                            "type": {
                                "kind": 134217970,
                                "type": {
                                    "kind": 134234353,
                                    "properties": [
                                        {
                                            "kind": 193,
                                            "key": {
                                                "kind": 134299649,
                                                "text": "numVal",
                                                "rawText": "numVal",
                                                "flags": 96,
                                                "start": 650,
                                                "end": 656
                                            },
                                            "value": {
                                                "kind": 134234345,
                                                "flags": 64,
                                                "start": 657,
                                                "end": 664
                                            },
                                            "optionalToken": null,
                                            "staticToken": false,
                                            "flags": 0,
                                            "start": 650,
                                            "end": 664
                                        }
                                    ],
                                    "indexers": [],
                                    "callProperties": [],
                                    "internalSlots": [],
                                    "flags": 0,
                                    "start": 649,
                                    "end": 665
                                },
                                "flags": 0,
                                "start": 647,
                                "end": 665
                            },
                            "flags": 0,
                            "start": 646,
                            "end": 665
                        },
                        "initializer": null,
                        "flags": 16,
                        "start": 644,
                        "end": 665
                    }
                ],
                "flags": 16,
                "start": 644,
                "end": 665
            },
            "flags": 16,
            "start": 639,
            "end": 666
        },
        {
            "kind": 155,
            "declareKeyword": null,
            "varKeyword": {
                "kind": 37757002,
                "flags": 1,
                "start": 666,
                "end": 671
            },
            "declarationList": {
                "kind": 156,
                "declarations": [
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "start": 671,
                            "end": 673
                        },
                        "optionalToken": null,
                        "type": {
                            "kind": 139,
                            "type": {
                                "kind": 137,
                                "types": [
                                    {
                                        "kind": 134299891,
                                        "type": {
                                            "kind": 144,
                                            "id": {
                                                "kind": 134299649,
                                                "text": "Y",
                                                "rawText": "Y",
                                                "flags": 96,
                                                "start": 681,
                                                "end": 683
                                            },
                                            "typeParameters": null,
                                            "flags": 0,
                                            "start": 681,
                                            "end": 683
                                        },
                                        "flags": 0,
                                        "start": 674,
                                        "end": 683
                                    },
                                    {
                                        "kind": 134234345,
                                        "flags": 64,
                                        "start": 685,
                                        "end": 692
                                    }
                                ],
                                "flags": 0,
                                "start": 683,
                                "end": 692
                            },
                            "flags": 0,
                            "start": 673,
                            "end": 692
                        },
                        "initializer": {
                            "kind": 134299649,
                            "text": "Y",
                            "rawText": "Y",
                            "flags": 96,
                            "start": 694,
                            "end": 696
                        },
                        "flags": 16,
                        "start": 671,
                        "end": 696
                    }
                ],
                "flags": 16,
                "start": 671,
                "end": 696
            },
            "flags": 16,
            "start": 666,
            "end": 697
        },
        {
            "kind": 155,
            "declareKeyword": null,
            "varKeyword": {
                "kind": 37757002,
                "flags": 1,
                "start": 697,
                "end": 702
            },
            "declarationList": {
                "kind": 156,
                "declarations": [
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 134299649,
                            "text": "a",
                            "rawText": "a",
                            "flags": 96,
                            "start": 702,
                            "end": 704
                        },
                        "optionalToken": null,
                        "type": {
                            "kind": 139,
                            "type": {
                                "kind": 134234353,
                                "properties": [
                                    {
                                        "kind": 193,
                                        "key": {
                                            "kind": 134299649,
                                            "text": "subObj",
                                            "rawText": "subObj",
                                            "flags": 96,
                                            "start": 707,
                                            "end": 713
                                        },
                                        "value": {
                                            "kind": 134234353,
                                            "properties": [
                                                {
                                                    "kind": 193,
                                                    "key": {
                                                        "kind": 134299649,
                                                        "text": "strVal",
                                                        "rawText": "strVal",
                                                        "flags": 96,
                                                        "start": 716,
                                                        "end": 722
                                                    },
                                                    "value": {
                                                        "kind": 134234347,
                                                        "flags": 64,
                                                        "start": 723,
                                                        "end": 730
                                                    },
                                                    "optionalToken": null,
                                                    "staticToken": false,
                                                    "flags": 0,
                                                    "start": 716,
                                                    "end": 730
                                                }
                                            ],
                                            "indexers": [],
                                            "callProperties": [],
                                            "internalSlots": [],
                                            "flags": 0,
                                            "start": 714,
                                            "end": 731
                                        },
                                        "optionalToken": null,
                                        "staticToken": false,
                                        "flags": 0,
                                        "start": 707,
                                        "end": 731
                                    }
                                ],
                                "indexers": [],
                                "callProperties": [],
                                "internalSlots": [],
                                "flags": 0,
                                "start": 705,
                                "end": 732
                            },
                            "flags": 0,
                            "start": 704,
                            "end": 732
                        },
                        "initializer": null,
                        "flags": 16,
                        "start": 702,
                        "end": 732
                    }
                ],
                "flags": 16,
                "start": 702,
                "end": 732
            },
            "flags": 16,
            "start": 697,
            "end": 732
        },
        {
            "kind": 178,
            "declareKeyword": null,
            "decorators": null,
            "classKeyword": {
                "kind": 37822544,
                "flags": 1,
                "start": 732,
                "end": 739
            },
            "name": {
                "kind": 134299649,
                "text": "Array",
                "rawText": "Array",
                "flags": 96,
                "start": 739,
                "end": 745
            },
            "typeParameters": null,
            "classHeritage": null,
            "members": {
                "kind": 277,
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
                                "text": "concat",
                                "rawText": "concat",
                                "flags": 96,
                                "start": 747,
                                "end": 754
                            },
                            "typeParameters": null,
                            "formalParameters": {
                                "kind": 214,
                                "formalParameterList": [
                                    {
                                        "kind": 215,
                                        "ellipsisToken": null,
                                        "binding": {
                                            "kind": 134299649,
                                            "text": "items",
                                            "rawText": "items",
                                            "flags": 96,
                                            "start": 755,
                                            "end": 760
                                        },
                                        "optionalToken": null,
                                        "type": {
                                            "kind": 139,
                                            "type": {
                                                "kind": 137,
                                                "types": [
                                                    {
                                                        "kind": 134234345,
                                                        "flags": 64,
                                                        "start": 761,
                                                        "end": 767
                                                    },
                                                    {
                                                        "kind": 134234347,
                                                        "flags": 64,
                                                        "start": 769,
                                                        "end": 776
                                                    }
                                                ],
                                                "flags": 0,
                                                "start": 767,
                                                "end": 776
                                            },
                                            "flags": 0,
                                            "start": 760,
                                            "end": 776
                                        },
                                        "initializer": null,
                                        "flags": 32,
                                        "start": 755,
                                        "end": 776
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 755,
                                "end": 777
                            },
                            "type": null,
                            "contents": {
                                "kind": 216,
                                "functionStatementList": {
                                    "kind": 217,
                                    "directives": [],
                                    "statements": [],
                                    "flags": 32,
                                    "start": 779,
                                    "end": 779
                                },
                                "flags": 32,
                                "start": 777,
                                "end": 780
                            },
                            "flags": 0,
                            "start": 754,
                            "end": 780
                        },
                        "flags": 0,
                        "start": 747,
                        "end": 780
                    },
                    {
                        "kind": 281,
                        "flags": 96,
                        "start": 780,
                        "end": 781
                    }
                ],
                "flags": 32,
                "start": 747,
                "end": 783
            },
            "flags": 16,
            "start": 732,
            "end": 783
        }
    ],
    "isModule": false,
    "source": "var a: number[];\n\nvar a: Map<string, Array<string>>;\n\nvar a: Map<string, Array<string> >;\n\nvar x: typeof Y = Y;\n\nvar x : () => number | () => string = fn;\n\nvar foo = bar ? (foo) : number => {} : baz;\n\nvar a: {numVal: number;};\n\nvar foo = bar ? (foo) : number;\n\nvar foo = ((bar): number => bar);\n\nvar foo = ((): number => bar);\n\nvar foo = async (bar): number => bar;\n\nvar foo = async (): number => bar;\n\nvar foo = async (foo: bar, bar: foo) => {}\n\nvar foo = (): number => bar;\n\nvar a: {param1: number; param2?: string}\n\nvar [x]: Array<string> = [ \"hello\" ];\n\nvar {x}: {x: string } = { x: \"hello\" };\n\nvar {x}: {x: string; } = { x: \"hello\" };\n\nvar a: ?{numVal: number};\n\nvar x: typeof Y | number = Y;\n\nvar a: {subObj: {strVal: string}}\n\nclass Array { concat(items:number | string) {}; }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 783
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✔ No errors
```
