
const a = Object.freeze({
  foo: { greeting: 'Hello' },
  bar: 'encule',
  baz: '!'
});

a.foo.greeting = 'Goodbye';
a.bar = "encule"

console.log(`${ a.foo.greeting }, ${ a.bar }${a.baz}`);