import { Suspense, useState } from "react";
import "./App.css";
import Banner from "./Components/Banner/Banner";
import Navbar from "./Components/Navbar/Navbar";
import Players from "./Components/Players/Players";
import SelectedPlayers from "./Components/SelectedPlayers/SelectedPlayers";

const playersData = async () => {
  const fetchData = await fetch("/players.json");
  return fetchData.json();
};
const playerPromise = playersData();

function App() {
  

  const [toggle, setToggle] = useState(true);
  const [availableBalance, setAvailableBalance] = useState(600000000)

  return (
    <>
      <Navbar availableBalance={availableBalance}></Navbar>
      <Banner></Banner>
      <div className="flex justify-between items-center max-w-[1200px] mx-auto mt-4 ">
        <div>
          <h1 className="font-bold text-2xl">Available Players</h1>
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
            Selected (<span>0</span>)
          </button>
        </div>
      </div>
      {toggle === true ? (
        <Suspense
          fallback={<span className="loading loading-bars loading-xl"></span>}
        >
          <Players playerPromise={playerPromise} availableBalance={availableBalance} setAvailableBalance={setAvailableBalance}></Players>
        </Suspense>
      ) : (
        <SelectedPlayers></SelectedPlayers>
      )}
    </>
  );
}

export default App;
