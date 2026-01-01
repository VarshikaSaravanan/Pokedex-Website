const typeAttacks = {
  fire: "🔥 Flamethrower",
  water: "💧 Hydro Pump",
  electric: "⚡ Thunderbolt",
  grass: "🌿 Leaf Blade",
  ice: "❄️ Ice Beam",
  fighting: "🥊 Close Combat",
  psychic: "🔮 Psybeam",
  poison: "☠️ Sludge Bomb",
  bug: "🐛 X-Scissor",
  flying: "🕊️ Aerial Ace",
  rock: "🪨 Stone Edge",
  ground: "🌎 Earthquake",
  steel: "🔩 Iron Tail",
  ghost: "👻 Shadow Ball",
  dark: "🌑 Night Slash",
  dragon: "🐉 Dragon Claw",
  fairy: "🧚 Moonblast",
  normal: "✨ Quick Attack"
};

let selected = [];

const container = document.getElementById("pokemon-container");
const battlePopup = document.getElementById("battle-popup");
const battleBtn = document.getElementById("battle-btn");
const battleModal = document.getElementById("battle-modal");
const battleLog = document.getElementById("battle-log");
const battleAnim = document.getElementById("battle-animation");

fetch("data/pokemonData.json")
  .then(res => res.json())
  .then(data => {
    data.forEach(pokemon => {
      const name = pokemon.Name;
      const lowerName = name.toLowerCase().replace(/[^a-z0-9]/gi, '');
      const imgSrc = `images/${lowerName}.jpg`;

      fetch(imgSrc).then(res => {
        if (!res.ok) throw new Error("Image not found");

        const card = document.createElement("div");
        card.className = "card";

        const img = document.createElement("img");
        img.src = imgSrc;
        img.alt = name;
        img.onload = () => (img.style.opacity = "1");

        const content = document.createElement("div");
        content.className = "card-content";

        const title = document.createElement("h2");
        title.textContent = name;

        const types = document.createElement("p");
        types.className = "types";
        types.textContent = `Type: ${pokemon["Type 1"]}${pokemon["Type 2"] ? " / " + pokemon["Type 2"] : ""}`;

        const stats = document.createElement("div");
        stats.className = "stats";
        stats.innerHTML = `
          <span>HP: ${pokemon.HP}</span>
          <span>ATK: ${pokemon.Attack}</span>
          <span>SPD: ${pokemon.Speed}</span>
        `;

        content.appendChild(title);
        content.appendChild(types);
        content.appendChild(stats);
        card.appendChild(img);
        card.appendChild(content);
        container.appendChild(card);

        card.addEventListener("click", () => {
          if (selected.includes(pokemon)) {
            selected = selected.filter(p => p !== pokemon);
            card.classList.remove("selected");
          } else if (selected.length < 2) {
            selected.push(pokemon);
            card.classList.add("selected");
          }

          document.querySelectorAll(".card").forEach(c => {
            const n = c.querySelector("h2")?.textContent;
            if (selected.find(p => p.Name === n)) c.classList.add("selected");
            else c.classList.remove("selected");
          });

          if (selected.length === 2) {
            battlePopup.classList.remove("hidden");
          } else {
            battlePopup.classList.add("hidden");
          }
        });
      }).catch(() => {});
    });
  });

battleBtn.addEventListener("click", () => {
  const [p1, p2] = selected;
  const type1 = (p1["Type 1"] || "normal").toLowerCase();
  const type2 = (p2["Type 1"] || "normal").toLowerCase();

  const atk1 = typeAttacks[type1] || "Attack";
  const atk2 = typeAttacks[type2] || "Attack";

  const power1 = parseInt(p1.Attack) + parseInt(p1.Speed) + parseInt(p1.HP);
  const power2 = parseInt(p2.Attack) + parseInt(p2.Speed) + parseInt(p2.HP);

  const winner = power1 > power2 ? p1.Name : p2.Name;

  battleAnim.innerHTML = `
    ${p1.Name} used ${atk1}!<br>${p2.Name} used ${atk2}!
  `;
  battleLog.innerHTML = `🏆 <strong>${winner}</strong> wins the battle!`;
  battleModal.classList.remove("hidden");
  battlePopup.classList.add("hidden");
});

function closeBattleModal() {
  battleModal.classList.add("hidden");
  selected = [];
  document.querySelectorAll(".card").forEach(c => c.classList.remove("selected"));
}
