import { Outlet, NavLink } from "react-router-dom"
function About() {
  return (
    <>
      <div>About</div>
      <NavLink style={{ margin: '0 1rem' }} to={'Huan'}>Huan</NavLink>
      <NavLink style={{ margin: '0 1rem' }} to={'Teo'}>Teo</NavLink>
      <NavLink style={{ margin: '0 1rem' }} to={'Ti'}>Ti</NavLink>
      <NavLink style={{ margin: '0 1rem' }} to={'Nhi'}>Nhi</NavLink>
      <Outlet></Outlet>
    </>
  )
}

export default About
