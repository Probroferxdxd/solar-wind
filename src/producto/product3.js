import React from 'react'
import ReactDOM from 'react-dom'

const Product3 = () => {

     const imagenes = [
          {
              id : 1
          },
          {
               id : 2
           },
           {
               id : 3
           },
           {
               id : 4
           },
           {
               id : 5
           },
           {
               id : 6
           },
           {
               id : 7
           },
           {
               id : 8
           },
           {
               id : 9
           },
           {
               id : 10
           },
           {
               id : 11
           },
           {
               id : 12
           },
     ]

     return(
          <div className='product-3'>
               <div className='product-3-main'>
                    <div className='header-product-3'>
                         <h1>Galeria de imágenes</h1>
                    </div>
                    <div className='main-product-3'>
                         {imagenes.map((element) => (
                              <div className='pictures-elements' style={{background: `url('../src/picture-gallery/imagen-1.jpg');`}}></div>
                         ))}
                    </div>
               </div>
               <div className='background-product-3'></div>
          </div>
     )
}

ReactDOM.render(
     <Product3 />,
     document.getElementById('root')
)

export default Product3