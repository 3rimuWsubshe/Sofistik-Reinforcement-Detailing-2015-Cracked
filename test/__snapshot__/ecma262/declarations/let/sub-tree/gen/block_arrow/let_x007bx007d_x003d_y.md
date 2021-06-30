# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-14
- From: kataw/test/__snapshot__/parser/declarations/let/sub-tree/autogen.md
- Path: kataw/test/__snapshot__/parser/declarations/let/sub-tree/gen/block_arrow
> :: test: block arrow
> :: case: let
>          {} = y
## Options

`````js
{}
`````
## Input

`````js
() => { let
{} = y }
`````
## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "asyncKeyword": null,
                "typeParameters": null,
                "arrowPatameterList": {
                    "kind": 342,
                    "parameters": [],
                    "trailingComma": false,
                    "flags": 0,
                    "start": 1,
                    "end": 1
                },
                "returnType": null,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "start": 2,
                    "end": 5
                },
                "contents": {
                    "kind": 216,
                    "functionStatementList": {
                        "kind": 217,
                        "directives": [],
                        "statements": [
                            {
                                "kind": 162,
                                "lexicalKeyword": {
                                    "kind": 41951307,
                                    "flags": 80,
                                    "start": 7,
                                    "end": 11
                                },
                                "binding": {
                                    "kind": 151,
                                    "bindingList": [
                                        {
                                            "kind": 190,
                                            "binding": {
                                                "kind": 212,
                                                "propertyList": {
                                                    "kind": 213,
                                                    "properties": [],
                                                    "trailingComma": false,
                                                    "flags": 32,
                                                    "start": 13,
                                                    "end": 13
                                                },
                                                "flags": 33,
                                                "start": 11,
                                                "end": 14
                                            },
                                            "type": null,
                                            "initializer": {
                                                "kind": 134299649,
                                                "text": "y",
                                                "rawText": "y",
                                                "flags": 96,
                                                "start": 16,
                                                "end": 18
                                            },
                                            "flags": 16,
                                            "start": 11,
                                            "end": 18
                                        }
                                    ],
                                    "flags": 16,
                                    "start": 11,
                                    "end": 18
                                },
                                "flags": 33554448,
                                "start": 7,
                                "end": 18
                            }
                        ],
                        "flags": 32,
                        "start": 7,
                        "end": 18
                    },
                    "flags": 32,
                    "start": 5,
                    "end": 20
                },
                "flags": 32,
                "start": 0,
                "end": 20
            },
            "flags": 16,
            "start": 0,
            "end": 20
        }
    ],
    "isModule": false,
    "source": "() => { let\n{} = y }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 20
}
```

### Printed

```javascript

() =>  { let { } = y; };

```

### Diagnostics

```javascript
✔ No errors
```
