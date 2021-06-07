# Kataw parser test case

> Auto-generated tests to validate error recovery
>

### Cases

> `````js
> a,b)+=2
> `````

> `````js
> (a,b)+=2
> `````


> `````js
> (a=1)=2'
> `````

> `````js
> async ({} + 1) => x;
> `````

> `````js
> (a, 1, "c", d, e, f) => x;
> `````

> `````js
> ((x)) => x;
> `````

> `````js
> (x--, y) => x;
> `````

> `````js
> (++x, y) => x;
> `````

> `````js
> (...x, y) => x
> `````

> `````js
> ({ident: {x}/x/g}) => x
> `````

> `````js
> ({ident: {x}/x/g}) =>
> `````

> `````js
> [(a = 0)] = 1
> `````

> `````js
> ({a: 1} = []);
> `````

> `````js
> {x, y} = z;
> `````

> `````js
> ( ({x: 1}) ) => {};
> `````

> `````js
> ( ({x: 1}) = y ) => {}
> `````

> `````js
> ({x, y}) = {}
> `````

> `````js
> ({ obj:20 }) = 4
> `````

> `````js
> ( { get x() {} } = 0)
> `````

> `````js
> (...[a]) =>
> `````

> `````js
> a = (...[a]) = a
> `````

> `````js
> a (...[a]) = a
> `````

> `````js
> (...[a]a) = a
> `````

> `````js
> (...a) = a
> `````

> `````js
> (a,b)=(c,d);
> `````

> `````js
> ({a = 0});
> `````

> `````js
> ({a} += 0);
> `````

> `````js
> "use strict"; (arguments = a)
> `````

> `````js
> ({0} = 0)
> `````

> `````js
> ({var} = 0)
> `````

> `````js
> ({0} = 0)
> `````

> `````js
> (a=1)=2
> `````

> `````js
> (a=1)+=2
> `````

> `````js
> ({x})=y
> `````

> `````js
> ({ (x = yield) = {}; })
> `````

> `````js
> (++x) => x;
> `````

> `````js
> (x--, y) => x;
> `````

> `````js
> ({x:{1:y()=x},x:{7:3}})>x
> `````

> `````js
> ({[foo]() {}} = y)
> `````

> `````js
> ({a = 0}, {a = 0}, 0) => 0
> `````

> `````js
> async (a, ...b=fail) => a;
> `````

> `````js
> async (foo = yield x) => foo
> `````

> `````js
> (x, ...y, z) => x
> `````

> `````js
> ([a + b] = x) => a;
> `````

> `````js
> ({ident: [foo, bar].join("")}) => x
> `````

> `````js
> ([{x = y}]).z
> `````

> `````js
> [{x = y}].z
> `````

> `````js
> [{x = y}].z = "obj"
> `````

> `````js
> [{"x" = y}].z = obj
> `````

> `````js
> [{x = "y"}].z = obj
> `````

> `````js
> ({a: {x = y}})
> `````

> `````js
> ({a: {x = y}}.z)
> `````

> `````js
> ({a: {x = y}.z})
> `````

> `````js
> ({a: {x = y}}.z) => obj
> `````

> `````js
> (...(...z))
> `````

> `````js
> ((...z))
> `````

> `````js
> (...(...1))
> `````

> `````js
> ([...[[][][]] = x);
> `````

> `````js
> ([...a, ,] = [...a, ,])
> `````

> `````js
> (c, a['b']) => {}
> `````

> `````js
> (...a = b) => b
> `````

> `````js
> (-a, b) => {}
> `````

> `````js
> (a, -b) => {}
> `````

> `````js
> (1) = x
> `````

> `````js
> y = (1) = x
> `````

> `````js
> (-a, b) => {}
> `````

> `````js
> (1) = y = x
> `````

> `````js
> (-a, b) => {}
> `````

> `````js
> ([[[[[[[[[[[[[[[[[[[[{a:b[0]}]]]]]]]]]]]]]]]]]]]])=>0
> `````

> `````js
> ([{a:b[0]}])=>0
> `````

> `````js
> (..., x)
> `````

> `````js
> a++ => {}
> `````

> `````js
> a++ => {}
> `````

> `````js
> (foo ? bar : baz, a) => {
> `````

> `````js
> async (foo ? bar : baz, a) => {
> `````

> `````js
> (x = x) = x;
> `````

> `````js
> (a++) => {}
> `````

> `````js
> async (a++) => {}
> `````

> `````js
> (foo ? bar : baz) => {}
> `````

> `````js
> (a, foo ? bar : baz) => {}
> `````

> `````js
> async (a, foo ? bar : baz) => {}
> `````

> `````js
> async (foo ? bar : baz) => {}
> `````

> `````js
> ({a: 1 = x })
> `````

> `````js
> async({a: 1 = x })
> `````

> `````js
> (a, foo ? bar : baz) => {}
> `````

> `````js
> async (a, foo ? bar : baz) => {}
> `````

> `````js
> [] => {}
> `````

> `````js
> async [] => {}
> `````

> `````js
> ([{a:b[0]}])=>0
> `````

> `````js
> async ([{a:b[0]}])=>0
> `````

> `````js
> ({x: 15.foo()} = x)
> `````

> `````js
> ({x: 15.foo} = x)
> `````

> `````js
> async ({x: 15.foo} = x)
> `````

> `````js
> ({ident: [foo, bar] += x})
> `````

> `````js
> async({ident: [foo, bar] += x})
> `````

> `````js
> ({...{x} }) => {}
> `````

> `````js
> ({ident: [foo, bar] += x})
> `````

> `````js
> async({ident: [foo, bar] += x})
> `````

> `````js
> (await) = 1
> `````

> `````js
> async(await) = 1
> `````

> `````js
> (a + b) => {}
> `````

> `````js
> (a + b, c) => {}
> `````

> `````js
> async (a + b, c) => {}
> `````

> `````js
> => {}
> `````

> `````js
> ({[foo]: bar()} = baz)
> `````

> `````js
> async({[foo]: bar()} = baz)
> `````

> `````js
> ({[foo]: a + b} = baz)
> `````

> `````js
> ({[foo]: a + b}) => baz
> `````

> `````js
> async ({[foo]: a + b}) => baz
> `````

> `````js
> ({...x.y}) => z
> `````

> `````js
> async({...x.y}) => z
> `````

> `````js
> var {(a)} = 0
> `````

> `````js
> ({foo: {} += x})
> `````

> `````js
> async ({foo: {} += x})
> `````

> `````js
> -(5) ** 6;
> `````

> `````js
> ([a]) = 0
> `````

> `````js
> async([a]) = 0
> `````

> `````js
> (a = b)++;
> `````

> `````js
> async(a = b)++;
> `````

> `````js
> [...[{prop: 1}.prop]] = []
> `````

> `````js
> [x.[y] = [z]]
> `````

> `````js
> [...break]
> `````

> `````js
> [/[/]
> `````

> `````js
> {a = 0}.x] = [];
> `````

> `````js
> () => {({...{b = 0}.x} = {})}
> `````

> `````js
> async () => {({...{b = 0}.x} = {})}
> `````

> `````js
> [...{a: function=x} = c]
> `````

> `````js
> [x] += 0
> `````

> `````js
> ([[a](b.c) = [[a] = [[a] = ([[a] = x]]]]))
> `````

> `````js
> [...a, ,] = [...a, ,]
> `````

> `````js
> [.../x//yield]
> `````

> `````js
> [true = x] = x
> `````

> `````js
> [...this, y] = foo;
> `````

> `````js
> [{..}, x]
> `````

> `````js
> [false] = x
> `````

> `````js
> [...[1], ["a"](b)] = x
> `````

> `````js
> [...[1], "a"(b)] = x
> `````

> `````js
> [...x + y] = a;
> `````

> `````js
> [x, y, ...z = 1] = a;
> `````

> `````js
> [--x = 1] = a;
> `````

> `````js
> [[[[[[[a=b] = c]]] = c] = (c=d)] = c] = ({a = b}) = foo;
> `````

> `````js
> x, [foo + y, bar] = zoo;
> `````

> `````js
> [[(x, y)]] = x;
> `````

> `````js
> [...[z] = [1]] = a;
> `````

> `````js
> [(foo())] = a;
> `````

> `````js
> if (--a()) do with(1) try {} catch(ke) { f() ; g() } while (a in b) else {}
> `````

> `````js
> ({1: ({}) += (1)});
> `````

> `````js
> ({1: ({}) = (1)});
> `````

> `````js
> 3in x
> `````

> `````js
> 0B0in
> `````


> `````js
> 0o465instanceof x
> `````

> `````js
> async let [] = y
> `````


> `````js
> (0O}
> `````

> `````js
> with (a) let [] = y
> `````


> `````js
> switch (a) { case b: let {x} }
> `````

> `````js
> let x; strubg
> `````


> `````js
> if ( true, ) {}
> `````

> `````js
> (a, ...b);
> `````

> `````js
> [([a])] = 12;
> `````

> `````js
> (((...a)))
> `````

> `````js
> ({a: 0} = 0);
> `````

> `````js
> ({a: 0} = 0);
> `````

> `````js
> [...{a: 0}] = 0;
> `````

> `````js
> [...{a: 0}] =
> `````

> `````js
> { const a; }
> `````

> `````js
> class A extends B { constructor() { !{constructor() { super(); }}; } }
> `````


> `````js
> for (a+b in c) d;
> `````

> `````js
> for (a+b of c) d;
> `````


> `````js
> for ({x = y} ;1 ;1) {}
> `````

> `````js
> for (a,b of c) d;
> `````


> `````js
> (y, x)++
> `````

> `````js
> (y, ...x)++
> `````

> `````js
> (...y, x)++
> `````

> `````js
> async (y, x)++
> `````

> `````js
> async  (y, ...x)++
> `````

> `````js
>  async (...y, x)++
> `````

> `````js
> this.foo[foo].bar(this)(bar)[foo]()--
> `````


> `````js
> ((x,x)) = 5
> `````

> `````js
> (((x,x))) = 5
> `````


> `````js
> new Date++;
> `````

> `````js
> ({...{b = 0}.x} = {});
> `````


> `````js
> [[(x, y)]] = x;
> `````

> `````js
> [...[(x, y)]] = x
> `````


> `````js
> for({p: x} = 0 of {})
> `````

> `````js
> async function * f() { for await({a: a = 1} = 1 of []){ } }
> `````


> `````js
> ([{a=b}](x)) => x
> `````

> `````js
> ([{a=b}].x) => x
> `````


> `````js
> ({a=b}[x]) => x
> `````

> `````js
> ({a=b}.x) => x
> `````


> `````js
> ({"x": [y].slice(0)}) => x
> `````

> `````js
> (a = b,)
> `````


> `````js
> a]
> `````

> `````js
> a + typeof b += c in d
> `````


> `````js
> if (a) {} else x; else
> `````

> `````js
> inally {}
> `````


> `````js
> try {} finally a()
> `````

> `````js
> try {} finally {} catch(e) {}
> `````


> `````js
> switch (g) { case 1: a: default: }
> `````

> `````js
> (1--).x
> `````


> `````js
> a: b: c: new f(x++)++
> `````

> `````js
> (a.x++)+++
> `````


> `````js
> function f() { if (--a()) do with(1) try {} catch(ke) { f() ; g() } while (a in b) else {} }
> `````

> `````js
> for (new a in b in c in d) break
> `````


> `````js
> var a = if (b) { c }
> `````

> `````js
> var a %= b | 5
> `````


> `````js
> for (({x}) of [{x:1}]) {}
> `````

> `````js
> ({ async
> f(){} })
> `````


> `````js
> (a, ...b,) => 0
> `````

> `````js
> ({ a (b, ...c,) {} })
> `````


> `````js
> ((...a = []) => {})
> `````

> `````js
> for await(;;);
> `````


> `````js
> do g; while ((4)
> `````

> `````js
> (a++
> `````


> `````js
> a + * b
> `````

> `````js
> foo--.toString();
> `````


> `````js
> {_ => {}/123/g;}
> `````

> `````js
> 1 + ()
> `````

> `````js
> () ? 0
> `````

> `````js
> ({ *a: 0 })
> `````

> `````js
> async ((x, y, z)) => 0
> `````

> `````js
> try{};catch{};finally{}
> `````


> `````js
> (x=1)=2
> `````

> `````js
> yield (await foo)
> `````


> `````js
> if (true) function* g() {  } else ;
> `````

> `````js
> (([a, ...b = 0]) => {})
> `````


> `````js
> [a, ...b = 0] = []
> `````

> `````js
> f({x = 0})
> `````


> `````js
> (localVar |= defaultValue) => {}
> `````

> `````js
> for(a of b) function c(){}
> `````


> `````js
> do { x } *
> `````

> `````js
> 3 = 4
> `````


> `````js
> (async function await() { })
> `````

> `````js
> ({[a,b]:0})
> `````


> `````js
> ( { get x() {} } = 0)
> `````

> `````js
> for (let x = 42 in list) process(x);
> `````


> `````js
> let [this] = [10]
> `````

> `````js
> let [...x = []] = [];
> `````


> `````js
> try {} catch (answer()) {}
> `````

> `````js
> a\u11z
> `````


> `````js
> ([a,...b,])=>0;
> `````

> `````js
> ({a:b[0]})=>0
> `````


> `````js
> `hello ${10 `test`
> `````

> `````js
> let x,
> `````


> `````js
> ({(a):0})
> `````

> `````js
> ({a:this}=0)
> `````


> `````js
> [a, ...(b = c)] = 0
> `````

> `````js
> class A { static set prototype() {} }
> `````


> `````js
> (class {async foo(a = await b) {}})
> `````

> `````js
> async () => await
> `````


> `````js
> "use strict"; `${test}\02`;
> `````

> `````js
> (((a, ...b)))
> `````


> `````js
> { ;  ;
> `````

> `````js
> ('\u{2028')
> `````


> `````js
> function*g({a: yield}){}
> `````

> `````js
> #=
> `````


> `````js
> function* g() { (a = yield) => {} }
> `````

> `````js
> foo++("toString");
> `````


> `````js
> x = 5/* body *
> `````

> `````js
> /(foo)bar
> `````


> `````js
> /foo(?:bar)
> `````

> `````js
> /(fo)\\b\\B\\cA\\d\\D\\f\\n\\r\\s\\S\\t\\v\\w\\W\\1\\0\\xab\\uabcd
> `````


> `````js
> ++--x
> `````

> `````js
> +x = y
> `````


> `````js
> ({a:b}[ohi].iets()++);
> `````

> `````js
> .5e05
> <<\ntypeofthrow()--
> `````


> `````js
> for (const x = 0 in y){}
> `````

> `````js
> i + 2 = 42
> `````


> `````js
> try {} catch (answer()) {}
> `````

> `````js
> (a,b)=(c,d);
> `````


> `````js
> ({get a(){}}) => 0;
> `````

> `````js
> ({"a"} = 0)
> `````


> `````js
> (function*() {  function*({x: y = yield 3}) {} })
> `````

> `````js
> ({a: b += 0} = {})
> `````


> `````js
> (...a=b=c) => {}
> `````

> `````js
> async (...a=b=c) => {}
> `````


> `````js
> class extends A{}
> `````

> `````js
> f = async function*({a, b, ...{c, ...rest}} = {a: 1, b: 2, c: 3, d: 4, e: 5}) {}
> `````


> `````js
> async f = async function*({a, b, ...{c, ...rest}} = {a: 1, b: 2, c: 3, d: 4, e: 5}) {}
> `````

> `````js
> class default
> `````


> `````js
> ({ident: [foo, bar]/x}) => x
> `````

> `````js
> async ({ident: [foo, bar]/x}) => x
> `````


> `````js
> f = ([...[ x ] = []]) => {};
> `````

> `````js
> (function() { var s0; for ({ s0 = 5 } of [{ s0: 1 }]) { function foo({a = 4, b = { x: 5 }}) {}
> `````


> `````js
> ([a.b]) =>
> `````

> `````js
> async ([a.b]) =>
> `````


> `````js
> ++x => b
> `````

> `````js
> (x) = (1) = z
> `````


> `````js
> [(a = x)] = x
> `````

> `````js
> class x extends ()=>{} {}
> `````


> `````js
> class x extends ()=>1 {}
> `````

> `````js
> async (x = (x) = await f) => {}
> `````


> `````js
> (((x)))
> ++;
> `````

> `````js
> function f(foo = +await bar){}
> `````


> `````js
> var [++a] = [];
> `````

> `````js
> [ x += x ]
> `````


> `````js
> [ (++y) ]
> `````

> `````js
> [ ...[ ( [ a ] ) ] ]
> `````


> `````js
> for await (({x}) of [{x:1}]) {}
> `````

> `````js
> "use strict"; [...{ x = yield }] = [{}];
> `````


> `````js
> let [{a, ...[]}] = [{/*...*/}]; // invalid;
> `````

> `````js
> (([a]))
> `````


> `````js
> ({a:this}=0)
> `````

> `````js
> ({ x: x4, x: (x+=1e4) } = {})
> `````


> `````js
> (({ x: x4, x: (x+=1e4) } = {}))
> `````

> `````js
> ({ x: y } = {})
> `````


> `````js
> ([a])
> `````

> `````js
> [(x,y) => z]
> `````


> `````js
> (new.target) = 1
> `````

> `````js
> ({a: ("string") / a[3](((((a /= [b.c] = ([x / 2]())))))=>) })
> `````


> `````js
> ({a: ("string") / a[3](((((a /= [b.c] = ({x)}))))) })
> `````

> `````js
> (a, {a: ("string") / a[3](((((a /= [b.c] = ({x)}))))) })
> `````


> `````js
> ({1: [b.c = x]} = 2 / (3 = ((a)) = a))
> `````

> `````js
> ({a = [b]} = 1 / d = a)
> `````


> `````js
> (a, ...b, ...rest) => {};
> `````

> `````js
> (a = ...NaN, b = [...[1,2,3]], ...rest) => {};
> `````

> `````js
> [...x,] = [1,2,3];
> `````

> `````js
> ...x, y] = [1,2,3];
> `````

> `````js
> function foo(...[a],) {}
> `````

> `````js
> ({...[a,b]}) => {}
> `````

> `````js
> ({...obj1,a} = foo)
> `````

> `````js
> ({...(a,b)} = foo)
> `````


> `````js
> ({...{a,b}} = foo)
> `````

> `````js
> ({...(obj)}) => {}
> `````

> `````js
> async({...(a,b)}) => {}
> `````

> `````js
> async({...{a,b}} = foo)
> `````

> `````js
> async({...(obj)}) => {}
> `````

> `````js
> async({...(a,b)}) => {}
> `````

> `````js
> ({...(a,b)}) => {}
> `````

> `````js
> async({...(a,b)}) => {}
> `````

> `````js
> ({...[]} = {})
> `````

> `````js
> [{x=1, y = ({z=2} = {})}];
> `````

> `````js
> x > (0, {a = b} );
> `````

> `````js
> !{x=1}={}
> `````

> `````js
> new {x=1}={}
> `````

> `````js
> typeof {x=1}
> `````

> `````js
> ((({w = x} >(-9)
> `````

> `````js
> delete {x=1}
> `````


> `````js
> {y={x={}={}={}={}={}={}={}={}}={}}),
> `````

> `````js
> ({x=1} = {y=1});
> `````

> `````js
> ({x: y={z=1}}={})
> `````

> `````js
> a = { x: [(x, y)] } = false
> `````

> `````js
> ({x:y} += x)
> `````

> `````js
> ({foo: {x:y} += x})
> `````

> `````js
> x = [{__proto__: 1, __proto__: 2}]
> `````

> `````js
> ({foo: {x:y} += x})
> `````


> `````js
> ({interface}) => null
> `````

> `````js
> ({* set x(){}})
> `````

> `````js
> ({b => []} = [2])
> `````

> `````js
> {...obj1,...obj2} = foo)
> `````

> `````js
> ({...obj1,a} = foo)
> `````

> `````js
> ({...obj1,} = foo)
> `````

> `````js
> ({...(a,b)}) => {}
> `````

> `````js
> ({...obj1,...obj2} = foo)
> `````

> `````js
> async({b => []} = [2])
> `````

> `````js
> {...obj1,...obj2} = foo)
> `````

> `````js
> async({...obj1,a} = foo)
> `````

> `````js
> async({...obj1,} = foo)
> `````

> `````js
> async({...(a,b)}) => {}
> `````

> `````js
> async({...obj1,...obj2} = foo)
> `````

> `````js
> ({...x = 1} = {})
> `````

> `````js
> {...(obj)}) => {}
> `````

> `````js
> x = {__proto__: 1, "__proto__": 2}
> `````

> `````js
> ({get +:3})
> `````


> `````js
> ({*get x(){}})
> `````

> `````js
> ({[fgrumpy] 1(){}})
> `````

> `````js
> call({[x]})
> `````

> `````js
> ({x:y;})
> `````

> `````js
> async({get +:3})
> `````


> `````js
> async({*get x(){}})
> `````

> `````js
> async({[fgrumpy] 1(){}})
> `````

> `````js
> async({[x]})
> `````

> `````js
> async({x:y;})
> `````

> `````js
> s = {"foo": null = x} = x
> `````

> `````js
> s = {"foo": yield}
> `````

> `````js
> ({"x": y+z} = x)
> `````

> `````js
> ({"x": {a: y + x}.slice(0)} = x)
> `````

> `````js
> ({ ... })
> `````

> `````js
> async({ ... })
> `````

> `````js
> ({ident: [foo, bar].join("")} = x)
> `````

> `````js
> ({ __proto__: null, other: null, "__proto__": null }) => foo;
> `````

> `````js
> foo({ __proto__: null, other: null, "__proto__": null });
> `````


> `````js
> a = b) = {};
> `````

> `````js
> f = ([...[z] = 1] ) => {};
> `````

> `````js
> ({"x": 600} = x)
> `````

> `````js
> x={...x=y}=z
> `````

> `````js
> ({...a+b} = x)
> `````

> `````js
> ({...a=b} = x)
> `````

> `````js
> ({...a=b}) => x
> `````

> `````js
> async ({...a+b} = x)
> `````

> `````js
> async ({...a=b} = x)
> `````

> `````js
> async ({...a=b}) => x
> `````

> `````js
> ({3200: foo() = x}) => x
> `````

> `````js
> s = {foo: yield /x/g}
> `````

> `````js
> ({a} += 0);
> `````

> `````js
> ({set a([a.b]){}})
> `````

> `````js
> ({...[x] }) => {}
> `````

> `````js
> async({...[x] }) => {}
> `````

> `````js
> [...rest,] = {};
> `````

> `````js
> ({...a, ...b, ...c} = {...a, ...b, ...c})
> `````

> `````js
> async({...a, ...b, ...c} = {...a, ...b, ...c})
> `````

> `````js
> ({ a, b }) = {a: 1, b: 2}
> `````

> `````js
> {[1+1] : z} = {};
> `````

> `````js
> ({x = 42, y = 15})
> `````

> `````js
> ({ q } = { x = 10 });
> `````

> `````js
> async({x = 42, y = 15})
> `````

> `````js
> async({ q } = { x = 10 });
> `````

> `````js
> (true ? { x = true } : { x = false })
> `````

> `````js
> ({*[expr](){}} = x);
> `````


> `````js
> async({*[expr](){}} = x);
> `````

> `````js
> ({a: ({d = 1,c = 1}.c) = 2} = {});
> `````

> `````js
> async ({a: ({d = 1,c = 1}.c) = 2} = {});
> `````

> `````js
> ({"foo": (x) = [1] = "bar"});
> `````


> `````js
> async ({"foo": (x) = [1] = "bar"});
> `````

> `````js
> 0, {...rest, b} = {}
> `````

> `````js
> ({...x,}) => z
> `````

> `````js
> async ({...x,}) => z
> `````

> `````js
> [["b"] /= e ? f : g ]
> `````

> `````js
> [ c.d === (...[e] ? f : g )]
> `````

> `````js
> [...break }
> `````

> `````js
> ({a: {b = 0}.x} = {})
> `````


> `````js
> [{a = 0}.x] = [];
> `````

> `````js
> [{a = 0}.x] = [];
> `````

> `````js
> [...x, ...y] = [];
> `````

> `````js
> [...{a: 0} = c]
> `````

> `````js
> ({*a([a.b]){}})
> `````

> `````js
> async({*a([a.b]){}})
> `````

> `````js
> ([[a] = [[a] = [[a] = ([[a] = x]]]]))
> `````

> `````js
> [...{a=0},]=0
> `````


> `````js
> [...await] = obj
> `````

> `````js
> [.../x//yield]
> `````

> `````js
> [...{a = b} = c] = x
> `````

> `````js
> [(...)]
> `````


> `````js
> (...)
> `````

> `````js
> [...this, y] = foo;
> `````

> `````js
> [{..}, x]
> `````

> `````js
> [{..}.x]
> `````


> `````js
> [a=5, b=7] = ([1]) = x;
> `````

> `````js
> [a=5, b=(7).c.(d)] = ([1])
> `````

> `````js
> ([(({a[d]}), ({b = c / 2}))])
> `````

> `````js
> async([(({a[d]}), ({b = c / 2}))])
> `````

> `````js
> [...new]
> `````

> `````js
> [x, y, ...z = arr] = x = obj
> `````

> `````js
> [...++x] = a;
> `````

> `````js
> [...x + y] = a;
> `````


> `````js
> [this=x]
> `````

> `````js
> x = {...[ x = 5 ] }
> `````

> `````js
> {...[ x = 5 ] }
> `````

> `````js
> [50] = a;
> `````


> `````js
> [[[a.b =[{ x: x.b }]]]] = ([{ a = b / 2}])
> `````

> `````js
> [(1) = (a = b)]
> `````

> `````js
> [([{ x = y }] = b.call(c)) = ()]
> `````

> `````js
> [(a = b.call(c)) = (a = b / 2)]
> `````

> `````js
> [(a = b.call(c)) = (a
> `````

> `````js
> [(a =
> `````

> `````js
> ({a = [
> `````

> `````js
> ({a = [b]} = 1 /
> `````


> `````js
> ({a = [b]} = 1
> `````

> `````js
> ({a = [b]}
> `````

> `````js
> ({a = [b]
> `````

> `````js
> ({a = [b
> `````


> `````js
> ({a = [b]}
> `````

> `````js
> ({a = [
> `````

### Templates

#### stand-alone

`````js
#
`````

#### with strict directive

`````js
"use strict"; #
`````

#### in a block

`````js
{ # }
`````