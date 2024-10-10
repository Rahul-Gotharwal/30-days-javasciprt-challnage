// ----------- it is with object ---------//
// var except = function(val){
//     return {
//         tobe:function(Otherval){
//             if(val===Otherval){
//                 return true
//             } else{
//                 throw new Error("Not Qqual")
//             }
//         },

//         NotTobe:function(Otherval){
//             if(val!==Otherval){
//                 return true
//             }
//             else{
//                 throw new Error("Equal")
//             }
//         }
//     }
// }
// const result = except(5)
// try{
//     console.log(result.tobe(5))
//     console.log(result.NotTobe(25))
// }
// catch(error){
//   console.log(error.message)
// }


// ------------ it is without object--------------//
// const except = function(val){
//     function tobe(Otherval){
//         if (val === Otherval) {
//             return true;
//         } else {
//             throw new Error("Not Equal");
//         }
//     }
//      function NotTobe(Otherval){
//         if (val !== Otherval) {
//             return true;
//         } else {
//             throw new Error("Equal");
//         }
//      }
//      return {tobe,NotTobe}
//     }
//  try {
//     const result = except(5)
//     console.log(result.tobe(5))
//     console.log(result.NotTobe(10))
//  } catch (error) {
//     console.log(error.message); 
//  }


// -------------without taking the variable result----------//

/**
 * @param {any} val
 * @return {Object}
 */
var expect = function(val) {
    return {
        toBe: function(otherVal) {
            if (val === otherVal) {
                return true;
            } else {
                throw new Error("Not Equal");
            }
        },
        notToBe: function(otherVal) {
            if (val !== otherVal) {
                return true;
            } else {
                throw new Error("Equal");
            }
        }
    };
};

try {
    console.log(expect(5).toBe(5));    // Should not throw an error
    console.log(expect(5).notToBe(5)); // Should throw an error
} catch (error) {
    console.log(error.message);
}
