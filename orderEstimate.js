// import { VASANI_FRESH, ZENI_FRUITS, fruitData } from "./constants.js";
const { VASANI_FRESH, ZENI_FRUITS } = require("./constants");

const orderEstimate = (fruitData, priceMap, fruitName, amt) => {
  const priceData = priceMap[fruitName];
  const inventory = getInventory(fruitData, fruitName);

  const vasaniPrice = priceData[VASANI_FRESH];
  const zeniPrice = priceData[ZENI_FRUITS];

  let estimate = 0;
  if (vasaniPrice <= zeniPrice) {
    if (inventory[VASANI_FRESH] >= amt) {
      return (amt * vasaniPrice).toFixed(2);
    }
    estimate += inventory[VASANI_FRESH] * vasaniPrice;
    const leftover = amt - inventory[VASANI_FRESH];
    if (leftover > inventory[ZENI_FRUITS]) {
      return false;
    }
    estimate += zeniPrice * leftover;
    return estimate.toFixed(2);
  } else {
    if (inventory[ZENI_FRUITS] >= amt) {
      return (amt * zeniPrice).toFixed(2);
    }
    estimate += inventory[ZENI_FRUITS] * zeniPrice;
    const leftover = amt - inventory[ZENI_FRUITS];
    if (leftover > inventory[VASANI_FRESH]) {
      return false;
    }
    estimate += vasaniPrice * leftover;
    return estimate.toFixed(2);
  }
};

const getInventory = (fruitData, fruitName) => {
  const inventory = { [VASANI_FRESH]: null, [ZENI_FRUITS]: null };
  for (let fruit of fruitData) {
    if (fruit.fruit_name === fruitName) {
      if (fruit.supplier === VASANI_FRESH) {
        inventory[VASANI_FRESH] = fruit.inventory_count;
      } else {
        inventory[ZENI_FRUITS] = fruit.inventory_count;
      }
    }
  }
  return inventory;
};

module.exports = orderEstimate;
