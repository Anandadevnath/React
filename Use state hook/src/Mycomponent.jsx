import React, { useState } from 'react';

function Mycomponent() {

    const [name, setName] = useState("Guest");
    const [age, setAge] = useState(0);
    const [isLoggedIn, setIsLoggedIn] = useState(false);


    const updateName = () => {
        setName('Raccoon');
    }
    const increment = () => {
        setAge(age + 1);
    }

    const toggleLogin = () => {
        setIsLoggedIn(!isLoggedIn);
    }

    return (
        <div>
            <p>Name: {name}</p>
            <button onClick={updateName}>Update Name</button>

            <p>Age: {age}</p>
            <button onClick={increment}>Update Age</button>

            <p>Is Logged In: {isLoggedIn ? 'Yes' : 'No'}</p>
            <button onClick={toggleLogin}>Toggle Login</button>
        </div>
    )
}

export default Mycomponent;