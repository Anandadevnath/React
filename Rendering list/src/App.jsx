import List from './List/List.jsx'
import Transferlist from './TransferList/Transferlist.jsx'

function App() {

  const Colors = [
    { id: 1, name: 'red', number: 2 },
    { id: 2, name: 'green', number: 6 },
    { id: 3, name: 'blue', number: 3 },
    { id: 4, name: 'yellow', number: 7 },
    { id: 5, name: 'black', number: 5 },
    { id: 6, name: 'white', number: 1 }
  ];

  const Fruits = [
    { id: 7, name: 'apple', number: 4 },
    { id: 8, name: 'banana', number: 8 },
    { id: 9, name: 'cherry', number: 5 },
    { id: 10, name: 'date', number: 9 },
    { id: 11, name: 'elderberry', number: 6 },
    { id: 12, name: 'fig', number: 2 }
  ];


  return (
    <>
      <List />
      {Colors.length > 0 ? <Transferlist items={Colors} category="PropColors" /> : null}
      {Fruits.length > 0 && <Transferlist items={Fruits} category="PropFruits" />}
    </>
  )
}

export default App
