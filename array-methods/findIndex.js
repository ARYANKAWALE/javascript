// const names = ["tiku", "rinku", "chintu", "pintu"];

const food = [
  { name: "🍋", type: "fruit",color:"yellow" },
  { name: "🍉", type: "fruit",color:"red" },
  { name: "🍇", type: "fruit",color:"purple" },
  { name: "🍈", type: "fruit",color:"green" },
  { name: "🍊", type: "fruit",color:"orange" },
];

const yellowIndex = food.findIndex((item)=>item.color === 'red')
console.log((yellowIndex))

    // const index = names.findIndex((item) => item === "chintu");
    //     console.log(index)