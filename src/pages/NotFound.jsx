import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className='container text-center'>
        <h1>404 - Página no encontrada</h1>
        <p>La página que estás buscando no existe.</p>
        <Link to="/" className='btn btn-success'>Ir a la pagina principal</Link>
    </div>
  )
}

export default NotFound