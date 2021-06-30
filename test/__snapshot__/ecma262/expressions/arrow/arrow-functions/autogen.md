# Kataw parser test case

> Auto-generated tests to validate error recovery
>

### Cases

> `````js
> () => {}
> `````

> `````js
> () => { return 42 }
> `````

> `````js
> x => { return x; }
> `````

> `````js
> (x) => { return x; }
> `````

> `````js
> (x, y) => { return x + y; }
> `````

> `````js
> (x, y, z) => { return x + y + z; }
> `````

> `````js
> (x, y) => { x.a = y; }
> `````

> `````js
> () => 42
> `````

> `````js
> x => x
> `````

> `````js
> x => x * x
> `````

> `````js
> (x) => x
> `````

> `````js
> (x) => x * x
> `````

> `````js
> (x, y) => x + y
> `````

> `````js
> (x, y, z) => x, y, z
> `````

> `````js
> (x, y) => x.a = y
> `````

> `````js
> () => ({'value': 42})
> `````

> `````js
> x => y => x + y
> `````

> `````js
> (x, y) => (u, v) => x*u + y*v
> `````

> `````js
> (x, y) => z => z * (x + y)
> `````

> `````js
> x => (y, z) => z * (x + y)
> ````

> `````js
> a, b => 0
> `````

> `````js
> a, b, (c, d) => 0
> `````

> `````js
> (a, b, (c, d) => 0)
> `````

> `````js
> (a, b) => 0, (c, d) => 1
> `````

> `````js
> (a, b => {}, a => a + 1)
> `````

> `````js
> ((a, b) => {}, (a => a + 1))
> `````

> `````js
> (a, (a, (b, c) => 0))
> `````

> `````js
> foo ? bar : baz => {}
> `````

> `````js
> ({}) => {}
> `````

> `````js
> (a, {}) => {}
> `````

> `````js
> ({}, a) => {}
> `````

> `````js
> ([]) => {}
> `````

> `````js
> (a, []) => {}
> `````

> `````js
> ([], a) => {}
> `````

> `````js
> (a = b) => {}
> `````

> `````js
> (a = b, c) => {}
> `````

> `````js
> (a, b = c) => {}
> `````

> `````js
> ({a}) => {}
> `````

> `````js
> (x = 9) => {}
> `````

> `````js
> (x, y = 9) => {}
> `````

> `````js
> (x = 9, y) => {}
> `````

> `````js
> (x, y = 9, z) => {}
> `````

> `````js
> (x, y = 9, z = 8) => {}
> `````

> `````js
> (...a) => {}
> `````

> `````js
> (x, ...a) => {}
> `````

> `````js
> (x = 9, ...a) => {}
> `````

> `````js
> (x, y = 9, ...a) => {}
> `````

> `````js
> (x, y = 9, {b}, z = 8, ...a) => {}
> `````

> `````js
> ({a} = {}) => {}
> `````

> `````js
> ([x] = []) => {}
> `````

> `````js
> ({a = 42}) => {}
> `````

> `````js
> ([x = 0]) => {}
> `````

### Templates

#### stand alone

`````js
#
`````

#### conditional expr

`````js
bar ? (#) : baz;
`````

#### comma operator

`````js
bar, #
`````

#### comma operator last

`````js
#, bar
`````