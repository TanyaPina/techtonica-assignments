

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

console.log(divisibleByThree(33)); //true
console.log(divisibleByThree(11)); //false
console.log(divisibleByThree(0)); //true
console.log(divisibleByThree(-33)); //true
console.log(divisibleByThree(-11)); //false


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

console.log(lengthOfString("Hello World!")); //12
console.log(lengthOfString("")); //0
console.log(lengthOfString("abcdefghijklmnopqrstuvwxyz"));  //26
console.log(lengthOfString("!!!!!")); //5

//3. 
// -  Create an array of numbers, (ex: [1, 2, 3])
// - Without using any math operators, write 5 statements:
//   - a. Return the first item in the array (ex: 1)
//   - b. Return the last item in the array (ex: 3)
//   - c. Add a new item to the end of the array (ex: [1,2,3,4])
//   - d. Add an array to the beginning of the array. (ex: [["a","b","c"],1,2,3,4])
//   - e. Return the first item from the first item in the array. (ex: "a")

const numArray = [1,2,3];

//a.
function firstItemInArray(arr){
    return arr[0];
}

//b. 
function lastItemInArray(arr){
    return arr[arr.length -1]; 
}

//c.
function addItemAtEndOfArray(arr, item){
    arr.push(item);
    return arr;
}

//d.
function addArrayToBeginning(arr1, arr2){
    arr1.unshift(arr2);
    return arr1;

}

//e.
function firstItemInFirstItem(arr){
    let firstItem = arr[0];
    return firstItem[0];
}

console.log(firstItemInArray(numArray)); //1
console.log(lastItemInArray(numArray)); //3
console.log(addItemAtEndOfArray(numArray, 4)); // [1,2,3,4]
console.log(addArrayToBeginning(numArray, ["a", "b", "c"])); //[["a,"b,"c"],1,2,3,4]
console.log(firstItemInFirstItem(numArray));  //"a"

// 4. Create a function that calculates how many minutes have elapsed from midnight until right now.
// The function should still return an accurate answer,
// even if you ran it a few minutes or hours later.
/*
Pseudocode: 
- input: current time
- output: time passed from midnight until present (input)
- can use date object to access and set times
- can compare dates
*/

function minutesAfterMidnight(){
    const midnight = new Date();
    midnight.setHours(0,0,0,0,0);
    //return midnight;
    const currentTime = new Date();
    currentTime.getHours();
    //return currentTime;
    const timeElapsed = currentTime - midnight;
    minutesTimeElapsed = (timeElapsed/1000)/60;
    return minutesTimeElapsed;
}
console.log(minutesAfterMidnight());