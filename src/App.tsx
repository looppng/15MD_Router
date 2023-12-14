import { Route, Routes } from "react-router-dom";
import ItemInventory from './components/ItemInventory.tsx'
import Home from './components/Home.tsx'
import Navbar from "./components/Navbar.tsx";
import NotFound from './components/NotFound.tsx'

const App = () => {

  return (
  <>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/inventory' >
        <Route index element={<ItemInventory/>} />
        <Route path=':id' element={<Home/>} />
        <Route path='create' element={<ItemInventory/>} />
      </Route>
      <Route path='*' element={<NotFound/>} />
    </Routes>
  </>
  )
}

export default App
