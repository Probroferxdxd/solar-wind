import React from 'react'
import ReactDOM from 'react-dom'

const Main1 = () => {
     return(
       <div className='main-section'>
         <div className='background'></div>
         <h1>Desafíos Energéticos en Zonas Rurales de Perú: Una Perspectiva Crítica</h1>
         <p>En muchas regiones rurales de Perú, la falta de acceso a energía eléctrica 
          sigue siendo una realidad dura y persistente. Pueblos rurales como Puruchuco 
          se encuentran marginados por factores sociales, culturales y económicos</p>
       </div>
     )
   }

ReactDOM.render(
     <Main1 />,
     document.getElementById('root')
)

export default Main1