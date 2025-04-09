import "./style.css";
import { renderBoardGame, renderCards } from "./src//modules/dom.js";
import { initializeGame } from "./src/modules/game.js";

//! #CONEXIÓN DE LOS ARCHIVOS EN MODULES

//? Renderizar primero la estructura base
renderBoardGame();

//? Luego inizializar el juego y renderizar las cartas
const game = initializeGame(); // devuelve el estado con las cartas barajadas
renderCards(game.cards);
