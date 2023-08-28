/*
Write a function that takes a string of parentheses, and determines if the order of the parentheses is valid.
The function should return true if the string is valid, and false if it's invalid.

Examples
"()"              =>  true
")(()))"          =>  false
"("               =>  false
"(())((()())())"  =>  true
*/

// const validParentheses = str => {
//     const counter = str.split('').reduce((counter, element) => {
//         if (element === ')') counter.rightCount++;
//         if (element === '(') counter.leftCount++;
//
//         return counter;
//     }, { leftCount: 0, rightCount: 0 });
//
//     return counter.rightCount === counter.leftCount;
// }

// console.log(validParentheses("()"));
// console.log(validParentheses(")("));