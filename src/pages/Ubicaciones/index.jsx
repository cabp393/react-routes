import { Link, Outlet } from 'react-router-dom'

export function Ubicaciones() {
  return (
    <div>
      <h1>Ubicaciones</h1>
      <Link to="dalcahue">Dalcahue</Link>
      <Link to="quemchi">Quemchi</Link>
      <Outlet />
    </div>
  )
}
