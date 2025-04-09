import { initializeGame } from "./game.js";
//! #MANIPULACIÓN DEL DOM

//! 1. Estructura del juego (sin las cartas aún)
export const renderBoardGame = () => {
  const app = document.getElementById("app");

  const header = document.createElement("header");
  const heading = document.createElement("h1");
  heading.textContent = "Memory Game";

  //Contenedor de controles
  const controlsDiv = document.createElement("div");
  controlsDiv.className = "game-controls";

  //Contador de pares
  const scoreContainer = document.createElement("div");
  scoreContainer.className = "score";
  scoreContainer.innerHTML = 'Pares: <span id="score">0</span>';

  //Botón de reinicio
  const restartBtn = document.createElement("button");
  restartBtn.id = "restart";
  restartBtn.className = "btn";
  restartBtn.textContent = "Reiniciar";
  restartBtn.setAttribute("aria-label", "Reiniciar juego"); // Importante para screen readers

  // Temporizador
  const timeContainer = document.createElement("div");
  timeContainer.className = "timer";
  timeContainer.innerHTML = 'Tiempo: <time id="time">00:00</time>';

  // Apendizar el header
  controlsDiv.append(scoreContainer, restartBtn, timeContainer);
  header.append(heading, controlsDiv);

  //! 2. Área principal del juego
  const main = document.createElement("main");

  const gameContainer = document.createElement("div");
  gameContainer.id = "game-container";
  gameContainer.className = "memory-game";

  main.appendChild(gameContainer); // Añado el contenedor al main
  app.append(header, main); // Finalmente, añado header y main al app

  return gameContainer;
};

//! 3. Pintar las cartas en el tablero
export const renderCards = (cards) => {
  const gameContainer = document.getElementById("game-container");
  (gameContainer.innerHTML = ""), // Limpiar antes si es reinicio
    cards.forEach((emoji, index) => {
      const card = document.createElement("div");
      card.className = "card";
      card.dataset.index = index; // Para identificar la carta
      card.textContent = "❓"; // Emoji inicial
      gameContainer.appendChild(card); // Añado las cartas al contenedor
    });
};
