
import Nav from '../Nav/Nav'
import { Outlet } from 'react-router-dom'

function LayoutElement() {
  return (
    <div className='App'>
      <Nav></Nav>
      <Outlet />
      <div style={{ display: 'flex', minHeight: '10vh', width: '100vw', backgroundColor: '#ccc', color: '#000', alignItems: 'center', justifyContent: 'center', position: 'fixed', bottom: 0, left: 0 }}>Footer element</div>
    </div>
  )
}

export default LayoutElement
