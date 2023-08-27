/*
Convert boolean value to string
If true to convert string value "Yes"
If false to convert string value "No"
*/
const bootToWord = bool => bool === true ? 'Yes' : 'No';

console.log(bootToWord(true));
console.log(bootToWord(false));
