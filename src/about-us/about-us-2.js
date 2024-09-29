import React from 'react'
import ReactDOM from 'react-dom'

const AboutUs2 = () => {

     const team = [
          {
               name: "Fernando Gomez",
               info: "Lider",
               icon: null
          },
          {
               name: "Anadara Rivera",
               info: "Secretaria",
               icon: null
          },
          {
               name: "Gerard Bazán",
               info: "Evaluador",
               icon: null
          },
          {
               name: "Fernando Bullon",
               info: "Coordinador",
               icon: null
          },
          {
               name: "Regina Bazán",
               info: "Temporizador",
               icon: null
          },
     ]

     return(
          <div className='about-us-2'>
               <div className='section'>
                    {team.map((element, index) => (
                         <div className='users-section'key={index}>
                              <div className='header-users'><h5>{element.name}</h5></div>
                              <span>{element.info}</span>
                         </div>
                    ))}
               </div>
          </div>
     )
}

export default AboutUs2