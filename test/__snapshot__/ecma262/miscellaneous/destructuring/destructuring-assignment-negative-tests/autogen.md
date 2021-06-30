# Kataw parser test case

> Auto-generated tests to validate error recovery
>

## Input

### Cases

> `````js
> { x : ++y }
> `````

> `````js
> { x : y * 2 }
> `````

> `````js
> { get x() {} }
> `````

> `````js
> { x: y() }
> `````

> `````js
> { x: this = 1 }
> `````

> `````js
> { super }
> `````

> `````js
> { x: new.target = 1 }
> `````

> `````js
> { import.meta }
> `````

> `````js
> [x--]
> `````

> `````js
> [--x = 1]
> `````

> `````js
> [x()]
> `````

> `````js
> [this]
> `````

> `````js
> [this = 1]
> `````

> `````js
> [super]
> `````

> `````js
> [super = 1]
> `````

> `````js
> [function f() {}]
> `````

> `````js
> [function* f() {}]
> `````

> `````js
> [50]
> `````

> `````js
> [(50)]
> `````

> `````js
> [(function() {})]
> `````

> `````js
> [(async function() {})]
> `````

> `````js
> [(function*() {})]
> `````

> `````js
> { x: 50 }
> `````

> `````js
> { x: (50) }
> `````

> `````js
> ['str']
> `````

> `````js
> { x: ('str') }
> `````

> `````js
> { x: (foo()) }
> `````

> `````js
> { x: function() {} }
> `````

> `````js
> { x: async function() {} }
> `````

> `````js
> { x: function*() {} }
> `````

> `````js
> { x: y } = 'str'
> `````

> `````js
> [async x => z]
> `````

> `````js
> [async(x,y) => z]
> `````

> `````js
> [(x,y) => z]
> `````

> `````js
> {x: (y,w) => z}
> `````

> `````js
> {x: (y) => z}
> `````

> `````js
> [(x,y) => z]
> `````

> `````js
> [...z = 1]
> `````

> `````js
> [...++x]
> `````

> `````js
> [...x--]
> `````

> `````js
> [...!x]
> `````

> `````js
> [...x + y]
> `````

> `````js
> [...[z] = [1]]
> `````

> `````js
> [x, y, ...[z] = [1]]
> `````

> `````js
> ({ x: x4, x: (x+=1e4) })
> `````

> `````js
> (({ x: x4, x: (x+=1e4) }))
> `````

> `````js
> (({ x: x4, x: (x+=1e4) }) = {})
> `````

> `````js
> ({ x: y } = {})
> `````

> `````js
> (({ x: y } = {}))
> `````

> `````js
> (({ x: y }) = {})
> `````

> `````js
> ([a])
> `````

> `````js
> (([a]))
> `````

> `````js
> ([a] = [])
> `````

> `````js
> (([a] = []))
> `````

> `````js
> { x: ([y]) }
> `````

> `````js
> { x: ([y] = []) }
> `````

> `````js
> { x: ({y}) }
> `````

> `````js
> { x: (++y) }
> `````

> `````js
> [ (...[a]) ]
> `````

> `````js
> [ ...([a]) ]
> `````

> `````js
> [ ...([a] = [])
> `````

> `````js
> [ ...[ ( [ a ] ) ] ]
> `````

> `````js
> [ ([a]) ]
> `````

> `````js
> [ (...[a]) ]
> `````

> `````js
> [ ([a] = []) ]
> `````

> `````js
> [ (++y) ]
> `````

> `````js
> [ ...(++y) ]
> `````

> `````js
> { foo: x += x }
> `````

> `````js
> [ x += x ]
> `````

### Templates

#### lexical let

`````js
'use strict'; let x, y, z; (#= {});
`````
#### variable

`````js
var x, y, z; (# = {});
`````

#### lexical let in for in statement

`````js
'use strict'; let x, y, z; for (x in # = {});
`````
#### lexical let in for of statement

`````js
'use strict'; let x, y, z; for (x of # = {});
`````

#### variable in for in

`````js
var x, y, z; for (x in # = {});
`````

#### variable in for of

`````js
var x, y, z; for (x of # = {});
`````