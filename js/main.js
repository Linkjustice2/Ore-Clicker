// Game State
let ore = 0;
let clickPower = 1;
let oresPerSec = 0;

const oreCount = document.getElementById("ore-count");
const mineBtn = document.getElementById("mine-btn");

// Upgrade buttons
const woodenPickaxeBtn = document.getElementById("wooden-pickaxe-btn");
const stonePickaxeBtn = document.getElementById("stone-pickaxe-btn");
const apprenticeMinerBtn = document.getElementById("apprentice-miner-btn");
const expertMinerBtn = document.getElementById("expert-miner-btn");

let upgrades = {
  woodenPickaxe: { cost: 10, power: 1 },
  stonePickaxe: { cost: 50, power: 2 },
  apprenticeMiner: { cost: 20, rate: 1 },
  expertMiner: { cost: 100, rate: 5 }
};

// Floating +X
function showFloatingText(text) {
  const span = document.createElement("span");
  span.textContent = text;
  span.className = "floating-text";

  const xOffset = (Math.random() - 0.5) * 80;
  const yOffset = (Math.random() - 1) * 50;
  span.style.left = `${50 + xOffset}%`;
  span.style.top = `${50 + yOffset}px`;

  oreCount.appendChild(span);

  setTimeout(() => oreCount.removeChild(span), 1000);
}

// Mine click
mineBtn.addEventListener("click", () => {
  ore += clickPower;
  oreCount.textContent = `Pebbles: ${Math.floor(ore)}`;
  showFloatingText(`+${clickPower}`);
});

// Click Upgrades
woodenPickaxeBtn.addEventListener("click", () => {
  if (ore >= upgrades.woodenPickaxe.cost) {
    ore -= upgrades.woodenPickaxe.cost;
    clickPower += upgrades.woodenPickaxe.power;
    upgrades.woodenPickaxe.cost = Math.floor(upgrades.woodenPickaxe.cost * 1.5);
    woodenPickaxeBtn.textContent = `Wooden Pickaxe (+1/click) - Cost: ${upgrades.woodenPickaxe.cost}`;
    oreCount.textContent = `Pebbles: ${Math.floor(ore)}`;
  }
});

stonePickaxeBtn.addEventListener("click", () => {
  if (ore >= upgrades.stonePickaxe.cost) {
    ore -= upgrades.stonePickaxe.cost;
    clickPower += upgrades.stonePickaxe.power;
    upgrades.stonePickaxe.cost = Math.floor(upgrades.stonePickaxe.cost * 1.5);
    stonePickaxeBtn.textContent = `Stone Pickaxe (+2/click) - Cost: ${upgrades.stonePickaxe.cost}`;
    oreCount.textContent = `Pebbles: ${Math.floor(ore)}`;
  }
});

// Auto Miners
apprenticeMinerBtn.addEventListener("click", () => {
  if (ore >= upgrades.apprenticeMiner.cost) {
    ore -= upgrades.apprenticeMiner.cost;
    oresPerSec += upgrades.apprenticeMiner.rate;
    upgrades.apprenticeMiner.cost = Math.floor(upgrades.apprenticeMiner.cost * 1.5);
    apprenticeMinerBtn.textContent = `Apprentice Miner (+1/sec) - Cost: ${upgrades.apprenticeMiner.cost}`;
    oreCount.textContent = `Pebbles: ${Math.floor(ore)}`;
  }
});

expertMinerBtn.addEventListener("click", () => {
  if (ore >= upgrades.expertMiner.cost) {
    ore -= upgrades.expertMiner.cost;
    oresPerSec += upgrades.expertMiner.rate;
    upgrades.expertMiner.cost = Math.floor(upgrades.expertMiner.cost * 1.5);
    expertMinerBtn.textContent = `Expert Miner (+5/sec) - Cost: ${upgrades.expertMiner.cost}`;
    oreCount.textContent = `Pebbles: ${Math.floor(ore)}`;
  }
});

// Auto-miner interval
setInterval(() => {
  if (oresPerSec > 0) {
    ore += oresPerSec;
    oreCount.textContent = `Pebbles: ${Math.floor(ore)}`;
    showFloatingText(`+${oresPerSec}`);
  }
}, 1000);
