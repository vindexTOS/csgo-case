import { Route, Routes } from 'react-router-dom'
import MainCase from './components/MainCase'
import NavBar from './components/NavBar'
import Inventory from './components/Inventory'
function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<MainCase />} />
        <Route path="/inventory" element={<Inventory />} />
      </Routes>
    </>
  )
}

export default App
