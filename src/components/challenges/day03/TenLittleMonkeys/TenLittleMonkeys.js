import React, { useState } from 'react'

const TenLittleMonkeys = () => {
    const [likeNum, setLikeNum] = useState(10)

    function handleClick () {
        if (likeNum != 0){
        setLikeNum(likeNum - 1);
        }
    }
    return (
        <div>
                <h1>Ten Little Monkeys Challenge</h1>
                <p>{likeNum != 0 ? `${likeNum} little monkeys jumping on the bed` : "No more monkeys jumping on the bed!"}</p>
                <button onClick= {handleClick}> Click Here</button> 
                <br />
        </div>
    );
};

export default TenLittleMonkeys;

