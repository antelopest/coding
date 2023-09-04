/*
In this kata, your job is to return the two distinct highest values in a list.
If there are less than 2 unique values, return as many of them, as possible.

The result should also be ordered from highest to lowest.

[4, 10, 10, 9]  =>  [10, 9]
[1, 1, 1]  =>  [1]
[]  =>  []
*/
const twoHighest = arr => {
    const uniqueArr = arr.filter((e, i, arr) => arr.indexOf(e) === i); // new Set(arr)

    if (uniqueArr.length) {
        const sortArr = uniqueArr.sort((a, b) => b - a); // sort b - a
        return sortArr.length >= 2 ? [sortArr[0], sortArr[1]] : [sortArr[0]]; // slice 0, 2
    }

    return [];
}

/*
* Best
*/
function twoHighest1(arr) {
    return [...new Set(arr)].sort((a, b) => b - a).slice(0, 2)
}

console.log(twoHighest([]));
console.log(twoHighest([15]));
console.log(twoHighest([15, 20, 20, 17]));