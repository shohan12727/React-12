import React, { use } from "react";
import Player from "./Player";

const Players = ({ playerPromise }) => {
  const playersDetails = use(playerPromise);

  return (
    <div className="navbar max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
      {playersDetails.map((player) => (
        <Player player={player}></Player>
      ))}
    </div>
  );
};

export default Players;
