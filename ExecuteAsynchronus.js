// var PromiseAll = function(functions){
//     return new Promise((resolve, reject) => {
//         const results = []
//         let CompletedCount = 0;
//         let rejected = false;
//         function checkCompletions () {
//             if(CompletedCount === functions.length){
//                 if(rejected){
//                     reject(results.find(result => result instanceof Error))
//                 }else{
//                     resolve(results)
//                 }
//             }
//         } 
//          functions.forEach((asyncfunction , index) =>{
//             asyncfunction().then(result =>{
//                 results[index] = result
//             }).catch(error =>{
//                 rejected = true;
//                 results[index] = error
//             }).finally(()=>{
//                 CompletedCount++;
//                 checkCompletions();
//             })
//          })
//     })
// }

// const asyncfunction1 = () => new Promise(resolve => setTimeout(() => {
//     resolve(1)
// }, 1000))
// const asyncFunction2 = () => new Promise(resolve => setTimeout(() => resolve(2), 500));
// const asyncFunction3 = () => new Promise((_, reject) => setTimeout(() => reject("Error in 3"), 200));

// const functions = [asyncfunction1,asyncFunction2,asyncFunction3];
// PromiseAll(functions).then(results => console.log("resolved" , results)).catch(error => console.log("rejected" ,error))


 // leetcode 
 /**
 * @param {Array<Function>} functions
 * @return {Promise<any>}
 */
// var promiseAll = function (functions) {
//     return new Promise((resolve, reject) => {
//       const results = [];
//       let completedCount = 0;
  
//       function checkCompletion() {
//         if (completedCount === functions.length) {
//           resolve(results);
//         }
//       }
  
//       functions.forEach((asyncFunction, index) => {
//         asyncFunction()
//           .then(result => {
//             results[index] = result;
//           })
//           .catch(error => {
//             reject(error);
//           })
//           .finally(() => {
//             completedCount++;
//             checkCompletion();
//           });
//       });
//     });
//   };
  
//   // Example usage:
//   const promise = promiseAll([() => new Promise(res => res(42))]); 
// promise.then(console.log); // [42]
  

// leetcode 2 
// var promiseAll = async function (functions) {
//     let results = [];

//     for (const fn of functions) {
//         try {
//             const val = await fn();
//             results.push(val);
//         } catch (reason) {
//             return Promise.reject(reason);
//         }
//     }

//     return Promise.resolve(results);
// }
// const asyncfunction1 = () => new Promise(resolve => resolve(42));
// const functions = [asyncfunction1];

// promiseAll(functions)
//     .then(results => console.log("resolved", results))
//     .catch(error => console.log("rejected", error));

// leetcode 3 
var promiseAll = async function (functions) {
  return new Promise((resolve, reject) => {
      const results = new Array(functions.length);
      let count = 0;

      functions.forEach((fn, i) => {
          fn()
              .then(val => {
                  results[i] = val;
                  count++;

                  if (count === functions.length) {
                      resolve({ results, count });
                  }
              })
              .catch(reason => reject(reason));
      });
  });
};
// Example usage:
const promise = promiseAll([() => new Promise(res => res(42)),() => new Promise(res => res(10))]);

let totalCount; // Declare a separate variable to store the count

promise.then(({ results, count }) => {
  console.log(results);
  totalCount = count; // Store the count in a separate variable
  console.log(totalCount);
});

// Access totalCount here after the promises have resolved

