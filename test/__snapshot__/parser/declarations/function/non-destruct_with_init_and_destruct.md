# Kataw parser test case

## Input

`````js
let foo = arr, [bar] = arr2;
`````

## Options

### Parser Options

`````js
{}
`````

### Printer Options

`````js
{
  "tabWidth": 2,
  "printWidth": 80,
  "useTabs": false,
  "bracketSpacing": true
}
`````

## Output

### Hybrid CST

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
                            "text": "foo",
                            "rawText": "foo",
                            "flags": 96,
                            "start": 3,
                            "end": 7
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": {
                            "kind": 134299649,
                            "text": "arr",
                            "rawText": "arr",
                            "flags": 96,
                            "start": 9,
                            "end": 13
                        },
                        "flags": 16,
                        "start": 3,
                        "end": 13
                    },
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 201,
                            "elementList": {
                                "kind": 202,
                                "elements": [
                                    {
                                        "kind": 244,
                                        "ellipsisToken": null,
                                        "binding": {
                                            "kind": 134299649,
                                            "text": "bar",
                                            "rawText": "bar",
                                            "flags": 96,
                                            "start": 16,
                                            "end": 19
                                        },
                                        "optionalToken": null,
                                        "type": null,
                                        "initializer": null,
                                        "flags": 32,
                                        "start": 16,
                                        "end": 19
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 16,
                                "end": 19
                            },
                            "flags": 32,
                            "start": 14,
                            "end": 20
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": {
                            "kind": 134299649,
                            "text": "arr2",
                            "rawText": "arr2",
                            "flags": 96,
                            "start": 22,
                            "end": 27
                        },
                        "flags": 16,
                        "start": 14,
                        "end": 27
                    }
                ],
                "flags": 33554448,
                "start": 3,
                "end": 27
            },
            "flags": 33554448,
            "start": 0,
            "end": 28
        }
    ],
    "isModule": false,
    "source": "let foo = arr, [bar] = arr2;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 28
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✔ No errors
```
