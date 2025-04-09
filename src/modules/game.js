import { EMOJIS, BOARD_SIZE } from "./constants.js";
//! #LÓGICA PURA DEL JUEGO

export const initializeGame = () => {
  const cards = [...EMOJIS, ...EMOJIS] // Duplica los emojis para hacer pares
    .sort(() => Math.random() - 0.5); // Baraja las cartas
  console.log(cards);
  return cards;
};

/*
Ideas de las funciones que necesito
export const gameState = () => {}; // Función para inicializar el juego

export const flipCard = () => {}; // Función para voltear cartas
 
export const checkForMatch = () => {}; // Función para comprobar si son cartas */
