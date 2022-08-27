import { Inicio } from './pages/inicio'
import { Acerca } from './pages/acerca'
import { Ubicaciones } from './pages/Ubicaciones/index'
import { Dalcahue } from './pages/Ubicaciones/dalcahue'
import { Quemchi } from './pages/Ubicaciones/quemchi'
import { NotFound } from './pages/notfound'
import { Routes, Route } from 'react-router-dom'
import { $Productos } from './pages/$productos'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Inicio />}>
        <Route path="acerca" element={<Acerca />} />
        <Route path="ubicaciones" element={<Ubicaciones />}>
          <Route path="dalcahue" element={<Dalcahue />} />
          <Route path="quemchi" element={<Quemchi />} />
        </Route>
        <Route path="productos/:productoId" element={<$Productos />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}

export default App
