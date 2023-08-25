/*
Your task is to find the maximum number of queens that can be put on the board so that there would be one single unbeaten square (ie. threatened by no queen on the board).
The Queen can move any distance vertically, horizontally and diagonally.

Ваша задача - найти максимальное количество ферзей, которые можно поставить на доску так, чтобы осталась одна-единственная непобежденная клетка (т.е. под угрозой отсутствия ферзя на доске).
Ферзь может перемещаться на любое расстояние по вертикали, горизонтали и диагонали.
*/
const queens = n => {
    if (n <= 0) return 0n;
    return (n * n - (n - 1n) - (n - 1n) - (n - 1n) - 1n);
}

console.log(queens(4n));
console.log(queens(5n));
console.log(queens(6n));