import './ItemDetail.css';
import { useState, useContext } from 'react';

import ItemCount from '../ItemCount/ItemCount.js';
import {CartContext} from '../CartContext/CartContext.js'

const ItemDetail = ({data}) => {

    // Almacena la cantidad de items del producto que se ve en el contador
    const [count, setCount] = useState(0);

    // Verifica que la cantidad del contador se encuentre entre 0 y stock
    const count_handler = ( add ) => {
        if( ( add == 1 ) )
        {
            if( count < data.stock )
                { setCount( count + 1 ); }
        }
        else
        {
            if( count > 0 )
                { setCount( count - 1 ); }
        }
    };

    // Contiene el contexto del carrito
    const { addItem, deleteItem, clearItems } = useContext(CartContext);

    // Agrega el item al carrito
    const add_to_cart = () => {
        addItem();    
    }
    
    return( 
        <div className='itemDetail_div'>

            <img className='itemDetail_img' src={data.img}/>

            <div className='itemDetail_div_text'>
                <p className='itemDetail_p'> <b> {data.nombre} </b> </p>
                <p className='itemDetail_p'> Modelo: {data.modelo} </p>
                <p className='itemDetail_p'> Categoria: {data.categoria} </p>
                <p className='itemDetail_p'> Estacion: {data.estacion} </p>
                <p className='itemDetail_p'> Talles: {data.talles} </p>
                <ItemCount count={count} countHandler={count_handler} addToCart={add_to_cart}/>
            </div>
        </div>
    );
};

export default ItemDetail;