import './ItemDetailContainer.css';
import {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';

import ItemDetail from '../ItemDetail/ItemDetail.js';
import Loader from '../Loader/Loader.js'
import productos from '../../data/productos.js';

import { CartProvider } from '../CartContext/CartContext';

const ItemDetailContainer = () => {

    const {producto_id} = useParams();

    const [data, setData] = useState([]);
    const [estado, setEstado] = useState();
    
    useEffect( () => {
        const leer_BD = new Promise( (resolve, reject) => {
            setTimeout( () => resolve( productos ), 2000 ); // Simulo la demora de la lectura en BD
            setEstado(true);
        });

        leer_BD.then( (res) => {
            setData( res.find( prod => prod.id === parseInt( producto_id )) );
            setEstado(false);
        } );

    }, []); // Se ejecuta cuando se monta el componente

    return( 
        <div className='itemDetalContainer_div'>
            <CartProvider>
                {estado ? <Loader/> : <ItemDetail data={data}/>} 
            </CartProvider>
        </div>
    );
};

export default ItemDetailContainer;