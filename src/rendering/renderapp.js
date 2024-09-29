import React, {useEffect} from 'react'
import ReactDOM from 'react-dom'
import Logo from '../pictures/short-logo.png'

const RenderApp = ({ animacionActiva }) => {

     useEffect(() => {
          // Esto se ejecuta cuando `animacionActiva` cambia
          if (animacionActiva) {
            // Puedes hacer algo aquí si es necesario cuando la animación está activa
          }
        }, [animacionActiva]);

     return(
       <div className={
          //tiene la clase de render-section y se añadira la clase activo si es que animacionActiva tiene el valor verdadero
          `render-section ${animacionActiva ? 'activo' : ''}`}>
          
          <div className='part-1 partes'></div>
          <div className='logo-symbol'>
               <img src={Logo}/>
          </div>
          <div className='part-2 partes'></div>
       </div>
     )
   }

ReactDOM.render(
     <RenderApp />,
     document.getElementById('root')
)

export default RenderApp
