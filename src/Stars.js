import React, { useState } from 'react'
import { FaStar } from "react-icons/fa"
import "./Stars.css"

function Stars() {
const [estrellas, setEstrellas] = useState([1,2,3,4,5])
const [seleccion, setSeleccion] = useState(0)
const [mouseHover, setMouseHover] = useState(0)
const [emote, setEmote] = useState()


function onHandleMouseEnter(currentValue) {
    setMouseHover(currentValue)
}
function onHandleMouseLeave(currentValue) {
    setMouseHover(currentValue)
}
function onHandleMouseClick(currentValue) {
    setSeleccion(currentValue)
    if (currentValue === 1) {
        setEmote("😢")
    } else if (currentValue === 2) {
        setEmote("😐")
    } else if (currentValue === 3) {
        setEmote("😃")
    } else if (currentValue === 4) {
        setEmote("😁")
    } else {
        setEmote("😍")
    }
}


  return (
    <div className='container'>
        <h1>Calificaciones: {seleccion}</h1>
        <div className='star-container'>
            {estrellas.map((item) => {
            const painted = item <= (seleccion || mouseHover)
            return (
                <FaStar
                    className='star'
                    color={painted ? "gold" : "black"}
                    onMouseLeave={() => onHandleMouseLeave(item)}
                    onMouseEnter={() => onHandleMouseEnter(item)}
                    onClick={() => onHandleMouseClick(item)}
                    style={{ cursor: "pointer" }}
                />
            )
            })}
        </div>
        <p>{emote}</p>   
    </div>
  )
}

export default Stars