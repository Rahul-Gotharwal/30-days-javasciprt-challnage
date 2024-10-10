// const timelimit = function (fn, t) {
//   return async function (...args) {
//     return new Promise(async (resolve, reject) => {
//       const timeoutid = setTimeout(() => {
//         reject("Time Limit Exceed");
//        // A setTimeout is set to reject the promise with the message "Time Limit Exceed" after t milliseconds.
//       }, t);  // it is the time (t) that is set by the settimeout function to reolve or reject the promise if within the time the promise is reslve the cleartimeout will not work  and resolve the result or if the time limtit is exceed the cleartimeot will reject the promise
//       try {
//         const result = await fn(...args);
//         clearTimeout(timeoutid);
//         //The global clearTimeout() method cancels a timeout previously established by calling setTimeout().
//         resolve(result);
//       } catch (error) {
//         clearTimeout(timeoutid);
//         reject(result); 
//       }
//     });
//   };
// };
// const fn = async (n) => {
//     //fn is an asynchronous function that takes a parameter n.
// //It contains an asynchronous operation, a setTimeout of 100 milliseconds.
// //After the delay, it resolves with the square of the input n.
//     // the promise  is resolve at the hubdered miliseconds and we terminate it at the 50 
//   await new Promise((resolve) => setTimeout(resolve, 100));
//   return n * n;
// };
// const inputs = [5];
// const t = 50;
// //If you want to resolve the promise instead of rejecting it, you need to adjust the time limit (t) to be longer than the time it takes for the asynchronous operation to complete. In your case, the asynchronous operation (fn) includes a setTimeout of 100 milliseconds. 
// const limited = timelimit(fn, t); // this function takes the value when only ity is run  in the correct time

// (async () => {
//   const start = performance.now();
//   let result;
//   try {
//     const res = await limited(...inputs);
//     result = { resolved: res, time: Math.floor(performance.now() - start) };
//   } catch (error) {
//     result = { rejected: error, time: Math.floor(performance.now() - start) };
//   }

//   console.log(result);
// })();




// leetcode answer
/**
 * @param {Function} fn - Asynchronous function to be time-limited
 * @param {number} t - Time limit in milliseconds
 * @return {Function} - Time-limited function
 */
var timeLimit = function(fn, t) {
    return async function(...args) {
        // Execute the original function and capture the promise it returns
        const originalFnPromise = fn(...args);

        // Create a promise for the timeout using setTimeout
        const timeoutPromise = new Promise((_, reject) => {
            setTimeout(() => {
                reject('Time Limit Exceeded');
            }, t);
        });
/*The Promise.race function is a method provided by JavaScript's Promise object. It takes an iterable of promises and returns a new promise that is settled with the result of the first promise (either resolved or rejected) from the iterable.*/ 
        // Use Promise.race to resolve with the result of the original function or reject with timeout
        return Promise.race([originalFnPromise, timeoutPromise]);
    };
};
const fn = async (n) => {
    await new Promise((resolve) => setTimeout(resolve, 100));
    return n * n;
};

const limited = timeLimit(fn, 50);
const inputs = [5];

limited(...inputs)
    .then((result) => console.log({ resolved: result }))
    .catch((error) => console.log({ rejected: error }));
