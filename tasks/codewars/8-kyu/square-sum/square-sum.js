/*
Complete the square sum function so that it squares each number passed into it and then sums the results together.
*/
const squareSum = numbers => {
    let sum = 0;

    numbers.forEach(e => {
        sum += Math.pow(e, 2);
    });

    return sum;
}

const tests = [
    [-4, -18, -19, 12, -17, -3, 20, -15, -13]
];

tests.forEach(e => {
    console.log(squareSum(e));
});