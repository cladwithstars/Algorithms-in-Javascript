const deepEquals = require("./deepEquals");

test("strings equal", () => {
  expect(deepEquals("hello", "hello")).toBe(true);
});

test("strings unequal", () => {
  expect(deepEquals("hello", "hEll")).toBe(false);
});

test("nums unequal", () => {
  expect(deepEquals(0, 1)).toBe(false);
});

test("nums equal", () => {
  expect(deepEquals(1, 1)).toBe(true);
});

test("one array one non array", () => {
  expect(deepEquals([1, 2, 3], false)).toBe(false);
});

test("arrays equal", () => {
  expect(deepEquals([1, 2, 3], [1, 2, 3])).toBe(true);
});

test("arrays unequal but same length", () => {
  expect(deepEquals([1, 2, 3], [1, 2, 4])).toBe(false);
});

test("arrays unequal and diff length", () => {
  expect(deepEquals([1, 2], [1, 2, 3])).toBe(false);
});

test("NaN equal", () => {
  expect(deepEquals(NaN, NaN)).toBe(true);
});

test("null equal", () => {
  expect(deepEquals(null, null)).toBe(true);
});

test("one null value", () => {
  expect(deepEquals(null, {})).toBe(false);
});

test("null and undefined", () => {
  expect(deepEquals(null, undefined)).toBe(false);
});

test("two undefined values", () => {
  expect(deepEquals(undefined, undefined)).toBe(true);
});

test("object and array", () => {
  expect(deepEquals([1, 2], { a: 2 })).toBe(false);
});

test("two empty objects", () => {
  expect(deepEquals({}, {})).toBe(true);
});

test("two same non-empty objects", () => {
  expect(deepEquals({ a: 2 }, { a: 2 })).toBe(true);
});

test("two diff non-empty objects same keys", () => {
  expect(deepEquals({ a: 3 }, { a: 2 })).toBe(false);
});

test("two diff non-empty objects diff keys", () => {
  expect(deepEquals({ a: 3 }, { b: 3 })).toBe(false);
});

test("two same complex objects", () => {
  expect(
    deepEquals(
      { a: [1, 2, 3, [1, 2]], b: { c: [1] } },
      { a: [1, 2, 3, [1, 2]], b: { c: [1] } }
    )
  ).toBe(true);
});

test("two diff complex objects", () => {
  expect(
    deepEquals(
      { a: [1, 2, 3, [1, 2, undefined]], b: { c: [false] } },
      { a: [1, 2, 3, [1, 2, undefined]], b: { c: [true] } }
    )
  ).toBe(false);
});
