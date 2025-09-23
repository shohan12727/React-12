import React from "react";
import { AiFillDelete } from "react-icons/ai";
const SelectedPlayer = ({player,removePlayer}) => {
    // console.log(player);
    const handleDelete = () => {
      
        removePlayer(player)
    }
  return (
    <div className="max-w-[1200px] mx-auto mt-4">
      <div className="flex justify-between items-center p-3 border-1 border-gray-300 rounded-xl">
        <div className="flex items-center gap-2">
          <img
            className="h-[50px] w-[60px] rounded"
            src={player.image}
            alt=""
          />
          <div>
            <h2 className="font-bold">{player.name}</h2>
            <p className="text-xs">{player.player_type}</p>
          </div>
        </div>
        <div onClick={handleDelete}>
          <AiFillDelete />
        </div>
      </div>
    </div>
  );
};

export default SelectedPlayer;
