import React from 'react'
import './Meme.css'
// import memesData from './memesData'

export default function Meme() {

    const [meme, setMeme] = React.useState({
        topText: '',
        bottomText: '',
        randomImage: 'http://i.imgflip.com/1bij.jpg'
    })

    const [allMemes, setAllMemes] = React.useState([])

    React.useEffect(() => {
        fetch('https://api.imgflip.com/get_memes')
            .then(res => res.json())
            .then(data => setAllMemes(data.data.memes))
    }, [])

    function getMemeImage() {
        const randomNumber = Math.floor(Math.random() * allMemes.length)
        const randomMemeURL = allMemes[randomNumber].url
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: randomMemeURL
        }))
    }

    function handleChange(event) {
        const {name, type, value} = event.target
        setMeme(prevSetMeme => {
            return {
                ...prevSetMeme,
                [name]: value
            }
        })
    }

    return (
        <main>
            <div className='form'>
                <input 
                    id='top-text'
                    className='form--input'
                    type='text'
                    placeholder='Top text'
                    name='topText'
                    value={meme.topText}
                    onChange={handleChange}
                />
                <input
                    id='bottom-text'
                    className='form--input'
                    type='text'
                    placeholder='Bottom text'
                    name='bottomText'
                    value={meme.bottomText}
                    onChange={handleChange}
                />
                <button
                    className='form--btn'
                    onClick={getMemeImage}
                >
                    Get a new meme image 🖼️
                </button>
            </div>
            <div className='meme'>
                <img src={meme.randomImage} className='meme--img' alt='image of meme' />
                <h2 className='meme--text top'>{meme.topText}</h2>
                <h2 className='meme--text bottom'>{meme.bottomText}</h2>
            </div>
        </main>
    )
}