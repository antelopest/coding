/*
In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?
*/
const makeNegative = num => {
    if (num === 0) return 0;

    if (num > 0) return num * -1;

    return num;
}

/* BEST PRACTICE */
function makeNegative(num) {
    return -Math.abs(num);
}