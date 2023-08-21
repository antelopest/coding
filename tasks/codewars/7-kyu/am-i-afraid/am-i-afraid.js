/*
Am i afraid
I've got a crazy mental illness.
I dislike numbers a lot. But it's a little complicated: The number I'm afraid of depends on which day of the week it is...

Боюсь ли я
У меня сумасшедшее психическое заболевание. Мне очень не нравятся цифры.
Но это немного сложно: число, которого я боюсь, зависит от того, какой сегодня день недели...

Monday --> 12
Tuesday --> numbers greater than 95 - числа большие 95
Wednesday --> 34
Thursday --> 0
Friday --> numbers divisible by 2 - числа четные
Saturday --> 56
Sunday --> 666 or -666
*/
const AmIAfraid = (day, num) => {
    const Monday = n => n === 12;
    const Tuesday = n => n > 95;
    const Wednesday = n => n === 34;
    const Thursday = n => n === 0;
    const Friday = n => n % 2 === 0;
    const Saturday = n => n === 56;
    const Sunday = n => n === 666 || n === -666;

    switch (day) {
        case 'Monday':
            return Monday(num);
        case 'Tuesday':
            return Tuesday(num);
        case 'Wednesday':
            return Wednesday(num);
        case 'Thursday':
            return Thursday(num);
        case 'Friday':
            return Friday(num);
        case 'Saturday':
            return Saturday(num);
        case 'Sunday':
            return Sunday(num);
    }
}

/*
Test values
*/
const tests = [
    [['Monday', 13], false],
    [['Sunday', -666], true],
    [['Tuesday', 2], false],
    [['Tuesday', 965], true],
    [['Friday', 2], true]
];

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

/*
Tests run
*/
tests.forEach(e => assert(AmIAfraid(e[0][0], e[0][1]), e[1]));

/*
Best practice (votes win)
*/
var bestPracticeAmIAfraid = function(day, num) {
    var preds = {"Sunday":    d => d == 666 || d == -666,
        "Monday":    d => d == 12,
        "Tuesday":   d => d > 95,
        "Wednesday": d => d == 34,
        "Thursday":  d => d === 0,
        "Friday":    d => d % 2 === 0,
        "Saturday":  d => d == 56};

    return preds[day](num);

}