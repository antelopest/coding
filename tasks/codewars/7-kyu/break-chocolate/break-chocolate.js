/*
Your task is to split the chocolate bar of given dimension n x m into small squares. Each square is of size 1x1 and unbreakable.
Implement a function that will return minimum number of breaks needed.
For example if you are given a chocolate bar of size 2 x 1 you can split it to single squares in just one break, but for size 3 x 1 you must do two breaks.
If input data is invalid you should return 0 (as in no breaks are needed if we do not have any chocolate to split). Input will always be a non-negative integer.

Ваша задача состоит в том, чтобы разделить плитку шоколада заданного размера n x m на маленькие квадратики. Каждый квадрат имеет размер 1х1 и не поддается разрушению.
Реализуйте функцию, которая будет возвращать минимальное количество необходимых перерывов.
Например, если вам дали плитку шоколада размером 2 х 1, вы можете разделить ее на отдельные квадратики всего за один перерыв, но для размера 3 х 1 вы должны сделать два перерыва.
Если входные данные неверны, вы должны вернуть 0 (так как в этом случае перерывы не нужны, если у нас нет шоколада для разделения). Входными данными всегда будет неотрицательное целое число.

5,5 24
1,1 0
*/

function breakChocolate(n,m) {
    if (m > 0 && n > 0) {
        return (m * n) - 1;
    }

    return 0;
}