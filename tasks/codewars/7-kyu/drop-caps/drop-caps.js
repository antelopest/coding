/*
DropCaps means that the first letter of the starting word of the paragraph should be in caps and the remaining lowercase, just like you see in the newspaper.
But for a change, let's do that for each and every word of the given String. Your task is to capitalize every word that has length greater than 2, leaving smaller words as they are.
should work also on Leading and Trailing Spaces and caps.

Dropcaps означает, что первая буква начального слова абзаца должна быть прописной,
а остальные - строчные, точно так же, как вы видите в газете.
Но для разнообразия давайте сделаем это для каждого слова данной строки.
Ваша задача состоит в том, чтобы писать заглавными буквами каждое слово, длина которого превышает 2,
оставляя слова меньшего размера такими, какие они есть.

"apple"            => "Apple"
"apple of banana"  => "Apple of Banana"
"one   space"      => "One   Space"
"   space WALK   " => "   Space Walk   "
*/
const dropCaps= n => {
    n.split(' ')
        .filter((e) => e.length > 2)
        .filter((e, i, arr) => arr.indexOf(e) === i)
        .forEach((e, i) => {
          const upperCaseWord = e.split('').map((e, i) => i === 0 ? e.toUpperCase() : e.toLowerCase()).join('');

          n = n.replaceAll(e, upperCaseWord);
        });

    return n;
}

console.log(dropCaps("   space WALK   "));

/*
* Best practices
* */
function dropCap(n) {
    n = n.split(' ');
    for(var i = 0; i < n.length; i++) {
        if(n[i].length > 2) {
            n[i] = n[i].slice(0, 1).toUpperCase() + n[i].slice(1).toLowerCase();
        }
    }
    return n.join(' ');
}