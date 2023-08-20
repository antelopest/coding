/*
You are given a string representing a number in binary.
Your task is to delete all the unset bits in this string and return the corresponding number (after keeping only the '1's).

Необходимо удалить все нули в строке.
Перевести полученное число из двоичной системы счисления в десятичную.

'11010101010101' -> '11111111' -> 255
* */

const eliminateUnsetBits = str => {
    const removesZeroInString = _str => _str.replaceAll('0', '');
    const validStr = _str => _str.length ? _str : '0';
    const convertStringFromBinaryToDecimal = _str => parseInt(_str, 2);

    return convertStringFromBinaryToDecimal(validStr(removesZeroInString(str)));
};

const assert = (resultValue, correctValue) => {
    if (resultValue === correctValue) {
        console.log(`Тест пройден: ${resultValue} === ${correctValue}`);
        return;
    }

    console.log(`Тест не пройден: ${resultValue} !== ${correctValue}`);
}

/*
Test values
*/

const tests = [
    ['11010101010101', 255],
    ['111', 7],
    ['1000000', 1],
    ['000', 0]
];

/*
Tests run
*/
tests.forEach(e => assert(eliminateUnsetBits(e[0]), e[1]));

/*
Best practice
*/
const bestPractice = str => parseInt(str.replace(/0/g, '') || 0, 2);

/*
Tests run
*/
tests.forEach(e => assert(eliminateUnsetBits(e[0]), e[1]));