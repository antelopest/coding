/*
There are pillars near the road.
The distance between the pillars is the same and the width of the pillars is the same.
Your function accepts three arguments:

number of pillars (≥ 1);
distance between pillars (10 - 30 meters);
width of the pillar (10 - 50 centimeters).
Calculate the distance between the first and the last pillar in centimeters (without the width of the first and last pillar).
*/

const pillars = (
    numPil,
    dist,
    width
) => {
    let distance = 0;

    if ((numPil - 1) > 0) distance += (numPil - 1) * dist * 100;

    if ((numPil - 2) > 0) distance += (numPil - 2) * width;

    return distance;
}

const tests = [
    [[1, 10, 10], 0],
    [[2, 20, 25], 2000],
    [[11, 15, 30], 15270]
];

const assert = (
    resultValue,
    correctValue
) => (resultValue === correctValue) ?
    `Тест пройден: ${resultValue} === ${correctValue}` :
    `Тест не пройден: ${resultValue} !== ${correctValue}`;

const startTest = (pillars, tests) => {
    tests.forEach(e => {
        console.log(assert(pillars(...e[0]), e[1]));
    });
}

startTest(pillars, tests);