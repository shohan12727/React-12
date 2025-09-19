import "./App.css";
import Counter from "./Counter";
import Batsman from "./Batsman";
import Users from "./Users";
import { Suspense } from "react";
import Friends from "./Friends";
import JsUsers from "./JsUsers";
import Albams from "./Albams";

const friendsPromise = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  return response.json();
};

const jsUsersPromise = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  return response.json();
};

function App() {
  const jsUsersPro = jsUsersPromise();

  const fetchUsers = fetch("https://jsonplaceholder.typicode.com/users").then(
    (res) => res.json()
  );

  const friendsPro = friendsPromise();

  function handleClickMe() {
    alert("Clicked");
  }
  const handleClicked3 = () => {
    alert("Clicked 3");
  };
  const add5 = (num) => {
    const newNum = num + 5;
    //  const num += 5;
    alert(newNum);
  };
  return (
    <>
      <h1>King Shohan</h1>

 
     <Albams></Albams>

      <Suspense fallback={<h2>users are loading.....</h2>}>
        <JsUsers jsUsersPro={jsUsersPro}></JsUsers>
      </Suspense>
      <Suspense fallback={<h3>Friends are coming....</h3>}>
        <Friends friendsPro={friendsPro}></Friends>
      </Suspense>

      <Suspense fallback={<h3>Loading....</h3>}>
        <Users fetchUsers={fetchUsers}></Users>
      </Suspense>

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
      <button
        onClick={() => {
          alert("Clicked 4");
        }}
      >
        Click 4
      </button>

      <button onClick={() => add5(50)}>Add 5</button>
    </>
  );
}

export default App;
