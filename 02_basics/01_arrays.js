const arr = [3,5,6,8,6,4,2]
const myhero = ["spiderman","batman"]

const arr2 = new Array(1,2,3,4)
// console.log(arr[1])

// arr.push(6)
// arr.push(7)   //add value to the last
// arr.pop()   //removes last value
// arr.unshift(9)  //adds value in the first
// arr.shift()   //removes first value
// console.log(arr.includes(9))
// console.log(arr.indexOf(9))
// console.log(arr)
const newarr = arr.join()  //add all element of array into string
// console.log(newarr) 

// slice & splice
console.log("A", arr)

const myn1 = arr.slice(1,3)
const myn2 = arr.splice(3,5)
console.log(myn1)
console.log(myn2)
console.log("B",arr)