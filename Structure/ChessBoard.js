let size = 8;
let board = "";

for (let y = 0; y < size; y++) {
  for (let x = 0; x < size; x++) {
    // If the sum of x and y is even, add a space; otherwise, add a #
    board += (x + y) % 2 === 0 ? " " : "#";
  }
  board += "\n"; // New line at the end of each row
}

console.log(board);