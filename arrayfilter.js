// var filter = function (arr, transform) {
//   for (i = 0; i < arr.length; i++) {
//     const filterArray = transform(arr[i], i);
//     if (filterArray > 10) {
//       return filterArray;  // if we are not use the push it only return first elemnt becasue whrn the first element met the condition the loop will exit
 
//     }
//   }
//   return null;
// };
// const arrayindex = [10, 20, 30, 40, 50];
// var transform = function (element, index) {
//   return element;
// };
// const result = filter(arrayindex, transform);
// console.log(result);

//------- code with push method-----------//
// var filter = function(arr, transform) {
//     const filterArray = [];
  
//     for (let i = 0; i < arr.length; i++) {
//       const transformedElement = transform(arr[i], i);
  
//       if (transformedElement > 10) {
//        filterArray.push(transformedElement)
//       }
//     }
  
//     return filterArray;
//   };
  
//   const arrayindex = [10, 20, 30, 40, 50];
  
//   var transform = function(element, index) {
//     return element;
//   };
  
//   const result = filter(arrayindex, transform);
//   console.log(result);
//------------------code withut using push method------//
// var filter = function(arr, transform) {
//     const filterArray = [];
  
//     for (let i = 0, j = 0; i < arr.length; i++) {
//       const transformedElement = transform(arr[i], i);
  
//       if (transformedElement > 10) {
//         filterArray[j++] = transformedElement; // overwrite => if we dont plus the j like,j++
//       }
//     }
  
//     return filterArray;
//   };
  
//   const arrayindex = [10, 20, 30, 40, 50];
  
//   var transform = function(element, index) {
//     return element;
//   };
  
//   const result = filter(arrayindex, transform);
//   console.log(result);

// ----------without using the built in function or another method direct call the function-------//
// function filter(arr,fn){
// const filterArray=[];
// for(let i=0;i<arr.length;i++){
//     if(fn(arr[i],i)){  
//     filterArray.push(arr[i])
//     }
// }
// return filterArray;
// }
// arrayIndex = [10,20,30,40,50]
// const fn = function(element,index){
// return element>10;
// }
// const result = filter(arrayIndex,fn);
// console.log(result)

// --------without using the if statement  --------//
function filter(arr, fn) {
    const filterArray = [];
  
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > 10) { // Directly checking the value of arr[i] in the condition
        filterArray.push(arr[i]);
      }
    }
  
    return filterArray;
  }
  
  const arrayIndex = [10, 20, 30, 40, 50];
  
  const result = filter(arrayIndex);
  console.log(result);
  