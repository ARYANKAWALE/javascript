const sayMyName = () => {
  console.log("A");
  console.log("R");
  console.log("Y");
  console.log("A");
  console.log("N");
};
// sayMyName();

// const addTwoNumber = (number1,number2)=>{
//     if(typeof number1 === "number" && typeof number2 === "number"){
//         console.log(number1 + number2);
//     }
//     else{
//         console.log("not a number")
//     }
// }

// addTwoNumber(3,5)
// addTwoNumber(2,"4");

const addNumber = (number1, number2) => {
  //   let result = number1 + number2;
  //   return result
  return number1 + number2;
};
const result = addNumber(2, 4);
// console.log(result)

// const loginUser = (username) => {
//     return `${username} just logged in`
// }
const loginUser = (username = "aryan") => {
  if (username === undefined) {
    console.log("please enter the name");
    return;
  }
  return `${username} just logged in`;
};

// console.log(loginUser("Aryan"));
// console.log(loginUser());  // if not passed anything it will return undefined

const calculatePrice = (...num1) => {
  return num1;
};
// console.log(calculatePrice(200,888,999))

const user = {
  username: "Aryan",
  price: 199,
};

function handleObject(anyobject) {
  console.log(
    `the name is ${anyobject.username} and prices is ${anyobject.price}`
  );
}
// handleObject(user);
// handleObject({
//   username: "Vrushali",
//   price: 30,
// });

const myArray = [100, 300, 200, 500];

const returnSecondValue = (getArray) => {
  return myArray[1];
};
// console.log(returnSecondValue(myArray))
console.log(returnSecondValue([200,400,100,600]))