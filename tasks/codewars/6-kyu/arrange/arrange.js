/*
A list S will be given. You need to generate a list T from it by following the given process:

1. Remove the first and last element from the list S and add them to the list T.
2. Reverse the list S
3. Repeat the process until list S gets emptied.

The above process results in the depletion of the list S. Your task is to generate list T without mutating the input List S.

Вам будет предоставлен список S. Вам нужно сгенерировать из него список T, следуя заданному процессу:
1. Удалите первый и последний элемент из списка S и добавьте его в список T
2. Переверните список S
3. Повторяйте процесс до тех пор, пока список S не будет очищен

Описанный выше процесс приводит к исчерпанию списка S.
Ваша задача состоит в том, чтобы сгенерировать список T без изменения входного списка S.

S = [1,2,3,4,5,6]
T = []

S = [2,3,4,5] => [5,4,3,2]
T = [1,6]

S = [4,3] => [3,4]
T = [1,6,5,2]

S = []
T = [1,6,5,2,3,4]
*/
const arrange = s => {
    let t = [];
    let count = s.length;

    for (let i = 1; i <= count; i++) {
        if (!s.length) break;

        if (i > 1) {
            s.reverse();
        }

        if (s.length >= 2) {
            t.push(s.shift());
            t.push(s.pop());

            continue;
        }

        if (s.length === 1) {
            t.push(s.shift());
        }
    }

    return t;
}

// console.log(arrange([1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5, 6]));
console.log(arrange([ 9, 7, -2, 8, 5, -3, 6,  5, 1]));
