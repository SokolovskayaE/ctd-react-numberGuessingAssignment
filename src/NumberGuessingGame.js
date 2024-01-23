import React, { useState } from "react"; //Make sure to import useState
import GuessControl from "./GuessControl";
import GuessMessage from "./GuessMessage";
import GameOver from "./GameOver";

const MAX_ATTEMPTS = 5;
function getRandomNumber() { // Returns a random integer number from 1-100 inclusive
  return Math.floor(Math.random() * 100) + 1;
}

function NumberGuessingGame() { //Create a new function component called NumberGuessingGame.
  const [numberToGuess, setNumberToGuess] = useState(getRandomNumber()); // Create 3 state variables and their setters for numberToGuess, numberOfGuesses, and latestGuess and initialize them to the same values from the class component version. (Make sure to import useState) 
  const [numberOfGuesses, setNumberOfGuesses] = useState(0);
  const [latestGuess, setLatestGuess] = useState(null);

  const handleGuess = (guess) => { // Create a handleGuess function that will be passed in to the GuessControl component as the onGuess prop. This function should take the guess as an argument and set the latestGuess state with the guess (converted to a number using the Number function) and increment the numberOfGuesses state.
    setLatestGuess(Number(guess));
    setNumberOfGuesses(numberOfGuesses + 1);
  };

  const handleReset = () => { // Create a handleReset function within the component that resets all 3 of the state properties the same way the handleReset function from the class component reset them. Pass this function to the GameOver component as the onReset prop.
    setNumberToGuess(getRandomNumber());
    setNumberOfGuesses(0);
    setLatestGuess(null);
  };

  const isCorrectGuess = latestGuess === numberToGuess;
  const isGameOver = isCorrectGuess || numberOfGuesses === MAX_ATTEMPTS;

  return ( //Copy the logic and return value from the render function in the class component to be in the new function component. Remove any references to this. since those will be replaced with new references.
    <div>
      <h2>I'm thinking of a number from 1 to 100.</h2>
      <h2>Can you guess the number I am thinking of in {MAX_ATTEMPTS} tries?</h2>
      <GuessControl onGuess={handleGuess} />
      {isGameOver && (
        <GameOver hasWon={isCorrectGuess} onReset={handleReset} />
      )}
      {!isGameOver && (
        <GuessMessage
          guess={latestGuess}
          numberToGuess={numberToGuess}
          numberOfGuesses={numberOfGuesses}
        />
      )}
    </div>
  );
}
export default NumberGuessingGame;