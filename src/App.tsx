import { Route, Routes } from 'react-router-dom'
import MainCase from './components/MainCase'
function App() {
  return (
    <Routes>
      <Route path="/" element={<MainCase />} />
    </Routes>
  )
}

export default App
