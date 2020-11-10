import React from 'react';
import '../assets/css/Joke.css'

function Joke(props) {
    console.log(props.joke)
    return (
        <div className="joke-container">
            <h1>{props.joke}</h1>
        </div>
    );
}

export default Joke;