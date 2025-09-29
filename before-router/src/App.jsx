import { Suspense } from "react";
import "./App.css";
import DaisyNav from "./Components/DaisyNav/DaisyNav";
import Navbar from "./Components/Navbar/Navbar";
import PricingOption from "./Components/PricingOption/PricingOption";
import ResultChart from "./Components/ResultChart/ResultChart";
import axios from "axios";
import MarkCharts from "./Components/MarksCharts/MarkCharts";

const pricingFetch = async () => {
  const promise = await fetch("/pricingData.json");
  return promise.json();
};

const pricingPromise = pricingFetch();

const marksPromise = axios.get("marksData.json");

function App() {
  // const pricingPromise = fetch('/pricingData.json').then(res => res.json())
  // console.log(pricingPromise);

  return (
    <>
      <header>
        <Navbar></Navbar>
        {/* <DaisyNav></DaisyNav> */}
      </header>
      <main>
        <Suspense
          fallback={
            <div className="flex justify-center">
              <span className="loading loading-spinner loading-xl"></span>
            </div>
          }
        >
          <PricingOption pricingPromise={pricingPromise}></PricingOption>
        </Suspense>
        <ResultChart></ResultChart>

        <Suspense
          fallback={
            <div className="flex justify-center">Loaging...........</div>
          }
        >
          <MarkCharts marksPromise={marksPromise}></MarkCharts>
        </Suspense>
      </main>
    </>
  );
}

export default App;
