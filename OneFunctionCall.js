
//---------by using the keep track of function using flag ---------//
// var once = function(fn){
//  let hasbeencalled = false;
//  return function(...args){
//     if(!hasbeencalled){
//       hasbeencalled = true;
//       return fn(...args)
//     }else{
//         return undefined
//     }
//  }
// }
// let fn = once((a,b,c) => {
//     return a+b+c;
// })
// console.log(fn(1,2,3));
// console.log(fn(2,4,6))

//--------- without using track ------------//
var once = function(fn) {
    return function(...args) {
        const result = fn && fn(...args);
        fn = undefined; // Replace the original function with null after the first call
        return result;
    };
};

let fn = once((a, b, c) => {
    return a + b + c;
});

console.log(fn(1, 2, 3)); // Output: 6
console.log(fn(4, 5, 6)); // Output: undefined

