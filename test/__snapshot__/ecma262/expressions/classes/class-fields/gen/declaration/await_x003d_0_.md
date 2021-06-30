# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-14
- From: kataw/test/__snapshot__/parser/expressions/classes/class-fields/autogen.md
- Path: kataw/test/__snapshot__/parser/expressions/classes/class-fields/gen/declaration
> :: test: declaration
> :: case: await = 0;
## Options

`````js
{}
`````
## Input

`````js
class C { await = 0; }
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
                "text": "C",
                "rawText": "C",
                "flags": 96,
                "start": 5,
                "end": 7
            },
            "typeParameters": null,
            "tail": {
                "kind": 277,
                "classHeritage": null,
                "body": {
                    "kind": 303,
                    "elements": [
                        {
                            "kind": 280,
                            "decorators": null,
                            "declaredToken": null,
                            "staticKeyword": null,
                            "asyncKeyword": null,
                            "key": {
                                "kind": 134299649,
                                "text": "await",
                                "rawText": "await",
                                "flags": 96,
                                "start": 9,
                                "end": 15
                            },
                            "optionalToken": null,
                            "type": null,
                            "initializer": {
                                "kind": 201392130,
                                "text": 0,
                                "rawText": "0",
                                "flags": 96,
                                "start": 17,
                                "end": 19
                            },
                            "flags": 32,
                            "start": 9,
                            "end": 19
                        },
                        {
                            "kind": 1108353041,
                            "flags": 64,
                            "start": 19,
                            "end": 20
                        }
                    ],
                    "flags": 32,
                    "start": 9,
                    "end": 20
                },
                "flags": 7,
                "start": 32,
                "end": 22
            },
            "flags": 16,
            "start": 0,
            "end": 22
        }
    ],
    "isModule": false,
    "source": "class C { await = 0; }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 22
}
```

### Printed

```javascript

class C {
  await = 0
  ;
}

```

### Diagnostics

```javascript
✔ No errors
```
