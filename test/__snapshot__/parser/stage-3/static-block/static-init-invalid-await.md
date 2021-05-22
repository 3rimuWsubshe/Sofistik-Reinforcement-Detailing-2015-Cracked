# Kataw parser test case

## Options

`````js
{ jsx: true, disableWebCompat: true, next: true }
`````

## Input

`````js
async function f() {
  class C {
    static {
      await 0;
    }
  }
}
`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": {
                "kind": 82031,
                "flags": 64,
                "start": 0,
                "end": 5
            },
            "functionKeyword": {
                "kind": 37822554,
                "flags": 0,
                "start": 5,
                "end": 14
            },
            "generatorToken": null,
            "name": {
                "kind": 134299649,
                "text": "f",
                "rawText": "f",
                "flags": 96,
                "start": 14,
                "end": 16
            },
            "formalParameters": {
                "kind": 214,
                "formalParameterList": [],
                "trailingComma": false,
                "flags": 32,
                "start": 16,
                "end": 18
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [
                        {
                            "kind": 178,
                            "declareKeyword": null,
                            "decorators": null,
                            "classKeyword": {
                                "kind": 37822544,
                                "flags": 1,
                                "start": 20,
                                "end": 28
                            },
                            "name": {
                                "kind": 134299649,
                                "text": "C",
                                "rawText": "C",
                                "flags": 96,
                                "start": 28,
                                "end": 30
                            },
                            "typeParameters": null,
                            "tail": {
                                "kind": 277,
                                "classHeritage": null,
                                "body": {
                                    "kind": 262,
                                    "elements": [
                                        {
                                            "kind": 263,
                                            "decorators": null,
                                            "declaredKeyword": null,
                                            "staticKeyword": null,
                                            "block": {
                                                "kind": 124,
                                                "block": {
                                                    "kind": 249,
                                                    "statements": [
                                                        {
                                                            "kind": 120,
                                                            "expression": {
                                                                "kind": 134299649,
                                                                "text": "await",
                                                                "rawText": "await",
                                                                "flags": 96,
                                                                "start": 45,
                                                                "end": 57
                                                            },
                                                            "flags": 16,
                                                            "start": 45,
                                                            "end": 57
                                                        },
                                                        {
                                                            "kind": 120,
                                                            "expression": {
                                                                "kind": 201392130,
                                                                "text": 0,
                                                                "rawText": "0",
                                                                "flags": 96,
                                                                "start": 57,
                                                                "end": 59
                                                            },
                                                            "flags": 16,
                                                            "start": 57,
                                                            "end": 60
                                                        }
                                                    ],
                                                    "flags": 17,
                                                    "start": 45,
                                                    "end": 60
                                                },
                                                "flags": 16,
                                                "start": 32,
                                                "end": 66
                                            },
                                            "flags": 32,
                                            "start": 32,
                                            "end": 66
                                        }
                                    ],
                                    "flags": 32,
                                    "start": 32,
                                    "end": 66
                                },
                                "flags": 32,
                                "start": 30,
                                "end": 70
                            },
                            "flags": 16,
                            "start": 20,
                            "end": 70
                        }
                    ],
                    "flags": 33,
                    "start": 20,
                    "end": 70
                },
                "flags": 32,
                "start": 18,
                "end": 72
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 144,
            "start": 0,
            "end": 72
        }
    ],
    "isModule": false,
    "source": "async function f() {\n  class C {\n    static {\n      await 0;\n    }\n  }\n}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 72
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Expected a `;` - start: 57, end: 59

```
