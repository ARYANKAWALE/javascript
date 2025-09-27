// const tinderUser = new Object()

const tinderUser = {};

tinderUser.id = "123abc";
tinderUser.name = "mayank";
tinderUser.isloggedIn = true;

// console.log(tinderUser)

const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "a", 4: "b" };
const obj3 = { 5: "a", 6: "b" };

//  const obj4 = (obj1,obj2);

// const obj4 = Object.assign({},obj1,obj2,obj3)  //{}--->target

const obj4 = { ...obj1, ...obj2, ...obj3 };
// console.log(obj4);

const users = [
  {
    email: "aryan@gmail.com",
    name: "jdgg",
  },
  {
    email: "wb@gmail.com",
    name: "jdgg",
  },
  {
    email: "wctan@gmail.com",
    name: "jdgg",
  },
  {
    email: "btwc@gmail.com",
    name: "jdgg",
  },
  {
    email: "wbc@gmail.com",
    name: "jdgg",
  },
  {
    email: "wctb@gmail.com",
    name: "jdgg",
  },
];

// console.log(users[1])

// console.log(tinderUser)

// console.log(Object.keys(tinderUser))

// console.log(Object.values(tinderUser))

// console.log(Object.entries(tinderUser))

console.log(tinderUser.hasOwnProperty('isloggedIn'))