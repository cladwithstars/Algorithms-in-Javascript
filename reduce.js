const people = [
  { name: "sallie", age: 25 },
  { name: "joy", age: 23 },
  { name: "linda", age: 25 },
  { name: "helen", age: 23 },
];

const sumAges = people.reduce((sum, person) => sum + person.age, 0);
const avgAge = sumAges / people.length;

console.log(sumAges);

console.log(avgAge);
