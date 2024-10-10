var compose = function(ItIsArray){ // The compose function takes an array of functions.
    return function(x){
        // the x will we the value 
        // reduceright takes an callback function and apply to each element
        return ItIsArray.reduceRight(function(result, currentFn){
            return currentFn(result) // It means that the current function is executed with the result of the previously composed functions.
        } ,x ) // the x is the second argument 
    }
}
const fn = compose([x => x + 1, x => 2 * x , x=>3*x]); // these are the functions of array
console.log(fn(4));

// ----------we we want to go to the left to right ----------//

// var compose = function(functions) {
//     return function(x) {   
//         if (functions.length === 0) {
//             return x; 
//         }
//         return functions.reduce(function (result, currentFn) {
//             return currentFn(result);
//         }, x);
//     }
// };
// const fn = compose([x => x + 1, x => 2 * x]);
// console.log(fn(4)); 
/*
Yes, `reduceRight` is a method that is part of the Array prototype in JavaScript. It is used to reduce the array to a single value, applying a provided function from right to left.

Here's a brief explanation:

- `reduceRight`: This method iterates over the array elements from right to left, applying the provided function to each element and accumulating a single result. The signature of `reduceRight` is `array.reduceRight(callback, initialValue)`.

- `reduce`: Similar to `reduceRight`, but it iterates over the array elements from left to right.

In the context of function composition, the choice between `reduce` and `reduceRight` determines the direction in which the composed functions are applied. If you use `reduce`, the functions will be applied from left to right, and if you use `reduceRight`, the functions will be applied from right to left.

In the previous examples:

- Using `reduceRight` in function composition means composing functions from right to left.
- Using `reduce` in function composition means composing functions from left to right.

*/