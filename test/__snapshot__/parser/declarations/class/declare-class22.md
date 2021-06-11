# Kataw parser test case

## Input

`````js
declare class C {
    static x: number;
    static foo(x: number): void;
    constructor(x: string): void;
}

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
            "declareKeyword": {
                "kind": 82165,
                "flags": 64,
                "start": 0,
                "end": 7
            },
            "decorators": null,
            "classKeyword": {
                "kind": 37822544,
                "flags": 80,
                "start": 0,
                "end": 13
            },
            "name": {
                "kind": 134299649,
                "text": "C",
                "rawText": "C",
                "flags": 96,
                "start": 13,
                "end": 15
            },
            "typeParameters": null,
            "tail": {
                "kind": 277,
                "classHeritage": null,
                "body": {
                    "kind": 134234353,
                    "properties": [
                        {
                            "kind": 193,
                            "protoKeyword": {
                                "kind": 8388716,
                                "flags": 65,
                                "start": 17,
                                "end": 28
                            },
                            "staticToken": null,
                            "getKeyword": null,
                            "setKeyword": null,
                            "key": {
                                "kind": 134299649,
                                "text": "x",
                                "rawText": "x",
                                "flags": 96,
                                "start": 28,
                                "end": 30
                            },
                            "optionalToken": null,
                            "value": {
                                "kind": 134234345,
                                "flags": 64,
                                "start": 31,
                                "end": 38
                            },
                            "flags": 0,
                            "start": 17,
                            "end": 39
                        },
                        {
                            "kind": 193,
                            "protoKeyword": {
                                "kind": 8388716,
                                "flags": 65,
                                "start": 39,
                                "end": 50
                            },
                            "staticToken": null,
                            "getKeyword": null,
                            "setKeyword": null,
                            "key": {
                                "kind": 134299649,
                                "text": "foo",
                                "rawText": "foo",
                                "flags": 96,
                                "start": 50,
                                "end": 54
                            },
                            "optionalToken": null,
                            "value": {
                                "kind": 148,
                                "parameters": {
                                    "kind": 208,
                                    "parameters": [
                                        {
                                            "kind": 149,
                                            "ellipsisToken": null,
                                            "name": {
                                                "kind": 134299649,
                                                "text": "x",
                                                "rawText": "x",
                                                "flags": 96,
                                                "start": 55,
                                                "end": 56
                                            },
                                            "optionalToken": null,
                                            "types": {
                                                "kind": 134234345,
                                                "flags": 64,
                                                "start": 57,
                                                "end": 64
                                            },
                                            "flags": 0,
                                            "start": 55,
                                            "end": 64
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "start": 55,
                                    "end": 64
                                },
                                "returnType": {
                                    "kind": 138477615,
                                    "flags": 64,
                                    "start": 66,
                                    "end": 71
                                },
                                "typeParameters": null,
                                "flags": 0,
                                "start": 54,
                                "end": 71
                            },
                            "flags": 0,
                            "start": 39,
                            "end": 71
                        },
                        {
                            "kind": 193,
                            "protoKeyword": null,
                            "staticToken": null,
                            "getKeyword": null,
                            "setKeyword": null,
                            "key": {
                                "kind": 16637,
                                "text": "",
                                "flags": 64,
                                "start": 71,
                                "end": 71
                            },
                            "optionalToken": null,
                            "value": {
                                "kind": 144,
                                "id": {
                                    "kind": 16637,
                                    "text": "",
                                    "flags": 64,
                                    "start": 71,
                                    "end": 71
                                },
                                "typeParameters": null,
                                "flags": 0,
                                "start": 71,
                                "end": 71
                            },
                            "flags": 0,
                            "start": 71,
                            "end": 72
                        },
                        {
                            "kind": 193,
                            "protoKeyword": null,
                            "staticToken": null,
                            "getKeyword": null,
                            "setKeyword": null,
                            "key": {
                                "kind": 134299649,
                                "text": "constructor",
                                "rawText": "constructor",
                                "flags": 96,
                                "start": 72,
                                "end": 88
                            },
                            "optionalToken": null,
                            "value": {
                                "kind": 148,
                                "parameters": {
                                    "kind": 208,
                                    "parameters": [
                                        {
                                            "kind": 149,
                                            "ellipsisToken": null,
                                            "name": {
                                                "kind": 134299649,
                                                "text": "x",
                                                "rawText": "x",
                                                "flags": 96,
                                                "start": 89,
                                                "end": 90
                                            },
                                            "optionalToken": null,
                                            "types": {
                                                "kind": 134234347,
                                                "flags": 64,
                                                "start": 91,
                                                "end": 98
                                            },
                                            "flags": 0,
                                            "start": 89,
                                            "end": 98
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "start": 89,
                                    "end": 98
                                },
                                "returnType": {
                                    "kind": 138477615,
                                    "flags": 64,
                                    "start": 100,
                                    "end": 105
                                },
                                "typeParameters": null,
                                "flags": 0,
                                "start": 88,
                                "end": 105
                            },
                            "flags": 0,
                            "start": 72,
                            "end": 105
                        },
                        {
                            "kind": 193,
                            "protoKeyword": null,
                            "staticToken": null,
                            "getKeyword": null,
                            "setKeyword": null,
                            "key": {
                                "kind": 16637,
                                "text": "",
                                "flags": 64,
                                "start": 105,
                                "end": 105
                            },
                            "optionalToken": null,
                            "value": {
                                "kind": 144,
                                "id": {
                                    "kind": 16637,
                                    "text": "",
                                    "flags": 64,
                                    "start": 105,
                                    "end": 105
                                },
                                "typeParameters": null,
                                "flags": 0,
                                "start": 105,
                                "end": 105
                            },
                            "flags": 0,
                            "start": 105,
                            "end": 106
                        }
                    ],
                    "flags": 0,
                    "start": 15,
                    "end": 108
                },
                "flags": 4128,
                "start": 15,
                "end": 108
            },
            "flags": 16,
            "start": 0,
            "end": 108
        }
    ],
    "isModule": false,
    "source": "declare class C {\n    static x: number;\n    static foo(x: number): void;\n    constructor(x: string): void;\n}\n",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 109
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Identifier expected - start: 71, end: 72
✖ Identifier expected - start: 105, end: 106

```
