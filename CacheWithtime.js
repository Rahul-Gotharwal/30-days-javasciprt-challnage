// // using clss we can solve it

// class TimeLimitedCache {
//     constructor() {
//       this.cache = {};
//     }
//     set(key, value, duration) {
//       const currentTime = Date.now();
//       const expirationTime = currentTime + duration;

//       if (this.cache[key] && this.cache[key].expirationTime > currentTime) {
//         // Key exists and is un-expired
//         this.cache[key].value = value; // Update the value
//         this.cache[key].expirationTime = expirationTime; // Update the expiration time
//         return true;
//       } else {
//         // Key doesn't exist or is expired
//         this.cache[key] = { value, expirationTime };
//         return false;
//       }
//     }
//     get(key) {
//       const currentTime = Date.now();
//       if (this.cache[key] && this.cache[key].expirationTime > currentTime) {
//         // Key exists and is un-expired
//         return this.cache[key].value;
//       } else {
//         // Key doesn't exist or is expired
//         return -1;
//       }
//     }
//     count() {
//       const currentTime = Date.now();
//       let count = 0;

//       for (const key in this.cache) {
//         if (this.cache[key].expirationTime > currentTime) {
//           count++;
//         }
//       }

//       return count;
//     }
//   }

//   // Example usage:
//   const timeLimitedCache = new TimeLimitedCache();
//   console.log(timeLimitedCache.set(1, 42, 1000)); // false
//   console.log(timeLimitedCache.get(1)); // 42
//   console.log(timeLimitedCache.count()); // 1

//---------------According to the Leetcode-------------//
/*This code is extending the prototype of the TimeLimitedCache constructor function by adding a set method. The set method is a function that can be called on instances created by the TimeLimitedCache constructor.*/
 const TimeLimitedCache = function () {
   this.cache = new Map();
 };
/*
In JavaScript, prototype.set typically refers to adding a method named set to the prototype of a constructor function. 
*/
//proptype is used to add the method to a counstructor
TimeLimitedCache.prototype.set = function (key, value, duration) {
  let found = this.cache.has(key);
  if (found) clearTimeout(this.cache.get(key).ref);
  //   // we should give the key and value in the set method so value like value:value and ref  is settimeout
  this.cache.set(key, {
    value: value, // direct put the value
    ref: setTimeout(() => this.cache.delete(key), duration),
    //     /*
    //         this.cache.set(key, { value, ref: setTimeout(() => this.cache.delete(key), duration) });: Adds the key-value pair to the Map. Along with the value, a new timeout is set using setTimeout. This timeout is responsible for deleting the key from the Map after the specified duration.

    // When the duration elapses, the callback function (() => this.cache.delete(key)) is executed. This function deletes the key from the Map, making it inaccessible.
    //         */
  });
  return found;
};
TimeLimitedCache.prototype.get = function (key) {
  return this.cache.has(key) ? this.cache.get(key).value : -1;
  //Checks if the key exists in the cache.If it does, it returns the associated value; otherwise, it returns -1.
};
TimeLimitedCache.prototype.count = function () {
  return this.cache.size;
};
/*An instance of TimeLimitedCache is an object created using the TimeLimitedCache constructor function. In JavaScript, you create instances of a constructor function using the new keyword. Here's an example: */
const timeLimitedCache = new TimeLimitedCache();
console.log(timeLimitedCache.set(1, 42, 1000)); // false
console.log(timeLimitedCache.set(1, 42, 1000)); //it will return true because for the same peramets we have the key in our cache or key is set for us
console.log(timeLimitedCache.get(1)); // 42
console.log(timeLimitedCache.count()); // 1
