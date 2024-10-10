// class Calculator {
//   constructor(value) {
//     this.result = value;
//     // The result property represents the current result of the calculations.
//   }
//   add(value) {
//     this.result = this.result + value;
//     //It returns this, allowing method chaining.
//     //Method Chaining:
//     //When you return this from each method, you can chain multiple method calls together in a single line. This can lead to more readable and concise code.
//     return this;
//   }
//   substact(value) {
//     this.result -= value;
//     return this;
//   }
//   multiply(value) {
//     this.result *= value;
//     return this;
//   }
//   divison(value) {
//     if (value === 0) {
//       throw new Error("Divison by zero is not allowed");
//     }
//     this.result /= value;
//     return this;
//   }
//   power(value) {
//     this.value **= value;
//     return this;
//   }

//   getResult() {
//     return this.result;
//   }
// }

// const calculator = new Calculator(10);
// const result = calculator.add(5).substact(2).divison(13).getResult();
// console.log(result);

// if we dont want the methd chainning in the code
class Calculator {
    constructor(value) {
        this.result = value;
    }

    add(value) {
        this.result += value;
        return this.result;
    }

    subtract(value) {
        this.result -= value;
        return this.result;
    }

    multiply(value) {
        this.result *= value;
        return this.result;
    }

    divide(value) {
        if (value === 0) {
            throw new Error("Division by zero is not allowed");
        }
        this.result /= value;
        return this.result;
    }

    power(value) {
        this.result **= value;
        return this.result;
    }

    getResult() {
        return this.result;
    }
}

// Example Usage:
const calculator = new Calculator(10);
const result = calculator.add(5)
console.log(result); // Output: 24
