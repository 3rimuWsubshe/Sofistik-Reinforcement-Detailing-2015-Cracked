# Kataw parser test case

## Input

`````js
{
  inf_leave: // goto emulation
  for (;;) {}
}
{
  inf_leave:
  // goto emulation
  for (; ;) { }
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
            "kind": 124,
            "block": {
                "kind": 249,
                "statements": [
                    {
                        "kind": 163,
                        "label": {
                            "kind": 134299649,
                            "text": "inf_leave",
                            "rawText": "inf_leave",
                            "flags": 96,
                            "start": 1,
                            "end": 13
                        },
                        "colonToken": {
                            "kind": 21,
                            "flags": 64,
                            "start": 13,
                            "end": 14
                        },
                        "statement": {
                            "kind": 165,
                            "forKeyword": {
                                "kind": 37757017,
                                "flags": 81,
                                "start": 14,
                                "end": 38
                            },
                            "initializer": null,
                            "condition": null,
                            "incrementor": null,
                            "statement": {
                                "kind": 124,
                                "block": {
                                    "kind": 249,
                                    "statements": [],
                                    "flags": 16,
                                    "start": 45,
                                    "end": 45
                                },
                                "flags": 16,
                                "start": 43,
                                "end": 46
                            },
                            "flags": 81,
                            "start": 14,
                            "end": 46
                        },
                        "flags": 17,
                        "start": 1,
                        "end": 46
                    }
                ],
                "flags": 17,
                "start": 1,
                "end": 46
            },
            "flags": 16,
            "start": 0,
            "end": 48
        },
        {
            "kind": 124,
            "block": {
                "kind": 249,
                "statements": [
                    {
                        "kind": 163,
                        "label": {
                            "kind": 134299649,
                            "text": "inf_leave",
                            "rawText": "inf_leave",
                            "flags": 96,
                            "start": 50,
                            "end": 62
                        },
                        "colonToken": {
                            "kind": 21,
                            "flags": 64,
                            "start": 62,
                            "end": 63
                        },
                        "statement": {
                            "kind": 165,
                            "forKeyword": {
                                "kind": 37757017,
                                "flags": 81,
                                "start": 63,
                                "end": 89
                            },
                            "initializer": null,
                            "condition": null,
                            "incrementor": null,
                            "statement": {
                                "kind": 124,
                                "block": {
                                    "kind": 249,
                                    "statements": [],
                                    "flags": 16,
                                    "start": 97,
                                    "end": 97
                                },
                                "flags": 16,
                                "start": 95,
                                "end": 99
                            },
                            "flags": 81,
                            "start": 63,
                            "end": 99
                        },
                        "flags": 17,
                        "start": 50,
                        "end": 99
                    }
                ],
                "flags": 17,
                "start": 50,
                "end": 99
            },
            "flags": 17,
            "start": 48,
            "end": 101
        }
    ],
    "isModule": false,
    "source": "{\n  inf_leave: // goto emulation\n  for (;;) {}\n}\n{\n  inf_leave:\n  // goto emulation\n  for (; ;) { }\n}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 101
}
```

### Printed

```javascript

{
  inf_leave:// goto emulation
   for (;;) { }
}
{
  inf_leave: 
   // goto emulation
  for (;;) { }
}

```

### Diagnostics

```javascript
✔ No errors
```
