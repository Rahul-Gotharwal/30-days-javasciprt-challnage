// var ArayWrapper = function(nums){
//     this.array = nums
// }

// ArayWrapper.prototype.valueOf  = function(){
//     return this.array.reduce((sum, num) => sum+num,5)
// }
// ArayWrapper.prototype.toString = function(){
//     return '[' + this.array.join(",") + ']'
// }
// const obj1 = new ArayWrapper([1,2]);
// const obj2 = new ArayWrapper([3,4]);
// console.log(obj1+obj2)
// console.log(String(obj1))
// console.log(Number(obj2))
/*
In your provided code, there are a couple of things to note. Let's go through it step by step:

```javascript
var ArayWrapper = function(nums){
    this.array = nums;
}

ArayWrapper.prototype.valueOf = function(){
    return this.array.reduce((sum, num) => sum + num, 5);
}

ArayWrapper.prototype.toString = function(){
    return '[' + this.array.join(",") + ']';
}

const obj1 = new ArayWrapper([1, 2]);
const obj2 = new ArayWrapper([3, 4]);

console.log(obj1 + obj2);    // Output: 20
console.log(String(obj1));   // Output: "[1,2]"
console.log(Number(obj2));   // Output: NaN
```

1. **`obj1 + obj2`:**
   - The `valueOf` method is called for both `obj1` and `obj2`.
   - The `reduce` function starts with an initial value of `5`.
   - For `obj1`, it calculates `5 + 1 + 2 = 8`.
   - For `obj2`, it calculates `5 + 3 + 4 = 12`.
   - The `+` operator then sums these values: `8 + 12 = 20`.

2. **`String(obj1)`:**
   - The `toString` method is called for `obj1`.
   - It joins the elements of the array, resulting in the string representation `"[1,2]"`.

3. **`Number(obj2)`:**
   - The `valueOf` method is called for `obj2`.
   - It tries to convert the result of `reduce` to a number, but the result is `NaN` because the accumulator is initialized with a string (`5`) and the subsequent additions are treated as string concatenation.

If you want the `Number(obj2)` to work correctly, you should modify the `valueOf` method to ensure numerical operations:

```javascript
ArayWrapper.prototype.valueOf = function(){
    return this.array.reduce((sum, num) => sum + num, 0); // Use 0 as the initial value for a numeric accumulator
}
```

With this modification, `Number(obj2)` will return `7` (0 + 3 + 4).
*/ 
var ArayWrapper = function(nums){
    this.array = nums;
}

// Rename toString to myToString
ArayWrapper.prototype.myToString = function(){
    return '[' + this.array.join(",") + ']';
}

// Rename valueOf to myValueOf
ArayWrapper.prototype.myValueOf = function(){
    return this.array.reduce((sum, num) => sum + num, 0);
}

const obj1 = new ArayWrapper([1, 2]);
const obj2 = new ArayWrapper([3, 4]);

// Explicitly call the renamed methods
console.log(obj1.myValueOf()+obj2.myValueOf())
console.log(obj1.myToString());  // Output: "[1,2]"
console.log(obj2.myValueOf());   // Output: 7



