import React from "react";
// import { Children } from "react";
import { useState } from "react";

const Player = ({ initialName, symbol }) => {
  const [playerName, setPlayerName] = useState(initialName);
  const [isEditing, setIsEditing] = useState(false);

  const toggleEditing = () => {
    setIsEditing((editing) => !editing);
    //manera correcta de updatear el state
  };

  const handleChange = (event) => {
    setPlayerName(event.target.value);
  };

  return (
    <li>
      <span className="player">
        {!isEditing ? (
          <span className="player-name">{playerName}</span>
        ) : (
          <input
            type="text"
            required
            value={playerName}
            onChange={handleChange}
          />
        )}
        <span className="player-symbol">{symbol}</span>
      </span>
      {!isEditing && <button onClick={toggleEditing}>Edit</button>}
      {isEditing && <button onClick={toggleEditing}>Save</button>}
    </li>
  );
};

export default Player;
