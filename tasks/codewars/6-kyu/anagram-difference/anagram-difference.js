/*
Given two words, how many letters do you have to remove from them to make them anagrams?
Example
First word : c od e w ar s (4 letters removed)
Second word : ha c k er r a nk (6 letters removed)
Result : 10
*/
function anagramDifference(word1, word2){
    const arrWord1 = word1.split('');
    const arrWord2 = word2.split('');

    const arr = new Array(...arrWord1);

    console.log('arr:', arr);

    arr.forEach(
        (e, i) => {
            let indexWord2 = arrWord2.indexOf(e);

            if (indexWord2 !== -1) {
                arrWord2.splice(indexWord2, 1);

                let indexWord1 = arrWord1.indexOf(e);

                if (indexWord1 !== -1) {
                    arrWord1.splice(indexWord1, 1);
                }
            }
        }
    );

    return arrWord1.length + arrWord2.length;
}


console.log(anagramDifference("codewars", "hackerrank"));
console.log(anagramDifference("rffhmkhvtuckgdlanudcqeugdboqsjftossfbwatekpfxqjau", "saubgpewfrjljgyxotjvmmujkfkqecqqwusoxktbixukqpkhzkscsrjbbhdbxxwgjlpzvvfhzseqpfrfypiyukyqfieimrvrxrt"));