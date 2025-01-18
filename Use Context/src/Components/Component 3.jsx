import Component4 from '../Components/Component 4.jsx'
import React, { useContext } from 'react';
import { UserContext } from './Component 1.jsx';

function Component3() {

    const user = useContext(UserContext);

    return (
        <div className="box">
            <h1>Component 3</h1>
            <h2>{`Goodbye ${user}`}</h2>
            <Component4 />
        </div>
    );
}

export default Component3;