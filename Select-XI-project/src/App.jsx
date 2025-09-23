import { Suspense, useState } from "react";
import "./App.css";
import Banner from "./Components/Banner/Banner";
import Navbar from "./Components/Navbar/Navbar";
import Players from "./Components/Players/Players";
import SelectedPlayers from "./Components/SelectedPlayers/SelectedPlayers";
 import { ToastContainer } from 'react-toastify';

const playersData = async () => {
  const fetchData = await fetch("/players.json");
  return fetchData.json();
};
const playerPromise = playersData();

function App() {
  const [toggle, setToggle] = useState(true);
  const [availableBalance, setAvailableBalance] = useState(600000000);
  const [purchesedPlayer, setPurchesedPlayer] = useState([]);

  const removePlayer = (player) => {
    const filtered = purchesedPlayer.filter((ele) => ele.id !== player.id);
    setPurchesedPlayer(filtered);
    setAvailableBalance(
      availableBalance +
        parseInt(player.price.split("$").join("").split(",").join(""))
    );
  };

  return (
    <>
      <Navbar availableBalance={availableBalance}></Navbar>
      <Banner></Banner>
      <div className="flex justify-between items-center max-w-[1200px] mx-auto mt-4 ">
        <div>
          <h1 className="font-bold text-2xl">
            {toggle === true
              ? "Available Players"
              : `Selected Players (${purchesedPlayer.length}/6)`}
          </h1>
        </div>
        <div className="flex font-bold">
          <button
            onClick={() => setToggle(true)}
            className={`border-2 ${
              toggle ? "bg-[#E7FE29]" : ""
            } border-gray-300 py-2 border-r-0 px-4 rounded-l-2xl`}
          >
            Available
          </button>
          <button
            onClick={() => setToggle(false)}
            className={`border-2 ${
              toggle === false ? "bg-[#E7FE29]" : ""
            } border-gray-300 py-2 border-l-0 px-4 rounded-r-2xl`}
          >
            Selected (<span>{purchesedPlayer.length}</span>)
          </button>
        </div>
      </div>
      {toggle === true ? (
        <Suspense
          fallback={<span className="loading loading-bars loading-xl"></span>}
        >
          <Players
            purchesedPlayer={purchesedPlayer}
            setPurchesedPlayer={setPurchesedPlayer}
            playerPromise={playerPromise}
            availableBalance={availableBalance}
            setAvailableBalance={setAvailableBalance}
          ></Players>
        </Suspense>
      ) : (
        <SelectedPlayers
          removePlayer={removePlayer}
          purchesedPlayer={purchesedPlayer}
          setPurchesedPlayer={setPurchesedPlayer}
        ></SelectedPlayers>
      )}
         <ToastContainer />
    </>
  );
}

export default App;
