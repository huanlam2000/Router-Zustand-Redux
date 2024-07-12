import { NavLink } from "react-router-dom"

const navItem = ['Home', 'About', 'Other', 'Redux', 'Zustand']
function Nav() {
  return (
    <div style={{ position: 'fixed', top: 0, left: 0, display: "flex", alignItems: 'center', justifyContent: 'center', width: '100vw', padding: '1rem .5rem' }}>
      {navItem.map(nav => (
        <NavLink
          key={nav}
          style={({ isActive }) => ({
            textDecoration: isActive ? 'underline' : '',
            margin: '.5rem 1rem'
          })}
          to={`/${nav}`}>{nav}</NavLink>
      ))}
    </div>
  )
}

export default Nav
