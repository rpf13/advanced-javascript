/**
 * To run this file in Gitpod, use the 
 * command node the-spread-operator.js in the terminal
 */

// No spread operator
let arr1 = [1, 2, 3];
let arr2 = arr1;
arr2.push(4);
console.log("Second array:", arr2);
console.log("First array", arr1);
// => The arr2 AND the arr1 will be update in the above's code.

// Copying an array
let arr3 = [4, 5, 6];
// we create a new array and spread the arr2 into arr4
let arr4 = [...arr3];

// if we now add a new element into arr4, it will NOT be added to arr2
arr4.push(7);
console.log("Third array:", arr3);
console.log("Fourth array:", arr4);

// Copying an object

// This also works, when copying objects
let obj1 = {a: 1, b: 2, c: 3};
let obj2 = {...obj1, d: 4};
console.log("First object:", obj1);
console.log("Second object:", obj2);

// if we want to change an objec from the original object, we can first spread
// the original object and then change the value.
let obj3 = {...obj1, b: 4};
console.log("Third Object with updated key b:", obj3);

// Copying only part of an array/object
let arr5 = [...arr1, {...obj1}, ...arr3, "x", "y", "z"];
console.log(arr5);
