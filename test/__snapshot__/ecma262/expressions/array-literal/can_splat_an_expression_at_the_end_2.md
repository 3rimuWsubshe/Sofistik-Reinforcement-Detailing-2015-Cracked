# Kataw parser test case

## Input

`````js
[x, ...z + arr, y]
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

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 120,
            "expression": {
                "kind": 119,
                "elementList": {
                    "kind": 270,
                    "elements": [
                        {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "start": 1,
                            "end": 2
                        },
                        {
                            "kind": 223,
                            "ellipsisToken": {
                                "kind": 524302,
                                "flags": 64,
                                "start": 3,
                                "end": 7
                            },
                            "argument": {
                                "kind": 198,
                                "left": {
                                    "kind": 134299649,
                                    "text": "z",
                                    "rawText": "z",
                                    "flags": 96,
                                    "start": 7,
                                    "end": 8
                                },
                                "operatorToken": {
                                    "kind": 99634,
                                    "flags": 96,
                                    "start": 8,
                                    "end": 10
                                },
                                "right": {
                                    "kind": 134299649,
                                    "text": "arr",
                                    "rawText": "arr",
                                    "flags": 96,
                                    "start": 10,
                                    "end": 14
                                },
                                "flags": 32,
                                "start": 7,
                                "end": 14
                            },
                            "flags": 1073741856,
                            "start": 3,
                            "end": 14
                        },
                        {
                            "kind": 134299649,
                            "text": "y",
                            "rawText": "y",
                            "flags": 96,
                            "start": 15,
                            "end": 17
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 1,
                    "end": 17
                },
                "flags": 32,
                "start": 0,
                "end": 18
            },
            "flags": 16,
            "start": 0,
            "end": 18
        }
    ],
    "isModule": false,
    "source": "[x, ...z + arr, y]",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 18
}
```

### Printed

```javascript

[x, ...z + arr, y,];

```

### Diagnostics

```javascript
✔ No errors
```
