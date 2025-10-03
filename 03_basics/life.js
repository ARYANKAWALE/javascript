// immidietely  invoked function expression (IIFE)

(function chai() {
  console.log("DB connected");
})();
// global scope ke pollution se problem hoti hai kai bar to global scope ke jo variables hai uske pollution ko htane ke liye hamne IIFE ka use kiya

((name) => {
  console.log(`${name} DB connected  `);
})("SQL");
