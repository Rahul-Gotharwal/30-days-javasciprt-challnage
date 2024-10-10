// function memoize(fn){
//     const cache = new Map()
//     let callCount = 0;
//     return function (...args){
//         const key = JSON.stringify(args)
//         if(cache.has(key)){
//             return cache.get(key)
//         }else{
//             const result = fn(...args)
//             cache.set(key , result)
//             callCount++;
        
//             return result
//         }
//     }

// }
// const sum = function(a,b){
//     return a+b
// }
// const fib = function(n){
//  if(n<=1){
//     return 1;

//  }else{
//    return  fib(n-1)+fib(n-2)
//  }
// }
// const factorial = function(n){
//     if(n<=1){
//         return 1 
//     }
//     else{
//         return factorial(n-1)*n
//     }
// }

// const memoizesum = memoize(sum);
// const memoizefib = memoize(fib);
// const meoizefactorial = memoize(factorial);


// console.log(memoizesum(5,5));
// console.log(memoizefib(5));
// console.log(meoizefactorial(4))
// ------------------//



 /* the cache is the method in this function if  the result is stored already in the cache with same perametres  it will directly return it 
 directly without execute the program like it will return the cached value
 */
/**
 * @param {Function} fn
 */
// function memoize(fn) {
    
//     const cache = {};
   
//     return function(...args) {
//      const key = JSON.stringify(args);
     
//      if (key in cache) {
//        return cache[key];
//      }
     
//      const result = fn.apply(this ,args);
//      cache[key] = result;
     
//      return result;
//    }
   
//  }
 
 
//  const memoizedSum = memoize(function(a, b) {
//    return a + b;
//  });
 
//  console.log(memoizedSum(2, 3)); // Output: Computing sum, 5
//  console.log(memoizedSum(2, 3)); // Output: 5



// like in this code we call the same function with diffrent perametres console.log(memoizesum(5, 5));  it will return us callcount 2 
function memoize(fn) {
    const cache = new Map();
    let callCount = 0;

    const memoizedFn = function (...args) {
        const key = JSON.stringify(args);

        if (cache.has(key)) {
            console.log(key)
            return cache.get(key);
            
        } else {
            const result = fn(...args);
            cache.set(key, result);
            callCount++;
            return result;
        }
    };

    memoizedFn.getCallCount = function () {
        return callCount;
    };

    return memoizedFn;
}

const sum = function(a, b) {
    return a + b;
};

const fib = function(n) {
    if (n <= 1) {
        return 1;
    } else {
        return fib(n - 1) + fib(n - 2);
    }
};

const factorial = function(n) {
    if (n <= 1) {
        return 1;
    } else {
        return factorial(n - 1) * n;
    }
};

const memoizesum = memoize(sum);
const memoizefib = memoize(fib);
const memoizefactorial = memoize(factorial);

console.log(memoizesum(5, 5));
console.log(memoizesum(5, 4));
console.log(memoizefib(5));
console.log(memoizefactorial(4));
console.log(memoizesum.getCallCount()); // Output: 1



