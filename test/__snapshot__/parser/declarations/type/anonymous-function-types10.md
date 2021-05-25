# Kataw parser test case

## Input

`````js
var f = (): (number) => 123;
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
                            "text": "f",
                            "rawText": "f",
                            "flags": 96,
                            "start": 3,
                            "end": 5
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": {
                            "kind": 271,
                            "arrowToken": {
                                "kind": 10,
                                "flags": 0,
                                "start": 20,
                                "end": 23
                            },
                            "typeParameters": null,
                            "parameters": [],
                            "asyncKeyword": null,
                            "returnType": {
                                "kind": 139,
                                "type": {
                                    "kind": 260,
                                    "type": {
                                        "kind": 134234345,
                                        "flags": 64,
                                        "start": 13,
                                        "end": 19
                                    },
                                    "flags": 0,
                                    "start": 11,
                                    "end": 20
                                },
                                "flags": 0,
                                "start": 10,
                                "end": 20
                            },
                            "contents": {
                                "kind": 201392130,
                                "text": 123,
                                "rawText": "123",
                                "flags": 96,
                                "start": 23,
                                "end": 27
                            },
                            "flags": 32,
                            "start": 7,
                            "end": 27
                        },
                        "flags": 16,
                        "start": 3,
                        "end": 27
                    }
                ],
                "flags": 16,
                "start": 3,
                "end": 27
            },
            "flags": 16,
            "start": 0,
            "end": 28
        }
    ],
    "isModule": false,
    "source": "var f = (): (number) => 123;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 28
}
```

### Printed

```javascript

var f = () =>  123;
```

### Diagnostics

```javascript
✔ No errors
```
