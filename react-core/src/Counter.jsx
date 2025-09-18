import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  const handleAddButton = () => {
    const newCount = count + 1;
    setCount(newCount);
  };
  const counterStyle = {
    border: "2px solid blue",
    padding: "5px",
    borderRadius: "10px",
  };
  return (
    <div style={counterStyle}>
      <h2>Count: {count}</h2>
      <button onClick={handleAddButton}>Add</button>
    </div>
  );
}
