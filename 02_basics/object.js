const mySym = Symbol("key1")

const JsUser = {
    name:"aryan",
    "full name": "Aryan kawale",
    [mySym]:"mykey1",  //must give square braces for Symbol
    age: 19,
    location: "Nagpur",
    email:"aryankawale163@gmail.com",
    isLoggedIn: false,
    lastLoginDays:["Monday","Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

// JsUser.email = "aryan@ghrcemn"
// Object.freeze(JsUser)
// JsUser.email = "aryan@gpt"
// console.log(JsUser)

JsUser.greeting = function(){
    console.log("Hello");
}

JsUser.greetingTwo = function(){
    console.log(`hello Js user, ${this.name}`)
}

console.log(JsUser.greeting())
console.log(JsUser.greetingTwo())