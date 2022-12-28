const promiseAll = (iterable) => {
  if (iterable.length === 0) return iterable;
  return new Promise((resolve, reject) => {
    const results = [];
    let resolved = 0;
    iterable.forEach((elem, idx) => {
      Promise.resolve(elem)
        .then((res) => {
          results[idx] = res;
          resolved++;
          if (resolved === iterable.length) {
            resolve(results);
          }
        })
        .catch((err) => reject(err));
    });
  });
};

const p = new Promise((resolve, reject) => resolve(10));
const p2 = new Promise((resolve, reject) => resolve(20));
const p3 = new Promise((resolve, reject) => resolve(30));
const p4 = new Promise((resolve, reject) => reject(30));

console.log(promiseAll([p, p2, p3]).then((res) => console.log(res)));

(async function () {
  const res = await promiseAll([p, p2, p3, p4]);
  console.log(res);
})();
