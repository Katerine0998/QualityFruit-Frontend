import React from "react"
import { Routes, Route } from "react-router-dom"
import Login from '../pages/Login'
import Dashboard from '../pages/Dashboard'
import Usuarios from '../pages/Internas/Usuarios'
import Movimientos from '../pages/Internas/Movimientos'
import Inventario from '../pages/Internas/Inventario'
import Frutas from '../pages/Internas/Frutas'



const Routers = () => {
  return (
      <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/int/usuarios" element={<Usuarios />} />
          <Route path="/int/frutas" element={<Frutas />} />
          <Route path="/int/movimiento" element={<Movimientos />} />
          <Route path="/int/inventario" element={<Inventario />} />
      </Routes>
    
  )
}

export default Routers
