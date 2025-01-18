import React, { useState, useRef, useEffect } from 'react';

function Mycomponent() {

    const ref = useRef(0);
    const inputref = useRef(null);

    useEffect(() => {
        console.log("Component rendered");
    });

    const handleclick = () => {
        ref.current++;
        console.log(ref.current);
    }

    const handleclickInput = () => {
        inputref.current.focus();
        inputref.current.style.backgroundColor = "purple";
    }

    return (
        <>
            <button onClick={handleclickInput}>
                click me
            </button>
            <input ref={inputref} />
        </>
    );
}

export default Mycomponent;