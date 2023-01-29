/**
 * Throttles the number of function executions
 *
 * @param {Function} fn - function to be executed
 * @param {number} ms - time limit
 */
function throttle(fn, ms) {
  let timeout,
    isThrottle = false;
  return function () {
    if (isThrottle) return;
    clearTimeout(timeout);
    fn.apply(this, arguments);
    isThrottle = true;
    timeout = setTimeout(() => (isThrottle = false), ms);
  };
}
