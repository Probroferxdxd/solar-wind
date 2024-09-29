import React from 'react'
import ReactDOM from 'react-dom'

const ProductBenefit = () => {

     const beneficiosArray = [
          {
               icon: <i class="fa-solid fa-leaf"></i>,
               title: "Es Deseable",
               information: "Resuelve la necesidad del usuario y se alinea con sus expectativa. El generador eólico y los paneles solares proporciona energía autónoma, mejorando la calidad de vida."
          },
          {
               icon: <i class="fa-solid fa-gear"></i>,
               title: "Es Sostenible",
               information: "Se puede mantener en el tiempo, utilizando recursos renovables.	Aprovecha el viento como recurso limpio y utiliza materiales reciclables ."
          },
          {
               icon: <i class="fa-solid fa-pen-ruler"></i>,
               title: "Es Realizable",
               information: "Es posible desarrollarla con los recursos disponibles en la comunidad.	El diseño es simple y accesible, permitiendo su construcción con materiales locales."
          },
          {
               icon: <i class="fa-solid fa-lightbulb"></i>,
               title: "Es Innovador",
               information: "Brinda una experiencia nueva al usuario, integrando tecnologías modernas.Promueve el uso de energías limpias y la autogestión energética en comunidades de bajos recursos. Además, contará con un diseño compacto y ligero que facilita su transporte, complementando diversas fuentes de energía renovable (solar). Incluirá puertos USB para facilitar la carga de dispositivos electrónicos."
          }
     ]

     return(
          <div className='benefits'>
               <h1>¿Por qué Solar Wind?</h1>
               <ul>
                    {beneficiosArray.map(element => (
                         <li>
                              <div className='header-section-li'>
                                   <span>{element.icon}</span>
                                   <h4>{element.title}</h4>
                              </div>
                              <div className='main-section-li'>
                                   <p>{element.information}</p>
                              </div>
                         </li>
                    ))}
               </ul>
          </div>
     )
}

ReactDOM.render(
     <ProductBenefit />,
     document.getElementById('root')
)

export default ProductBenefit