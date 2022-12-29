const deepEquals = (val1, val2) => {
  // alternatively we can do JSON.stringify(val1) === JSON.stringify(val2); but there will be a couple bugs here with NaN for example

  if (val1 === val2) return true;

  // CASE: two primitve values
  if (typeof val1 !== "object" && typeof val2 !== "object") {
    if (valEqualsNaN(val1) && valEqualsNaN(val2)) return true;
    else if (val1 !== val2) return false;
  }

  // CASE: only one primitive value
  if (
    (typeof val1 === "object" && typeof val2 !== "object") ||
    (typeof val1 !== "object" && typeof val2 === "object")
  )
    return false;

  // CASE: one null value
  if (val1 === null || val2 === null) return false;

  // CASE: only one value is an array
  if (
    (Array.isArray(val1) && !Array.isArray(val2)) ||
    (Array.isArray(val2) && !Array.isArray(val1))
  )
    return false;

  // CASE: both values are arrays
  if (Array.isArray(val1) && Array.isArray(val2)) {
    if (val1.length !== val2.length) return false;
    for (let i = 0; i < val1.length; i++) {
      if (!deepEquals(val1[i], val2[i])) return false;
    }
    return true;
  }

  // CASE: both values are 'actual objects'
  const val1Keys = Object.keys(val1);
  const val2Keys = Object.keys(val2);

  if (val1Keys.length !== val2Keys.length) return false;
  for (let key of val1Keys) {
    if (!(key in val2)) return false;
    if (!deepEquals(val1[key], val2[key])) return false;
  }

  return true;
};

// Helper functions
const valEqualsNaN = (val) => {
  return isNaN(val) && typeof val === "number";
};

module.exports = deepEquals;
