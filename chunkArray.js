var chunk = function(arr, size){
if(size<=0){
    return "the size is must be an positive integer"
}
 const chunkedArray = []
 for(let i=0;i<arr.length;i+=size){
    const chunk = arr.slice(i,i+size);

    // the loop is working like in first iteration i=0 and i+=size is i=0 and size is 1 so it is extract the eelmnt from const chunk = arr.slice(i,i+size); 0 to 2 
    // now for second itertion i is now 3  so it is extrxt the element from  3 to i+size that is 3+3 =6 , second three is the three whichwe passed form the console
    chunkedArray.push(chunk)
 }
 return chunkedArray
}
console.log(chunk([1,2,3,4,5,6],1))
console.log(chunk([1, 9, 6, 3, 2], 3)); // it menas it is extraxt the elements from 0 to 2      // Output: [[1, 9, 6], [3, 2]]
console.log(chunk([8, 5, 3, 2, 6], 6));      // Output: [[8, 5, 3, 2, 6]]
console.log(chunk([], 1));                    // Output: []

/*
Certainly, let's go through an example to understand how the loop iterates over each element:

Suppose we have the array `arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]` and `size = 3`.

The loop will execute as follows:

1. **First iteration (i = 0):**
   - `i = 0`: Start at index 0.
   - `const chunk = arr.slice(0, 3);`: Extract elements from index 0 to 2 (3 elements). `chunk` becomes `[1, 2, 3]`.
   - `chunkedArray.push(chunk);`: Add `[1, 2, 3]` to `chunkedArray`.

2. **Second iteration (i = 3):**
   - `i += size`: Increment `i` by `size` (3). `i` becomes 3.
   - `const chunk = arr.slice(3, 6);`: Extract elements from index 3 to 5 (3 elements). `chunk` becomes `[4, 5, 6]`.
   - `chunkedArray.push(chunk);`: Add `[4, 5, 6]` to `chunkedArray`.

3. **Third iteration (i = 6):**
   - `i += size`: Increment `i` by `size` (3). `i` becomes 6.
   - `const chunk = arr.slice(6, 9);`: Extract elements from index 6 to 8 (3 elements). `chunk` becomes `[7, 8, 9]`.
   - `chunkedArray.push(chunk);`: Add `[7, 8, 9]` to `chunkedArray`.

4. **Fourth iteration (i = 9):**
   - `i += size`: Increment `i` by `size` (3). `i` becomes 9.
   - The loop condition `i < arr.length` is no longer true (9 is not less than 9), so the loop exits.

After the loop, `chunkedArray` is `[ [1, 2, 3], [4, 5, 6], [7, 8, 9] ]`, which represents the original array divided into subarrays of size 3.*/ 

// leetcode while loop
/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array[]}
 */
// let chunk= (arr, size) =>{
//     const chunkedArray = [];
//     let index = 0;
  
//     while (index < arr.length) {
//       chunkedArray.push(arr.slice(index, index + size));
//       index += size;
//     }
  
//     return chunkedArray;
//   }