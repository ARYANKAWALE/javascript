// const coding = ["js","ruby","java","cpp"];

// const values = coding.forEach((item) =>{
// console.log(item);
// return item;
// })
// console.log(values);


const myNums = [ 1,2,3,4,5,6,7,8,9,10]

// const newNums = myNums.filter((num)=> num>4)

// const newNums = myNums.filter((num)=>{
//   return num>4 
// } )

// const newNums = []

// myNums.forEach((num)=>{
//     if(num>4){
//         newNums.push(num)
//     }
// })

// console.log(newNums);


const books = [
    {title: 'Book One', genre:'Fiction',publish:1999,edition:2004},
    {title: 'Book Two', genre:'non-fiction',publish:1965,edition:1993},
    {title: 'Book three', genre:'history',publish:2005,edition:2015},
    {title: 'Book four', genre:'physics',publish:2015,edition:1983},
    {title: 'Book five', genre:'history',publish:2012,edition:2025},
    {title: 'Book six', genre:'math',publish:2009,edition:1991},
    {title: 'Book seven', genre:'history',publish:1994,edition:1992},
    {title: 'Book eight', genre:'history',publish:1985,edition:1996},
];

// let userbook = books.filter((bk)=>bk.genre === "history")

 userbook = books.filter((bk)=>{ return bk.publish >= 1995 && bk.genre === "history"})
console.log(userbook)