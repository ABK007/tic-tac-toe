import Player from "./components/Player.jsx";
import GameBoard from "./components/GameBoard.jsx";
import { useState } from "react";

function App() {
  const [currentPlayer, setCurrentPlayer] = useState("X");

  function togglePlayer() {
    setCurrentPlayer((currentActivePlayer) => (currentActivePlayer === "X" ? "O" : "X"));
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player initialName="player 1" symbol="X" isActive={currentPlayer === "X"} />
          <Player initialName="player 2" symbol="O" isActive={currentPlayer === "O"} />
        </ol>
        <GameBoard togglePlayer={togglePlayer} activePlayerSymbol={currentPlayer} />
      </div>
    </main>
  );
}

export default App;
