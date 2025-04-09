1 - I created a folder called modules (./src/modules). I am going to create this memory game on a modular approach using vite.
Inside this modulas folder there are the following js files:
a) dom.js #HANDLING THE DOM
renderCards()
b) game.js #LOGIC OF THE GAME
initializeGame()
c) constants.js #FIXED DATA(EMOJIS, CONFIG)
d) localStorage.js #SCORE STORAGE

2 - main.js is on the root of the project folder. It is going to be the connection ion between all the files inside the modular folder.
On my first commit I am importing the dom.js which it has the renderCards() function.

3 - For now, what is rendering is the #app which is a div and the .card which are the actual cards. I am using flexbox and simple styling on style.css so I can visualize the cards.
