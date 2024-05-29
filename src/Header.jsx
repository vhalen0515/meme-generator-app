import React from "react"
import './Header.css'

export default function Header() {
    return (
        <header>
            <img src="./src/assets/troll-face.png" className="header--img" />
            <h2 className="header--title">Meme Generator</h2>
            <h4 className="header--project">React Course - Project 3</h4>
        </header>
    )
}