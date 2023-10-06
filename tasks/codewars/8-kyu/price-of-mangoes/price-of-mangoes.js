/*
There's a "3 for 2" (or "2+1" if you like) offer on mangoes.
For a given quantity and price (per mango), calculate the total cost of the mangoes.
*/
const mango = (quantity, price) => {
    let remains = quantity % 3;
    let count = ((quantity - remains) / 3) * 2;

    return remains * price + count * price;
}

const tests = [
    [3, 3],
    [9, 5]
];

tests.forEach(e => {
    console.log(mango(...e));
});