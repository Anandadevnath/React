import React, { useState } from 'react';

function Updater_function() {

    const [count, setCount] = useState(0);

    function increment() {
        // setCount(count + 1); // this called current state
        setCount(c => c + 1); // this called pending state
        setCount(c => c + 1);
        setCount(c => c + 1);
    }

    function decrement() {
        setCount(c => c - 1);
        setCount(c => c - 1);
        setCount(c => c - 1);
    }

    function reset() {
        setCount(0);
    }

    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <button onClick={reset}>Reset</button>
        </div>
    )
}

export default Updater_function;