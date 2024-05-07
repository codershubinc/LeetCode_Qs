import React from 'react'
import { Outlet , NavLink } from 'react-router-dom'

function App() {
  return (
    <>
      <Outlet />
      <NavLink 
      to="/todo"
      >Todo</NavLink>
    </>
  )
}

export default App
