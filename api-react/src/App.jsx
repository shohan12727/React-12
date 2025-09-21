
import './App.css'
import { add, devide, diff, mult } from './Utilities/Math/math'

function App() {

  const sum = add(56, 78);
  console.log(sum);
  const subs = diff(10,5)
  
  const gun = mult(10, 0)
  console.log(subs,gun );
  const vag = devide(100, 10)
  console.log(vag);
  
  
  return (
    <>
      <h1>Shohan</h1>
        
    </>
  )
}

export default App
