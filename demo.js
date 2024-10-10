const except = function(val){
    function tobe(Otherval){
        if (val === Otherval) {
            return true;
        } else {
            throw new Error("Not Equal");
        }
    }
     function NotTobe(Otherval){
        if (val !== Otherval) {
            return true;
        } else {
            throw new Error("Equal");
        }
     }
     return {tobe,NotTobe}
    }
 try {
    const result = except(5)
    console.log(result.tobe(5))
    console.log(result.NotTobe(10))
 } catch (error) {
    console.log(error.message); 
 }