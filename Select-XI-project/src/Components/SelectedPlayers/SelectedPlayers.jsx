import React from "react";


import SelectedPlayer from "./SelectedPlayer";
const SelectedPlayers = ({ purchesedPlayer,  removePlayer }) => {
  console.log(purchesedPlayer);

  return <div className="max-w-[1200px] mx-auto mb-4">
    {
        purchesedPlayer.map(player => <SelectedPlayer removePlayer={removePlayer} player={player}></SelectedPlayer>)
    }
  </div>;
};

export default SelectedPlayers;
