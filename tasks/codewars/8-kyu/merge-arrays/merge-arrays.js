/*
Write a function that merges two sorted arrays into a single one.
The arrays only contain integers. Also, the final outcome must be sorted and not have any duplicate.
*/

const mergeArrays = (a, b) => [...a, ...b]
    .filter((e, i, arr) => arr.indexOf(e) === i)
    .sort((a, b) => a - b);

const tests = [
    [[1, 3, 5], [2, 4, 6]],
    [[2, 4, 8], [2, 4, 6]]
];

tests.forEach(e => {
    console.log(mergeArrays(...e));
});