const binSearch = require("./binSearch");

test("binary search where num exists in array", () => {
  expect(binSearch([1, 2, 3, 4, 5], 4)).toBe(3);
});

test("binary search where num doesnt exists in array", () => {
  expect(binSearch([1, 2, 3, 4, 5], 25)).toBe(-1);
});
