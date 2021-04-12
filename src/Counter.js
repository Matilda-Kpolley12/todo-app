import {useState} from "react";

let Counter = () => {
    const [value, setCounter] = useState(10)

    const handleClick = () => setCounter(value + 1);
    return(
        <div>
            <h1>Counter: {value}</h1>
            <button onClick = {handleClick}>Click Me!</button>
        </div>
    );
}
export default Counter;