const user = {
    username:"aryan",
    price:999,

    welcomeMessage: function() {
        console.log(`${this.username}, welcome`)  //this is use to refer current context like inside {}
        // console.log(this)
    } 
}

// user.welcomeMessage()
// user.username = "Aaru"
// user.welcomeMessage()   //Aaru will print because this context  is only use inside block,we can redeclare the value ouside context of block and it will be print 
// console.log(this)

function chai(){
    // console.log(this) //this only used in objects not in function if it is then it will print undefined
}
// chai()


// const addNum = (num1,num2) =>{  //basic arrow function
//     return num1 + num2;
// }

// const addNum = (num1,num2) => num1 + num2; //implicit return function
// const addNum = (num1,num2) => (num1 + num2);

const addNum = (num1,num2) => ({username:"aryan"});

// console.log(addNum(3,4))


const myArray = [3,4,5,1]

myArray.forEach(function() {})
myArray.forEach(() => {})