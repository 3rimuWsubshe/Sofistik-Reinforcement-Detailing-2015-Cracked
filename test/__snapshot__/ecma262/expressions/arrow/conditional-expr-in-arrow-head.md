# Kataw parser test case

## Input

`````js
(a, foo ? bar : baz) => {}
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
                "kind": 121,
                "expression": {
                    "kind": 132,
                    "expressions": [
                        {
                            "kind": 134299649,
                            "text": "a",
                            "rawText": "a",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 1,
                            "end": 2
                        },
                        {
                            "kind": 197,
                            "shortCircuit": {
                                "kind": 134299649,
                                "text": "foo",
                                "rawText": "foo",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 3,
                                "end": 7
                            },
                            "questionToken": {
                                "kind": 134217750,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 7,
                                "end": 9
                            },
                            "consequent": {
                                "kind": 134299649,
                                "text": "bar",
                                "rawText": "bar",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 9,
                                "end": 13
                            },
                            "colonToken": {
                                "kind": 21,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 13,
                                "end": 15
                            },
                            "alternate": {
                                "kind": 134299649,
                                "text": "baz",
                                "rawText": "baz",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 15,
                                "end": 19
                            },
                            "flags": 96,
                            "transformFlags": 4096,
                            "start": 0,
                            "end": 19
                        }
                    ],
                    "flags": 32,
                    "transformFlags": 1024,
                    "start": 0,
                    "end": 20
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 0,
                "end": 20
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 0,
            "end": 20
        },
        {
            "kind": 124,
            "block": {
                "kind": 249,
                "statements": [],
                "flags": 16,
                "transformFlags": 0,
                "start": 25,
                "end": 25
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 23,
            "end": 26
        }
    ],
    "isModule": false,
    "source": "(a, foo ? bar : baz) => {}",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 26
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ '=>' is not allowed here. Did you mean ';'? - start: 20, end: 23

```

