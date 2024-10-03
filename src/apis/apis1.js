import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

const APIs1 = () => {
     const [activeElement, setActiveElement] = useState(null);
     
     const handleClick = (index) => {
          const newElement = fuentesElements[index];
          setActiveElement(newElement);
     }

     const fuentesElements = [
          {    
               active: false,
               name: "Desarrollo centrado en las personas",
               author: 'FIDA',
               date: '2024',
               link: 'https://www.ifad.org/es/investing-in-rural-people#:~:text=El%20hambre%2C%20la%20pobreza%2C%20el,y%20el%20desarrollo%20rural%20inclusivo.'
          },
          {    
               active: false,
               name: "Renewable Energy Progress Tracker",
               author: "IEA 50",
               date: "4 Jun 2024",
               link: "https://www.iea.org/data-and-statistics/data-tools/renewable-energy-progress-tracker"
          },
          {
               active: false,
               name: "Electricidad para las comunidades rurales en el Perú",
               author: "Grupo Banco Mundial",
               date: "Septiembre 24, 2014",
               link: "https://www.bancomundial.org/es/results/2014/09/24/peru-brings-electricity-to-rural-communities"
          }
     ];

     return (
          <div className='apis1-section'>
               <div className='apis'>
                    <h1>Fuentes de información</h1>
                    <p>Aca se muestra las fuentes de información empleadas para cada sección del trabajo</p>
               </div>
               <div className='fuentes'>
                    <div className='select-links-section'>
                         <h1>Fuentes</h1>
                         <ul className='list-source'>
                              {fuentesElements.map((element, index) => (
                                   <li key={index} onClick={() => handleClick(index)}>
                                        <i className="fa-solid fa-book-open"></i>{element.name}
                                   </li>
                              ))}
                         </ul>
                    </div>
                    <div className='display-links-section'>
                         {activeElement && (
                              <ul>
                                   <li><strong>Name:</strong> {activeElement.name}</li>
                                   <li><strong>Author:</strong> {activeElement.author}</li>
                                   <li><strong>Date:</strong> {activeElement.date}</li>
                                   <li><strong>Link:</strong> <a href={activeElement.link} target="_blank" rel="noopener noreferrer">{activeElement.link}</a></li>
                              </ul>
                         )}
                    </div>
               </div>    
          </div>
     );
}

ReactDOM.render(
     <APIs1 />,
     document.getElementById('root')
);

export default APIs1;
