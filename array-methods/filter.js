// const number = [23,52,63,14,75];

const food = [
  { name: "🍋", type: "fruit" },
  { name: "🍉", type: "fruit" },
  { name: "🍇", type: "fruit" },
  { name: "🍈", type: "fruit" },
  { name: "🍊", type: "fruit" },
];

food.filter((item) => {
  console.log(item.type === "fruit");
  // return item.type === 'fruit'
});
