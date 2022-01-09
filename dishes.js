/*
Problem description:

You are given a list dishes, where each element consists of a list 
of strings beginning with the name of the dish, followed by all the ingredients used in preparing it. 
You want to group the dishes by ingredients, so that for each ingredient you'll be able to find all the 
dishes that contain it (if there are at least 2 such dishes).

Return an array where each element is a list beginning with the ingredient name, followed by the names of 
all the dishes that contain this ingredient. The dishes inside each list should be sorted lexicographically,
 and the result array should be sorted lexicographically by the names of the ingredients.

*/

function solution(dishes) {
  const res = [];
  const map = {};
  for (let j = 0; j < dishes.length; j++) {
    const dish = dishes[j];
    for (let i = 1; i < dish.length; i++) {
      const ingredient = dish[i];
      if (map[ingredient]) {
        map[ingredient].push(dish[0]);
      } else {
        map[ingredient] = [dish[0]];
      }
    }
  }
  for (const ingredient in map) {
    if (map[ingredient].length > 1) {
      const sortedDishes = map[ingredient].sort();
      const ingredientArr = [ingredient, ...sortedDishes];
      res.push(ingredientArr);
    }
  }
  const sortedRes = res.sort((a, b) => {
    if (a[0] < b[0]) return -1;
    if (a[0] > b[0]) return 1;
    return 0;
  });
  return sortedRes;
}

const dishes = [
  ["Salad", "Tomato", "Cucumber", "Salad", "Sauce"],
  ["Pizza", "Tomato", "Sausage", "Sauce", "Dough"],
  ["Quesadilla", "Chicken", "Cheese", "Sauce"],
  ["Sandwich", "Salad", "Bread", "Tomato", "Cheese"],
];

console.log(solution(dishes));
// expect =
// [["Cheese", "Quesadilla", "Sandwich"],
// ["Salad", "Salad", "Sandwich"],
// ["Sauce", "Pizza", "Quesadilla", "Salad"],
// ["Tomato", "Pizza", "Salad", "Sandwich"]
