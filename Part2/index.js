const idInput = document.getElementById("idInput");
const colorInput = document.getElementById("colorInput");

console.log(idInput);
console.log(colorInput);

function setCard() {
  const card = document.getElementById(idInput.value);
  card.style.color = colorInput.value;
}

//Haven't completed the Black Diamond challenge yet
