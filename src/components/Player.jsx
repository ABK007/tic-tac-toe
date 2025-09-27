import { useState } from "react";

export default function Player({ initialName, symbol }) {
  const [playerName, setPlayerName] = useState(initialName);
  const [editing, setEditing] = useState(false);

  let playerNameDisplay = <span className="player-name">{playerName}</span>;

  function toggleEdit() {
    setEditing((editing) => !editing);
  }

  function handleNameChange(event) {
    setPlayerName(event.target.value);
  }

  if (editing) {
    playerNameDisplay = (
      <input
        type="text"
        required
        value={playerName}
        onChange={handleNameChange}
      />
    );
  }

  return (
    <li>
      <span className="player">
        {playerNameDisplay}
        <span className="player-symbol">{symbol}</span>
      </span>

      <button onClick={toggleEdit}>{editing ? "Save" : "Edit"}</button>
    </li>
  );
}
