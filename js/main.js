let pebbles = 0;
let clickPower = 1;

const oreCount = document.getElementById("ore-count");
const mineBtn = document.getElementById("mine-btn");

// Upgrade button
const woodenPickaxeBtn = document.getElementById("wooden-pickaxe-btn");
let woodenPickaxeCost = 10;

// Function to show floating +X text
function showFloatingText(text) {
  const span = document.createElement("span");
  span.textContent = text;
  span.className = "floating-text";
  oreCount.appendChild(span);

  setTimeout(() => {
    oreCount.removeChild(span);
  }, 1000);
}

// Click event
mineBtn.addEventListener("click", () => {
  pebbles += clickPower;
  oreCount.textContent = `Pebbles: ${pebbles}`;
  showFloatingText(`+${clickPower}`);
});

// Upgrade
woodenPickaxeBtn.addEventListener("click", () => {
  if (pebbles >= woodenPickaxeCost) {
    pebbles -= woodenPickaxeCost;
    clickPower += 1;
    woodenPickaxeCost = Math.floor(woodenPickaxeCost * 1.5);
    woodenPickaxeBtn.textContent = `Buy Wooden Pickaxe (+1 per click) - Cost: ${woodenPickaxeCost} Pebbles`;
    oreCount.textContent = `Pebbles: ${pebbles}`;
  } else {
    alert("Not enough Pebbles!");
  }
});
