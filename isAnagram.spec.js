const { isAnagram, isAnagram2 } = require("./isAnagram");

test("isAnagram true", () => {
  expect(isAnagram("hi", "ih")).toBe(true);
});

test("isAnagram false", () => {
  expect(isAnagram("hilo", "ihllo")).toBe(false);
});

test("isAnagram2 true", () => {
  expect(isAnagram2("hi", "ih")).toBe(true);
});

test("isAnagram2 false", () => {
  expect(isAnagram2("hilo", "ihllo")).toBe(false);
});
