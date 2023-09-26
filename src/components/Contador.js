import React, { useEffect, useState } from 'react'

function Contador() {
const [counter, setCounter] = useState(0)



useEffect(() => {
    document.title = "Counter: " + (counter)
    const timer = setInterval(() => {
        setCounter((prev) => prev + 1 )
    }, 1000)
    console.log("counter", counter)
    return () => {
        console.log("se vacia el contador")
        clearInterval(timer)
    }
},[counter]) 

function reset() {
    setCounter(0)
}

  return (
    <div>
        <h1>Contador: {counter}</h1>
        <button onClick={reset}>Reset</button>
    </div>
  )
}

export default Contador