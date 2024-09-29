import React, {useEffect, useRef} from 'react'
import ReactDOM from 'react-dom'

const Main2 = () => {
     const sectionRef = useRef(null);
     const sectionRef1 = useRef(null);
   
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
       if (sectionRef1.current) {
         observer.observe(sectionRef1.current);
       }
       return () => {
         if (sectionRef.current) {
           observer.unobserve(sectionRef.current);
         }
         if (sectionRef1.current) {
           observer.unobserve(sectionRef1.current);
         }
       };
     }, []);
   
     return (
       <div className='main-section-2'>
         <div className='text' ref={sectionRef}>
           <h1 style={{ '--i': '0.1s' }}>Indicadores clave de electricidad</h1>
           <p style={{ '--i': '0.2s' }}>
           La electricidad es un recurso esencial para el desarrollo económico y social a nivel global, ya que impulsa la industria, el comercio, la educación y los servicios básicos como la salud, el transporte y la comunicación. Su disponibilidad confiable y asequible mejora la calidad de vida al permitir el acceso a tecnologías y servicios que reducen la pobreza y promueven el bienestar.
           </p>
           <b className='strong' style={{ '--i': '0.3s' }}>Indicadores Globales</b>
           <ul style={{ '--i': '0.4s' }}>
             <li><b>Acceso a electricidad:</b> Se refiere al porcentaje de la población con acceso a la red eléctrica.</li>
             <li><b>Capacidad instalada:</b> Representa la cantidad total de megavatios (MW) que un país puede generar.</li>
             <li><b>Consumo per cápita:</b> Mide el promedio de electricidad consumida por persona en un año.</li>
             <li><b>Fuentes de energía renovables:</b> Incluye el porcentaje de la electricidad que proviene de energías limpias...</li>
           </ul>
         </div>
         <div className='stadistics-1' ref={sectionRef1}>
         <div className='data'>
             <div className='information'>
               <span>Participación de las energías renovables en la generación de energía, 2022</span>
               <h3>29%</h3>
             </div>
             <div className='information'>
               <span>Participación de las energías renovables en la generación de energía, 2028</span>
               <h3>42%</h3>
             </div>
             <div className='information'>
               <span>Participación de las ERV en la generación de energía, 2022</span>
               <h3>12%</h3>
             </div>
             <div className='information'>
               <span>Participación de las ERV en la generación de energía, 2028</span>
               <h3>25%</h3>
             </div>
             <div className='information'>
               <span>Fase de ERV, 2022</span>
               <h3>-</h3>
             </div>
             <div className='information'>
               <span>Revisión de previsiones de Renovables 2022</span>
               <h3>🡑33%</h3>
             </div>
           </div>
         </div>
       </div>
     );
   };

ReactDOM.render(
     <Main2 />,
     document.getElementById('root')
)

export default Main2