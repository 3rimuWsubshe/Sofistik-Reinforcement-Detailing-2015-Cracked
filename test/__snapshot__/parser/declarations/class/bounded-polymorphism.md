# Kataw parser test case

## Input

`````js
class A<T: Foo> {}
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
            "declareKeyword": null,
            "decorators": null,
            "classKeyword": {
                "kind": 37822544,
                "flags": 0,
                "start": 0,
                "end": 5
            },
            "name": {
                "kind": 134299649,
                "text": "A",
                "rawText": "A",
                "flags": 96,
                "start": 5,
                "end": 7
            },
            "typeParameters": {
                "kind": 265,
                "typeParameters": [
                    {
                        "kind": 146,
                        "name": {
                            "kind": 134299649,
                            "text": "T",
                            "rawText": "T",
                            "flags": 96,
                            "start": 8,
                            "end": 9
                        },
                        "type": {
                            "kind": 139,
                            "type": {
                                "kind": 144,
                                "id": {
                                    "kind": 134299649,
                                    "text": "Foo",
                                    "rawText": "Foo",
                                    "flags": 96,
                                    "start": 10,
                                    "end": 14
                                },
                                "typeParameters": null,
                                "flags": 0,
                                "start": 10,
                                "end": 14
                            },
                            "flags": 0,
                            "start": 9,
                            "end": 14
                        },
                        "defaultType": null,
                        "flags": 0,
                        "start": 8,
                        "end": 14
                    }
                ],
                "flags": 0,
                "start": 7,
                "end": 15
            },
            "tail": {
                "kind": 277,
                "classHeritage": null,
                "body": {
                    "kind": 262,
                    "elements": [],
                    "flags": 32,
                    "start": 17,
                    "end": 17
                },
                "flags": 15,
                "start": 32,
                "end": 18
            },
            "flags": 16,
            "start": 0,
            "end": 18
        }
    ],
    "isModule": false,
    "source": "class A<T: Foo> {}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 18
}
```

### Printed

```javascript

class A {}
```

### Diagnostics

```javascript
✔ No errors
```
