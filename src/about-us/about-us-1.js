import React from 'react'
import ReactDOM from 'react-dom'

const AboutUs1 = () => {

     const icons = [
       <i className="fa-solid fa-solar-panel"></i>,
       <i className="fa-solid fa-leaf"></i>,
       <i className="fa-solid fa-cloud"></i>,
       <i className="fa-solid fa-droplet"></i>,
       <i className="fa-solid fa-gears"></i>,
       <i className="fa-solid fa-users"></i>
     ]
   
        return(
             <div className='about-us-1'>
               <div className='card'>
                  <h1>Sumaq Energía</h1>
                  <p>Sumaq Energía es un equipo de estudiante de la institución educativa Innova School que buscan brindar una solución tecnológica ante la problemática de la escesez de energía en la provincia de Puruchuco, durante 2 meses hemos venido evaluando
                  la mejor propuesta ante esta problemárica, descartando idea tras idea</p>
                  <button>Más información</button>
               </div>
               <div className='icons-section' style={{color: "#fff"}}>
                 {icons.map((element, index) => (
                   <div className='icons' key={index}>
                     {element}
                   </div>
                 ))}
               </div>
             </div>
        )
   
   }
export default AboutUs1