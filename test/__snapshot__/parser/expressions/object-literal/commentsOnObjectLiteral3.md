# Kataw parser test case

## Input

`````js
var v = {
 //property
 prop: 1 /* multiple trailing comments */ /*trailing comments*/,
 //property
 func: function () {
 },
 //PropertyName + CallSignature
 func1() { },
 //getter
 get a() {
  return this.prop;
 } /*trailing 1*/,
 //setter
 set a(value) {
  this.prop = value;
 } // trailing 2
};
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
                            "text": "v",
                            "rawText": "v",
                            "flags": 96,
                            "start": 3,
                            "end": 5
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": {
                            "kind": 220,
                            "propertyList": {
                                "kind": 218,
                                "properties": [
                                    {
                                        "kind": 219,
                                        "generatorToken": null,
                                        "left": {
                                            "kind": 134299649,
                                            "text": "prop",
                                            "rawText": "prop",
                                            "flags": 96,
                                            "start": 9,
                                            "end": 27
                                        },
                                        "right": {
                                            "kind": 201392130,
                                            "text": 1,
                                            "rawText": "1",
                                            "flags": 96,
                                            "start": 28,
                                            "end": 30
                                        },
                                        "flags": 32,
                                        "start": 9,
                                        "end": 30
                                    },
                                    {
                                        "kind": 219,
                                        "generatorToken": null,
                                        "left": {
                                            "kind": 134299649,
                                            "text": "func",
                                            "rawText": "func",
                                            "flags": 96,
                                            "start": 86,
                                            "end": 104
                                        },
                                        "right": {
                                            "kind": 177,
                                            "asyncKeyword": null,
                                            "functionKeyword": {
                                                "kind": 37822554,
                                                "flags": 64,
                                                "start": 105,
                                                "end": 114
                                            },
                                            "generatorToken": null,
                                            "name": null,
                                            "formalParameters": {
                                                "kind": 214,
                                                "formalParameterList": [],
                                                "trailingComma": false,
                                                "flags": 32,
                                                "start": 114,
                                                "end": 117
                                            },
                                            "contents": {
                                                "kind": 216,
                                                "functionStatementList": {
                                                    "kind": 217,
                                                    "directives": [],
                                                    "statements": [],
                                                    "flags": 33,
                                                    "start": 119,
                                                    "end": 119
                                                },
                                                "flags": 32,
                                                "start": 117,
                                                "end": 122
                                            },
                                            "typeParameters": null,
                                            "returnType": null,
                                            "flags": 32,
                                            "start": 105,
                                            "end": 122
                                        },
                                        "flags": 32,
                                        "start": 86,
                                        "end": 122
                                    },
                                    {
                                        "kind": 257,
                                        "asyncKeyword": null,
                                        "generatorToken": null,
                                        "getKeyword": null,
                                        "setKeyword": null,
                                        "method": {
                                            "kind": 209,
                                            "name": {
                                                "kind": 134299649,
                                                "text": "func1",
                                                "rawText": "func1",
                                                "flags": 96,
                                                "start": 123,
                                                "end": 162
                                            },
                                            "typeParameters": null,
                                            "formalParameters": {
                                                "kind": 214,
                                                "formalParameterList": [],
                                                "trailingComma": false,
                                                "flags": 32,
                                                "start": 163,
                                                "end": 164
                                            },
                                            "returnType": null,
                                            "contents": {
                                                "kind": 216,
                                                "functionStatementList": {
                                                    "kind": 217,
                                                    "directives": [],
                                                    "statements": [],
                                                    "flags": 32,
                                                    "start": 166,
                                                    "end": 166
                                                },
                                                "flags": 32,
                                                "start": 164,
                                                "end": 168
                                            },
                                            "flags": 32,
                                            "start": 162,
                                            "end": 168
                                        },
                                        "flags": 32,
                                        "start": 123,
                                        "end": 168
                                    },
                                    {
                                        "kind": 257,
                                        "asyncKeyword": null,
                                        "generatorToken": null,
                                        "getKeyword": {
                                            "kind": 16498,
                                            "flags": 64,
                                            "start": 169,
                                            "end": 184
                                        },
                                        "setKeyword": null,
                                        "method": {
                                            "kind": 209,
                                            "name": {
                                                "kind": 134299649,
                                                "text": "a",
                                                "rawText": "a",
                                                "flags": 96,
                                                "start": 184,
                                                "end": 186
                                            },
                                            "typeParameters": null,
                                            "formalParameters": {
                                                "kind": 214,
                                                "formalParameterList": [],
                                                "trailingComma": false,
                                                "flags": 1056,
                                                "start": 187,
                                                "end": 188
                                            },
                                            "returnType": null,
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
                                                                "start": 190,
                                                                "end": 199
                                                            },
                                                            "expression": {
                                                                "kind": 129,
                                                                "member": {
                                                                    "kind": 4276321,
                                                                    "flags": 96,
                                                                    "start": 199,
                                                                    "end": 204
                                                                },
                                                                "expression": {
                                                                    "kind": 134299649,
                                                                    "text": "prop",
                                                                    "rawText": "prop",
                                                                    "flags": 96,
                                                                    "start": 205,
                                                                    "end": 209
                                                                },
                                                                "flags": 536870944,
                                                                "start": 199,
                                                                "end": 209
                                                            },
                                                            "flags": 16,
                                                            "start": 1,
                                                            "end": 190
                                                        }
                                                    ],
                                                    "flags": 33,
                                                    "start": 190,
                                                    "end": 210
                                                },
                                                "flags": 32,
                                                "start": 188,
                                                "end": 213
                                            },
                                            "flags": 1056,
                                            "start": 186,
                                            "end": 213
                                        },
                                        "flags": 32,
                                        "start": 169,
                                        "end": 213
                                    },
                                    {
                                        "kind": 257,
                                        "asyncKeyword": null,
                                        "generatorToken": null,
                                        "getKeyword": null,
                                        "setKeyword": {
                                            "kind": 16499,
                                            "flags": 64,
                                            "start": 229,
                                            "end": 244
                                        },
                                        "method": {
                                            "kind": 209,
                                            "name": {
                                                "kind": 134299649,
                                                "text": "a",
                                                "rawText": "a",
                                                "flags": 96,
                                                "start": 244,
                                                "end": 246
                                            },
                                            "typeParameters": null,
                                            "formalParameters": {
                                                "kind": 214,
                                                "formalParameterList": [
                                                    {
                                                        "kind": 134299649,
                                                        "text": "value",
                                                        "rawText": "value",
                                                        "flags": 96,
                                                        "start": 247,
                                                        "end": 252
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "flags": 608,
                                                "start": 247,
                                                "end": 253
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
                                                                        "start": 255,
                                                                        "end": 262
                                                                    },
                                                                    "expression": {
                                                                        "kind": 134299649,
                                                                        "text": "prop",
                                                                        "rawText": "prop",
                                                                        "flags": 96,
                                                                        "start": 263,
                                                                        "end": 267
                                                                    },
                                                                    "flags": 536870944,
                                                                    "start": 255,
                                                                    "end": 267
                                                                },
                                                                "operatorToken": {
                                                                    "kind": 4125,
                                                                    "flags": 64,
                                                                    "start": 267,
                                                                    "end": 269
                                                                },
                                                                "right": {
                                                                    "kind": 134299649,
                                                                    "text": "value",
                                                                    "rawText": "value",
                                                                    "flags": 96,
                                                                    "start": 269,
                                                                    "end": 275
                                                                },
                                                                "flags": 32,
                                                                "start": 255,
                                                                "end": 275
                                                            },
                                                            "flags": 16,
                                                            "start": 255,
                                                            "end": 276
                                                        }
                                                    ],
                                                    "flags": 33,
                                                    "start": 255,
                                                    "end": 276
                                                },
                                                "flags": 32,
                                                "start": 253,
                                                "end": 279
                                            },
                                            "flags": 544,
                                            "start": 246,
                                            "end": 279
                                        },
                                        "flags": 32,
                                        "start": 229,
                                        "end": 279
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 17,
                                "start": 9,
                                "end": 279
                            },
                            "flags": 49,
                            "start": 7,
                            "end": 295
                        },
                        "flags": 16,
                        "start": 3,
                        "end": 295
                    }
                ],
                "flags": 16,
                "start": 3,
                "end": 295
            },
            "flags": 16,
            "start": 0,
            "end": 296
        }
    ],
    "isModule": false,
    "source": "var v = {\n //property\n prop: 1 /* multiple trailing comments */ /*trailing comments*/,\n //property\n func: function () {\n },\n //PropertyName + CallSignature\n func1() { },\n //getter\n get a() {\n  return this.prop;\n } /*trailing 1*/,\n //setter\n set a(value) {\n  this.prop = value;\n } // trailing 2\n};",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 296
}
```

### Printed

```javascript

var v = { //property
  prop: 1 /* multiple trailing comments */ /*trailing comments*/, //property
  func: function () {}, //PropertyName + CallSignature
  //PropertyName + CallSignature
  func1() {}, //getter
  get a() {
    return  this.prop;
  } /*trailing 1*/, //setter
  set a(value) {
    this.prop = value;
  } // trailing 2
   };
```

### Diagnostics

```javascript
✔ No errors
```
