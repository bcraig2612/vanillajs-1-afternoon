const board = [];
let win = false;
function play(clickedId) {
  const playerSpan = document.getElementById("player");
  const clickedElement = document.getElementById(clickedId);

  if (clickedElement.innerText) {
    return;
  }
  if (playerSpan.innerText === "X") {
    playerSpan.innerText = "0";
    clickedElement.innerText = "X";
    board[clickedId] = "X";
  } else {
    playerSpan.innerText = "X";
    clickedElement.innerText = "0";
    board[clickedId] = "0";
  }
  console.log(board);

  const topLeft = board[0];
  const topCenter = board[1];
  const topRight = board[2];
  const middleLeft = board[3];
  const middleCenter = board[4];
  const middleRight = board[5];
  const bottomLeft = board[6];
  const bottomCenter = board[7];
  const bottomRight = board[8];

  if (topLeft !== undefined && topLeft === topCenter && topLeft === topRight) {
    alert(`${topLeft} is the winner`);
    win = true;
    reset();
    return;
  }
  if (
    middleLeft !== undefined &&
    middleLeft === middleCenter &&
    middleLeft === middleRight
  ) {
    alert(`${middleLeft} is the winner`);
    win = true;
    reset();
    return;
  }
  if (
    bottomLeft !== undefined &&
    bottomLeft === bottomCenter &&
    bottomLeft === bottomRight
  ) {
    alert(`${bottomLeft} is the winner`);
    win = true;
    reset();
    return;
  }
  if (
    topLeft !== undefined &&
    topLeft === middleLeft &&
    topLeft === bottomLeft
  ) {
    alert(`${topLeft} is the winner`);
    win = true;
    reset();
    return;
  }
  if (
    topCenter !== undefined &&
    topCenter === middleCenter &&
    topCenter === bottomCenter
  ) {
    alert(`${topCenter} is the winner`);
    win = true;
    reset();
    return;
  }
  if (
    topRight !== undefined &&
    topRight === middleRight &&
    topRight === bottomRight
  ) {
    alert(`${topRight} is the winner`);
    win = true;
    reset();
    return;
  }
  if (
    topLeft !== undefined &&
    topLeft === middleCenter &&
    topLeft === bottomRight
  ) {
    alert(`${topLeft} is the winner`);
    win = true;
    reset();
    return;
  }
  if (
    bottomLeft !== undefined &&
    bottomLeft === middleCenter &&
    bottomLeft === topRight
  ) {
    alert(`${bottomLeft} is the winner`);
    win = true;
    reset();
    return;
  }
}
console.log(board);
let boardFull = true;
for (let i = 0; i <= 8; i++) {
  if (board[i] === undefined) {
    boardFull = false;
  }
}
if (boardFull === true) {
  alert("Cat's game, there is no winner");
  win = true;
  reset();
}

function reset() {
  board = [];
  console.log(board);
  const resetTags = document.getElementsByTagName("td");
  for (let i = 0; i < resetTags.length; i++) {
    resetTags[i].innerText = "";
  }
}
