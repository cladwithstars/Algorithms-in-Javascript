const assign = (obj, ...rest) => {
  const merged = rest.reduce((acc, obj) => ({ ...acc, ...obj }), {});
  Object.assign(obj, { ...merged });
  return obj;
};

let a = { a: 2, g: 991919191 };
let foo = { a: "a property" };
let bar = {
  b: 4,
  c: "an other property",
  d: { nested: { arr: [1996, 1997], num: 20 } },
};

console.log(assign(a, bar, foo));
