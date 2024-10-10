// var flatttenArray = function (arr, n) {
//   flattened = [];
//   function flattenHelper(array, depth) {
//     array.forEach((element) => {
//       if (Array.isArray(element) && depth < n) {
//         /*As the recursion unfolds, elements from different levels of nesting are added to the flattened array based on whether they are arrays and whether the depth condition is satisfied.
// Elements are added to the flattened array within each recursive call.*/
//         flattenHelper(element, depth + 1);
//       } else {
//         flattened.push(element);
//       }
//     });
//   }
//   flattenHelper(arr, 0);
//   return flattened;
// };
// const input1 = [1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]];
// const output1 = flatttenArray(input1, 0);
// console.log(output1); // Output: [1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]]

// // Example 2
// const input2 = [1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]];
// const output2 = flatttenArray(input2, 1);
// console.log(output2);
/*
Function Call: flattenArray(input1, 0);

input1 is [1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]].
n is 0.
The function flattenArray is called with these arguments.
Inside flattenArray:

flattened is initialized as an empty array (const flattened = [];).
flattenHelper(arr, 0); is called.
Function Call: flattenHelper(arr, 0);

arr is [1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]].
depth is 0.
The function flattenHelper is called with these arguments.
*/

/*
`Array.isArray()` is a built-in JavaScript method that checks if a given value is an array. It returns `true` if the value is an array and `false` otherwise.

In the provided code, `Array.isArray(element)` is used to determine whether the current element being processed in the array is itself an array or not. This check is crucial because the flattening logic is applied only to subarrays, not to individual elements.

Here's how `Array.isArray()` is used in the context of the provided code:

```javascript
if (Array.isArray(element) && depth < n) {
    flattenHelper(element, depth + 1);
} else {
    flattened.push(element);
}
```

Explanation:

- `Array.isArray(element)`: Checks if the current `element` is an array.
- `depth < n`: Checks if the current depth is less than the specified depth limit (`n`).

If both conditions are true, it means the current element is an array, and the recursion (`flattenHelper(element, depth + 1);`) is allowed to continue to flatten the subarray. If either condition is false, it means the element is not an array, or the specified depth limit has been reached, and the current element is directly pushed to the `flattened` array without further recursion.

Here's the breakdown:

- If `element` is an array and the current depth is less than `n`, the recursion continues to process the subarray.
- If `element` is not an array or the current depth is equal to or greater than `n`, the element is directly added to the flattened array without further recursion.

This use of `Array.isArray()` ensures that the flattening logic is applied only to subarrays, preventing unnecessary attempts to flatten individual non-array elements.
*/

//--------how the square barckests are remove
/*

Let's break down the logic of `flattenHelper` to understand how it removes or retains square brackets:

```javascript
function flattenHelper(array, depth) {
    array.forEach(element => {
        if (Array.isArray(element) && depth < n) {
            flattenHelper(element, depth + 1);
        } else {
            flattened.push(element);
        }
    });
}
```

1. **Function Parameters:**
   - `array`: The current array being processed.
   - `depth`: The current depth of nesting.

2. **`array.forEach(element => { ... });`:**
   - This loop iterates over each element in the `array`.

3. **`if (Array.isArray(element) && depth < n) { ... } else { ... }`:**
   - This condition checks if the current `element` is an array (`Array.isArray(element)`) and if the current depth is less than the specified depth limit (`depth < n`).

4. **If the condition is true (`Array.isArray(element)` and `depth < n`):**
   - The recursion continues (`flattenHelper(element, depth + 1);`). The function is called with the subarray (`element`) and an increased depth (`depth + 1`).
   - Since the condition is true, this means the subarray is flattened up to the specified depth, and square brackets are retained around it.

5. **If the condition is false (either not an array or depth is greater than or equal to `n`):**
   - The `else` block is executed (`flattened.push(element);`), which means the current element is not an array or the specified depth limit is reached.
   - The current element is directly added to the `flattened` array without further recursion.
   - If the current element is an array but the depth limit is reached, it won't be further flattened, and square brackets won't be retained.

By controlling the recursion and the condition for pushing elements to the `flattened` array, the logic allows for flattening subarrays up to the specified depth (`n`) while preserving the structure beyond that depth. This is how the removal or retention of square brackets is determined during the flattening process.
*/
var flat = function(arr, n){
    const res = [];

    function helper(arr, depth){
        for (const val of arr) {
            if (typeof val === "object" && depth < n) {
                // If val is an object and depth is less than n, recursively call helper
                helper(val, depth + 1);
            } else {
                // If val is not an object or depth is greater than or equal to n, push val to res
                res.push(val);
            }
        }
        return res;
    }

    return helper(arr, 0);
}

// Example usage
const nestedArray = [1, [2, [3, 4], 5], 6];
const flattenedArray = flat(nestedArray, 1);

console.log(flattenedArray);
