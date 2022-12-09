import './Footer.css';

import footer_01 from '../../images/footer_01.png';


const Footer = () => {
    return(
        <footer className='footer'>
            <img className='footer_img' src={footer_01}/>
            <div className='footer_div'>
                <p className='footer_p'>
                    contacto@pantuflaspear.com.ar
                </p>
                <p className='footer_p'>         
                    WhatsApp: 5493416183404
                </p>
                <p className='footer_p'>
                    Rosario · 2000 · Santa Fe - Argentina
                </p>
                <p className='footer_p'>
                    Copyright © 2020 Pear. Todos los derechos reservados.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
