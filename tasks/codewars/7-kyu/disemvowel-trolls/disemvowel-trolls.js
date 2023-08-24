/*
Trolls are attacking your comment section!
A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.
Your task is to write a function that takes a string and return a new string with all vowels removed.
For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".
Note: for this kata y isn't considered a vowel.

Тролли атакуют наши комментарии.
Распространенный способ справиться с этой ситуацией - удалить все гласные из комментариев троллей, нейтрализовав угрозу.
Ваша задача состоит в том, чтобы написать функцию, которая принимает строку и возвращает новую строку с удаленными всеми гласными.
Например, строка "This website is for losers LOL!" превратилась бы в "Это wbst s fr lsrs LL!".
Примечание: в этом ката y не считается гласной.
*/
const disemvowel = str => str.replaceAll(/[aeiou]/gi, '');

console.log(disemvowel("This website is for losers LOL!"));