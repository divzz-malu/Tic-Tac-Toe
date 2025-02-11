import React, { useState } from "react";

const Player = ({ name, symbol, isActive, onChangeName }) => {
    const [playerName,setPlayerName] = useState(name)
    const [isEditing, setIsEditing] = useState(false);
    const handleEditClick = () => {
        setIsEditing((editing) => !editing);
        if(isEditing){

        onChangeName(symbol,playerName)
        }
    };
    const handleChange = (event) =>{
        setPlayerName(event.target.value)
    }
    return (
        <li className={isActive?'active':undefined}>
            <span className="player">
                {isEditing ? (
                    <input type="text" value={playerName} onChange={handleChange} />
                ) : (
                    <span className="player-name">{playerName}</span>
                )}
                <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleEditClick}>{isEditing? 'Save' : 'Edit'}</button>
        </li>
    );
};

export default Player;
