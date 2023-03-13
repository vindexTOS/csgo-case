import { Route, Routes } from 'react-router-dom'
import MainCase from './components/MainCase'
import NavBar from './components/NavBar'
import Inventory from './components/Inventory'
import GabeMain from './components/gaben_room/GabeMain'
function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<MainCase />} />
        <Route path="/inventory" element={<Inventory />} />
        <Route path="/gabe" element={<GabeMain />} />
      </Routes>
    </>
  )
}

export default App
