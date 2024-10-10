//---------------------------------//
// with arrow function
// const createHelloWorld = () => {
//     return (...args) => {
//         return "Hello World"
//     }
    
// }
// const f= createHelloWorld();
// console.log(f())

// without arrow function
//----------------------------------//
// var createHelloWorld = function() {
//  return function (...args){
//     return "Hello World" + args.join("  ");
//  }
// }
// console.log(createHelloWorld()("hello" , 45))

// console.log(f());          // Output: "Hello"
// console.log(f("John"));     // Output: "Hello John"
// console.log(f("Alice", "Bob", "Charlie")); // Output: "Hello Alice Bob Charlie"
 // with arrow 
//  const helloWrld = () =>{
//     return(...args)=>{
//         return 'hello anjali';
//     }
  
//  }
//  const hello = helloWrld();
//  console.log(hello())

const PrintHelloWorld = function(){
    return(...args) => {
        return "Hello Rahul" + args.join(" ")
    }
}
const helo = PrintHelloWorld()
console.log(helo("mera" ,85, 745 ,56  ,654))