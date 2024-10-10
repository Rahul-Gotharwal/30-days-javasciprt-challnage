// with the approch of the timout function
// var cancellable = function(fn, args, t) {
//     let intervalId;
    
//     const cancelFn = () => {
//         clearInterval(intervalId);
//         console.log("Function canceled from interval");
//     };

//     const delayedFn = () => {
//         fn(...args);
//     };

//     intervalId = setInterval(delayedFn, t);
//     //in your code, setInterval is used to repeatedly execute the delayedFn function at a specified interval (t). The time interval is determined by the t value provided when creating the interval.

//     return cancelFn;
// };

// const result = [];
// const args = [4];
// const fn = (x) => x * 2;
// const t = 35;
// const cancelTimeMs = 500;

// const start = performance.now();

// const log = (...argsArr) => {
//     const intervalDiff = Math.floor(performance.now() - start);
//     result.push({ "timeInterval": intervalDiff, "returned value": fn(...argsArr) });
// };

// const cancel = cancellable(log, args, t); // it is return the cancelFn value
// const maxT = Math.max(t, cancelTimeMs);
// //If t is 35 and cancelTimeMs is 5000, maxT will be 5000.
// //If t is 3000 and cancelTimeMs is 50, maxT will be 3000.
// setTimeout(() => {
//     cancel();//The cancel variable now holds the cancelFn function, which can be invoked to cancel the interval.
//     console.log(result);
// }, maxT);


// anther approach
// const cancellable = function(fn, args, t) {
//     const result = [];

//     const delayedFn = function() {
//         const time = performance.now();
//         const returnedValue = fn(...args);
//         result.push({ time, returnedValue });
//     };

//     const intervalId = setInterval(delayedFn, t);

//     const cancelFn = function() {
//         clearInterval(intervalId);
//         console.log("Cancelled");
//     };

//     return { cancelFn, result };
// };

// // Example usage:
// const fn = (x) => x * 2;
// const args = [4];
// const t = 35;
// const cancelTimeMs = 190;

// const { cancelFn, result } = cancellable(fn, args, t);

// // Schedule cancelFn to be called after cancelTimeMs
// setTimeout(cancelFn, cancelTimeMs);

// // Print the result after a sufficient time (e.g., cancelTimeMs + 100ms)
// setTimeout(() => {
//     console.log(result);
// }, cancelTimeMs + 100);


// with the only return of cancelfn 
/**
 * @param {Function} fn
 * @param {Array} args
 * @param {number} t
 * @return {Function}
 */
// var cancellable = function(fn, args, t) {
//     const result = [];
//     const start = performance.now();

//     const delayedFn = function() {
//         const time = Math.floor(performance.now() - start);
//         const returnedValue = fn(...args);
//         result.push({ time, returnedValue });
//     };

//     const intervalId = setInterval(delayedFn, t);

//     const cancelFn = function() {
//         clearInterval(intervalId);
//         console.log("Cancelled");
//         console.log(result); // Output the result when cancellation occurs
//     };

//     return cancelFn;
// };

// const fn = (x) => x * 2;
// const args = [4];
// const t = 35;
// const cancelTimeMs = 190;

// const cancel = cancellable(fn, args, t);

// // Schedule cancel to be called after cancelTimeMs
// setTimeout(cancel, cancelTimeMs + t + 15); // Adjusted the timeout value



// leetcode answer 

