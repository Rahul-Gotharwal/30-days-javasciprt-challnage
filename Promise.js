//with object return method , we amke an obejct with fucntion and pass it to the result

var addTwoNumbers = async function (Promise1, Promise2) {
  const result = {
    pro1: async function () {
      return await Promise1();
    },
    pro2: async function () {
      return await Promise2();
    }, // we should make the combined function for adding the numbers
  };
  const [value1, value2] = await Promise.all([result.pro1(), result.pro2()]);
  return value1 + value2;
};

const firstNumber = () => {
 return new Promise((resolve) => setTimeout(()=> resolve(2),20))
};
const secondNumber = () => {
 return new Promise((resolve) => setTimeout(() => resolve(5),50))
};
const result = addTwoNumbers(firstNumber, secondNumber).then((result) =>
  console.log(result)
).catch(error => console.error(error))

// directly return the value from the main function
// const addTwoNumbers = async function(Promise1,Promise2){
// const [value1,value2] = await  Promise.all([Promise1(),Promise2()])
// return value1+value2;
// }
// const Pro1 = () => new Promise( resolve => setTimeout(()=> resolve(2),20));
// const Pro2 = ()=> new Promise(resolve => setTimeout(() => resolve(6),60));
// addTwoNumbers(Pro1,Pro2).then(result => console.log(result)).catch(error=> console.log(error))

// all the things are decalred in the main function  or without perameters
// var addTwoNumbers = async function() {
//     const firstNumber = () => new Promise(resolve => setTimeout(() => resolve(2), 20));
//     const secondNumber = () => new Promise(resolve => setTimeout(() => resolve(5), 60));

//     const result = {
//         pro1: async function() {
//             return await firstNumber();
//         },
//         pro2: async function() {
//             return await secondNumber();
//         },
//     };

//     // Using Promise.all to wait for both promises to resolve
//     const [value1, value2] = await Promise.all([result.pro1(), result.pro2()]);

//     // Returning the sum of the two resolved values
//     return value1 + value2;
// };

// // Call the function without passing promises explicitly
// addTwoNumbers()
//     .then(result => console.log(result))
//     .catch(error => console.error(error));

// leetcode answer
// var addTwoPromises = async function (promise1, promise2) {
//   try {
//     const value1 = await promise1;
//     const value2 = await promise2;
//     return Promise.resolve(value1 + value2);
//   } catch (error) {
//     Promise.reject(error);
//   }
// };
// addTwoPromises(Promise.resolve(2), Promise.resolve(42)).then((result) =>
//   console.log(result)
// ).catch(error => console.log(error))
 