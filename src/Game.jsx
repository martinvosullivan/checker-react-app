import React, { useState } from "react";

const RuleBook = () => {
  // Define your rules here
  const rules = [
    "The game is played on an 8x8 grid.",
    "Players place their pieces on the dark squares of the board.",
    "The game is played on an 8x8 grid.",
    "The game is played on an 8x8 grid.",
    "The game is played on an 8x8 grid.",
    // Add more rules as needed
  ];

  return (
    <div className="rule-book">
      <h3>Checkers Rules</h3>
      <ul>
        {rules.map((rule, index) => (
          <li key={index}>{rule}</li>
        ))}
      </ul>
    </div>
  );
};

const CheckersGame = ({ onStartGame }) => {
  const [player1, setPlayer1] = useState({ name: "", color: "" });
  const [player2, setPlayer2] = useState({ name: "", color: "" });

  const handlePlayer1Change = (event) => {
    setPlayer1({ ...player1, [event.target.name]: event.target.value });
  };

  const handlePlayer2Change = (event) => {
    setPlayer2({ ...player2, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onStartGame(); // Call to Start Game
  };

  return (
    <div>
      <RuleBook />
      <h2>Checkers Game</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Player 1 Name:
            <input
              type="text"
              name="name"
              value={player1.name}
              onChange={handlePlayer1Change}
            />
          </label>
          <label>
            Player 1 Color:
            <select
              name="color"
              value={player1.color}
              onChange={handlePlayer1Change}
            >
              <option value="">Select Color</option>
              <option value="W">White</option>
              <option value="B">Black</option>
            </select>
          </label>
        </div>
        <div>
          <label>
            Player 2 Name:
            <input
              type="text"
              name="name"
              value={player2.name}
              onChange={handlePlayer2Change}
            />
          </label>
          <label>
            Player 2 Color:
            <select
              name="color"
              value={player2.color}
              onChange={handlePlayer2Change}
            >
              <option value="">Select Color</option>
              <option value="W">White</option>
              <option value="B">Black</option>
            </select>
          </label>
        </div>
        <button type="submit">Start Game</button>
      </form>
    </div>
  );
};

export default CheckersGame;
