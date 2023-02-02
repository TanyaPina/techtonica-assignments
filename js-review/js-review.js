

// 1. Write a function below that accepts a number as the only argument.
// The function should determine whether the number is divisible by 3,
// and return either true or false.
// Choose names that make the code easy to understand.
//
// Note:  None of the review # problems have tests included, but feel free to write your own.
/*
Pseudocode: 
- input: number
- output - true or false if num is divisible by 3.
*/

function divisibleByThree(num){
 if (num % 3 === 0){
    return true;
} else {
    return false;
    }
}

console.log(divisibleByThree(33));
console.log(divisibleByThree(11));
console.log(divisibleByThree(0));
console.log(divisibleByThree(-33));
console.log(divisibleByThree(-11));


// 2. Write a function that takes a string as the argument.
// The function should return a number that is the number of characters in the string.
// Choose names that make the code easy to understand.
/*
Pseudocode:
- input: string 
- output: number that is the number of characters in the string
*/

function lengthOfString(string){
let strLength = string.length;
return strLength;
}

console.log(lengthOfString("Hello World!"));
console.log(lengthOfString(""));
console.log(lengthOfString("abcdefghijklmnopqrstuvwxyz"));
console.log(lengthOfString("!!!!!"));

//3. 
// a. Create an array of numbers, (ex: [1, 2, 3])
// b. Without using any math operators, write 5 statements:
//   - Return the first item in the array (ex: 1)
//   - Return the last item in the array (ex: 3)
//   - Add a new item to the end of the array (ex: [1,2,3,4])
//   - Add an array to the beginning of the array. (ex: [["a","b","c"],1,2,3,4])
//   - Return the first item from the first item in the array. (ex: "a")

// 4. Create a function that calculates how many minutes have elapsed from midnight until right now.
// The function should still return an accurate answer,
// even if you ran it a few minutes or hours later.