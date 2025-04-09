import { EMOJIS, BOARD_SIZE } from "./constants.js";
//! #LÓGICA PURA DEL JUEGO

let state = {
  cards: [],
  flippedCards: [], // Índice de las cartas volteadas
  matchedPairs: 0,
  isProcessing: false, // Para evitar múltiples clicks rápidos
};

export const initializeGame = () => {
  const cards = [...EMOJIS, ...EMOJIS] // Duplica los emojis para hacer pares
    .sort(() => Math.random() - 0.5); // Baraja las cartas

  // Resetear el estado
  state = {
    cards,
    flippedCards: [],
    matchedPairs: 0,
    isProcessing: false,
  };

  return state;
};

export const gameState = () => {
  return state;
};

/*
Ideas de las funciones que necesito
export const flipCard = () => {}; // Función para voltear cartas
 
export const checkForMatch = () => {}; // Función para comprobar si son cartas */
