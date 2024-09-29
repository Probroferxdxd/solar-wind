import React from 'react'
import ReactDOM from 'react-dom'

const Product3 = () => {
     return(
          <div className='product-3'>
               <div className='product-3-main'>
                    <div className='header-product-3'>
                         <h1>Galeria de imágenes</h1>
                    </div>
                    <div className='main-product-3'>

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