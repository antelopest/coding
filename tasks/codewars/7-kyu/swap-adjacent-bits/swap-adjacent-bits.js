/*
You are given a 32-bit integer n.
Swap each pair of adjacent bits in its binary representation and return the result as a decimal number.

The potential leading zeroes of the binary representations have to be taken into account,
e.g. 0b100 as a 32-bit integer is 0b00000000000000000000000000000100 and is reversed to 0b1000.

For n = 13, the output should be 14:

1310 = 11012 --> 11102 = 1410
For n = 74, the output should be 133:
7410 = 010010102 --> 100001012 = 13310
*/
const swapAdjacentBits = number => {
    let decimal = number.toString(2).split('');

    if (decimal.length % 2) {
        decimal.unshift(0);
    }

    let decimalReverse = decimal.reduce(
        (reverse, element, index) => {
            if (index === decimal.length - 1 &&
                reverse.prev.length === 0) {
                reverse.value += element;

                return reverse;
            }

            if (reverse.prev.length <= 2) {
                reverse.prev += element;
            }

            if (reverse.prev.length === 2) {
                reverse.value += reverse.prev.split('').reverse().join('');

                reverse.prev = '';
            }

            return reverse;
        }, {
            prev: '',
            value: ''
        }
    ).value;

    return parseInt(decimalReverse, 2);
}

console.log(swapAdjacentBits(74));
