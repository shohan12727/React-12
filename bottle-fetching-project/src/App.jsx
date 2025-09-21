import { Suspense } from "react";
import "./App.css";
import Bottles from "./Components/Bottles/Bottles";

// const bottlePromise = fetch(
//   "https://raw.githubusercontent.com/shohan-islam/fake-json-data/refs/heads/main/data.json"
// ).then((response) => response.json());


const bottlePromise = fetch('./bottle.json').then(res => res.json());

function App() {
  return (
    <>
      <h1>Buy Awesome Bottle</h1>
      <Suspense fallback={<h3>Bottle are coming............</h3>}>
        <Bottles bottlePromise={bottlePromise}></Bottles>
      </Suspense>
    </>
  );
}

export default App;
