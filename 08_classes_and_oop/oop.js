// const user = {
//     username:"aryan",
//     loginCount: 8,
//     signedIn:true,

//     getUserDetails: function(){
//         // console.log("Got User details");
//         // console.log(`Username: ${this.username`});
//             console.log(this)
//     }
// }

// console.log(user.username)
// console.log(user.getUserDetails);
// console.log(this)

function User(username, loginCount, isLoggedIn) {
  this.username = username;
  this.loginCount = loginCount;
  this.isLoggedIn = isLoggedIn;

  return this;
}

const userOne = new User("Aryan", 14, true);
const userTwo = new User("john", 24, false);
console.log(userOne)
console.log(userTwo)
