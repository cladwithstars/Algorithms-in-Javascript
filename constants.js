const VASANI_FRESH = "Vasani Fresh";
const ZENI_FRUITS = "Zeni Fruits";

const fruitData = [
  {
    fruit_name: "Banana",
    price: 0.75,
    last_updated: "2022-Jan-01",
    inventory_count: 7,
    supplier: "Vasani Fresh",
  },
  {
    fruit_name: "Banana",
    price: 0.79,
    last_updated: "2022-Mar-01",
    inventory_count: 66,
    supplier: "Zeni Fruits",
  },
  {
    fruit_name: "Apple",
    price: 3.0,
    last_updated: "2022-Jan-01",
    inventory_count: 66,
    supplier: "Vasani Fresh",
  },
  {
    fruit_name: "Apple",
    price: 1.77,
    last_updated: "2022-June-02",
    inventory_count: 13,
    supplier: "Zeni Fruits",
  },
  {
    fruit_name: "Dragon Fruit",
    price: 9.0,
    last_updated: "1999-Feb-26",
    inventory_count: 4,
    supplier: "Vasani Fresh",
  },
  {
    fruit_name: "Dragon Fruit",
    price: 8.0,
    last_updated: "2001-Nov-02",
    inventory_count: 5,
    supplier: "Zeni Fruits",
  },
  {
    fruit_name: "Kiwi",
    price: 0.25,
    last_updated: "1996-Jan-25",
    inventory_count: 301,
    supplier: "Vasani Fresh",
  },
  {
    fruit_name: "Kiwi",
    price: 4.0,
    last_updated: "2021-Oct-11",
    inventory_count: 19,
    supplier: "Zeni Fruits",
  },
  {
    fruit_name: "Orange",
    price: 0.99,
    last_updated: "2020-Jun-06",
    inventory_count: 67,
    supplier: "Vasani Fresh",
  },
  {
    fruit_name: "Orange",
    price: 1.25,
    last_updated: "2019-Apr-09",
    inventory_count: 45,
    supplier: "Zeni Fruits",
  },
  {
    fruit_name: "Mango",
    price: 3.29,
    last_updated: "2014-Sep-20",
    inventory_count: 30,
    supplier: "Vasani Fresh",
  },
  {
    fruit_name: "Peaches",
    price: 2.79,
    last_updated: "2015-Oct-14",
    inventory_count: 45,
    supplier: "Zeni Fruits",
  },
];

let _priceMap = {};
for (let name of fruitData.map((fruit) => fruit.fruit_name)) {
  _priceMap[name] = { [VASANI_FRESH]: null, [ZENI_FRUITS]: null };
}

fruitData.forEach(({ fruit_name, price, supplier }) => {
  supplier === VASANI_FRESH
    ? (_priceMap[fruit_name][VASANI_FRESH] = price)
    : (_priceMap[fruit_name][ZENI_FRUITS] = price);
});

const priceMap = _priceMap;

module.exports = { priceMap, fruitData, VASANI_FRESH, ZENI_FRUITS };
