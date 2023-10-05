/*
Create a function that always returns true for every item in a given list. However, if an element is the word "flick", switch to always returning the opposite boolean value.
*/

const flickSwitch = arr => {
    let bool = true;

    return arr.map(e => {
        if (e === 'flick') {
            bool = !bool;
        }

        return bool;
    });
}

console.log(flickSwitch(["codewars", "flick", "code", "wars"]));