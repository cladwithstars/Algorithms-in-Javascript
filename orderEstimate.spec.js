const orderEstimate = require("./orderEstimate");
const {
  fruitData,
  priceMap,
  ZENI_FRUITS,
  VASANI_FRESH,
} = require("./constants");

test("1 Banana", () => {
  expect(orderEstimate(fruitData, priceMap, "Banana", 1)).toBe("0.75");
});

test("3 Banana", () => {
  expect(orderEstimate(fruitData, priceMap, "Banana", 3)).toBe("2.25");
});

test("10 Banana", () => {
  expect(orderEstimate(fruitData, priceMap, "Banana", 10)).toBe("7.62");
});

test("300 Banana", () => {
  expect(orderEstimate(fruitData, priceMap, "Banana", 300)).toBe(false);
});

test("0 Apple", () => {
  expect(orderEstimate(fruitData, priceMap, "Apple", 0)).toBe("0.00");
});

test("5 Apple", () => {
  expect(orderEstimate(fruitData, priceMap, "Apple", 5)).toBe("8.85");
});

test("20 Apple", () => {
  expect(orderEstimate(fruitData, priceMap, "Apple", 20)).toBe("44.01");
});

test("20 Apple", () => {
  expect(orderEstimate(fruitData, priceMap, "Apple", 20)).toBe("44.01");
});

test("79 Apple", () => {
  expect(orderEstimate(fruitData, priceMap, "Apple", 79)).toBe("221.01");
});

test("80 Apple", () => {
  expect(orderEstimate(fruitData, priceMap, "Apple", 80)).toBe(false);
});

test("1 Peaches", () => {
  expect(orderEstimate(fruitData, priceMap, "Peaches", 1)).toBe("2.79");
});
