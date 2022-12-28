/**
 * @callback func
 * @param {number} wait
 * @return {Function}
 */
function debounce(func, wait) {
  let timeout = null;
  return function (...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.call(this, ...args), wait);
  };
}

const log = (msg) => {
  console.log(msg);
};

const logDebounced = debounce(log, 1000);
logDebounced("this msg should NOT appear");
logDebounced("this msg should appear");
