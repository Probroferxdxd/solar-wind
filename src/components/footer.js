import React from 'react'
import ReactDOM from 'react-dom'

const Footer = () => {
     return(
          <footer>
               <div className='footer-top footer-section'>
                    <div className='about-us-section'>
                         <h3>Sobre Nosotros</h3>
                         <p>Somos un grupo de estudiantes de Innova Schools elaborando este 
                              proyecto con el fin de que familias del pueblo de Puruchuco y 
                              de otras zonas rurales tengan acceso a energia mediante el uso 
                              de energias renovables las cuales pueden ser aprovechadas en 
                              estos lugares.</p>
                    </div>
                    <div className='links-section'>
                         <h3>Enlaces rápidos</h3>
                         <ul>
                              <li><a href='#'>Inicio</a></li>
                              <li><a href='#'>Producto</a></li>
                              <li><a href='#'>Sobre Nosotros</a></li>
                              <li><a href='#'>APIs</a></li>
                         </ul>
                    </div>
                    <div className='contact-section'>
                         <h3>Contactos</h3>
                         <ul>
                              <li>Email: sumaqenergia@gmail.com</li>
                              <li>Número: +51 958040785</li>
                              <li>Dirección: Jirón Cailloma 482, Lima 15001, Perú.</li>
                         </ul>
                    </div>
                    <div className='social-media-section'>
                         <h3>Siguenos en:</h3>
                         <ul>
                              <li><a href='#'>Facebook</a></li>
                              <li><a href='#'>Twitter</a></li>
                              <li><a href='#'>Instagram</a></li>
                         </ul>
                    </div>
               </div>
               <div className='footer-bottom footer-section'>
                    <div className='copyright-section'>
                         <span>© 2024 Sumaq Energía. Todos los derechos reservados.</span>
                    </div>
               </div>
          </footer>
     )
}

ReactDOM.render(
     <Footer />,
     document.getElementById('root')
)

export default Footer