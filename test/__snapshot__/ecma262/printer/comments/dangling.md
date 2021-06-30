# Kataw parser test case

## Input

`````js
var a = {/* dangling */};
var b = {
  // dangling
};
var b = [/* dangling */];
function d() {
  /* dangling */
}
new Thing(/* dangling */);
Thing(/* dangling */);

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
                "flags": 80,
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
                        "type": null,
                        "initializer": {
                            "kind": 220,
                            "propertyList": {
                                "kind": 218,
                                "properties": [],
                                "trailingComma": false,
                                "flags": 16,
                                "start": 9,
                                "end": 9
                            },
                            "flags": 48,
                            "start": 7,
                            "end": 24
                        },
                        "flags": 16,
                        "start": 3,
                        "end": 24
                    }
                ],
                "flags": 16,
                "start": 3,
                "end": 24
            },
            "flags": 16,
            "start": 0,
            "end": 25
        },
        {
            "kind": 155,
            "declareKeyword": null,
            "varKeyword": {
                "kind": 37757002,
                "flags": 81,
                "start": 25,
                "end": 29
            },
            "declarationList": {
                "kind": 156,
                "declarations": [
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 134299649,
                            "text": "b",
                            "rawText": "b",
                            "flags": 96,
                            "start": 29,
                            "end": 31
                        },
                        "type": null,
                        "initializer": {
                            "kind": 220,
                            "propertyList": {
                                "kind": 218,
                                "properties": [],
                                "trailingComma": false,
                                "flags": 17,
                                "start": 35,
                                "end": 35
                            },
                            "flags": 49,
                            "start": 33,
                            "end": 51
                        },
                        "flags": 16,
                        "start": 29,
                        "end": 51
                    }
                ],
                "flags": 16,
                "start": 29,
                "end": 51
            },
            "flags": 16,
            "start": 25,
            "end": 52
        },
        {
            "kind": 155,
            "declareKeyword": null,
            "varKeyword": {
                "kind": 37757002,
                "flags": 81,
                "start": 52,
                "end": 56
            },
            "declarationList": {
                "kind": 156,
                "declarations": [
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 134299649,
                            "text": "b",
                            "rawText": "b",
                            "flags": 96,
                            "start": 56,
                            "end": 58
                        },
                        "type": null,
                        "initializer": {
                            "kind": 119,
                            "elementList": {
                                "kind": 270,
                                "elements": [],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 62,
                                "end": 62
                            },
                            "flags": 32,
                            "start": 60,
                            "end": 77
                        },
                        "flags": 16,
                        "start": 56,
                        "end": 77
                    }
                ],
                "flags": 16,
                "start": 56,
                "end": 77
            },
            "flags": 16,
            "start": 52,
            "end": 78
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 65,
                "start": 78,
                "end": 87
            },
            "asteriskToken": null,
            "name": {
                "kind": 134299649,
                "text": "d",
                "rawText": "d",
                "flags": 96,
                "start": 87,
                "end": 89
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [],
                "trailingComma": false,
                "flags": 32,
                "start": 90,
                "end": 90
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [],
                    "flags": 33,
                    "start": 93,
                    "end": 93
                },
                "flags": 32,
                "start": 91,
                "end": 112
            },
            "returnType": null,
            "flags": 16,
            "start": 78,
            "end": 112
        },
        {
            "kind": 120,
            "expression": {
                "kind": 210,
                "newKeyword": {
                    "kind": 138477661,
                    "flags": 97,
                    "start": 112,
                    "end": 116
                },
                "expression": {
                    "kind": 134299649,
                    "text": "Thing",
                    "rawText": "Thing",
                    "flags": 96,
                    "start": 116,
                    "end": 122
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 123,
                    "end": 123
                },
                "flags": 97,
                "start": 112,
                "end": 138
            },
            "flags": 16,
            "start": 112,
            "end": 139
        },
        {
            "kind": 120,
            "expression": {
                "kind": 131,
                "expression": {
                    "kind": 134299649,
                    "text": "Thing",
                    "rawText": "Thing",
                    "flags": 96,
                    "start": 139,
                    "end": 145
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 146,
                    "end": 146
                },
                "flags": 268435488,
                "start": 139,
                "end": 161
            },
            "flags": 16,
            "start": 139,
            "end": 162
        }
    ],
    "isModule": false,
    "source": "var a = {/* dangling */};\nvar b = {\n  // dangling\n};\nvar b = [/* dangling */];\nfunction d() {\n  /* dangling */\n}\nnew Thing(/* dangling */);\nThing(/* dangling */);\n",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 163
}
```

### Printed

```javascript

var a = {/* dangling */};
var b = {
 // dangling
};
var b = [/* dangling */];
function d() {
 /* dangling */
}
new Thing(/* dangling */);
Thing(/* dangling */);

```

### Diagnostics

```javascript
✔ No errors
```
