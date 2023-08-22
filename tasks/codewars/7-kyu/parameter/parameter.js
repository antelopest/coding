/*
Let's define a parameter of number n as the least common multiple (LCM) of the sum of its digits and their product.
Calculate the parameter of the given number n.

Давайте определим параметр числа, не являющийся наименьшим общим кратным (CM) суммы его цифр и их произведений.
Вычислите параметр заданного числа n.

1234
sum 1+2+3+4 = 10
composition 1*2*3*4 = 24

НОК(10, 24)
10 20 30 40 50 60 70 80 90 100 110 120
24 48 72 96 120

result: 120
*/
const parameter = (n) => {
    const sum = String(n).split('').reduce((sum, element) => sum + Number(element), 0);
    const multiply = String(n).split('').reduce((multiply, element) => multiply * Number(element), 1);

    let step = 1;
    let result = null;
    let sumArr = [];
    let multiplyArr = [];

    while (result === null) {

        let colSteps = step + 5;

        for (let i = step; i <= colSteps; i++) {
            sumArr.push(sum * i);
            multiplyArr.push(multiply * i);
        }

        for (let i = 0; i <= colSteps; i++) {
            if (result === null) {
                if (multiplyArr.includes(sumArr[i])) {
                    result = sumArr[i];
                }
            }
        }

        step = step + colSteps;
    }

    return result;
}

console.log(parameter(22));