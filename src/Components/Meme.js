import React, {useState, useEffect, createRef} from "react";
import Text from "./Text";
import {exportComponentAsPNG} from 'react-component-export-image'
const Meme = () => {
    const memeRef = createRef();
    const [meme, setMeme] = useState({
        randomImage: "images/Empty.png"
    });
    const [allMemes, setAllMemes] = useState([]);
    
    useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
        .then(res => res.json())
        .then(data => setAllMemes(data.data.memes))
    }, [])


    const randomMemeHandler = () => {
        const randomNumber = Math.floor(Math.random() * allMemes.length);              
        const url = allMemes[randomNumber].url;
        setMeme(prevMemeUrl => ({
            ...prevMemeUrl,
            randomImage: url
        }))
    }

    const [countOfTextboxes, setCountOfTextboxes] = useState(0);

    const addText = () => {
        setCountOfTextboxes(countOfTextboxes + 1)
    }
    const removeText = () => {
        setCountOfTextboxes(0)
    }
    return (
        <main>
            <div className = "Meme" ref={memeRef}>
                <img src = {meme.randomImage} className="Random-img"></img>
                {
                    Array(countOfTextboxes).fill(0).map(element => (<Text/>))
                }
            </div>
            <div className="button-div">
                <button className="btn"  onClick = {randomMemeHandler} >
                    Get a New MEME IMAGE
                </button>
                <div className="d-btn">
                    <button className="btn-3" role="button" onClick={addText} onDoubleClick={removeText}>Add Text</button>
                    <button className="btn-3" role="button" onClick={(element) => exportComponentAsPNG(memeRef)}>Download</button>
                </div>
            </div>
        </main>
    )
}

export default Meme