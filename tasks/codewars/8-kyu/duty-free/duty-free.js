const dutyFree = (normPrice, discount, hol) => {
}

const tests = [
    [[12, 50, 1000], 166],
    [[17, 10, 500], 294],
    [[24, 35, 3000], 357]
];

tests.forEach(
    e => {
        console.log(dutyFree(...e[0]), e[1]);
    }
)