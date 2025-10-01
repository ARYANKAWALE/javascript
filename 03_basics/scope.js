if (true) {
  let a = 10;
  const b = 30;
  var c = 20; //var is a global scope variable so we don't use this
  //   console.log("Value:", a);
}
// console.log(a);
// console.log(b);
// console.log(c);

// function one() {
//   const username = "Aryan";
//   function two() {
//     const website = "youtube";
//     // console.log(username);
//   }
//   //   console.log(website);

//   two();
// }
// one();

if (true) {
  const user = "Aryan";
  if (user === "Aryan") {
    const website = "Weather";
    // console.log(user + website);
  }
  // console.log(website)
}
// console.log(user)


// ***********************intresting****************************

function addOne(num){
    return num +1;
}
addOne()

const number = function addTwo(num){
    return num + 2
}
addTwo()