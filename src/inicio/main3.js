import React, {useEffect, useRef} from 'react'
import ReactDOM from 'react-dom'

const Main3 = () => {

     const sectionRef = useRef(null)
   
     useEffect(() => {
       const Callback = (entries) => {
         entries.forEach(entry => {
           if (entry.isIntersecting) {
             entry.target.classList.add('visible');
           } else {
             entry.target.classList.remove('visible');
           }
         });
       };
   
       const options = {
         root: null,
         rootMargin: '0px',
         threshold: 0,
       };
   
       const observer = new IntersectionObserver(Callback, options);
   
       if (sectionRef.current) {
         observer.observe(sectionRef.current);
       }
   
       return () => {
         if (sectionRef.current) {
           observer.unobserve(sectionRef.current);
         }
       };
     }, []);
   
     return(
       <div className='main-section-3'>
         <div className='background background-2'></div>  
         <div className='text' ref={sectionRef}>
           <h1 style={{'--i':'0.1s'}}>Problemática</h1>
           <span style={{'--i':'0.4s'}}><i>“Las personas que viven en la provincia de Puruchuco no cuentan con suficiente energía eléctrica para su subsistencia”</i></span>
           <p style={{'--i':'0.25s'}}> Actualmente, las personas que viven en <strong>la provincia de Puruchuco en Perú</strong> enfrentan una serie de problemas estructurales que limitan su desarrollo principalmente por la desigualdad histórica y marginación debido a que se encuentran fuera del alcance del Estado. La necesidad que nuestro proyecto está abordando es la falta de acceso a energía eléctrica, esto limita el desarrollo y la calidad de vida de los habitantes. </p>
         </div>
       </div>
     )
   }

ReactDOM.render(
     <Main3 />,
     document.getElementById('root')
)

export default Main3