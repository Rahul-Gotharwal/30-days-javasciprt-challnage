// -----------------cancelable function--------//
// var cancellable = function(fn, args, t){
//     let timeoutId;
//     const cancelfn = () =>{
//         clearTimeout(timeoutId);
//         console.log("function is cancel")
//     };
//     const delayedfn = ()=>{
//         fn(...args)
//     };
//     timeoutId = setTimeout(delayedfn,t); // delay functon is called with specified time  t that is 3000 
//     return cancelfn
// }
// const result = [];
// const args = [2];// it is contain the value of 2 
// const fn = (x) => x*5;
// const t =3000; // delay time 
// // if the cancltime is less than settime that is t = 5000 it will returnthe blank []
// // because function is cancel 
// const cancelTimems = 5000;

// const start = performance.now()
// const log = (...argsArr) => {
//     const diff = Math.floor(performance.now() - start);
//     result.push({"time":diff,"returned":fn(...argsArr)})
// }
// const cancel = cancellable(log,args,t);
// const maxT = Math.max(t,cancelTimems) 
//If t is 35 and cancelTimeMs is 5000, maxT will be 5000.
//If t is 3000 and cancelTimeMs is 50, maxT will be 3000.
// setTimeout(cancel,cancelTimems); //setTimeout(cancel, 5000) is called, scheduling the cancellation of the delayed execution after 50 milliseconds.
// setTimeout(() => {
//     console.log(result)
// },maxT );


// it is easy to understad what is happnening
/**
 * @param {Function} fn
 * @param {Array} args
 * @param {number} t
 * @return {Function}
 */
const cancellable = function(fn, args, t) {
    let timeoutId;

    const cancelFn = () => {
        clearTimeout(timeoutId);
        console.log("Function canceled");
    };

    const delayedFn = () => {
        console.log("Executing function:", fn(...args));
    };

    timeoutId = setTimeout(delayedFn, t); 

    return cancelFn;
};

const fn = (x) => x * 5;
const args = [2];
const t = 20;

const cancelTimeMs = 50;
const cancelFn = cancellable(fn, args, t); // it will provdethe cancelfn from main function that is return from the main function
setTimeout(cancelFn, cancelTimeMs);
// Example to show the result after delay
setTimeout(() => {
    console.log("Example Result after delay:", fn(...args));
}, t + 5);


// another approach
/**
 * @param {Function} fn
 * @param {Array} args
 * @param {number} t
 * @return {Function}
 */
// const cancellable = function(fn, args, t) {
//     // cancelFn function
//     const cancelFn = function() {
//         clearTimeout(timer);
//         console.log("Function canceled");
//     };

//     const timer = setTimeout(() => {
//         fn(...args);
//         console.log("Function executed after delay");
//     }, t);

//     return cancelFn;
// };

// const result = [];

// const fn = (x) => x * 5;
// const args = [2];
// const t = 20;
// const cancelT = 50;

// const log = (...argsArr) => {
//     result.push(fn(...argsArr));
// };

// const cancel = cancellable(log, args, t);

// setTimeout(() => {
//     cancel();
//     console.log(result); // [{"time":20,"returned":10}]
// }, cancelT);
