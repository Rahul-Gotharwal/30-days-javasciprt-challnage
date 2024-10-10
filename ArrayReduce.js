//---------Array without push----------//
// var reduce = function(nums , fn,init){
//     let result = init;
//     for(i=0;i<nums.length;i++){
//        result = fn(result, nums[i])
//     // fn function will work for each element
   
//     }
//     return result
// }
// const nums = [1,2,3,4];
// const initValue = 0;
// const fn = function(accumulator , element){
//     return accumulator+element;
// }
// const reducearray = reduce(nums ,fn , initValue);
// console.log(reducearray)


//--------------------array with push ---------------//
// var reduce = function(nums,fn,init){
//     const reduceArray = [];
//     for(let i=0;i<nums.length;i++){
//       init = fn(init , nums[i])
//     }
//    reduceArray.push(init)
//    return reduceArray
// }
// const nums = [1,2,3,4];
// const initValue = 0;
// const fn = function(accumulator , element){
//     return accumulator+element;
// }
// const reducearray = reduce(nums ,fn , initValue);
// console.log(reducearray)

// ------------- array with j++ index and it is return the whole array-----------//
// var reduce = function(nums,fn,init){
//     const reduceArray = [];
//     for(let i=0, j=0;i<nums.length;i++){
//       init = fn(init , nums[i])
//        reduceArray[j++] = init
//     }
   
//    return reduceArray
// }
// const nums = [1,2,3,4];
// const initValue = 0;
// const fn = function(accumulator , element){
//     return accumulator+element;
// }
// const reducearray = reduce(nums ,fn , initValue);
// console.log(reducearray)

// if we want only the last answer like 10 then -------//
// var reduce = function(nums,fn,init){
//     for(let i=0, j=0;i<nums.length;i++){
//       init = fn(init , nums[i])
//     }
   
//    return init
// }
// const nums = [1,2,3,4];
// const initValue = 0;
// const fn = function(accumulator , element){
//     return accumulator+element;
// }
// const reducearray = reduce(nums ,fn , initValue);
// console.log(reducearray)
//---------IT IS RETUNE NAN THAT IS AN ERROR ----//
/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function(nums, fn, init) {
  for(let i=0;i<nums.length;i++){
      init = fn(init + nums[i]) // ERROR IS BECASUE IT COMBINED THE ARGUMENTS 
      // FUNCTION SHOULD RECIVE THE TWO ARGUMENTS
  }
  return init
};
const nums = [10,20,30,40]
const init = 0;
const fn = function(accu , element){
  return accu+element
}
const result = reduce(nums,fn,init);
console.log(result)