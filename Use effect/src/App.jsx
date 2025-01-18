// Use effect = React hook that tells react to do some when (pick one):
//              1. Component is re-rendered
//              2. Component is mounted
//              3. the state of value

// Use effect(function, [dependencies])

// 1.useEffect(() => {})           - runs after every re-render
// 1.useEffect(() => {}, [])       - runs only on mount
// 1.useEffect(() => {}, [value])  - runs on mount + when value changes

// Uses:
// 1. Event listeners 
// 2. DOM manipulations
// 3. Subscriptions (real-time updates)
// 4. Fetching data from API
// 5. Clean up when a component is unmounted

import Mycomponent from './Mycomponent.jsx'
import Windowsize from './Windowsize.jsx'

function App() {

  return (
    <>
      {/* <Mycomponent /> */}
      <Windowsize />
    </>
  )
}

export default App
