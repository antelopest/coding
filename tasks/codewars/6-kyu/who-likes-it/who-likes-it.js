/*
You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.
Implement the function which takes an array containing the names of people that like an item. It must return the display text as shown in the examples:

[]                                -->  "no one likes this"
["Peter"]                         -->  "Peter likes this"
["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"
*/
const likes = names => {
    const patterns = {
        noOneLikesThis: "no one likes this",
        oneLikeThis: name => `${name} likes this`,
        twoLikeThis: (firstName, secondName) => `${firstName} and ${secondName} like this`,
        threeLikeThis: (firstName, secondName, thirdName) => `${firstName}, ${secondName} and ${thirdName} like this`,
        otherLikeThis: (firstName, secondName, count) => `${firstName}, ${secondName} and ${count} others like this`
    };

    const count = names.length;

    if (count === 0) return patterns.noOneLikesThis;
    if (count === 1) return patterns.oneLikeThis(names[0]);
    if (count === 2) return patterns.twoLikeThis(names[0], names[1]);
    if (count === 3) return patterns.threeLikeThis(names[0], names[1], names[2]);

    return patterns.otherLikeThis(names[0], names[1], count - 2);
}

console.log(likes(["Alex", "Jacob", "Mark", "Max", "Alex", "Jacob", "Mark", "Max"]));