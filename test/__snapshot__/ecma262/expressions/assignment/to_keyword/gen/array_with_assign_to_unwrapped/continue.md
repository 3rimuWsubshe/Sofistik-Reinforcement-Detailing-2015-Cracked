# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-14
- From: kataw/test/__snapshot__/parser/expressions/assignment/to_keyword/autogen.md
- Path: kataw/test/__snapshot__/parser/expressions/assignment/to_keyword/gen/array_with_assign_to_unwrapped
> :: test: array with assign to unwrapped
> :: case: continue
## Options

`````js
{}
`````
## Input

`````js
async x => continue = 1
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
                "asyncKeyword": {
                    "kind": 82031,
                    "flags": 64,
                    "start": 0,
                    "end": 5
                },
                "typeParameters": null,
                "arrowPatameterList": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 96,
                    "start": 5,
                    "end": 7
                },
                "returnType": null,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "start": 7,
                    "end": 10
                },
                "contents": {
                    "kind": 16637,
                    "text": "",
                    "rawText": "",
                    "flags": 64,
                    "start": 10,
                    "end": 10
                },
                "flags": 288,
                "start": 0,
                "end": 10
            },
            "flags": 16,
            "start": 0,
            "end": 10
        },
        {
            "kind": 172,
            "continueKeyword": {
                "kind": 37757009,
                "flags": 80,
                "start": 10,
                "end": 19
            },
            "label": {
                "kind": 16637,
                "text": "",
                "rawText": "",
                "flags": 64,
                "start": 19,
                "end": 19
            },
            "flags": 16,
            "start": 10,
            "end": 19
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392130,
                "text": 1,
                "rawText": "1",
                "flags": 96,
                "start": 21,
                "end": 23
            },
            "flags": 16,
            "start": 21,
            "end": 23
        }
    ],
    "isModule": false,
    "source": "async x => continue = 1",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 23
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Identifier expected - start: 10, end: 19
✖ A 'continue' statement can only be used within an enclosing iteration statement. - start: 10, end: 19
✖ Identifier expected - start: 19, end: 21
✖ A 'continue' statement can only jump to a label of an enclosing iteration statement. - start: 10, end: 21

```
