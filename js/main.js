
let pebbles = 0;

const oreCount = document.getElementById("ore-count");
const mineBtn = document.getElementById("mine-btn");

mineBtn.addEventListener("click", () => {
  pebbles++;
  oreCount.textContent = `Pebbles: ${pebbles}`;
});
