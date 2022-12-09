import './Home.css';

import home_01 from '../../images/home_01.png';

const Home = () => {
    return( 
        <div>
            <h2 className='home_h2_center'> Bienvenido a la web de Pantuflas Pear! </h2>

            <img className='home_img' src={home_01}/>

            <h2 className='home_h2_left'> Acerca de nosotros: </h2>

            <p className='home_p'>
                Quienes formamos parte de Pear nos encontramos comprometidos con el concepto de calidad, 
                como principio fundamental para la fabricación de nuestros productos y el desarrollo de nuestra empresa.
            </p>
            <p className='home_p'>
                    Buscamos mejorar continuamente nuestros diseños y renovar la oferta de artículos.
            </p>
            <p className='home_p'>
                Las capelladas y plantillas de nuestras pantuflas están íntegramente realizadas en tela de punto de algodón, 
                lo cual garantiza la suavidad y adaptabilidad a cada tipo de pie.
            </p>
        </div>
    );
};

export default Home;