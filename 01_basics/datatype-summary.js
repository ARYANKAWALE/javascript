// primitive datatype

// 7 types : String,boolean,BigInt,Number,undefined,symbol,null

// const bigNumber = 2435635423453245324355n
const isLoggedIn = false
const outsideTemp = null
let userEmaill;

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId);


// Reference datatype
// Array,Object,Functions

const heros = ["shaktiman","nagraj","doga"];
let myObj = {
    name:"aryan",
    age:18,
}

const myFunction =  ()=>{
console.log("Hello Reader");
}

console.log(typeof myFunction);

// https://262.ecma-international.org/5.1/#sec-11..4.3



// *******************************************

// Stack(premitive datatype)   Heap(Non-premitive datatype)

let myName = "Aryan";
let anotherName = myName;
anotherName = "Aaru";
console.log(myName);
console.log(anotherName);

let userOne = {
    email:"aryan@gmail.com",
    upi : "user@sbi"
}

userTwo = userOne;

userTwo.email = "aryan163@gmail.com";
console.log(userOne);
console.log(userTwo);