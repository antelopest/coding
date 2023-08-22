/*
Function assert
*/
const assert = (resultValue, correctValue) => {
    if (resultValue === correctValue) {
        console.log(`Тест пройден: ${resultValue} === ${correctValue}`);
        return;
    }

    console.log(`Тест не пройден: ${resultValue} !== ${correctValue}`);
}