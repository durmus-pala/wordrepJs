let word = prompt('Please Enter your word');
let seperator = prompt('Please Enter your seperator');
let rep = prompt('How many times to write it?');

alert(`Your output is ${(word + seperator).repeat(rep).slice(0, -1)}`);