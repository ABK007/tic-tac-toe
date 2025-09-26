import { useState } from "react";

export default function Player({ name, symbol }) {
  const [editing, setEditing] = useState(false);

  let playerName = <span className="player-name">{name}</span>


  function toggleEdit() {
    setEditing((editing) => !editing);
  }

  if (editing) {
    playerName = <input type="text" className="player-name" required value={name} />;
  }

  return (
    <li>
      <span className="player">
        {playerName}
        <span className="player-symbol">{symbol}</span>
      </span>

      <button onClick={toggleEdit}>{editing ? "Save" : "Edit"}</button>
    </li>
  );
}
