import React from 'react'
import ReactDOM from 'react-dom'

const APIs1 = () => {

     const APIsElements = [
          {
              name: 'IEA 50',
              link: 'https://www.iea.org/data-and-statistics/data-tools/renewable-energy-progress-tracker' 
          },
          {

          },
          {

          }
     ]

     const fuentesElements = [
          {
               name: 'FIDA',
               date: '2024',
               link: 'https://www.ifad.org/es/investing-in-rural-people#:~:text=El%20hambre%2C%20la%20pobreza%2C%20el,y%20el%20desarrollo%20rural%20inclusivo.'
          }
     ]

     return(
          <div className='apis1-section'>
               <div className='apis'>
                    <h1>APIs</h1>
                    
               </div>
               <div className='fuentes'>
                    <h1>Fuentes</h1>
                    <ul>
                         {fuentesElements.map((element, index) => (
                              <li key={index}>{element.name}({element.date}): {element.link}</li>
                         ))}
                    </ul>
               </div>    
          </div>
     )
}

ReactDOM.render(
     <APIs1 />,
     document.getElementById('root')
)

export default APIs1