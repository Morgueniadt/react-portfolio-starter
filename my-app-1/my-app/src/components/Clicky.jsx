import { useState } from 'react'

const Clicky = () => {
 const [count, setCount] = useState(0);

 const handleClick = () => {
    setCount(count + 1)
 };
    return (
        <>
        <h2>you have clicked the button {count} times</h2>
        <button onClick={() => setCount(count + 1)}>click me</button>
        </>
    )
};

export default Clicky