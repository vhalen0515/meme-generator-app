import React from "react"
import './Header.css'

export default function Header() {
    return (
        <header>
            <img src="./troll-face.png" className="header--img" />
            <h2 className="header--title">Meme Generator</h2>
        </header>
    )
}