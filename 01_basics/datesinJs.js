let myDate = new Date();
// console.log(myDate.toDateString());
// console.log(myDate.toJSON())
// console.log(myDate.toLocaleDateString())
// console.log(myDate.toLocaleString())
// console.log(myDate.toISOString())
// console.log(typeof myDate)

// let myCreatedDate = new Date(2021,6,2)
// let myCreatedDate = new Date(2021, 6, 2, 3, 6);
// let myCreatedDate = new Date("2021-6-2")
let myCreatedDate = new Date("12,2,2025")
// console.log(myCreatedDate.toLocaleString());



let myTimeStamp = Date.now()
// console.log(myTimeStamp)
// console.log(myCreatedDate.getTime())

// console.log(Math.floor(Date.now()/1000))

const newDate = new Date()
// console.log(newDate)
// console.log(newDate.getDate())
// console.log(newDate.getMonth()+1)
// console.log(newDate.getFullYear())
// console.log(newDate.getDay())
// console.log(newDate.getMilliseconds())
// console.log(newDate.getHours())
// console.log(newDate.getSeconds())
// console.log(newDate.getTimezoneOffset())


const weekDay = newDate.toLocaleString('default',{
    weekday: "long",
})

console.log(weekDay)