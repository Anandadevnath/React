import React, { useContext } from 'react';
import { UserContext } from './Component 1.jsx';

function Component4() {

    const user = useContext(UserContext);

    return (
      <div className="box">
        <h1>Component 4</h1>
        <h2>{`Bye ${user}`}</h2>
      </div>
    );
  }

export default Component4;