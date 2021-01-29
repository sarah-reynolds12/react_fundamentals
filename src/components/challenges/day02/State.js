//Javascript object where property values of the component are stored
//Managed inside of the component instead of being passed into it (like props)

//state is a hook

import { useState } from 'react';
//[current value; fx to update said value] useState below is a hook that must execute in the same order 
const State = () => {
    const [count, setCount] = useState(4) 
        
        /*() => {
        console.log("Function Ran!")
        return 4
    })*/

function decCount() {
    setCount(count - 1);
}

function incCount(){
    setCount(count + 1)
}
//inside component return statement ===JSX not JS
    return (
        <> {/*Fragments === empty div containers */}
        <button onClick={decCount}>-</button>
        <span> {count} </span>
        <button onClick={incCount}>+</button>
        </>
    )
}

export default State;