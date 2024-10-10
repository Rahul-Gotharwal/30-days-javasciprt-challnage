Array.prototype.groupedBy = function(fn){
    const groupedObj = {}
    this.forEach(item => {
        const key = fn(item)
        if(groupedObj[key]){
            groupedObj[key].push(item)
        }else{
            groupedObj[key] = [item]
        }
    });
     return groupedObj
}
const array = [ {"id":"1"}, {"id":"1"} , {"id":"2"} ,{"id":"1"}]
const fn = function(item){
    return item.id
}
const groupedResult = array.groupedBy(fn);
console.log(groupedResult)

/*
In this code, the `groupedBy` function is an extension of the `Array` prototype in JavaScript. It takes a function `fn` as a parameter, and it groups the elements of the array based on the result of applying the function to each element.

Let's break down the code:

```javascript
Array.prototype.groupedBy = function(fn){
    const groupedObj = {}
    this.forEach(item => {
        const key = fn(item)
        if(groupedObj[key]){
            groupedObj[key].push(item)
        } else {
            groupedObj[key] = [item]
        }
    });
    return groupedObj
}

const array = [ {"id":"1"}, {"id":"1"} , {"id":"2"} ]
const fn = function(item){
    return item.id
}

const groupedResult = array.groupedBy(fn);
console.log(groupedResult)
```

1. **`Array.prototype.groupedBy` function:**
   - The function extends the Array prototype to add a `groupedBy` method.
   - It initializes an empty object called `groupedObj` to store the grouped results.

2. **`fn` function:**
   - The `fn` function is a callback function that is applied to each element of the array.
   - In this case, it returns the value of the "id" property of each object in the array.

3. **Grouping process:**
   - The `forEach` loop iterates over each element in the array.
   - The `fn` function is called on each element to determine the key for grouping.
   - If `groupedObj` already has a property with the determined key, the element is pushed into the existing array.
   - If the key is not present in `groupedObj`, a new array with the element is assigned to that key.

4. **Difference between `groupedObj[key].push(item)` and `groupedObj[key] = [item]`:**
   - `groupedObj[key].push(item)`: If the key already exists in `groupedObj`, it means there is already an array associated with that key. The current element is then added to that existing array.
   - `groupedObj[key] = [item]`: If the key is not present in `groupedObj`, a new array containing only the current element is assigned to that key.

In the given example with `const array = [ {"id":"1"}, {"id":"1"} , {"id":"2"} ]` and `const fn = function(item) { return item.id }`, the `groupedObj` will be:

```javascript
{
    "1": [
        {"id":"1"},
        {"id":"1"}
    ],
    "2": [
        {"id":"2"}
    ]
}
```

This shows how the array elements are grouped based on the "id" property.
*/ 

/*
The `else` block will run when the key (determined by the `fn` function) does not already exist in the `groupedObj` object. Specifically, the `else` block is executed when the `if` condition `if (groupedObj[key])` evaluates to `false`. 

In your example with `const array = [ {"id":"1"}, {"id":"1"} , {"id":"2"} ]` and `const fn = function(item) { return item.id }`, the `else` block will run when the key being processed is "2". 

Here's the breakdown:

1. For the first element in the array (`{"id":"1"}`), the key is determined by `fn` as "1". At this point, the `groupedObj` is empty, so the `else` block is executed, and a new array is created for the key "1".

2. For the second element in the array (`{"id":"1"}`), the key is again "1". This time, the `if` condition in the code (`if (groupedObj[key])`) is `true` because the key "1" has been created in the `groupedObj` during the processing of the first element. Therefore, the `if` block is executed, and the element is pushed to the existing array associated with the key "1".

3. For the third element in the array (`{"id":"2"}`), the key is "2". Since the key "2" does not exist in the `groupedObj` object, the `else` block is executed, and a new array is created for the key "2".

In summary, the `else` block runs when a new key (not already present in `groupedObj`) is encountered during the iteration over the array.
*/ 