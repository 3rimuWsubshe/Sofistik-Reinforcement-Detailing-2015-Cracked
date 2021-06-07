# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-06
- From: kataw8/test\__snapshot__/parser/miscellaneous/should-pass/autogen.md
- Path: kataw8/test\__snapshot__\parser\miscellaneous\should-pass\gen\stand-alone
> :: test: stand-alone
> :: case: fn = ({text = "default", ...props}) => text + props.children
## Input

`````js
fn = ({text = "default", ...props}) => text + props.children
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
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "fn",
                    "rawText": "fn",
                    "flags": 96,
                    "start": 0,
                    "end": 2
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 64,
                    "start": 2,
                    "end": 4
                },
                "right": {
                    "kind": 271,
                    "arrowToken": {
                        "kind": 10,
                        "flags": 64,
                        "start": 35,
                        "end": 38
                    },
                    "typeParameters": null,
                    "parameters": [
                        {
                            "kind": 212,
                            "propertyList": {
                                "kind": 213,
                                "properties": [
                                    {
                                        "kind": 281,
                                        "ellipsisToken": null,
                                        "left": {
                                            "kind": 134299649,
                                            "text": "text",
                                            "rawText": "text",
                                            "flags": 96,
                                            "start": 7,
                                            "end": 11
                                        },
                                        "optionalToken": null,
                                        "type": null,
                                        "right": {
                                            "kind": 201392131,
                                            "text": "default",
                                            "rawText": "\"default\"",
                                            "flags": 96,
                                            "start": 13,
                                            "end": 23
                                        },
                                        "flags": 32,
                                        "start": 7,
                                        "end": 23
                                    },
                                    {
                                        "kind": 281,
                                        "ellipsisToken": {
                                            "kind": 524302,
                                            "flags": 64,
                                            "start": 24,
                                            "end": 28
                                        },
                                        "left": {
                                            "kind": 134299649,
                                            "text": "props",
                                            "rawText": "props",
                                            "flags": 96,
                                            "start": 28,
                                            "end": 33
                                        },
                                        "optionalToken": null,
                                        "type": null,
                                        "right": null,
                                        "flags": 32,
                                        "start": 24,
                                        "end": 33
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 7,
                                "end": 33
                            },
                            "flags": 32,
                            "start": 6,
                            "end": 34
                        }
                    ],
                    "asyncKeyword": null,
                    "returnType": null,
                    "contents": {
                        "kind": 198,
                        "left": {
                            "kind": 134299649,
                            "text": "text",
                            "rawText": "text",
                            "flags": 96,
                            "start": 38,
                            "end": 43
                        },
                        "operatorToken": {
                            "kind": 99634,
                            "flags": 64,
                            "start": 43,
                            "end": 45
                        },
                        "right": {
                            "kind": 129,
                            "member": {
                                "kind": 134299649,
                                "text": "props",
                                "rawText": "props",
                                "flags": 96,
                                "start": 45,
                                "end": 51
                            },
                            "expression": {
                                "kind": 134299649,
                                "text": "children",
                                "rawText": "children",
                                "flags": 96,
                                "start": 52,
                                "end": 60
                            },
                            "flags": 536870944,
                            "start": 45,
                            "end": 60
                        },
                        "flags": 32,
                        "start": 38,
                        "end": 60
                    },
                    "flags": 34,
                    "start": 4,
                    "end": 60
                },
                "flags": 32,
                "start": 0,
                "end": 60
            },
            "flags": 16,
            "start": 0,
            "end": 60
        }
    ],
    "isModule": false,
    "source": "fn = ({text = \"default\", ...props}) => text + props.children",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 60
}
```

### Printed

```javascript

fn = ({
  text = "\"default\"",
  ...props
}) =>  text + props.children;
```

### Diagnostics

```javascript
✔ No errors
```
