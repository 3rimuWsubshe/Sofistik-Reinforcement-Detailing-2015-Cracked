# Kataw parser test case

## Input

`````js
type a = ({} | { ?[x]:string}) => T;
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
                "start": 0,
                "end": 6
            },
            "name": {
                "kind": 134299649,
                "text": "a",
                "rawText": "a",
                "flags": 96,
                "start": 4,
                "end": 6
            },
            "typeParameters": null,
            "type": {
                "kind": 261,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "start": 30,
                    "end": 33
                },
                "parameters": {
                    "kind": 279,
                    "parameters": [
                        {
                            "kind": 137,
                            "types": [
                                {
                                    "kind": 134234353,
                                    "properties": [],
                                    "flags": 0,
                                    "start": 10,
                                    "end": 12
                                },
                                {
                                    "kind": 134234353,
                                    "properties": [
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
                                                "start": 16,
                                                "end": 16
                                            },
                                            "optionalToken": {
                                                "kind": 134217750,
                                                "flags": 64,
                                                "start": 16,
                                                "end": 18
                                            },
                                            "value": {
                                                "kind": 147,
                                                "elementTypes": [
                                                    {
                                                        "kind": 144,
                                                        "id": {
                                                            "kind": 134299649,
                                                            "text": "x",
                                                            "rawText": "x",
                                                            "flags": 96,
                                                            "start": 19,
                                                            "end": 20
                                                        },
                                                        "typeParameters": null,
                                                        "flags": 0,
                                                        "start": 19,
                                                        "end": 20
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "flags": 0,
                                                "start": 18,
                                                "end": 21
                                            },
                                            "flags": 0,
                                            "start": 16,
                                            "end": 21
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
                                                "start": 21,
                                                "end": 21
                                            },
                                            "optionalToken": null,
                                            "value": {
                                                "kind": 134234347,
                                                "flags": 64,
                                                "start": 22,
                                                "end": 28
                                            },
                                            "flags": 0,
                                            "start": 21,
                                            "end": 28
                                        }
                                    ],
                                    "flags": 0,
                                    "start": 14,
                                    "end": 29
                                }
                            ],
                            "flags": 0,
                            "start": 12,
                            "end": 29
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 8,
                    "end": 33
                },
                "returnType": {
                    "kind": 144,
                    "id": {
                        "kind": 134299649,
                        "text": "T",
                        "rawText": "T",
                        "flags": 96,
                        "start": 33,
                        "end": 35
                    },
                    "typeParameters": null,
                    "flags": 0,
                    "start": 33,
                    "end": 35
                },
                "typeParameters": null,
                "flags": 0,
                "start": 8,
                "end": 35
            },
            "flags": 16,
            "start": 0,
            "end": 36
        }
    ],
    "isModule": false,
    "source": "type a = ({} | { ?[x]:string}) => T;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 36
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Identifier expected - start: 16, end: 18
✖ Expected a `;` - start: 21, end: 22

```
