/*
In this kata, you should calculate the type of triangle with three given sides a, b and c (given in any order).
If each angle is less than 90°, this triangle is acute and the function should return 1.
If one angle is strictly 90°, this triangle is right and the function should return 2.
If one angle is more than 90°, this triangle is obtuse and the function should return 3.
If three sides cannot form a triangle, or one angle is 180° (which turns the triangle into a segment) - the function should return 0.
Three input parameters are sides of given triangle. All input values are non-negative floating point or integer numbers (or both, depending on the language).

В этой задаче, вы должны рассчитать тип треугольника с тремя заданными сторонами (a, b, c).
Если каждый угол меньше 90 градусов, то этот треугольник является острым, и функция должна возврать значение 1.
Если один угол равен строго 90 градусов, то этот треугольник правильный, функция должна возвращать значение 2.
Если один угол больше 90 градусов, то этот треугольник тупой, то функция должна возвращать значение 3.
Если три стороны не могут образовать треугольник, или один угол равен 180 градусов, функция должна возвращать 0.
Три входных параментра являются сторонами треугольника. Все входные значения представляют собой неотрицательные числа с плавающей
запятой или целые числа.
(2, 4, 6) ---> return 0 (Not triangle)
(8, 5, 7) ---> return 1 (Acute, angles are approx. 82°, 38° and 60°)
(3, 4, 5) ---> return 2 (Right, angles are approx. 37°, 53° and exactly 90°)
(7, 12, 8) ---> return 3 (Obtuse, angles are approx. 34°, 106° and 40°)
*/
const triangleType = (a, b, c) => {
    const A = (Math.acos((Math.pow(a, 2) + Math.pow(c, 2) - Math.pow(b, 2))/(2*a*c)) * 180) / Math.PI;
    const B = (Math.acos((Math.pow(a, 2) + Math.pow(b, 2) - Math.pow(c, 2))/(2*a*b)) * 180) / Math.PI;
    const Y = (Math.acos((Math.pow(b, 2) + Math.pow(c, 2) - Math.pow(a, 2))/(2*c*b)) * 180) / Math.PI;

    if (isNaN(A) || isNaN(B) || isNaN(Y)) return 0;

    const arr = [A, B, Y];

    const triangleTypeAcute = arr => arr.every(e => e < 90); // 1
    const triangleTypeRight = arr => arr.some(e => e === 90); // 2
    const triangleTypeObtuse = arr => arr.some(e => e > 90); // 3
    const isNotTriangle = arr => arr.some(e => e === 180); // 0

    if (isNotTriangle(arr)) return 0;
    if (triangleTypeAcute(arr)) return 1;
    if (triangleTypeRight(arr)) return 2;
    if (triangleTypeObtuse(arr)) return 3;
}

/*
Test values
*/
const tests = [
    [[2,4,6], 0],
    [[8,5,7], 1],
    [[3,4,5], 2],
    [[7,12,8], 3],
    [[7,3,2],3]
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
tests.forEach(e => assert(triangleType(e[0][0], e[0][1], e[0][2]), e[1]));