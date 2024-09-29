import React from 'react'
import ReactDOM from 'react-dom'

const Product2 = ({logo, artefacto}) => {

     const ideas = [
          {
               titulo: "Idea 1",
               informacion: "Para que nuestro producto llegara a ser como es ahora, tuvo que pasar por distintas etapas, debido a que aspectos como la funcionalidad, la sostenibilidad y la innovación no se consideraban del todo."
          },
          {
               titulo: "Idea 2",
               informacion: "En primer lugar, pensamos en elaborar aerogeneradores domésticos para cada vivienda y asi, apoyar a todo el pueblo, sin embargo, al realizar una investigación más profunda, nos percatamos que producia menos energia de la que se esperaba, es por ello que pasamos a la siguente idea."
          },
          {
               titulo: "Idea 3",
               informacion: "Un centro de aerogeneradores no era una mala idea, la energía que producirian estos se usaria cuando por el pueblo, ocurra un corte de luz, no obstante, al percatarnos de los precios de estos descartamos inmediatamente la idea."
          },
          {
               titulo: "Idea 4",
               informacion: "Aerogeneradores de plástic hubiera sido una buena idea si no hubieramos contando la eficacia del producto y el costo de producción, algunas ideas que se nos venian a la mente eran descartadas, hasta que finalmente..."
          }
     ]

     return(
          <div className='product-2'>
               <div className='product-2-main'>
                    <h1>Conectando Comunidades: Desarrollo de un Prototipo de Energía Limpia para Zonas Aisladas</h1>
                    <ul>
                         {ideas.map(element => (
                              <li>
                                   <div className='information-section'>
                                        <h3>{element.titulo}</h3>
                                        <p>{element.informacion}</p>
                                   </div>
                              </li>
                         ))}
                    </ul>
               </div>
               <div className='background-product-2'></div>
          </div>
     )
}


ReactDOM.render(
     <Product2 />,
     document.getElementById('root')
)

export default Product2