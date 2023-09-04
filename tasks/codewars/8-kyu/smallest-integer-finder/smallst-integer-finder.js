/*
Given an array of integers your short-long-short should find the smallest integer.

For example:
Given [34, 15, 88, 2] your short-long-short will return 2
Given [34, -345, -1, 100] your short-long-short will return -345

spread
arr = [1,2,3)
 (...arr) = (1,2,3)
*/
class SmallestIntegerFinder {
    findSmallestInt(args) {
        return Math.min(...args);
    }
}

let finder = new SmallestIntegerFinder();
console.log(finder.findSmallestInt([34, 15, 88, 2]));