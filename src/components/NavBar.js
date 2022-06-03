import React from 'react'
import { Link, useNavigate} from 'react-router-dom'
import { auth } from '../firebase'
import logoReact  from './img/logo.png'


const NavBar = ( {autenticacionUser} ) => {

  const navigate= useNavigate()

  const cerrarSesion=()=>{
    auth.signOut()
    .then(()=>{
      navigate('/login')
    })
  }

  return (
    
  <header className='navbar navbar-light'>
    <Link to='/' className='navbar-brand'>{<img src={logoReact} alt='Imagen' width='50' height='50'></img>}</Link>
     <nav className='d-grid gap-2 d-md-flex justify-content-md-end'>
        {
          autenticacionUser === false ?  (<Link to='/login' className='btn btn-outline-dark me-md-2'>Acceder</Link>): (<Link to='/admin' className='btn btn-outline-dark '>Admin</Link>)
        }
        {
          autenticacionUser !== false ? (<button className='btn btn-outline-dark me-md-2'
          onClick={()=>cerrarSesion()}>Cerrar sesión</button>):null
        }
      </nav>
  </header>
  )
}

export default NavBar