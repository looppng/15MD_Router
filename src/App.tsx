import Navbar from "./components/Navbar.tsx";
import CreateItem from "./components/CreateItem.tsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ItemInventory from './components/ItemInventory.tsx'
import Home from './components/Home.tsx'

const App = () => {

  return (
  <>
    <Router>
      <div className="App">
        <Navbar/>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/inventory' element={<ItemInventory/>}/>
            <Route path='/create' element={<CreateItem/>}/>
          </Routes>
      </div>
    </Router>
  </>
  )
}

export default App
