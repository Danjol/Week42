/*
    Hi.
    This is a set of practice exercises.
    The purpose is to focus on a few things at a time.
    You do this by writing your answer after a task is given (see the example).

    DO NOT change any code that is provided unless the task specifically says so.
*/

/* -----------------------------------------------------------------------------
    Task: Example
    Write the code to print all the names in the list, one name per line
*/
console.log("Task: Example");
const people = ["Tony", "Christian", "Håkon"]

for (let index = 0; index < people.length; index++) {
    let person = people[index];
    console.log(person);
}

/* -----------------------------------------------------------------------------
    Task: A
    Create a function that returns an array of length m-n, 
    n is the min value. 
    m is the max value. 
    if n = 5 and m is 10 the returned array sholuld be [5,6,7,8,9]
    Use loops and arrays to achive the goal. 
*/
console.log("Task: A");

function createArray(n,m) {
    let result = [];

    for (let i = n; i < m; i++) {
        result.push(i);
    }

    return result;
}

let n = 5;
let m = 10;

console.log(createArray(n,m));

/* -----------------------------------------------------------------------------
    Task: B
    Create two arrays using your function from task a.
    first array n = 5, m = 11
    second array n = 8, m = 23
    
    Create a function that combines the two arrays into one, but no duplicate values. 
    Use for loops
*/
console.log("Task: B");

function combineArrays(arr1, arr2) {
    let combinedArray = [...arr1];

    for (let i = 0; i < arr2.length; i++) {
        if (!combinedArray.includes(arr2[i])) {
            combinedArray.push(arr2[i]);
        }
    }

    return combinedArray;
}

let array1 = createArray(5, 11);
let array2 = createArray(8, 23);

let combinedArray = combineArrays(array1, array2);

console.log(combinedArray);



/* -----------------------------------------------------------------------------
    Task: C
    Following you will find an alphabet a encrypted text and a shift value. 
    The message is encrypted using a cesar chipher https://en.wikipedia.org/wiki/Caesar_cipher 
    Create a function that 
    - Takes three parameters message, alphabet and shift 
    - Creates the key based on the alphabet and the shift value. 
    - decrypts and returns the message.
    Use arrays and for loops. 
*/
console.log("Task: C");

function decryptMessage(message, alphabet, shift) {
    let decryptedMessage = "";
    const len = alphabet.length;

    for (let char of message) {
        if (char === " ") {
            decryptedMessage += char;
        } else {
            let index = alphabet.indexOf(char);
            let shiftedIndex = (index - shift + len) % len;
            decryptedMessage += alphabet[shiftedIndex];
        }
    }

    return decryptedMessage;
}
 
const ALPHABET = "abcdefghijklmnopqrstuvwxyz"
const message = "ckrr jutk"
let shift = 6

console.log(decryptMessage(message, ALPHABET, shift));



/* -----------------------------------------------------------------------------
    Task: D

    You are given a list of numbers.
    Write a function that takes the list and a target sum as input parameters
    The function is then to figure out what two numbers in the list that summed makes the provided sum.

    Example:
    [3,2,6,9]
    target 9
    -> [3,6]

*/
console.log("Task: D");

function findTwoNumbers(numbers, target) {
    for (let i = 0; i < numbers.length; i++) {
        for (let j = i + 1; j < numbers.length; j++) {
            if (numbers[i] + numbers[j] === target) {
                return [numbers[i], numbers [j]];
            }
        }
    }
    return null;
}

const numbers = [1, 23, 14, 56, 42, 33, 0, 3];
const target = 36;

console.log(findTwoNumbers(numbers, target));


/* -----------------------------------------------------------------------------
    Task: E
    Create a function that takes a number as inputt and returns the number of digits in that number. 
    123 -> 3
    2 -> 1
    42693 -> 5
*/
console.log("Task: E");

function countDigits(number) {
    return number.toString().length;
}

console.log(countDigits(123));
console.log(countDigits(2));
console.log(countDigits(42693));