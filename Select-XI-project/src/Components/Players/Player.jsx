import React from 'react';

const Player = ({player}) => {
    console.log(player);
    
    return (
        <div>
            <img src={player.image} alt="" />
        </div>
    );
};

export default Player;