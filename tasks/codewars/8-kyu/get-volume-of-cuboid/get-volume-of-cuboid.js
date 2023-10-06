/*
Bob needs a fast way to calculate the volume of a cuboid with three values:
the length, width and height of the cuboid. Write a function to help Bob with this calculation.
*/
class Kata {
    static getVolumeOfCuboid(length, width, height) {
        return length * width * height;
    }
}

const tests = [
    [1, 2, 2],
    [6, 2, 5]
];

tests.forEach(e => {
    console.log(Kata.getVolumeOfCuboid(...e));
})