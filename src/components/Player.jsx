import React from "react";
// import { Children } from "react";
import { useState } from "react";

const Player = ({ name, symbol }) => {
  const [isEditing, setIsEditing] = useState(false);

  const toggleEditing = () => {
    setIsEditing(!isEditing);
    // setIsEditing(isEditing ? false : true); es lo mismo que hacer lo de arriba pero mas simple
  };

  return (
    <li>
      <span className="player">
        {!isEditing ? (
          <span className="player-name">{name}</span>
        ) : (
          <input type="text" required value={name} />
        )}
        <span className="player-symbol">{symbol}</span>
      </span>
      {!isEditing && <button onClick={toggleEditing}>Edit</button>}
      {isEditing && <button onClick={toggleEditing}>Save</button>}
    </li>
  );
};

export default Player;
