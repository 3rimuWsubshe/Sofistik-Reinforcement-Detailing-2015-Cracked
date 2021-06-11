# Kataw parser test case

## Input

`````js
declare class x {
  static "string" (): {};
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
                "text": "x",
                "rawText": "x",
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
                                "end": 26
                            },
                            "staticToken": null,
                            "getKeyword": null,
                            "setKeyword": null,
                            "key": {
                                "kind": 201392131,
                                "text": "string",
                                "rawText": "\"string\"",
                                "flags": 96,
                                "start": 26,
                                "end": 35
                            },
                            "optionalToken": null,
                            "value": {
                                "kind": 148,
                                "parameters": {
                                    "kind": 208,
                                    "parameters": [],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "start": 37,
                                    "end": 37
                                },
                                "returnType": {
                                    "kind": 134234353,
                                    "properties": [],
                                    "flags": 0,
                                    "start": 39,
                                    "end": 42
                                },
                                "typeParameters": null,
                                "flags": 0,
                                "start": 35,
                                "end": 42
                            },
                            "flags": 0,
                            "start": 17,
                            "end": 42
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
                                "start": 42,
                                "end": 42
                            },
                            "optionalToken": null,
                            "value": {
                                "kind": 144,
                                "id": {
                                    "kind": 16637,
                                    "text": "",
                                    "flags": 64,
                                    "start": 42,
                                    "end": 42
                                },
                                "typeParameters": null,
                                "flags": 0,
                                "start": 42,
                                "end": 42
                            },
                            "flags": 0,
                            "start": 42,
                            "end": 43
                        }
                    ],
                    "flags": 0,
                    "start": 15,
                    "end": 45
                },
                "flags": 4128,
                "start": 15,
                "end": 45
            },
            "flags": 16,
            "start": 0,
            "end": 45
        }
    ],
    "isModule": false,
    "source": "declare class x {\n  static \"string\" (): {};\n}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 45
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Identifier expected - start: 42, end: 43

```
