import React, {useState, useEffect, useRef} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './animations.css'
import Logo from './pictures/logo.png'
import RenderApp from './rendering/renderapp';
import Main1 from './inicio/main1';
import Main2 from './inicio/main2';
import Main3 from './inicio/main3';
import Product1 from './producto/product1';
import ProductBenefit from './producto/product-beneficios'
import Product2 from './producto/product2';
import Product3 from './producto/product3';
import AboutUs1 from './about-us/about-us-1';
import AboutUs2 from './about-us/about-us-2';
import APIs1 from './apis/apis1';
import Footer from './components/footer';



const App = () => {
  // Elementos para cada sección
  const elementosDeInicio = [<Main1 />, <Main2 />, <Main3 />]; // El grupo de contenedores del inicio 
  const elementosDeProducto = [<Product1 logo="Sumaq energía" artefacto="Solar Wind"/>, <ProductBenefit />,<Product2 />, <Product3 />];
  const elementosDeSobreNosotros = [<AboutUs1 />, <AboutUs2 />]
  const elementosDeAPIs = [<APIs1 />]; // EL grupo de contenedores de la sección Producto

  
  const [seccionActiva, setSeccionActiva] = useState('Inicio'); //La sección que se presentará primero
  const [animacionActiva, setAnimacionActiva] = useState(false); // La animación de la transición
  
  const handleClick = (element) => {
    // Activar la animación al hacer clic
    setAnimacionActiva(true);
    // Desactivar la animación después de 2 segundos al igual que luego de estos, se añadira la sección cliqueada
    setTimeout(() => {
      setSeccionActiva(element);
      setAnimacionActiva(false);
    }, 1000);
  };
  
  // Controlar qué sección mostrar
  const renderSeccion = () => {
    if (seccionActiva === 'Inicio') { //Si el valor de sección activa es inicio, entonces...
      return elementosDeInicio.map((element, index) => ( //Devolvera al contenedor Main todo los elementos del inicio
        <div key={index}>{element}</div> //Cada elemento estara ordenados por index y dentro de element estan cada uno de los elementos del inicio
      )); //Fin del condicional
    } else if (seccionActiva === 'Producto') { //Pero si el valor de sección activa es producto, entonces...
      return elementosDeProducto.map((element, index) => ( //Devolvera al contenedor Main todos los elementos del producto
        <div key={index}>{element}</div> //Cada elemento esta ordenado por index y dentro del elemento estan cada uno de los elementos del producto
      ));
      
    }

    else if (seccionActiva === '¿Quiénes Somos?'){
      return elementosDeSobreNosotros.map((element, index) => (
        <div key={index}>{element}</div>
       ) )
    }

    else if (seccionActiva === 'APIs') { //Pero si el valor de sección activa es producto, entonces...
      return elementosDeAPIs.map((element, index) => ( //Devolvera al contenedor Main todos los elementos del producto
        <div key={index}>{element}</div> //Cada elemento esta ordenado por index y dentro del elemento estan cada uno de los elementos del producto
      ));
      
    }
    return null; //si es que no coincide nada, el valor que devuelve sera nulo 
  };
  return (
    <div className='container'>
      <RenderApp animacionActiva={animacionActiva}/>
      <header>
        <div className='header-1'>
          <div className='logo'>
            <img src={Logo}/>
          </div>
        </div>
        <div className='header-2'>
          <ul>
            {["Inicio", "Producto", "¿Quiénes Somos?", "APIs"].map((element, index) => (
              <li key={index}>
                <a href='#' onClick={() => {
                    handleClick(element)
                }}>
                  {element}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </header>
      <main>
        {
        // El valor de la función es el valor de retorno
        renderSeccion()}
      </main>
      <Footer />
    </div>
  );
};





ReactDOM.render(
  <App>
  </App>,
  document.getElementById('root')
)

