import React from 'react'
import ReactDOM from 'react-dom'

const AboutUs3 = () => {

     const team = [
          {
               name: "Soluciones Innovadoras",
               info: "Ofrecemos soluciones innovadoras que combinan tecnología avanzada y personalización para optimizar los procesos de nuestros clientes. Nuestras soluciones están diseñadas específicamente para adaptarse a las necesidades únicas de cada empresa, alineándonos con las últimas tendencias del mercado para garantizar que nuestros clientes mantengan una ventaja competitiva en su sector.",
               icon: <i class="fa-solid fa-lightbulb"></i>
          },
          {
               name: "Soluciones Eficientes",
               info: "Ofrecemos soluciones eficientes que optimizan recursos y maximizan la productividad de las empresas. Nuestras estrategias están enfocadas en reducir tiempos de operación, minimizar costos y mejorar los resultados sin comprometer la calidad.",
               icon: <i class="fa-solid fa-chart-simple"></i>
          },
          {
               name: "Ecoamigables",
               info: "Nuestras prácticas sostenibles incluyen el uso de materiales reciclables, la optimización energética y la minimización de residuos. Nos enfocamos en integrar tecnologías limpias y procesos responsables, alineados con las normativas ambientales, para que las empresas puedan operar de manera más ecológica y contribuir al bienestar del planeta, mientras mantienen su competitividad en el mercado.",
               icon: <i class="fa-solid fa-leaf"></i>
          },
     ]

     return(
          <div className='about-us-3'>
               <div className='section'>
                    {team.map((element, index) => (
                         <div className='users-section'key={index}>
                              <div className='header-users'><h5>{element.name}</h5>{element.icon}</div>
                              <span>{element.info}</span>
                         </div>
                    ))}
               </div>
          </div>
     )
}

export default AboutUs3