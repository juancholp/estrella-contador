import React, { useEffect, useState } from 'react'
import "./Counter.css"

function Counter() {
const [counter, setCounter] = useState(0)

useEffect(() => {
    document.title = "Counter: " + counter
}, [counter])


useEffect (() => {
    const timer = setInterval(() => {
        setCounter((prevCounter) => prevCounter + 1)

    }, 1000)
    return () => {
        clearInterval(timer)
    }

}, [])

function resetButton() {
    setCounter(0)
}

  return (
    <div className='counterContainer'>
        <h1>Contador: {counter}</h1>
        <button className='reset' onClick={resetButton}>Reset</button>
    </div>
  )
}

export default Counter