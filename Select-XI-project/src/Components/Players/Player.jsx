import React, { useState } from "react";
import { GrUserManager } from "react-icons/gr";
import { FaFlag } from "react-icons/fa";
const Player = ({ player, setAvailableBalance, availableBalance }) => {
  //   console.log(player);
  const {
    image,
    name,
    nationality,
    batting_position,
    rating,
    price,
    player_type,
  } = player;
  const [selected, setSelected] = useState(false);
  return (
    <div className="border border-gray-400 rounded-xl p-3">
      <div className="overflow-hidden">
        <img className="w-full h-48 object-cover rounded-lg" src={image} />
      </div>
      <div>
        <div className="flex items-center gap-2 my-2">
          <GrUserManager />
          <h2>{name}</h2>
        </div>

        <div className="flex justify-between border-b border-b-gray-200 pb-2">
          <div className="flex justify-center items-center gap-1">
            <FaFlag />
            <h2 className="text-gray-400">{nationality}</h2>
          </div>
          <h2 className="text-gray-300">{player_type}</h2>
        </div>

        <div className="mt-2">
          <h2 className="font-bold">Rating: {rating}</h2>
          <div className="flex justify-between my-3">
            <h2 className="font-bold">Position: {batting_position}</h2>
            {/* <h2 className="text-gray-300">{batting_position}</h2> */}
          </div>
          <div className="flex justify-between">
            <p className="font-bold">Price: {price}</p>
            <button
              disabled={selected}
              onClick={() => {
                setSelected(true);
                setAvailableBalance(availableBalance);
              }}
              className="btn"
            >
              {selected === true ? "Selected" : "Choose Player"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Player;
