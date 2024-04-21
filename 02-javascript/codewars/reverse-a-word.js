/*

TASK

Complete the function that accepts a string parameter, and reverses each word in the string. 
All spaces in the string should be retained.

EXAMPLES

"This is an example!" ==> "sihT si na !elpmaxe"
"double  spaces"      ==> "elbuod  secaps"

*/

let testStringOne = "This is an example!";
let testStringTwo = "double spaces";
let testStringThree = "dluohs esac dedocodrah evah sihT stset si ot modnar";

reverseWords(testStringOne);
reverseWords(testStringTwo);
console.log(reverseWords(testStringThree));

function reverseWords(str) {
    let strArray = str.split("");
    let reverseArray = [];

    for (let i = str.length - 1; i >= 0; i--) {
        reverseArray.push(strArray[i]);
    }

    return reverseArray.join("");
}
