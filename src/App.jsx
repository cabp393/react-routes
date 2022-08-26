import { Inicio } from './pages/inicio'
import { Acerca } from './pages/acerca'
import { Ubicaciones } from './pages/ubicaciones'
import { NotFound } from './pages/notfound'
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Inicio />} />
      <Route path="/acerca" element={<Acerca />} />
      <Route path="/ubicaciones" element={<Ubicaciones />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default App
