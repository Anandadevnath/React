import React, { useState, useEffect } from 'react';

function MyComponent() {

    const [count, setCount] = useState(0);
    const [color, setColor] = useState("green");

    useEffect(() => {
        document.title = `Count: ${count} - ${color}`;
    }, [count, color]);

    function handleClickAdd() {
        setCount(c => c + 1);
    }

    function handleClickSub() {
        setCount(c => c - 1);
    }

    function handleChangeColor() {
        setColor(c => c === "green" ? "red" : "green");
    }

    return (
        <div>
            <p style={{ color: color }}>Count: {count}</p>
            <button onClick={handleClickAdd}>Increment</button>
            <button onClick={handleClickSub}>Decrement</button>
            <button onClick={handleChangeColor}>Color</button>
        </div>
    );
}

export default MyComponent;