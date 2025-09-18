import "./App.css";
import Counter from "./Counter";
import Batsman from "./Batsman";

function App() {
  function handleClickMe() {
    alert("Clicked");
  }
const handleClicked3 = () => {
  alert("Clicked 3")
}
const add5 = (num) => {
 const newNum = num + 5;
//  const num += 5;
 alert(newNum)
}
  return (
    <>
      <h1>King Shohan</h1>
      <Batsman></Batsman>

  <Counter></Counter>

      <button onClick={handleClickMe}>Click me</button>
      <button
        onClick={function clickedMe2() {
          alert("This is clicked me button 2");
        }}
      >
        Click me 2
      </button>

   <button onClick={handleClicked3}>Click 3</button>
   <button onClick={() => {
    alert("Clicked 4")
   }}>Click 4</button>
    

    <button onClick={() => add5(50)}>Add 5</button>
    </>
  );
}

export default App;
