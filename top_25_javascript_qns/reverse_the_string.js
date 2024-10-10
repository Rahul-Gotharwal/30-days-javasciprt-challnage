// // Function declaration
// function reverseBySeparator(string, separator) {
//     return string.split(separator).reverse().join(separator)
// }
//  // for read about it go to=>  https://www.geeksforgeeks.org/reverse-a-string-in-javascript/
// // Rest of the code
// var string = "welcome to the jungle";
// //This line declares a variable named reverseEntireSequence and assigns the result of calling the reverseBySeparator function to it. The function is called with two arguments: string (the original string) and an empty string "" as the separator.
// var reverseEntireSequence = reverseBySeparator(string, "");
// var reverseEachWord = reverseBySeparator(reverseEntireSequence, "");
// console.log(reverseEntireSequence);
// console.log(reverseEachWord);


// using while loop
// Function to reverse string 
// function reverseString(str) { 
// 	let reversedStr = ""; 
// 	let i = str.length - 1; 
// 	while (i >= 0) { 
// 	reversedStr += str.substring(i, i + 1); 
// 	i--; 
// 	} 
// 	console.log(reversedStr); 
// } 

// // Function call 
// reverseString("GeeksforGeeks"); 
// reverseString("JavaScript"); 
// reverseString("TypeScript");

// using the recursion
//n the recursive case, the function takes the first character of the string (str.charAt(0)) and concatenates it with the result of calling strreverse on the substring starting from the second character (str.substr(1)).
// function strreverse(str) {
//     // Base case: if the string is empty or has only one character, return the string
//     if (str === "" || str.length === 1) {
//         return str;
//     } else {
//         // Recursive case: reverse the substring starting from the second character and concatenate the first character
//         return strreverse(str.substr(1)) + str.charAt(0);
//     }
// }

// console.log(strreverse("GeeksforGeeks"));


// using the for loop
function strReverse(str){
    let strrevrse= ""
    for(let i=str.length-1 ; i>=0 ;i--){
        strrevrse += str[i]
    }
    console.log(strrevrse)
}
strReverse("rahulterabaap")