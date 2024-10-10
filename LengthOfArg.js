//-------------with for loop -----------//
var argumentsLength = function(...args){
var count = 0
for(let i=0;i<args.length;i++){
   count = count+1
}
return count
}
const fn = argumentsLength(5,4,6)
console.log((fn))

// -----------without for loop-----------//
// var argumentsLength = function(...args) {
//     return args.length;
// }

// const fn = argumentsLength(5, 4, 6);
// console.log(fn); 