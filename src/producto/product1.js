import React, {useState} from 'react'
import ReactDOM from 'react-dom'

const Product1 = ({logo, artefacto}) => {

     const [isModalOpen, setIsModalOpen] = useState(false)

     const openModal = () => {
          setIsModalOpen(true)
     }

     const closeModal = () => {
          setIsModalOpen(false)
     }

     return(
          <div className='product-1'>
               <div className='background'></div>
               <div className='information-section'>
                    <h1>Solar Wind</h1>
                    <p>El pueblo de Puruchuco enfrenta el problema de la falta de energía en 
                         la zona, es por ello que <strong>{logo}</strong> ha elaborado un artefacto de bajo costo 
                         que va a implementar por primera vez el uso de energias renovables en 
                         el pueblo rural, el cual tiene el nombre de<strong>{artefacto}</strong> y a continuación 
                         les brindaremos más información. 
                    </p>
                    <button onClick={openModal}>Más información</button>         
               </div>
               <div className='picture-section'>
                    <div className='picture'></div>
               </div>
               <div className='modal' style={{display: isModalOpen === true ? 'flex' : 'none' }}>
                    <div className='background-modal' style={{zIndex: -1}}></div>
                    <div className='information-section'style={{zIndex: 3}}>
                         <h1>Solar Wind</h1>
                         <p>Solar Wind es un aerogenerador con paneles solares que brinda energía a través de los tomacorrientes en la parte inferior de la torre, esto permite a los pobladores recargar las baterias que usan para hacer funcionar sus artefactos y electrodomésticos, la batería que estara dentro del aerogenerador almacenará la energía eléctrica para que cuando algún residente conecte algo en el tomacorriente o puerto USB, empiece a vaciar la batería, se piensa añadir Fibra de carbono a las aspas y para la torre Acero reciclado para brindar un pequeño aporte con el medio ambiente y hacer de este producto ecoamigable.</p>
                         <button onClick={closeModal}>Cerrar</button>
                    </div>
               </div>
          </div>
     )
}


ReactDOM.render(
     <Product1 />,
     document.getElementById('root')
)

export default Product1