# Kataw parser test case

## Input

`````js
let tuple1: [number] = [1];
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
            "kind": 162,
            "lexicalKeyword": {
                "kind": 41951307,
                "flags": 80,
                "start": 0,
                "end": 3
            },
            "binding": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 134299649,
                            "text": "tuple1",
                            "rawText": "tuple1",
                            "flags": 96,
                            "start": 3,
                            "end": 10
                        },
                        "optionalToken": null,
                        "type": {
                            "kind": 139,
                            "type": {
                                "kind": 147,
                                "types": [
                                    {
                                        "kind": 134234345,
                                        "flags": 64,
                                        "start": 13,
                                        "end": 19
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 0,
                                "start": 11,
                                "end": 20
                            },
                            "flags": 0,
                            "start": 10,
                            "end": 20
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
                                        "start": 24,
                                        "end": 25
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 24,
                                "end": 25
                            },
                            "flags": 32,
                            "start": 22,
                            "end": 26
                        },
                        "flags": 16,
                        "start": 3,
                        "end": 26
                    }
                ],
                "flags": 33554448,
                "start": 3,
                "end": 26
            },
            "flags": 33554448,
            "start": 0,
            "end": 27
        }
    ],
    "isModule": false,
    "source": "let tuple1: [number] = [1];",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 27
}
```

### Printed

```javascript

let tuple1 = [1];
```

### Diagnostics

```javascript
✔ No errors
```
