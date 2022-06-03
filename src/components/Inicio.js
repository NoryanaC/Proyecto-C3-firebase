import React from 'react'
import './style/styleInicio.css'
import ImagenTres  from './img/help.png'
import ImagenUno from './img/inicio.png'
import ImagenDos from './img/sr.png'

const Inicio = ({autenticacionUser}) => {
  const fech= new Date().toLocaleDateString()
  return (
    <div className='div-inicio'>
        {/* {
          autenticacionUser !==false?(<div className="alert alert-warning text-center" role="alert">
         Estás dentro de tu cuenta. 
        </div>):''
        } */}
        <div className='container'>
          <h2 className='display-1 text-center mb-4' >BIENVENIDO</h2>
          <div className="p-3 mb-2 bg-secondary text-white text-center" >
          <h4 className='font-monospace text-center' >MESA DE SOPORTE</h4>
          </div>
          
            <div class="row align-items-center">
                
                <div class="col border">
                  <div className='text-center mb-4' >
                    <h3>Facilita la comunicación entre el equipo y el soporte</h3>
                  </div>
                  
                  <div class="row align-items-center">
                    <img src={ImagenTres} alt='Imagen'></img>
                  </div>
                </div>

                <div class="col border-md-4">
                  <div className='text-center mb-4'>
                    <h3>Atiende de manera inmediata incidentes inesperados </h3>
                  </div>
                
                  <div class="row align-items-center">
                    <img src={ImagenUno} alt='Imagen'></img>
                  </div>
                </div>

                <div class="col border">
                  <div className='text-center mb-4'>
                    <h3> Brinda soporte a todas las areas de la organización</h3>
                  </div>
                
                  <div class="row align-items-center">
                    <img src={ImagenDos} alt='Imagen'></img>
                </div>
              </div>
          </div>
        </div>
    </div>
  )
}

export default Inicio