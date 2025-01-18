import Component2 from '../Components/Component 2.jsx'
import '../Components/Component.css'
import React, { useState, createContext } from 'react';

export const UserContext = createContext();

function Component1() {

    const [user, setUser] = useState("Raccoon");

    return (
        <div className="box">
            <h1>Component 1</h1>
            <h2>{`Hello ${user}`}</h2>
            <UserContext.Provider value={user}>
                <Component2 user={user} />
            </UserContext.Provider>
        </div>
    );
}

export default Component1;