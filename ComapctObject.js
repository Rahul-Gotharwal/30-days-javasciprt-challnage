function compactObject(obj) {
   // If the input is not an object or is null, return it as is
  if (typeof obj !== "object" || obj === null) {
    return obj;
  }
  if (Array.isArray(obj)) {
    // If the input is an array, filter out falsy values and recursively compact the elements
    return obj
      .filter(
        (item) =>
          item !== null &&
          item !== 0 &&
          item !== false &&
          item !== "" &&
          item !== undefined &&
          !Number.isNaN(item) 
      )
      .map((item) => compactObject(item));
  }
  // If the input is an object, create a new object with compacted key-value pairs
  const compactObj = {};
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      const value = obj[key];
       // Check if the value is falsy and exclude it, otherwise, recursively compact the value
      if (
        value !== null &&
        value !== 0 &&
        value !== false &&
        value !== "" &&
        value !== undefined &&
        !Number.isNaN(value)
      ) {
        compactObj[key] =
          typeof value === "object" ? compactObject(value) : value;
      }
    }
  }
  return compactObj;
}
const example1 = [null, 0, false, 1];
const example2 = { a: null, b: [false, 1] };

console.log(compactObject(example1)); // Output: [1]
console.log(compactObject(example2)); // Output: {"b": [1]}
