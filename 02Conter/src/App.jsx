import { useState } from 'react'



function App() {
  let [counter,setCounter]= useState(10)

  const addValue = () =>{
    if(counter==20)
      return
    setCounter(counter+1)
    console.log(counter)
  }

  const reduceValue = () =>{
    if(counter==1)
      return
    setCounter(counter-1)
    console.log(counter)
  }

  return (
    <>
      <h1>Chai Aur React</h1>
      <h2>Cunter value : {counter}</h2>
      <button onClick={addValue}>Add Value</button>
      <button onClick={reduceValue}>Reduce Value</button>
    </>
  )
}

export default App
