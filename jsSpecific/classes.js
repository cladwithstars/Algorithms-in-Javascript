class Values {
  constructor(vals) {
    this.vals = vals || [];
  }

  getSum() {
    return this.vals.reduce((acc, num) => acc + num, 0);
  }

  addVal(val) {
    this.vals.push(val);
    return this.vals;
  }
}

const prices = new Values([1, 2, 3, 4]);

console.log(prices.getSum());
console.log(prices.addVal(20));
console.log(prices.getSum());

const test = new Values();
console.log(test.getSum());
console.log(test.addVal(20));
console.log(test.getSum());
