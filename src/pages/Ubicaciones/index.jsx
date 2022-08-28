import { NavLink, Outlet } from 'react-router-dom'

export function Ubicaciones() {
  return (
    <div>
      <div>
        <h1>Ubicaciones</h1>
      </div>
      <NavLink
        to="/ubicaciones/dalcahue"
        style={({ isActive }) => {
          return { color: isActive ? 'orange' : '#fff' }
        }}
      >
        Dalcahue
      </NavLink>

      <NavLink
        to="/ubicaciones/quemchi"
        style={({ isActive }) => {
          return { color: isActive ? 'orange' : '#fff' }
        }}
      >
        Quemchi
      </NavLink>

      <Outlet />
    </div>
  )
}
