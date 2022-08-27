import { NavLink, Outlet } from 'react-router-dom'

export function Inicio() {
  return (
    <div>
      <h1>Inicio</h1>

      <NavLink
        to="acerca"
        style={({ isActive }) => {
          return { color: isActive ? 'orange' : '#fff' }
        }}
      >
        Acerca
      </NavLink>
      <NavLink
        to="ubicaciones"
        style={({ isActive }) => {
          return { color: isActive ? 'orange' : '#fff' }
        }}
      >
        Ubicaciones
      </NavLink>
      <NavLink
        to="productos"
        style={({ isActive }) => {
          return { color: isActive ? 'orange' : '#fff' }
        }}
      >
        Productos
      </NavLink>
      <Outlet />
    </div>
  )
}
