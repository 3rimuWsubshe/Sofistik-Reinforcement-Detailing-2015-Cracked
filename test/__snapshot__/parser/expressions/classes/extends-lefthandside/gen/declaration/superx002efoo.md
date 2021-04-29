# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: n
> :: test: declaration
> :: case: super.foo
## Input

`````js
class A extends super.foo {}
`````

## Output

### Hybrid CST

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
            "typeParameters": null,
            "classHeritage": {
                "kind": 279,
                "extendsKeyword": {
                    "kind": 4194391,
                    "flags": 0,
                    "start": 7,
                    "end": 15
                },
                "expression": {
                    "kind": 129,
                    "member": {
                        "kind": 225,
                        "superKeyword": {
                            "kind": 4259935,
                            "flags": 0,
                            "start": 15,
                            "end": 21
                        },
                        "flags": 96,
                        "start": 15,
                        "end": 21
                    },
                    "expression": {
                        "kind": 134299649,
                        "text": "foo",
                        "rawText": "foo",
                        "flags": 96,
                        "start": 22,
                        "end": 25
                    },
                    "flags": 32,
                    "start": 15,
                    "end": 25
                },
                "typeParameter": null,
                "flags": 16,
                "start": 15,
                "end": 25
            },
            "members": {
                "kind": 277,
                "elements": [],
                "flags": 32,
                "start": 27,
                "end": 28
            },
            "flags": 16,
            "start": 0,
            "end": 28
        }
    ],
    "isModule": false,
    "source": "class A extends super.foo {}",
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
✖ 'super' can only be referenced in members of derived classes or object literal expressions - start: 21, end: 22

```
