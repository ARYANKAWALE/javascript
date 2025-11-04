// const MyNums = [1,2,3]
// const myTotal = MyNums.reduce((Acc,currval) =>{
//     console.log(`Acc ${Acc} currval ${currval}`);
//     return Acc + currval
// }, 0)
// const myTotal = MyNums.reduce((Acc,currval) => Acc + currval, 0)
// console.log(myTotal)

const shopping = [
    {
        itemName:"item 1",
        price:999
    },
    {
        itemName:"item 2",
        price:699
    },
    {
        itemName:"item 3",
        price:199
    },
    {
        itemName:"item 4",
        price:799
    },
    {
        itemName:"item 5",
        price:399
    },
]

const pricetopay = shopping.reduce((acc,item)=> acc+ item.price,0)

console.log(pricetopay)