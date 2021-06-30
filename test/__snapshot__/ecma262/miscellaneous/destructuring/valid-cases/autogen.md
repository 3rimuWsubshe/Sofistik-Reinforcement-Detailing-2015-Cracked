# Kataw parser test case

> Auto-generated tests to validate error recovery
>

## Input

### Cases

> `````js
> [((((a)))), b] = [];
> `````

> `````js
> [x, y, ...z = 1]
> `````

> `````js
> [...z = 1]
> `````

> `````js
> [x, y, ...[z] = [1]]
> `````

> `````js
> [...[z] = [1]]
> `````

> `````js
> (a.b) = 0
> `````

> `````js
> a0({});
> `````

> `````js
> x=y=z
> `````

> `````js
> ((a)) = b;
> `````

> `````js
> ({ responseText: text } = res)
> `````

> `````js
> (({a = {b} = {b: 42}}) => a.b)({})
> `````

> `````js
> [{x:x = 1, y:y = 2}, [a = 3, b = 4, c = 5]] = {};
> `````

> `````js
> ([{x:x = 1, y:y = 2}, [a = 3, b = 4, c = 5]] = {});
> `````

> `````js
> ([{x:x, y:y}, [a,b,c]])
> `````

> `````js
> ({ x : [ y[z] = 10 ] = {} })
> `````

> `````js
> ({ x : [ y = 10 ] = {} })
> `````

> `````js
> ({ x : [ foo().y = 10 ] = {} })
> `````

> `````js
> ({ x : [ foo()[y] = 10 ] = {} })
> `````

> `````js
> ({ x : [ y.z = 10 ] = {} })
> `````

> `````js
> ({ x : [ y[z] = 10 ] = {} })
> `````

> `````js
> [{eval}.x] = [];
> `````

> `````js
> [...{eval}.x] = [];
> `````

> `````js
> ({a: {eval}.x} = {});
> `````

> `````js
> [{arguments}.x] = [];
> `````

> `````js
> ({ z : { __proto__: x, __proto__: y } = z })
> `````

> `````js
> ({ x : [ y[z] = 10 ] = {} })
> `````

> `````js
> ([ x ])
> `````

> `````js
> ([ foo()[x] ])
> `````

> `````js
> ([ x.y ])
> `````

> `````js
> [ { x = 10 } = {} ]
> `````

> `````js
> ([ { x : x[y] } ])
> `````

> `````js
> ([ { x : x.y } ])
> `````

> `````js
> ([ { x : foo()[y] } ])
> `````

> `````js
> [ { x : y = 10 } = {} ]
> `````

> `````js
> [ { x : foo().y = 10 } = {} ]
> `````

> `````js
> [ { x : foo()[y] = 10 } = {} ]
> `````

> `````js
> [ { x : x.y = 10 } = {} ]
> `````

> `````js
> [ [ x = 10 ] = {} ]
> `````

> `````js
> [ [ foo()[x] = 10 ] = {} ]
> `````

> `````js
> ([ { x = 10 } = {} ])
> `````

> `````js
> ([ { x : y = 10 } = {} ])
> `````

> `````js
> ([ { x : foo().y = 10 } = {} ])
> `````

> `````js
> ([ { x : foo()[y] = 10 } = {} ])
> `````

> `````js
> ([ { x : x.y = 10 } = {} ])
> `````

> `````js
> ([ [ x = 10 ] = {} ])
> `````

> `````js
> ([ [ foo().x = 10 ] = {} ])
> `````

> `````js
> ([ [ foo()[x] = 10 ] = {} ])
> `````

> `````js
> ({[1+1] : z})
> `````

> `````js
> ({[foo()] : z})
> `````

> `````js
> ({ x : x, y : y })
> `````

> `````js
> ({ x : y, ...z })
> `````

> `````js
> ({ x : y = 1, ...z })
> `````

> `````js
> ({[x] : z, ...y})
> `````

> `````js
> ([{x:x, y:y}, [a,b,c]])
> `````

> `````js
> ([{x:x, y:y, ...z}, [a,b,c]] = {})
> `````

> `````js
> function f( { __proto__: x, __proto__: y, ...z} ) {}
> `````

> `````js
> ({[x] : z, ...y} = {})
> `````

> `````js
> ({"hi" : x} = {})
> `````

> `````js
> ({42 : x} = {})
> `````

> `````js
> ([a,,...rest] = {})
> `````

> `````js
> [{x : [{y:{z = 1}, z1 = 2}] }, {x2 = 3}, {x3 : {y3:[{z3 = 4}]}} ] = [{x:[{y:{}}]}, {}, {x3:{y3:[{}]}}];
> `````

> `````js
> ({x = 1} = {});
> `````

> `````js
> ({x,} = 0)
> `````

> `````js
> ({x,y} = 0)
> `````

> `````js
> ({x,y,} = 0)
> `````

> `````js
> ({x = 0} = 1)
> `````

> `````js
> ({x = 0,} = 1)
> `````

> `````js
> ({x: y} = 0)
> `````

> `````js
> ({x: y = 0} = 1)
> `````

> `````js
> ({x: [y] = 0} = 1)
> `````

> `````js
> (function*() { [...{ x = yield }] = 0; })
> `````

> `````js
> [...[]]
> `````

> `````js
> function fn2([,,,,,,,...args]) {}
> `````

> `````js
> function fn3([a,, b,]) {}
> `````

> `````js
> ([[]]=0)
> `````

> `````js
> ([a,,b]=0)
> `````

> `````js
> ([...a] = 0)
> `````

> `````js
> ([b] = b);
> `````

> `````js
> ({b} = b);
> `````

> `````js
> (a["b"]) = {}
> `````

> `````js
> ({x} = {}, {y} = {})
> `````

> `````js
> [{a=0}, ...b] = 0
> `````

> `````js
> [a = 0, ...{b = 0}] = 0
> `````

> `````js
> [x.a=a] = 0
> `````

> `````js
> [x[a]=a] = 0
> `````

> `````js
> (function([ x = y = 1 ]) {}([]));
> `````

> `````js
> [...[...a[x]]] = 1
> `````

> `````js
> ({x: ((y, z) => z).x})
> `````

> `````js
> ([((x, y) => z).x])
> `````

> `````js
> ({ ...c[0]})
> `````

> `````js
> ({ x: (y) })
> `````

> `````js
> ({ x: (foo.bar) })
> `````

> `````js
> x => x * x
> `````

> `````js
> (a, b, (c, d) => 0)
> `````

> `````js
> (a, b) => 0, (c, d) => 1
> `````

> `````js
> ({}) => {}
> `````

> `````js
> (a = b, c) => {}
> `````

> `````js
> ([y]) => x;
> `````

> `````js
> ({foo: y, a:{bar: x}}) => x;
> `````

> `````js
> ({y, a:{x}}) => x;
> `````

> `````js
> ({y}) => x;
> `````

> `````js
> ({f({x} = {x: 10}) {}});
> `````

> `````js
> [ok.v] = 20;
> `````

> `````js
> ({ x([ a, b ]){} });
> `````

> `````js
> ({[a]: a} = 1)
> `````

> `````js
> ({x = 0} = 1
> `````

> `````js
> ({x = 0} = 1)
> `````

> `````js
> ({x = 0,} = 1)
> `````

> `````js
> ({x: y} = 0)
> `````

> `````js
> (function*() { [...{ x = yield }] = 0; })
> `````

> `````js
> ({x: [y] = 0} = 1)
> `````

> `````js
> ({x: y = z = 0} = 1)
> `````

> `````js
> ({x: y = 0} = 1
> `````

> `````js
> [...[...a[x]]] = b
> `````

> `````js
> [{a=0},{a=0}] = 0
> `````

> `````js
> var [{__proto__:a, __proto__:b}] = 0;
> `````

> `````js
> var {a, x: {y: a}} = 0;
> `````

> `````js
> var a, {x: {y: a}} = 0;
> `````

> `````js
> ({yield} = 0);
> `````

> `````js
> ([])=>0;
> `````

> `````js
> ([,,])=>0
> `````

> `````js
> ({a,b=b,a:c,[a]:[d]})=>0;
> `````

> `````js
> ({x = 10, y: { z = 10 }}) => [x,y]
> `````

> `````js
> [a=10] = 0
> `````

> `````js
> ([a]) => [0];
> `````

> `````js
> ({a:let} = 0);
> `````

> `````js
> ({a:yield} = 0);
> `````

> `````js
> let {a:b=c} = 0;
> `````

> `````js
> ({[a]: a} = 1)
> `````

> `````js
> ({x,y,} = 0
> `````

> `````js
> ({x,y} = 0)
> `````

> `````js
> ({x=0, y:z} = 0)
> `````

> `````js
> ({x = 10, y: { z = 10 }}) => [x, z]
> `````

> `````js
> [x=10] = x
> `````

> `````js
> (x, y = 9, z = 8) => {}
> `````

> `````js
> (x = 9, y) => {}
> `````

> `````js
> ([x = 10]) => x
> `````

> `````js
> (a, b=(c)=>{}) => {}
> `````

> `````js
> (x, y = 9, {b}, z = 8, ...a) => {}
> `````

> `````js
> (x, ...a) => {}
> `````

> `````js
> (x, y = 9, ...a) => {}
> `````

> `````js
> [[[] = [function () { }] ] = []]
> `````

> `````js
> [...((a))] = [1, 2, 3]
> `````

> `````js
> obj = { foo({x}) {}, set prop([x]) {} }
> `````

> `````js
> ({a: [b = 1, c = 2][1]} = {a:[]});
> `````

> `````js
> [...[...[...a]]] = [[[]]];
> `````

> `````js
> [...{a:a = 1}] = [{}];
> `````

> `````js
> a = {}; ({x:a.x} = {});
> `````

> `````js
> ({x:z = 1, x1:y = 20} = {});
> `````

> `````js
> ({x, x1:y = 20} = {});
> `````

> `````js
> [a] = [2];
> `````

> `````js
> [a = 1] = [];
> `````

> `````js
> a = [1], i = 0; [a[(() => 1 + i)()]] = [];
> `````

> `````js
> ({a:a} = {a:10.5})
> `````

> `````js
> [...[this[0], ...this[1]]] = []
> `````

> `````js
> ({ a: obj['a'] } = {})
> `````

> `````js
> (a.b = {});
> `````

> `````js
> [{prop: 1}.prop] = []
> `````

> `````js
> ({__proto__: a, __proto__: b} = {});
> `````

> `````js
> bar1 = ( {abcdef  = (((((a1)) = (30))))} = (b1 = 40) ) => { try { throw a1; } catch(a1) { } };
> `````

> `````js
> [[[] = [function () { }] ] = []]
> `````

> `````js
> ({} = {});
> `````

> `````js
> [{x : [{y:{z = 1}}] }] = [{x:[{y:{}}]}];
> `````

> `````js
> [{x : [{y:{z = 1}, z1 = 2}] }, {x2 = 3}, {x3 : {y3:[{z3 = 4}]}} ] = [{x:[{y:{}}]}, {}, {x3:{y3:[{}]}}];
> `````

> `````js
> [[x]] = 0
> `````

> `````js
> [...a[0]] = 0;
> `````

> `````js
> [x, ...{0: y}] = 0
> `````

> `````js
> [...[x]] = 0
> `````

> `````js
> [x.a=a] = b
> `````

> `````js
> [...[...a[x]]] = b
> `````

> `````js
> [a = 0, ...{b = 0}] = 0
> `````

> `````js
> for (var {name: n, family: {father: f}} of people) {}
> `````

> `````js
> ({[foo2()]: bar3} = {bar: "bar"});
> `````

> `````js
> [{[foo]: bar4}] = [{bar: "bar"}];
> `````

> `````js
> [{[foo2()]: bar5}] = [{bar: "bar"}];
> `````

> `````js
> [{[foo()]: bar4}] = [{bar: "bar"}];
> `````

> `````js
> [{[(1 + {})]: bar4}] = [{bar: "bar"}];
> `````

> `````js
> [{ [foo]: bar4 }] = [{ bar: "bar" }];
> `````

> `````js
> [{ [foo2()]: bar5 }] = [{ bar: "bar" }];
> `````

> `````js
> [{ [foo()]: bar4 }] = [{ bar: "bar" }];
> `````

> `````js
> [{ [(1 + {})]: bar4 }] = [{ bar: "bar" }];
> `````

> `````js
> _c = foo, bar4 = [{ bar: "bar" }][0][_c];
> `````

> `````js
> _d = foo2(), bar5 = [{ bar: "bar" }][0][_d];
> `````

> `````js
> _e = foo(), bar4 = [{ bar: "bar" }][0][_e];
> `````

> `````js
> _f = (1 + {}), bar4 = [{ bar: "bar" }][0][_f];sss
> `````

> `````js
> (_a = foo, foo = _a.foo, bar = _a.bar);
> `````

> `````js
> ({ foo, bar } = foo);
> `````

> `````js
> _a = [1, 2], M.a = _a[0], M.b = _a[1];
> `````

> `````js
> t[p[i]] = s[p[i]];
> `````

> `````js
> [{ x: 1 }].map(({ x }) => x );
> `````

> `````js
> var _a = {}, _b = _a.a, a = _b === void 0 ? 1 : _b, _c = _a.b, b = _c === void 0 ? 2 : _c, _d = _a.c, c = _d === void 0 ? b : _d
> `````

> `````js
> var [z_a, z_b, z_c] = [z.getA(), z.getB(), z.getC()];
> `````

> `````js
> ((first, ...rest) => first ? [] : rest.map(n => n > 0))(8,9,10);
> `````

> `````js
> (({ p = 14 }) => p)({ p : 15 });
> `````

> `````js
> ({ ["x"]: x } = 0);
> `````

> `````js
> [(x.y)] = obj
> `````

> `````js
> [(x)] = obj
> `````

> `````js
> [x] = obj
> `````

> `````js
> ({[(a)()]: {}})
> `````

> `````js
> ({[(a)(x = (y))]: {}})
> `````

> `````js
> ({[a = (b)]: {}})
> `````

> `````js
> ({["a"]: [b]} = 1 / (d = ((a)) = a))
> `````

> `````js
> ({["a"]: [b]} = 1 / (d = (a	)  => a))
> `````

> `````js
> ({["a"]: [b]} = 1 / (d = ((a)) = a))
> `````

> `````js
> ({"a": [b]} = 1 / (d = ((a)) = a))
> `````

> `````js
> ({"a": [b.c]} = 1 / (d = ((a)) = a))
> `````

> `````js
> ({1: [b.c = x]} = 1 / (d = ((a)) = a))
> `````

> `````js
> ({1: [b.c = x]} = 2 / (dd = ((a)) = 3))
> `````

> `````js
> ({a: ("string") / a[3](a = b.c) })
> `````

> `````js
> ({a: ("string") / a[3](((((a /= [b.c] = x))))) })
> `````

> `````js
> for ( let {x:item} of [{x:20}, {x:30}]) {}
> `````

> `````js
> try { throw {x:10, z:["this is z"]}; }  catch({x, y, z:[z]}) {x;}
> `````

> `````js
> for (const x of [ 1, 2, 3 ]) { a[i++] = function () { return x; }; }
> `````

> `````js
> for (let x in { a: a[i++] = () => x }) { b[j++] = () => x; }
> `````

> `````js
> for (let x in { a: a[i++] = () => x }) { b[j++] = () => x; }
> `````

> `````js
> for (let x in { a: a[i++] = () => eval("x") }) { b[j++] = () => eval("x"); }
> `````

> `````js
> [[a]=[1]] = [];
> `````

> `````js
> `${[a = 5, b, ...c] = [, 1, 3, 5, 7, 9]}`;
> `````

> `````js
> ({a, b,...rest} = {a, b,...rest} = obj)
> `````

> `````js
> for ({a, b,...rest} = obj; i < 10; i++) {}
> `````

> `````js
> for ({a, b,...rest} = {a, b,...rest} = obj; i < 10; i++) {}
> `````

> `````js
> ({a:a}=1)()
> `````

> `````js
> let a = [1], i = 0; [a[(() => 1 + i)()]] = [];
> `````

> `````js
> (it, { a: [...z] } = it)
> `````

> `````js
> () => { ({ a: { c } } = { a: { c: "string" } }); }
> `````

> `````js
> () => { ({ a: [ c ] } = { a: [ "string" ] }); }
> `````

> `````js
> [a.x] = g()
> `````

> `````js
> for (var {z} = { z : 3 }; z != 0; z--) {}
> `````

> `````js
> function f92({a = () => { "use strict"; return eval("x") }}) { var x; return a(); }
> `````

> `````js
> [[x[async]]] = value;
> `````

> `````js
> a = [[x[async]]] = value;
> `````

> `````js
> a = [[x]] = value;
> `````

> `````js
> a = [{ x = yield }] = value;
> `````

> `````js
> [{ x = async }] = [{}];
> `````

> `````js
> [...x[yield]] = [];
> `````

> `````js
> a = { a = x += 1, b = x *= 2 } = value;
> `````

> `````js
> a = { x = yield } = value;
> `````

> `````js
> { x: [ x ] } = { x: undefined });
> `````

> `````js
> 0, { x: { x = yield } } = { x: {} };
> `````

> `````js
> f = ([cls = class {}, xCls = class X {}] = []) => {
> `````

> `````js
> f = ([fn = function () {}, xFn = function x() {}] = []) => {}
> `````

> `````js
> [[x[yield]]]
> `````

> `````js
> [4]
> `````

> `````js
> [ x , ...y ]
> `````

> `````js
> [, , x, , ...y]
> `````

> `````js
> [...x = 1]
> `````

> `````js
> { xCover = (0, function() {}), cover = (function() {}) }
> `````

> `````js
> for ({ x: { x = yield } } in [{ x: {} }]) ;
> `````

> `````js
> f = ([x = 23]) => {}
> `````

> `````js
> f = async function* g([[...x] = [2, 1, 3]]) {}
> `````

> `````js
> f = async function*([{ u: v, w: x, y: z } = { u: 444, w: 555, y: 666 }] = [{ u: 777, w: 888, y: 999 }]) {}
> `````

> `````js
> for ({[a]:b, ...rest} of [{ foo: 1, bar: 2, baz: 3 }]) {}
> `````

> `````js
> C.method({x: 1, y: 2, a: 5, b: 3}).next().then(() => {})
> `````

> `````js
> class foo { method() { ({x:super.x} = {}); } }
> `````

### Templates

#### stand alone

`````js
#
`````