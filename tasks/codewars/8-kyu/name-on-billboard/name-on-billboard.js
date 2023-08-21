/*
You can print your name on a billboard ad. Find out how much it will cost you.
Each character has a default price of $30, but that can be different if you are given 2 parameters instead of 1 (always 2 for Java).
You can not use multiplier "*" operator.
If your name would be Jeong-Ho Aristotelis, ad would cost £600. 20 letters * 30 = 600 (Space counts as a character).

Вы можете напечатать свое имя на рекламном щите.
Узнайте, во сколько это вам обойдется.
Цена каждого символа по умолчанию составляет 30 долларов, но она может отличаться, если вам задано 2 параметра вместо 1 (всегда 2 для Java).
Вы не можете использовать оператор умножения "*".

Если бы вас звали Чон Хо Аристотелис, реклама обошлась бы в 600 фунтов стерлингов. 20 букв * 30 = 600 (пробел считается символом).
*/
const nameOnBillboard = (name, price = 30) => name.split('').reduce((sum) => price + sum, 0);

/*
Function assert
*/
const assert = (resultValue, correctValue) => resultValue === correctValue ?
    console.log(`Тест пройден: ${resultValue} === ${correctValue}`) : console.log(`Тест не пройден: ${resultValue} !== ${correctValue}`);

assert(nameOnBillboard('Jeong-Ho Aristotelis'), 600);
