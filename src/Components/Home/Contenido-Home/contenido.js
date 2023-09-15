import React from 'react'
import img from "../../../assets/img/imagen-inicio.png"
import Typed from 'typed.js';
export function Contenido() {
    // Create reference to store the DOM element containing the animation
    const el = React.useRef(null);

    React.useEffect(() => {
        const typed = new Typed(el.current, {
            strings: ["Programador Web", "Desarrollador Banckend", "Ingeniero en Sistemas"],
            typeSpeed: 100,
            backSpeed: 100,
            backDelay: 1000,
            loop: true
        });

        return () => {
            // Destroy Typed instance during cleanup to stop animation
            typed.destroy();
        };
    }, []);

    return (
    /* diseño de la seccion de home */
<section className="home" id="home">
    <div className="contenido-home">
        <h3>Bienvenido, Mi nombre es: </h3>
        <h1>Francisco Juan Tellez</h1>
              <h3>Y Soy un <span ref={el}></span></h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
             Consequatur neque voluptatibus magnis
             facilis quos, eveniet incidunt quasi, magnam,
            minus amet magni laborum? Deleniti.</p>
        
        <div className="redes-sociales">
                  <a href="/" style={{ '--i': 7 }}> 
                <i className='bx bxl-linkedin'></i> 
            </a>
    
                  <a href="/" style={{ '--i': 8 }}>
                <i className='bx bxl-github'></i>
            </a>
    
                  <a href="/" style={{ '--i': 9 }}> 
                <i className='bx bxl-facebook' ></i>
            </a>
        </div>
    
        <a href="/" className="btn">Descargar CV</a>  
    </div>

    <div className="imagen-inicio">
        <img src={img} alt='img'/>
    </div>
    
</section>
  )
}
