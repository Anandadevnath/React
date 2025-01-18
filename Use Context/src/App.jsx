// Use Context = React hook allows you to share values between multiple components without passing props through each level.

// Provider Component
// 1. import React, { createContext} from 'react';
// 2. export const UserContext = createContext();
// 3. <MyContext.Provider value={value}>
//     <Child/>
//    </MyContext.Provider>

// Consumer Component
// 1. import React, { useContext } from 'react';
// 2. import { UserContext } from './Component 1';
// 3. const value = useContext(UserContext);

import Component from './Components/Component 1.jsx'

function App() {


  return (
    <>
      <Component />
    </>
  )
}

export default App
