Array.prototype.last = function(){
    if(this.length === 0){
        return -1
    }else{
        return this[this.length-1] // it is refres to the arrry like a[a.length-1]
    }
}
const num1 = [null, {} , 3,5]
console.log(num1.last())
const nums2 = [];
console.log(nums2.last());