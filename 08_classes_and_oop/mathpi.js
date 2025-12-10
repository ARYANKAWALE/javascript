const descriptior = Object.getOwnPropertyDescriptor(Math, "PI");
// console.log(descriptior)
// hardcoded values present that's why they constant
// {
//   value: 3.141592653589793,
//   writable: false,
//   enumerable: false,
//   configurable: false
// }



const sweets = {
    name : "rasmlai",
    price: 100,
    quantity: 1,
    order: function() {
        console.log(`no sweets`)
    }

}
// console.log(Object.getOwnPropertyDescriptor(sweets, "name"))

Object.defineProperty(sweets, "name",{
    writable: false,
    configurable: false
})

// console.log(Object.getOwnPropertyDescriptor(sweets, "name"))

for (let [key,value] of Object.entries(sweets)) {
    if(typeof value !== "function")
    console.log(`${key} : ${value}`)
}