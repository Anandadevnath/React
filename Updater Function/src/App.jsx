// Updater function = A function passed as an argument to setState() method usually 
//                   ex. setYear(year + 1)
//                  allows for safe updates based on the previous state
//                  Used with multiple state updates and asynchronous function 
//                  Good practice to use updater functions
import Updater_function from "./Update_function.jsx"
import Update_objects from "./Update_objects.jsx"
import Update_array from "./Update_array.jsx"

function App() {


  return (
    <>
      {/* <Updater_function /> */}
      {/* <Update_objects /> */}
      <Update_array />
    </>
  )
}

export default App
