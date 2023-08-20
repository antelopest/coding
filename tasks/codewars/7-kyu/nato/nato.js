/*
Complete the function word (string) and returns a string that spells the word using the NATO phonetic alphabet.
There should be a space between each word in the returned string, and the first letter of each word should be capitalized.
For those of you that don't want your fingers to bleed, this kata already has a dictionary typed out for you.

Завершите функцию Word(string) и верните строку, в котором пишется с использованием фонетического алфавита НАТО.
Между каждым словом в возвращаемой строке должен быть проблем, и первая буква каждого слова должна быть заглавной.
Для тех из вас, кто не хочет, чтобы ваши пальцы кровоточили, в этой задаче уже есть напечатанный для вас словарь.

"hi" ==>  "Hotel India"
"Banana" ==> "Bravo Alpha November Alpha November Alpha"
*/
const nato = str => {
    const letters = {
        "A": "Alpha",  "B": "Bravo",   "C": "Charlie",
        "D": "Delta",  "E": "Echo",    "F": "Foxtrot",
        "G": "Golf",   "H": "Hotel",   "I": "India",
        "J": "Juliett","K": "Kilo",    "L": "Lima",
        "M": "Mike",   "N": "November","O": "Oscar",
        "P": "Papa",   "Q": "Quebec",  "R": "Romeo",
        "S": "Sierra", "T": "Tango",   "U": "Uniform",
        "V": "Victor", "W": "Whiskey", "X": "X-ray",
        "Y": "Yankee", "Z": "Zulu"
    };

    return str.toUpperCase().split('').map(e => letters[e]).join(' ');
}

/*
Test values
*/
const tests = [
    ['hi', 'Hotel India'],
    ['abc', 'Alpha Bravo Charlie'],
    ['babble', 'Bravo Alpha Bravo Bravo Lima Echo'],
    ['Banana', 'Bravo Alpha November Alpha November Alpha']
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
tests.forEach(e => assert(nato(e[0]), e[1]));