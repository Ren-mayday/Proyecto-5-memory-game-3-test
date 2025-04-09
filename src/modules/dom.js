import { initializeGame } from "./game.js";
//! #MANIPULACIÓN DEL DOM

export const renderCards = () => {
  const app = document.getElementById("app");
  const cards = initializeGame();

  cards.forEach((emoji, index) => {
    const card = document.createElement("div");
    card.className = "card";
    card.dataset.index = index; // Para identificar la carta
    card.textContent = "❓"; // Emoji inicial
    app.appendChild(card);
  });

  console.log(cards);
};
