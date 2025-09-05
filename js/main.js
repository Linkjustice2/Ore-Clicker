let pebbles = 0;
let clickPower = 1; // Pebbles per click

const oreCount = document.getElementById("ore-count");
const mineBtn = document.getElementById("mine-btn");

// Upgrade button
const woodenPickaxeBtn = document.getElementById("wooden-pickaxe-btn");
let woodenPickaxeCost = 10;

mineBtn.addEventListener("click", () => {
  pebbles += clickPower;
  oreCount.textContent = `Pebbles: ${pebbles}`;
});

// Wooden Pickaxe upgrade
woodenPickaxeBtn.addEventListener("click", () => {
  if (pebbles >= woodenPickaxeCost) {
    pebbles -= woodenPickaxeCost;
    clickPower += 1; // Increase pebble per click
    woodenPickaxeCost = Math.floor(woodenPickaxeCost * 1.5); // Increase cost
    woodenPickaxeBtn.textContent = `Buy Wooden Pickaxe (+1 per click) - Cost: ${woodenPickaxeCost} Pebbles`;
    oreCount.textContent = `Pebbles: ${pebbles}`;
  } else {
    alert("Not enough Pebbles!");
  }
});
