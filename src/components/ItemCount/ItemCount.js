import './ItemCount.css';

import React from 'react';

const ItemCount = ({count, countHandler, addToCart}) => {

    const itemCount_button_add_handler = () => {
        countHandler( 1 );
    }

    const itemCount_button_remove_handler = () => {
        countHandler( 0 );
    }

    return( 
        <div>
            <button onClick={itemCount_button_add_handler} className="ItemCount_button">+</button>
            <p className="ItemCount_text">{count}</p>
            <button onClick={itemCount_button_remove_handler} className="ItemCount_button">-</button>
            { ( count > 0 ) ? <button onClick={addToCart}>Agregar al carrito</button> : ""}
        </div>        
    );
};

export default ItemCount;