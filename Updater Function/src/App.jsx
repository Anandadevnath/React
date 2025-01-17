// Updater function = A function passed as an argument to setState() method usually 
//                   ex. setYear(year + 1)
//                  allows for safe updates based on the previous state
//                  Used with multiple state updates and asynchronous function 
//                  Good practice to use updater functions
import Updater_function from "./Update functions/Update_function.jsx"
import Update_objects from "./Update functions/Update_objects.jsx"
import Update_array from "./Update functions/Update_array.jsx"
import Update_array_object from "./Update functions/Update_array_object.jsx"

function App() {


  return (
    <>
      {/* <Updater_function /> */}
      {/* <Update_objects /> */}
      {/* <Update_array /> */}
      <Update_array_object />
    </>
  )
}

export default App
