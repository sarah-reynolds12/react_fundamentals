import React, { useState } from 'react';

const ChuckJoke = () => {
    const [joke, setJoke] = useState([])
    function handleFetch()
    {
        fetch(`https://api.chucknorris.io/jokes/random`)
        .then(res => res.json())
        .then(json => {
            setJoke(json.value);
            console.log(json.value);
        })
    }
    return ( 
        <div>
            <p> {joke}</p>
            <button onClick = {handleFetch}>Click for joke!</button>
            
        </div>
     );
}
 
export default ChuckJoke;