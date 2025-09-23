const cars = ["toyota","laborghini","suzuki","mitsubishi"]
const bikes = ["hayabusa","h2r","s1000rr","z900"]

// cars.push(bikes)
// console.log(cars);

const machines = cars.concat(bikes) //this concat technique is also used to combine two arrays
// console.log(machines)

const automobile = [...cars,...bikes]   //this spread technique mostly used to combine two arrays
// console.log(automobile)  

const another_array = [1,2,5,[4,5,2],5,[1,7,8,3,9,4,[5,7,2,5,1,6,8,5]]]
const real_another_array = another_array.flat(Infinity)
// console.log(real_another_array)

console.log(Array.isArray({name:"aryan"})) 
console.log(Array.from({name:"aryan"}))    //interesting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3))