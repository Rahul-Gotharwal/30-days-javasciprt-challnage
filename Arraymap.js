var array = function(inputArray,squareFunctionWithIndex ) { // parameter name can be anything
    const ArrayResult = new Array(inputArray.length);

    for (let i = 0; i < inputArray.length; i++) {
        // Apply the transformation function to each element and its index
        ArrayResult[i] = squareFunctionWithIndex(inputArray[i], i);
    }

    return ArrayResult;

}

// Example usage:
const inputArray = [1, 2, 3, 4, 5];

// Define a transformation function (example: square each element and include the index)
const squareFunctionWithIndex = function(element, index) {
    return { value: element * element, index };
}

// Call the map function with the input array and transformation function
const result = array(inputArray, squareFunctionWithIndex);
// the array function return the arayresult in the form of the object we are only calling it by the parameters only
console.log(result);

//---------------function where loop is in the transform function ---------//
// var array = function (transform,arr) {
//   return transform(arr); 
// };
// const inputArray = [1, 2, 3, 4, 5];
// const transform = function (arr) {
//   const ArrayResult = new Array(arr.length);
//   for (i = 0; i < arr.length; i++) {
//     ArrayResult[i] = { value: arr[i] + arr[i], index: i };
//   }
//   return ArrayResult;
// };
// const result = array(transform,inputArray);
// console.log(result);

