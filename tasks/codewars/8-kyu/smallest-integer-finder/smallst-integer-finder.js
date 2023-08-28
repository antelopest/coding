/*
Given an array of integers your solution should find the smallest integer.

For example:
Given [34, 15, 88, 2] your solution will return 2
Given [34, -345, -1, 100] your solution will return -345

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