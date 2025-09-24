
import { useState } from 'react'
import './App.css'
import ToggleBtn from './Components/ToggleBtn';

function App() {

const [toggleStatus, setToggleStatus] = useState("All");
  return (
    <>
     <h2>Shohan</h2>
     <ToggleBtn toggleStatus={toggleStatus} setToggleStatus={setToggleStatus}></ToggleBtn>
    </>
  )
}

export default App
