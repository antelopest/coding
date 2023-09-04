/*
In this simple exercise, you will build a program that takes a value, integer , and returns a list of its multiples up to another value, limit .
If limit is a multiple of integer, it should be included as well. There will only ever be positive integers passed into the function, not consisting of 0.
The limit will always be higher than the base.

For example, if the parameters passed are (2, 6), the function should return [2, 4, 6] as 2, 4, and 6 are the multiples of 2 up to 6.

let arr = Array(5) - возвращает пустой массив с длинной 5.
arr // []
arr.length // 5

arr.fill(0) - заполяет все элементы массива 0
arr // [0,0,0,0,0]
*/


const findMultiples = (integer, limit) => {
    let maxIndex = (limit - limit % integer) / integer;
    return Array(maxIndex).fill(0).map((e, i) => integer * (i + 1));
}

findMultiples(5, 25);
