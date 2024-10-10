async function sleep(millies){
    try {
        await new Promise(resolve => setTimeout(resolve,millies));
        return Promise.resolve(millies)
    } catch (error) {
        return Promise.error
    }
}
const t = Date.now();
sleep(200).then(()=>{
    console.log(Date.now()-t)
})

// with async await syntax or checking the diffrence with 5000 miliseconds
// async function sleep(millies){
//     try {
//       const value = await new Promise(resolve => setTimeout(() =>resolve(millies),5000));
//         //console.log(value)
//         return Promise.resolve(value)
//     } catch (error) {
//         return Promise.error
//     }
// }
// async function example(){
//     const t = Date.now();
//     const result = await sleep(100);
//     console.log(result);
//     console.log(Date.now()-t);
// }
// example();
//In the provided code:

// ```javascript
// async function sleep(millies){
//     try {
//         const value = await new Promise(resolve => setTimeout(() => resolve(millies), 5000));
//         return Promise.resolve(value);
//     } catch (error) {
//         return Promise.reject(error);
//     }
// }

// async function example(){
//     const t = Date.now();
//     const result = await sleep(100);
//     console.log(result);
//     console.log("Time Difference:", Date.now() - t, "milliseconds");
// }

// example();
// ```

// Here's the sequence of how the functions work:

// 1. **`example` Function:**
//    - The `example` function is called at the end (`example();`).
//    - `Date.now()` is called to get the initial timestamp (`t`).
//    - It calls the `sleep(100)` function.
//    - The `sleep` function sets a timeout for 5000 milliseconds using `setTimeout` and then immediately returns a Promise.
//    - The `await` keyword is used to pause execution of the `example` function until the Promise from `sleep` resolves.
//    - Once the Promise from `sleep` resolves (after approximately 5000 milliseconds), the execution continues.
//    - The resolved value of the `sleep` function is logged as `result`.
//    - The time difference (`Date.now() - t`) is logged.

// 2. **`sleep` Function:**
//    - `sleep(100)` is called with an argument of `100`.
//    - The `sleep` function sets up a `Promise` using `setTimeout`.
//    - The timeout is set for 5000 milliseconds, but the `resolve` function inside the `setTimeout` is provided with the value `millies` (which is `100` in this case).
//    - The `Promise` is returned immediately.
//    - The `await` in the `example` function pauses the execution until the `Promise` from `sleep` resolves.

//In summary, the `example` function runs first. It calls the `sleep` function, which sets a timeout of 5000 milliseconds but immediately returns a Promise. The `await` in the `example` function pauses its execution until the `Promise` from `sleep` resolves, and then the rest of the `example` function continues its execution.



// ------with same milies means 100 is the sametime for setimeout or sleep function
// measn how much time async await takes to reolsve a promise
// async function sleep(millis) {
//     try {
//         const value = await new Promise(resolve => setTimeout(() => resolve(millis), millis));
//         return Promise.resolve(value);
//     } catch (error) {
//         return Promise.reject(error);
//     }
// }

// const t = Date.now();
// sleep(100).then(result => {
//     console.log(result);  // Output should be 100
//     console.log(Date.now() - t); // Output should be approximately 100
// });

// // Alternatively, you can use async/await syntax
// async function example() {
//     const t = Date.now();
//     try {
//         const result = await sleep(100);
//         console.log(result);  // Output should be 100
//         console.log(Date.now() - t); // Output should be approximately 100
//     } catch (error) {
//         console.error(error);
//     }
// }

// example();

