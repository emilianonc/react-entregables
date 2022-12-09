import "./ItemListContainer.css";
import React, {useState, useEffect} from 'react';

import ItemList from '../ItemList/ItemList.js';
import Loader from '../Loader/Loader.js'
import productos from '../../data/productos.js';

const ItemListContainer = () => {
    
    const [data, setData] = useState([])
    const [estado, setEstado] = useState();
    
    useEffect( () => {
        const leer_BD = new Promise( (resolve, reject) => {
            setTimeout( () => resolve( productos ), 2000 ); // Simulo la demora de la lectura en BD
            setEstado(true);
        });

        leer_BD.then( ( res ) => {
            setData(res);
            setEstado(false);
        });

    }, []); // Se ejecuta cuando se monta el componente

    return(
        <div className='itemListContainer_div'>
            { estado ? <Loader/> : <ItemList data={data}/>}
        </div>
    );
};

export default ItemListContainer;