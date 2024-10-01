import React from 'react'
import ReactDOM from 'react-dom'

const AboutUs2 = () => {

     const team = [
          {
               name: "Fernando Gomez",
               info: "Lider",
               icon: <i class="fa-solid fa-flag"></i>
          },
          {
               name: "Anadara Rivera",
               info: "Secretaria",
               icon: <i class="fa-solid fa-square-pen"></i>
          },
          {
               name: "Gerard Bazán",
               info: "Evaluador",
               icon: <i class="fa-solid fa-eye"></i>
          },
          {
               name: "Fernando Bullon",
               info: "Coordinador",
               icon: <i class="fa-solid fa-chart-simple"></i>
          },
          {
               name: "Regina Bazán",
               info: "Temporizador",
               icon: <i class="fa-solid fa-clock"></i>
          },
     ]

     return(
          <div className='about-us-2'>
               <div className='section'>
                    {team.map((element, index) => (
                         <div className='users-section'key={index}>
                              <div className='circle'></div>
                              <div className='header-users'><h5>{element.name}</h5>{element.icon}</div>
                              <span>{element.info}</span>
                         </div>
                    ))}
               </div>
          </div>
     )
}

export default AboutUs2