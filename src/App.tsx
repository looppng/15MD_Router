import { Route, Routes } from "react-router-dom";
import ItemInventory from './components/Pages/ItemInventory.tsx'
import Item from './components/Pages/Item.tsx'
import Home from './components/Pages/Home.tsx'
import Navbar from "./components/Pages/Navbar.tsx";
import NotFound from './components/Pages/NotFound.tsx'
import EditItem from "./components/Pages/EditItem.tsx";

const App = () => {

  return (
  <>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/inventory' element={<ItemInventory/>} />
      <Route path='/inventory/:id' element={<Item />}/>
      <Route path='/inventory/:id/edit' element={<EditItem/>} />
      <Route path='*' element={<NotFound/>} />
    </Routes>
  </>
  )
}

export default App
