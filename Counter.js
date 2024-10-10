var createCounter = function(n) {
    let count = n  
    return function(){
        return count++
    }
}
var counter = createCounter(5)
console.log(counter()) 
console.log(counter()) 
console.log(counter()) 