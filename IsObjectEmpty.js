var isEmpty = function (obj) {
  if (Array.isArray(obj)) {
    return obj.length === 0;
  } else if (typeof obj === "object" && obj !== null) {
    return Object.keys(obj).length === 0;
  } else {
    return false;
  }
};

console.log(isEmpty({ X: 5, Y: 4 })); // false
console.log(isEmpty({})); // true
console.log(isEmpty([4, 5])); //[4,5]
console.log([null, false, 0]); // same value
