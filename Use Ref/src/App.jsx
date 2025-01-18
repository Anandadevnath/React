// Use State hook = Re-renders the component when the value changes.

// Use Ref hook = "use Reference" Does not cause re-render when the value changes.
//                when we want to "remember" some information, but you don't want that information to trigger new renders.

// 1. Accessing/Interacting DOM elements 
// 2. Handling Force, Animations, and Transitions
// 3. Managing Times and Intervals
import Mycomponent from "./Mycomponent.jsx"

function App() {


  return (
    <>
      <Mycomponent />
    </>
  )
}

export default App
