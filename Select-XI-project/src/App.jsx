import { Suspense } from "react";
import "./App.css";
import Banner from "./Components/Banner/Banner";
import Navbar from "./Components/Navbar/Navbar";
import Players from "./Components/Players/Players";

const playersData = async ()  => {
  const fetchData = await fetch("/players.json"); 
  return fetchData.json();
}
  

function App() {

   const playerPromise = playersData();

  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
       <Suspense fallback={<span className="loading loading-bars loading-xl"></span>}>
         <Players playerPromise={playerPromise}></Players>
       </Suspense>
    </>
  );
}

export default App;
