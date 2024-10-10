// a callbsck is an function that is passed to an function and it will call only when some opertion is completed
// function callbackFunction(arr,call){
//  arr.push(100)
//  call();
// }
// const arr = []
// const result = callbackFunction(arr , function(){
//     console.log("the item is push in the array that is " , arr)
// })
 // ----------another type
// const  modifyfunction = (arr, callback) => {
//  arr.push(78)
//  callback(arr);
// }
// const arr = [];
// const callback = (arr) => {
    
//     console.log("the pushed arry is " ,arr)
// }
// modifyfunction(arr,callback)

// ----------------another type like anonymous function
// function modifyfunction(arr, callback){
// arr.push(89)
// callback();
// }
// const arr = []
// const result = modifyfunction(arr,  () =>{
//     console.log("the pushed value is " , arr)
// })

// another type with callback name
function modifyfunction(arr, callback){
arr.push(89)
callback();
}
const arr = [454]
const result = modifyfunction(arr, callback =  () =>{
    console.log("the pushed value is " , arr)
})