# Kataw parser test case

## Input

`````js
declare opaque type Test: Foo
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
            "kind": 312,
            "declareToken": {
                "kind": 82165,
                "flags": 64,
                "transformFlags": 0,
                "start": 0,
                "end": 7
            },
            "opaqueToken": {
                "kind": 24822,
                "flags": 64,
                "transformFlags": 0,
                "start": 7,
                "end": 14
            },
            "typeToken": {
                "kind": 24775,
                "flags": 64,
                "transformFlags": 0,
                "start": 14,
                "end": 19
            },
            "name": {
                "kind": 134299649,
                "text": "Test",
                "rawText": "Test",
                "flags": 96,
                "transformFlags": 0,
                "start": 19,
                "end": 24
            },
            "typeParameters": null,
            "superType": {
                "kind": 139,
                "bitwiseOrToken": null,
                "bitwiseAndToken": null,
                "type": {
                    "kind": 144,
                    "typeName": {
                        "kind": 134299649,
                        "text": "Foo",
                        "rawText": "Foo",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 25,
                        "end": 29
                    },
                    "typeParameters": null,
                    "flags": 2097152,
                    "transformFlags": 0,
                    "start": 25,
                    "end": 29
                },
                "flags": 2097152,
                "transformFlags": 0,
                "start": 25,
                "end": 29
            },
            "impltype": null,
            "flags": 2097152,
            "transformFlags": 0,
            "start": 7,
            "end": 29
        }
    ],
    "isModule": false,
    "source": "declare opaque type Test: Foo",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 29
}
```

### Printed

```javascript
declare opaque 
```

### Diagnostics

```javascript
✔ No errors
```

