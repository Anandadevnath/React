// conditional rendering = allows u get rendered in ur application based on certain conditions
// by unitizing conditional rendering, u can (show, hide or change)
import UserGreetings from './UserGreeting';

function App() {
  return (
    <>
      <UserGreetings isLoggedIn={true}  />
    </>
  )
}

export default App
