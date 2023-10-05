/*
Учитывая две строки, состоящие из + и -, верните новую строку, которая показывает, как эти две строки взаимодействуют следующим образом:

Когда позитивы взаимодействуют друг с другом, они остаются позитивными.
Когда негативы взаимодействуют друг с другом, они остаются негативными.
Но когда отрицательные и положительные стороны взаимодействуют, они становятся нейтральными и отображаются как число 0.
*/

const neutralize = (s1, s2) => {
    const arr1 = s1.split('');
    const arr2 = s2.split('');

    const arrResult = [];

    arr1.forEach((e, i) => {
        const element1 = e;
        const element2 = arr2[i];

        if (element1 === '+' && element2 === '+') {
            arrResult.push('+');
        }

        if (element1 === '-' && element2 === '-') {
            arrResult.push('-');
        }

        if (element1 !== element2) {
            arrResult.push('0');
        }
    });

    return arrResult.join('');
}

console.log(neutralize("--++--", "++--++")); // 000000