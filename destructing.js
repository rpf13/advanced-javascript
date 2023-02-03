/**
 * To run this file in Gitpod, use the 
 * command node destructuring.js in the terminal
 */

// Destructuring arrays
let ages = [30, 26, 27];
// let john = ages[0];
// let mary = ages[1];
// let joe = ages[2];
let [john, mary, joe] = ages;
console.log(john, mary, joe);

// Destructuring objects
let jobs = {
    mike: "designer",
    jill: "developer",
    alicia: "accountant",
};
let {mike, jill, alicia} = jobs;
console.log(jobs);
console.log(mike, jill, alicia);

// Destructuring subsets of array or objects
let languages = ["english", "french", "spanish", "german", "japanese"];
let [johnNative, johnSecondary] = languages;
console.log(johnNative, johnSecondary);

// for Mary we skip the first two languages
let [, , maryNative, marySecondary] = languages;
console.log(maryNative, marySecondary);


// with objects (hashes) it is even easier to do destructuring,
// we can access certain values by just calling their keys.
let languages2 = {
    firstLanguage: "english",
    secondLanguage: "french",
    thirdLanguage: "german",
    fourthLanguage: "japanese",
};
let {firstLanguage, thirdLanguage} = languages2;
console.log("Objects:", firstLanguage, thirdLanguage);

// Using rest parameter syntax to bundle remaining parts

let fruits = ["apple", "orange", "banana", "peach", "cherry"];
let [favorite, secondFavorite, ...others] = fruits;
console.log(favorite);
console.log(secondFavorite);
console.log(others);


let favoriteFoods = {
    brian: "pizza",
    anna: "pasta",
    sarah: "vegetarian",
    andrea: "steak",
};
let {brian, anna, ...rest} = favoriteFoods;
console.log(brian);
console.log(anna);
console.log(rest);