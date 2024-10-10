// var sortby = function(arr,fn){
// return arr.sort((a,b) => fn(a)- fn(b))
// }
// var array = [14, 12, 31, 75, 2, 9, 4, 7, 58];
// function fn(number){
//     return number
// }
// var  sortedarray = sortby(array,fn)
// console.log(sortedarray)

// another  code that return the sorted array on square
// var array = [14, 12, 31, 75, 2, 9, 4, 7, 58];

// function fn(num) {
//     return num * num;
// }

// var sortedArray = array.sort((a, b) => fn(a) - fn(b));

// console.log(sortedArray);


var sortby = function(arr,fn){
    var sortedArr = []
    // we previosuly learn here a callback with arrow function here it is with normal function
    arr.forEach(function (item){
     var index = sortedArr.findIndex(function (sortedItem){
        return fn(item) < fn(sortedItem)
     })
     if(index ===-1){
        sortedArr.push(item)
     }else{
        sortedArr.splice(index , 0 , item)
        // it is push or add the new items in the array 
        // index is zero because soreted array is empty
        // it takes starting index 
        // seconfd it takes the number of element we want to delete here 0 reprent that we want toadd something insted of delete
        // third perameter is for the addding new element
     }
    })
    return sortedArr
}

var array = [14, 12, 31, 75, 2, 9, 4, 7, 58];

// Define your sorting function (e.g., square of the number)
function fn(num) {
    return num 
}

// Perform the custom sorting
var sortedArray = sortby(array, fn);

// Display the sorted array
console.log(sortedArray);

/*
Certainly! Let's break down the `else` block, specifically the `sortedArr.splice(index, 0, item)` part, and provide an example using array values.

```javascript
arr.forEach(function (item) {
    var index = sortedArr.findIndex(function (sortedItem) {
        return fn(item) < fn(sortedItem);
    });
    if (index === -1) {
        sortedArr.push(item);
    } else {
        sortedArr.splice(index, 0, item);
    }
});
```

1. **`sortedArr.splice(index, 0, item)`:**
   - The `splice` method is used to change the contents of an array by removing or replacing existing elements and/or adding new elements in place.
   - In this case, it is used to insert the `item` into `sortedArr` at the specified `index`.
   - The parameters for `splice` are:
      - `index`: The index at which to start changing the array. In this case, it's the position where `item` should be inserted.
      - `deleteCount`: The number of elements to remove from the array. In this case, it's `0` because we don't want to remove any elements.
      - `item`: The element(s) to add to the array at the specified `index`.

2. **Example with array values:**
   - Let's take the initial state of `sortedArr` as an empty array: `sortedArr = []`.
   - The array `arr` is `[14, 12, 31, 75, 2, 9, 4, 7, 58]`.
   - Assume the sorting function `fn` is the identity function: `fn(num) { return num; }`.
   - Now, we iterate through each element in `arr`.

   - **First Iteration (`item = 14`):**
     - `index = 0` because `sortedArr` is empty, and `14` should be inserted at the beginning.
     - `sortedArr.splice(0, 0, 14)` adds `14` at index `0`.
     - After the first iteration, `sortedArr = [14]`.

   - **Second Iteration (`item = 12`):**
     - `index = 0` because `12` is less than `14`, so it should be inserted before `14`.
     - `sortedArr.splice(0, 0, 12)` adds `12` at index `0`.
     - After the second iteration, `sortedArr = [12, 14]`.

   - **And so on for the rest of the iterations...**
     - The process continues, and each `item` is inserted at the correct position in `sortedArr` based on the sorting criterion.

   - **Final Result:**
     - After all iterations, `sortedArr` is `[2, 4, 7, 9, 12, 14, 31, 58, 75]`.

So, the `splice` method is used to insert the current `item` at the correct position in the sorted array, maintaining the sorted order.*/ 

// findindex method
// const numbers = [1,23,4,4,8,7]
// const res = numbers.findIndex(function findfour(value){
// return value === 4 
// })
// console.log(res)
// findindex 
// const numbers = [1,23,4,4,8,7]
// const res = numbers.findIndex(findfour)

// function findfour(value){
//    return value === 4 
// }
// console.log(res)

// splice method
// const numbers = [1,7,5,8,4,9,89]
// const deleted = numbers.splice(2, 3,9,5,5,8,69);
// console.log(numbers)
// console.log(deleted)

// if we want to add something in the array insted of removing we can add 0 to it

// const numbers = [1,7,5,8,4,9,89]
// const deleted = numbers.splice(2, 0,9,5,5,8,69);
// // starting form the 2 index it will add the all the elements
// console.log(numbers)
// console.log(deleted)


// another method that is for loop
function insertionSort(arr, fn) {
  for (let i = 1; i < arr.length; i++) {
      let currentElement = arr[i];
      let j = i - 1;

      while (fn(currentElement) < fn(arr[j])) {
          arr[j + 1] = arr[j];
          j--;
      }

      arr[j + 1] = currentElement;
  }

  return arr;
}

var array = [14, 12, 31, 75, 2, 9, 4, 7, 58];

// Define your sorting function (e.g., identity function)
function fn(num) {
  return num;
}

// Perform the custom sorting using insertion sort
var sortedArray = insertionSort(array, fn);

// Display the sorted array
console.log(sortedArray);
