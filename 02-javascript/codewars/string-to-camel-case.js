/*

THE CHALLENGE

Complete the method/function so that it converts dash/underscore delimited words into camel casing.
The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case,
also often referred to as Pascal case). The next words should be always capitalized.

EXAMPLES

"the-stealth-warrior" gets converted to "theStealthWarrior"

"The_Stealth_Warrior" gets converted to "TheStealthWarrior"

"The_Stealth-Warrior" gets converted to "TheStealthWarrior"

SOLUTION

I decided to add functionality to the following code so that you
can convert almost any string to camel case without it containung
any special characters

*/

let result = toCamelCase('\\the-/*?_/stealth=-?*+-warrior?');
let ex = toCamelCase('\\the-/*?_/stealth=-?*+-');
let test = toCamelCase('t');

console.log(result)
console.log(test)
console.log(ex)

function toCamelCase(str){

    // Return the string if the lenght is less than or equal to one
    if(str.length <= 1){
        return str
    }

    let specialCharacters = ['/', '*', '=', '_', '?', '+', '-', ',', '.', '\\']
    
    /*
        The loop below replaces all the special characters from the @specialCharacters Array with '-'
    */
    for(let i = 0; i < specialCharacters.length; i++){
        str = str.replaceAll(specialCharacters[i], '-')
    }

    str = str.split('-')

    return str
        .filter((el) => str.indexOf(el) === str.lastIndexOf(el))
        .map((el, index) => {
            if(index != 0){
                // The code below converts the first letter of every element to uppercase
                el = el.charAt(0).toUpperCase() + el.slice(1)
            }

            return el
        })
        .join('')
}