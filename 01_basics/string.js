const name = "Aryan";
const repoCount = 50;

// console.log(name + repoCount + "Value"); //dont write like this

// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);   //this is right way to write


const gameName = new String("roblox-game");

// console.log(gameName.length);
// console.log(gameName.charAt(1))
// console.log(gameName.indexOf('b'))

// const newString = gameName.substring(1,5)
// console.log(newString)

const anotherString = gameName.slice(-6)
// console.log(anotherString)


const newStringOne = "     aryan     ";
// console.log(newStringOne)
// console.log(newStringOne.trim())

const url = "https://www.aryan.com/aryan%20kawale";
// console.log(url.replace('%20', '-'))

// console.log(url.includes('aryan'))

const sentence = "The quick brown fox jumps over the lazy dog.";

let index = 5;

// console.log(`An index of ${index} returns the character ${sentence.at(index)}`);


index = -4;

// console.log(`An index of ${index} returns the character ${sentence.at(index)}`);

const myString = "Every green bus drives fast.";

// Using length property and charAt() method
const lengthWay = myString.charAt(myString.length - 2);
console.log(lengthWay); // 't'

// Using slice() method
const sliceWay = myString.slice(-2, -1);
console.log(sliceWay); // 't'

// Using at() method
const atWay = myString.at(-2);
console.log(atWay); // 't'