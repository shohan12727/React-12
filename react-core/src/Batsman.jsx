import { useState } from "react";

export default function Batsman() {
  const [run, setRun] = useState(0);
  const [countSix, setCountSix] = useState(0);

  const handleSingle = () => {
    const updateRun = run + 1;
    setRun(updateRun);
  };
  const handleFour = () => {
    const updateRun = run + 4;
    setRun(updateRun);
  };
  const handleSix = () => {
    const updateRun = run + 6;
    const updateCountSix = countSix + 1;
    setCountSix(updateCountSix);
    setRun(updateRun);
  };

  return (
    <div>
      <h3>Player Name: Ashraful Islam Shohan</h3>
      <h2>Score: {run}</h2>
      <h3>Count Six: {countSix}</h3>
      {run >= 50 && run < 100 && (
        <p style={{ fontSize: "30px", fontWeight: "bold" }}>
          Congratulations!! you scored Fifty...
        </p>
      )}
      {run >= 100 && (
        <p style={{ fontSize: "30px", fontWeight: "bold" }}>
          Congratulations!! You scored Hundred...calp, clap
        </p>
      )}
      <button onClick={handleSingle}>Single</button>
      <button onClick={handleFour}>Four</button>
      <button onClick={handleSix}>Six</button>
    </div>
  );
}
