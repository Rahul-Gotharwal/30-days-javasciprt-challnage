// accepted code on leetcode witten by me
// var join = function (arr1, arr2) {
//   const idSet = new Set();
//   const resultmap = new Map();
//   // all the value of both arr1 and arr2  are stored in the map
//   // both the aaray values are stored in the map and the n file line joined array return the resultmap.values
//   arr1.forEach((obj) => {
//     idSet.add(obj.id);
//     // object assgn is use to merge the properties of two objects
//     /*
//     Update the resultMap:
// If there's already an object with the same id, merge the current object's properties with the existing object in the resultMap.
// If there's no existing object, create a new object in the resultMap using the current object's properties.*/
//     resultmap.set(obj.id, Object.assign(resultmap.get(obj.id) || {}, obj));
//   });
//   arr2.forEach((obj) => {
//     idSet.add(obj.id);
//     resultmap.set(obj.id, Object.assign(resultmap.get(obj.id) || {}, obj));
//   });
//   // Convert Map to array and sort by id
//   // we can remove the sort but for sorting the id we use it
//   const joinedAray = Array.from(resultmap.values()).sort((a, b) => a.id - b.id);
//   return joinedAray;
// };
// const array1 = [
//   { id: 5, x: 8 },
//   { id: 1, x: 1 },
//   { id: 1, x: 3 },
//   { id: 2, x: 9 },
// ];
// const array2 = [
//   { id: 3, x: 5 },
//   { id: 1, x: 1 },
// ];
// const joined = join(array1, array2);
// console.log(joined);

/*
Certainly, let's break down the line of code:

```javascript
resultMap.set(obj.id, Object.assign(resultMap.get(obj.id) || {}, obj));
```

This line of code is responsible for updating the `resultMap` with merged objects based on their `id`. Let's go through it step by step:

1. **`resultMap.get(obj.id) || {}`:**
   - `resultMap.get(obj.id)` retrieves the existing object in `resultMap` associated with the current object's `id`.
   - `|| {}` provides a default value of an empty object (`{}`) if there is no existing object for the given `id`.

2. **`Object.assign(...)`:**
   - `Object.assign` is a method that copies the values of all enumerable properties from one or more source objects to a target object.
   - In this case, it's used to merge two objects: the existing object (retrieved from `resultMap`) and the current object (`obj`).
   - If there is no existing object (first time encountering this `id`), the default value is an empty object (`{}`), ensuring that the properties of `obj` are copied.

3. **`resultMap.set(obj.id, ...)`:**
   - Finally, the merged object is set (or updated) in `resultMap` with the `id` as the key.

Let's illustrate this with an example. Suppose we have the following arrays:

```javascript
const arr1 = [
    {"id": 1, "x": 1},
    {"id": 2, "x": 9}
];

const arr2 = [
    {"id": 3, "x": 5}
];
```

**Processing `arr1`:**
- For the first object in `arr1` (`{"id": 1, "x": 1}`):
  - `resultMap.get(1)` is initially `undefined`, so the default value `{}` is used.
  - `Object.assign({}, {"id": 1, "x": 1})` creates a new object with the same properties as `{"id": 1, "x": 1}`.
  - This new object `{ "id": 1, "x": 1 }` is set in `resultMap` with `id` as the key.

- For the second object in `arr1` (`{"id": 2, "x": 9}`):
  - `resultMap.get(2)` is initially `undefined`, so the default value `{}` is used.
  - `Object.assign({}, {"id": 2, "x": 9})` creates a new object with the same properties as `{"id": 2, "x": 9}`.
  - This new object `{ "id": 2, "x": 9 }` is set in `resultMap` with `id` as the key.

**Processing `arr2`:**
- For the object in `arr2` (`{"id": 3, "x": 5}`):
  - `resultMap.get(3)` is initially `undefined`, so the default value `{}` is used.
  - `Object.assign({}, {"id": 3, "x": 5})` creates a new object with the same properties as `{"id": 3, "x": 5}`.
  - This new object `{ "id": 3, "x": 5 }` is set in `resultMap` with `id` as the key.

As a result, `resultMap` now contains merged objects based on unique ids:

```javascript
resultMap = {
    1: { "id": 1, "x": 1 },
    2: { "id": 2, "x": 9 },
    3: { "id": 3, "x": 5 }
};
```

This ensures that each `id` in `resultMap` corresponds to a merged object containing properties from both `arr1` and `arr2`.

*/

// leetcoede 1
// var join = function (arr1, arr2) {
//   const result = {};
//   for (let i = 0; i < arr1.length; i++) {
//     // Use the id as the key in the result object
//     /*For each object in arr1, the code uses its id property as a key in the result object.
// The value associated with this key is the object itself.*/
//     result[arr1[i].id] = arr1[i];
//   // arr1[i] is the complte object and result[arr1[i].id] is the id of the object
//   } 
//   for (let i = 0; i < arr2.length; i++) {
//     if (result[arr2[i].id]) {
//       // merge logic
//       for (const key in arr2[i]) {
//         // this line if the same object is present or not we check it by using the key
//         result[arr2[i].id[key]] = arr2[i][key];
//       }
//     } else {
//       // Add the object to the result object if the id is not present
//       result[arr2[i].id] = arr2[i];
//     }
//   }
//   return Object.values(result);
// };
// const array1 = [
//   { id: 1, x: 1 },
//   { id: 1, x: 1 },
//   { id: 2, x: 9 },
// ];
// const array2 = [
//   { id: 3, x: 5 },
//   { id: 5, x: 8 },
// ];
// const res = join(array1, array2);
// console.log(res);

// best solution with forEach
// var mergeArrays = function(arr1, arr2) {
//   const result = {};

//   // Merge arr1
//   arr1.forEach(obj => {
//       const id = obj.id;
//       if (!result[id]) {
//           result[id] = obj;
//       }
//   });

//   // Merge arr2
//   arr2.forEach(obj => {
//       const id = obj.id;
//       if (!result[id]) {
//         // if in the result object there is no id then add the result[id] = obj
//           result[id] = obj
//       }
//   });

//   // Convert result object to an array
//   const mergedArray = Object.values(result);

//   return mergedArray;
// };

// // Example usage:
// const array1 = [
//   { id: 1, x: 1 },
//   { id: 1, x: 1 },
//   { id: 2, x: 9 },
// ];
// const array2 = [
//   { id: 3, x: 5 },
//   { id: 3, x: 5 },
//   { id: 5, x: 8 },
// ];

// const mergedResult = mergeArrays(array1, array2);
// console.log(mergedResult);

// best solution with for loop

var mergeArrays = function(arr1, arr2) {
  const result = {};

  // Merge arr1
  for (let i = 0; i < arr1.length; i++) {
      const id = arr1[i].id;
      /*
      if we remove the ! mark in the if block
      Since the result object starts as an empty object, the condition if (result[id]) will always be false during the first iteration (when adding objects from arr1). As a result, none of the objects from arr1 are being added to the result object.
      */
     //agar id present nhi he to add kro pura object in the result object
      if (!result[id]) {
          result[id] = arr1[i];
      }
  }

  // Merge arr2
  for (let i = 0; i < arr2.length; i++) {
      const id = arr2[i].id;
      if (!result[id]) {
          result[id] = arr2[i];
      }
  }

  // Convert result object to an array
  const mergedArray = Object.values(result);

  return mergedArray;
};

// Example usage:
const array1 = [
  { id: 1, x: 1 },
  { id: 1, x: 1 },
  { id: 2, x: 9 },
];
const array2 = [
  { id: 3, x: 5 },
  { id: 5, x: 8 },
];

const mergedResult = mergeArrays(array1, array2);
console.log(mergedResult);
